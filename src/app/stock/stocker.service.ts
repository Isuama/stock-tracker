import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Company } from "./stock.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class StockService {
  dataURL: string =
    "https://finnhub.io/api/v1/search?q=APPL&token=bu4f8kn48v6uehqi3cqg";
  constructor(private httpClient: HttpClient) {}

  getCompany(): Observable<Company[]> {
    return this.httpClient
      .get<Company[]>(
        "https://finnhub.io/api/v1/search?q=APPL&token=bu4f8kn48v6uehqi3cqg"
      )
      .pipe(
        map((spots) => {
          let spots1 = spots["result"].filter((spot) => {
            spot.symbol == "APPL";
          });
          debugger;
          return spots1["result"]; //.filter((comp) => comp.symbol === "APPL");
        })
      );
  }
  //   // .pipe(
  //   //   map((company) => {
  //   //     return company.filter((c) => c.symbol == "APPL");
  //   //   })
  //   // );
  // }
}

// quote: "https://finnhub.io/api/v1/quote?symbol=AAPL&token=bu4f8kn48v6uehqi3cqg"
