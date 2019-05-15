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
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { StockListService } from './stock-list.service';

@Component({
    selector: 'app-stock-list',
    templateUrl: './stock-list.component.html',
    styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

    itemNames = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10'];
    fieldNames = ['stock_name', 'last_price', 'time', 'pct_change', 'bid_quantity', 'bid', 'ask', 'ask_quantity',
'min', 'max', 'ref_price', 'open_price'];

    /**
     * <code>stocks</code> is a matrix containing the stock values.
     * Rows represent stocks, while columns represent field values.
     * For example <code>stocks[0][1]</code> is the last_price of item1.
     */
    stocks: string[][];

    // ref is needed to refresh the service's clients when the stock matrix changes
    constructor(private service: StockListService, private ref: ChangeDetectorRef) {
        this.stocks = this.newTable();
    }

    ngOnInit() {
        this.service
            .subscribe(this.itemNames, this.fieldNames)
            .addListener({
                onItemUpdate: (updateObject) => {
                    const itemName = updateObject.getItemName();
                    updateObject.forEachChangedField((fieldName: string, fieldPos: number, val: string) => {
                        const itemIndex = this.itemNames.indexOf(itemName);
                        const fieldIndex = this.fieldNames.indexOf(fieldName);
                        console.assert(itemIndex !== -1);
                        console.assert(fieldIndex !== -1);
                        this.stocks[itemIndex][fieldIndex] = val;
                    });
                    this.ref.detectChanges();
                }
            });
    }

    private newTable() {
        return new Array(this.itemNames.length)
            .fill(null)
            .map(() => new Array(this.fieldNames.length).fill('-'));
    }
}
