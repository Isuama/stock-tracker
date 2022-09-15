import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, BehaviorSubject } from "rxjs";
import { Quote, Sentiment } from "./stock.model";
import { map } from "rxjs/operators";
import { Globals } from "../app.globals";

@Injectable({
  providedIn: "root",
})
export class StockService {
  quoteChanged = new BehaviorSubject<Quote[]>([]);
  sentimentChanged = new Subject<Sentiment[]>();

  constructor(private globals: Globals, private httpClient: HttpClient) {}

  getCompany(symbol: string): Observable<any> {
    return this.httpClient
      .get(this.globals.finnhunCompanyBySymbolURL + symbol)
      .pipe(
        map((response) => {
          return response["result"].find((data) => {
            return data.symbol === symbol;
          });
        })
      );
  }

  getQuote(symbol: string): Observable<any> {
    return this.httpClient.get(this.globals.finnhubQuoteBySymbolURL + symbol);
  }

  getSentiments(symbol: string): Observable<any> {
    return this.httpClient.get(
      this.globals.finnhubSentimentsBySymbolURL + symbol
    );
  }

  saveToLocalStorage(quotes: Quote) {
    const currentQuote = this.getFromLocalStorage();
    currentQuote.push(quotes);
    localStorage.setItem("quotes", JSON.stringify(currentQuote));
  }

  getFromLocalStorage(): Quote[] {
    const existingQuote = localStorage.getItem("quotes");
    const quotes: Quote[] = JSON.parse(existingQuote);
    return quotes;
  }

  deleteFromLocalStorage(symbol: string): Quote[] {
    const existingQuote = this.getFromLocalStorage();
    if (!!existingQuote) {
      const quoteToDelete = existingQuote.filter(
        (x) => x.compSymbol !== symbol
      );
      localStorage.setItem("quotes", JSON.stringify(quoteToDelete));
      return quoteToDelete;
    }
    return [];
  }
}
