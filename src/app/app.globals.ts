import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class Globals {
  finnhubToken: string = "bu4f8kn48v6uehqi3cqg";
  finnhunCompanyBySymbolURL: string = "https://finnhub.io/api/v1/search?q=";
  finnhubQuoteBySymbolURL: string = "https://finnhub.io/api/v1/quote?symbol=";
  finnhubSentimentsBySymbolURL = "https://finnhub.io/api/v1/stock/insider-sentiment?from=2022-07-01&to=2022-09-01&symbol=";

  toMonthName(monthNumber: number){
    const date= new Date;
    date.setMonth(monthNumber-1);
    return date.toLocaleDateString('en-US',{month: 'long'});
  }
}

