
var nighteye_activate_code = "if(!document.getElementById('__nighteye_css')) { var body = document.body;\
  var style = document.createElement('style');\
  var rules = '* { background-image: none !important; background-color: #000 !important; color: #5f9655 !important;}';\
  rules += ' .Link--primary { color: #49b579!important; } .Link--secondary { color: #92a9c3!important; }';\
  rules += ' .ytp-gradient-bottom {background-color:#ccc0 !important;} .ytp-play-progress {background-color: #ccc !important;} .ytp-preview {display:none;}';\
  rules += ' article+div{background-color:#ccc0 !important;} article+div>div{background-color:#ccc0 !important;} article+div>div>div{background-color:#ccc0 !important;}';\
  var CSSRules = document.createTextNode('* { background-image: none !important; background-color: #000 !important; color: #5f9655 !important;}');\
  style.type = 'text/css';\
  style.id = '__nighteye_css';\
  if(style.styleSheet) {\
      style.styleSheet.cssText = CSSRules.nodeValue;\
  } else { \
      style.appendChild(CSSRules);\
  }\
  body.appendChild(style); var ret=true; ret} else { var ret=false; ret};"

var nighteye_deactivate_code = "document.body.removeChild(document.getElementById('__nighteye_css'));";

chrome.browserAction.onClicked.addListener(function(tab) {
  // First try activate on this tab
  chrome.tabs.executeScript(tab.id, {
    code: nighteye_activate_code
  }, function(results) { // results[0] is true if style was missing and added, false if was found and removed
      var activate = results[0]; 
      if(!activate) {
        // Deactivate on this tab
        chrome.tabs.executeScript(tab.id, {
          code: nighteye_deactivate_code
        });
      }
      chrome.storage.local.set({ 'darken_active':activate.toString()}); // Store whether it will be active or not for new pages
  });
});
