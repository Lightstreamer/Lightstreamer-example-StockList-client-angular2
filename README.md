# Lightstreamer - Basic Stock-List Demo - HTML (Angular) Client

<!-- START DESCRIPTION lightstreamer-example-stocklist-client-angular2 -->

A simple stocklist demo application showing integration between [Angular](http://angular.io/) and the <b>Lightstreamer Web Client library</b>.

## Live Demo

[![screenshot](screenshot_large.png)](https://demos.lightstreamer.com/Angular2Demo)<br>
### [![](http://demos.lightstreamer.com/site/img/play.png) View live demo](https://demos.lightstreamer.com/Angular2Demo)<br>

## Details

This demo displays real-time market data for ten stocks, generated by a feed simulator in a similar way to the [Lightstreamer - Basic Stock-List Demo - HTML Client](https://github.com/Lightstreamer/Lightstreamer-example-StockList-client-javascript#basic-stock-list-demo---html-client).<br>

This page uses the <b>JavaScript Web Client API for Lightstreamer</b> to handle the communications with Lightstreamer Server and uses <b>Angular</b> to display the real-time data pushed by Lightstreamer Server.

A Lightstreamer Subscription is used for subscribing to the data. The onItemUpdate callback implementation fills an object that is used by Angular to populate the HTML.

The demo includes the following client-side functionalities:
* A [Subscription](http://www.lightstreamer.com/docs/client_javascript_uni_api/Subscription.html) containing 10 items, subscribed to in **MERGE** mode.

<!-- END DESCRIPTION lightstreamer-example-stocklist-client-angular2 -->

## Install

If you want to install a version of this demo pointing to your local Lightstreamer Server, follow these steps:

* Note that, as prerequisite, the [Lightstreamer - Stock- List Demo - Java Adapter](https://github.com/Lightstreamer/Lightstreamer-example-Stocklist-adapter-java) has to be deployed on your local Lightstreamer Server instance. Please check out that project and follow the installation instructions provided with it.
* Launch Lightstreamer Server.
* Build a `lightstreamer.js` file from the [online generator](http://www.lightstreamer.com/docs/client_javascript_tools/generator.html) and put it in the `src/js` folder of the demo. Be sure to include the LightstreamerClient, Subscription, ConnectionSharing, and StatusWidget modules and to use the "Use globals" version.
* Change the current directory to the location of the file `package.json` and issue the commands `npm install` (to install Angular libraries) and `npm run build` (to compile Typescript files). Be sure to have installed [Node.js and npm](https://nodejs.org/en/download/) and verify that you are running at least node v5.x.x and npm 3.x.x by running `node -v` and `npm -v` in a console window. 

You can deploy this demo inside Lightstreamer internal web server or in any other web server.
If you choose the former, please create the folders `/pages/demos/[demo_name]` into your Lightstreamer server installation then copy the contents of the `src` folder of this project there.

The client demos configuration assumes that Lightstreamer Server, Lightstreamer Adapters, and this client are launched on the same machine. If you need to target a different Lightstreamer server, please search for this line:
```js
var lsClient = new LightstreamerClient("http://localhost:8080","DEMO");
```
in `app/stock.service.ts` and change it accordingly.

The demo is now ready to be launched.

## See Also

### Lightstreamer Adapters Needed by This Demo Client
<!-- START RELATED_ENTRIES -->

* [Lightstreamer - Stock-List Demo - Java Adapter](https://github.com/Lightstreamer/Lightstreamer-example-Stocklist-adapter-java)
* [Lightstreamer - Reusable Metadata Adapters - Java Adapter](https://github.com/Lightstreamer/Lightstreamer-example-ReusableMetadata-adapter-java)

<!-- END RELATED_ENTRIES -->

### Related Projects

* [Lightstreamer - Basic Stock-List Demo - HTML (AngularJS, ng-grid) Client](https://github.com/Lightstreamer/Lightstreamer-example-StockList-client-angular)
* [Lightstreamer - Stock-List Demos - HTML Clients](https://github.com/Lightstreamer/Lightstreamer-example-Stocklist-client-javascript)

## Lightstreamer Compatibility Notes

- Compatible with Lightstreamer Web Client library version 6.0 or newer.
