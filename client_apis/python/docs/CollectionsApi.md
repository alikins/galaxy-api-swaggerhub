# openapi_client.CollectionsApi

All URIs are relative to *https://galaxy.ansible.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_collection_by_id**](CollectionsApi.md#get_collection_by_id) | **GET** /api/v2/collections/{id}/ | Get a Collection by id
[**get_collection_by_namespace_name**](CollectionsApi.md#get_collection_by_namespace_name) | **GET** /api/v2/collections/{namespace}/{name}/ | Get a Collection by namespace and name
[**get_collection_version**](CollectionsApi.md#get_collection_version) | **GET** /api/v2/collections/{namespace}/{name}/versions/{version}/ | Get a CollectionVersion by namespace, name, and version
[**get_collection_version_artifact**](CollectionsApi.md#get_collection_version_artifact) | **GET** /api/v2/collections/{namespace}/{name}/versions/{version}/artifact/ | Get Artifact details for a Collection by namespace, name, and version
[**import_collection_version_artifact**](CollectionsApi.md#import_collection_version_artifact) | **POST** /api/v2/collections/ | Create a new CollectionVersion by importing a collection artifact
[**list_collection_versions_by_id**](CollectionsApi.md#list_collection_versions_by_id) | **GET** /api/v2/collections/{id}/versions/ | Get list of versions for a collection id
[**list_collection_versions_by_namespace_name**](CollectionsApi.md#list_collection_versions_by_namespace_name) | **GET** /api/v2/collections/{namespace}/{name}/versions/ | Get a list of CollectionVersions for a Collection by namespace and name


# **get_collection_by_id**
> Collection get_collection_by_id(id)

Get a Collection by id

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openapi_client.CollectionsApi()
id = 'id_example' # str | The Collection id

try:
    # Get a Collection by id
    api_response = api_instance.get_collection_by_id(id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CollectionsApi->get_collection_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The Collection id | 

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
api_instance = openapi_client.CollectionsApi()
namespace = 'namespace_example' # str | The collection namespace
name = 'name_example' # str | The collection name

try:
    # Get a Collection by namespace and name
    api_response = api_instance.get_collection_by_namespace_name(namespace, name)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CollectionsApi->get_collection_by_namespace_name: %s\n" % e)
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
api_instance = openapi_client.CollectionsApi()
namespace = 'namespace_example' # str | The collection namespace
name = 'name_example' # str | The collection name
version = 'version_example' # str | A Semantic Version string

try:
    # Get a CollectionVersion by namespace, name, and version
    api_response = api_instance.get_collection_version(namespace, name, version)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CollectionsApi->get_collection_version: %s\n" % e)
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
api_instance = openapi_client.CollectionsApi()
namespace = 'namespace_example' # str | The collection namespace
name = 'name_example' # str | The collection name
version = 'version_example' # str | A Semantic Version string
search = 'search_example' # str | Term to search for (optional)

try:
    # Get Artifact details for a Collection by namespace, name, and version
    api_response = api_instance.get_collection_version_artifact(namespace, name, version, search=search)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CollectionsApi->get_collection_version_artifact: %s\n" % e)
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
> CollectionCreationResult import_collection_version_artifact(unknown_base_type=unknown_base_type)

Create a new CollectionVersion by importing a collection artifact

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openapi_client.CollectionsApi()
unknown_base_type = openapi_client.UNKNOWN_BASE_TYPE() # UNKNOWN_BASE_TYPE | A multipart/form encoded payload including the collection artifact file and it's sha256sum (optional)

try:
    # Create a new CollectionVersion by importing a collection artifact
    api_response = api_instance.import_collection_version_artifact(unknown_base_type=unknown_base_type)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CollectionsApi->import_collection_version_artifact: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unknown_base_type** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)| A multipart/form encoded payload including the collection artifact file and it&#39;s sha256sum | [optional] 

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

# **list_collection_versions_by_id**
> CollectionVersionsPage list_collection_versions_by_id(id, page=page, page_size=page_size, search=search)

Get list of versions for a collection id

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openapi_client.CollectionsApi()
id = 'id_example' # str | The Collection id
page = 1 # int | Page number within the paginated result set. (optional) (default to 1)
page_size = 10 # int | Number of results to return per page. (optional) (default to 10)
search = 'search_example' # str | Term to search for (optional)

try:
    # Get list of versions for a collection id
    api_response = api_instance.list_collection_versions_by_id(id, page=page, page_size=page_size, search=search)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling CollectionsApi->list_collection_versions_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The Collection id | 
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
api_instance = openapi_client.CollectionsApi()
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
    print("Exception when calling CollectionsApi->list_collection_versions_by_namespace_name: %s\n" % e)
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

