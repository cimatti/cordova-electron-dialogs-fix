Cordova Electron dialogs fix
===

Electron has a known bug (see https://github.com/electron/electron/issues/31917 and https://github.com/electron/electron/issues/41603) that disrupts focus when using the `alert()` or `confirm()` functions.

This Cordova plugin resolves the issue by overriding these functions and subsequently calling the `blur()` and `focus()` methods of the `BrowserWindow` in the main context once the dialogs are closed.

This plugin works out of the box and is compatible with other platforms, though it does nothing on iOS or Android. Just install it if you use native JavaScript dialogs in your Cordova Electron app, and you noticed focus issues.

Installation
---

`cordova plugin add cordova-electron-dialogs-fix`

Copyright
---

Copyright 2024 Andrea Cimatti - https://www.cimatti.it

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
