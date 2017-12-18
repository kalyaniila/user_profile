# UserProfile.UserApi

All URIs are relative to *http://userprofile.qantas.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUser**](UserApi.md#addUser) | **POST** /user | Add a new user
[**getUser**](UserApi.md#getUser) | **GET** /user | Get an existing user profile
[**updateUser**](UserApi.md#updateUser) | **PUT** /user | Update an existing user


<a name="addUser"></a>
# **addUser**
> SuccessResponse addUser(body)

Add a new user

Add a new user

### Example
```javascript
var UserProfile = require('user_profile');
var defaultClient = UserProfile.ApiClient.instance;

// Configure OAuth2 access token for authorization: user_auth
var user_auth = defaultClient.authentications['user_auth'];
user_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new UserProfile.UserApi();

var body = new UserProfile.User(); // User | User object that needs to be added


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addUser(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**User**](User.md)| User object that needs to be added | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[user_auth](../README.md#user_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUser"></a>
# **getUser**
> User getUser(body)

Get an existing user profile



### Example
```javascript
var UserProfile = require('user_profile');
var defaultClient = UserProfile.ApiClient.instance;

// Configure OAuth2 access token for authorization: user_auth
var user_auth = defaultClient.authentications['user_auth'];
user_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new UserProfile.UserApi();

var body = new UserProfile.User(); // User | User object that needs to be updated


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUser(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**User**](User.md)| User object that needs to be updated | 

### Return type

[**User**](User.md)

### Authorization

[user_auth](../README.md#user_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUser"></a>
# **updateUser**
> SuccessResponse updateUser(body)

Update an existing user

Update an existing user

### Example
```javascript
var UserProfile = require('user_profile');
var defaultClient = UserProfile.ApiClient.instance;

// Configure OAuth2 access token for authorization: user_auth
var user_auth = defaultClient.authentications['user_auth'];
user_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new UserProfile.UserApi();

var body = new UserProfile.User(); // User | User object that needs to be updated


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateUser(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**User**](User.md)| User object that needs to be updated | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

[user_auth](../README.md#user_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

