# FakeStoreApi.DefaultApi

All URIs are relative to *https://fakestoreapi.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllProducts**](DefaultApi.md#getAllProducts) | **GET** /products | Get all products
[**getProductById**](DefaultApi.md#getProductById) | **GET** /products/{id} | Get product by ID



## getAllProducts

> [Product] getAllProducts()

Get all products

Retrieve a list of all available products.

### Example

```javascript
import FakeStoreApi from 'fake_store_api';

let apiInstance = new FakeStoreApi.DefaultApi();
apiInstance.getAllProducts().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Product]**](Product.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductById

> Product getProductById(id)

Get product by ID

### Example

```javascript
import FakeStoreApi from 'fake_store_api';

let apiInstance = new FakeStoreApi.DefaultApi();
let id = 56; // Number | 
apiInstance.getProductById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**Product**](Product.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

