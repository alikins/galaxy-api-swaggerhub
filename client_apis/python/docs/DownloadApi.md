# openapi_client.DownloadApi

All URIs are relative to *https://galaxy.ansible.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**download_artifact_by_filename**](DownloadApi.md#download_artifact_by_filename) | **GET** /download/{filename} | Download the collection artifact


# **download_artifact_by_filename**
> file download_artifact_by_filename(filename)

Download the collection artifact

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openapi_client.DownloadApi()
filename = 'filename_example' # str | CollectionVersion artifact filename

try:
    # Download the collection artifact
    api_response = api_instance.download_artifact_by_filename(filename)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DownloadApi->download_artifact_by_filename: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filename** | **str**| CollectionVersion artifact filename | 

### Return type

**file**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The collection artifact file binary contents |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

