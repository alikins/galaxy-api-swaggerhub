# openapi_client.CollectionImportsApi

All URIs are relative to *https://galaxy.ansible.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_collection_import_by_id**](CollectionImportsApi.md#get_collection_import_by_id) | **GET** /api/v2/collection-imports/{id}/ | Get a Collection-Import (import task) by id


# **get_collection_import_by_id**
> CollectionImportResult get_collection_import_by_id(id, search=search)

Get a Collection-Import (import task) by id

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openapi_client.CollectionImportsApi()
id = 'id_example' # str | A unique integer value identifying this collection import.
search = 'search_example' # str | Term to search for (optional)

try:
    # Get a Collection-Import (import task) by id
    api_response = api_instance.get_collection_import_by_id(id, search=search)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CollectionImportsApi->get_collection_import_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| A unique integer value identifying this collection import. | 
 **search** | **str**| Term to search for | [optional] 

### Return type

[**CollectionImportResult**](CollectionImportResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of a collection import |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

