import { Component, ElementRef, ViewChild } from "@angular/core";
import { OnInit } from "@angular/core";
import { forkJoin } from "rxjs";
import { Company, Quote } from "../stock.model";
import { StockService } from "../stock.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-stock-tracker",
  templateUrl: "./tracker.component.html",
  styleUrls: ["./tracker.component.css"],
})
export class TrackerComponent implements OnInit {
  @ViewChild("stockInput") input: ElementRef;
  company: Company | undefined;
  quote: Quote | undefined;

  quotes = [];
  constructor(
    private stockService: StockService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    const currentData = this.stockService.getFromLocalStorage();

    if (currentData.length > 0) {
      this.stockService.quoteChanged.next(currentData);
    }
  }
  onTrackStock(symbol: string) {
    forkJoin([
      this.stockService.getCompany(symbol),
      this.stockService.getQuote(symbol),
    ]).subscribe((response) => {
      if (response[0]) {
        if (
          this.stockService
            .getFromLocalStorage()
            .find((x) => x.compSymbol === symbol)?.compName
        ) {
          this.toastr.warning(symbol + " is already present.");
        } else {
          this.quote = {
            compName: response[0].description,
            compSymbol: response[0].symbol,
            changeToday: response[1].d,
            currentPrice: response[1].c,
            openingPrice: response[1].o,
            highPrice: response[1].h,
          };
          this.addQuote(this.quote);
          this.toastr.success("Quote Added");
          this.input.nativeElement.value = "";
        }
      } else {
        this.toastr.warning("Company not found for the given symbol");
      }
    });
  }

  addQuote(quoteToAdd: Quote) {
    this.stockService.saveToLocalStorage(quoteToAdd);
    this.stockService.quoteChanged.next(
      this.stockService.getFromLocalStorage()
    );
  }
}
