# openapi_client.CollectionVersionsApi

All URIs are relative to *https://galaxy.ansible.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_collection_version_artifact_by_id**](CollectionVersionsApi.md#get_collection_version_artifact_by_id) | **GET** /api/v2/collection-versions/{id}/artifact/ | 
[**get_collection_version_by_version_pk**](CollectionVersionsApi.md#get_collection_version_by_version_pk) | **GET** /api/v2/collection-versions/{version_pk}/ | Get a CollectionVersion by version_pk


# **get_collection_version_artifact_by_id**
> CollectionVersionArtifactDetail get_collection_version_artifact_by_id(id, search=search)



### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openapi_client.CollectionVersionsApi()
id = 'id_example' # str | The CollectionVersion id
search = 'search_example' # str | Term to search for (optional)

try:
    api_response = api_instance.get_collection_version_artifact_by_id(id, search=search)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CollectionVersionsApi->get_collection_version_artifact_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The CollectionVersion id | 
 **search** | **str**| Term to search for | [optional] 

### Return type

[**CollectionVersionArtifactDetail**](CollectionVersionArtifactDetail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The collection version artifact details with download_url, sha256, and filename |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_collection_version_by_version_pk**
> CollectionVersion get_collection_version_by_version_pk(version_pk)

Get a CollectionVersion by version_pk

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openapi_client.CollectionVersionsApi()
version_pk = 'version_pk_example' # str | The CollectionVersion version_pk

try:
    # Get a CollectionVersion by version_pk
    api_response = api_instance.get_collection_version_by_version_pk(version_pk)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CollectionVersionsApi->get_collection_version_by_version_pk: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version_pk** | **str**| The CollectionVersion version_pk | 

### Return type

[**CollectionVersion**](CollectionVersion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response contain a CollectionVersion |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

