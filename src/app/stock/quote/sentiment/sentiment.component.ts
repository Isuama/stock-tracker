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
  compSymbol: string;
  compName: string;

  constructor(private activatedRoute: ActivatedRoute,private router: Router,private stockService: StockService) {}
  ngOnInit(): void {
  
   this.activatedRoute.data.subscribe(({ sentiment }) => {

    console.log('hehe',sentiment)
    this.sentiments.push(...sentiment["data"]);
    this.compSymbol = sentiment?.symbol;
    this.compName = sentiment?.compName;
      // this.stockService.getCompany(this.compSymbol)
      // .subscribe((response=>{
      //   this.compName = response.description
      // }))
  })
  }

  navigateToHome() {
    this.router.navigate([''], { relativeTo: this.activatedRoute });
  }
 

}

