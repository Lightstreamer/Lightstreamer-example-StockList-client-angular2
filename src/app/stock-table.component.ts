/*
Copyright (c) Lightstreamer Srl
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
       http://www.apache.org/licenses/LICENSE-2.0
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
import { Component } from '@angular/core';
import { StockService } from './stock.service';

@Component({
    selector: 'stock-table',
    template: `
        <table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Last</td>
                  <td>Time</td>
                  <td>Change</td>
                  <td>Bid Size</td>
                  <td>Bid</td>
                  <td>Ask</td>
                  <td>Ask Size</td>
                  <td>Min</td>
                  <td>Max</td>
                  <td>Ref.</td>
                  <td>Open</td>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let row of stockService.stocks">
                  <td *ngFor="let field of row; let i=index" 
                      [class.leftAlign]="stockService.fieldNames[i] === 'stock_name'">
                        {{field}}
                   </td>
                </tr>
              <tbody>
           </tbody>
        </table>
        `,
})
export class StockTableComponent {

    constructor(private stockService: StockService) {
        // stockService is injected by Angular 2
    }
    
}