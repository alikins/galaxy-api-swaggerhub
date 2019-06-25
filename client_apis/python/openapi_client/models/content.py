# coding: utf-8

"""
    Galaxy 3.2 API (wip)

    Galaxy 3.2 API (wip)  # noqa: E501

    The version of the OpenAPI document: 1.2.0
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six


class Content(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'id': 'int',
        'url': 'str',
        'related': 'dict(str, str)',
        'summary_fields': 'dict(str, object)',
        'active': 'str',
        'modified': 'str',
        'created': 'str',
        'company': 'str',
        'description': 'str',
        'download_count': 'str',
        'download_rank': 'float',
        'imported': 'datetime',
        'is_valid': 'bool',
        'license': 'str',
        'min_ansible_version': 'str',
        'name': 'str',
        'relevance': 'float',
        'role_type': 'str',
        'search_rank': 'float',
        'travis_status_url': 'str',
        'username': 'str'
    }

    attribute_map = {
        'id': 'id',
        'url': 'url',
        'related': 'related',
        'summary_fields': 'summary_fields',
        'active': 'active',
        'modified': 'modified',
        'created': 'created',
        'company': 'company',
        'description': 'description',
        'download_count': 'download_count',
        'download_rank': 'download_rank',
        'imported': 'imported',
        'is_valid': 'is_valid',
        'license': 'license',
        'min_ansible_version': 'min_ansible_version',
        'name': 'name',
        'relevance': 'relevance',
        'role_type': 'role_type',
        'search_rank': 'search_rank',
        'travis_status_url': 'travis_status_url',
        'username': 'username'
    }

    def __init__(self, id=None, url=None, related=None, summary_fields=None, active=None, modified=None, created=None, company=None, description=None, download_count=None, download_rank=None, imported=None, is_valid=None, license=None, min_ansible_version=None, name=None, relevance=None, role_type=None, search_rank=None, travis_status_url=None, username=None):  # noqa: E501
        """Content - a model defined in OpenAPI"""  # noqa: E501

        self._id = None
        self._url = None
        self._related = None
        self._summary_fields = None
        self._active = None
        self._modified = None
        self._created = None
        self._company = None
        self._description = None
        self._download_count = None
        self._download_rank = None
        self._imported = None
        self._is_valid = None
        self._license = None
        self._min_ansible_version = None
        self._name = None
        self._relevance = None
        self._role_type = None
        self._search_rank = None
        self._travis_status_url = None
        self._username = None
        self.discriminator = None

        if id is not None:
            self.id = id
        if url is not None:
            self.url = url
        if related is not None:
            self.related = related
        if summary_fields is not None:
            self.summary_fields = summary_fields
        if active is not None:
            self.active = active
        if modified is not None:
            self.modified = modified
        if created is not None:
            self.created = created
        self.company = company
        if description is not None:
            self.description = description
        if download_count is not None:
            self.download_count = download_count
        self.download_rank = download_rank
        self.imported = imported
        if is_valid is not None:
            self.is_valid = is_valid
        if license is not None:
            self.license = license
        self.min_ansible_version = min_ansible_version
        self.name = name
        self.relevance = relevance
        if role_type is not None:
            self.role_type = role_type
        self.search_rank = search_rank
        if travis_status_url is not None:
            self.travis_status_url = travis_status_url
        if username is not None:
            self.username = username

    @property
    def id(self):
        """Gets the id of this Content.  # noqa: E501

        Database ID for this object.  # noqa: E501

        :return: The id of this Content.  # noqa: E501
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this Content.

        Database ID for this object.  # noqa: E501

        :param id: The id of this Content.  # noqa: E501
        :type: int
        """

        self._id = id

    @property
    def url(self):
        """Gets the url of this Content.  # noqa: E501

        URL for this resource.  # noqa: E501

        :return: The url of this Content.  # noqa: E501
        :rtype: str
        """
        return self._url

    @url.setter
    def url(self, url):
        """Sets the url of this Content.

        URL for this resource.  # noqa: E501

        :param url: The url of this Content.  # noqa: E501
        :type: str
        """

        self._url = url

    @property
    def related(self):
        """Gets the related of this Content.  # noqa: E501

        Data structure with URLs of related resources.  # noqa: E501

        :return: The related of this Content.  # noqa: E501
        :rtype: dict(str, str)
        """
        return self._related

    @related.setter
    def related(self, related):
        """Sets the related of this Content.

        Data structure with URLs of related resources.  # noqa: E501

        :param related: The related of this Content.  # noqa: E501
        :type: dict(str, str)
        """

        self._related = related

    @property
    def summary_fields(self):
        """Gets the summary_fields of this Content.  # noqa: E501

        Data structure with name/description for related resources.  # noqa: E501

        :return: The summary_fields of this Content.  # noqa: E501
        :rtype: dict(str, object)
        """
        return self._summary_fields

    @summary_fields.setter
    def summary_fields(self, summary_fields):
        """Sets the summary_fields of this Content.

        Data structure with name/description for related resources.  # noqa: E501

        :param summary_fields: The summary_fields of this Content.  # noqa: E501
        :type: dict(str, object)
        """

        self._summary_fields = summary_fields

    @property
    def active(self):
        """Gets the active of this Content.  # noqa: E501


        :return: The active of this Content.  # noqa: E501
        :rtype: str
        """
        return self._active

    @active.setter
    def active(self, active):
        """Sets the active of this Content.


        :param active: The active of this Content.  # noqa: E501
        :type: str
        """

        self._active = active

    @property
    def modified(self):
        """Gets the modified of this Content.  # noqa: E501

        Timestamp when this object was last modified.  # noqa: E501

        :return: The modified of this Content.  # noqa: E501
        :rtype: str
        """
        return self._modified

    @modified.setter
    def modified(self, modified):
        """Sets the modified of this Content.

        Timestamp when this object was last modified.  # noqa: E501

        :param modified: The modified of this Content.  # noqa: E501
        :type: str
        """

        self._modified = modified

    @property
    def created(self):
        """Gets the created of this Content.  # noqa: E501

        Timestamp when this object was created.  # noqa: E501

        :return: The created of this Content.  # noqa: E501
        :rtype: str
        """
        return self._created

    @created.setter
    def created(self, created):
        """Sets the created of this Content.

        Timestamp when this object was created.  # noqa: E501

        :param created: The created of this Content.  # noqa: E501
        :type: str
        """

        self._created = created

    @property
    def company(self):
        """Gets the company of this Content.  # noqa: E501


        :return: The company of this Content.  # noqa: E501
        :rtype: str
        """
        return self._company

    @company.setter
    def company(self, company):
        """Sets the company of this Content.


        :param company: The company of this Content.  # noqa: E501
        :type: str
        """
        if company is not None and len(company) > 50:
            raise ValueError("Invalid value for `company`, length must be less than or equal to `50`")  # noqa: E501

        self._company = company

    @property
    def description(self):
        """Gets the description of this Content.  # noqa: E501


        :return: The description of this Content.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this Content.


        :param description: The description of this Content.  # noqa: E501
        :type: str
        """
        if description is not None and len(description) > 255:
            raise ValueError("Invalid value for `description`, length must be less than or equal to `255`")  # noqa: E501

        self._description = description

    @property
    def download_count(self):
        """Gets the download_count of this Content.  # noqa: E501


        :return: The download_count of this Content.  # noqa: E501
        :rtype: str
        """
        return self._download_count

    @download_count.setter
    def download_count(self, download_count):
        """Sets the download_count of this Content.


        :param download_count: The download_count of this Content.  # noqa: E501
        :type: str
        """

        self._download_count = download_count

    @property
    def download_rank(self):
        """Gets the download_rank of this Content.  # noqa: E501


        :return: The download_rank of this Content.  # noqa: E501
        :rtype: float
        """
        return self._download_rank

    @download_rank.setter
    def download_rank(self, download_rank):
        """Sets the download_rank of this Content.


        :param download_rank: The download_rank of this Content.  # noqa: E501
        :type: float
        """
        if download_rank is None:
            raise ValueError("Invalid value for `download_rank`, must not be `None`")  # noqa: E501

        self._download_rank = download_rank

    @property
    def imported(self):
        """Gets the imported of this Content.  # noqa: E501


        :return: The imported of this Content.  # noqa: E501
        :rtype: datetime
        """
        return self._imported

    @imported.setter
    def imported(self, imported):
        """Sets the imported of this Content.


        :param imported: The imported of this Content.  # noqa: E501
        :type: datetime
        """

        self._imported = imported

    @property
    def is_valid(self):
        """Gets the is_valid of this Content.  # noqa: E501


        :return: The is_valid of this Content.  # noqa: E501
        :rtype: bool
        """
        return self._is_valid

    @is_valid.setter
    def is_valid(self, is_valid):
        """Sets the is_valid of this Content.


        :param is_valid: The is_valid of this Content.  # noqa: E501
        :type: bool
        """

        self._is_valid = is_valid

    @property
    def license(self):
        """Gets the license of this Content.  # noqa: E501


        :return: The license of this Content.  # noqa: E501
        :rtype: str
        """
        return self._license

    @license.setter
    def license(self, license):
        """Sets the license of this Content.


        :param license: The license of this Content.  # noqa: E501
        :type: str
        """
        if license is not None and len(license) > 50:
            raise ValueError("Invalid value for `license`, length must be less than or equal to `50`")  # noqa: E501

        self._license = license

    @property
    def min_ansible_version(self):
        """Gets the min_ansible_version of this Content.  # noqa: E501


        :return: The min_ansible_version of this Content.  # noqa: E501
        :rtype: str
        """
        return self._min_ansible_version

    @min_ansible_version.setter
    def min_ansible_version(self, min_ansible_version):
        """Sets the min_ansible_version of this Content.


        :param min_ansible_version: The min_ansible_version of this Content.  # noqa: E501
        :type: str
        """
        if min_ansible_version is not None and len(min_ansible_version) > 10:
            raise ValueError("Invalid value for `min_ansible_version`, length must be less than or equal to `10`")  # noqa: E501

        self._min_ansible_version = min_ansible_version

    @property
    def name(self):
        """Gets the name of this Content.  # noqa: E501


        :return: The name of this Content.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this Content.


        :param name: The name of this Content.  # noqa: E501
        :type: str
        """
        if name is None:
            raise ValueError("Invalid value for `name`, must not be `None`")  # noqa: E501
        if name is not None and len(name) > 512:
            raise ValueError("Invalid value for `name`, length must be less than or equal to `512`")  # noqa: E501

        self._name = name

    @property
    def relevance(self):
        """Gets the relevance of this Content.  # noqa: E501


        :return: The relevance of this Content.  # noqa: E501
        :rtype: float
        """
        return self._relevance

    @relevance.setter
    def relevance(self, relevance):
        """Sets the relevance of this Content.


        :param relevance: The relevance of this Content.  # noqa: E501
        :type: float
        """
        if relevance is None:
            raise ValueError("Invalid value for `relevance`, must not be `None`")  # noqa: E501

        self._relevance = relevance

    @property
    def role_type(self):
        """Gets the role_type of this Content.  # noqa: E501


        :return: The role_type of this Content.  # noqa: E501
        :rtype: str
        """
        return self._role_type

    @role_type.setter
    def role_type(self, role_type):
        """Sets the role_type of this Content.


        :param role_type: The role_type of this Content.  # noqa: E501
        :type: str
        """

        self._role_type = role_type

    @property
    def search_rank(self):
        """Gets the search_rank of this Content.  # noqa: E501


        :return: The search_rank of this Content.  # noqa: E501
        :rtype: float
        """
        return self._search_rank

    @search_rank.setter
    def search_rank(self, search_rank):
        """Sets the search_rank of this Content.


        :param search_rank: The search_rank of this Content.  # noqa: E501
        :type: float
        """
        if search_rank is None:
            raise ValueError("Invalid value for `search_rank`, must not be `None`")  # noqa: E501

        self._search_rank = search_rank

    @property
    def travis_status_url(self):
        """Gets the travis_status_url of this Content.  # noqa: E501


        :return: The travis_status_url of this Content.  # noqa: E501
        :rtype: str
        """
        return self._travis_status_url

    @travis_status_url.setter
    def travis_status_url(self, travis_status_url):
        """Sets the travis_status_url of this Content.


        :param travis_status_url: The travis_status_url of this Content.  # noqa: E501
        :type: str
        """

        self._travis_status_url = travis_status_url

    @property
    def username(self):
        """Gets the username of this Content.  # noqa: E501


        :return: The username of this Content.  # noqa: E501
        :rtype: str
        """
        return self._username

    @username.setter
    def username(self, username):
        """Sets the username of this Content.


        :param username: The username of this Content.  # noqa: E501
        :type: str
        """

        self._username = username

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, Content):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
