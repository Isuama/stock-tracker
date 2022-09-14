import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { Company, Quote, Sentiment } from "./stock.model";
import { map } from "rxjs/operators";
import { observableToBeFn } from "rxjs/internal/testing/TestScheduler";
import { Globals } from "../app.globals";

@Injectable({
  providedIn: "root",
})
export class StockService {
  quoteChanged = new Subject<Quote[]>();
  sentimentChanged = new Subject<Sentiment[]>();

  constructor(private globals: Globals, private httpClient: HttpClient) {}

  getCompany(symbol: string): Observable<any> {
    return this.httpClient
      .get(
        this.globals.finnhunCompanyBySymbolURL + symbol
      )
      .pipe(
        map((response) => {
          return response["result"].find((data) => {
            return data.symbol === symbol;
          });
        })
      );
  }

  getQuote(symbol: string): Observable<any> {
    return this.httpClient.get(this.globals.finnhubQuoteBySymbolURL + symbol
    );
  }

  
}