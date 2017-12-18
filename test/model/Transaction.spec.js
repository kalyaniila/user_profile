/**
 * User Profile
 * This is a sample for User Profile.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: ila.kalyani@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.UserProfile);
  }
}(this, function(expect, UserProfile) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new UserProfile.Transaction();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Transaction', function() {
    it('should create an instance of Transaction', function() {
      // uncomment below and update the code to test Transaction
      //var instane = new UserProfile.Transaction();
      //expect(instance).to.be.a(UserProfile.Transaction);
    });

    it('should have the property transactionId (base name: "transactionId")', function() {
      // uncomment below and update the code to test the property transactionId
      //var instane = new UserProfile.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property earnedPoints (base name: "earnedPoints")', function() {
      // uncomment below and update the code to test the property earnedPoints
      //var instane = new UserProfile.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property amt (base name: "amt")', function() {
      // uncomment below and update the code to test the property amt
      //var instane = new UserProfile.Transaction();
      //expect(instance).to.be();
    });

    it('should have the property transactionType (base name: "transactionType")', function() {
      // uncomment below and update the code to test the property transactionType
      //var instane = new UserProfile.Transaction();
      //expect(instance).to.be();
    });

  });

}));
