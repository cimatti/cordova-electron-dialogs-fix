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

{
  // Store reference to original alert, confirm and prompt functions
  const originals = {alert, confirm, prompt};

  // Returns a function that calls the original function and then executes the refocus on the main process
  const altFuncBuilder = function(fname){
    const f = originals[fname]; //this is necessary, because if we call originals[fname](...args), the function will be called in "originals" context and not in "window" context
    return function(...args) {
      console.log(`alternative ${fname} called`);
      const ret = f(...args);
      console.log(ret);
      Cordova.exec(()=>{}, ()=>{}, "cordovaElectronDialogsFix", "refocus", []);
      return ret;
    }
  }

  // Replace the original functions with the new ones
  for (let fname in originals) {
    window[fname] = altFuncBuilder(fname);
  }
}
