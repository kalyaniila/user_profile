# user_profile

UserProfile - JavaScript client for user_profile
This is a sample for User Profile.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install user_profile --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your user_profile from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('user_profile')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/user_profile
then install it via:

```shell
    npm install YOUR_USERNAME/user_profile --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var UserProfile = require('user_profile');

var defaultClient = UserProfile.ApiClient.instance;

// Configure OAuth2 access token for authorization: user_auth
var user_auth = defaultClient.authentications['user_auth'];
user_auth.accessToken = "YOUR ACCESS TOKEN"

var api = new UserProfile.UserApi()

var body = new UserProfile.User(); // {User} User object that needs to be added


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addUser(body, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://userprofile.qantas.io/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*UserProfile.UserApi* | [**addUser**](docs/UserApi.md#addUser) | **POST** /user | Add a new user
*UserProfile.UserApi* | [**getUser**](docs/UserApi.md#getUser) | **GET** /user | Get an existing user profile
*UserProfile.UserApi* | [**updateUser**](docs/UserApi.md#updateUser) | **PUT** /user | Update an existing user
*UserProfile.UserAuthenticationApi* | [**loginUser**](docs/UserAuthenticationApi.md#loginUser) | **GET** /auth/login | Logs user into the system
*UserProfile.UserAuthenticationApi* | [**logoutUser**](docs/UserAuthenticationApi.md#logoutUser) | **GET** /auth/logout | Logs out current logged in user session
*UserProfile.UserTransactionsApi* | [**getUserTransaction**](docs/UserTransactionsApi.md#getUserTransaction) | **GET** /transaction/{transactionid} | Get an existing user single transaction
*UserProfile.UserTransactionsApi* | [**getUserTransactions**](docs/UserTransactionsApi.md#getUserTransactions) | **GET** /transactions | Get an existing user transactions list


## Documentation for Models

 - [UserProfile.Address](docs/Address.md)
 - [UserProfile.Authentication](docs/Authentication.md)
 - [UserProfile.SuccessResponse](docs/SuccessResponse.md)
 - [UserProfile.Transaction](docs/Transaction.md)
 - [UserProfile.User](docs/User.md)
 - [UserProfile.UserAddress](docs/UserAddress.md)


## Documentation for Authorization


### api_key

- **Type**: API key
- **API key parameter name**: api_key
- **Location**: HTTP header

### api_secret

- **Type**: API key
- **API key parameter name**: api_secret
- **Location**: HTTP header

### user_auth

- **Type**: OAuth
- **Flow**: implicit
- **Authorization URL**: http://userprofile.qantas.swagger.io/oauth/dialog
- **Scopes**: 
  - write:user: modify users account
  - read:user: read your user

