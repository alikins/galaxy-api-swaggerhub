# openapi_client.MeApi

All URIs are relative to *https://galaxy.ansible.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_me_detail**](MeApi.md#get_me_detail) | **GET** /api/v1/me/ | Get the User info for the current user


# **get_me_detail**
> User get_me_detail(search=search)

Get the User info for the current user

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openapi_client.MeApi()
search = 'search_example' # str | Term to search for (optional)

try:
    # Get the User info for the current user
    api_response = api_instance.get_me_detail(search=search)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling MeApi->get_me_detail: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **str**| Term to search for | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response with the current User |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

