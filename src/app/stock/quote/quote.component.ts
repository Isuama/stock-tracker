import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Quote, Sentiment } from "../stock.model";
import { StockService } from "../stock.service";
import { Globals } from "../../app.globals";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-stock-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"],
})
export class QuoteComponent implements OnInit {
  quotes: Observable<Quote[]>;
  sentiments = [];
  sentiment: Sentiment | undefined;

  constructor(
    private globals: Globals,
    private httpClient: HttpClient,
    public stockService: StockService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.quotes = this.stockService.quoteChanged.asObservable();
  }

  getSentimentDetails(name: string, symbol: string) {
    this.router.navigate(["/sentiment", symbol], { relativeTo: this.route });
  }

  deleteQuote(symbol: string) {
    this.stockService.quoteChanged.next(
      this.stockService.deleteFromLocalStorage(symbol)
    );
  }
}
