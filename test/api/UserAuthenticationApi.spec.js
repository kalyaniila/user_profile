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
    instance = new UserProfile.UserAuthenticationApi();
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

  describe('UserAuthenticationApi', function() {
    describe('loginUser', function() {
      it('should call loginUser successfully', function(done) {
        //uncomment below and update the code to test loginUser
        //instance.loginUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logoutUser', function() {
      it('should call logoutUser successfully', function(done) {
        //uncomment below and update the code to test logoutUser
        //instance.logoutUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
