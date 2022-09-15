import { Injectable, NgModule } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterModule,
  RouterStateSnapshot,
  Routes,
} from "@angular/router";
import { StockComponent } from "./stock/stock.component";
import { SentimentComponent } from "./stock/quote/sentiment/sentiment.component";
import { Observable } from "rxjs";
import { Sentiment } from "./stock/stock.model";
import { StockService } from "./stock/stock.service";

@Injectable({ providedIn: "root" })
export class SentimentResolver implements Resolve<Sentiment> {
  constructor(private service: StockService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Sentiment> | Promise<Sentiment> | Sentiment {
    return this.service.getSentiments(route.paramMap.get("symbol"));
  }
}

const appRoutes: Routes = [
  {
    path: "",
    component: StockComponent,
  },
  {
    path: "sentiment/:symbol",
    component: SentimentComponent,
    resolve: {
      sentiment: SentimentResolver,
    },
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
