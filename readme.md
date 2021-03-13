# Nighteye
### Chrome Extension for Simple Dark Skin for All Web Pages
&nbsp;  

> "When darkness falls, beauty is lit from within."

![nighteye example screen github](https://i.imgur.com/qA887oQ.png)

When active, forces black background with green terminal-like text, stripping almost all decorative elements. Recommended only for serious work such as looking up coding resources.

**This is not meant to be a silver bullet solution that will work well for all pages.** May make some pages unreadable. But is very easy to switch on/off for a current page.

I have made this for my own use, as the existing darkener extensions that I know of try to achieve too much, or too little, or are not dark enough, and the one that I liked turned out to be spying on its users. The functionality is good enough to browse through text, images and code on most web pages. It does not work well for activities that are probably a waste of time, such as scrolling through Facebook videos and images. There are additional CSS fixes for few potentially useful websites like GitHub, YouTube and Medium to improve readability. If there is a useful website that doesn't work well with this plugin let me know and I will add fixes in next update. Or just fork and use as basis to make your own version.

One additional benefit for Windows 10 "high contrast black mode" users who are not using experimental "Force colors" feature: web pages that fail to optimize for high contrast black (dark text on dark background) will become fully readable when this extension is activated.

&nbsp;  

#### Nighteye design principles

- Simplicity of codebase, less than one screens of JS code in total. A novice programmer can easily skim through the code and confirm that the extension is not a spy tool.
- One button interface to activate and deactivate the plugin, the outcome of which depends on the context (more about that in the point below).
- Freedom of choice for those who like to multitab, as switching on will darken the currently open tab and all the pages loaded afterwards, switching off will act in the same way, meaning the pages in other tabs will keep their current state.
- Simple pitch black background, with calming green text similar to old school terminal displays.

#### Switch button logic

- If the currently focused tab doesn't have dark skin applied:
  - The skin will activate for the page in focused tab
  - The skin will activate for any newly loaded page in other tabs

- If the currently focused tab has dark skin applied: 
  - The skin will deactivate for the page in that tab
  - The skin will not activate for any newly loaded page in other tabs

- All other tabs will preserve their state, until they load another page or get refreshed.

While the above switch button logic is not perfect for all situations, I find it the most comfortable solution, as I use a lot of tabs and prefer to keep the dark skin off on some pages.

#### How to install

~~Get it from Chrome Web Store~~ (pending review), or download a release, or install from the source.

To download a release: download the latest archive from the Releases section (menu on the right), unzip, drag&drop the main folder into the extensions window and enable the extension.

To install from source: clone the repo, navigate to `chrome://extensions/` , drag&drop the cloned folder into the extensions window and enable the extension.

#### Advatages over Chrome's experimental high contrast mode

While users of dark high contrast Windows 10 display mode may enable the same for all pages by navigating to `chrome://flags` and enabling the "Forced colors mode" I find that solution lacking.

The chosen color scheme may work for your Windows environment, but the same doesn't have to apply for web browsing. Also, atm it is not as comfortable to disable the forced colors mode for specific pages. Note that enabling forced colors mode will make this extension uneffective.
