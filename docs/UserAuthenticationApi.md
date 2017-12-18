# UserProfile.UserAuthenticationApi

All URIs are relative to *http://userprofile.qantas.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loginUser**](UserAuthenticationApi.md#loginUser) | **GET** /auth/login | Logs user into the system
[**logoutUser**](UserAuthenticationApi.md#logoutUser) | **GET** /auth/logout | Logs out current logged in user session


<a name="loginUser"></a>
# **loginUser**
> Authentication loginUser(username, password)

Logs user into the system



### Example
```javascript
var UserProfile = require('user_profile');

var apiInstance = new UserProfile.UserAuthenticationApi();

var username = "username_example"; // String | The user name for login

var password = "password_example"; // String | The password for login in clear text


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.loginUser(username, password, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The user name for login | 
 **password** | **String**| The password for login in clear text | 

### Return type

[**Authentication**](Authentication.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

<a name="logoutUser"></a>
# **logoutUser**
> logoutUser()

Logs out current logged in user session



### Example
```javascript
var UserProfile = require('user_profile');

var apiInstance = new UserProfile.UserAuthenticationApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.logoutUser(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

