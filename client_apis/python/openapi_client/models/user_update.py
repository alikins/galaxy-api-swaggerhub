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


class UserUpdate(object):
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
        'avatar_url': 'str',
        'date_joined': 'datetime',
        'full_name': 'str',
        'username': 'str'
    }

    attribute_map = {
        'avatar_url': 'avatar_url',
        'date_joined': 'date_joined',
        'full_name': 'full_name',
        'username': 'username'
    }

    def __init__(self, avatar_url=None, date_joined=None, full_name=None, username=None):  # noqa: E501
        """UserUpdate - a model defined in OpenAPI"""  # noqa: E501

        self._avatar_url = None
        self._date_joined = None
        self._full_name = None
        self._username = None
        self.discriminator = None

        if avatar_url is not None:
            self.avatar_url = avatar_url
        if date_joined is not None:
            self.date_joined = date_joined
        if full_name is not None:
            self.full_name = full_name
        if username is not None:
            self.username = username

    @property
    def avatar_url(self):
        """Gets the avatar_url of this UserUpdate.  # noqa: E501


        :return: The avatar_url of this UserUpdate.  # noqa: E501
        :rtype: str
        """
        return self._avatar_url

    @avatar_url.setter
    def avatar_url(self, avatar_url):
        """Sets the avatar_url of this UserUpdate.


        :param avatar_url: The avatar_url of this UserUpdate.  # noqa: E501
        :type: str
        """
        if avatar_url is not None and len(avatar_url) > 256:
            raise ValueError("Invalid value for `avatar_url`, length must be less than or equal to `256`")  # noqa: E501

        self._avatar_url = avatar_url

    @property
    def date_joined(self):
        """Gets the date_joined of this UserUpdate.  # noqa: E501


        :return: The date_joined of this UserUpdate.  # noqa: E501
        :rtype: datetime
        """
        return self._date_joined

    @date_joined.setter
    def date_joined(self, date_joined):
        """Sets the date_joined of this UserUpdate.


        :param date_joined: The date_joined of this UserUpdate.  # noqa: E501
        :type: datetime
        """

        self._date_joined = date_joined

    @property
    def full_name(self):
        """Gets the full_name of this UserUpdate.  # noqa: E501


        :return: The full_name of this UserUpdate.  # noqa: E501
        :rtype: str
        """
        return self._full_name

    @full_name.setter
    def full_name(self, full_name):
        """Sets the full_name of this UserUpdate.


        :param full_name: The full_name of this UserUpdate.  # noqa: E501
        :type: str
        """
        if full_name is not None and len(full_name) > 254:
            raise ValueError("Invalid value for `full_name`, length must be less than or equal to `254`")  # noqa: E501

        self._full_name = full_name

    @property
    def username(self):
        """Gets the username of this UserUpdate.  # noqa: E501

        Required. 30 characters or fewer. Letters, numbers and @/./+/-/_ characters  # noqa: E501

        :return: The username of this UserUpdate.  # noqa: E501
        :rtype: str
        """
        return self._username

    @username.setter
    def username(self, username):
        """Sets the username of this UserUpdate.

        Required. 30 characters or fewer. Letters, numbers and @/./+/-/_ characters  # noqa: E501

        :param username: The username of this UserUpdate.  # noqa: E501
        :type: str
        """
        if username is not None and len(username) > 30:
            raise ValueError("Invalid value for `username`, length must be less than or equal to `30`")  # noqa: E501
        if username is not None and not re.search(r'^[a-zA-Z0-9_.@+-]+$', username):  # noqa: E501
            raise ValueError(r"Invalid value for `username`, must be a follow pattern or equal to `/^[a-zA-Z0-9_.@+-]+$/`")  # noqa: E501

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
        if not isinstance(other, UserUpdate):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
