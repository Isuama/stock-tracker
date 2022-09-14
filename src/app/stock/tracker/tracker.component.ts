import { Component } from "@angular/core";

import { OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

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
  quoteChanged = new Subject<Quote[]>();

  public quotes = [];
  //  public quotes = [
  //new Quote("TESLA INC", "TSLA", 4.74, 304.42, 299.68, 305.49),
  //  new Quote("APPLE INC", "APPL", -2.5, 202.12, 199.68, 375.89),
  //];

  constructor(private stockService: StockService) {}
  ngOnInit(): void {}
  onTrackStock(symbol: string) {
    this.stockService.getCompany(symbol).subscribe((response) => {
      this.company = response[0];
      // /let x = this.company.length;
    });
    console.log("got comp", this.company);
    console.log("entered al is:", symbol);

    //get quote details
    this.stockService.getQuote(symbol).subscribe((response) => {
      this.quote = {
        compName: this.company?.description,
        compSymbol: this.company?.symbol,
        changeToday: response.d,
        currentPrice: response.c,
        openingPrice: response.o,
        highPrice: response.h,
      };

      this.addQuote(this.quote);
      console.log("qt is", this.quote);
      console.log(response);
    });
  }

  addQuote(quoteToAdd: Quote) {
    this.quotes.push(quoteToAdd);
    this.quoteChanged.next(this.quotes.slice());
  }
}
