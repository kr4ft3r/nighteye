
        var darken = false;

        chrome.storage.local.get(['darken_active'], function (result) {

            console.log("darken_active:"+result.darken_active);
            darken = result.darken_active;
            darken = (darken === "true"); //string to boolean

            chrome.storage.local.set({ 'darken_active':darken.toString()});

            if( darken && !document.getElementById('__nighteye_css') ) {
              // Activate
              var body = document.body;
              var style = document.createElement('style');
              var rules = "* { background-image: none !important; background-color: #000 !important; color: #5f9655 !important;}"; // General
              // Website specific overrides
              //Github: files and commit messages
              rules += " .Link--primary { color: #49b579!important; } .Link--secondary { color: #92a9c3!important; }";
              //Youtube: video control window
              rules += " .ytp-gradient-bottom {background-color:#ccc0 !important;} .ytp-play-progress {background-color: #ccc !important;} .ytp-preview {display:none;}";
              //Medium: sidebar
              rules += " article+div{background-color:#ccc0 !important;} article+div>div{background-color:#ccc0 !important;} article+div>div>div{background-color:#ccc0 !important;}";

              var CSSRules = document.createTextNode(rules);
              style.type = 'text/css';
              style.id = '__nighteye_css';
              if(style.styleSheet) {
                  style.styleSheet.cssText = CSSRules.nodeValue;
              } else { 
                  style.appendChild(CSSRules);
              }
              body.appendChild(style);
              
            }

        });
