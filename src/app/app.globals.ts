import { Injectable } from "@angular/core";

@Injectable()
export class Globals {
  finnhubToken: string = "bu4f8kn48v6uehqi3cqg";
  finnhunCompanyBySymbolURL: string = "https://finnhub.io/api/v1/search?q=";
  finnhubQuoteBySymbolURL: string = "https://finnhub.io/api/v1/quote?symbol=";
}
