/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  var angularVer = "4.3.3";
  var rxjsVer = "5.0.1";
  var memwebVer = "0.3.2";
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core@' + angularVer + '/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common@' + angularVer + '/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler@' + angularVer + '/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser@' + angularVer + '/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@' + angularVer + '/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http@' + angularVer + '/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router@' + angularVer + '/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms@' + angularVer + '/bundles/forms.umd.js',

      // other libraries
      'rxjs':                      'npm:rxjs@' + rxjsVer,
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api@' + memwebVer + '/bundles/in-memory-web-api.umd.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
