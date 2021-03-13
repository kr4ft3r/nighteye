
var darken = false;

chrome.storage.local.get(['darken_active'], function (result) {

    darken = result.darken_active;
    darken = (darken === "true"); //string to boolean

    if( darken && !document.getElementById('__nighteye_css') ) {
      // Activate
      var body = document.body;
      var style = document.createElement('link');
      style.href = chrome.extension.getURL('css/nighteye.css');
      style.type = 'text/css';
      style.rel = 'stylesheet';
      style.id = '__nighteye_css';

      body.appendChild(style);
      
    }

});
