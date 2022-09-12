import { Component } from '@angular/core';

import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { Company } from '../stock.model';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css'],
})
export class TrackerComponent implements OnInit {
  company: Company[] | undefined;
  private items: Observable<Company[]>;
  constructor(private stockService: StockService) {}
  ngOnInit(): void {
    debugger;
  }
  onTrackStock() {
    this.stockService.getCompany().subscribe(console.log);
  }
}
