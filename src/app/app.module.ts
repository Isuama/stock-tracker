import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TrackerComponent } from "./stock/tracker/tracker.component";
import { StockComponent } from "./stock/stock.component";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { QuoteComponent } from "./stock/quote/quote.component";
import { SentimentComponent } from "./stock/quote/sentiment/sentiment.component";
import { httpInterceptor } from "./interceptors/http-interceptor.service";
import { AppRoutingModule } from './app-routing.module';



@NgModule({

  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [
    AppComponent,
    StockComponent,
    TrackerComponent,
    QuoteComponent,
    SentimentComponent,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}

//1. HttpClientModule added to make API call communication with the internet
