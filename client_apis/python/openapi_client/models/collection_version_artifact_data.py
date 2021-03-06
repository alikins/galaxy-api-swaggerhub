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


class CollectionVersionArtifactData(object):
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
        'sha256': 'str',
        'file': 'file'
    }

    attribute_map = {
        'sha256': 'sha256',
        'file': 'file'
    }

    def __init__(self, sha256=None, file=None):  # noqa: E501
        """CollectionVersionArtifactData - a model defined in OpenAPI"""  # noqa: E501

        self._sha256 = None
        self._file = None
        self.discriminator = None

        if sha256 is not None:
            self.sha256 = sha256
        if file is not None:
            self.file = file

    @property
    def sha256(self):
        """Gets the sha256 of this CollectionVersionArtifactData.  # noqa: E501

        The sha256sum of the collection artifact file  # noqa: E501

        :return: The sha256 of this CollectionVersionArtifactData.  # noqa: E501
        :rtype: str
        """
        return self._sha256

    @sha256.setter
    def sha256(self, sha256):
        """Sets the sha256 of this CollectionVersionArtifactData.

        The sha256sum of the collection artifact file  # noqa: E501

        :param sha256: The sha256 of this CollectionVersionArtifactData.  # noqa: E501
        :type: str
        """

        self._sha256 = sha256

    @property
    def file(self):
        """Gets the file of this CollectionVersionArtifactData.  # noqa: E501

        The binary contents of a collection artifact  # noqa: E501

        :return: The file of this CollectionVersionArtifactData.  # noqa: E501
        :rtype: file
        """
        return self._file

    @file.setter
    def file(self, file):
        """Sets the file of this CollectionVersionArtifactData.

        The binary contents of a collection artifact  # noqa: E501

        :param file: The file of this CollectionVersionArtifactData.  # noqa: E501
        :type: file
        """

        self._file = file

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
        if not isinstance(other, CollectionVersionArtifactData):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
