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
from openapi_client.api.v2_api import V2Api  # noqa: E501
from openapi_client.rest import ApiException


class TestV2Api(unittest.TestCase):
    """V2Api unit test stubs"""

    def setUp(self):
        self.api = openapi_client.api.v2_api.V2Api()  # noqa: E501

    def tearDown(self):
        pass

    def test_get_collection_by_id(self):
        """Test case for get_collection_by_id

        Get a Collection by id  # noqa: E501
        """
        pass

    def test_get_collection_by_namespace_name(self):
        """Test case for get_collection_by_namespace_name

        Get a Collection by namespace and name  # noqa: E501
        """
        pass

    def test_get_collection_import_by_id(self):
        """Test case for get_collection_import_by_id

        Get a Collection-Import (import task) by id  # noqa: E501
        """
        pass

    def test_get_collection_version(self):
        """Test case for get_collection_version

        Get a CollectionVersion by namespace, name, and version  # noqa: E501
        """
        pass

    def test_get_collection_version_artifact(self):
        """Test case for get_collection_version_artifact

        Get Artifact details for a Collection by namespace, name, and version  # noqa: E501
        """
        pass

    def test_get_collection_version_artifact_by_id(self):
        """Test case for get_collection_version_artifact_by_id

        """
        pass

    def test_get_collection_version_by_version_pk(self):
        """Test case for get_collection_version_by_version_pk

        Get a CollectionVersion by version_pk  # noqa: E501
        """
        pass

    def test_import_collection_version_artifact(self):
        """Test case for import_collection_version_artifact

        Create a new CollectionVersion by importing a collection artifact  # noqa: E501
        """
        pass

    def test_list_collection_versions_by_id(self):
        """Test case for list_collection_versions_by_id

        Get list of versions for a collection id  # noqa: E501
        """
        pass

    def test_list_collection_versions_by_namespace_name(self):
        """Test case for list_collection_versions_by_namespace_name

        Get a list of CollectionVersions for a Collection by namespace and name  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()