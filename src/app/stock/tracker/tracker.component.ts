import { Component } from "@angular/core";

import { OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { forkJoin, Observable } from "rxjs";

import { Company, Quote } from "../stock.model";
import { StockService } from "../stock.service";
import { Subject } from "rxjs";

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
  ngOnInit(): void {}
  onTrackStock(symbol: string) {

    forkJoin([
      this.stockService.getCompany(symbol),
    this.stockService.getQuote(symbol)]).subscribe((response) => {
  this.quote = {
        compName: response[0].description,
        compSymbol: response[0].symbol,
        changeToday: response[1].d,
        currentPrice: response[1].c,
        openingPrice: response[1].o,
        highPrice: response[1].h,
      };
      console.log(this.quote);
      this.addQuote(this.quote)

  })
  }

  addQuote(quoteToAdd: Quote) {
    this.quotes.push(quoteToAdd);
    this.stockService.quoteChanged.next(this.quotes.slice());
  }
}
