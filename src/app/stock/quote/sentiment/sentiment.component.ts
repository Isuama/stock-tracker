import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Sentiment } from "../../stock.model";
import { StockService } from "../../stock.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-stock-sentiment",
  templateUrl: "./sentiment.component.html",
  styleUrls: ["./sentiment.component.css"],
})
export class SentimentComponent implements OnInit, OnDestroy {
  sentiments: Sentiment[] = [];
  compSymbol: string;
  compName: string;
  sub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private stockService: StockService
  ) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
    this.sub = this.activatedRoute.data.subscribe(({ sentiment }) => {
      this.sentiments.push(...sentiment["data"]);
      this.compSymbol = sentiment?.symbol;
      this.compName = this.stockService
        .getFromLocalStorage()
        .find((x) => x.compSymbol === sentiment.symbol).compName;
    });
  }

  navigateToHome() {
    this.router.navigate([""], { relativeTo: this.activatedRoute });
  }
}
