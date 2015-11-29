/* global describe:false, it:false, expect:false, kbe:false */
// <reference path='Food.js">

describe('Food tests', () => {
  'use strict';

  it('Adds two numbers', () => {
    // Arrange
    let num1 = 1;
    let num2 = 3;
    let expected = 4;

    // Act
    let result = kbe.Food.publicFunctionExample(num1, num2);

    // Assert
    expect(result).toBe(expected);
  });

});
