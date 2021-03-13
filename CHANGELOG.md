# Changelog
Changes to Nighteye repo or published releases.

## [Unreleased]
Latest changes in repo, and releases not yet published on Chrome Web Store.

## [0.3.0] - 2021-03-13

### Changed

- Refactored a bit to improve on DRY principle, code related to injection has moved to the new Nighteye__ext class

- Content script will now async wait for nighteye.js to load before doing its stuff

### Added

- Added js/nighteye.js file to hold extension's class

## [0.2.2] - 2021-03-13

### Changed

- Implemented a folder structure for better code overview. Since this intends to stay a simple project, the folder structure will be one folder for each file type, all siblings in root folder.

### Added

- Folders: css, img, js - `css` will likely hold optional custom overrides in future versions, `img` holds png icons, `js` holds all the source with application logic.

## [0.2.0] - 2021-03-13

### Changed

- Injected styles moved out of JS files. Injected style element changed from style to link. JS codebase is now only about 50 lines.

### Added

- Added nighteye.css file for easy editing, and its resource permission in manifest
- Fixes for ugly white backgrounds on github pages

## [Released]
Published or pending Chrome Web Store releases.

## [0.1.1] - 2021-03-13

### Changed

- Simplified switch button

### Added

- Licence file