# openapi_client.SearchApi

All URIs are relative to *https://galaxy.ansible.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_api_v1_search**](SearchApi.md#get_api_v1_search) | **GET** /api/v1/search/ | Get info about the v1 search API
[**list_content_by_search**](SearchApi.md#list_content_by_search) | **GET** /api/v1/search/content/ | Get a list of Contents by searching
[**list_role_by_search**](SearchApi.md#list_role_by_search) | **GET** /api/v1/search/roles/ | 
[**list_tag_by_search**](SearchApi.md#list_tag_by_search) | **GET** /api/v1/search/tags/ | Get a list of Tags by searching


# **get_api_v1_search**
> dict(str, str) get_api_v1_search()

Get info about the v1 search API

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openapi_client.SearchApi()

try:
    # Get info about the v1 search API
    api_response = api_instance.get_api_v1_search()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SearchApi->get_api_v1_search: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

**dict(str, str)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A map of endpoints in the v1 search API |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_content_by_search**
> ContentsPage list_content_by_search(page=page, page_size=page_size)

Get a list of Contents by searching

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openapi_client.SearchApi()
page = 1 # int | Page number within the paginated result set. (optional) (default to 1)
page_size = 10 # int | Number of results to return per page. (optional) (default to 10)

try:
    # Get a list of Contents by searching
    api_response = api_instance.list_content_by_search(page=page, page_size=page_size)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SearchApi->list_content_by_search: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Page number within the paginated result set. | [optional] [default to 1]
 **page_size** | **int**| Number of results to return per page. | [optional] [default to 10]

### Return type

[**ContentsPage**](ContentsPage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response containing a Page of Content search results |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_role_by_search**
> RolesPage list_role_by_search(page=page, page_size=page_size)



### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openapi_client.SearchApi()
page = 1 # int | Page number within the paginated result set. (optional) (default to 1)
page_size = 10 # int | Number of results to return per page. (optional) (default to 10)

try:
    api_response = api_instance.list_role_by_search(page=page, page_size=page_size)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SearchApi->list_role_by_search: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Page number within the paginated result set. | [optional] [default to 1]
 **page_size** | **int**| Number of results to return per page. | [optional] [default to 10]

### Return type

[**RolesPage**](RolesPage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response containing a Page of a list of Roles |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_tag_by_search**
> TagsPage list_tag_by_search(page=page, page_size=page_size)

Get a list of Tags by searching

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openapi_client.SearchApi()
page = 1 # int | Page number within the paginated result set. (optional) (default to 1)
page_size = 10 # int | Number of results to return per page. (optional) (default to 10)

try:
    # Get a list of Tags by searching
    api_response = api_instance.list_tag_by_search(page=page, page_size=page_size)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling SearchApi->list_tag_by_search: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Page number within the paginated result set. | [optional] [default to 1]
 **page_size** | **int**| Number of results to return per page. | [optional] [default to 10]

### Return type

[**TagsPage**](TagsPage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response containing a Page of a list of Tags |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

