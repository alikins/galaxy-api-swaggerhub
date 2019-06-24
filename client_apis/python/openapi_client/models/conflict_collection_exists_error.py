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


class ConflictCollectionExistsError(object):
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
        'code': 'str',
        'message': 'str',
        'errors': 'list[Error]'
    }

    attribute_map = {
        'code': 'code',
        'message': 'message',
        'errors': 'errors'
    }

    def __init__(self, code=None, message=None, errors=None):  # noqa: E501
        """ConflictCollectionExistsError - a model defined in OpenAPI"""  # noqa: E501

        self._code = None
        self._message = None
        self._errors = None
        self.discriminator = None

        self.code = code
        self.message = message
        if errors is not None:
            self.errors = errors

    @property
    def code(self):
        """Gets the code of this ConflictCollectionExistsError.  # noqa: E501

        Unique identifier for the exception  # noqa: E501

        :return: The code of this ConflictCollectionExistsError.  # noqa: E501
        :rtype: str
        """
        return self._code

    @code.setter
    def code(self, code):
        """Sets the code of this ConflictCollectionExistsError.

        Unique identifier for the exception  # noqa: E501

        :param code: The code of this ConflictCollectionExistsError.  # noqa: E501
        :type: str
        """
        if code is None:
            raise ValueError("Invalid value for `code`, must not be `None`")  # noqa: E501

        self._code = code

    @property
    def message(self):
        """Gets the message of this ConflictCollectionExistsError.  # noqa: E501


        :return: The message of this ConflictCollectionExistsError.  # noqa: E501
        :rtype: str
        """
        return self._message

    @message.setter
    def message(self, message):
        """Sets the message of this ConflictCollectionExistsError.


        :param message: The message of this ConflictCollectionExistsError.  # noqa: E501
        :type: str
        """
        if message is None:
            raise ValueError("Invalid value for `message`, must not be `None`")  # noqa: E501

        self._message = message

    @property
    def errors(self):
        """Gets the errors of this ConflictCollectionExistsError.  # noqa: E501

        A list of additional error objects  # noqa: E501

        :return: The errors of this ConflictCollectionExistsError.  # noqa: E501
        :rtype: list[Error]
        """
        return self._errors

    @errors.setter
    def errors(self, errors):
        """Sets the errors of this ConflictCollectionExistsError.

        A list of additional error objects  # noqa: E501

        :param errors: The errors of this ConflictCollectionExistsError.  # noqa: E501
        :type: list[Error]
        """

        self._errors = errors

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
        if not isinstance(other, ConflictCollectionExistsError):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
