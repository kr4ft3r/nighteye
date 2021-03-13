chrome.browserAction.onClicked.addListener(function(tab) {
  if(Nighteye__ext === null)  return; // Class didn't load in time, ignore click, TODO fix with async
  
  // Call switcher script on this tab's page
  chrome.tabs.executeScript(tab.id, {
    code: Nighteye__ext.backgroundSwitcherCode()
  }, function(results) { // results[0] is true if style was missing and added, false if was found and removed
      if(typeof results === 'undefined')  return; // Probably a chrome settings page
      var activate = results[0]; 

      chrome.storage.local.set( { 'darken_active':activate.toString() } ); // Store whether it will be active or not for new pages
  });
});
