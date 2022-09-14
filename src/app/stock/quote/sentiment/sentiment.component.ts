import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sentiment } from '../../stock.model';
import { StockService } from '../../stock.service';

import { HttpClient } from "@angular/common/http";
import { Globals } from 'src/app/app.globals';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-stock-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css'],
})
export class SentimentComponent implements OnInit {
  
  sentiments: Sentiment[]=[];

  constructor(private activatedRoute: ActivatedRoute,private router: Router) {}
  ngOnInit(): void {
   // this.sentiments = this.stockService.sentimentChanged.asObservable();
   this.activatedRoute.data.subscribe(({ sentiment }) => {
    // do something with your resolved data ...
    console.log('hehe',sentiment)
    this.sentiments.push(...sentiment["data"]);
  })
  }

  navigateToHome() {
    this.router.navigate([''], { relativeTo: this.activatedRoute });
  }


  // this.sentiments = this.stockService
}

