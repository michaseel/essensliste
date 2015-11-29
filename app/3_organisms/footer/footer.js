/**
 * @name Organism: footer
 * @description The page footer
 * @author Michael Seel
 * @see {@link http://github.com/documentation|Specification}
 */
const kbe = kbe || {}; // get the apps namespace
kbe.footer = (function () {
  'use strict';
  /**
   * @function privateFunctionExample
   * @description example private function
   * @param {string} name - The Name of who should be greeted.
   */
  function privateFunctionExample(name) {
    console.log('Organism "footer" was loaded: Hello ' + name);
  }

  /**
   * @function publicFunctionExample
   * @description example public function - made public through the return statement
   */
  function publicFunctionExample(a, b) {
    return a + b;
  }

  /**
   * functions that should run at app-start
   * @constructor
   */
  privateFunctionExample('Michael Seel');

  return {
    // use the return statement to make variables and functions public
    publicFunctionExample
  };

}());

/** Example Usage:
  kbe.footer.publicFunctionExample(1,5); // = 6
*/
