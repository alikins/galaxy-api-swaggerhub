# openapi_client.NamespacesApi

All URIs are relative to *https://galaxy.ansible.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_namespaces**](NamespacesApi.md#list_namespaces) | **GET** /api/v1/namespaces/ | Get a list of Namespaces


# **list_namespaces**
> NamespacesPage list_namespaces(page=page, page_size=page_size, search=search)

Get a list of Namespaces

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openapi_client.NamespacesApi()
page = 1 # int | Page number within the paginated result set. (optional) (default to 1)
page_size = 10 # int | Number of results to return per page. (optional) (default to 10)
search = 'search_example' # str | Term to search for (optional)

try:
    # Get a list of Namespaces
    api_response = api_instance.list_namespaces(page=page, page_size=page_size, search=search)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling NamespacesApi->list_namespaces: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Page number within the paginated result set. | [optional] [default to 1]
 **page_size** | **int**| Number of results to return per page. | [optional] [default to 10]
 **search** | **str**| Term to search for | [optional] 

### Return type

[**NamespacesPage**](NamespacesPage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response containing a Page of a list of Namespaces |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

