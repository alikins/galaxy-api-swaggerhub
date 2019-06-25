# openapi_client.ClientMazerApi

All URIs are relative to *https://galaxy.ansible.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**download_artifact_by_filename**](ClientMazerApi.md#download_artifact_by_filename) | **GET** /download/{filename} | Download the collection artifact
[**get_collection_by_namespace_name**](ClientMazerApi.md#get_collection_by_namespace_name) | **GET** /api/v2/collections/{namespace}/{name}/ | Get a Collection by namespace and name
[**get_collection_version**](ClientMazerApi.md#get_collection_version) | **GET** /api/v2/collections/{namespace}/{name}/versions/{version}/ | Get a CollectionVersion by namespace, name, and version
[**get_collection_version_artifact**](ClientMazerApi.md#get_collection_version_artifact) | **GET** /api/v2/collections/{namespace}/{name}/versions/{version}/artifact/ | Get Artifact details for a Collection by namespace, name, and version
[**import_collection_version_artifact**](ClientMazerApi.md#import_collection_version_artifact) | **POST** /api/v2/collections/ | Create a new CollectionVersion by importing a collection artifact
[**list_collection_versions_by_namespace_name**](ClientMazerApi.md#list_collection_versions_by_namespace_name) | **GET** /api/v2/collections/{namespace}/{name}/versions/ | Get a list of CollectionVersions for a Collection by namespace and name


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
api_instance = openapi_client.ClientMazerApi()
filename = 'filename_example' # str | CollectionVersion artifact filename

try:
    # Download the collection artifact
    api_response = api_instance.download_artifact_by_filename(filename)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ClientMazerApi->download_artifact_by_filename: %s\n" % e)
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

# **get_collection_by_namespace_name**
> Collection get_collection_by_namespace_name(namespace, name)

Get a Collection by namespace and name

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openapi_client.ClientMazerApi()
namespace = 'namespace_example' # str | The collection namespace
name = 'name_example' # str | The collection name

try:
    # Get a Collection by namespace and name
    api_response = api_instance.get_collection_by_namespace_name(namespace, name)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ClientMazerApi->get_collection_by_namespace_name: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **str**| The collection namespace | 
 **name** | **str**| The collection name | 

### Return type

[**Collection**](Collection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Collection |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_collection_version**
> CollectionVersion get_collection_version(namespace, name, version)

Get a CollectionVersion by namespace, name, and version

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openapi_client.ClientMazerApi()
namespace = 'namespace_example' # str | The collection namespace
name = 'name_example' # str | The collection name
version = 'version_example' # str | A Semantic Version string

try:
    # Get a CollectionVersion by namespace, name, and version
    api_response = api_instance.get_collection_version(namespace, name, version)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ClientMazerApi->get_collection_version: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **str**| The collection namespace | 
 **name** | **str**| The collection name | 
 **version** | **str**| A Semantic Version string | 

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

# **get_collection_version_artifact**
> CollectionVersionArtifactDetail get_collection_version_artifact(namespace, name, version, search=search)

Get Artifact details for a Collection by namespace, name, and version

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openapi_client.ClientMazerApi()
namespace = 'namespace_example' # str | The collection namespace
name = 'name_example' # str | The collection name
version = 'version_example' # str | A Semantic Version string
search = 'search_example' # str | Term to search for (optional)

try:
    # Get Artifact details for a Collection by namespace, name, and version
    api_response = api_instance.get_collection_version_artifact(namespace, name, version, search=search)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ClientMazerApi->get_collection_version_artifact: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **str**| The collection namespace | 
 **name** | **str**| The collection name | 
 **version** | **str**| A Semantic Version string | 
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

# **import_collection_version_artifact**
> CollectionCreationResult import_collection_version_artifact(collection_version_artifact_data=collection_version_artifact_data)

Create a new CollectionVersion by importing a collection artifact

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openapi_client.ClientMazerApi()
collection_version_artifact_data = openapi_client.CollectionVersionArtifactData() # CollectionVersionArtifactData | A multipart/form encoded payload including the binary collection artifact file contents and it's sha256sum (optional)

try:
    # Create a new CollectionVersion by importing a collection artifact
    api_response = api_instance.import_collection_version_artifact(collection_version_artifact_data=collection_version_artifact_data)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ClientMazerApi->import_collection_version_artifact: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_version_artifact_data** | [**CollectionVersionArtifactData**](CollectionVersionArtifactData.md)| A multipart/form encoded payload including the binary collection artifact file contents and it&#39;s sha256sum | [optional] 

### Return type

[**CollectionCreationResult**](CollectionCreationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Result of collection import task with task url |  -  |
**401** | Authorization error |  -  |
**409** | Conflict Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_collection_versions_by_namespace_name**
> CollectionVersionsPage list_collection_versions_by_namespace_name(namespace, name, page=page, page_size=page_size, search=search)

Get a list of CollectionVersions for a Collection by namespace and name

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openapi_client.ClientMazerApi()
namespace = 'namespace_example' # str | The collection namespace
name = 'name_example' # str | The collection name
page = 1 # int | Page number within the paginated result set. (optional) (default to 1)
page_size = 10 # int | Number of results to return per page. (optional) (default to 10)
search = 'search_example' # str | Term to search for (optional)

try:
    # Get a list of CollectionVersions for a Collection by namespace and name
    api_response = api_instance.list_collection_versions_by_namespace_name(namespace, name, page=page, page_size=page_size, search=search)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ClientMazerApi->list_collection_versions_by_namespace_name: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **str**| The collection namespace | 
 **name** | **str**| The collection name | 
 **page** | **int**| Page number within the paginated result set. | [optional] [default to 1]
 **page_size** | **int**| Number of results to return per page. | [optional] [default to 10]
 **search** | **str**| Term to search for | [optional] 

### Return type

[**CollectionVersionsPage**](CollectionVersionsPage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response containing a page of CollectionVersionLinks |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

