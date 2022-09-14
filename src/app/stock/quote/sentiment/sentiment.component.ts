import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sentiment } from '../../stock.model';
import { StockService } from '../../stock.service';

import { HttpClient } from "@angular/common/http";
import { Globals } from 'src/app/app.globals';

@Component({
  selector: 'app-stock-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css'],
})
export class SentimentComponent implements OnInit {
  
  sentiments: Observable<Sentiment[]>;

  constructor(private globals: Globals, private httpClient: HttpClient, public stockService: StockService) {}
  ngOnInit(): void {
    this.sentiments = this.stockService.sentimentChanged.asObservable();
  }

  // this.sentiments = this.stockService
}

