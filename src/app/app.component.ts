import { Component } from '@angular/core';
import { ColDef, GridReadyEvent, GetRowIdFunc, GetRowIdParams, GridApi } from 'ag-grid-community';
import { LightstreamerClient, Subscription, ConsoleLogLevel, ConsoleLoggerProvider, ItemUpdate, StatusWidget } from 'lightstreamer-client-web/lightstreamer.esm';

interface StockItem {
  stock_name: string;
  last_price: number;
  time: string;
  pct_change: number;
  bid_quantity: number;
  bid: number;
  ask: number;
  ask_quantity: number;
  min: number;
  max: number;
  ref_price: number;
  open_price: number;
}

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'stock_name', width: 130 },
    { headerName: 'Last', field: 'last_price', width: 80 },
    { headerName: 'Time', field: 'time', width: 90 },
    { headerName: 'Change', field: 'pct_change', width: 90 },
    { headerName: 'Bid Size', field: 'bid_quantity', width: 90 },
    { headerName: 'Bid', field: 'bid', width: 70 },
    { headerName: 'Ask', field: 'ask', width: 70 },
    { headerName: 'Ask Size', field: 'ask_quantity', width: 100 },
    { headerName: 'Min', field: 'min', width: 80 },
    { headerName: 'Max', field: 'max', width: 80 },
    { headerName: 'Ref.', field: 'ref_price', width: 80 },
    { headerName: 'Open', field: 'open_price', width: 80 },
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    enableCellChangeFlash: true,
    resizable: true,
  };

  // Callback that tells the grid to use the 'stock_name' attribute for IDs
  public getRowId: GetRowIdFunc = (params: GetRowIdParams<StockItem>) =>
    params.data.stock_name;

  // For accessing the Grid's API
  gridApi!: GridApi<StockItem>;

  itemNames = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9', 'item10'];
  fieldNames = ['stock_name', 'last_price', 'time', 'pct_change', 'bid_quantity', 'bid', 'ask', 'ask_quantity', 'min', 'max', 'ref_price', 'open_price'];
  client: LightstreamerClient;

  constructor() {
    LightstreamerClient.setLoggerProvider(new ConsoleLoggerProvider(ConsoleLogLevel.WARN));
    // creates a subscription
    var sub = new Subscription('MERGE', this.itemNames, this.fieldNames);
    sub.setDataAdapter('QUOTE_ADAPTER');
    sub.addListener(this);
    // subscribes to the stock items
    this.client = new LightstreamerClient((document.location.protocol === 'https:' ? 'https' : 'http') + '://push.lightstreamer.com', 'DEMO');
    this.client.subscribe(sub);
    // registers the StatusWidget
    this.client.addListener(new StatusWidget('left', '0px', true));
  }

  // callback for SubscriptionListener.onItemUpdate event
  onItemUpdate(update: ItemUpdate) {
    var item = this.getStockItem(update);
    var row = this.gridApi.getRowNode(item.stock_name);
    if (row) {
      this.gridApi.applyTransaction({update: [item]})
    } else {
      this.gridApi.applyTransaction({add: [item]});
    }
  }

  getStockItem(update: ItemUpdate): StockItem {
    var obj: any = {};
    for (var f of this.fieldNames) {
      var val = update.getValue(f);
      if (f == 'stock_name' || f == 'time') {
        obj[f] = val;
      } else {
        obj[f] = parseFloat(val);
      }
    }
    return obj;
  }

  // callback for GridReadyEvent
  onGridReady(params: GridReadyEvent<StockItem>) {
    this.gridApi = params.api;
    this.client.connect();
  }
}