
var nighteye_activate_code = "if(!document.getElementById('__nighteye_css')) { var body = document.body;\
      var body = document.body; var style = document.createElement('link');\
      style.href = chrome.extension.getURL('css/nighteye.css');\
      style.type = 'text/css'; style.rel = 'stylesheet'; style.id = '__nighteye_css';\
      body.appendChild(style);\
  body.appendChild(style); var ret=true; ret} else { var ret=false; ret};"

var nighteye_deactivate_code = "document.body.removeChild(document.getElementById('__nighteye_css'));";

chrome.browserAction.onClicked.addListener(function(tab) {
  // First try activate on this tab
  chrome.tabs.executeScript(tab.id, {
    code: nighteye_activate_code
  }, function(results) { // results[0] is true if style was missing and added, false if was found and removed
      if(typeof results === 'undefined')  return; // Probably a chrome settings page
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
