# coding: utf-8

# flake8: noqa
"""
    Galaxy 3.2 API (wip)

    Galaxy 3.2 API (wip)  # noqa: E501

    The version of the OpenAPI document: 1.2.0
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

# import models into model package
from openapi_client.models.api_exception import APIException
from openapi_client.models.artifact_exists_error import ArtifactExistsError
from openapi_client.models.collection import Collection
from openapi_client.models.collection_creation_result import CollectionCreationResult
from openapi_client.models.collection_import_error import CollectionImportError
from openapi_client.models.collection_import_lint_record import CollectionImportLintRecord
from openapi_client.models.collection_import_message import CollectionImportMessage
from openapi_client.models.collection_import_result import CollectionImportResult
from openapi_client.models.collection_namespace import CollectionNamespace
from openapi_client.models.collection_version import CollectionVersion
from openapi_client.models.collection_version_artifact_data import CollectionVersionArtifactData
from openapi_client.models.collection_version_artifact_detail import CollectionVersionArtifactDetail
from openapi_client.models.collection_version_detail_artifact import CollectionVersionDetailArtifact
from openapi_client.models.collection_version_detail_collection import CollectionVersionDetailCollection
from openapi_client.models.collection_version_detail_metadata import CollectionVersionDetailMetadata
from openapi_client.models.collection_version_link import CollectionVersionLink
from openapi_client.models.collection_versions_page import CollectionVersionsPage
from openapi_client.models.conflict_collection_exists_error import ConflictCollectionExistsError
from openapi_client.models.conflict_error import ConflictError
from openapi_client.models.content import Content
from openapi_client.models.content_all_of import ContentAllOf
from openapi_client.models.contents_page import ContentsPage
from openapi_client.models.error import Error
from openapi_client.models.namespace import Namespace
from openapi_client.models.namespace_all_of import NamespaceAllOf
from openapi_client.models.namespaces_page import NamespacesPage
from openapi_client.models.repository_name_error import RepositoryNameError
from openapi_client.models.role import Role
from openapi_client.models.roles_page import RolesPage
from openapi_client.models.tag import Tag
from openapi_client.models.tag_all_of import TagAllOf
from openapi_client.models.tags_page import TagsPage
from openapi_client.models.user import User
from openapi_client.models.user_all_of import UserAllOf
from openapi_client.models.user_update import UserUpdate
from openapi_client.models.users_page import UsersPage
from openapi_client.models.v1_base_model import V1BaseModel
from openapi_client.models.validation_error import ValidationError
