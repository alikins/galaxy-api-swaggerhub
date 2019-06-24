# openapi_client.V1Api

All URIs are relative to *https://galaxy.ansible.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_api_v1**](V1Api.md#get_api_v1) | **GET** /api/v1/ | Get info about the v1 API
[**get_api_v1_search**](V1Api.md#get_api_v1_search) | **GET** /api/v1/search/ | Get info about the v1 search API
[**get_me_detail**](V1Api.md#get_me_detail) | **GET** /api/v1/me/ | Get the User info for the current user
[**get_tag_by_id**](V1Api.md#get_tag_by_id) | **GET** /api/v1/tags/{id}/ | Get a Galaxy Tag
[**get_user_by_id**](V1Api.md#get_user_by_id) | **GET** /api/v1/users/{id}/ | Get an User by id
[**list_content_by_search**](V1Api.md#list_content_by_search) | **GET** /api/v1/search/content/ | Get a list of Contents by searching
[**list_namespaces**](V1Api.md#list_namespaces) | **GET** /api/v1/namespaces/ | Get a list of Namespaces
[**list_role_by_search**](V1Api.md#list_role_by_search) | **GET** /api/v1/search/roles/ | 
[**list_tag_by_search**](V1Api.md#list_tag_by_search) | **GET** /api/v1/search/tags/ | Get a list of Tags by searching
[**list_tags**](V1Api.md#list_tags) | **GET** /api/v1/tags/ | Get a list of Galaxy Tags
[**list_users**](V1Api.md#list_users) | **GET** /api/v1/users/ | Get a list of Users
[**patch_user_by_id**](V1Api.md#patch_user_by_id) | **PATCH** /api/v1/users/{id}/ | Patch/update an User by id


# **get_api_v1**
> dict(str, str) get_api_v1()

Get info about the v1 API

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openapi_client.V1Api()

try:
    # Get info about the v1 API
    api_response = api_instance.get_api_v1()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling V1Api->get_api_v1: %s\n" % e)
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
**200** | A map of endpoints in the v1 API |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

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
api_instance = openapi_client.V1Api()

try:
    # Get info about the v1 search API
    api_response = api_instance.get_api_v1_search()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling V1Api->get_api_v1_search: %s\n" % e)
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
api_instance = openapi_client.V1Api()
search = 'search_example' # str | Term to search for (optional)

try:
    # Get the User info for the current user
    api_response = api_instance.get_me_detail(search=search)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling V1Api->get_me_detail: %s\n" % e)
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

# **get_tag_by_id**
> Tag get_tag_by_id(id, search=search)

Get a Galaxy Tag

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openapi_client.V1Api()
id = 'id_example' # str | Tag id
search = 'search_example' # str | Term to search for (optional)

try:
    # Get a Galaxy Tag
    api_response = api_instance.get_tag_by_id(id, search=search)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling V1Api->get_tag_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Tag id | 
 **search** | **str**| Term to search for | [optional] 

### Return type

[**Tag**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Galaxy Tag |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_by_id**
> User get_user_by_id(id, search=search)

Get an User by id

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openapi_client.V1Api()
id = 'id_example' # str | User id
search = 'search_example' # str | Term to search for (optional)

try:
    # Get an User by id
    api_response = api_instance.get_user_by_id(id, search=search)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling V1Api->get_user_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User id | 
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
**200** | Response with a User |  -  |

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
api_instance = openapi_client.V1Api()
page = 1 # int | Page number within the paginated result set. (optional) (default to 1)
page_size = 10 # int | Number of results to return per page. (optional) (default to 10)

try:
    # Get a list of Contents by searching
    api_response = api_instance.list_content_by_search(page=page, page_size=page_size)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling V1Api->list_content_by_search: %s\n" % e)
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
api_instance = openapi_client.V1Api()
page = 1 # int | Page number within the paginated result set. (optional) (default to 1)
page_size = 10 # int | Number of results to return per page. (optional) (default to 10)
search = 'search_example' # str | Term to search for (optional)

try:
    # Get a list of Namespaces
    api_response = api_instance.list_namespaces(page=page, page_size=page_size, search=search)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling V1Api->list_namespaces: %s\n" % e)
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
api_instance = openapi_client.V1Api()
page = 1 # int | Page number within the paginated result set. (optional) (default to 1)
page_size = 10 # int | Number of results to return per page. (optional) (default to 10)

try:
    api_response = api_instance.list_role_by_search(page=page, page_size=page_size)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling V1Api->list_role_by_search: %s\n" % e)
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
api_instance = openapi_client.V1Api()
page = 1 # int | Page number within the paginated result set. (optional) (default to 1)
page_size = 10 # int | Number of results to return per page. (optional) (default to 10)

try:
    # Get a list of Tags by searching
    api_response = api_instance.list_tag_by_search(page=page, page_size=page_size)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling V1Api->list_tag_by_search: %s\n" % e)
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

# **list_tags**
> TagsPage list_tags(page=page, page_size=page_size, search=search)

Get a list of Galaxy Tags

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openapi_client.V1Api()
page = 1 # int | Page number within the paginated result set. (optional) (default to 1)
page_size = 10 # int | Number of results to return per page. (optional) (default to 10)
search = 'search_example' # str | Term to search for (optional)

try:
    # Get a list of Galaxy Tags
    api_response = api_instance.list_tags(page=page, page_size=page_size, search=search)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling V1Api->list_tags: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Page number within the paginated result set. | [optional] [default to 1]
 **page_size** | **int**| Number of results to return per page. | [optional] [default to 10]
 **search** | **str**| Term to search for | [optional] 

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

# **list_users**
> UsersPage list_users(page=page, page_size=page_size, search=search)

Get a list of Users

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openapi_client.V1Api()
page = 1 # int | Page number within the paginated result set. (optional) (default to 1)
page_size = 10 # int | Number of results to return per page. (optional) (default to 10)
search = 'search_example' # str | Term to search for (optional)

try:
    # Get a list of Users
    api_response = api_instance.list_users(page=page, page_size=page_size, search=search)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling V1Api->list_users: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Page number within the paginated result set. | [optional] [default to 1]
 **page_size** | **int**| Number of results to return per page. | [optional] [default to 10]
 **search** | **str**| Term to search for | [optional] 

### Return type

[**UsersPage**](UsersPage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response containing a Page of a list of Users |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **patch_user_by_id**
> User patch_user_by_id(id, search=search, body=body)

Patch/update an User by id

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openapi_client.V1Api()
id = 'id_example' # str | User id
search = 'search_example' # str | Term to search for (optional)
body = openapi_client.Body() # Body | An User to update to (optional)

try:
    # Patch/update an User by id
    api_response = api_instance.patch_user_by_id(id, search=search, body=body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling V1Api->patch_user_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| User id | 
 **search** | **str**| Term to search for | [optional] 
 **body** | [**Body**](Body.md)| An User to update to | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The User updated by the PATCH |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

