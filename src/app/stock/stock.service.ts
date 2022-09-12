import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './stock.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  dataURL: string =
    'https://finnhub.io/api/v1/search?q=TSLA&token=bu4f8kn48v6uehqi3cqg';
  constructor(private httpClient: HttpClient) {}

  getCompany(): Observable<any> {
    return this.httpClient
      .get('https://finnhub.io/api/v1/search?q=TSLA&token=bu4f8kn48v6uehqi3cqg')
      .pipe(
        map((spots) => {
          return spots['result'].filter((spot) => {
            return spot.symbol === 'TSLA';
          });
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
