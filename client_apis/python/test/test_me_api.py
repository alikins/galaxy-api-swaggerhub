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
from openapi_client.api.me_api import MeApi  # noqa: E501
from openapi_client.rest import ApiException


class TestMeApi(unittest.TestCase):
    """MeApi unit test stubs"""

    def setUp(self):
        self.api = openapi_client.api.me_api.MeApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_get_me_detail(self):
        """Test case for get_me_detail

        Get the User info for the current user  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
