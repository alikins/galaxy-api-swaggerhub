# openapi_client.IntrospectionApi

All URIs are relative to *https://galaxy.ansible.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_api**](IntrospectionApi.md#get_api) | **GET** /api/ | Get info about the API
[**get_api_v1**](IntrospectionApi.md#get_api_v1) | **GET** /api/v1/ | Get info about the v1 API
[**get_api_v1_search**](IntrospectionApi.md#get_api_v1_search) | **GET** /api/v1/search/ | Get info about the v1 search API


# **get_api**
> dict(str, str) get_api()

Get info about the API

### Example

```python
from __future__ import print_function
import time
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openapi_client.IntrospectionApi()

try:
    # Get info about the API
    api_response = api_instance.get_api()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling IntrospectionApi->get_api: %s\n" % e)
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
**200** | A map of endpoints in the API |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

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
api_instance = openapi_client.IntrospectionApi()

try:
    # Get info about the v1 API
    api_response = api_instance.get_api_v1()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling IntrospectionApi->get_api_v1: %s\n" % e)
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
api_instance = openapi_client.IntrospectionApi()

try:
    # Get info about the v1 search API
    api_response = api_instance.get_api_v1_search()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling IntrospectionApi->get_api_v1_search: %s\n" % e)
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

