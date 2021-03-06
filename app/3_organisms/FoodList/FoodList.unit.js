/* global describe:false, it:false, expect:false, kbe:false */
// <reference path='FoodList.js">

describe('FoodList tests', () => {
  'use strict';

  it('Adds two numbers', () => {
    // Arrange
    let num1 = 1;
    let num2 = 3;
    let expected = 4;

    // Act
    let result = kbe.FoodList.publicFunctionExample(num1, num2);

    // Assert
    expect(result).toBe(expected);
  });

});
