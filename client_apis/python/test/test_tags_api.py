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
from openapi_client.api.tags_api import TagsApi  # noqa: E501
from openapi_client.rest import ApiException


class TestTagsApi(unittest.TestCase):
    """TagsApi unit test stubs"""

    def setUp(self):
        self.api = openapi_client.api.tags_api.TagsApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_get_tag_by_id(self):
        """Test case for get_tag_by_id

        Get a Galaxy Tag  # noqa: E501
        """
        pass

    def test_list_tags(self):
        """Test case for list_tags

        Get a list of Galaxy Tags  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
