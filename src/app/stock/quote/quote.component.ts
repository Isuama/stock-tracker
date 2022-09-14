import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Quote, Sentiment } from "../stock.model";
import { StockService } from "../stock.service";
import { Globals } from "../../app.globals";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-stock-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"],
})

export class QuoteComponent implements OnInit {
  
  quotes: Observable<Quote[]>;
  sentiments = [];
  // =[
  //   new Quote("TESLA INC", "TSLA", 4.74, 304.42, 299.68, 305.49),
  //   new Quote("APPLE INC", "APPL", -2.5, 202.12, 199.68, 375.89),
  // ];
  constructor(private globals: Globals, private httpClient: HttpClient, public stockService: StockService) {}
  ngOnInit(): void {
    this.quotes = this.stockService.quoteChanged.asObservable();
  }
  
  getSentimentDetails(name:string, symbol: string){
    //console.log(name,symbol);
    console.log(this.getSentiments(symbol));
  }

  getSentiments(symbol: string): Observable<any>{
    return this.httpClient.get(this.globals.finnhubSentimentsBySymbolURL+ symbol);
  }

  getSentiment(objSentiment: Sentiment){
    this.sentiments.push(objSentiment);
    this.stockService.sentimentChanged.next(this.sentiments.slice())
  }
  
}
