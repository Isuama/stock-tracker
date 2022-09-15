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
import { AppRoutingModule } from "./app-routing.module";
import { NumberToMonthPipe } from "./pipes/number-to-month.pipe";
import { DatePipe } from "@angular/common";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [
    AppComponent,
    StockComponent,
    TrackerComponent,
    QuoteComponent,
    SentimentComponent,
    NumberToMonthPipe,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true },
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
