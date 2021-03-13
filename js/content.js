var darken = false;

(async () => {

    await import( chrome.extension.getURL('js/nighteye.js') );
    chrome.storage.local.get(['darken_active'], function (result) {

      darken = (result.darken_active === "true"); //string to boolean
      if( darken && !document.getElementById('__nighteye_css') ) {
        Nighteye__ext.activate();
      }

    });

})();
