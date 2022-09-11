import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TrackerComponent } from './stock/tracker/tracker.component';
import { StockComponent } from './stock/stock.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, StockComponent, TrackerComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
