# coding: utf-8

"""
    Galaxy 3.2 API (wip)

    Galaxy 3.2 API (wip)  # noqa: E501

    The version of the OpenAPI document: 1.2.0
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest

import openapi_client
from openapi_client.api.namespaces_api import NamespacesApi  # noqa: E501
from openapi_client.rest import ApiException


class TestNamespacesApi(unittest.TestCase):
    """NamespacesApi unit test stubs"""

    def setUp(self):
        self.api = openapi_client.api.namespaces_api.NamespacesApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_list_namespaces(self):
        """Test case for list_namespaces

        Get a list of Namespaces  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
