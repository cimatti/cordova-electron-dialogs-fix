/*
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
*/

const { BrowserWindow } = require('electron');
module.exports = {
  refocus: function() {
    let w;
    w = BrowserWindow.getFocusedWindow();
    if (w) {
      w.blur();
      w.focus();
      // console.log('refocused');
    } else {
      console.log("BrowserWindow.getFocusedWindow() returned null"); // eslint-disable-line no-console
    }
  }
}
