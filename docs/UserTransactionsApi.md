# UserProfile.UserTransactionsApi

All URIs are relative to *http://userprofile.qantas.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUserTransaction**](UserTransactionsApi.md#getUserTransaction) | **GET** /transaction/{transactionid} | Get an existing user single transaction
[**getUserTransactions**](UserTransactionsApi.md#getUserTransactions) | **GET** /transactions | Get an existing user transactions list


<a name="getUserTransaction"></a>
# **getUserTransaction**
> Transaction getUserTransaction(transactionid)

Get an existing user single transaction



### Example
```javascript
var UserProfile = require('user_profile');
var defaultClient = UserProfile.ApiClient.instance;

// Configure OAuth2 access token for authorization: user_auth
var user_auth = defaultClient.authentications['user_auth'];
user_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new UserProfile.UserTransactionsApi();

var transactionid = "transactionid_example"; // String | User transaction id 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserTransaction(transactionid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionid** | **String**| User transaction id  | 

### Return type

[**Transaction**](Transaction.md)

### Authorization

[user_auth](../README.md#user_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserTransactions"></a>
# **getUserTransactions**
> Transaction getUserTransactions()

Get an existing user transactions list



### Example
```javascript
var UserProfile = require('user_profile');
var defaultClient = UserProfile.ApiClient.instance;

// Configure OAuth2 access token for authorization: user_auth
var user_auth = defaultClient.authentications['user_auth'];
user_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new UserProfile.UserTransactionsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserTransactions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Transaction**](Transaction.md)

### Authorization

[user_auth](../README.md#user_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

