# openapi_client.UsersApi

All URIs are relative to *https://galaxy.ansible.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_user_by_id**](UsersApi.md#get_user_by_id) | **GET** /api/v1/users/{id}/ | Get an User by id
[**list_users**](UsersApi.md#list_users) | **GET** /api/v1/users/ | Get a list of Users
[**patch_user_by_id**](UsersApi.md#patch_user_by_id) | **PATCH** /api/v1/users/{id}/ | Patch/update an User by id


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
api_instance = openapi_client.UsersApi()
id = 'id_example' # str | User id
search = 'search_example' # str | Term to search for (optional)

try:
    # Get an User by id
    api_response = api_instance.get_user_by_id(id, search=search)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling UsersApi->get_user_by_id: %s\n" % e)
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
api_instance = openapi_client.UsersApi()
page = 1 # int | Page number within the paginated result set. (optional) (default to 1)
page_size = 10 # int | Number of results to return per page. (optional) (default to 10)
search = 'search_example' # str | Term to search for (optional)

try:
    # Get a list of Users
    api_response = api_instance.list_users(page=page, page_size=page_size, search=search)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling UsersApi->list_users: %s\n" % e)
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
api_instance = openapi_client.UsersApi()
id = 'id_example' # str | User id
search = 'search_example' # str | Term to search for (optional)
body = openapi_client.Body() # Body | An User to update to (optional)

try:
    # Patch/update an User by id
    api_response = api_instance.patch_user_by_id(id, search=search, body=body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling UsersApi->patch_user_by_id: %s\n" % e)
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

