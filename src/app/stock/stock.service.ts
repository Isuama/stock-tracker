import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Company } from "./stock.model";
import { map } from "rxjs/operators";
import { observableToBeFn } from "rxjs/internal/testing/TestScheduler";
import { Globals } from "../app.globals";

@Injectable({
  providedIn: "root",
})
export class StockService {
  token: string = "bu4f8kn48v6uehqi3cqg";
  constructor(private globals: Globals) {}

  // getCompany(symbol: string): Observable<any> {
  //   return this.httpClient
  //     .get(
  //       "https://finnhub.io/api/v1/search?q=" + symbol + "&token=" + this.token
  //     )
  //     .pipe(
  //       map((response) => {
  //         return response["result"].filter((data) => {
  //           return data.symbol === symbol;
  //         });
  //       })
  //     );
  // }

  getCompany(symbol: string): Observable<any> {
    return this.httpClient
      .get(
        "https://finnhub.io/api/v1/search?q=" + symbol + "&token=" + this.token
      )
      .pipe(
        map((response) => {
          return response["result"].filter((data) => {
            return data.symbol === symbol;
          });
        })
      );
  }

  getQuote(symbol: string): Observable<any> {
    return this.httpClient.get(
      "https://finnhub.io/api/v1/quote?symbol=" +
        symbol +
        "&token=" +
        this.token
    );
  }
}

// quote: "https://finnhub.io/api/v1/quote?symbol=AAPL&token=bu4f8kn48v6uehqi3cqg"
