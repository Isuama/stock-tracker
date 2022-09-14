import { Component, OnInit } from "@angular/core";
import { Quote } from "../stock.model";

@Component({
  selector: "app-stock-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"],
})
export class QuoteComponent implements OnInit {
  public quotes: Quote[];
  //   new Quote("TESLA INC", "TSLA", 4.74, 304.42, 299.68, 305.49, 300.72),
  //   new Quote("APPLE INC", "APPL", -2.5, 202.12, 199.68, 375.89, 100.72),
  // ];

  ngOnInit(): void {}
  //getQuote(symbol: string) {}
}
