import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { forkJoin } from "rxjs";
import { Company, Quote } from "../stock.model";
import { StockService } from "../stock.service";

@Component({
  selector: "app-stock-tracker",
  templateUrl: "./tracker.component.html",
  styleUrls: ["./tracker.component.css"],
})
export class TrackerComponent implements OnInit {
  company: Company | undefined;
  quote: Quote | undefined;

  quotes = [];
  constructor(private stockService: StockService) {}
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
      this.quote = {
        compName: response[0].description,
        compSymbol: response[0].symbol,
        changeToday: response[1].d,
        currentPrice: response[1].c,
        openingPrice: response[1].o,
        highPrice: response[1].h,
      };
      this.addQuote(this.quote);
    });
  }

  addQuote(quoteToAdd: Quote) {
    this.stockService.saveToLocalStorage(quoteToAdd);
    this.stockService.quoteChanged.next(
      this.stockService.getFromLocalStorage()
    );
  }
}
