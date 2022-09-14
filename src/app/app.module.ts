import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TrackerComponent } from "./stock/tracker/tracker.component";
import { StockComponent } from "./stock/stock.component";

import { HttpClientModule } from "@angular/common/http";
import { QuoteComponent } from "./stock/quote/quote.component";
import { SentimentComponent } from "./stock/quote/sentiment/sentiment.component";
import { Globals } from "./app.globals";
import { StockService } from "./stock/stock.service";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    StockComponent,
    TrackerComponent,
    QuoteComponent,
    SentimentComponent,
  ],
  providers: [Globals, StockService],
  bootstrap: [AppComponent],
})
export class AppModule {}

//1. HttpClientModule added to make API call communication with the internet
