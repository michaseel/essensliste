/**
 * @name Organism: header
 * @description The page header
 * @author Michael Seel
 * @see {@link http://github.com/documentation|Specification}
 */
const kbe = kbe || {}; // get the apps namespace
kbe.header = (function () {
  'use strict';
  /**
   * @function privateFunctionExample
   * @description example private function
   * @param {string} name - The Name of who should be greeted.
   */
  function privateFunctionExample(name) {
    console.log('Organism "header" was loaded: Hello ' + name);
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
  kbe.header.publicFunctionExample(1,5); // = 6
*/
