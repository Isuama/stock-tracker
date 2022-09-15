import { DatePipe } from "@angular/common";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class Globals {
  finnhubToken: string = "bu4f8kn48v6uehqi3cqg";
  finnhunCompanyBySymbolURL: string = "https://finnhub.io/api/v1/search?q=";
  finnhubQuoteBySymbolURL: string = "https://finnhub.io/api/v1/quote?symbol=";
  finnhubSentimentsBySymbolURL = "https://finnhub.io/api/v1/stock/insider-sentiment?from="+ this.getThreeMonthsAgoDate()
   +"&to="+ this.getTodayDate() +"&symbol=";

  constructor(private datePipe: DatePipe){}

  toMonthName(monthNumber: number){
    const date= new Date;
    date.setMonth(monthNumber-1);
    return date.toLocaleDateString('en-US',{month: 'long'});
  }

  getThreeMonthsAgoDate(){
    var d = new Date();
    return (this.datePipe.transform(new Date(
      d.setMonth((d.getMonth() - 2))
    ),'yyyy-MM-dd')
    )
  }
  getTodayDate(){
    return (this.datePipe.transform(new Date(),'yyyy-MM-dd'))
  }
}

