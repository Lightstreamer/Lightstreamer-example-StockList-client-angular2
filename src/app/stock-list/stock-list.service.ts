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
import { Injectable } from '@angular/core';

declare var LightstreamerClient: any;
declare var Subscription: any;
declare var StatusWidget: any;

@Injectable({
  providedIn: 'root'
})
export class StockListService {

  constructor() { }

  subscribe(items: string[], fields: string[]) {
        const subscription = new Subscription('MERGE', items, fields);
        subscription.setDataAdapter('QUOTE_ADAPTER');

        const lsClient = new LightstreamerClient(
            (document.location.protocol === 'https:' ? 'https' : 'http') + '://push.lightstreamer.com', 'DEMO');
        lsClient.connectionSharing.enableSharing('DemoCommonConnection', 'ATTACH', 'CREATE');
        lsClient.addListener(new StatusWidget('left', '0px', true));
        lsClient.connect();
        lsClient.subscribe(subscription);

        return subscription;
    }
}
