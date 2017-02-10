import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { StockTableComponent } from './stock-table.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, StockTableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
