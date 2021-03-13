var Nighteye__ext = (function() {

  var activate = function() { // Activate by adding dark style
      var body = document.body;
      var style = document.createElement('link');
      style.href = chrome.extension.getURL('css/nighteye.css');
      style.type = 'text/css';
      style.rel = 'stylesheet';
      style.id = '__nighteye_css';

      body.appendChild(style);  
  }

  var deactivate = function() { // Deactivate by removing dark style
  	  document.body.removeChild( document.getElementById('__nighteye_css') );
  }

  // Code to be called from background's executeScript, activate and return true if style wasn't present, otherwise deactivate and return false
  var backgroundSwitcherCode = function() {
  	  return "if(!document.getElementById('__nighteye_css')) {\
   Nighteye__ext.activate(); var ret=true; ret }\
   else { Nighteye__ext.deactivate(); var ret=false; ret };";
  }

  return {
  	activate: activate,
    deactivate: deactivate,
    backgroundSwitcherCode: backgroundSwitcherCode
  }

})()