
var nighteye_activate_code = "if(!document.getElementById('__nighteye_css')) { var head = document.body;\
  var style = document.createElement('style');\
  var rules = document.createTextNode('* { background-image: none !important; background-color: #000 !important; color: #5f9655 !important;}');\
  style.type = 'text/css';\
  style.id = '__nighteye_css';\
  if(style.styleSheet) {\
      style.styleSheet.cssText = rules.nodeValue;\
  } else { \
      style.appendChild(rules);\
  }\
  head.appendChild(style); }";

var nighteye_deactivate_code = "if(document.getElementById('__nighteye_css')) { document.body.removeChild(document.getElementById('__nighteye_css')); }";

document.addEventListener('DOMContentLoaded', function() {

  // Controls
  var onOff = document.getElementById('on_off');
  onOff.addEventListener('click', function() {
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, function (tabs) {

        var darken = false;
        chrome.storage.local.get(['darken_active'], function (result) {

            darken = result.darken_active;
            darken = (darken === "true"); //string to boolean
            darken = !darken; // Switch
            chrome.storage.local.set({ 'darken_active':darken.toString()});

            if( darken ) {
              // Activate
              chrome.tabs.executeScript(tabs[0].id, {
                code: nighteye_activate_code
              });
              
            } else {
              // Deactivate
              chrome.tabs.executeScript(tabs[0].id, {
                code: nighteye_deactivate_code
              });
              
            }

        });
        


    });

  }, false);
}, false);