export const $ADMoveObjectListDto_Request = {
  type: 'object',
  properties: {
    Objects: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/AdObjectGroupMemberDto:Request',
      },
    },
    DestinationOUPath: {
      type: 'string',
    },
  },
} as const;

export const $AdObjectMemberofDto_Request = {
  type: 'object',
  properties: {
    ObjectDn: {
      type: 'string',
    },
  },
} as const;

export const $AdObjectsMemberofListDto_Request = {
  type: 'object',
  properties: {
    Objects: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/AdObjectMemberofDto:Request',
      },
    },
    ObjectDn: {
      type: 'string',
    },
  },
} as const;

export const $AdObjectMemberofDto = {
  type: 'object',
  properties: {
    UserDn: {
      type: 'string',
    },
    ObjectName: {
      type: 'string',
    },
  },
} as const;

export const $AdObjectsMemberofListDto = {
  type: 'object',
  properties: {
    Objects: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/AdObjectMemberofDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $GroupMangaedByDto_Request = {
  type: 'object',
  properties: {
    ObjectDn: {
      type: 'string',
    },
    ManagedBy: {
      type: 'string',
    },
  },
} as const;

export const $GroupMangaedByDto = {
  type: 'object',
  properties: {
    ManagedBy: {
      type: 'string',
    },
    ObjectName: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $AdObjectDetailsDto = {
  type: 'object',
  properties: {
    ObjectDn: {
      type: 'string',
    },
    Protection: {
      type: 'boolean',
    },
  },
} as const;

export const $AdObjectGroupMemberDto = {
  type: 'object',
  properties: {
    UserDn: {
      type: 'string',
    },
    Protection: {
      type: 'boolean',
    },
    ObjectName: {
      type: 'string',
    },
  },
} as const;

export const $AdObjectGroupMemberDto_Request = {
  type: 'object',
  properties: {
    ObjectDn: {
      type: 'string',
    },
  },
} as const;

export const $AdObjectsGroupMemberListDto = {
  type: 'object',
  properties: {
    Objects: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/AdObjectGroupMemberDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $AdObjectsGroupMemberListDto_Request = {
  type: 'object',
  properties: {
    Objects: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/AdObjectGroupMemberDto:Request',
      },
    },
    ObjectDn: {
      type: 'string',
    },
  },
} as const;

export const $ADUserAccountSettingDto_Request = {
  type: 'object',
  properties: {
    UserDn: {
      type: 'string',
    },
    SetToNeverExpire: {
      type: 'boolean',
    },
    ExpiryDateTime: {
      type: 'string',
      format: 'date-time',
    },
  },
} as const;

export const $ADUserAccountSettingDto = {
  type: 'object',
  properties: {
    ExpiryDateTime: {
      type: 'string',
      format: 'date-time',
    },
    SetToNeverExpire: {
      type: 'boolean',
    },
    RequirePasswordOnNextLogon: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $AdUsersDto_Request = {
  type: 'object',
  properties: {
    AdUsers: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/AdUserDto:Request',
      },
    },
  },
} as const;

export const $AdUserDto_Request = {
  type: 'object',
  properties: {
    UserDn: {
      type: 'string',
    },
  },
} as const;

export const $AdUserPasswordDto = {
  required: ['Password'],
  type: 'object',
  properties: {
    Password: {
      type: 'string',
    },
    RequirePasswordOnNextLogon: {
      type: 'boolean',
    },
    UserDn: {
      type: 'string',
    },
  },
} as const;

export const $ActiveDirectoryObjectDto = {
  type: 'object',
  properties: {
    UpnSuffix: {
      type: 'string',
    },
    SystemName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    RequirePasswordOnNextLogon: {
      type: 'boolean',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationName: {
      type: 'string',
    },
    OuPath: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ActiveDirectoryObjectDto_Request = {
  required: ['DisplayName', 'OrganizationId', 'SystemName'],
  type: 'object',
  properties: {
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    SystemName: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    UpnSuffix: {
      type: 'string',
    },
  },
} as const;

export const $AdObjectsDto = {
  type: 'object',
  properties: {
    AdObjects: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/AdObjectDto:Request',
      },
    },
  },
} as const;

export const $AdObjectDto_Request = {
  type: 'object',
  properties: {
    ObjectDn: {
      type: 'string',
    },
    ObjectType: {
      type: 'string',
    },
  },
} as const;

export const $OrganizationObjectsDto = {
  type: 'object',
  properties: {
    OrganizationObjects: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/OrganizationObjectDto:List',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $OrganizationObjectDto_List = {
  type: 'object',
  properties: {
    Name: {
      type: 'string',
    },
    DistinguishedName: {
      type: 'string',
    },
    Enabled: {
      type: 'boolean',
    },
    ObjectType: {
      type: 'string',
    },
    ObjectDetailedType: {
      type: 'string',
    },
  },
} as const;

export const $ADUserGeneralProfileDto = {
  type: 'object',
  properties: {
    ObjectType: {
      type: 'string',
    },
    FirstName: {
      type: 'string',
    },
    LastName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    Initials: {
      type: 'string',
    },
    OfficeLocation: {
      type: 'string',
    },
    StreetAddress: {
      type: 'string',
    },
    ZipCode: {
      type: 'string',
    },
    City: {
      type: 'string',
    },
    State: {
      type: 'string',
    },
    CountryId: {
      type: 'integer',
      format: 'int32',
    },
    CountryAbbreviation: {
      type: 'string',
    },
    JobTitle: {
      type: 'string',
    },
    Company: {
      type: 'string',
    },
    Department: {
      type: 'string',
    },
    BusinessPhone: {
      type: 'string',
    },
    HomePhone: {
      type: 'string',
    },
    MobilePhone: {
      type: 'string',
    },
    Fax: {
      type: 'string',
    },
    WebPage: {
      type: 'string',
    },
    Notes: {
      type: 'string',
    },
    Pager: {
      type: 'string',
    },
    UserManager: {
      $ref: '#/components/schemas/ManagerDto',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ManagerDto = {
  type: 'object',
  properties: {
    Email: {
      type: 'string',
    },
  },
} as const;

export const $User = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      format: 'int64',
    },
    username: {
      type: 'string',
    },
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
    phone: {
      type: 'string',
    },
    userStatus: {
      type: 'integer',
      description: 'User Status',
      format: 'int32',
    },
  },
  xml: {
    name: 'User',
  },
} as const;

export const $ApiResponse = {
  type: 'object',
  properties: {
    code: {
      type: 'integer',
      format: 'int32',
    },
    type: {
      type: 'string',
    },
    message: {
      type: 'string',
    },
  },
} as const;

export const $AddUserDto = {
  required: ['EmailAddress', 'Password', 'UserName'],
  type: 'object',
  properties: {
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    UserName: {
      pattern: '^[A-Za-z0-9_-]{1,20}$',
      type: 'string',
    },
    EmailAddress: {
      type: 'string',
    },
    RoleId: {
      type: 'integer',
      format: 'int32',
    },
    Password: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    IsDisabled: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $UsersSearchDto = {
  type: 'object',
  properties: {
    UserName: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    IsDisabled: {
      type: 'integer',
      format: 'int32',
    },
    IsBilling: {
      type: 'boolean',
    },
    IsDefaultCreditCardEnabled: {
      type: 'boolean',
    },
    RoleId: {
      type: 'integer',
      format: 'int32',
    },
    FirstName: {
      type: 'string',
    },
    LastName: {
      type: 'string',
    },
    Company: {
      type: 'string',
    },
    EmailAddress: {
      type: 'string',
    },
    DirectChild: {
      type: 'boolean',
    },
    ExactNameMatch: {
      type: 'boolean',
    },
    CustomersOnly: {
      type: 'boolean',
    },
    StaffMembersOnly: {
      type: 'boolean',
    },
    CurrentPage: {
      type: 'integer',
      format: 'int32',
    },
    PageSize: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $UsersDto = {
  type: 'object',
  properties: {
    Users: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/UserDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $UserDto = {
  required: ['EmailAddress', 'Password', 'UserName'],
  type: 'object',
  properties: {
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    UserName: {
      pattern: '^[A-Za-z0-9_-]{1,20}$',
      type: 'string',
    },
    RoleId: {
      type: 'integer',
      format: 'int32',
    },
    RoleName: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    EmailAddress: {
      type: 'string',
    },
    IsSubadmin: {
      type: 'boolean',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    FullName: {
      type: 'string',
    },
    IsDisabled: {
      type: 'integer',
      format: 'int32',
    },
    DisabledBy: {
      type: 'integer',
      format: 'int32',
    },
    IsDefaultCreditCardEnabled: {
      type: 'boolean',
    },
    BillingProfileId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $UserDto_List = {
  required: ['EmailAddress', 'Password', 'UserName'],
  type: 'object',
  properties: {
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    UserName: {
      pattern: '^[A-Za-z0-9_-]{1,20}$',
      type: 'string',
    },
    RoleId: {
      type: 'integer',
      format: 'int32',
    },
    RoleName: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    EmailAddress: {
      type: 'string',
    },
    IsSubadmin: {
      type: 'boolean',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    FullName: {
      type: 'string',
    },
    IsDisabled: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $UserUpdateDto = {
  required: ['Password'],
  type: 'object',
  properties: {
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    Password: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    IsDisabled: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $AddUserDto_Request = {
  required: ['EmailAddress', 'Password', 'RoleId', 'UserName'],
  type: 'object',
  properties: {
    UserName: {
      pattern: '^[A-Za-z0-9_-]{1,20}$',
      type: 'string',
      description:
        'User name cannot be more than 20 characters long and white space is not allowed.',
      default: 'tom',
    },
    EmailAddress: {
      type: 'string',
      description: 'Email address should be valid.',
      default: 'tom@example.com',
    },
    RoleId: {
      type: 'integer',
      description: "You can get role id by calling 'GET /user-roles'",
      format: 'int32',
    },
    Password: {
      type: 'string',
      description:
        'Password should be complex, if the password complexity is enabled.',
    },
    Description: {
      type: 'string',
    },
    IsDisabled: {
      type: 'integer',
      description: 'Set it true if want to disable user.',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $UserUpdateDto_Request = {
  required: ['Password'],
  type: 'object',
  properties: {
    Password: {
      type: 'string',
      description:
        'Password should be complex, if the password complexity is enabled.',
    },
    Description: {
      type: 'string',
    },
    IsDisabled: {
      type: 'integer',
      description: 'Set it true if want to disable user.',
      format: 'int32',
    },
  },
} as const;

export const $UserDisableOptionDto = {
  type: 'object',
  properties: {
    DisableOption: {
      type: 'string',
      description: 'possible values are as follows',
      enum: [
        'restrictpanelaccess',
        'suspenduser',
        'restrictpanelaccessandsuspenduser',
      ],
    },
  },
} as const;

export const $UserChangePasswordDto = {
  required: ['Password'],
  type: 'object',
  properties: {
    Password: {
      type: 'string',
      description: 'New password.',
    },
  },
} as const;

export const $UserProfileDto_Request = {
  required: [
    'City',
    'Country',
    'EmailAddress',
    'FirstName',
    'LastName',
    'PhoneNo',
    'State',
    'StreetAddress',
  ],
  type: 'object',
  properties: {
    FirstName: {
      type: 'string',
    },
    LastName: {
      type: 'string',
    },
    Company: {
      type: 'string',
    },
    EmailAddress: {
      type: 'string',
    },
    Country: {
      type: 'integer',
      format: 'int32',
    },
    State: {
      type: 'string',
    },
    City: {
      type: 'string',
    },
    StreetAddress: {
      type: 'string',
    },
    StreetAddress2: {
      type: 'string',
    },
    PostalCode: {
      type: 'string',
    },
    PhoneNo: {
      type: 'string',
    },
    FaxNo: {
      type: 'string',
    },
    SocialSecurityNo: {
      type: 'string',
    },
    CustomFields: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/UserCustomFieldDto',
      },
    },
  },
} as const;

export const $UserProfileDto = {
  required: [
    'City',
    'EmailAddress',
    'FirstName',
    'LastName',
    'PhoneNo',
    'State',
    'StreetAddress',
  ],
  type: 'object',
  properties: {
    FirstName: {
      type: 'string',
    },
    LastName: {
      type: 'string',
    },
    EmailAddress: {
      type: 'string',
    },
    Company: {
      type: 'string',
    },
    Country: {
      type: 'integer',
      format: 'int32',
    },
    State: {
      type: 'string',
    },
    City: {
      type: 'string',
    },
    StreetAddress: {
      type: 'string',
    },
    StreetAddress2: {
      type: 'string',
    },
    PostalCode: {
      type: 'string',
    },
    PhoneNo: {
      type: 'string',
    },
    FaxNo: {
      type: 'string',
    },
    SocialSecurityNo: {
      type: 'string',
    },
    CustomFieldXml: {
      type: 'string',
    },
    CustomFields: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/UserCustomFieldDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $UserCustomFieldDto = {
  type: 'object',
  properties: {
    CustomFieldId: {
      type: 'integer',
      format: 'int32',
    },
    Value: {
      type: 'string',
    },
  },
} as const;

export const $BillingProfileDto = {
  required: [
    'BillingAddress',
    'BillingCity',
    'BillingEmail',
    'BillingPhone',
    'FirstName',
    'LastName',
    'State',
    'ZipCode',
  ],
  type: 'object',
  properties: {
    BillingProfileId: {
      type: 'integer',
      format: 'int32',
    },
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    UserName: {
      type: 'string',
    },
    FirstName: {
      type: 'string',
    },
    LastName: {
      type: 'string',
    },
    BillingAddress: {
      type: 'string',
    },
    BillingCity: {
      type: 'string',
    },
    State: {
      type: 'string',
    },
    Country: {
      type: 'integer',
      format: 'int32',
    },
    ZipCode: {
      type: 'string',
    },
    BillingPhone: {
      type: 'string',
    },
    BillingFax: {
      type: 'string',
    },
    BillingEmail: {
      type: 'string',
    },
    CreditLimit: {
      minimum: 0,
      type: 'number',
      format: 'double',
    },
    DefaultDiscount: {
      maximum: 100,
      minimum: 0,
      type: 'number',
      format: 'double',
    },
    CreditCardTypeId: {
      maximum: 2147483647,
      minimum: 0,
      type: 'integer',
      format: 'int32',
    },
    CreditCardType: {
      type: 'string',
    },
    CreditCardNo: {
      type: 'string',
    },
    ExpireDate: {
      type: 'string',
      format: 'date-time',
    },
    Cvv2: {
      type: 'string',
    },
    IsEnabled: {
      type: 'boolean',
    },
    IsDefault: {
      type: 'boolean',
    },
    CustomFields: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/UserCustomFieldDto',
      },
    },
    CustomFieldXml: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $BillingProfileDto_List = {
  required: [
    'BillingAddress',
    'BillingCity',
    'BillingEmail',
    'BillingPhone',
    'FirstName',
    'LastName',
    'State',
    'ZipCode',
  ],
  type: 'object',
  properties: {
    BillingProfileId: {
      type: 'integer',
      format: 'int32',
    },
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    UserName: {
      type: 'string',
    },
    FirstName: {
      type: 'string',
    },
    LastName: {
      type: 'string',
    },
    BillingAddress: {
      type: 'string',
    },
    BillingCity: {
      type: 'string',
    },
    State: {
      type: 'string',
    },
    Country: {
      type: 'integer',
      format: 'int32',
    },
    ZipCode: {
      type: 'string',
    },
    BillingPhone: {
      type: 'string',
    },
    BillingFax: {
      type: 'string',
    },
    BillingEmail: {
      type: 'string',
    },
    CreditLimit: {
      minimum: 0,
      type: 'number',
      format: 'double',
    },
    DefaultDiscount: {
      maximum: 100,
      minimum: 0,
      type: 'number',
      format: 'double',
    },
    CreditCardTypeId: {
      maximum: 2147483647,
      minimum: 0,
      type: 'integer',
      format: 'int32',
    },
    CreditCardType: {
      type: 'string',
    },
    CreditCardNo: {
      type: 'string',
    },
    ExpireDate: {
      type: 'string',
      format: 'date-time',
    },
    Cvv2: {
      type: 'string',
    },
    IsEnabled: {
      type: 'boolean',
    },
    IsDefault: {
      type: 'boolean',
    },
    CustomFields: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/UserCustomFieldDto',
      },
    },
    CustomFieldXml: {
      type: 'string',
    },
  },
} as const;

export const $BillingProfileDto_Request = {
  required: [
    'BillingAddress',
    'BillingCity',
    'BillingEmail',
    'BillingPhone',
    'FirstName',
    'LastName',
    'State',
    'ZipCode',
  ],
  type: 'object',
  properties: {
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    UserName: {
      type: 'string',
    },
    FirstName: {
      type: 'string',
    },
    LastName: {
      type: 'string',
    },
    BillingAddress: {
      type: 'string',
    },
    BillingCity: {
      type: 'string',
    },
    State: {
      type: 'string',
    },
    Country: {
      type: 'integer',
      format: 'int32',
    },
    ZipCode: {
      type: 'string',
    },
    BillingPhone: {
      type: 'string',
    },
    BillingFax: {
      type: 'string',
    },
    BillingEmail: {
      type: 'string',
    },
    CreditLimit: {
      minimum: 0,
      type: 'number',
      format: 'double',
    },
    DefaultDiscount: {
      maximum: 100,
      minimum: 0,
      type: 'number',
      format: 'double',
    },
    CreditCardTypeId: {
      maximum: 2147483647,
      minimum: 0,
      type: 'integer',
      format: 'int32',
    },
    CreditCardType: {
      type: 'string',
    },
    CreditCardNo: {
      type: 'string',
    },
    ExpireDate: {
      type: 'string',
      format: 'date-time',
    },
    Cvv2: {
      type: 'string',
    },
    IsEnabled: {
      type: 'boolean',
    },
    IsDefault: {
      type: 'boolean',
    },
    CustomFields: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/UserCustomFieldDto',
      },
    },
    CustomFieldXml: {
      type: 'string',
    },
  },
} as const;

export const $BillingProfileSearchDto = {
  type: 'object',
  properties: {
    UserName: {
      type: 'string',
    },
    defaultOnly: {
      type: 'string',
    },
    CreditCardTypeId: {
      type: 'integer',
      format: 'int32',
    },
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    IncludeUsersProfile: {
      type: 'boolean',
    },
    CurrentPage: {
      type: 'integer',
      format: 'int32',
    },
    PageSize: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $BillingProfilesDto = {
  type: 'object',
  properties: {
    BillingProfiles: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/BillingProfileDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $StatusDto = {
  type: 'object',
  properties: {
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $StatsListDto = {
  type: 'object',
  properties: {
    Stats: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/StatsDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $StatsDto = {
  type: 'object',
  properties: {
    RoleName: {
      type: 'string',
    },
    Count: {
      type: 'integer',
      format: 'int32',
    },
    TotalCount: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $StatsDto_List = {
  type: 'object',
  properties: {
    RoleName: {
      type: 'string',
    },
    Count: {
      type: 'integer',
      format: 'int32',
    },
    TotalCount: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $TokenDto = {
  type: 'object',
  properties: {
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    AuthToken: {
      type: 'string',
    },
    ExpiresIn: {
      type: 'integer',
      format: 'int32',
    },
    IssuedOn: {
      type: 'string',
    },
    IsExpired: {
      type: 'boolean',
    },
  },
} as const;

export const $AuthenticationDto_Request = {
  required: ['LoginName', 'Password'],
  type: 'object',
  properties: {
    LoginName: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    ApplicationName: {
      type: 'string',
      description: 'Client Application Name',
      default: 'hcapiconsole',
    },
    ExpiresIn: {
      type: 'integer',
      description:
        'life of token, its value is in hours. Minimum 1 and Maximum 720.',
      format: 'int32',
      default: 1,
    },
  },
} as const;

export const $AuthenticationDto = {
  required: ['LoginName', 'Password'],
  type: 'object',
  properties: {
    LoginName: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    ExpiresIn: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $QuotaReportDto = {
  type: 'object',
  properties: {
    ReportResources: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/QuotaResourceDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $BillingReportsDto = {
  type: 'object',
  properties: {
    BillingReports: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/BillingReportDto',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $BillingReportDto = {
  type: 'object',
  properties: {
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    UserName: {
      type: 'string',
    },
    TotalSoldPlans: {
      type: 'integer',
      format: 'int32',
    },
    TotalInvoices: {
      type: 'integer',
      format: 'int32',
    },
    Balance: {
      type: 'number',
      format: 'double',
    },
    TotalInvoiceAmounts: {
      type: 'number',
      format: 'double',
    },
    TotalPaymentsReceived: {
      type: 'number',
      format: 'double',
    },
    CreditLimit: {
      type: 'number',
      format: 'double',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $IncomeStatsDto = {
  type: 'object',
  properties: {
    TotalInvoiceAmounts: {
      type: 'integer',
      format: 'int32',
    },
    TotalRevenue: {
      type: 'number',
      format: 'double',
    },
    IncomeDue: {
      type: 'number',
      format: 'double',
    },
    TotalPaymentsReceived: {
      type: 'number',
      format: 'double',
    },
    TotalSubscriptionsCount: {
      type: 'integer',
      format: 'int32',
    },
    TotalSubscriptionsAmount: {
      type: 'number',
      format: 'double',
    },
    TotalTaxes: {
      type: 'number',
      format: 'double',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $InvoiceStatsDto = {
  type: 'object',
  properties: {
    TotalInvoices: {
      type: 'integer',
      format: 'int32',
    },
    TotalInvoiceAmounts: {
      type: 'number',
      format: 'double',
    },
    TotalDueInvoices: {
      type: 'integer',
      format: 'int32',
    },
    TotalDueInvoicesAmount: {
      type: 'number',
      format: 'double',
    },
    TotalPaidInvoices: {
      type: 'integer',
      format: 'int32',
    },
    TotalPaidInvoicesAmount: {
      type: 'number',
      format: 'double',
    },
    TotalCancelledInvoices: {
      type: 'integer',
      format: 'int32',
    },
    TotalCancelledInvoicesAmount: {
      type: 'number',
      format: 'double',
    },
    TotalChargedBackInvoices: {
      type: 'integer',
      format: 'int32',
    },
    TotalChargedBackInvoicesAmount: {
      type: 'number',
      format: 'double',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $FundsStatsDto = {
  type: 'object',
  properties: {
    TotalInvoiceAmounts: {
      type: 'number',
      format: 'double',
    },
    ConsumedFunds: {
      type: 'number',
      format: 'double',
    },
    RemainingFunds: {
      type: 'number',
      format: 'double',
    },
    TotalTaxes: {
      type: 'number',
      format: 'double',
    },
    TotalPaymentsDone: {
      type: 'number',
      format: 'double',
    },
    TotalSubscriptionsCount: {
      type: 'integer',
      format: 'int32',
    },
    TotalSubscriptionsAmount: {
      type: 'number',
      format: 'double',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $MailboxStatsReportDto = {
  type: 'object',
  properties: {
    TotalMailboxCount: {
      type: 'integer',
      format: 'int32',
    },
    TotalMailboxSize: {
      type: 'integer',
      format: 'int32',
    },
    TotalEnabledMailboxes: {
      type: 'integer',
      format: 'int32',
    },
    TotalDisabledMailboxes: {
      type: 'integer',
      format: 'int32',
    },
    TotalOWAEnabledMailboxes: {
      type: 'integer',
      format: 'int32',
    },
    TotalIMAPEnabledMailboxes: {
      type: 'integer',
      format: 'int32',
    },
    TotalMAPIEnabledMailboxes: {
      type: 'integer',
      format: 'int32',
    },
    TotalPOPEnabldMailbxoes: {
      type: 'integer',
      format: 'int32',
    },
    TotalActiveSyncMailboxes: {
      type: 'integer',
      format: 'int32',
    },
    TotalArchiveMailboxes: {
      type: 'integer',
      format: 'int32',
    },
    TotalArchiveMailboxSize: {
      type: 'integer',
      format: 'int32',
    },
    TotalBBEnabledMailboxes: {
      type: 'integer',
      format: 'int32',
    },
    TotalJournalMailboxes: {
      type: 'integer',
      format: 'int32',
    },
    TotalPFMailboxes: {
      type: 'integer',
      format: 'int32',
    },
    TotalADSyncMailboxes: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeMailboxReportDto = {
  type: 'object',
  properties: {
    MailboxId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    MailDomainId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxType: {
      type: 'string',
    },
    SystemName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    IsNewUser: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    MaildomainName: {
      type: 'string',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    ActiveSync: {
      type: 'boolean',
    },
    ActiveSyncPolicy: {
      type: 'string',
    },
    IMAP: {
      type: 'boolean',
    },
    POP: {
      type: 'boolean',
    },
    MAPI: {
      type: 'boolean',
    },
    OWA: {
      type: 'boolean',
    },
    MailboxSize: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    HideFromAddressBook: {
      type: 'boolean',
    },
    MaxIncomingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    MaxOutgoingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    ProhibitSend: {
      type: 'integer',
      format: 'int32',
    },
    WarnAt: {
      type: 'integer',
      format: 'int32',
    },
    IsDisabled: {
      type: 'boolean',
    },
    Flag: {
      type: 'string',
    },
    OfficeLocation: {
      type: 'string',
    },
    SAMAccount: {
      type: 'string',
    },
    PrimarySMTPAddress: {
      type: 'string',
    },
    Guid: {
      type: 'string',
    },
    MailboxLitigationHoldEnabled: {
      type: 'boolean',
    },
    ArchiveMailboxId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxDatabase: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeMailboxReportListDto = {
  type: 'object',
  properties: {
    Mailboxes: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExchangeMailboxReportDto',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeCustomReportsDto = {
  type: 'object',
  properties: {
    ExchangeCustomReports: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExchangeCustomReportDto',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeCustomReportDto = {
  required: ['ExchangeCommand', 'ReportName'],
  type: 'object',
  properties: {
    ReportId: {
      type: 'integer',
      format: 'int32',
    },
    ReportName: {
      type: 'string',
    },
    ReportDescription: {
      type: 'string',
    },
    ExchangeCommand: {
      type: 'string',
    },
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    ExchangeCustomReportOutputFields: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExchangeGenericReportArgumentsDto',
      },
    },
    ServerIp: {
      type: 'string',
    },
    ServerName: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeGenericReportArgumentsDto = {
  type: 'object',
  properties: {
    FieldName: {
      type: 'string',
    },
    FieldValue: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeGenericReportListDto = {
  type: 'object',
  properties: {
    ReportName: {
      type: 'string',
    },
    ReportDescription: {
      type: 'string',
    },
    ExchangeCommand: {
      type: 'string',
    },
    Records: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: {
          type: 'string',
        },
      },
    },
    RecordCount: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ConsumedQuotaResourceDto = {
  type: 'object',
  properties: {
    RoleName: {
      type: 'string',
    },
    ResourceName: {
      type: 'string',
    },
    ResourceDisplayName: {
      type: 'string',
    },
    Quantity: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $ConsumedQuotaReportDto = {
  type: 'object',
  properties: {
    ReportResources: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ConsumedQuotaResourceDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $DailyResUsageDto = {
  type: 'object',
  properties: {
    ResourceName: {
      type: 'string',
    },
    ResourceDisplayName: {
      type: 'string',
    },
    RoleName: {
      type: 'string',
    },
    Usage: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/DailyUsageDto',
      },
    },
  },
} as const;

export const $DailyUsageDto = {
  type: 'object',
  properties: {
    Count: {
      type: 'integer',
      format: 'int64',
    },
    DateText: {
      type: 'string',
    },
  },
} as const;

export const $DailyResUsageReportDto = {
  type: 'object',
  properties: {
    Resources: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/DailyResUsageDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $PanelStatsDto = {
  type: 'object',
  properties: {
    Customers: {
      type: 'integer',
      format: 'int32',
    },
    StaffMembers: {
      type: 'integer',
      format: 'int32',
    },
    ServicePlans: {
      type: 'integer',
      format: 'int32',
    },
    SoldPlans: {
      type: 'integer',
      format: 'int32',
    },
    Messages: {
      type: 'integer',
      format: 'int32',
    },
    ClientTickets: {
      type: 'integer',
      format: 'int32',
    },
    MyTickets: {
      type: 'integer',
      format: 'int32',
    },
    SubscribedPlans: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $DetailKeyValuePairDto = {
  type: 'object',
  properties: {
    Key: {
      type: 'string',
    },
    Value: {
      type: 'string',
    },
  },
} as const;

export const $QuotaResourceDto = {
  type: 'object',
  properties: {
    ResourceId: {
      type: 'integer',
      format: 'int32',
    },
    ResourceName: {
      type: 'string',
    },
    ResourceDisplayName: {
      type: 'string',
    },
    ProviderId: {
      type: 'integer',
      format: 'int32',
    },
    ProviderName: {
      type: 'string',
    },
    ResourceComponent: {
      type: 'string',
    },
    ResourceComponentPropId: {
      type: 'integer',
      format: 'int32',
    },
    IsComposite: {
      type: 'boolean',
    },
    AllocatedQty: {
      type: 'integer',
      format: 'int32',
    },
    SoldQty: {
      type: 'integer',
      format: 'int32',
    },
    UsedQty: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $StatesDto = {
  type: 'object',
  properties: {
    States: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/StateDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $StateDto = {
  type: 'object',
  properties: {
    StateId: {
      type: 'integer',
      format: 'int32',
    },
    StateName: {
      type: 'string',
    },
    StateCode: {
      type: 'string',
    },
    CountryId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $CountriesDto = {
  type: 'object',
  properties: {
    Countries: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/CountryDto:List',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $CountryDto_List = {
  type: 'object',
  properties: {
    CountryId: {
      type: 'integer',
      format: 'int32',
    },
    CountryName: {
      type: 'string',
    },
    Abbrivation: {
      type: 'string',
    },
    NumericCode: {
      type: 'integer',
      format: 'int32',
    },
    ZipCodeRegex: {
      type: 'string',
    },
  },
} as const;

export const $CountryDto = {
  type: 'object',
  properties: {
    CountryId: {
      type: 'integer',
      format: 'int32',
    },
    CountryName: {
      type: 'string',
    },
    Abbrivation: {
      type: 'string',
    },
    NumericCode: {
      type: 'integer',
      format: 'int32',
    },
    ZipCodeRegex: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $LanguagesDto = {
  type: 'object',
  properties: {
    Languages: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/LanguageDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $LanguageDto = {
  type: 'object',
  properties: {
    LanguageId: {
      type: 'integer',
      format: 'int32',
    },
    LanguageName: {
      type: 'string',
    },
    LanguageDisplayName: {
      type: 'string',
    },
    IsRtl: {
      type: 'boolean',
    },
    LanguageStatus: {
      type: 'boolean',
    },
  },
} as const;

export const $TypesItemsDto = {
  type: 'object',
  properties: {
    TypeItems: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/TypeItemsDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $TypeItemsDto = {
  type: 'object',
  properties: {
    TypeItemId: {
      type: 'integer',
      format: 'int32',
    },
    SystemName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    DisplayIndex: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $ErrorLogsDto = {
  type: 'object',
  properties: {
    ErrorLogs: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ErrorLogDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ErrorLogDto_List = {
  type: 'object',
  properties: {
    ErrorLogId: {
      type: 'string',
    },
    SourceName: {
      type: 'string',
    },
    MethodName: {
      type: 'string',
    },
    ExpceptionObj: {
      $ref: '#/components/schemas/Object',
    },
    InputParam: {
      $ref: '#/components/schemas/Object',
    },
    ExceptionMsg: {
      type: 'string',
    },
    ExceptionType: {
      type: 'string',
    },
    UserName: {
      type: 'string',
    },
    DateAdded: {
      type: 'string',
      format: 'date-time',
    },
  },
} as const;

export const $ErrorLogDto = {
  type: 'object',
  properties: {
    ErrorLogId: {
      type: 'string',
    },
    SourceName: {
      type: 'string',
    },
    MethodName: {
      type: 'string',
    },
    ExpceptionObj: {
      $ref: '#/components/schemas/Object',
    },
    InputParam: {
      $ref: '#/components/schemas/Object',
    },
    ExceptionMsg: {
      type: 'string',
    },
    ExceptionType: {
      type: 'string',
    },
    UserName: {
      type: 'string',
    },
    DateAdded: {
      type: 'string',
      format: 'date-time',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $Object = {
  type: 'object',
} as const;

export const $AuditsDto = {
  type: 'object',
  properties: {
    AuditList: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/AuditLogDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $AuditLogDto_List = {
  type: 'object',
  properties: {
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    AuditLogId: {
      type: 'integer',
      format: 'int32',
    },
    ActionName: {
      type: 'string',
    },
    RequestUri: {
      type: 'string',
    },
    SourceObjectName: {
      type: 'string',
    },
    SourceObjectId: {
      type: 'integer',
      format: 'int32',
    },
    SourceObjectType: {
      type: 'string',
    },
    HttpMethod: {
      type: 'string',
    },
    HttpResponseCode: {
      type: 'string',
    },
    DateAdded: {
      type: 'string',
      format: 'date-time',
    },
    UserName: {
      type: 'string',
    },
    LastLoginTime: {
      type: 'string',
      format: 'date-time',
    },
    IPAddress: {
      type: 'string',
    },
  },
} as const;

export const $AuditLogDto = {
  type: 'object',
  properties: {
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    AuditLogId: {
      type: 'integer',
      format: 'int32',
    },
    ActionName: {
      type: 'string',
    },
    RequestUri: {
      type: 'string',
    },
    SourceObjectName: {
      type: 'string',
    },
    SourceObjectId: {
      type: 'integer',
      format: 'int32',
    },
    SourceObjectType: {
      type: 'string',
    },
    HttpMethod: {
      type: 'string',
    },
    HttpResponseCode: {
      type: 'string',
    },
    DateAdded: {
      type: 'string',
      format: 'date-time',
    },
    UserName: {
      type: 'string',
    },
    LastLoginTime: {
      type: 'string',
      format: 'date-time',
    },
    IPAddress: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $CustomFieldsDto = {
  type: 'object',
  properties: {
    CustomFields: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/CustomFieldDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $CustomFieldDto_List = {
  type: 'object',
  properties: {
    CustomFieldId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    FieldName: {
      type: 'string',
    },
    ProfileFlag: {
      type: 'string',
    },
    Optional: {
      type: 'boolean',
    },
    Tag: {
      type: 'string',
    },
  },
} as const;

export const $CustomFieldDto_AddUpdate = {
  type: 'object',
  properties: {
    FieldName: {
      type: 'string',
    },
    ProfileFlag: {
      type: 'string',
    },
    Optional: {
      type: 'boolean',
    },
    Tag: {
      type: 'string',
    },
  },
} as const;

export const $CustomFieldDto = {
  type: 'object',
  properties: {
    CustomFieldId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    FieldName: {
      type: 'string',
    },
    ProfileFlag: {
      type: 'string',
    },
    Optional: {
      type: 'boolean',
    },
    Tag: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ConfigurationItemsDto = {
  type: 'object',
  properties: {
    ConfigurationItems: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ConfigurationItemDto:List',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ConfigurationItemDto_List = {
  type: 'object',
  properties: {
    SystemName: {
      type: 'string',
    },
    ServerRoleConfigured: {
      type: 'boolean',
    },
    ControlValues: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ControlValueDto',
      },
    },
    ItemMetaData: {
      $ref: '#/components/schemas/ConfigurationItemMetaDataDto',
    },
  },
} as const;

export const $ConfigurationItemDto = {
  type: 'object',
  properties: {
    SystemName: {
      type: 'string',
    },
    ServerRoleConfigured: {
      type: 'boolean',
    },
    ControlValues: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ControlValueDto',
      },
    },
    ItemMetaData: {
      $ref: '#/components/schemas/ConfigurationItemMetaDataDto',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ConfigurationItemsInputDto = {
  type: 'object',
  properties: {
    ConfigurationItems: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ConfigurationItemInputDto',
      },
    },
  },
} as const;

export const $ConfigurationItemInputDto = {
  type: 'object',
  properties: {
    SystemName: {
      type: 'string',
    },
    Value: {
      type: 'string',
    },
  },
} as const;

export const $ControlValueDto = {
  type: 'object',
  properties: {
    Value: {
      type: 'string',
    },
    IsEnabled: {
      type: 'boolean',
    },
  },
} as const;

export const $ConfigurationItemMetaDataDto = {
  type: 'object',
  properties: {
    ConfigurationItemId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    ControlLabel: {
      type: 'string',
    },
    DefaultValue: {
      type: 'string',
    },
    DataSource: {
      type: 'string',
    },
    ControlsTypeId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayIndex: {
      type: 'integer',
      format: 'int32',
    },
    GroupId: {
      type: 'integer',
      format: 'int32',
    },
    HelpText: {
      type: 'string',
    },
    ControlTypeName: {
      type: 'string',
    },
    RegexPattern: {
      type: 'string',
    },
    ValidatorType: {
      type: 'string',
    },
    DependentId: {
      type: 'integer',
      format: 'int32',
    },
    IsSuperior: {
      type: 'boolean',
    },
    CssClasses: {
      type: 'string',
    },
    DependentClasses: {
      type: 'string',
    },
  },
} as const;

export const $LoggingValuesDto_Request = {
  type: 'object',
  properties: {
    LoggingKeyvalues: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/LoggingValueDto:Request',
      },
    },
    ServerIp: {
      type: 'string',
    },
  },
} as const;

export const $LoggingValuesDto_Request1 = {
  type: 'object',
  properties: {
    LoggingKeyvalues: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/LoggingValueDto:Request',
      },
    },
  },
} as const;

export const $LoggingValueDto_Request = {
  type: 'object',
  properties: {
    Key: {
      type: 'string',
    },
    Value: {
      type: 'string',
    },
  },
} as const;

export const $LoggingValuesDto = {
  type: 'object',
  properties: {
    LoggingKeyvalues: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/LoggingValueDto:List',
      },
    },
    ServerIp: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $LoggingValueDto_List = {
  type: 'object',
  properties: {
    Key: {
      type: 'string',
    },
    Value: {
      type: 'string',
    },
  },
} as const;

export const $LoggingValueDto = {
  type: 'object',
  properties: {
    Key: {
      type: 'string',
    },
    Value: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $LogFileDto = {
  type: 'object',
  properties: {
    ServerIp: {
      type: 'string',
    },
    LogFileName: {
      type: 'string',
    },
    LogFilePath: {
      type: 'string',
    },
    LogFileContent: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SiteproDto_request = {
  type: 'object',
  properties: {
    Url: {
      type: 'string',
    },
    UserName: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    IsEnable: {
      type: 'boolean',
    },
    UseHostSettings: {
      type: 'boolean',
    },
    IsHostEnable: {
      type: 'boolean',
    },
  },
} as const;

export const $SiteproDto = {
  type: 'object',
  properties: {
    Url: {
      type: 'string',
    },
    UserName: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    IsEnable: {
      type: 'boolean',
    },
    UseHostSettings: {
      type: 'boolean',
    },
    IsHostEnable: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SpamExpertsConfigDto_Request = {
  type: 'object',
  properties: {
    Url: {
      type: 'string',
    },
    UserName: {
      type: 'string',
    },
    MXRecords: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    IsEnable: {
      type: 'boolean',
    },
    UseHostSettings: {
      type: 'boolean',
    },
    IsHostEnable: {
      type: 'boolean',
    },
  },
} as const;

export const $SpamExpertsConfigDto = {
  type: 'object',
  properties: {
    Url: {
      type: 'string',
    },
    UserName: {
      type: 'string',
    },
    MXRecords: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    IsEnable: {
      type: 'boolean',
    },
    UseHostSettings: {
      type: 'boolean',
    },
    IsHostEnable: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $UsersUsageReportDto = {
  type: 'object',
  properties: {
    UsersList: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/UserUsageReportDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $UserUsageReportDto_List = {
  type: 'object',
  properties: {
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    UserName: {
      type: 'string',
    },
    TotalAllocated: {
      type: 'integer',
      format: 'int32',
    },
    TotalUsed: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $UserUsageReportDto = {
  type: 'object',
  properties: {
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    UserName: {
      type: 'string',
    },
    TotalAllocated: {
      type: 'integer',
      format: 'int32',
    },
    TotalUsed: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $DedicatedServerSettingsDto = {
  type: 'object',
  properties: {
    AssignedServers: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/DedicatedServerSettingDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $DedicatedServerSettingDto_List = {
  type: 'object',
  properties: {
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    IsShared: {
      type: 'boolean',
    },
  },
} as const;

export const $DedicatedServerSettingDto = {
  type: 'object',
  properties: {
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    IsShared: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $LoadBalancerSettingDto_Request = {
  type: 'object',
  properties: {
    UserLBSId: {
      type: 'integer',
      format: 'int32',
    },
    DefaultLBSId: {
      type: 'integer',
      format: 'int32',
    },
    UserLBSName: {
      type: 'string',
    },
    DefaultLBSName: {
      type: 'string',
    },
  },
} as const;

export const $DiskUsageReportDto = {
  type: 'object',
  properties: {
    DiskReport: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/DiskUsageDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $DiskUsageDto = {
  type: 'object',
  properties: {
    Label: {
      type: 'string',
    },
    Value: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $BandwidthUsageReportDto = {
  type: 'object',
  properties: {
    BandwidthReport: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/BandwidthsUsageDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $BandwidthsUsageDto = {
  type: 'object',
  properties: {
    Label: {
      type: 'string',
    },
    Value: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $LoadBalancerSettingDto = {
  type: 'object',
  properties: {
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    UserLBSId: {
      type: 'integer',
      format: 'int32',
    },
    DefaultLBSId: {
      type: 'integer',
      format: 'int32',
    },
    UserLBSName: {
      type: 'string',
    },
    DefaultLBSName: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $CustomMenusDto = {
  type: 'object',
  properties: {
    CustomMenuItems: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/CustomMenuDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $CustomMenuDto_List = {
  type: 'object',
  properties: {
    MenuItemId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    Url: {
      type: 'string',
    },
    ParentMenuItemId: {
      type: 'integer',
      format: 'int32',
    },
    ParentMenuItemName: {
      type: 'string',
    },
    IsMain: {
      type: 'boolean',
    },
    VisibleToUsers: {
      type: 'string',
    },
    IconPath: {
      type: 'string',
    },
    PostHCCredentials: {
      type: 'boolean',
    },
    UserNameVar: {
      type: 'string',
    },
    UserPasswordVar: {
      type: 'string',
    },
    MyUsers: {
      type: 'boolean',
    },
    AllUsers: {
      type: 'boolean',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    AddedBy: {
      type: 'integer',
      format: 'int32',
    },
    DateAdded: {
      type: 'string',
      format: 'date-time',
    },
  },
} as const;

export const $CustomMenuDto_Request = {
  required: ['DisplayName', 'ParentMenuItemName', 'Url'],
  type: 'object',
  properties: {
    DisplayName: {
      type: 'string',
    },
    Url: {
      type: 'string',
    },
    ParentMenuItemId: {
      type: 'integer',
      format: 'int32',
    },
    IsMain: {
      type: 'boolean',
    },
    VisibleToUsers: {
      type: 'string',
    },
    IconPath: {
      type: 'string',
    },
    AddedBy: {
      type: 'integer',
      format: 'int32',
    },
    PostHCCredentials: {
      type: 'boolean',
    },
    UserNameVar: {
      type: 'string',
    },
    UserPasswordVar: {
      type: 'string',
    },
    DateAdded: {
      type: 'string',
      format: 'date-time',
    },
    MyUsers: {
      type: 'boolean',
    },
    AllUsers: {
      type: 'boolean',
    },
    ParentMenuItemName: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $CustomMenuDto_UpdateRequest = {
  required: ['DisplayName', 'ParentMenuItemName', 'Url'],
  type: 'object',
  properties: {
    DisplayName: {
      type: 'string',
    },
    Url: {
      type: 'string',
    },
    ParentMenuItemName: {
      type: 'string',
    },
    IsMain: {
      type: 'boolean',
    },
    VisibleToUsers: {
      type: 'string',
    },
    MyUsers: {
      type: 'boolean',
    },
    AllUsers: {
      type: 'boolean',
    },
    PostHCCredentials: {
      type: 'boolean',
    },
    UserNameVar: {
      type: 'string',
    },
    UserPasswordVar: {
      type: 'string',
    },
    IconPath: {
      type: 'string',
    },
  },
} as const;

export const $CustomMenuDto = {
  required: ['DisplayName', 'ParentMenuItemName', 'Url'],
  type: 'object',
  properties: {
    MenuItemId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    Url: {
      type: 'string',
    },
    ParentMenuItemId: {
      type: 'integer',
      format: 'int32',
    },
    IsMain: {
      type: 'boolean',
    },
    VisibleToUsers: {
      type: 'string',
    },
    IconPath: {
      type: 'string',
    },
    AddedBy: {
      type: 'integer',
      format: 'int32',
    },
    PostHCCredentials: {
      type: 'boolean',
    },
    UserNameVar: {
      type: 'string',
    },
    UserPasswordVar: {
      type: 'string',
    },
    DateAdded: {
      type: 'string',
      format: 'date-time',
    },
    MyUsers: {
      type: 'boolean',
    },
    AllUsers: {
      type: 'boolean',
    },
    ParentMenuItemName: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $MessageDto_Request = {
  required: ['MessageDetails', 'MessageSubject'],
  type: 'object',
  properties: {
    MessageSubject: {
      type: 'string',
    },
    MessageDetails: {
      type: 'string',
    },
    MessagePriorityId: {
      maximum: 2,
      minimum: 0,
      type: 'integer',
      description:
        "'0' is for low priority,'1' is for normal priority and '2' is for high priority.",
      format: 'int32',
    },
    AllowReply: {
      type: 'boolean',
    },
    SendEmail: {
      type: 'boolean',
    },
    SendToUsers: {
      type: 'string',
      description:
        "SendToUsers is a flag it has multiple values 'my' is for my direct child users,'all' is for all child users and 'selected' is for the user ids provided in SelectedUsersList property but it will only accept the ids of child users (owner should have right on the specific user).",
    },
    MessageStatus: {
      type: 'boolean',
    },
    ToUserId: {
      type: 'integer',
      format: 'int32',
    },
    SelectedUsersList: {
      type: 'array',
      description:
        "This is the list of userid of the selected users, you can get userid by calling 'Get /panel-users', method will return you 'Invalid Access' if you give the wrong user id or you do not have rights on that user id.",
      items: {
        type: 'integer',
        format: 'int32',
      },
    },
  },
} as const;

export const $MessageDto = {
  required: ['MessageDetails', 'MessageSubject'],
  type: 'object',
  properties: {
    MessageId: {
      type: 'integer',
      format: 'int32',
    },
    MessageSubject: {
      type: 'string',
    },
    MessageDetails: {
      type: 'string',
    },
    MessagePriorityId: {
      maximum: 2,
      minimum: 0,
      type: 'integer',
      format: 'int32',
    },
    MessagePriorityValue: {
      type: 'string',
    },
    MessageSentDate: {
      type: 'string',
      format: 'date-time',
    },
    AllowReply: {
      type: 'boolean',
    },
    SendEmail: {
      type: 'boolean',
    },
    MessageIdentifier: {
      type: 'integer',
      format: 'int32',
    },
    SendToUsers: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    MessageStatus: {
      type: 'boolean',
    },
    ToUserId: {
      type: 'integer',
      format: 'int32',
    },
    SelectedUsersList: {
      type: 'array',
      items: {
        type: 'integer',
        format: 'int32',
      },
    },
    RoleName: {
      type: 'string',
    },
    Count: {
      type: 'integer',
      format: 'int32',
    },
    TotalCount: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $MessageDto_List = {
  required: ['MessageDetails', 'MessageSubject'],
  type: 'object',
  properties: {
    MessageId: {
      type: 'integer',
      format: 'int32',
    },
    MessageSubject: {
      type: 'string',
    },
    MessageDetails: {
      type: 'string',
    },
    MessagePriorityId: {
      maximum: 2,
      minimum: 0,
      type: 'integer',
      format: 'int32',
    },
    MessagePriorityValue: {
      type: 'string',
    },
    MessageSentDate: {
      type: 'string',
      format: 'date-time',
    },
    AllowReply: {
      type: 'boolean',
    },
    SendEmail: {
      type: 'boolean',
    },
    MessageIdentifier: {
      type: 'integer',
      format: 'int32',
    },
    SendToUsers: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    MessageStatus: {
      type: 'boolean',
    },
    ToUserId: {
      type: 'integer',
      format: 'int32',
    },
    SelectedUsersList: {
      type: 'array',
      items: {
        type: 'integer',
        format: 'int32',
      },
    },
    RoleName: {
      type: 'string',
    },
    Count: {
      type: 'integer',
      format: 'int32',
    },
    TotalCount: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $MessagesDto = {
  type: 'object',
  properties: {
    Messages: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/MessageDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $MessageRepliesDto = {
  type: 'object',
  properties: {
    MessageReplies: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/MessageReplyDto:List',
      },
    },
    MessageSentToUsers: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/MessageSentToUsersDto:List',
      },
    },
    MessageId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerName: {
      type: 'string',
    },
    AllowReply: {
      type: 'boolean',
    },
    MessageSubject: {
      type: 'string',
    },
    MessageDetails: {
      type: 'string',
    },
    MessagePriorityId: {
      type: 'integer',
      format: 'int32',
    },
    MessageSentDate: {
      type: 'string',
      format: 'date-time',
    },
    MessageStatus: {
      type: 'boolean',
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    SendToUsers: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $MessageReplyDto_List = {
  required: ['ReplyDetails'],
  type: 'object',
  properties: {
    ReplyId: {
      type: 'integer',
      format: 'int32',
    },
    MessageId: {
      type: 'integer',
      format: 'int32',
    },
    FromUserId: {
      type: 'integer',
      format: 'int32',
    },
    FromUserName: {
      type: 'string',
    },
    ToUserId: {
      type: 'integer',
      format: 'int32',
    },
    ReplySubject: {
      type: 'string',
    },
    ReplyDetails: {
      type: 'string',
    },
    ReplySentDate: {
      type: 'string',
      format: 'date-time',
    },
    ParentId: {
      type: 'integer',
      format: 'int32',
    },
    SendToUsers: {
      type: 'string',
    },
    RoleName: {
      type: 'string',
    },
    Count: {
      type: 'integer',
      format: 'int32',
    },
    TotalCount: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $MessageReplyDto_Request = {
  required: ['ReplyDetails'],
  type: 'object',
  properties: {
    ReplyDetails: {
      type: 'string',
    },
  },
} as const;

export const $MessageReplyDto = {
  required: ['ReplyDetails'],
  type: 'object',
  properties: {
    ReplyId: {
      type: 'integer',
      format: 'int32',
    },
    MessageId: {
      type: 'integer',
      format: 'int32',
    },
    FromUserId: {
      type: 'integer',
      format: 'int32',
    },
    FromUserName: {
      type: 'string',
    },
    ToUserId: {
      type: 'integer',
      format: 'int32',
    },
    ReplySubject: {
      type: 'string',
    },
    ReplyDetails: {
      type: 'string',
    },
    ReplySentDate: {
      type: 'string',
      format: 'date-time',
    },
    ParentId: {
      type: 'integer',
      format: 'int32',
    },
    SendToUsers: {
      type: 'string',
    },
    RoleName: {
      type: 'string',
    },
    Count: {
      type: 'integer',
      format: 'int32',
    },
    TotalCount: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $MessageSentToUsersDto_List = {
  type: 'object',
  properties: {
    ToUserId: {
      type: 'integer',
      format: 'int32',
    },
    ToUsername: {
      type: 'string',
    },
    RoleName: {
      type: 'string',
    },
    Count: {
      type: 'integer',
      format: 'int32',
    },
    TotalCount: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $MessageSentToUsersDto = {
  type: 'object',
  properties: {
    ToUserId: {
      type: 'integer',
      format: 'int32',
    },
    ToUsername: {
      type: 'string',
    },
    RoleName: {
      type: 'string',
    },
    Count: {
      type: 'integer',
      format: 'int32',
    },
    TotalCount: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $TroubleTicketsStatsDto = {
  type: 'object',
  properties: {
    OpenTickets: {
      type: 'integer',
      format: 'int32',
    },
    ClosedTickets: {
      type: 'integer',
      format: 'int32',
    },
    PendingTickets: {
      type: 'integer',
      format: 'int32',
    },
    TotalTickets: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $TicketsDto = {
  type: 'object',
  properties: {
    Tickets: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/TicketDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    RoleName: {
      type: 'string',
    },
    Count: {
      type: 'integer',
      format: 'int32',
    },
    TotalCount: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $TicketDto = {
  required: ['Category', 'Details', 'Subject'],
  type: 'object',
  properties: {
    TicketId: {
      type: 'integer',
      format: 'int32',
    },
    TicketNumber: {
      type: 'string',
    },
    FromUserId: {
      type: 'integer',
      format: 'int32',
    },
    ToUserId: {
      type: 'integer',
      format: 'int32',
    },
    Subject: {
      type: 'string',
    },
    Details: {
      type: 'string',
    },
    TicketStatus: {
      type: 'string',
    },
    Category: {
      type: 'string',
    },
    Priority: {
      type: 'string',
    },
    IssueDate: {
      type: 'string',
      format: 'date-time',
    },
    DateModified: {
      type: 'string',
      format: 'date-time',
    },
    SendEmail: {
      type: 'boolean',
    },
    ModifiedBy: {
      type: 'integer',
      format: 'int32',
    },
    TotalResponses: {
      type: 'integer',
      format: 'int32',
    },
    ClientName: {
      type: 'string',
    },
    TicketAttachments: {
      type: 'integer',
      format: 'int32',
    },
    RoleName: {
      type: 'string',
    },
    Count: {
      type: 'integer',
      format: 'int32',
    },
    TotalCount: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $TicketDto_List = {
  type: 'object',
  properties: {
    TicketId: {
      type: 'integer',
      format: 'int32',
    },
    TicketNumber: {
      type: 'string',
    },
    FromUserId: {
      type: 'integer',
      format: 'int32',
    },
    ToUserId: {
      type: 'integer',
      format: 'int32',
    },
    Subject: {
      type: 'string',
    },
    Details: {
      type: 'string',
    },
    TicketStatus: {
      type: 'string',
    },
    Category: {
      type: 'string',
    },
    Priority: {
      type: 'string',
    },
    IssueDate: {
      type: 'string',
      format: 'date-time',
    },
    DateModified: {
      type: 'string',
      format: 'date-time',
    },
    SendEmail: {
      type: 'boolean',
    },
    ModifiedBy: {
      type: 'integer',
      format: 'int32',
    },
    TotalResponses: {
      type: 'integer',
      format: 'int32',
    },
    ClientName: {
      type: 'string',
    },
    TicketAttachments: {
      type: 'integer',
      format: 'int32',
    },
    RoleName: {
      type: 'string',
    },
    Count: {
      type: 'integer',
      format: 'int32',
    },
    TotalCount: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $TicketDto_Update = {
  type: 'object',
  properties: {
    TicketNumber: {
      type: 'string',
    },
    FromUserId: {
      type: 'integer',
      format: 'int32',
    },
    ToUserId: {
      type: 'integer',
      format: 'int32',
    },
    Subject: {
      type: 'string',
    },
    Details: {
      type: 'string',
    },
    TicketStatus: {
      type: 'string',
    },
    Category: {
      type: 'string',
    },
    Priority: {
      type: 'string',
    },
    IssueDate: {
      type: 'string',
      format: 'date-time',
    },
    DateModified: {
      type: 'string',
      format: 'date-time',
    },
    SendEmail: {
      type: 'boolean',
    },
    ClientName: {
      type: 'string',
    },
    TicketAttachments: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $TicketDto_Request = {
  type: 'object',
  properties: {
    TicketNumber: {
      type: 'string',
    },
    FromUserId: {
      type: 'integer',
      format: 'int32',
    },
    ToUserId: {
      type: 'integer',
      format: 'int32',
    },
    Subject: {
      type: 'string',
    },
    Details: {
      type: 'string',
    },
    TicketStatus: {
      type: 'string',
    },
    Category: {
      type: 'string',
    },
    Priority: {
      type: 'string',
    },
    IssueDate: {
      type: 'string',
      format: 'date-time',
    },
    DateModified: {
      type: 'string',
      format: 'date-time',
    },
    SendEmail: {
      type: 'boolean',
    },
    ClientName: {
      type: 'string',
    },
    TicketAttachments: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $TicketResponseDto_Request = {
  required: ['Details'],
  type: 'object',
  properties: {
    Details: {
      type: 'string',
    },
  },
} as const;

export const $TicketResponseDto = {
  required: ['Details'],
  type: 'object',
  properties: {
    TicketResponseId: {
      type: 'integer',
      format: 'int32',
    },
    TicketId: {
      type: 'integer',
      format: 'int32',
    },
    ResponseTitle: {
      type: 'string',
    },
    ResponderName: {
      type: 'string',
    },
    Details: {
      type: 'string',
    },
    ResponderId: {
      type: 'integer',
      format: 'int32',
    },
    DateAdded: {
      type: 'string',
      format: 'date-time',
    },
    IsEscalated: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $TicketResponseDto_List = {
  type: 'object',
  properties: {
    TicketResponseId: {
      type: 'integer',
      format: 'int32',
    },
    TicketId: {
      type: 'integer',
      format: 'int32',
    },
    ResponseTitle: {
      type: 'string',
    },
    ResponderName: {
      type: 'string',
    },
    Details: {
      type: 'string',
    },
    ResponderId: {
      type: 'integer',
      format: 'int32',
    },
    DateAdded: {
      type: 'string',
      format: 'date-time',
    },
    IsEscalated: {
      type: 'boolean',
    },
  },
} as const;

export const $TicketResponsesDto = {
  type: 'object',
  properties: {
    TicketResponses: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/TicketResponseDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $CategoryDto_List = {
  type: 'object',
  properties: {
    CategoryId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    IsInternal: {
      type: 'boolean',
    },
  },
} as const;

export const $CategoryDto_Request = {
  required: ['DisplayName'],
  type: 'object',
  properties: {
    DisplayName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
  },
} as const;

export const $CategoryDto = {
  required: ['DisplayName'],
  type: 'object',
  properties: {
    CategoryId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    IsInternal: {
      type: 'boolean',
    },
    DateAdded: {
      type: 'string',
      format: 'date-time',
    },
    DeletedBy: {
      type: 'integer',
      format: 'int32',
    },
    DateDeleted: {
      type: 'string',
      format: 'date-time',
    },
    AddedBy: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $CategoriesDto = {
  type: 'object',
  properties: {
    Categories: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/CategoryDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $AttachmentsDto = {
  type: 'object',
  properties: {
    TicketId: {
      type: 'integer',
      format: 'int32',
    },
    Attachments: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/AttachmentDto:List',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $AttachmentsDto_Request = {
  type: 'object',
  properties: {
    Attachments: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/AttachmentDto:Request',
      },
    },
  },
} as const;

export const $AttachmentDto_Request = {
  type: 'object',
  properties: {
    FileData: {
      type: 'string',
    },
    FileName: {
      type: 'string',
    },
    FileType: {
      type: 'string',
    },
    ResponseId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $AttachmentDto_List = {
  type: 'object',
  properties: {
    AttachmentId: {
      type: 'integer',
      format: 'int32',
    },
    FileData: {
      type: 'string',
    },
    FileName: {
      type: 'string',
    },
    FileType: {
      type: 'string',
    },
    ResponseId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $AttachmentDto_Details = {
  type: 'object',
  properties: {
    FileData: {
      type: 'string',
    },
    FileName: {
      type: 'string',
    },
    FileType: {
      type: 'string',
    },
    ResponseId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $AttachmentDto = {
  type: 'object',
  properties: {
    AttachmentId: {
      type: 'integer',
      format: 'int32',
    },
    FileData: {
      type: 'string',
    },
    FileName: {
      type: 'string',
    },
    FileType: {
      type: 'string',
    },
    ResponseId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SellAddonsDto = {
  type: 'object',
  properties: {
    SoldAddonList: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SoldAddOnDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SoldAddOnDto_List = {
  type: 'object',
  properties: {
    SoldAddOnId: {
      type: 'integer',
      format: 'int32',
    },
    SoldPlanId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    Type: {
      type: 'string',
    },
    PlanName: {
      type: 'string',
    },
    UserName: {
      type: 'string',
    },
    UnitSize: {
      type: 'integer',
      format: 'int32',
    },
    DateAdded: {
      type: 'string',
      format: 'date-time',
    },
    BillingMethod: {
      type: 'string',
    },
    ResourceId: {
      type: 'integer',
      format: 'int32',
    },
    Quantity: {
      type: 'integer',
      format: 'int32',
    },
    IsComposite: {
      type: 'boolean',
    },
  },
} as const;

export const $SoldAddOnDto = {
  required: ['Quantity'],
  type: 'object',
  properties: {
    SoldAddOnId: {
      type: 'integer',
      format: 'int32',
    },
    SoldPlanId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    Type: {
      type: 'string',
    },
    PlanName: {
      type: 'string',
    },
    UserName: {
      type: 'string',
    },
    UnitSize: {
      type: 'integer',
      format: 'int32',
    },
    DateAdded: {
      type: 'string',
      format: 'date-time',
    },
    BillingMethod: {
      type: 'string',
    },
    ResourceId: {
      type: 'integer',
      format: 'int32',
    },
    Quantity: {
      type: 'integer',
      format: 'int32',
    },
    IsComposite: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SoldAddOnBillingDetailDto_Request = {
  type: 'object',
  properties: {
    SellableItemTypeId: {
      type: 'integer',
      format: 'int32',
    },
    AddOnRecurringDurationId: {
      type: 'integer',
      format: 'int32',
    },
    SetupDiscount: {
      type: 'number',
      format: 'double',
    },
    RecurringDiscount: {
      type: 'number',
      format: 'double',
    },
    RecurringDurationId: {
      type: 'integer',
      format: 'int32',
    },
    NextInvoiceDate: {
      type: 'string',
      format: 'date-time',
    },
    PaidTillDate: {
      type: 'string',
      format: 'date-time',
    },
    Quantity: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $SoldAddOnBillingDetailDto_List = {
  type: 'object',
  properties: {
    SoldAddOnId: {
      type: 'integer',
      format: 'int32',
    },
    SellableItemTypeId: {
      type: 'integer',
      format: 'int32',
    },
    AddOnRecurringDurationId: {
      type: 'integer',
      format: 'int32',
    },
    SetupDiscount: {
      type: 'number',
      format: 'double',
    },
    RecurringDiscount: {
      type: 'number',
      format: 'double',
    },
    RecurringDurationId: {
      type: 'integer',
      format: 'int32',
    },
    NextInvoiceDate: {
      type: 'string',
      format: 'date-time',
    },
    PaidTillDate: {
      type: 'string',
      format: 'date-time',
    },
    Quantity: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $SoldAddOnBillingDetailDto = {
  type: 'object',
  properties: {
    SoldAddOnId: {
      type: 'integer',
      format: 'int32',
    },
    SellableItemTypeId: {
      type: 'integer',
      format: 'int32',
    },
    AddOnRecurringDurationId: {
      type: 'integer',
      format: 'int32',
    },
    SetupDiscount: {
      type: 'number',
      format: 'double',
    },
    RecurringDiscount: {
      type: 'number',
      format: 'double',
    },
    RecurringDurationId: {
      type: 'integer',
      format: 'int32',
    },
    NextInvoiceDate: {
      type: 'string',
      format: 'date-time',
    },
    PaidTillDate: {
      type: 'string',
      format: 'date-time',
    },
    Quantity: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SellAddonDto_Request = {
  type: 'object',
  properties: {
    SoldPlanId: {
      type: 'integer',
      format: 'int32',
    },
    AddOns: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/AddOnResourcesDto:SellAddon',
      },
    },
  },
} as const;

export const $SellAddonDto = {
  type: 'object',
  properties: {
    SoldPlanId: {
      type: 'integer',
      format: 'int32',
    },
    AddOns: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/AddOnResourcesDto:List',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $AddOnResourcesDto_SellAddon = {
  required: ['Quantity'],
  type: 'object',
  properties: {
    ResourceId: {
      type: 'integer',
      description: "you can get resource id by calling 'GET /resources'.",
      format: 'int32',
    },
    Quantity: {
      type: 'integer',
      description: 'Number of instance you want to sell.',
      format: 'int32',
    },
    IsComposite: {
      type: 'boolean',
    },
  },
} as const;

export const $AddOnResourcesDto_List = {
  required: ['Quantity'],
  type: 'object',
  properties: {
    ResourceId: {
      type: 'integer',
      format: 'int32',
    },
    Quantity: {
      type: 'integer',
      format: 'int32',
    },
    IsComposite: {
      type: 'boolean',
    },
  },
} as const;

export const $AddOnResourcesDto = {
  required: ['Quantity'],
  type: 'object',
  properties: {
    ResourceId: {
      type: 'integer',
      format: 'int32',
    },
    Quantity: {
      type: 'integer',
      format: 'int32',
    },
    IsComposite: {
      type: 'boolean',
    },
    BillingDetails: {
      $ref: '#/components/schemas/SoldAddOnBillingDetailDto:List',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $AddUpdateSoldAddOnDto_Request = {
  type: 'object',
  properties: {
    BillingDetails: {
      $ref: '#/components/schemas/SoldAddOnBillingDetailDto:List',
    },
  },
} as const;

export const $AddUpdateSoldAddOnDto = {
  type: 'object',
  properties: {
    SoldAddOnId: {
      type: 'integer',
      format: 'int32',
    },
    BillingDetails: {
      $ref: '#/components/schemas/SoldAddOnBillingDetailDto:List',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $CResourcesDto = {
  type: 'object',
  properties: {
    CompositeResources: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/CResourceDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $CResourceDto_List = {
  type: 'object',
  properties: {
    CompositeResourceId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    SystemName: {
      type: 'string',
    },
    CategoryName: {
      type: 'string',
    },
    IaasRefId: {
      type: 'string',
    },
    CategoryDisplayName: {
      type: 'string',
    },
    ProviderName: {
      type: 'string',
    },
    SoldInstances: {
      type: 'integer',
      format: 'int32',
    },
    Resources: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/CResourceResourceDto',
      },
    },
    ResourceComponents: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/CResourceResourceComponentDto',
      },
    },
  },
} as const;

export const $CResourceDto_Request = {
  required: ['CategoryName', 'DisplayName'],
  type: 'object',
  properties: {
    DisplayName: {
      type: 'string',
    },
    CategoryName: {
      type: 'string',
    },
    CategoryDisplayName: {
      type: 'string',
    },
    ProviderName: {
      type: 'string',
    },
    SoldInstances: {
      type: 'integer',
      format: 'int32',
    },
    Resources: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/CResourceResourceDto',
      },
    },
    ResourceComponents: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/CResourceResourceComponentDto',
      },
    },
  },
} as const;

export const $UpdateCResourceDto_Request = {
  required: ['DisplayName'],
  type: 'object',
  properties: {
    DisplayName: {
      type: 'string',
    },
    Resources: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/CResourceResourceDto',
      },
    },
    ResourceComponents: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/CResourceResourceComponentDto',
      },
    },
  },
} as const;

export const $UpdateCResourceDto = {
  required: ['CategoryName', 'DisplayName'],
  type: 'object',
  properties: {
    CompositeResourceId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    SystemName: {
      type: 'string',
    },
    CategoryName: {
      type: 'string',
    },
    IaasRefId: {
      type: 'string',
    },
    CategoryDisplayName: {
      type: 'string',
    },
    ProviderName: {
      type: 'string',
    },
    SoldInstances: {
      type: 'integer',
      format: 'int32',
    },
    Resources: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/CResourceResourceDto',
      },
    },
    ResourceComponents: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/CResourceResourceComponentDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $CResourceDto = {
  required: ['CategoryName', 'DisplayName'],
  type: 'object',
  properties: {
    CompositeResourceId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    SystemName: {
      type: 'string',
    },
    CategoryName: {
      type: 'string',
    },
    IaasRefId: {
      type: 'string',
    },
    CategoryDisplayName: {
      type: 'string',
    },
    ProviderName: {
      type: 'string',
    },
    SoldInstances: {
      type: 'integer',
      format: 'int32',
    },
    Resources: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/CResourceResourceDto',
      },
    },
    ResourceComponents: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/CResourceResourceComponentDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $CResourceResourceDto = {
  type: 'object',
  properties: {
    ResourceId: {
      type: 'integer',
      format: 'int32',
    },
    ResourceName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    Quantity: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $CResourceResourceComponentDto = {
  type: 'object',
  properties: {
    ResourceId: {
      type: 'integer',
      format: 'int32',
    },
    ComponentName: {
      type: 'string',
    },
    Value: {
      type: 'string',
    },
  },
} as const;

export const $HostingServicesDto = {
  type: 'object',
  properties: {
    HostingServices: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/HostingServiceDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $HostingServiceDto_List = {
  type: 'object',
  properties: {
    HostingServiceId: {
      type: 'integer',
      format: 'int32',
    },
    SystemName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    ServerRole: {
      type: 'string',
    },
  },
} as const;

export const $HostingServiceDto = {
  type: 'object',
  properties: {
    HostingServiceId: {
      type: 'integer',
      format: 'int32',
    },
    SystemName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    ServerRole: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ProvidersDto = {
  type: 'object',
  properties: {
    ProviderTypes: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ProviderDto:List',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ProviderDto_List = {
  type: 'object',
  properties: {
    RoleServerTypeId: {
      type: 'integer',
      format: 'int32',
    },
    RoleId: {
      type: 'integer',
      format: 'int32',
    },
    SystemName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    PlatformId: {
      type: 'integer',
      format: 'int32',
    },
    Platform: {
      type: 'string',
    },
    ProviderName: {
      type: 'string',
    },
    ConfiguredOnly: {
      type: 'boolean',
    },
    KeyValueVerification: {
      type: 'boolean',
    },
    RefrenceIdRequired: {
      type: 'boolean',
    },
    Url: {
      type: 'string',
    },
    HelpText: {
      type: 'string',
    },
    RoleName: {
      type: 'string',
    },
    ProviderType: {
      type: 'string',
    },
  },
} as const;

export const $ProviderDto = {
  type: 'object',
  properties: {
    RoleServerTypeId: {
      type: 'integer',
      format: 'int32',
    },
    RoleId: {
      type: 'integer',
      format: 'int32',
    },
    SystemName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    PlatformId: {
      type: 'integer',
      format: 'int32',
    },
    Platform: {
      type: 'string',
    },
    ProviderName: {
      type: 'string',
    },
    ConfiguredOnly: {
      type: 'boolean',
    },
    KeyValueVerification: {
      type: 'boolean',
    },
    RefrenceIdRequired: {
      type: 'boolean',
    },
    Url: {
      type: 'string',
    },
    HelpText: {
      type: 'string',
    },
    RoleName: {
      type: 'string',
    },
    ProviderType: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ResourcesDto = {
  type: 'object',
  properties: {
    Resources: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ResourceDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ResourceDto_List = {
  required: ['DefaultUnit'],
  type: 'object',
  properties: {
    DefaultValue: {
      type: 'integer',
      format: 'int32',
    },
    DependentOn: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    ResourceBehaviourType: {
      type: 'string',
    },
    ResourceType: {
      type: 'string',
    },
    ProvisioningTypes: {
      type: 'string',
    },
    ServerRoleTypes: {
      type: 'string',
    },
    SupportedRoleProviders: {
      type: 'string',
    },
    ProviderSelection: {
      type: 'string',
    },
    Role: {
      type: 'string',
    },
    DisplayIndex: {
      type: 'integer',
      format: 'int32',
    },
    ResourceComponents: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ResourceComponentDto:List',
      },
    },
    ResourceId: {
      type: 'integer',
      format: 'int32',
    },
    SystemName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    Platform: {
      type: 'string',
    },
    Decription: {
      type: 'string',
    },
    DefaultUnit: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $ResourceDto_Request = {
  required: ['DefaultUnit'],
  type: 'object',
  properties: {
    DefaultValue: {
      type: 'integer',
      format: 'int32',
    },
    DependentOn: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    ResourceBehaviourType: {
      type: 'string',
    },
    ResourceType: {
      type: 'string',
    },
    ProvisioningTypes: {
      type: 'string',
    },
    ServerRoleTypes: {
      type: 'string',
    },
    SupportedRoleProviders: {
      type: 'string',
    },
    ProviderSelection: {
      type: 'string',
    },
    Role: {
      type: 'string',
    },
    DisplayIndex: {
      type: 'integer',
      format: 'int32',
    },
    ResourceComponents: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ResourceComponentDto:List',
      },
    },
    ResourceId: {
      type: 'integer',
      format: 'int32',
    },
    SystemName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    Platform: {
      type: 'string',
    },
    Decription: {
      type: 'string',
    },
    DefaultUnit: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $ResourceDto = {
  required: ['DefaultUnit'],
  type: 'object',
  properties: {
    DefaultValue: {
      type: 'integer',
      format: 'int32',
    },
    DependentOn: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    ResourceBehaviourType: {
      type: 'string',
    },
    ResourceType: {
      type: 'string',
    },
    ProvisioningTypes: {
      type: 'string',
    },
    ServerRoleTypes: {
      type: 'string',
    },
    SupportedRoleProviders: {
      type: 'string',
    },
    ProviderSelection: {
      type: 'string',
    },
    Role: {
      type: 'string',
    },
    DisplayIndex: {
      type: 'integer',
      format: 'int32',
    },
    ResourceComponents: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ResourceComponentDto:List',
      },
    },
    ResourceId: {
      type: 'integer',
      format: 'int32',
    },
    SystemName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    Platform: {
      type: 'string',
    },
    Decription: {
      type: 'string',
    },
    DefaultUnit: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ResourceComponentDto_List = {
  type: 'object',
  properties: {
    ComponentId: {
      type: 'integer',
      format: 'int32',
    },
    SystemName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    ComponentProps: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ResourceComponentPropDto',
      },
    },
  },
} as const;

export const $ResourceComponentDto = {
  type: 'object',
  properties: {
    ComponentId: {
      type: 'integer',
      format: 'int32',
    },
    SystemName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    ComponentProps: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ResourceComponentPropDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ResourceComponentPropDto = {
  type: 'object',
  properties: {
    ResourceComponentPropId: {
      type: 'integer',
      format: 'int32',
    },
    SystemName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    Providers: {
      type: 'string',
    },
  },
} as const;

export const $ResourceBillingDetailsDto = {
  type: 'object',
  properties: {
    ItemRecurringDurationId: {
      type: 'integer',
      format: 'int32',
    },
    DefaultSetupPrice: {
      type: 'number',
      format: 'double',
    },
    DefaultRecurringPrice: {
      type: 'number',
      format: 'double',
    },
    RecurringDurationId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $AddUpdateResourceDto_Request = {
  required: ['DefaultUnit', 'DisplayName', 'SystemName'],
  type: 'object',
  properties: {
    DisplayName: {
      type: 'string',
    },
    SystemName: {
      type: 'string',
    },
    Decription: {
      type: 'string',
    },
    DefaultUnit: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $AddUpdateResourceDto_UpdateRequest = {
  required: ['DefaultUnit', 'DisplayName'],
  type: 'object',
  properties: {
    DisplayName: {
      type: 'string',
    },
    Decription: {
      type: 'string',
    },
    DefaultUnit: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $AddUpdateResourceDto = {
  required: ['DefaultUnit'],
  type: 'object',
  properties: {
    ResourceId: {
      type: 'integer',
      format: 'int32',
    },
    SystemName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    Platform: {
      type: 'string',
    },
    Decription: {
      type: 'string',
    },
    DefaultUnit: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ItemBillingDetailsDto = {
  type: 'object',
  properties: {
    ItemBillingDetailId: {
      type: 'integer',
      format: 'int32',
    },
    SetupPrice: {
      type: 'number',
      format: 'double',
    },
    DefaultSetupDiscount: {
      minimum: 0,
      type: 'number',
      format: 'double',
    },
    DefaultRecurringDiscount: {
      minimum: 0,
      type: 'number',
      format: 'double',
    },
    PromotionalPrice: {
      type: 'number',
      format: 'double',
    },
    PromotionalDurationId: {
      type: 'integer',
      format: 'int32',
    },
    PromotionalDuration: {
      type: 'string',
    },
    RecurringDurations: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ItemRecurringDurationsDto:List',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ItemBillingDetailsDto_List = {
  type: 'object',
  properties: {
    ItemBillingDetailId: {
      type: 'integer',
      format: 'int32',
    },
    SetupPrice: {
      type: 'number',
      format: 'double',
    },
    DefaultSetupDiscount: {
      minimum: 0,
      type: 'number',
      format: 'double',
    },
    DefaultRecurringDiscount: {
      minimum: 0,
      type: 'number',
      format: 'double',
    },
    PromotionalPrice: {
      type: 'number',
      format: 'double',
    },
    PromotionalDurationId: {
      type: 'integer',
      format: 'int32',
    },
    PromotionalDuration: {
      type: 'string',
    },
    RecurringDurations: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ItemRecurringDurationsDto:List',
      },
    },
  },
} as const;

export const $ItemRecurringDurationsDto_List = {
  type: 'object',
  properties: {
    ItemRecurringDurationId: {
      type: 'integer',
      format: 'int32',
    },
    RecurringDurationId: {
      type: 'integer',
      format: 'int32',
    },
    RecurringMonths: {
      type: 'integer',
      format: 'int32',
    },
    RecurringPrice: {
      type: 'number',
      format: 'double',
    },
    IsDefault: {
      type: 'boolean',
    },
    RecurringDuration: {
      type: 'string',
    },
  },
} as const;

export const $ItemRecurringDurationsDto = {
  type: 'object',
  properties: {
    ItemRecurringDurationId: {
      type: 'integer',
      format: 'int32',
    },
    RecurringDurationId: {
      type: 'integer',
      format: 'int32',
    },
    RecurringMonths: {
      type: 'integer',
      format: 'int32',
    },
    RecurringPrice: {
      type: 'number',
      format: 'double',
    },
    IsDefault: {
      type: 'boolean',
    },
    RecurringDuration: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $RecurringDurationsDto = {
  type: 'object',
  properties: {
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    RecurringDurations: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/RecurringDurationDto:List',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $RecurringDurationDto_List = {
  type: 'object',
  properties: {
    RecurringDurationId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    Months: {
      type: 'integer',
      format: 'int32',
    },
    RecurringType: {
      type: 'string',
    },
  },
} as const;

export const $RecurringDurationDto = {
  type: 'object',
  properties: {
    RecurringDurationId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    Months: {
      type: 'integer',
      format: 'int32',
    },
    RecurringType: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SoldPlansDto = {
  type: 'object',
  properties: {
    SoldPlans: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SoldPlanDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SoldPlanDto_List = {
  type: 'object',
  properties: {
    PlanId: {
      type: 'integer',
      format: 'int32',
    },
    PlanName: {
      type: 'string',
    },
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    UserName: {
      type: 'string',
    },
    Quantity: {
      type: 'integer',
      format: 'int32',
    },
    SoldDate: {
      type: 'string',
      format: 'date-time',
    },
    SoldPlanId: {
      type: 'integer',
      format: 'int32',
    },
    IsDisabled: {
      type: 'boolean',
    },
    BillingDetails: {
      $ref: '#/components/schemas/SoldPlanBillingDetailDto:Request',
    },
  },
} as const;

export const $SoldPlanDto = {
  required: ['UserName'],
  type: 'object',
  properties: {
    PlanId: {
      type: 'integer',
      format: 'int32',
    },
    PlanName: {
      type: 'string',
    },
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    UserName: {
      type: 'string',
    },
    Quantity: {
      type: 'integer',
      format: 'int32',
    },
    SoldDate: {
      type: 'string',
      format: 'date-time',
    },
    SoldPlanId: {
      type: 'integer',
      format: 'int32',
    },
    IsDisabled: {
      type: 'boolean',
    },
    BillingDetails: {
      $ref: '#/components/schemas/SoldPlanBillingDetailDto:Request',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SoldPlanBillingDetailDto = {
  type: 'object',
  properties: {
    SoldPlanId: {
      type: 'integer',
      format: 'int32',
    },
    RecurringDurationId: {
      type: 'integer',
      format: 'int32',
    },
    SetupDiscount: {
      type: 'number',
      format: 'double',
    },
    RecurringPrice: {
      type: 'number',
      format: 'double',
    },
    RecurringDiscount: {
      type: 'number',
      format: 'double',
    },
    NextInvoiceDate: {
      type: 'string',
      format: 'date-time',
    },
    PaidTillDate: {
      type: 'string',
      format: 'date-time',
    },
    DueSince: {
      type: 'string',
    },
    Quantity: {
      type: 'integer',
      format: 'int32',
    },
    PaidStatus: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SoldPlanBillingDetailDto_Request = {
  type: 'object',
  properties: {
    SoldPlanId: {
      type: 'integer',
      format: 'int32',
    },
    RecurringDurationId: {
      type: 'integer',
      format: 'int32',
    },
    SetupDiscount: {
      type: 'number',
      format: 'double',
    },
    RecurringPrice: {
      type: 'number',
      format: 'double',
    },
    RecurringDiscount: {
      type: 'number',
      format: 'double',
    },
    NextInvoiceDate: {
      type: 'string',
      format: 'date-time',
    },
    PaidTillDate: {
      type: 'string',
      format: 'date-time',
    },
    DueSince: {
      type: 'string',
    },
    Quantity: {
      type: 'integer',
      format: 'int32',
    },
    PaidStatus: {
      type: 'string',
    },
  },
} as const;

export const $SoldPlanBillingDetailDto_Update = {
  type: 'object',
  properties: {
    RecurringDurationId: {
      type: 'integer',
      format: 'int32',
    },
    SetupDiscount: {
      type: 'number',
      format: 'double',
    },
    RecurringPrice: {
      type: 'number',
      format: 'double',
    },
    RecurringDiscount: {
      type: 'number',
      format: 'double',
    },
    NextInvoiceDate: {
      type: 'string',
      format: 'date-time',
    },
    PaidTillDate: {
      type: 'string',
      format: 'date-time',
    },
    DueSince: {
      type: 'string',
    },
    Quantity: {
      type: 'integer',
      format: 'int32',
    },
    PaidStatus: {
      type: 'string',
    },
  },
} as const;

export const $SellPlanDto_Request = {
  type: 'object',
  properties: {
    PlanId: {
      type: 'integer',
      format: 'int32',
    },
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    Quantity: {
      maximum: 999,
      minimum: 1,
      type: 'integer',
      format: 'int32',
    },
    BillingDetails: {
      $ref: '#/components/schemas/SoldPlanBillingDetailDto:Request',
    },
  },
} as const;

export const $SellPlanDto = {
  type: 'object',
  properties: {
    PlanId: {
      type: 'integer',
      format: 'int32',
    },
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    Quantity: {
      maximum: 999,
      minimum: 1,
      type: 'integer',
      format: 'int32',
    },
    BillingDetails: {
      $ref: '#/components/schemas/SoldPlanBillingDetailDto',
    },
  },
} as const;

export const $SoldPlansIsDisabled = {
  type: 'object',
  properties: {
    IsDisabled: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SoldPlansIsDisabled_Request = {
  type: 'object',
  properties: {
    IsDisabled: {
      type: 'boolean',
    },
  },
} as const;

export const $PurchasePlanDto_Request = {
  type: 'object',
  properties: {
    PlanId: {
      type: 'integer',
      format: 'int32',
    },
    Quantity: {
      maximum: 999,
      minimum: 1,
      type: 'integer',
      format: 'int32',
    },
    ItemRecurringDurations: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $PurchasePlanDto = {
  type: 'object',
  properties: {
    PlanId: {
      type: 'integer',
      format: 'int32',
    },
    Quantity: {
      maximum: 999,
      minimum: 1,
      type: 'integer',
      format: 'int32',
    },
    ItemRecurringDurations: {
      type: 'integer',
      format: 'int32',
    },
    CurrentPage: {
      type: 'integer',
      format: 'int32',
    },
    PageSize: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $OperationsDto = {
  type: 'object',
  properties: {
    DateRequested: {
      type: 'string',
      format: 'date-time',
    },
    DateCompleted: {
      type: 'string',
      format: 'date-time',
    },
    ErrorDetail: {
      type: 'string',
    },
    Flag: {
      type: 'string',
    },
    QueuedOperationId: {
      type: 'integer',
      format: 'int32',
    },
    QueuedBy: {
      type: 'integer',
      format: 'int32',
    },
    SourceId: {
      type: 'integer',
      format: 'int32',
    },
    SourceName: {
      type: 'string',
    },
    OperationName: {
      type: 'string',
    },
    OperationStatus: {
      type: 'string',
    },
    ConfirmationHash: {
      type: 'string',
    },
    IsConfirmed: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $OperationsDto_Request = {
  type: 'object',
  properties: {
    DateRequested: {
      type: 'string',
      format: 'date-time',
    },
    DateCompleted: {
      type: 'string',
      format: 'date-time',
    },
    ErrorDetail: {
      type: 'string',
    },
    Flag: {
      type: 'string',
    },
    QueuedOperationId: {
      type: 'integer',
      format: 'int32',
    },
    QueuedBy: {
      type: 'integer',
      format: 'int32',
    },
    SourceId: {
      type: 'integer',
      format: 'int32',
    },
    SourceName: {
      type: 'string',
    },
    OperationName: {
      type: 'string',
    },
    OperationStatus: {
      type: 'string',
    },
    ConfirmationHash: {
      type: 'string',
    },
    IsConfirmed: {
      type: 'boolean',
    },
  },
} as const;

export const $OperationsDto_List = {
  type: 'object',
  properties: {
    DateRequested: {
      type: 'string',
      format: 'date-time',
    },
    DateCompleted: {
      type: 'string',
      format: 'date-time',
    },
    ErrorDetail: {
      type: 'string',
    },
    Flag: {
      type: 'string',
    },
    QueuedOperationId: {
      type: 'integer',
      format: 'int32',
    },
    QueuedBy: {
      type: 'integer',
      format: 'int32',
    },
    SourceId: {
      type: 'integer',
      format: 'int32',
    },
    SourceName: {
      type: 'string',
    },
    OperationName: {
      type: 'string',
    },
    OperationStatus: {
      type: 'string',
    },
    ConfirmationHash: {
      type: 'string',
    },
    IsConfirmed: {
      type: 'boolean',
    },
  },
} as const;

export const $QueuedOperationsDto = {
  type: 'object',
  properties: {
    QueuedOperations: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/OperationsDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ServerInfoDto = {
  type: 'object',
  properties: {
    Key: {
      type: 'string',
    },
    Head: {
      type: 'string',
    },
    Value: {
      type: 'string',
    },
    MachineName: {
      type: 'string',
    },
    PrimaryServer: {
      type: 'boolean',
    },
    ServerIp: {
      type: 'string',
    },
    Platform: {
      type: 'string',
    },
    UserName: {
      type: 'string',
    },
    UserPassword: {
      type: 'string',
    },
    ReleaseDate: {
      type: 'string',
      format: 'date-time',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SystemInfoDto = {
  type: 'object',
  properties: {
    BuildNumber: {
      type: 'string',
    },
    InstallPath: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SystemServicesDto = {
  type: 'object',
  properties: {
    SystemServices: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SystemServiceDto:List',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SystemServiceDto = {
  type: 'object',
  properties: {
    ServiceName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    ServiceType: {
      type: 'string',
    },
    ServiceStatus: {
      type: 'string',
    },
    ServiceDescription: {
      type: 'string',
    },
    StartupStatus: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SystemServiceDto_List = {
  type: 'object',
  properties: {
    ServiceName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    ServiceType: {
      type: 'string',
    },
    ServiceStatus: {
      type: 'string',
    },
    ServiceDescription: {
      type: 'string',
    },
    StartupStatus: {
      type: 'string',
    },
  },
} as const;

export const $SystemServiceDto_Request = {
  type: 'object',
  properties: {
    ServiceName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    ServiceType: {
      type: 'string',
    },
    ServiceStatus: {
      type: 'string',
    },
    ServiceDescription: {
      type: 'string',
    },
    StartupStatus: {
      type: 'string',
    },
  },
} as const;

export const $UpdateSystemServiceDto = {
  required: ['ServiceName'],
  type: 'object',
  properties: {
    ServiceName: {
      type: 'string',
    },
  },
} as const;

export const $EmailsDto = {
  type: 'object',
  properties: {
    Emails: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/EmailDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $EmailDto_List = {
  type: 'object',
  properties: {
    EmailId: {
      type: 'integer',
      format: 'int32',
    },
    ToAddress: {
      type: 'string',
    },
    FromEmailAddress: {
      type: 'string',
    },
    EMailSubject: {
      type: 'string',
    },
    EmailType: {
      type: 'string',
    },
    EmailTemplateId: {
      type: 'integer',
      format: 'int32',
    },
    EmailStatus: {
      type: 'boolean',
    },
    RetryCount: {
      type: 'integer',
      format: 'int32',
    },
    SentDate: {
      type: 'string',
      format: 'date-time',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    CcAddress: {
      type: 'string',
    },
    BccAddress: {
      type: 'string',
    },
    EmailBody: {
      type: 'string',
    },
    EmailErrorDescription: {
      type: 'string',
    },
    IsRetryReset: {
      type: 'boolean',
    },
    MailDeliverySettingsId: {
      type: 'integer',
      format: 'int32',
    },
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    SmtpPort: {
      type: 'integer',
      format: 'int32',
    },
    SmtpAuthentication: {
      type: 'boolean',
    },
    EnableSsl: {
      type: 'boolean',
    },
    MailDeliveryType: {
      type: 'string',
    },
    DnsServer: {
      type: 'string',
    },
    SmtpServer: {
      type: 'string',
    },
    AuthUser: {
      type: 'string',
    },
    AuthPassword: {
      type: 'string',
    },
    FromAddress: {
      type: 'string',
    },
  },
} as const;

export const $EmailDto = {
  type: 'object',
  properties: {
    EmailId: {
      type: 'integer',
      format: 'int32',
    },
    ToAddress: {
      type: 'string',
    },
    FromEmailAddress: {
      type: 'string',
    },
    EMailSubject: {
      type: 'string',
    },
    EmailType: {
      type: 'string',
    },
    EmailTemplateId: {
      type: 'integer',
      format: 'int32',
    },
    EmailStatus: {
      type: 'boolean',
    },
    RetryCount: {
      type: 'integer',
      format: 'int32',
    },
    SentDate: {
      type: 'string',
      format: 'date-time',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    CcAddress: {
      type: 'string',
    },
    BccAddress: {
      type: 'string',
    },
    EmailBody: {
      type: 'string',
    },
    EmailErrorDescription: {
      type: 'string',
    },
    IsRetryReset: {
      type: 'boolean',
    },
    MailDeliverySettingsId: {
      type: 'integer',
      format: 'int32',
    },
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    SmtpPort: {
      type: 'integer',
      format: 'int32',
    },
    SmtpAuthentication: {
      type: 'boolean',
    },
    EnableSsl: {
      type: 'boolean',
    },
    MailDeliveryType: {
      type: 'string',
    },
    DnsServer: {
      type: 'string',
    },
    SmtpServer: {
      type: 'string',
    },
    AuthUser: {
      type: 'string',
    },
    AuthPassword: {
      type: 'string',
    },
    FromAddress: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $EmailTemplatesDto = {
  type: 'object',
  properties: {
    EmailTemplateList: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/EmailTemplateDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $EmailTemplateDto = {
  required: ['DisplayName'],
  type: 'object',
  properties: {
    EmailTags: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/EmailTagsDto',
      },
    },
    EmailTemplateId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    SystemName: {
      type: 'string',
    },
    Body: {
      type: 'string',
    },
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $EmailTemplateDto_List = {
  type: 'object',
  properties: {
    EmailTags: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/EmailTagsDto',
      },
    },
    EmailTemplateId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    SystemName: {
      type: 'string',
    },
    Body: {
      type: 'string',
    },
    UserId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $EmailTagsDto = {
  type: 'object',
  properties: {
    EmailTagId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    SystemName: {
      type: 'string',
    },
    ParentName: {
      type: 'string',
    },
    TypeItemId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $MailSettingsListDto = {
  type: 'object',
  properties: {
    MailSettings: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/MailSettingsDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $MailSettingsDto_List = {
  type: 'object',
  properties: {
    TemplateId: {
      type: 'integer',
      format: 'int32',
    },
    TemplateSystemName: {
      type: 'string',
    },
    TemplateName: {
      type: 'string',
    },
    SendMailToAllUsers: {
      type: 'boolean',
    },
    SendMailToMe: {
      type: 'boolean',
    },
    CCTo: {
      pattern: '^\\S+@\\S+\\.\\S+$',
      type: 'string',
    },
    ToThisUser: {
      type: 'integer',
      format: 'int32',
    },
    DefaultOn: {
      type: 'boolean',
    },
  },
} as const;

export const $MailSettingsDto = {
  type: 'object',
  properties: {
    TemplateId: {
      type: 'integer',
      format: 'int32',
    },
    TemplateSystemName: {
      type: 'string',
    },
    TemplateName: {
      type: 'string',
    },
    SendMailToAllUsers: {
      type: 'boolean',
    },
    SendMailToMe: {
      type: 'boolean',
    },
    CCTo: {
      pattern: '^\\S+@\\S+\\.\\S+$',
      type: 'string',
    },
    ToThisUser: {
      type: 'integer',
      format: 'int32',
    },
    DefaultOn: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $AdvanceMailSettingsDto = {
  type: 'object',
  properties: {
    TemplateName: {
      type: 'string',
    },
    TemplateSystemName: {
      type: 'string',
    },
    TemplateId: {
      type: 'integer',
      format: 'int32',
    },
    UsersList: {
      type: 'array',
      items: {
        type: 'integer',
        format: 'int32',
      },
    },
    SendMailsToAllUsers: {
      type: 'boolean',
    },
    DefaultOn: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $MailDeliverySettingsDto = {
  type: 'object',
  properties: {
    MailDeliverySettingsId: {
      type: 'integer',
      format: 'int32',
    },
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    SmtpPort: {
      type: 'integer',
      format: 'int32',
    },
    SmtpAuthentication: {
      type: 'boolean',
    },
    EnableSsl: {
      type: 'boolean',
    },
    MailDeliveryType: {
      type: 'string',
    },
    DnsServer: {
      type: 'string',
    },
    SmtpServer: {
      type: 'string',
    },
    AuthUser: {
      type: 'string',
    },
    AuthPassword: {
      type: 'string',
    },
    FromAddress: {
      type: 'string',
    },
    ToEmailAddress: {
      type: 'string',
    },
    FromEmailAddress: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $MailDeliverySettingsDto_Request = {
  type: 'object',
  properties: {
    MailDeliverySettingsId: {
      type: 'integer',
      format: 'int32',
    },
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    SmtpPort: {
      type: 'integer',
      format: 'int32',
    },
    SmtpAuthentication: {
      type: 'boolean',
    },
    EnableSsl: {
      type: 'boolean',
    },
    MailDeliveryType: {
      type: 'string',
    },
    DnsServer: {
      type: 'string',
    },
    SmtpServer: {
      type: 'string',
    },
    AuthUser: {
      type: 'string',
    },
    AuthPassword: {
      type: 'string',
    },
    FromAddress: {
      type: 'string',
    },
    ToEmailAddress: {
      type: 'string',
    },
    FromEmailAddress: {
      type: 'string',
    },
  },
} as const;

export const $MailDeliverySettingsDto_RequestTestmail = {
  type: 'object',
  properties: {
    MailDeliverySettingsId: {
      type: 'integer',
      format: 'int32',
    },
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    SmtpPort: {
      type: 'integer',
      format: 'int32',
    },
    SmtpAuthentication: {
      type: 'boolean',
    },
    EnableSsl: {
      type: 'boolean',
    },
    MailDeliveryType: {
      type: 'string',
    },
    DnsServer: {
      type: 'string',
    },
    SmtpServer: {
      type: 'string',
    },
    AuthUser: {
      type: 'string',
    },
    AuthPassword: {
      type: 'string',
    },
    FromAddress: {
      type: 'string',
    },
    ToEmailAddress: {
      type: 'string',
    },
    FromEmailAddress: {
      type: 'string',
    },
    SendTestEmail: {
      type: 'boolean',
    },
  },
} as const;

export const $NatIpAddressesDto = {
  type: 'object',
  properties: {
    NatIpAddresses: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/NatIpAddressDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $NatIpAddressDto_List = {
  type: 'object',
  properties: {
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    ServerName: {
      type: 'string',
    },
    ServerIp: {
      type: 'string',
    },
    NatId: {
      type: 'integer',
      format: 'int32',
    },
    ExternalIpAddress: {
      type: 'string',
    },
    InternalIpAddress: {
      type: 'string',
    },
    IpType: {
      type: 'string',
    },
    Limit: {
      type: 'integer',
      format: 'int32',
    },
    IsIPv6: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $NatIpAddressDto_Request = {
  required: ['ExternalIpAddress', 'InternalIpAddress'],
  type: 'object',
  properties: {
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    ServerName: {
      type: 'string',
    },
    ServerIp: {
      type: 'string',
    },
    ExternalIpAddress: {
      type: 'string',
    },
    InternalIpAddress: {
      type: 'string',
    },
    IpType: {
      type: 'string',
    },
    Limit: {
      type: 'integer',
      format: 'int32',
    },
    IsIPv6: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $NatIpAddressDto = {
  required: ['ExternalIpAddress', 'InternalIpAddress'],
  type: 'object',
  properties: {
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    ServerName: {
      type: 'string',
    },
    ServerIp: {
      type: 'string',
    },
    NatId: {
      type: 'integer',
      format: 'int32',
    },
    ExternalIpAddress: {
      type: 'string',
    },
    InternalIpAddress: {
      type: 'string',
    },
    IpType: {
      type: 'string',
    },
    Limit: {
      type: 'integer',
      format: 'int32',
    },
    IsIPv6: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ResellerDnsDto_Request = {
  type: 'object',
  properties: {
    PNameServer: {
      type: 'string',
      description: 'Primary Server Name',
    },
    SNameServer: {
      type: 'string',
      description: 'Secondary Server Name',
    },
    NameServer3: {
      type: 'string',
    },
    NameServer4: {
      type: 'string',
    },
    EmailAddress: {
      type: 'string',
    },
  },
} as const;

export const $ResellerDnsDto = {
  type: 'object',
  properties: {
    ResellerDnsId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    PNameServer: {
      type: 'string',
    },
    SNameServer: {
      type: 'string',
    },
    NameServer3: {
      type: 'string',
    },
    NameServer4: {
      type: 'string',
    },
    EmailAddress: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $DnsZonesDto = {
  type: 'object',
  properties: {
    DnsZones: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/DnsZoneDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $DnsZoneDto_List = {
  type: 'object',
  properties: {
    DnsZoneId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerName: {
      type: 'string',
    },
    DnsZoneName: {
      type: 'string',
    },
    IsNameBased: {
      type: 'boolean',
    },
    ProviderName: {
      type: 'string',
    },
    UserName: {
      type: 'string',
    },
    WebServerIp: {
      type: 'string',
    },
    MailServerIp: {
      type: 'string',
    },
    WebsiteType: {
      type: 'string',
    },
    ZoneSettings: {
      type: 'string',
    },
    TimeDifference: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $DnsZoneDto_Request = {
  required: ['DnsZoneName', 'ServerRoleId'],
  type: 'object',
  properties: {
    OwnerId: {
      type: 'integer',
      description: 'Give ownerId if want to create DNS zone for your child.',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      description:
        "server role id is required to create dns zone, it will be optional if load balancer settings is set to 'AUTO' for resellers and clients.",
      format: 'int32',
    },
    DnsZoneName: {
      type: 'string',
    },
    ProviderName: {
      type: 'string',
      description: 'provider name is required to create dns zone.',
    },
    WebServerIp: {
      type: 'string',
    },
    MailServerIp: {
      type: 'string',
    },
    WebsiteType: {
      type: 'string',
      description:
        "WebsiteType have two possible values '0' for ip base and '1' for name base, it is required only in DNSOnly case.",
    },
  },
} as const;

export const $DnsZoneDto = {
  required: ['DnsZoneName'],
  type: 'object',
  properties: {
    DnsZoneId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerName: {
      type: 'string',
    },
    DnsZoneName: {
      type: 'string',
    },
    IsNameBased: {
      type: 'boolean',
    },
    ProviderName: {
      type: 'string',
    },
    UserName: {
      type: 'string',
    },
    WebServerIp: {
      type: 'string',
    },
    MailServerIp: {
      type: 'string',
    },
    ZoneSettings: {
      type: 'string',
    },
    TimeDifference: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $UpdateDnsZoneDto_Request = {
  required: ['ZoneSettings'],
  type: 'object',
  properties: {
    ZoneSettings: {
      type: 'string',
    },
    SaveReload: {
      type: 'boolean',
      description: 'Set it true if want to reload zone settings after save.',
    },
  },
} as const;

export const $UpdateDnsZoneDto = {
  type: 'object',
  properties: {
    DnsZoneId: {
      type: 'integer',
      format: 'int32',
    },
    ZoneSettings: {
      type: 'string',
    },
    SaveReload: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $DatabasesDto = {
  type: 'object',
  properties: {
    Databases: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/DatabaseDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $DatabaseDto_List = {
  type: 'object',
  properties: {
    DatabaseId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerName: {
      type: 'string',
    },
    DatabaseName: {
      type: 'string',
    },
    Provider: {
      type: 'string',
    },
    DatabasePath: {
      type: 'string',
    },
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    WebsiteName: {
      type: 'string',
    },
    InstanceName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    DataFileSize: {
      type: 'integer',
      format: 'int32',
    },
    LogFileSize: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    DatabaseUserList: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
} as const;

export const $DatabaseDto_Request = {
  required: ['DatabaseName', 'Provider', 'WebsiteId'],
  type: 'object',
  properties: {
    OwnerId: {
      type: 'integer',
      description: 'Give ownerId if want to create database for your child.',
      format: 'int32',
    },
    DatabaseName: {
      type: 'string',
    },
    Provider: {
      type: 'string',
      description: 'Database provider is required to create database.',
    },
    WebsiteId: {
      type: 'integer',
      description: 'Website id is required to create database.',
      format: 'int32',
    },
    InstanceName: {
      type: 'string',
      description:
        'Give complete instance name with colon(:) separated port number.',
    },
    ServerRoleId: {
      type: 'integer',
      description: 'Server role id is required to create database.',
      format: 'int32',
    },
    DataFileSize: {
      type: 'integer',
      format: 'int32',
    },
    LogFileSize: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      description:
        "Give composite resource id to add database, you can get composite resource id by calling '/composite-resources'.",
      format: 'int32',
    },
    DatabaseUserList: {
      type: 'array',
      description:
        'Give the list of database user if want to give permission on this database.',
      items: {
        type: 'string',
      },
    },
  },
} as const;

export const $DatabaseDto = {
  required: ['DatabaseName', 'Provider', 'WebsiteName'],
  type: 'object',
  properties: {
    DatabaseId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerName: {
      type: 'string',
    },
    DatabaseName: {
      type: 'string',
    },
    Provider: {
      type: 'string',
    },
    DatabasePath: {
      type: 'string',
    },
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    WebsiteName: {
      type: 'string',
    },
    InstanceName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    DataFileSize: {
      type: 'integer',
      format: 'int32',
    },
    LogFileSize: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    DatabaseUserList: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $UpdateDatabaseDto_Request = {
  type: 'object',
  properties: {
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    DataFileSize: {
      type: 'integer',
      format: 'int32',
    },
    LogFileSize: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $UpdateDatabaseDto = {
  type: 'object',
  properties: {
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    DataFileSize: {
      type: 'integer',
      format: 'int32',
    },
    LogFileSize: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $AssignUserstoDatabaseDto_Request = {
  type: 'object',
  properties: {
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    DatabaseName: {
      type: 'string',
    },
    DatabaseUserList: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    InstanceName: {
      type: 'string',
      description:
        'Give complete instance name with colon(:) separated port number.',
    },
    Provider: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $AssignUserstoDatabaseDto = {
  type: 'object',
  properties: {
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    DatabaseName: {
      type: 'string',
    },
    DatabaseUserList: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    InstanceName: {
      type: 'string',
    },
    Provider: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $DatabaseConnectivityDto = {
  required: ['DatabaseUserName', 'DatabaseUserPassword'],
  type: 'object',
  properties: {
    DatabaseUserName: {
      type: 'string',
    },
    DatabaseUserPassword: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $DatabaseConnectivityDto_Request = {
  required: ['DatabaseUserName', 'DatabaseUserPassword'],
  type: 'object',
  properties: {
    DatabaseUserName: {
      type: 'string',
    },
    DatabaseUserPassword: {
      type: 'string',
    },
  },
} as const;

export const $ImportDatabaseDto_Request = {
  required: ['DatabaseName', 'InstanceName', 'Provider', 'WebsiteName'],
  type: 'object',
  properties: {
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    DatabaseName: {
      type: 'string',
    },
    Provider: {
      type: 'string',
    },
    DatabaseUserName: {
      type: 'string',
    },
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    WebsiteName: {
      type: 'string',
    },
    InstanceName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    CreateForMe: {
      type: 'boolean',
    },
    UserName: {
      type: 'string',
    },
  },
} as const;

export const $ImportDatabaseDto = {
  required: ['DatabaseName', 'InstanceName', 'Provider', 'WebsiteName'],
  type: 'object',
  properties: {
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    DatabaseName: {
      type: 'string',
    },
    Provider: {
      type: 'string',
    },
    DatabaseUserName: {
      type: 'string',
    },
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    WebsiteName: {
      type: 'string',
    },
    InstanceName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    CreateForMe: {
      type: 'boolean',
    },
    UserName: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $DatabaseUsersDto = {
  type: 'object',
  properties: {
    DatabaseUsers: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/DatabaseUserDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $DatabaseUserDto = {
  required: ['DatabaseUserName', 'InstanceName', 'Password', 'Provider'],
  type: 'object',
  properties: {
    DatabaseUserId: {
      type: 'integer',
      format: 'int32',
    },
    DatabaseUserName: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    Provider: {
      type: 'string',
    },
    DatabaseList: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    InstanceName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerName: {
      type: 'string',
    },
    DatabaseName: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $DatabaseUserDto_List = {
  type: 'object',
  properties: {
    DatabaseUserId: {
      type: 'integer',
      format: 'int32',
    },
    DatabaseUserName: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    Provider: {
      type: 'string',
    },
    DatabaseList: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    InstanceName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerName: {
      type: 'string',
    },
    DatabaseName: {
      type: 'string',
    },
  },
} as const;

export const $DatabaseUserDto_Request = {
  required: [
    'DatabaseUserName',
    'InstanceName',
    'Password',
    'Provider',
    'ServerRoleId',
  ],
  type: 'object',
  properties: {
    DatabaseUserName: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      description:
        'Give ownerId if want to create database user for your child.',
      format: 'int32',
    },
    Provider: {
      type: 'string',
    },
    DatabaseList: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    InstanceName: {
      type: 'string',
      description:
        'Give complete instance name with colon(:) separated port number.',
    },
    ServerRoleId: {
      type: 'integer',
      description: 'server role id is required to create database user.',
      format: 'int32',
    },
  },
} as const;

export const $UpdateDatabaseUserDto = {
  required: ['Password'],
  type: 'object',
  properties: {
    DatabaseUserName: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $UpdateDatabaseUserDto_Request = {
  required: ['Password'],
  type: 'object',
  properties: {
    DatabaseUserName: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
  },
} as const;

export const $AssignDatabasestoUserDto = {
  type: 'object',
  properties: {
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    DatabaseList: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    InstanceName: {
      type: 'string',
    },
    Provider: {
      type: 'string',
    },
    DatabaseUserName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $AssignDatabasestoUserDto_Request = {
  type: 'object',
  properties: {
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    DatabaseList: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    InstanceName: {
      type: 'string',
    },
    Provider: {
      type: 'string',
    },
    DatabaseUserName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $DatabaseTasksDto = {
  type: 'object',
  properties: {
    DatabaseTasks: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/DatabaseTaskDto:List',
      },
    },
    DatabaseId: {
      type: 'integer',
      format: 'int32',
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $DatabaseTaskDto_List = {
  required: ['TaskName'],
  type: 'object',
  properties: {
    DatabaseTaskId: {
      type: 'integer',
      format: 'int32',
    },
    DatabaseId: {
      type: 'integer',
      format: 'int32',
    },
    TaskName: {
      type: 'string',
    },
    DatabaseFilePath: {
      type: 'string',
    },
    SourceServerId: {
      type: 'integer',
      format: 'int32',
    },
    TargetServerId: {
      type: 'integer',
      format: 'int32',
    },
    TaskStatus: {
      type: 'string',
    },
    DateAdded: {
      type: 'string',
      format: 'date-time',
    },
    DateModified: {
      type: 'string',
      format: 'date-time',
    },
    AddedBy: {
      type: 'integer',
      format: 'int32',
    },
    ModifiedBy: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $DatabaseTaskDto = {
  required: ['TaskName'],
  type: 'object',
  properties: {
    DatabaseTaskId: {
      type: 'integer',
      format: 'int32',
    },
    DatabaseId: {
      type: 'integer',
      format: 'int32',
    },
    TaskName: {
      type: 'string',
    },
    DatabaseFilePath: {
      type: 'string',
    },
    SourceServerId: {
      type: 'integer',
      format: 'int32',
    },
    TargetServerId: {
      type: 'integer',
      format: 'int32',
    },
    TaskStatus: {
      type: 'string',
    },
    DateAdded: {
      type: 'string',
      format: 'date-time',
    },
    DateModified: {
      type: 'string',
      format: 'date-time',
    },
    AddedBy: {
      type: 'integer',
      format: 'int32',
    },
    ModifiedBy: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $RestoreDatabaseDto = {
  type: 'object',
  properties: {
    BrowsePath: {
      type: 'string',
    },
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    CurrentPage: {
      type: 'integer',
      format: 'int32',
    },
    PageSize: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $RestoreDatabaseDto_Request = {
  type: 'object',
  properties: {
    BrowsePath: {
      type: 'string',
    },
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $LogRotationDto_Request = {
  type: 'object',
  properties: {
    ConditionType: {
      type: 'string',
    },
    ActionType: {
      type: 'string',
    },
    SizeLimit: {
      type: 'integer',
      format: 'int32',
    },
    DaysLimit: {
      type: 'integer',
      format: 'int32',
    },
    FileCountLimit: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $LogRotationDto = {
  type: 'object',
  properties: {
    LogRotationId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    ConditionType: {
      type: 'string',
    },
    ActionType: {
      type: 'string',
    },
    SizeLimit: {
      type: 'integer',
      format: 'int32',
    },
    DaysLimit: {
      type: 'integer',
      format: 'int32',
    },
    FileCountLimit: {
      type: 'integer',
      format: 'int32',
    },
    AddedBy: {
      type: 'integer',
      format: 'int32',
    },
    ModifiedBy: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $MailDomainDto = {
  required: ['MailDomainName'],
  type: 'object',
  properties: {
    MailDomainId: {
      type: 'integer',
      format: 'int32',
    },
    MailDomainName: {
      type: 'string',
    },
    MailServerIp: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    MailOnly: {
      type: 'boolean',
    },
    ProviderName: {
      type: 'string',
    },
    DnsServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    WebsiteName: {
      type: 'string',
    },
    AddDns: {
      type: 'boolean',
    },
    OwnerName: {
      type: 'string',
    },
    TotalMailboxes: {
      type: 'integer',
      format: 'int32',
    },
    DnsProviderName: {
      type: 'string',
    },
    MailAccessUrl: {
      type: 'string',
    },
    MailAdminUrl: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $MailDomainDto_List = {
  required: ['MailDomainName'],
  type: 'object',
  properties: {
    MailDomainId: {
      type: 'integer',
      format: 'int32',
    },
    MailDomainName: {
      type: 'string',
    },
    MailServerIp: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    MailOnly: {
      type: 'boolean',
    },
    ProviderName: {
      type: 'string',
    },
    DnsServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    WebsiteName: {
      type: 'string',
    },
    AddDns: {
      type: 'boolean',
    },
    OwnerName: {
      type: 'string',
    },
    TotalMailboxes: {
      type: 'integer',
      format: 'int32',
    },
    DnsProviderName: {
      type: 'string',
    },
    MailAccessUrl: {
      type: 'string',
    },
    MailAdminUrl: {
      type: 'string',
    },
  },
} as const;

export const $MailDomainDto_Request = {
  required: ['MailDomainName'],
  type: 'object',
  properties: {
    MailDomainName: {
      type: 'string',
    },
    MailServerIp: {
      type: 'string',
      description:
        'Mail server ip is required if want to add DNS zone with mail domain.',
    },
    OwnerId: {
      type: 'integer',
      description: 'Give ownerId if want to create mail domain for your child.',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      description:
        "server role id is required to create mail domain, it will be optional if load balancer settings is set to 'AUTO' for resellers and clients.",
      format: 'int32',
    },
    ProviderName: {
      type: 'string',
      description: 'provider name is required to create mail domain.',
    },
    AddDns: {
      type: 'boolean',
      description: 'Set it true if want to create DNS zone with mail domain.',
    },
    DnsServerRoleId: {
      type: 'integer',
      description:
        "DNS server role id is required to create DNS zone if 'AddDns' flag is true, it will be optional if load balancer settings is set to 'AUTO' for resellers and clients.",
      format: 'int32',
    },
    DnsProviderName: {
      type: 'string',
      description:
        "If the 'AddDns' flag is true, it will be mandatory to provide the 'DnsProviderName' string.",
    },
  },
} as const;

export const $ImportMailDomainDto = {
  required: ['MailDomainName'],
  type: 'object',
  properties: {
    MailDomainName: {
      type: 'string',
    },
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ImportMailDomainDto_Request = {
  required: ['MailDomainName'],
  type: 'object',
  properties: {
    MailDomainName: {
      type: 'string',
    },
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $MailBoxDto = {
  required: ['MailBoxName', 'MailDomainId', 'Password'],
  type: 'object',
  properties: {
    MailBoxId: {
      type: 'integer',
      format: 'int32',
    },
    MailBoxName: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    MailDomainId: {
      type: 'integer',
      format: 'int32',
    },
    MailBoxSize: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    ProviderName: {
      type: 'string',
    },
    MailDomainName: {
      type: 'string',
    },
    EmailAddress: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    ForwardAddress: {
      type: 'string',
    },
    IsDomainAdmin: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $MailBoxDto_List = {
  required: ['MailBoxName', 'MailDomainId', 'Password'],
  type: 'object',
  properties: {
    MailBoxId: {
      type: 'integer',
      format: 'int32',
    },
    MailBoxName: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    MailDomainId: {
      type: 'integer',
      format: 'int32',
    },
    MailBoxSize: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    ProviderName: {
      type: 'string',
    },
    MailDomainName: {
      type: 'string',
    },
    EmailAddress: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    ForwardAddress: {
      type: 'string',
    },
    IsDomainAdmin: {
      type: 'boolean',
    },
  },
} as const;

export const $MailBoxDto_Request = {
  required: ['MailBoxName', 'Password'],
  type: 'object',
  properties: {
    MailBoxName: {
      type: 'string',
      description: 'Mailbox name is required to add mailbox.',
    },
    MailBoxSize: {
      type: 'integer',
      description:
        'Mailbox size is required if composite rsource id is less than 1.',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      description: 'Composite resource id is optional.',
      format: 'int32',
    },
    Password: {
      type: 'string',
      description:
        'It is good to set complex password, but simple password is also acceptable.',
    },
    ForwardAddress: {
      type: 'string',
      description: 'Email address should be valid.',
    },
    IsDomainAdmin: {
      type: 'boolean',
      description: 'Set it true if want to create admin type mailbox.',
    },
  },
} as const;

export const $UpdateMailBoxDto = {
  required: ['MailBoxId'],
  type: 'object',
  properties: {
    MailBoxId: {
      type: 'integer',
      format: 'int32',
    },
    MailBoxName: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    MailDomainId: {
      type: 'integer',
      format: 'int32',
    },
    MailBoxSize: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    ProviderName: {
      type: 'string',
    },
    ChangePassword: {
      type: 'boolean',
    },
    Password: {
      type: 'string',
    },
    ForwardAddress: {
      type: 'string',
    },
    IsDomainAdmin: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $UpdateMailBoxDto_Request = {
  type: 'object',
  properties: {
    MailBoxName: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    MailBoxSize: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    ProviderName: {
      type: 'string',
    },
    ChangePassword: {
      type: 'boolean',
    },
    Password: {
      type: 'string',
    },
    ForwardAddress: {
      type: 'string',
    },
    IsDomainAdmin: {
      type: 'boolean',
    },
  },
} as const;

export const $MailboxAliasDto = {
  type: 'object',
  properties: {
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    MailDomainId: {
      type: 'integer',
      format: 'int32',
    },
    MailBoxId: {
      type: 'integer',
      format: 'int32',
    },
    EmailAddress: {
      type: 'string',
    },
    MailBoxName: {
      type: 'string',
    },
    MailDomainName: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $MailboxAliasDto_List = {
  type: 'object',
  properties: {
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    EmailAddress: {
      type: 'string',
    },
    MailBoxName: {
      type: 'string',
    },
    MailDomainName: {
      type: 'string',
    },
  },
} as const;

export const $MailboxAliasDto_Request = {
  type: 'object',
  properties: {
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    EmailAddress: {
      type: 'string',
    },
    MailBoxName: {
      type: 'string',
    },
    MailDomainName: {
      type: 'string',
    },
  },
} as const;

export const $DistributionListDto = {
  required: ['DistributionListName'],
  type: 'object',
  properties: {
    DistributionListId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    MailBoxId: {
      type: 'integer',
      format: 'int32',
    },
    MailBoxName: {
      type: 'string',
    },
    DistributionListName: {
      type: 'string',
    },
    MailDomainId: {
      type: 'integer',
      format: 'int32',
    },
    MailDomainName: {
      type: 'string',
    },
    MembersList: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    Members: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $DistributionListDto_Update = {
  required: ['DistributionListName'],
  type: 'object',
  properties: {
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    MailBoxId: {
      type: 'integer',
      format: 'int32',
    },
    MailBoxName: {
      type: 'string',
    },
    DistributionListName: {
      type: 'string',
    },
    MailDomainName: {
      type: 'string',
    },
    MembersList: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    Members: {
      type: 'string',
    },
  },
} as const;

export const $DistributionListDto_List = {
  required: ['DistributionListName'],
  type: 'object',
  properties: {
    DistributionListId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    MailBoxId: {
      type: 'integer',
      format: 'int32',
    },
    MailBoxName: {
      type: 'string',
    },
    DistributionListName: {
      type: 'string',
    },
    MailDomainId: {
      type: 'integer',
      format: 'int32',
    },
    MailDomainName: {
      type: 'string',
    },
    MembersList: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    Members: {
      type: 'string',
    },
  },
} as const;

export const $DistributionListDto_Request = {
  required: ['DistributionListName'],
  type: 'object',
  properties: {
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    MailBoxId: {
      type: 'integer',
      format: 'int32',
    },
    MailBoxName: {
      type: 'string',
    },
    DistributionListName: {
      type: 'string',
    },
    MailDomainId: {
      type: 'integer',
      format: 'int32',
    },
    MailDomainName: {
      type: 'string',
    },
    MembersList: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    Members: {
      type: 'string',
    },
  },
} as const;

export const $WebsiteFileUploadDto = {
  required: ['BinaryData', 'FileName'],
  type: 'object',
  properties: {
    FileName: {
      type: 'string',
    },
    BasePath: {
      type: 'string',
    },
    BinaryData: {
      type: 'string',
    },
  },
} as const;

export const $WebsiteIoDto = {
  required: ['ObjectName'],
  type: 'object',
  properties: {
    ObjectName: {
      type: 'string',
    },
    BasePath: {
      type: 'string',
    },
  },
} as const;

export const $WebsiteFileContentDto = {
  required: ['FileName'],
  type: 'object',
  properties: {
    FileName: {
      type: 'string',
    },
    BasePath: {
      type: 'string',
    },
    TextData: {
      type: 'string',
    },
  },
} as const;

export const $WebsiteObjectRenameDto = {
  required: ['ObjectName', 'ObjectNewName'],
  type: 'object',
  properties: {
    ObjectName: {
      type: 'string',
    },
    ObjectNewName: {
      type: 'string',
    },
    BasePath: {
      type: 'string',
    },
  },
} as const;

export const $WebsiteFilesZipDto = {
  required: ['ArchieveName', 'FilesName'],
  type: 'object',
  properties: {
    BasePath: {
      type: 'string',
    },
    FilesName: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    ArchieveName: {
      type: 'string',
    },
  },
} as const;

export const $PermissionsDto = {
  required: ['FolderPath', 'Inheritence', 'Operation', 'Trustee', 'WebsiteId'],
  type: 'object',
  properties: {
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    FolderPath: {
      type: 'string',
    },
    Trustee: {
      type: 'string',
    },
    Inheritence: {
      type: 'string',
    },
    FinalPermission: {
      type: 'string',
    },
    Operation: {
      type: 'string',
    },
    Users: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    PermissionsToSet: {
      $ref: '#/components/schemas/PermissionDto',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $PermissionsDto_Request = {
  required: ['FolderPath', 'Inheritence', 'Operation', 'Trustee', 'WebsiteId'],
  type: 'object',
  properties: {
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    FolderPath: {
      type: 'string',
    },
    Trustee: {
      type: 'string',
    },
    Inheritence: {
      type: 'string',
    },
    FinalPermission: {
      type: 'string',
    },
    Operation: {
      type: 'string',
    },
    Users: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    PermissionsToSet: {
      $ref: '#/components/schemas/PermissionDto',
    },
  },
} as const;

export const $PermissionDto = {
  type: 'object',
  properties: {
    FullControl: {
      type: 'boolean',
    },
    Modify: {
      type: 'boolean',
    },
    Read: {
      type: 'boolean',
    },
    Write: {
      type: 'boolean',
    },
    Execute: {
      type: 'boolean',
    },
    Delete: {
      type: 'boolean',
    },
  },
} as const;

export const $MailDomainsDto = {
  type: 'object',
  properties: {
    MailDomains: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/MailDomainDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SystemMailDomainListDto = {
  type: 'object',
  properties: {
    MailDomains: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SystemMailDomainDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SystemMailDomainDto = {
  type: 'object',
  properties: {
    MailDomainName: {
      type: 'string',
    },
  },
} as const;

export const $MailBoxesDto = {
  type: 'object',
  properties: {
    MailBoxes: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/MailBoxDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $MailboxAliasesDto = {
  type: 'object',
  properties: {
    EmailAddress: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/MailboxAliasDto:List',
      },
    },
    MailBoxId: {
      type: 'integer',
      format: 'int32',
    },
    MailDomainId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $DistributionListsDto = {
  type: 'object',
  properties: {
    DistributionLists: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/DistributionListDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    MailDomainId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $DistributionListMembersDto = {
  type: 'object',
  properties: {
    DistributionListName: {
      type: 'string',
    },
    MailDomainName: {
      type: 'string',
    },
    ListMembers: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $FileFoldersDto = {
  type: 'object',
  properties: {
    SubFolderStructure: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/FileFolderDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $FileFolderDto = {
  type: 'object',
  properties: {
    ObjectType: {
      type: 'string',
    },
    Name: {
      type: 'string',
    },
    FullPath: {
      type: 'string',
    },
    CreationTime: {
      type: 'string',
      format: 'date-time',
    },
    LastAccessTime: {
      type: 'string',
      format: 'date-time',
    },
    ModifiedTime: {
      type: 'string',
      format: 'date-time',
    },
    Size: {
      type: 'number',
      format: 'double',
    },
    FileData: {
      type: 'string',
    },
    NewPath: {
      type: 'string',
    },
    BinaryData: {
      type: 'string',
    },
    BinaryDataLength: {
      type: 'integer',
      format: 'int64',
    },
  },
} as const;

export const $FileContentOutDto = {
  type: 'object',
  properties: {
    BinaryData: {
      type: 'string',
    },
    TextData: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $UserPermissionsDto = {
  type: 'object',
  properties: {
    UserPermissions: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/UserPermissionDto',
      },
    },
    ModifiedPath: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $UserPermissionDto = {
  type: 'object',
  properties: {
    UserName: {
      type: 'string',
    },
    Permission: {
      type: 'string',
    },
    ApplyTo: {
      type: 'string',
    },
  },
} as const;

export const $ReturnPermissionsStatusDto = {
  type: 'object',
  properties: {
    UserName: {
      type: 'string',
    },
    Permission: {
      type: 'string',
    },
    ApplyTo: {
      type: 'string',
    },
    FolderPath: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $WebsitesDto = {
  type: 'object',
  properties: {
    Websites: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/WebsiteDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $WebsiteDto = {
  required: ['OwnerId', 'ProviderName', 'WebsiteName'],
  type: 'object',
  properties: {
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerName: {
      type: 'string',
    },
    RootFolderPath: {
      type: 'string',
    },
    IpAddress: {
      type: 'string',
    },
    DotnetVersion: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    ProviderName: {
      type: 'string',
    },
    WebsiteState: {
      type: 'string',
    },
    ExecutePermissions: {
      type: 'boolean',
    },
    IsNameBased: {
      type: 'boolean',
    },
    DotNetEnabled: {
      type: 'boolean',
    },
    PhpEnabled: {
      type: 'boolean',
    },
    PHPVersion: {
      type: 'string',
    },
    PerlEnabled: {
      type: 'boolean',
    },
    ColdFusionEnabled: {
      type: 'boolean',
    },
    StatsEnabled: {
      type: 'boolean',
    },
    IsSubDomain: {
      type: 'boolean',
    },
    Status: {
      type: 'string',
    },
    ReadPermission: {
      type: 'boolean',
    },
    WritePermission: {
      type: 'boolean',
    },
    EnableLogging: {
      type: 'boolean',
    },
    SubDomain: {
      type: 'boolean',
    },
    IsDedicated: {
      type: 'boolean',
    },
    LoggingUpdate: {
      type: 'boolean',
    },
    ExpiryDate: {
      type: 'string',
      format: 'date-time',
    },
    DateAdded: {
      type: 'string',
      format: 'date-time',
    },
    SendMailToUser: {
      type: 'boolean',
    },
    DiskUsage: {
      type: 'number',
      format: 'double',
    },
    BandwidthUsage: {
      type: 'number',
      format: 'double',
    },
    SoftaculousPath: {
      type: 'string',
    },
    WebsiteName: {
      type: 'string',
    },
    ServerType: {
      type: 'string',
    },
    ServerIp: {
      type: 'string',
    },
    AnonymousUser: {
      type: 'string',
    },
    AnonymousUserPass: {
      type: 'string',
    },
    VirtualDirectoryName: {
      type: 'string',
    },
    DefaultDocuments: {
      type: 'string',
    },
    ApplicationPoolUpdate: {
      type: 'boolean',
    },
    ApplicationPoolName: {
      type: 'string',
    },
    VirDirectoryRootPath: {
      type: 'string',
    },
    HttpRedirect: {
      type: 'string',
    },
    DirectoryBrowsingUpdate: {
      type: 'boolean',
    },
    IpAddressUpdate: {
      type: 'boolean',
    },
    DirectoryBrowsing: {
      type: 'boolean',
    },
    RedirectExactUrl: {
      type: 'boolean',
    },
    RedirectChildOnly: {
      type: 'boolean',
    },
    RedirectPermanent: {
      type: 'boolean',
    },
    DefaultDocUpdate: {
      type: 'boolean',
    },
    DefaultDocEnabled: {
      type: 'boolean',
    },
    AnonymousUpdate: {
      type: 'boolean',
    },
    IntegratedAuthenticationUpdate: {
      type: 'boolean',
    },
    AllowAnonymous: {
      type: 'boolean',
    },
    IntegratedAuthentication: {
      type: 'boolean',
    },
    HttpRedirectUpdate: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $WebsiteDto_Request = {
  required: ['OwnerId', 'ProviderName', 'WebsiteName'],
  type: 'object',
  properties: {
    WebsiteName: {
      type: 'string',
    },
    IpAddress: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      description:
        'Owner id is required if want to add a website for your child reseller or client.',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      description:
        "Server role id is required to create website, it will be optional if load balancer settings is set to 'AUTO' for resellers and clients.",
      format: 'int32',
    },
    ProviderName: {
      type: 'string',
      description: 'Provider name is required.',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    IsNameBased: {
      type: 'boolean',
      description: 'Set it true to create name base website.',
    },
    DotNetEnabled: {
      type: 'boolean',
      description: 'Set it true to enable dot net in website.',
    },
    PhpEnabled: {
      type: 'boolean',
      description: 'Set it true to enable php in website.',
    },
    PerlEnabled: {
      type: 'boolean',
      description: 'Set it true to enable perl in website.',
    },
    ColdFusionEnabled: {
      type: 'boolean',
      description: 'Set it true to enable cold fusion in website.',
    },
    StatsEnabled: {
      type: 'boolean',
      description: 'Set it true to enable stats in website.',
    },
    VirtualDirectoryName: {
      type: 'string',
      description:
        "Virtual directory name is required if 'IsNameBased' is set true.",
    },
    IsSubDomain: {
      type: 'boolean',
      description: 'Set this flag true to create subdomain.',
    },
    DefaultDocUpdate: {
      type: 'boolean',
      description: 'set this flag true to update default document.',
    },
    DefaultDocuments: {
      type: 'string',
      description:
        "Default documents is the comma separated list of file extentions it is required if 'DefaultDocUpdate' is set true.",
    },
    DirectoryBrowsing: {
      type: 'boolean',
      description:
        'Set this flag true to enable directory browsing when you want client browsers to display a Web page that lists the contents of a directory when a request does not specify a document name and IIS cannot return a default document.',
    },
    AllowAnonymous: {
      type: 'boolean',
      description: 'Set this flag true to allow anonymous to a website.',
    },
    IntegratedAuthentication: {
      type: 'boolean',
      description:
        'Set this flag true to enable integrated windows authentication.',
    },
    CreateFtpUser: {
      type: 'boolean',
      description:
        "Set this flag true to create FTP user with website, it is mandatory when provider is 'apache' and PHP handler DSO is not configured.",
    },
    FtpUserName: {
      type: 'string',
      description:
        "FTP user name to create with website, it is mandatory when provider is 'apache' and PHP handler DSO is not configured.",
    },
    FtpUserPassword: {
      type: 'string',
      description:
        "FTP user password to create with password, it is mandatory when provider is 'apache' and PHP handler DSO is not configured.",
    },
  },
} as const;

export const $WebsiteDto_List = {
  required: ['OwnerId', 'ProviderName', 'WebsiteName'],
  type: 'object',
  properties: {
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerName: {
      type: 'string',
    },
    RootFolderPath: {
      type: 'string',
    },
    IpAddress: {
      type: 'string',
    },
    DotnetVersion: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    ProviderName: {
      type: 'string',
    },
    WebsiteState: {
      type: 'string',
    },
    ExecutePermissions: {
      type: 'boolean',
    },
    IsNameBased: {
      type: 'boolean',
    },
    DotNetEnabled: {
      type: 'boolean',
    },
    PhpEnabled: {
      type: 'boolean',
    },
    PHPVersion: {
      type: 'string',
    },
    PerlEnabled: {
      type: 'boolean',
    },
    ColdFusionEnabled: {
      type: 'boolean',
    },
    StatsEnabled: {
      type: 'boolean',
    },
    IsSubDomain: {
      type: 'boolean',
    },
    Status: {
      type: 'string',
    },
    ReadPermission: {
      type: 'boolean',
    },
    WritePermission: {
      type: 'boolean',
    },
    EnableLogging: {
      type: 'boolean',
    },
    SubDomain: {
      type: 'boolean',
    },
    IsDedicated: {
      type: 'boolean',
    },
    LoggingUpdate: {
      type: 'boolean',
    },
    ExpiryDate: {
      type: 'string',
      format: 'date-time',
    },
    DateAdded: {
      type: 'string',
      format: 'date-time',
    },
    SendMailToUser: {
      type: 'boolean',
    },
    DiskUsage: {
      type: 'number',
      format: 'double',
    },
    BandwidthUsage: {
      type: 'number',
      format: 'double',
    },
    SoftaculousPath: {
      type: 'string',
    },
    WebsiteName: {
      type: 'string',
    },
    ServerType: {
      type: 'string',
    },
    ServerIp: {
      type: 'string',
    },
    AnonymousUser: {
      type: 'string',
    },
    AnonymousUserPass: {
      type: 'string',
    },
    VirtualDirectoryName: {
      type: 'string',
    },
    DefaultDocuments: {
      type: 'string',
    },
    ApplicationPoolUpdate: {
      type: 'boolean',
    },
    ApplicationPoolName: {
      type: 'string',
    },
    VirDirectoryRootPath: {
      type: 'string',
    },
    HttpRedirect: {
      type: 'string',
    },
    DirectoryBrowsingUpdate: {
      type: 'boolean',
    },
    IpAddressUpdate: {
      type: 'boolean',
    },
    DirectoryBrowsing: {
      type: 'boolean',
    },
    RedirectExactUrl: {
      type: 'boolean',
    },
    RedirectChildOnly: {
      type: 'boolean',
    },
    RedirectPermanent: {
      type: 'boolean',
    },
    DefaultDocUpdate: {
      type: 'boolean',
    },
    DefaultDocEnabled: {
      type: 'boolean',
    },
    AnonymousUpdate: {
      type: 'boolean',
    },
    IntegratedAuthenticationUpdate: {
      type: 'boolean',
    },
    AllowAnonymous: {
      type: 'boolean',
    },
    IntegratedAuthentication: {
      type: 'boolean',
    },
    HttpRedirectUpdate: {
      type: 'boolean',
    },
  },
} as const;

export const $WebsiteUpdateDto = {
  type: 'object',
  properties: {
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    IsNameBased: {
      type: 'boolean',
    },
    PhpEnabled: {
      type: 'boolean',
    },
    DotNetEnabled: {
      type: 'boolean',
    },
    PHPVersion: {
      type: 'string',
    },
    PerlEnabled: {
      type: 'boolean',
    },
    ColdFusionEnabled: {
      type: 'boolean',
    },
    StatsEnabled: {
      type: 'boolean',
    },
    IpAddress: {
      type: 'string',
    },
  },
} as const;

export const $ServerWebsitesDto = {
  type: 'object',
  properties: {
    ServerWebsitesList: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ServerWebsiteDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ServerWebsiteDto = {
  type: 'object',
  properties: {
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    WebsiteName: {
      type: 'string',
    },
  },
} as const;

export const $ImportWebsiteDto = {
  required: ['ProviderName', 'WebsiteName'],
  type: 'object',
  properties: {
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    ProviderName: {
      type: 'string',
    },
    WebsiteName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    CreateForMe: {
      type: 'boolean',
    },
    UserName: {
      type: 'string',
    },
    IPLessDomain: {
      type: 'boolean',
    },
    SubDomain: {
      type: 'boolean',
    },
    MailDomain: {
      type: 'boolean',
    },
    DNS: {
      type: 'boolean',
    },
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    RootFolderPath: {
      type: 'string',
    },
    IpAddress: {
      type: 'string',
    },
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ImportWebsiteDto_Request = {
  required: ['ProviderName', 'WebsiteName'],
  type: 'object',
  properties: {
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    ProviderName: {
      type: 'string',
    },
    WebsiteName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    CreateForMe: {
      type: 'boolean',
    },
    UserName: {
      type: 'string',
    },
    IPLessDomain: {
      type: 'boolean',
    },
    SubDomain: {
      type: 'boolean',
    },
    MailDomain: {
      type: 'boolean',
    },
    DNS: {
      type: 'boolean',
    },
    RootFolderPath: {
      type: 'string',
    },
    IpAddress: {
      type: 'string',
    },
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $ViewStatsDto = {
  type: 'object',
  properties: {
    URL: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SslsDto = {
  type: 'object',
  properties: {
    Ssls: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SslDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SslDto = {
  required: ['SslName', 'SslPath', 'WebsiteId'],
  type: 'object',
  properties: {
    SslId: {
      type: 'integer',
      format: 'int32',
    },
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    SslName: {
      type: 'string',
    },
    SslPath: {
      type: 'string',
    },
    AllowAnonymous: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SslDto_List = {
  type: 'object',
  properties: {
    SslId: {
      type: 'integer',
      format: 'int32',
    },
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    SslName: {
      type: 'string',
    },
    SslPath: {
      type: 'string',
    },
    AllowAnonymous: {
      type: 'boolean',
    },
  },
} as const;

export const $SslDto_Request = {
  required: ['SslName', 'SslPath'],
  type: 'object',
  properties: {
    SslName: {
      type: 'string',
    },
    SslPath: {
      type: 'string',
    },
    AllowAnonymous: {
      type: 'boolean',
    },
  },
} as const;

export const $IPAddressDto = {
  type: 'object',
  properties: {
    IPAddress: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $IPAddressDto_Request = {
  type: 'object',
  properties: {
    IPAddress: {
      type: 'string',
    },
  },
} as const;

export const $ParkedDomainsDto = {
  type: 'object',
  properties: {
    ParkedDomains: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ParkedDomainDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ParkedDomainDto = {
  required: ['ParkedDomainName'],
  type: 'object',
  properties: {
    ParkedDomainId: {
      type: 'integer',
      format: 'int32',
    },
    ParkedDomainName: {
      type: 'string',
    },
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ParkedDomainDto_List = {
  required: ['ParkedDomainName'],
  type: 'object',
  properties: {
    ParkedDomainId: {
      type: 'integer',
      format: 'int32',
    },
    ParkedDomainName: {
      type: 'string',
    },
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $ParkedDomainDto_Request = {
  required: ['ParkedDomainName'],
  type: 'object',
  properties: {
    ParkedDomainName: {
      type: 'string',
    },
  },
} as const;

export const $HostHeadersDto = {
  type: 'object',
  properties: {
    HostHeaders: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/HostHeaderDto:List',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $HostHeaderDto = {
  required: ['HostHeaderName'],
  type: 'object',
  properties: {
    WebsiteName: {
      type: 'string',
    },
    HostHeaderName: {
      type: 'string',
    },
    IpAddress: {
      type: 'string',
    },
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    Port: {
      type: 'integer',
      format: 'int32',
    },
    Prefix: {
      type: 'string',
    },
    Postfix: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $HostHeaderDto_Request = {
  required: ['HostHeaderName'],
  type: 'object',
  properties: {
    WebsiteName: {
      type: 'string',
    },
    HostHeaderName: {
      type: 'string',
    },
    IpAddress: {
      type: 'string',
    },
    Port: {
      type: 'integer',
      format: 'int32',
    },
    Prefix: {
      type: 'string',
    },
    Postfix: {
      type: 'string',
    },
  },
} as const;

export const $HostHeaderDto_List = {
  required: ['HostHeaderName'],
  type: 'object',
  properties: {
    WebsiteName: {
      type: 'string',
    },
    HostHeaderName: {
      type: 'string',
    },
    IpAddress: {
      type: 'string',
    },
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    Port: {
      type: 'integer',
      format: 'int32',
    },
    Prefix: {
      type: 'string',
    },
    Postfix: {
      type: 'string',
    },
  },
} as const;

export const $VirtualDirectoriesDto = {
  type: 'object',
  properties: {
    VirtualDirectories: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/VirtualDirectoryDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $VirtualDirectoryDto = {
  required: ['VirtualDirectoryName', 'WebsiteName'],
  type: 'object',
  properties: {
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    VirtualDirectoryName: {
      type: 'string',
    },
    Exists: {
      type: 'boolean',
    },
    ManagedRuntimeVersion: {
      type: 'string',
    },
    IsAppPoolDedicated: {
      type: 'boolean',
    },
    AllowBasicAuthentication: {
      type: 'boolean',
    },
    SystemUser: {
      pattern: '^[A-Za-z0-9_-]{1,10}$',
      type: 'string',
    },
    SystemUserPass: {
      type: 'string',
    },
    WebsiteName: {
      type: 'string',
    },
    ServerType: {
      type: 'string',
    },
    ServerIp: {
      type: 'string',
    },
    AnonymousUser: {
      type: 'string',
    },
    AnonymousUserPass: {
      type: 'string',
    },
    DefaultDocuments: {
      type: 'string',
    },
    ApplicationPoolUpdate: {
      type: 'boolean',
    },
    ApplicationPoolName: {
      type: 'string',
    },
    VirDirectoryRootPath: {
      type: 'string',
    },
    HttpRedirect: {
      type: 'string',
    },
    DirectoryBrowsingUpdate: {
      type: 'boolean',
    },
    IpAddressUpdate: {
      type: 'boolean',
    },
    DirectoryBrowsing: {
      type: 'boolean',
    },
    RedirectExactUrl: {
      type: 'boolean',
    },
    RedirectChildOnly: {
      type: 'boolean',
    },
    RedirectPermanent: {
      type: 'boolean',
    },
    DefaultDocUpdate: {
      type: 'boolean',
    },
    DefaultDocEnabled: {
      type: 'boolean',
    },
    AnonymousUpdate: {
      type: 'boolean',
    },
    IntegratedAuthenticationUpdate: {
      type: 'boolean',
    },
    AllowAnonymous: {
      type: 'boolean',
    },
    IntegratedAuthentication: {
      type: 'boolean',
    },
    HttpRedirectUpdate: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $VirtualDirectoryDto_Request = {
  required: ['VirtualDirectoryName', 'WebsiteName'],
  type: 'object',
  properties: {
    VirtualDirectoryName: {
      type: 'string',
    },
    Exists: {
      type: 'boolean',
    },
    ManagedRuntimeVersion: {
      type: 'string',
    },
    IsAppPoolDedicated: {
      type: 'boolean',
    },
    AllowBasicAuthentication: {
      type: 'boolean',
    },
    SystemUser: {
      pattern: '^[A-Za-z0-9_-]{1,10}$',
      type: 'string',
    },
    SystemUserPass: {
      type: 'string',
    },
    WebsiteName: {
      type: 'string',
    },
    ServerType: {
      type: 'string',
    },
    ServerIp: {
      type: 'string',
    },
    AnonymousUser: {
      type: 'string',
    },
    AnonymousUserPass: {
      type: 'string',
    },
    DefaultDocuments: {
      type: 'string',
    },
    ApplicationPoolUpdate: {
      type: 'boolean',
    },
    ApplicationPoolName: {
      type: 'string',
    },
    VirDirectoryRootPath: {
      type: 'string',
    },
    HttpRedirect: {
      type: 'string',
    },
    DirectoryBrowsingUpdate: {
      type: 'boolean',
    },
    IpAddressUpdate: {
      type: 'boolean',
    },
    DirectoryBrowsing: {
      type: 'boolean',
    },
    RedirectExactUrl: {
      type: 'boolean',
    },
    RedirectChildOnly: {
      type: 'boolean',
    },
    RedirectPermanent: {
      type: 'boolean',
    },
    DefaultDocUpdate: {
      type: 'boolean',
    },
    DefaultDocEnabled: {
      type: 'boolean',
    },
    AnonymousUpdate: {
      type: 'boolean',
    },
    IntegratedAuthenticationUpdate: {
      type: 'boolean',
    },
    AllowAnonymous: {
      type: 'boolean',
    },
    IntegratedAuthentication: {
      type: 'boolean',
    },
    HttpRedirectUpdate: {
      type: 'boolean',
    },
  },
} as const;

export const $VirtualDirectoryDto_List = {
  required: ['VirtualDirectoryName', 'WebsiteName'],
  type: 'object',
  properties: {
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    VirtualDirectoryName: {
      type: 'string',
    },
    Exists: {
      type: 'boolean',
    },
    ManagedRuntimeVersion: {
      type: 'string',
    },
    IsAppPoolDedicated: {
      type: 'boolean',
    },
    AllowBasicAuthentication: {
      type: 'boolean',
    },
    SystemUser: {
      pattern: '^[A-Za-z0-9_-]{1,10}$',
      type: 'string',
    },
    SystemUserPass: {
      type: 'string',
    },
    WebsiteName: {
      type: 'string',
    },
    ServerType: {
      type: 'string',
    },
    ServerIp: {
      type: 'string',
    },
    AnonymousUser: {
      type: 'string',
    },
    AnonymousUserPass: {
      type: 'string',
    },
    DefaultDocuments: {
      type: 'string',
    },
    ApplicationPoolUpdate: {
      type: 'boolean',
    },
    ApplicationPoolName: {
      type: 'string',
    },
    VirDirectoryRootPath: {
      type: 'string',
    },
    HttpRedirect: {
      type: 'string',
    },
    DirectoryBrowsingUpdate: {
      type: 'boolean',
    },
    IpAddressUpdate: {
      type: 'boolean',
    },
    DirectoryBrowsing: {
      type: 'boolean',
    },
    RedirectExactUrl: {
      type: 'boolean',
    },
    RedirectChildOnly: {
      type: 'boolean',
    },
    RedirectPermanent: {
      type: 'boolean',
    },
    DefaultDocUpdate: {
      type: 'boolean',
    },
    DefaultDocEnabled: {
      type: 'boolean',
    },
    AnonymousUpdate: {
      type: 'boolean',
    },
    IntegratedAuthenticationUpdate: {
      type: 'boolean',
    },
    AllowAnonymous: {
      type: 'boolean',
    },
    IntegratedAuthentication: {
      type: 'boolean',
    },
    HttpRedirectUpdate: {
      type: 'boolean',
    },
  },
} as const;

export const $SysUserChangePasswordDto = {
  required: ['Password', 'SysUser'],
  type: 'object',
  properties: {
    Password: {
      type: 'string',
    },
    SysUser: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SysUserChangePasswordDto_Request = {
  required: ['Password', 'SysUser'],
  type: 'object',
  properties: {
    Password: {
      type: 'string',
    },
    SysUser: {
      type: 'string',
    },
  },
} as const;

export const $ApplicationPoolsWithVDDto = {
  type: 'object',
  properties: {
    ApplicationPools: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ApplicationPoolWithVDDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ApplicationPoolWithVDDto_List = {
  type: 'object',
  properties: {
    WebsiteName: {
      type: 'string',
    },
    VirtualDirectoryName: {
      type: 'string',
    },
    VirDirectoryRootPath: {
      type: 'string',
    },
    AppPoolCPUUsage: {
      type: 'integer',
      format: 'int32',
    },
    AppPoolMemoryUsage: {
      type: 'number',
      format: 'double',
    },
    ApplicationPoolIdentity: {
      type: 'integer',
      format: 'int32',
    },
    ApplicationPoolName: {
      type: 'string',
    },
    ManagedRuntimeVersionUpdate: {
      type: 'boolean',
    },
    ManagedRuntimeVersion: {
      type: 'string',
    },
    ManagedPipeLineModeUpdate: {
      type: 'boolean',
    },
    ManagedPipeLineMode: {
      type: 'string',
    },
    MaxVirtualMemory: {
      type: 'integer',
      format: 'int64',
    },
    MaxUsedMemory: {
      type: 'integer',
      format: 'int64',
    },
    MaxCpuUsage: {
      type: 'integer',
      format: 'int64',
    },
    CpuUsageRefreshTime: {
      type: 'integer',
      format: 'int32',
    },
    CpuUsageExceedAction: {
      type: 'integer',
      format: 'int32',
    },
    CpuUsageRefreshTimeUpdate: {
      type: 'boolean',
    },
    MaxVirtualMemoryUpdate: {
      type: 'boolean',
    },
    MaxUsedMemoryUpdate: {
      type: 'boolean',
    },
    MaxCpuUsageUpdate: {
      type: 'boolean',
    },
    CpuUsageExceedActionUpdate: {
      type: 'boolean',
    },
  },
} as const;

export const $ApplicationPoolWithVDDto = {
  type: 'object',
  properties: {
    WebsiteName: {
      type: 'string',
    },
    VirtualDirectoryName: {
      type: 'string',
    },
    VirDirectoryRootPath: {
      type: 'string',
    },
    AppPoolCPUUsage: {
      type: 'integer',
      format: 'int32',
    },
    AppPoolMemoryUsage: {
      type: 'number',
      format: 'double',
    },
    ApplicationPoolIdentity: {
      type: 'integer',
      format: 'int32',
    },
    ApplicationPoolName: {
      type: 'string',
    },
    ManagedRuntimeVersionUpdate: {
      type: 'boolean',
    },
    ManagedRuntimeVersion: {
      type: 'string',
    },
    ManagedPipeLineModeUpdate: {
      type: 'boolean',
    },
    ManagedPipeLineMode: {
      type: 'string',
    },
    MaxVirtualMemory: {
      type: 'integer',
      format: 'int64',
    },
    MaxUsedMemory: {
      type: 'integer',
      format: 'int64',
    },
    MaxCpuUsage: {
      type: 'integer',
      format: 'int64',
    },
    CpuUsageRefreshTime: {
      type: 'integer',
      format: 'int32',
    },
    CpuUsageExceedAction: {
      type: 'integer',
      format: 'int32',
    },
    CpuUsageRefreshTimeUpdate: {
      type: 'boolean',
    },
    MaxVirtualMemoryUpdate: {
      type: 'boolean',
    },
    MaxUsedMemoryUpdate: {
      type: 'boolean',
    },
    MaxCpuUsageUpdate: {
      type: 'boolean',
    },
    CpuUsageExceedActionUpdate: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ApplicationPoolDto = {
  type: 'object',
  properties: {
    ApplicationPoolIdentity: {
      type: 'integer',
      format: 'int32',
    },
    ApplicationPoolName: {
      type: 'string',
    },
    ManagedRuntimeVersionUpdate: {
      type: 'boolean',
    },
    ManagedRuntimeVersion: {
      type: 'string',
    },
    ManagedPipeLineModeUpdate: {
      type: 'boolean',
    },
    ManagedPipeLineMode: {
      type: 'string',
    },
    MaxVirtualMemory: {
      type: 'integer',
      format: 'int64',
    },
    MaxUsedMemory: {
      type: 'integer',
      format: 'int64',
    },
    MaxCpuUsage: {
      type: 'integer',
      format: 'int64',
    },
    CpuUsageRefreshTime: {
      type: 'integer',
      format: 'int32',
    },
    CpuUsageExceedAction: {
      type: 'integer',
      format: 'int32',
    },
    CpuUsageRefreshTimeUpdate: {
      type: 'boolean',
    },
    MaxVirtualMemoryUpdate: {
      type: 'boolean',
    },
    MaxUsedMemoryUpdate: {
      type: 'boolean',
    },
    MaxCpuUsageUpdate: {
      type: 'boolean',
    },
    CpuUsageExceedActionUpdate: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ApplicationPoolDto_Request = {
  type: 'object',
  properties: {
    ApplicationPoolIdentity: {
      type: 'integer',
      format: 'int32',
    },
    ApplicationPoolName: {
      type: 'string',
    },
    ManagedRuntimeVersionUpdate: {
      type: 'boolean',
    },
    ManagedRuntimeVersion: {
      type: 'string',
    },
    ManagedPipeLineModeUpdate: {
      type: 'boolean',
    },
    ManagedPipeLineMode: {
      type: 'string',
    },
    MaxVirtualMemory: {
      type: 'integer',
      format: 'int64',
    },
    MaxUsedMemory: {
      type: 'integer',
      format: 'int64',
    },
    MaxCpuUsage: {
      type: 'integer',
      format: 'int64',
    },
    CpuUsageRefreshTime: {
      type: 'integer',
      format: 'int32',
    },
    CpuUsageExceedAction: {
      type: 'integer',
      format: 'int32',
    },
    CpuUsageRefreshTimeUpdate: {
      type: 'boolean',
    },
    MaxVirtualMemoryUpdate: {
      type: 'boolean',
    },
    MaxUsedMemoryUpdate: {
      type: 'boolean',
    },
    MaxCpuUsageUpdate: {
      type: 'boolean',
    },
    CpuUsageExceedActionUpdate: {
      type: 'boolean',
    },
  },
} as const;

export const $ApplicationPoolProcessInfoDto = {
  required: ['ApplicationPoolName'],
  type: 'object',
  properties: {
    ApplicationPoolName: {
      type: 'string',
    },
    AppPoolCPUUsage: {
      type: 'integer',
      format: 'int32',
    },
    AppPoolMemoryUsage: {
      type: 'number',
      format: 'double',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $UrlRedirectionDto = {
  type: 'object',
  properties: {
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    EnableRedirectUrl: {
      type: 'boolean',
    },
    RedirectUrl: {
      type: 'string',
    },
    RedirectClientExact: {
      type: 'boolean',
    },
    RedirectClientBelow: {
      type: 'boolean',
    },
    RedirectClientPermanent: {
      type: 'boolean',
    },
    EnableDefaultDoc: {
      type: 'boolean',
    },
    DefaultDoc: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $UrlRedirectionDto_Request = {
  type: 'object',
  properties: {
    EnableRedirectUrl: {
      type: 'boolean',
    },
    RedirectUrl: {
      type: 'string',
    },
    RedirectClientExact: {
      type: 'boolean',
    },
    RedirectClientBelow: {
      type: 'boolean',
    },
    RedirectClientPermanent: {
      type: 'boolean',
    },
    EnableDefaultDoc: {
      type: 'boolean',
    },
    DefaultDoc: {
      type: 'string',
    },
  },
} as const;

export const $AccessPermissionDto = {
  type: 'object',
  properties: {
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    AllowAnonymous: {
      type: 'boolean',
    },
    IntegratedWindowsAuthentication: {
      type: 'boolean',
    },
    AccessPermissions: {
      type: 'boolean',
    },
    EnableLogging: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $AccessPermissionDto_Request = {
  type: 'object',
  properties: {
    AllowAnonymous: {
      type: 'boolean',
    },
    IntegratedWindowsAuthentication: {
      type: 'boolean',
    },
    AccessPermissions: {
      type: 'boolean',
    },
    EnableLogging: {
      type: 'boolean',
    },
  },
} as const;

export const $CustomErrorsDto = {
  type: 'object',
  properties: {
    CustomErrors: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/CustomErrorDto:List',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $CustomErrorDto = {
  type: 'object',
  properties: {
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    WebsiteName: {
      type: 'string',
    },
    HttpError: {
      type: 'string',
    },
    Type: {
      type: 'string',
    },
    Contents: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $CustomErrorDto_Request = {
  type: 'object',
  properties: {
    WebsiteName: {
      type: 'string',
    },
    HttpError: {
      type: 'string',
    },
    Type: {
      type: 'string',
    },
    Contents: {
      type: 'string',
    },
  },
} as const;

export const $CustomErrorDto_List = {
  type: 'object',
  properties: {
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    WebsiteName: {
      type: 'string',
    },
    HttpError: {
      type: 'string',
    },
    Type: {
      type: 'string',
    },
    Contents: {
      type: 'string',
    },
  },
} as const;

export const $FtpUsersDto = {
  type: 'object',
  properties: {
    FtpUsers: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/FtpUserDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $FtpUserDto = {
  required: ['Password', 'PermittedPath', 'UserName'],
  type: 'object',
  properties: {
    FtpUserId: {
      type: 'integer',
      format: 'int32',
    },
    FtpUserName: {
      type: 'string',
    },
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    UserName: {
      type: 'string',
    },
    PermittedPath: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    IsDisabled: {
      type: 'integer',
      format: 'int32',
    },
    Read: {
      type: 'boolean',
    },
    Write: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $FtpUserDto_List = {
  required: ['Password', 'PermittedPath', 'UserName'],
  type: 'object',
  properties: {
    FtpUserId: {
      type: 'integer',
      format: 'int32',
    },
    FtpUserName: {
      type: 'string',
    },
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    UserName: {
      type: 'string',
    },
    PermittedPath: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    IsDisabled: {
      type: 'integer',
      format: 'int32',
    },
    Read: {
      type: 'boolean',
    },
    Write: {
      type: 'boolean',
    },
  },
} as const;

export const $FtpUserDto_Request = {
  required: ['Password', 'PermittedPath', 'UserName'],
  type: 'object',
  properties: {
    FtpUserName: {
      type: 'string',
    },
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    UserName: {
      type: 'string',
    },
    PermittedPath: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    IsDisabled: {
      type: 'integer',
      format: 'int32',
    },
    Read: {
      type: 'boolean',
    },
    Write: {
      type: 'boolean',
    },
  },
} as const;

export const $UpdateFtpUserPasswordDto = {
  required: ['Password', 'UserName'],
  type: 'object',
  properties: {
    Password: {
      type: 'string',
    },
    UserName: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $UpdateFtpUserPasswordDto_Request = {
  required: ['Password', 'UserName'],
  type: 'object',
  properties: {
    Password: {
      type: 'string',
    },
    UserName: {
      type: 'string',
    },
  },
} as const;

export const $UpdateFtpUserStatusDto = {
  type: 'object',
  properties: {
    IsDisabled: {
      type: 'integer',
      format: 'int32',
    },
    Flag: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $UpdateFtpUserStatusDto_Request = {
  type: 'object',
  properties: {
    IsDisabled: {
      type: 'integer',
      format: 'int32',
    },
    Flag: {
      type: 'string',
    },
  },
} as const;

export const $UpdateFtpUserPermissionDto = {
  type: 'object',
  properties: {
    WebsiteId: {
      type: 'integer',
      format: 'int32',
    },
    Read: {
      type: 'boolean',
    },
    Write: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $UpdateFtpUserPermissionDto_Request = {
  type: 'object',
  properties: {
    Read: {
      type: 'boolean',
    },
    Write: {
      type: 'boolean',
    },
  },
} as const;

export const $DotNetInstalledVersionsDto = {
  type: 'object',
  properties: {
    DotNetInstalledVersions: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ScriptingDto = {
  type: 'object',
  properties: {
    VirtualDirectoryName: {
      type: 'string',
    },
    ManagedRuntimeVersion: {
      type: 'string',
    },
    PHPVersion: {
      type: 'string',
    },
    IsEnabled: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ScriptingInputModel = {
  type: 'object',
  properties: {
    VirtualDirectoryName: {
      type: 'string',
    },
    DotNetVersion: {
      type: 'string',
    },
    PHPVersion: {
      type: 'string',
    },
    IsEnabled: {
      type: 'boolean',
    },
  },
} as const;

export const $SystemUsersDto = {
  type: 'object',
  properties: {
    SystemUsers: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeSettingsDto = {
  type: 'object',
  properties: {
    ExchangeServerType: {
      type: 'string',
    },
    ServerIp: {
      type: 'string',
    },
    User: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    Host: {
      type: 'string',
    },
    DomainController: {
      type: 'string',
    },
    ADAdmin: {
      type: 'string',
    },
    ADPassword: {
      type: 'string',
    },
    ParentOU: {
      type: 'string',
    },
    WebRole: {
      type: 'boolean',
    },
  },
} as const;

export const $OrganizationalUnitListDto = {
  type: 'object',
  properties: {
    OrganizationalUnits: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/OrganizationalUnitDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $OrganizationalUnitDto = {
  type: 'object',
  properties: {
    Name: {
      type: 'string',
    },
    Path: {
      type: 'string',
    },
  },
} as const;

export const $ActiveDirectorySettingsDto = {
  required: ['ADAdmin', 'ADAdminPassword', 'ServerIp'],
  type: 'object',
  properties: {
    ServerIp: {
      type: 'string',
    },
    ADAdmin: {
      type: 'string',
    },
    ADAdminPassword: {
      type: 'string',
    },
    DomainController: {
      type: 'string',
    },
    RootOrganizationalUnitPath: {
      type: 'string',
    },
  },
} as const;

export const $DomainControllerListDto = {
  type: 'object',
  properties: {
    DomainControllers: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExgDomainControllerDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExgDomainControllerDto = {
  type: 'object',
  properties: {
    Name: {
      type: 'string',
    },
    Fqdn: {
      type: 'string',
    },
    IpAddress: {
      type: 'string',
    },
  },
} as const;

export const $ActiveDirectoryListDto = {
  type: 'object',
  properties: {
    ActiveDirectoryList: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ActiveDirectoryDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ActiveDirectoryDto = {
  required: [
    'ADAdmin',
    'ADAdminPassword',
    'DomainController',
    'RootOU',
    'ServerRoleId',
  ],
  type: 'object',
  properties: {
    ActiveDirectoryTrustId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    DomainController: {
      type: 'string',
    },
    ADAdmin: {
      type: 'string',
    },
    ADAdminPassword: {
      type: 'string',
    },
    RootOU: {
      type: 'string',
    },
    ServerIp: {
      type: 'string',
    },
    ServerName: {
      type: 'string',
    },
    OrganizationCount: {
      type: 'integer',
      format: 'int32',
    },
    IsDeleted: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ActiveDirectoryDto_Request = {
  required: [
    'ADAdmin',
    'ADAdminPassword',
    'DomainController',
    'RootOU',
    'ServerRoleId',
  ],
  type: 'object',
  properties: {
    ActiveDirectoryTrustId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    DomainController: {
      type: 'string',
    },
    ADAdmin: {
      type: 'string',
    },
    ADAdminPassword: {
      type: 'string',
    },
    RootOU: {
      type: 'string',
    },
    ServerIp: {
      type: 'string',
    },
    ServerName: {
      type: 'string',
    },
    OrganizationCount: {
      type: 'integer',
      format: 'int32',
    },
    IsDeleted: {
      type: 'boolean',
    },
  },
} as const;

export const $ActiveDirectoryDto_Add = {
  required: [
    'ADAdmin',
    'ADAdminPassword',
    'DomainController',
    'RootOU',
    'ServerRoleId',
  ],
  type: 'object',
  properties: {
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    DomainController: {
      type: 'string',
    },
    ADAdmin: {
      type: 'string',
    },
    ADAdminPassword: {
      type: 'string',
    },
    RootOU: {
      type: 'string',
    },
    ServerIp: {
      type: 'string',
    },
    ServerName: {
      type: 'string',
    },
    OrganizationCount: {
      type: 'integer',
      format: 'int32',
    },
    IsDeleted: {
      type: 'boolean',
    },
  },
} as const;

export const $ActiveDirectoryDto_List = {
  required: [
    'ADAdmin',
    'ADAdminPassword',
    'DomainController',
    'RootOU',
    'ServerRoleId',
  ],
  type: 'object',
  properties: {
    ActiveDirectoryTrustId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    DomainController: {
      type: 'string',
    },
    ADAdmin: {
      type: 'string',
    },
    ADAdminPassword: {
      type: 'string',
    },
    RootOU: {
      type: 'string',
    },
    ServerIp: {
      type: 'string',
    },
    ServerName: {
      type: 'string',
    },
    OrganizationCount: {
      type: 'integer',
      format: 'int32',
    },
    IsDeleted: {
      type: 'boolean',
    },
  },
} as const;

export const $ActiveDirectoryTrustOrganizationListDto = {
  required: ['ActiveDirectoryTrustId'],
  type: 'object',
  properties: {
    Organizations: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ActiveDirectoryTrustOrganizationDto:List',
      },
    },
    ActiveDirectoryTrustId: {
      type: 'integer',
      format: 'int32',
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ActiveDirectoryTrustOrganizationListDto_Request = {
  required: ['ActiveDirectoryTrustId'],
  type: 'object',
  properties: {
    Organizations: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ActiveDirectoryTrustOrganizationDto:List',
      },
    },
    ActiveDirectoryTrustId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $ActiveDirectoryTrustOrganizationDto = {
  required: ['OrganizationId'],
  type: 'object',
  properties: {
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationName: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ActiveDirectoryTrustOrganizationDto_List = {
  required: ['OrganizationId'],
  type: 'object',
  properties: {
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationName: {
      type: 'string',
    },
  },
} as const;

export const $OrganizationsDto = {
  type: 'object',
  properties: {
    Organizations: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/OrganizationDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ADOrganizationsDto = {
  type: 'object',
  properties: {
    Organizations: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ADOrganizationDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $OrganizationDto = {
  required: ['MailServerType', 'SystemName'],
  type: 'object',
  properties: {
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxDatabaseId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxDatabaseName: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    MailServerType: {
      type: 'string',
    },
    RoleName: {
      type: 'string',
    },
    SystemName: {
      type: 'string',
    },
    OWAAccess: {
      type: 'string',
    },
    TotalMailDomains: {
      type: 'integer',
      format: 'int32',
    },
    TotalMailboxes: {
      type: 'integer',
      format: 'int32',
    },
    TotalSharePointSites: {
      type: 'integer',
      format: 'int32',
    },
    TotalSIPDomains: {
      type: 'integer',
      format: 'int32',
    },
    TotalSkypeUsers: {
      type: 'integer',
      format: 'int32',
    },
    IsADSync: {
      type: 'boolean',
    },
    IsDatabaseSync: {
      type: 'boolean',
    },
    IsResourceSync: {
      type: 'boolean',
    },
    Regions: {
      type: 'string',
    },
    DefaultDomain: {
      type: 'string',
    },
    AddressLine1: {
      type: 'string',
    },
    AddressLine2: {
      type: 'string',
    },
    City: {
      type: 'string',
    },
    FirstName: {
      type: 'string',
    },
    LastName: {
      type: 'string',
    },
    EmailAddress: {
      type: 'string',
    },
    PhoneNumber: {
      type: 'string',
    },
    ZipCode: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ADOrganizationDto_List = {
  type: 'object',
  properties: {
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    MailServerType: {
      type: 'string',
    },
    Provider: {
      type: 'string',
    },
    RoleName: {
      type: 'string',
    },
    SystemName: {
      type: 'string',
    },
    TotalAdUsers: {
      type: 'integer',
      format: 'int32',
    },
    TotalAdGroups: {
      type: 'integer',
      format: 'int32',
    },
    TotalAdContacts: {
      type: 'integer',
      format: 'int32',
    },
    SyncLastRunTime: {
      type: 'string',
      format: 'date-time',
    },
    IsADSync: {
      type: 'boolean',
    },
    IsDatabaseSync: {
      type: 'boolean',
    },
    IsResourceSync: {
      type: 'boolean',
    },
    OUPath: {
      type: 'string',
    },
    ServerName: {
      type: 'string',
    },
    ProfileDefaults: {
      type: 'string',
    },
  },
} as const;

export const $OrganizationDto_List = {
  required: ['MailServerType', 'SystemName'],
  type: 'object',
  properties: {
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxDatabaseId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxDatabaseName: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    MailServerType: {
      type: 'string',
    },
    RoleName: {
      type: 'string',
    },
    SystemName: {
      type: 'string',
    },
    OWAAccess: {
      type: 'string',
    },
    TotalMailDomains: {
      type: 'integer',
      format: 'int32',
    },
    TotalMailboxes: {
      type: 'integer',
      format: 'int32',
    },
    TotalSharePointSites: {
      type: 'integer',
      format: 'int32',
    },
    TotalSIPDomains: {
      type: 'integer',
      format: 'int32',
    },
    TotalSkypeUsers: {
      type: 'integer',
      format: 'int32',
    },
    IsADSync: {
      type: 'boolean',
    },
    IsDatabaseSync: {
      type: 'boolean',
    },
    IsResourceSync: {
      type: 'boolean',
    },
    Regions: {
      type: 'string',
    },
    DefaultDomain: {
      type: 'string',
    },
    AddressLine1: {
      type: 'string',
    },
    AddressLine2: {
      type: 'string',
    },
    City: {
      type: 'string',
    },
    FirstName: {
      type: 'string',
    },
    LastName: {
      type: 'string',
    },
    EmailAddress: {
      type: 'string',
    },
    PhoneNumber: {
      type: 'string',
    },
    ZipCode: {
      type: 'string',
    },
  },
} as const;

export const $OrganizationDto_Request = {
  required: ['MailServerType', 'SystemName'],
  type: 'object',
  properties: {
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxDatabaseId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxDatabaseName: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    MailServerType: {
      type: 'string',
    },
    RoleName: {
      type: 'string',
    },
    SystemName: {
      type: 'string',
    },
    OWAAccess: {
      type: 'string',
    },
    TotalMailDomains: {
      type: 'integer',
      format: 'int32',
    },
    TotalMailboxes: {
      type: 'integer',
      format: 'int32',
    },
    TotalSharePointSites: {
      type: 'integer',
      format: 'int32',
    },
    TotalSIPDomains: {
      type: 'integer',
      format: 'int32',
    },
    TotalSkypeUsers: {
      type: 'integer',
      format: 'int32',
    },
    IsADSync: {
      type: 'boolean',
    },
    IsDatabaseSync: {
      type: 'boolean',
    },
    IsResourceSync: {
      type: 'boolean',
    },
    Regions: {
      type: 'string',
    },
    DefaultDomain: {
      type: 'string',
    },
    AddressLine1: {
      type: 'string',
    },
    AddressLine2: {
      type: 'string',
    },
    City: {
      type: 'string',
    },
    FirstName: {
      type: 'string',
    },
    LastName: {
      type: 'string',
    },
    EmailAddress: {
      type: 'string',
    },
    PhoneNumber: {
      type: 'string',
    },
    ZipCode: {
      type: 'string',
    },
  },
} as const;

export const $OrganizationDto_Add = {
  required: ['MailServerType', 'SystemName'],
  type: 'object',
  properties: {
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    MailServerType: {
      type: 'string',
    },
    SystemName: {
      type: 'string',
      description: 'Name of the new orgranization.',
    },
    OwnerId: {
      type: 'integer',
      description:
        'Give owner ID in case of creating exchange organization for any descendent user.',
      format: 'int32',
    },
    MailboxDatabaseName: {
      type: 'string',
      description:
        'Mailbox database name will be used later in the creation of mailbox. This parameter is optional in case of automatic mailbox database selection in the server settings.',
    },
  },
} as const;

export const $SharePointOrganizationDto = {
  required: ['SystemName'],
  type: 'object',
  properties: {
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    SystemName: {
      type: 'string',
    },
    DomainName: {
      type: 'string',
    },
    Provider: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ActiveDirectoryOrganizationDto = {
  required: ['ServerRoleId', 'SystemName'],
  type: 'object',
  properties: {
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    SystemName: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationSuffix: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ActiveDirectoryOrganizationDto_Request = {
  required: ['OrganizationSuffix', 'OwnerId', 'ServerRoleId', 'SystemName'],
  type: 'object',
  properties: {
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    SystemName: {
      type: 'string',
    },
    OrganizationSuffix: {
      type: 'string',
    },
  },
} as const;

export const $ActiveDirectorySubOrganizationDto = {
  type: 'object',
  properties: {
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OuName: {
      type: 'string',
    },
    ParentOuPath: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ActiveDirectorySubOrganizationDto_Request = {
  required: ['OrganizationId', 'OuName', 'ParentOuPath'],
  type: 'object',
  properties: {
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OuName: {
      type: 'string',
    },
    ParentOuPath: {
      type: 'string',
    },
  },
} as const;

export const $SharePointOrganizationDto_Add = {
  required: ['SystemName'],
  type: 'object',
  properties: {
    OwnerId: {
      type: 'integer',
      description:
        'Give owner id in case of creating sharePoint organization for any descendent user.',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    SystemName: {
      type: 'string',
      description: 'Name of the new sharePoint organization.',
    },
    DomainName: {
      type: 'string',
      description:
        "Domain name parameter here is used to add UPNSuffix in Organization's OU.",
    },
    Provider: {
      type: 'string',
    },
  },
} as const;

export const $SkypeOrganizationDto = {
  required: ['ServerRoleId', 'SystemName'],
  type: 'object',
  properties: {
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    SystemName: {
      type: 'string',
    },
    DomainName: {
      type: 'string',
    },
    Provider: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeOrganizationDto_Add = {
  required: ['ServerRoleId', 'SystemName'],
  type: 'object',
  properties: {
    OwnerId: {
      type: 'integer',
      description:
        'Give owner id in case of creating skype organization for any descendent user.',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    SystemName: {
      type: 'string',
      description: 'Name of the new skype organization.',
    },
    Provider: {
      type: 'string',
    },
  },
} as const;

export const $ActiveDirectoryUsersListDto = {
  type: 'object',
  properties: {
    Users: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ActiveDirectoryUserDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ActiveDirectoryUserDto = {
  type: 'object',
  properties: {
    DisplayName: {
      type: 'string',
    },
    UserName: {
      type: 'string',
    },
    UserLogin: {
      type: 'string',
    },
    UserPrincipalName: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeRecipientListDto = {
  type: 'object',
  properties: {
    ExchangeRecipients: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExchangeRecipientDto',
      },
    },
    MailboxId: {
      type: 'integer',
      format: 'int32',
    },
    PublicFolderId: {
      type: 'integer',
      format: 'int32',
    },
    IsAllSender: {
      type: 'boolean',
    },
    RecipientId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeRecipientListDto_Request = {
  type: 'object',
  properties: {
    ExchangeRecipients: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExchangeRecipientDto',
      },
    },
    MailboxId: {
      type: 'integer',
      format: 'int32',
    },
    PublicFolderId: {
      type: 'integer',
      format: 'int32',
    },
    IsAllSender: {
      type: 'boolean',
    },
    RecipientId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $ExchangeRecipientDto = {
  required: ['EmailAddress'],
  type: 'object',
  properties: {
    EmailAddress: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    AutoMapping: {
      type: 'string',
    },
    MailboxSize: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $ExchangeBlockedDomainRuleDto = {
  type: 'object',
  properties: {
    BlockedDomainId: {
      type: 'integer',
      format: 'int32',
    },
    RuleName: {
      type: 'string',
    },
    SentToScope: {
      type: 'string',
    },
    FromAddressMatchesPatterns: {
      type: 'string',
    },
    RejectMessageReasonText: {
      type: 'string',
    },
    Enabled: {
      type: 'boolean',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeBlockedDomainRuleDto_List = {
  type: 'object',
  properties: {
    BlockedDomainId: {
      type: 'integer',
      format: 'int32',
    },
    RuleName: {
      type: 'string',
    },
    SentToScope: {
      type: 'string',
    },
    FromAddressMatchesPatterns: {
      type: 'string',
    },
    RejectMessageReasonText: {
      type: 'string',
    },
    Enabled: {
      type: 'boolean',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $ExchangeBlockedDomainRuleDto_Request = {
  type: 'object',
  properties: {
    SentToScope: {
      type: 'string',
      description:
        "You can get possible values of sent to scope by calling 'GET /system-entities/exchange/recipient-locations'.",
      enum: [
        'NotInOrganization',
        'InOrganization',
        'ExternalPartner',
        'ExternalNonPartner',
      ],
    },
    FromAddressMatchesPatterns: {
      type: 'string',
    },
    RejectMessageReasonText: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeBlockedDomainRulesDto = {
  type: 'object',
  properties: {
    BlockedDomainRules: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExchangeBlockedDomainRuleDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeBlockedDomainEnableDisableDto = {
  type: 'object',
  properties: {
    Enabled: {
      type: 'boolean',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeBlockedDomainEnableDisableDto_Request = {
  type: 'object',
  properties: {
    Enabled: {
      type: 'boolean',
    },
  },
} as const;

export const $ExchangeJournalRuleDto = {
  required: ['JournalingMailbox', 'JournalingMailboxPassword', 'MailboxSize'],
  type: 'object',
  properties: {
    JournalMailboxId: {
      type: 'integer',
      format: 'int32',
    },
    JournalingMailbox: {
      type: 'string',
    },
    JournalingMailboxPassword: {
      type: 'string',
    },
    MailboxDatabase: {
      type: 'string',
    },
    EnableJournalRule: {
      type: 'boolean',
    },
    IsEnabled: {
      type: 'boolean',
    },
    JournalRuleName: {
      type: 'string',
    },
    MailboxSize: {
      type: 'string',
    },
    MailboxQuota: {
      type: 'string',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeJournalRuleDto_Request = {
  required: ['JournalingMailbox', 'JournalingMailboxPassword', 'MailboxSize'],
  type: 'object',
  properties: {
    JournalingMailbox: {
      type: 'string',
    },
    JournalingMailboxPassword: {
      type: 'string',
    },
    MailboxSize: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeJournalRuleDto_List = {
  required: ['JournalingMailbox', 'JournalingMailboxPassword', 'MailboxSize'],
  type: 'object',
  properties: {
    JournalMailboxId: {
      type: 'integer',
      format: 'int32',
    },
    JournalingMailbox: {
      type: 'string',
    },
    JournalingMailboxPassword: {
      type: 'string',
    },
    MailboxDatabase: {
      type: 'string',
    },
    EnableJournalRule: {
      type: 'boolean',
    },
    IsEnabled: {
      type: 'boolean',
    },
    JournalRuleName: {
      type: 'string',
    },
    MailboxSize: {
      type: 'string',
    },
    MailboxQuota: {
      type: 'string',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $ExchangeJournalRulesDto = {
  type: 'object',
  properties: {
    JournalRules: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExchangeJournalRuleDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeJournalRuleEnableDisableDto = {
  type: 'object',
  properties: {
    EnableJournalRule: {
      type: 'boolean',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeJournalRuleEnableDisableDto_Update = {
  type: 'object',
  properties: {
    EnableJournalRule: {
      type: 'boolean',
    },
  },
} as const;

export const $ExchangeMailDisclaimersDto = {
  type: 'object',
  properties: {
    MailDisclaimers: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExchangeMailDisclaimerDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeMailDisclaimerDto = {
  type: 'object',
  properties: {
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    RecipientLocation: {
      type: 'string',
    },
    DisclaimerText: {
      type: 'string',
    },
    Location: {
      type: 'string',
    },
    FallbackAction: {
      type: 'string',
    },
    IsDisabled: {
      type: 'boolean',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeMailDisclaimerDto_Request = {
  type: 'object',
  properties: {
    DisclaimerText: {
      type: 'string',
    },
    Location: {
      type: 'string',
      enum: ['Append', 'Prepend'],
    },
    FallbackAction: {
      type: 'string',
      enum: ['Ignore', 'Wrap', 'Reject'],
    },
    RecipientLocation: {
      type: 'string',
      description:
        "You can get possible values of recipient location by calling 'GET /system-entities/exchange/recipient-locations'.",
      enum: [
        'NotInOrganization',
        'InOrganization',
        'ExternalPartner',
        'ExternalNonPartner',
      ],
    },
  },
} as const;

export const $ExchangeMailDisclaimerDto_List = {
  type: 'object',
  properties: {
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    RecipientLocation: {
      type: 'string',
    },
    DisclaimerText: {
      type: 'string',
    },
    Location: {
      type: 'string',
    },
    FallbackAction: {
      type: 'string',
    },
    IsDisabled: {
      type: 'boolean',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $ExchangeMailDisclaimerEnableDisableDto = {
  type: 'object',
  properties: {
    IsDisabled: {
      type: 'boolean',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeMailDisclaimerEnableDisableDto_Request = {
  type: 'object',
  properties: {
    IsDisabled: {
      type: 'boolean',
    },
  },
} as const;

export const $ExchangeServerListDto = {
  type: 'object',
  properties: {
    ExchangeServers: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExchangeServerDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeServerDto = {
  type: 'object',
  properties: {
    Domain: {
      type: 'string',
    },
    IsClientAccessServer: {
      type: 'string',
    },
    IsMailboxServer: {
      type: 'string',
    },
    AdminDisplayVersion: {
      type: 'string',
    },
    Edition: {
      type: 'string',
    },
    HostName: {
      type: 'string',
    },
    OutLookAnywhereEnabled: {
      type: 'boolean',
    },
    ExchangeVersion: {
      type: 'string',
    },
    DataPath: {
      type: 'string',
    },
    DataPathEx: {
      type: 'string',
    },
    Name: {
      type: 'string',
    },
    Fqdn: {
      type: 'string',
    },
    IpAddress: {
      type: 'string',
    },
  },
} as const;

export const $ServerRoleDto = {
  type: 'object',
  properties: {
    RoleId: {
      type: 'integer',
      format: 'int32',
    },
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    ServerIp: {
      type: 'string',
    },
    SystemName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    PlatformName: {
      type: 'string',
    },
    WebRoleSettings: {
      $ref: '#/components/schemas/WebServerRole',
    },
    FtpRoleSettings: {
      $ref: '#/components/schemas/FtpServerRole',
    },
    DnsRoleSettings: {
      $ref: '#/components/schemas/DnsServerRole',
    },
    DatabaseRoleSettings: {
      $ref: '#/components/schemas/DatabaseServerRole',
    },
    MailRoleSettings: {
      $ref: '#/components/schemas/MailServerRole',
    },
    SharePointRoleSettings: {
      $ref: '#/components/schemas/SharePointServerRole',
    },
    SkypeRoleSettings: {
      $ref: '#/components/schemas/SkypeServerRole',
    },
    CrmRoleSettings: {
      $ref: '#/components/schemas/CrmServerRole',
    },
    VirtualizationRoleSettings: {
      $ref: '#/components/schemas/VirtualizationServerRole',
    },
    ExchangeRoleSettings: {
      $ref: '#/components/schemas/ExchangeServerRole',
    },
    BlackBerryRoleSettings: {
      $ref: '#/components/schemas/BlackBerryServerRole',
    },
    IaasRoleSettings: {
      $ref: '#/components/schemas/IaasServerRole',
    },
    Office365ServerSettings: {
      $ref: '#/components/schemas/Office365ServerRole',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ServerRoleDto_List = {
  type: 'object',
  properties: {
    RoleId: {
      type: 'integer',
      format: 'int32',
    },
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    ServerIp: {
      type: 'string',
    },
    SystemName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    PlatformName: {
      type: 'string',
    },
  },
} as const;

export const $WebServerRole = {
  required: ['Webspace'],
  type: 'object',
  properties: {
    SelectedWebServerType: {
      type: 'string',
    },
    Webspace: {
      type: 'string',
    },
    SelectedFtpServerType: {
      type: 'string',
    },
    VirtualDirectoryName: {
      type: 'string',
    },
    IpLessDomainIp: {
      type: 'string',
    },
    IpLessFtpSite: {
      type: 'string',
    },
    FtpVersion: {
      type: 'string',
    },
    ApplicationPoolEnabled: {
      type: 'boolean',
    },
    SoftaculousEnabled: {
      type: 'boolean',
    },
    SoftaculousPath: {
      type: 'string',
    },
    DomainControllerEnabled: {
      type: 'boolean',
    },
    DomainControllerName: {
      type: 'string',
    },
    DefaultOrganizationalUnit: {
      type: 'string',
    },
    SslWebsite: {
      type: 'string',
    },
    WebServerPort: {
      type: 'string',
    },
    ConfFilePath: {
      type: 'string',
    },
    PidFilePath: {
      type: 'string',
    },
    ServiceFilePath: {
      type: 'string',
    },
    SslEnabledWebsite: {
      type: 'string',
    },
    StatServerType: {
      type: 'string',
    },
    PhpAvailableVersions: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    IndexServerCatalogs: {
      $ref: '#/components/schemas/IndexServerCatalog',
    },
    PhpVersions: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/Php',
      },
    },
    Perl: {
      $ref: '#/components/schemas/PerlObject',
    },
    DotNet: {
      $ref: '#/components/schemas/DotNetObject',
    },
    ColdFusion: {
      $ref: '#/components/schemas/ColdFusionObject',
    },
    AwStats: {
      $ref: '#/components/schemas/AwStat',
    },
    DeepMetrix: {
      $ref: '#/components/schemas/DeepMetrixStat',
    },
    SmarterStats: {
      $ref: '#/components/schemas/SmarterStat',
    },
    Webalizer: {
      $ref: '#/components/schemas/WebalizerStat',
    },
    WebTrend: {
      $ref: '#/components/schemas/WebTrendStat',
    },
  },
} as const;

export const $IndexServerCatalog = {
  type: 'object',
  properties: {
    IsEnabled: {
      type: 'boolean',
    },
  },
} as const;

export const $Php = {
  type: 'object',
  properties: {
    Version: {
      type: 'string',
    },
    FastCgiEnabled: {
      type: 'boolean',
    },
    Handler: {
      type: 'string',
    },
    InstallPath: {
      type: 'string',
    },
  },
} as const;

export const $PerlObject = {
  type: 'object',
  properties: {
    InstallPath: {
      type: 'string',
    },
  },
} as const;

export const $DotNetObject = {
  type: 'object',
  properties: {
    InstallPath: {
      type: 'string',
    },
  },
} as const;

export const $ColdFusionObject = {
  type: 'object',
  properties: {
    ColdfusionPassword: {
      type: 'string',
    },
    InstallPath: {
      type: 'string',
    },
  },
} as const;

export const $AwStat = {
  type: 'object',
  properties: {
    IsEnabled: {
      type: 'boolean',
    },
  },
} as const;

export const $DeepMetrixStat = {
  type: 'object',
  properties: {
    RemoteConfigured: {
      type: 'boolean',
    },
    XspVersion: {
      type: 'boolean',
    },
    ServerIp: {
      type: 'string',
    },
    Port: {
      type: 'string',
    },
    AdminName: {
      pattern:
        '^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$',
      type: 'string',
    },
    AdminPassword: {
      type: 'string',
    },
  },
} as const;

export const $SmarterStat = {
  type: 'object',
  properties: {
    IsEnterpriseVersion: {
      type: 'boolean',
    },
    AdminName: {
      type: 'string',
    },
    AdminPassword: {
      type: 'string',
    },
    ServerIp: {
      type: 'string',
    },
    Port: {
      type: 'string',
    },
    AccessUrl: {
      type: 'string',
    },
    LogsPath: {
      type: 'string',
    },
  },
} as const;

export const $WebalizerStat = {
  type: 'object',
  properties: {
    IsEnabled: {
      type: 'boolean',
    },
  },
} as const;

export const $WebTrendStat = {
  type: 'object',
  properties: {
    WebTrendVersion: {
      type: 'string',
    },
    ServerIp: {
      type: 'string',
    },
    Port: {
      type: 'string',
    },
  },
} as const;

export const $FtpServerRole = {
  required: ['Proftpd', 'ServuIniFilePath', 'VsFtpd', 'WuFtpd'],
  type: 'object',
  properties: {
    SelectedFtpServerType: {
      type: 'string',
    },
    IpLessFtpSite: {
      type: 'string',
    },
    VirtualDirectoryName: {
      type: 'string',
    },
    ServuIniFilePath: {
      type: 'string',
    },
    DefaultDomain: {
      type: 'string',
    },
    WuFtpd: {
      type: 'string',
    },
    VsFtpd: {
      type: 'string',
    },
    Proftpd: {
      type: 'string',
    },
  },
} as const;

export const $DnsServerRole = {
  required: [
    'DnsPath',
    'EmailAddress',
    'ExpireTime',
    'NameServer1',
    'NameServer2',
    'NumberOfRetries',
    'RefreshTime',
    'Ttl',
  ],
  type: 'object',
  properties: {
    SelectedDnsServerType: {
      type: 'string',
    },
    DnsPath: {
      type: 'string',
    },
    NameServer1: {
      type: 'string',
    },
    NameServer2: {
      type: 'string',
    },
    NameServer3: {
      type: 'string',
    },
    NameServer4: {
      type: 'string',
    },
    EmailAddress: {
      type: 'string',
    },
    SpfRecord: {
      type: 'string',
    },
    DnsEnabled: {
      type: 'boolean',
    },
    IsSecondaryOnly: {
      type: 'boolean',
    },
    SecondaryEnabled: {
      type: 'boolean',
    },
    SpfEnabled: {
      type: 'boolean',
    },
    Ns3Enabled: {
      type: 'boolean',
    },
    Ns4Enabled: {
      type: 'boolean',
    },
    Ns2ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    Ns3ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    Ns4ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    RefreshTime: {
      type: 'integer',
      format: 'int32',
    },
    NumberOfRetries: {
      type: 'integer',
      format: 'int32',
    },
    ExpireTime: {
      type: 'integer',
      format: 'int32',
    },
    Ttl: {
      type: 'integer',
      format: 'int32',
    },
    ConfFilePath: {
      type: 'string',
    },
    DnsPidFilePath: {
      type: 'string',
    },
    DnsServiceFilePath: {
      type: 'string',
    },
    ChrootEnvironment: {
      type: 'boolean',
    },
    ChrootDirectoryPath: {
      type: 'string',
    },
    DnsRecords: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/DnsRecord',
      },
    },
  },
} as const;

export const $DnsRecord = {
  type: 'object',
  properties: {
    Name: {
      type: 'string',
    },
    Data: {
      type: 'string',
    },
    Preference: {
      type: 'string',
    },
    Type: {
      type: 'string',
    },
  },
} as const;

export const $DatabaseServerRole = {
  type: 'object',
  properties: {
    SqlInstances: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SqlInstance',
      },
    },
    MySqlInstances: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/MySqlInstance',
      },
    },
  },
} as const;

export const $SqlInstance = {
  required: [
    'AdminName',
    'AdminPassword',
    'DatabasePath',
    'IpAddress',
    'Port',
    'ServerName',
  ],
  type: 'object',
  properties: {
    ServerName: {
      type: 'string',
    },
    DatabasePath: {
      type: 'string',
    },
    IpAddress: {
      type: 'string',
    },
    Port: {
      type: 'string',
    },
    AdminName: {
      type: 'string',
    },
    AdminPassword: {
      type: 'string',
    },
  },
} as const;

export const $MySqlInstance = {
  required: [
    'AdminName',
    'AdminPassword',
    'InstallPath',
    'IpAddress',
    'Port',
    'ServerName',
  ],
  type: 'object',
  properties: {
    ServerName: {
      type: 'string',
    },
    InstallPath: {
      type: 'string',
    },
    IpAddress: {
      type: 'string',
    },
    Port: {
      type: 'string',
    },
    AdminName: {
      type: 'string',
    },
    AdminPassword: {
      type: 'string',
    },
  },
} as const;

export const $MailServerRole = {
  required: ['ServerIp'],
  type: 'object',
  properties: {
    SelectedMailServerType: {
      type: 'string',
    },
    Port: {
      type: 'string',
    },
    ServerIp: {
      type: 'string',
    },
    MailAccessUrl: {
      type: 'string',
    },
    MailAdminUrl: {
      type: 'string',
    },
    MerakIpBinding: {
      type: 'string',
    },
    Enabled: {
      type: 'string',
    },
    Name: {
      type: 'string',
    },
    MDaemonPort: {
      type: 'string',
    },
    DsnName: {
      type: 'string',
    },
    Database: {
      type: 'string',
    },
    AdminUser: {
      type: 'string',
    },
    AdminPassword: {
      type: 'string',
    },
    VirtualDirPath: {
      type: 'string',
    },
    InstallPath: {
      type: 'string',
    },
    RootAddress: {
      type: 'string',
    },
    ListAdministrator: {
      type: 'string',
    },
    ConfFilePath: {
      type: 'string',
    },
    MailPidFile: {
      type: 'string',
    },
    MailServiceFile: {
      type: 'string',
    },
    SmtpAuthentication: {
      type: 'string',
    },
    VpopHomeDirectory: {
      type: 'string',
    },
    QmailHomeDirectory: {
      type: 'string',
    },
    DovecotConfFile: {
      type: 'string',
    },
    DovecotServiceFile: {
      type: 'string',
    },
    ExternalDllPath: {
      type: 'string',
    },
    SystemDsn: {
      type: 'string',
    },
    DsnUsername: {
      type: 'string',
    },
    DsnPassword: {
      type: 'string',
    },
  },
} as const;

export const $SharePointServerRole = {
  required: [
    'ADAdmin',
    'ADAdminPassword',
    'AdminUserName',
    'AdminUserPassword',
    'HostName',
    'RootOu',
    'WebApplicationName',
  ],
  type: 'object',
  properties: {
    SelectedSharePointServerType: {
      type: 'string',
    },
    HostName: {
      type: 'string',
    },
    ServerIp: {
      type: 'string',
    },
    AdminUserName: {
      type: 'string',
    },
    AdminUserPassword: {
      type: 'string',
    },
    DbMaxsize: {
      type: 'string',
    },
    DbWarningsize: {
      type: 'string',
    },
    DefaultWebApp: {
      type: 'string',
    },
    DomainController: {
      type: 'string',
    },
    RootOu: {
      type: 'string',
    },
    ADAdmin: {
      type: 'string',
    },
    ADAdminPassword: {
      type: 'string',
    },
    WebApplicationName: {
      type: 'string',
    },
  },
} as const;

export const $SkypeServerRole = {
  required: ['DomainController', 'RootOu'],
  type: 'object',
  properties: {
    SelectedSkypeServerType: {
      type: 'string',
    },
    ServerIp: {
      type: 'string',
    },
    Version: {
      type: 'string',
    },
    DomainController: {
      type: 'string',
    },
    HostHeader: {
      type: 'string',
    },
    RootOu: {
      type: 'string',
    },
    SimpleUrlType: {
      type: 'string',
    },
    SimpleUrlHostHeader: {
      type: 'string',
    },
    SimpleUrlDefaultDomain: {
      type: 'string',
    },
    HostName: {
      type: 'string',
    },
    AdministratorLogin: {
      type: 'string',
    },
    AdministratorPassword: {
      type: 'string',
    },
    ADAdmin: {
      type: 'string',
    },
    ADAdminPassword: {
      type: 'string',
    },
    ServerPool: {
      type: 'string',
    },
    ApplicationService: {
      type: 'string',
    },
  },
} as const;

export const $CrmServerRole = {
  required: [
    'DomainController',
    'DomainName',
    'InternetFacingDomain',
    'RootOu',
    'Serverport',
    'SqlReportServerUrl',
    'UserName',
    'UserPassword',
  ],
  type: 'object',
  properties: {
    SelectedCrmServerType: {
      type: 'string',
    },
    DefaultAuthentication: {
      type: 'boolean',
    },
    UserName: {
      type: 'string',
    },
    UserPassword: {
      type: 'string',
    },
    DomainName: {
      type: 'string',
    },
    Serverport: {
      type: 'string',
    },
    BindingType: {
      type: 'string',
    },
    InternetFacingDomain: {
      type: 'string',
    },
    SqlReportServerUrl: {
      type: 'string',
    },
    DomainController: {
      type: 'string',
    },
    RootOu: {
      type: 'string',
    },
  },
} as const;

export const $VirtualizationServerRole = {
  required: [
    'AdministratorLogin',
    'AdministratorPassword',
    'ExternalNetworkName',
    'PreferredDns',
  ],
  type: 'object',
  properties: {
    SelectedVirtualizationServerType: {
      type: 'string',
    },
    ServerName: {
      type: 'string',
    },
    ServerApiUrl: {
      type: 'string',
    },
    AdministratorLogin: {
      type: 'string',
    },
    AdministratorPassword: {
      type: 'string',
    },
    ConfirmPassword: {
      type: 'string',
    },
    VirtualMachineRootPath: {
      type: 'string',
    },
    ExternalNetworkName: {
      type: 'string',
    },
    PreferredDns: {
      type: 'string',
    },
    AlternateDns: {
      type: 'string',
    },
    InternalNetworkName: {
      type: 'string',
    },
    BandwidthManagement: {
      type: 'boolean',
    },
    BandwidthTools: {
      type: 'string',
    },
    BandwidthParserPath: {
      type: 'string',
    },
    BandwidthLogFolder: {
      type: 'string',
    },
    BandwidthReportFolder: {
      type: 'string',
    },
    Version: {
      type: 'integer',
      format: 'int32',
    },
    DataStoreName: {
      type: 'string',
    },
    ProviderEnabled: {
      type: 'boolean',
    },
  },
} as const;

export const $ExchangeServerRole = {
  type: 'object',
  properties: {
    SelectedExchangeServerType: {
      type: 'string',
    },
    SelectedBlackBerryServer: {
      type: 'string',
    },
    ActAsBackupServerOnly: {
      type: 'boolean',
    },
    SrvRecordEnabled: {
      type: 'boolean',
    },
    SrvHostName: {
      type: 'string',
    },
    MailMxIpAddress: {
      type: 'string',
    },
    ClientAccessServer: {
      type: 'string',
    },
    OwaAccessUrl: {
      type: 'string',
    },
    PublicFolderServer: {
      type: 'string',
    },
    DomainController: {
      type: 'string',
    },
    RootOu: {
      type: 'string',
    },
    HostName: {
      type: 'string',
    },
    AdministratorLogin: {
      type: 'string',
    },
    AdministratorPassword: {
      type: 'string',
    },
    DatabaseSelectionMode: {
      type: 'string',
    },
    ActiveDirectoryMode: {
      type: 'string',
    },
    DomainAdministrator: {
      type: 'string',
    },
    DomainPassword: {
      type: 'string',
    },
  },
} as const;

export const $BlackBerryServerRole = {
  required: [
    'AdminClientPassword',
    'AdminClientPath',
    'BlackBerryEnterpriseServerName',
    'UserName',
    'UserPassword',
  ],
  type: 'object',
  properties: {
    SelectedBlackBerryServerType: {
      type: 'string',
    },
    SelectedExchangeServers: {
      type: 'string',
    },
    AdminClientServerName: {
      type: 'string',
    },
    AdminClientPath: {
      type: 'string',
    },
    AdminClientPassword: {
      type: 'string',
    },
    ConfirmPassword: {
      type: 'string',
    },
    AdminServiceServerName: {
      type: 'string',
    },
    BlackBerryEnterpriseServerName: {
      type: 'string',
    },
    UserName: {
      type: 'string',
    },
    UserPassword: {
      type: 'string',
    },
    ConfirmUserPassword: {
      type: 'string',
    },
    AccountType: {
      type: 'string',
    },
  },
} as const;

export const $IaasServerRole = {
  type: 'object',
  properties: {
    IaasConfig: {
      $ref: '#/components/schemas/IaasConfigsDto',
    },
    SelectedVirtualizationServerType: {
      type: 'string',
    },
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    RoleId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $IaasConfigsDto = {
  type: 'object',
  properties: {
    StepName: {
      type: 'string',
    },
    Data: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/IaasKeyValuePair',
      },
    },
  },
} as const;

export const $IaasKeyValuePair = {
  type: 'object',
  properties: {
    SystemName: {
      type: 'string',
    },
    Value: {
      type: 'string',
    },
  },
} as const;

export const $Office365ServerRole = {
  required: [
    'ApplicationDomain',
    'ApplicationId',
    'ApplicationSecret',
    'Authority',
    'CSPUserName',
    'CSPUserPassword',
    'DomainSuffix',
    'PartnerServiceApiRoot',
    'SelectedOffice365ServerType',
    'UserApplicationId',
  ],
  type: 'object',
  properties: {
    SelectedOffice365ServerType: {
      type: 'string',
    },
    CSPUserName: {
      type: 'string',
    },
    CSPUserPassword: {
      type: 'string',
    },
    ApplicationSecret: {
      type: 'string',
    },
    PartnerServiceApiRoot: {
      type: 'string',
    },
    ApplicationDomain: {
      type: 'string',
    },
    Regions: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    ApplicationId: {
      type: 'string',
    },
    Authority: {
      type: 'string',
    },
    UserApplicationId: {
      type: 'string',
    },
    DomainSuffix: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeMailDomainsDto = {
  type: 'object',
  properties: {
    ExchangeMailDomains: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExchangeMailDomainDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeMailDomainDto = {
  required: ['MailDomain', 'OrganizationId'],
  type: 'object',
  properties: {
    MailDomainId: {
      type: 'integer',
      format: 'int32',
    },
    MailDomain: {
      type: 'string',
    },
    MailDomainType: {
      type: 'string',
    },
    MailServerIp: {
      type: 'string',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    Provider: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    IsDisabled: {
      type: 'boolean',
    },
    DnsTxtRecord: {
      type: 'string',
    },
    IsVerified: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeMailDomainDto_Request = {
  required: ['MailDomain', 'OrganizationId'],
  type: 'object',
  properties: {
    MailDomain: {
      type: 'string',
    },
    MailDomainType: {
      type: 'string',
      enum: ['authoritative', 'internalRelay', 'externalRelay'],
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    Provider: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      description:
        'Give owner id in case of creating mail domain for any descendent user.',
      format: 'int32',
    },
  },
} as const;

export const $ExchangeMailDomainDto_List = {
  required: ['MailDomain', 'OrganizationId'],
  type: 'object',
  properties: {
    MailDomainId: {
      type: 'integer',
      format: 'int32',
    },
    MailDomain: {
      type: 'string',
    },
    MailDomainType: {
      type: 'string',
    },
    MailServerIp: {
      type: 'string',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    Provider: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    IsDisabled: {
      type: 'boolean',
    },
    DnsTxtRecord: {
      type: 'string',
    },
    IsVerified: {
      type: 'boolean',
    },
  },
} as const;

export const $UpdateMailDomainDto = {
  required: ['MailDomainId', 'MailDomainType'],
  type: 'object',
  properties: {
    MailDomainId: {
      type: 'integer',
      format: 'int32',
    },
    MailDomainType: {
      type: 'string',
    },
    IsDisabled: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $UpdateMailDomainDto_Request = {
  required: ['MailDomainType'],
  type: 'object',
  properties: {
    MailDomainType: {
      type: 'string',
    },
    IsDisabled: {
      type: 'boolean',
    },
  },
} as const;

export const $ExchangeDistributionListsDto = {
  type: 'object',
  properties: {
    DistributionList: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExchangeDistributionListDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeDistributionListDto = {
  required: ['DisplayName', 'EmailAddress', 'OrganizationId'],
  type: 'object',
  properties: {
    ExchangeDistributionListId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationName: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    EmailAddress: {
      type: 'string',
    },
    IsDistribution: {
      type: 'boolean',
    },
    IsAllSenderAuthenticated: {
      type: 'boolean',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    InComingMessageSizeLimit: {
      type: 'integer',
      format: 'int32',
    },
    ListAdmin: {
      type: 'string',
    },
    ListType: {
      type: 'string',
    },
    SubOU: {
      type: 'string',
    },
    OrganizationMSOLId: {
      type: 'string',
    },
    ExchangeRecipients: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExchangeRecipientDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeDistributionListDto_List = {
  required: ['DisplayName', 'EmailAddress', 'OrganizationId'],
  type: 'object',
  properties: {
    ExchangeDistributionListId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationName: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    EmailAddress: {
      type: 'string',
    },
    IsDistribution: {
      type: 'boolean',
    },
    IsAllSenderAuthenticated: {
      type: 'boolean',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    InComingMessageSizeLimit: {
      type: 'integer',
      format: 'int32',
    },
    ListAdmin: {
      type: 'string',
    },
    ListType: {
      type: 'string',
    },
    SubOU: {
      type: 'string',
    },
    OrganizationMSOLId: {
      type: 'string',
    },
    ExchangeRecipients: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExchangeRecipientDto',
      },
    },
  },
} as const;

export const $ExchangeDistributionListDto_Request = {
  required: ['DisplayName', 'EmailAddress', 'OrganizationId'],
  type: 'object',
  properties: {
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    EmailAddress: {
      type: 'string',
    },
    IsDistribution: {
      type: 'boolean',
      description:
        "Set it true to create 'distribution' type of list otherwise it will create 'security' type of list.",
    },
    IsAllSenderAuthenticated: {
      type: 'boolean',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    InComingMessageSizeLimit: {
      type: 'integer',
      format: 'int32',
    },
    ListAdmin: {
      type: 'string',
    },
    ExchangeRecipients: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExchangeRecipientDto:exgRequest',
      },
    },
  },
} as const;

export const $ExchangeRecipientDto_exgRequest = {
  required: ['EmailAddress'],
  type: 'object',
  properties: {
    EmailAddress: {
      type: 'string',
    },
  },
} as const;

export const $UpdateExchangeDLAdminDto = {
  required: ['ListAdmin'],
  type: 'object',
  properties: {
    ExchangeDistributionListId: {
      type: 'integer',
      format: 'int32',
    },
    ListAdmin: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $UpdateExchangeDLAdminDto_Request = {
  required: ['ListAdmin'],
  type: 'object',
  properties: {
    ListAdmin: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeDistributionListMembersDto = {
  type: 'object',
  properties: {
    ExchangeDistributionListId: {
      type: 'integer',
      format: 'int32',
    },
    ExchangeRecipients: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExchangeRecipientDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeDistributionListMembersDto_Request = {
  type: 'object',
  properties: {
    ExchangeRecipients: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExchangeRecipientDto',
      },
    },
  },
} as const;

export const $RecipientEmailAddressesDto = {
  type: 'object',
  properties: {
    EmailAddresses: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/RecipientEmailAddressDto:List',
      },
    },
    RecipientId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $RecipientEmailAddressDto = {
  type: 'object',
  properties: {
    EmailAddress: {
      type: 'string',
    },
    IsPrimary: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $RecipientEmailAddressDto_List = {
  type: 'object',
  properties: {
    EmailAddress: {
      type: 'string',
    },
    IsPrimary: {
      type: 'boolean',
    },
  },
} as const;

export const $SetRecipientPrimaryEmailAddressDto = {
  type: 'object',
  properties: {
    RecipientId: {
      type: 'integer',
      format: 'int32',
    },
    EmailAddress: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SetRecipientPrimaryEmailAddressDto_Request = {
  type: 'object',
  properties: {
    EmailAddress: {
      type: 'string',
    },
  },
} as const;

export const $AddRecipientEmailAddressDto = {
  type: 'object',
  properties: {
    RecipientId: {
      type: 'integer',
      format: 'int32',
    },
    EmailAddress: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $AddRecipientEmailAddressDto_Request = {
  type: 'object',
  properties: {
    EmailAddress: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeDistributionListAdvancePropertiesDto = {
  type: 'object',
  properties: {
    ExchangeDistributionListId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxServerType: {
      type: 'string',
    },
    InComingMessageSizeLimit: {
      type: 'integer',
      format: 'int32',
    },
    IsAllSenderAuthenticated: {
      type: 'boolean',
    },
    IsSendOutToOriginator: {
      type: 'boolean',
    },
    IsHideFromList: {
      type: 'boolean',
    },
    ReportToManagerEnabled: {
      type: 'boolean',
    },
    ReportToOriginatorEnabled: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeDistributionListAdvancePropertiesDto_Request = {
  type: 'object',
  properties: {
    DisplayName: {
      type: 'string',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxServerType: {
      type: 'string',
    },
    InComingMessageSizeLimit: {
      type: 'integer',
      format: 'int32',
    },
    IsAllSenderAuthenticated: {
      type: 'boolean',
    },
    IsSendOutToOriginator: {
      type: 'boolean',
    },
    IsHideFromList: {
      type: 'boolean',
    },
    ReportToManagerEnabled: {
      type: 'boolean',
    },
    ReportToOriginatorEnabled: {
      type: 'boolean',
    },
  },
} as const;

export const $ExchangeMailContactsDto = {
  type: 'object',
  properties: {
    ContactsList: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExchangeMailContactDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeMailContactDto_List = {
  required: [
    'ContactName',
    'ExternalEmailAddress',
    'FirstName',
    'LastName',
    'OrganizationId',
  ],
  type: 'object',
  properties: {
    ExchangeMailContactId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationName: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    FirstName: {
      type: 'string',
    },
    LastName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    PrimaryEmailAddress: {
      type: 'string',
    },
    DistinguishedName: {
      type: 'string',
    },
    ContactName: {
      type: 'string',
    },
    ExternalEmailAddress: {
      type: 'string',
    },
    InternalEmailAddress: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    HiddenFromAddressLists: {
      type: 'boolean',
    },
    IsDisabled: {
      type: 'boolean',
    },
    MaximumRecipients: {
      type: 'integer',
      format: 'int32',
    },
    MaxReceiveSize: {
      type: 'integer',
      format: 'int32',
    },
    GeneralProfile: {
      $ref: '#/components/schemas/UserGeneralProfileDto',
    },
    SubOU: {
      type: 'string',
    },
    OrganizationMSOLId: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeMailContactDto_Request = {
  required: [
    'ContactName',
    'ExternalEmailAddress',
    'FirstName',
    'LastName',
    'OrganizationId',
  ],
  type: 'object',
  properties: {
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    FirstName: {
      type: 'string',
    },
    LastName: {
      type: 'string',
    },
    ContactName: {
      type: 'string',
    },
    ExternalEmailAddress: {
      type: 'string',
    },
    InternalEmailAddress: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    HiddenFromAddressLists: {
      type: 'boolean',
    },
    MaximumRecipients: {
      type: 'integer',
      format: 'int32',
    },
    MaxReceiveSize: {
      type: 'integer',
      format: 'int32',
    },
    GeneralProfile: {
      $ref: '#/components/schemas/UserGeneralProfileDto',
    },
  },
} as const;

export const $ExchangeMailContactDto = {
  required: [
    'ContactName',
    'ExternalEmailAddress',
    'FirstName',
    'LastName',
    'OrganizationId',
  ],
  type: 'object',
  properties: {
    ExchangeMailContactId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationName: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    FirstName: {
      type: 'string',
    },
    LastName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    PrimaryEmailAddress: {
      type: 'string',
    },
    DistinguishedName: {
      type: 'string',
    },
    ContactName: {
      type: 'string',
    },
    ExternalEmailAddress: {
      type: 'string',
    },
    InternalEmailAddress: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    HiddenFromAddressLists: {
      type: 'boolean',
    },
    IsDisabled: {
      type: 'boolean',
    },
    MaximumRecipients: {
      type: 'integer',
      format: 'int32',
    },
    MaxReceiveSize: {
      type: 'integer',
      format: 'int32',
    },
    GeneralProfile: {
      $ref: '#/components/schemas/UserGeneralProfileDto',
    },
    SubOU: {
      type: 'string',
    },
    OrganizationMSOLId: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ManagerDto_Resquest = {
  type: 'object',
  properties: {
    Id: {
      type: 'integer',
      format: 'int32',
    },
    Email: {
      type: 'string',
    },
    ManagerType: {
      type: 'string',
    },
  },
} as const;

export const $UserGeneralProfileDto_Request = {
  type: 'object',
  properties: {
    UserDn: {
      type: 'string',
    },
    ObjectType: {
      type: 'string',
    },
    FirstName: {
      type: 'string',
    },
    LastName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    Initials: {
      type: 'string',
    },
    OfficeLocation: {
      type: 'string',
    },
    StreetAddress: {
      type: 'string',
    },
    ZipCode: {
      type: 'string',
    },
    City: {
      type: 'string',
    },
    State: {
      type: 'string',
    },
    CountryId: {
      type: 'integer',
      format: 'int32',
    },
    CountryAbbreviation: {
      type: 'string',
    },
    JobTitle: {
      type: 'string',
    },
    Company: {
      type: 'string',
    },
    Department: {
      type: 'string',
    },
    BusinessPhone: {
      type: 'string',
    },
    HomePhone: {
      type: 'string',
    },
    MobilePhone: {
      type: 'string',
    },
    Fax: {
      type: 'string',
    },
    WebPage: {
      type: 'string',
    },
    Notes: {
      type: 'string',
    },
    Pager: {
      type: 'string',
    },
    UserManager: {
      $ref: '#/components/schemas/ManagerDto:Resquest',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $UserGeneralProfileDto = {
  required: ['State'],
  type: 'object',
  properties: {
    FirstName: {
      type: 'string',
    },
    LastName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    Initials: {
      type: 'string',
    },
    OfficeLocation: {
      type: 'string',
    },
    StreetAddress: {
      type: 'string',
    },
    ZipCode: {
      type: 'string',
    },
    City: {
      type: 'string',
    },
    State: {
      type: 'string',
    },
    CountryId: {
      type: 'integer',
      format: 'int32',
    },
    JobTitle: {
      type: 'string',
    },
    Company: {
      type: 'string',
    },
    Department: {
      type: 'string',
    },
    BusinessPhone: {
      type: 'string',
    },
    HomePhone: {
      type: 'string',
    },
    MobilePhone: {
      type: 'string',
    },
    Fax: {
      type: 'string',
    },
    WebPage: {
      type: 'string',
    },
    Notes: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeMailContactGeneralPropertiesDto = {
  type: 'object',
  properties: {
    ExchangeMailContactId: {
      type: 'integer',
      format: 'int32',
    },
    GeneralProfile: {
      $ref: '#/components/schemas/UserGeneralProfileDto',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeMailContactGeneralPropertiesDto_Request = {
  type: 'object',
  properties: {
    ExchangeMailContactId: {
      type: 'integer',
      format: 'int32',
    },
    GeneralProfile: {
      $ref: '#/components/schemas/UserGeneralProfileDto',
    },
  },
} as const;

export const $ExchangeMailContactAdvancedPropertiesDto = {
  type: 'object',
  properties: {
    ExchangeMailContactId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    ExternalEmailAddress: {
      type: 'string',
    },
    HiddenFromAddressLists: {
      type: 'boolean',
    },
    MaximumRecipients: {
      type: 'integer',
      format: 'int32',
    },
    MaxReceiveSize: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeMailContactAdvancedPropertiesDto_Request = {
  type: 'object',
  properties: {
    DisplayName: {
      type: 'string',
    },
    ExternalEmailAddress: {
      type: 'string',
    },
    HiddenFromAddressLists: {
      type: 'boolean',
    },
    MaximumRecipients: {
      type: 'integer',
      format: 'int32',
    },
    MaxReceiveSize: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $ExgMailboxDatabasesDto = {
  type: 'object',
  properties: {
    MailboxDatabases: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExgMailboxDatabaseDto',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExgMailboxDatabaseDto = {
  type: 'object',
  properties: {
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxDatabaseId: {
      type: 'integer',
      format: 'int32',
    },
    UserName: {
      type: 'string',
    },
    ServerIp: {
      type: 'string',
    },
    ServerName: {
      type: 'string',
    },
    DatabasePath: {
      type: 'string',
    },
    LogFolderPath: {
      type: 'string',
    },
    Mounted: {
      type: 'boolean',
    },
    MountAtStartup: {
      type: 'boolean',
    },
    MailboxDatabaseName: {
      type: 'string',
    },
    IsForMailBoxDB: {
      type: 'boolean',
    },
    IsForArchiveMailboxDB: {
      type: 'boolean',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $AssignExgMailboxDatabasesDto = {
  type: 'object',
  properties: {
    MailboxDatabases: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/AssignExchangeDatabaseDto',
      },
    },
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $AssignExgMailboxDatabasesDto_Request = {
  type: 'object',
  properties: {
    MailboxDatabases: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/AssignExchangeDatabaseDto',
      },
    },
  },
} as const;

export const $AssignExchangeDatabaseDto = {
  type: 'object',
  properties: {
    MailboxDatabaseName: {
      type: 'string',
    },
    IsForMailBoxDB: {
      type: 'boolean',
    },
    IsForArchiveMailboxDB: {
      type: 'boolean',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $ExgUpdateMailboxDatabaseDto = {
  required: ['MailboxDatabaseName'],
  type: 'object',
  properties: {
    MailboxDatabaseName: {
      type: 'string',
    },
    Mount: {
      type: 'boolean',
    },
  },
} as const;

export const $ExgAddMailboxDatabaseDto = {
  required: [
    'DatabasePath',
    'LogFolderPath',
    'MailboxDatabaseName',
    'MailboxSever',
  ],
  type: 'object',
  properties: {
    MailboxDatabaseName: {
      type: 'string',
    },
    DatabasePath: {
      type: 'string',
    },
    LogFolderPath: {
      type: 'string',
    },
    MailboxSever: {
      type: 'string',
    },
    Mount: {
      type: 'boolean',
    },
  },
} as const;

export const $ExchangePfMailboxesDto = {
  type: 'object',
  properties: {
    PfMailboxes: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExchangePfMailboxDto',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangePfMailboxDto = {
  required: ['MailboxDatabase', 'PfMailboxName'],
  type: 'object',
  properties: {
    PfMailboxName: {
      type: 'string',
    },
    MailboxDatabase: {
      type: 'string',
    },
    ExcludeFromServingHierarchy: {
      type: 'boolean',
    },
  },
} as const;

export const $UpdateExchangePfMailboxDto = {
  required: ['PfMailboxName'],
  type: 'object',
  properties: {
    PfMailboxName: {
      type: 'string',
    },
    ExcludeFromServingHierarchy: {
      type: 'boolean',
    },
  },
} as const;

export const $AssignExchangePfMailboxDto = {
  required: ['PfMailboxes', 'UserId'],
  type: 'object',
  properties: {
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    PfMailboxes: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
} as const;

export const $ActiveSyncPoliciesDto = {
  type: 'object',
  properties: {
    ActiveSyncPolicies: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ActiveSyncPolicyDto:List',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ActiveSyncPolicyDto = {
  required: ['Name'],
  type: 'object',
  properties: {
    Name: {
      type: 'string',
    },
    DevicePolicyRefreshInterval: {
      type: 'string',
    },
    AllowNonProvisionableDevices: {
      type: 'boolean',
    },
    DevicePasswordEnabled: {
      type: 'boolean',
    },
    AlphanumericDevicePasswordRequired: {
      type: 'boolean',
    },
    MaxInactivityTimeDeviceLock: {
      type: 'string',
    },
    MinDevicePasswordLength: {
      type: 'string',
    },
    PasswordRecoveryEnabled: {
      type: 'boolean',
    },
    RequireDeviceEncryption: {
      type: 'boolean',
    },
    AttachmentsEnabled: {
      type: 'boolean',
    },
    AllowSimpleDevicePassword: {
      type: 'boolean',
    },
    DevicePasswordExpiration: {
      type: 'string',
    },
    DevicePasswordHistory: {
      type: 'string',
    },
    IsDefault: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ActiveSyncPolicyDto_Request = {
  required: ['Name'],
  type: 'object',
  properties: {
    Name: {
      type: 'string',
    },
    DevicePolicyRefreshInterval: {
      type: 'string',
    },
    AllowNonProvisionableDevices: {
      type: 'boolean',
    },
    DevicePasswordEnabled: {
      type: 'boolean',
    },
    AlphanumericDevicePasswordRequired: {
      type: 'boolean',
    },
    MaxInactivityTimeDeviceLock: {
      type: 'string',
    },
    MinDevicePasswordLength: {
      type: 'string',
    },
    PasswordRecoveryEnabled: {
      type: 'boolean',
    },
    RequireDeviceEncryption: {
      type: 'boolean',
    },
    AttachmentsEnabled: {
      type: 'boolean',
    },
    AllowSimpleDevicePassword: {
      type: 'boolean',
    },
    DevicePasswordExpiration: {
      type: 'string',
    },
    DevicePasswordHistory: {
      type: 'string',
    },
    IsDefault: {
      type: 'boolean',
    },
  },
} as const;

export const $ActiveSyncPolicyDto_List = {
  required: ['Name'],
  type: 'object',
  properties: {
    Name: {
      type: 'string',
    },
    DevicePolicyRefreshInterval: {
      type: 'string',
    },
    AllowNonProvisionableDevices: {
      type: 'boolean',
    },
    DevicePasswordEnabled: {
      type: 'boolean',
    },
    AlphanumericDevicePasswordRequired: {
      type: 'boolean',
    },
    MaxInactivityTimeDeviceLock: {
      type: 'string',
    },
    MinDevicePasswordLength: {
      type: 'string',
    },
    PasswordRecoveryEnabled: {
      type: 'boolean',
    },
    RequireDeviceEncryption: {
      type: 'boolean',
    },
    AttachmentsEnabled: {
      type: 'boolean',
    },
    AllowSimpleDevicePassword: {
      type: 'boolean',
    },
    DevicePasswordExpiration: {
      type: 'string',
    },
    DevicePasswordHistory: {
      type: 'string',
    },
    IsDefault: {
      type: 'boolean',
    },
  },
} as const;

export const $DefaultASyncPolicyDto = {
  required: ['Name'],
  type: 'object',
  properties: {
    Name: {
      type: 'string',
    },
  },
} as const;

export const $OutlookAnywhrListDto = {
  type: 'object',
  properties: {
    OutlookAnywhrList: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/OutlookAnywhrDto:List',
      },
    },
    ServerCount: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $OutlookAnywhrDto = {
  required: ['AuthenticationMode', 'CasServer', 'HostName'],
  type: 'object',
  properties: {
    HostName: {
      type: 'string',
    },
    CasServer: {
      type: 'string',
    },
    AuthenticationMode: {
      type: 'string',
    },
    SslOffloading: {
      type: 'boolean',
    },
    IpAddress: {
      type: 'string',
    },
    RPCPath: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $OutlookAnywhrDto_List = {
  required: ['AuthenticationMode', 'CasServer', 'HostName'],
  type: 'object',
  properties: {
    HostName: {
      type: 'string',
    },
    CasServer: {
      type: 'string',
    },
    AuthenticationMode: {
      type: 'string',
    },
    SslOffloading: {
      type: 'boolean',
    },
    IpAddress: {
      type: 'string',
    },
    RPCPath: {
      type: 'string',
    },
  },
} as const;

export const $OutlookAnywhrDto_Request = {
  required: ['AuthenticationMode', 'CasServer', 'HostName'],
  type: 'object',
  properties: {
    HostName: {
      type: 'string',
    },
    CasServer: {
      type: 'string',
    },
    AuthenticationMode: {
      type: 'string',
    },
    SslOffloading: {
      type: 'boolean',
    },
    IpAddress: {
      type: 'string',
    },
    RPCPath: {
      type: 'string',
    },
  },
} as const;

export const $OrganizationSyncDto = {
  type: 'object',
  properties: {
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxDatabaseId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxDatabaseName: {
      type: 'string',
    },
    SystemName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    IsResourceSync: {
      type: 'boolean',
    },
    IsADSync: {
      type: 'boolean',
    },
    IsDatabaseSync: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $OrganizationSyncDto_List = {
  type: 'object',
  properties: {
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxDatabaseId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxDatabaseName: {
      type: 'string',
    },
    SystemName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    IsResourceSync: {
      type: 'boolean',
    },
    IsADSync: {
      type: 'boolean',
    },
    IsDatabaseSync: {
      type: 'boolean',
    },
  },
} as const;

export const $ExgUpdateOrganizationADSyncDto = {
  type: 'object',
  properties: {
    IsADSync: {
      type: 'boolean',
    },
    IsResourceSync: {
      type: 'boolean',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxDatabaseName: {
      type: 'string',
    },
  },
} as const;

export const $ExgUpdateOrganizationADSyncDto_Request = {
  type: 'object',
  properties: {
    IsADSync: {
      type: 'boolean',
    },
    IsResourceSync: {
      type: 'boolean',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxDatabaseName: {
      type: 'string',
    },
  },
} as const;

export const $OrganizationsSyncDto = {
  type: 'object',
  properties: {
    Organizations: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/OrganizationSyncDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangePublicFoldersDto = {
  type: 'object',
  properties: {
    PFList: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExchangePublicFolderDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangePublicFolderDto = {
  required: ['OrganizationId', 'PFMailbox', 'PFName'],
  type: 'object',
  properties: {
    PublicFolderId: {
      type: 'integer',
      format: 'int32',
    },
    PFName: {
      type: 'string',
    },
    PFMailbox: {
      type: 'string',
    },
    EmailID: {
      type: 'string',
    },
    OUPath: {
      type: 'string',
    },
    TargetOU: {
      type: 'string',
    },
    AccessRight: {
      type: 'string',
    },
    NewAccessRight: {
      type: 'string',
    },
    OldAccessRight: {
      type: 'string',
    },
    DoForAllUsers: {
      type: 'boolean',
    },
    IsMailEnabled: {
      type: 'boolean',
    },
    PublicFolderType: {
      type: 'string',
    },
    Identity: {
      type: 'string',
    },
    Quota: {
      type: 'string',
    },
    OrganizationName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    MailDomainName: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    Flag: {
      type: 'string',
    },
    OrganizationMSOLId: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangePublicFolderDto_List = {
  required: ['OrganizationId', 'PFMailbox', 'PFName'],
  type: 'object',
  properties: {
    PublicFolderId: {
      type: 'integer',
      format: 'int32',
    },
    PFName: {
      type: 'string',
    },
    PFMailbox: {
      type: 'string',
    },
    EmailID: {
      type: 'string',
    },
    OUPath: {
      type: 'string',
    },
    TargetOU: {
      type: 'string',
    },
    AccessRight: {
      type: 'string',
    },
    NewAccessRight: {
      type: 'string',
    },
    OldAccessRight: {
      type: 'string',
    },
    DoForAllUsers: {
      type: 'boolean',
    },
    IsMailEnabled: {
      type: 'boolean',
    },
    PublicFolderType: {
      type: 'string',
    },
    Identity: {
      type: 'string',
    },
    Quota: {
      type: 'string',
    },
    OrganizationName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    MailDomainName: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    Flag: {
      type: 'string',
    },
    OrganizationMSOLId: {
      type: 'string',
    },
  },
} as const;

export const $ExchangePublicFolderDto_Request = {
  required: ['OrganizationId', 'PFMailbox', 'PFName'],
  type: 'object',
  properties: {
    PFName: {
      type: 'string',
    },
    PFMailbox: {
      type: 'string',
    },
    EmailID: {
      type: 'string',
      description:
        "Email Id value depends on 'IsMailEnabled'. If 'IsMailEnabled' is set to true emailId should be provided.",
    },
    IsMailEnabled: {
      type: 'boolean',
    },
    PublicFolderType: {
      type: 'string',
      description:
        "You can get public folder type by calling 'GET /system-entities/exchange/public-folder-types'.",
      enum: ['mail', 'contact', 'calendar', 'task'],
    },
    Quota: {
      type: 'string',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $ExchangePublicFolderGeneralPropertiesDto = {
  type: 'object',
  properties: {
    PublicFolderId: {
      type: 'integer',
      format: 'int32',
    },
    ProhibitSend: {
      type: 'integer',
      format: 'int32',
    },
    WarnAt: {
      type: 'integer',
      format: 'int32',
    },
    MaxItemSize: {
      type: 'integer',
      format: 'int32',
    },
    RetentionDays: {
      type: 'integer',
      format: 'int32',
    },
    AgeLimitsDays: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangePublicFolderGeneralPropertiesDto_Request = {
  type: 'object',
  properties: {
    ProhibitSend: {
      type: 'integer',
      format: 'int32',
    },
    WarnAt: {
      type: 'integer',
      format: 'int32',
    },
    MaxItemSize: {
      type: 'integer',
      format: 'int32',
    },
    RetentionDays: {
      type: 'integer',
      format: 'int32',
    },
    AgeLimitsDays: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangePublicFolderAdvancedPropertiesDto = {
  required: ['DisplayName', 'MaxIncomingMsgSize', 'MaxOutgoingMsgSize'],
  type: 'object',
  properties: {
    PublicFolderId: {
      type: 'integer',
      format: 'int32',
    },
    MaxIncomingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    MaxOutgoingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    HideFromAddressBook: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangePublicFolderAdvancedPropertiesDto_Request = {
  required: ['DisplayName', 'MaxIncomingMsgSize', 'MaxOutgoingMsgSize'],
  type: 'object',
  properties: {
    PublicFolderId: {
      type: 'integer',
      format: 'int32',
    },
    MaxIncomingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    MaxOutgoingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    HideFromAddressBook: {
      type: 'boolean',
    },
  },
} as const;

export const $ExchangePFUsersListDto = {
  type: 'object',
  properties: {
    TotalCount: {
      type: 'string',
    },
    PFUsersList: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExchangePFUserDto:List',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangePFUserDto = {
  type: 'object',
  properties: {
    PublicFolderId: {
      type: 'integer',
      format: 'int32',
    },
    UserName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    Permission: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangePFUserDto_List = {
  type: 'object',
  properties: {
    PublicFolderId: {
      type: 'integer',
      format: 'int32',
    },
    UserName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    Permission: {
      type: 'string',
    },
  },
} as const;

export const $UpdatePFClientPermission = {
  required: ['NewAccessRight', 'OldAccessRight'],
  type: 'object',
  properties: {
    PublicFolderId: {
      type: 'integer',
      format: 'int32',
    },
    NewAccessRight: {
      type: 'string',
    },
    OldAccessRight: {
      type: 'string',
    },
    ClientEmailAddress: {
      type: 'string',
    },
    DoForAllUsers: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $UpdatePFClientPermission_Request = {
  required: ['NewAccessRight', 'OldAccessRight'],
  type: 'object',
  properties: {
    NewAccessRight: {
      type: 'string',
    },
    OldAccessRight: {
      type: 'string',
    },
    ClientEmailAddress: {
      type: 'string',
    },
    DoForAllUsers: {
      type: 'boolean',
    },
  },
} as const;

export const $ExchangePublicFolderForwardingDto = {
  required: ['MailboxForwardAddress'],
  type: 'object',
  properties: {
    PublicFolderId: {
      type: 'integer',
      format: 'int32',
    },
    ForwardingUserOrgName: {
      type: 'string',
    },
    UserIdentity: {
      type: 'string',
    },
    ForwardType: {
      type: 'string',
    },
    MailboxForwardAddress: {
      type: 'string',
    },
    DeliverToMailboxAndForward: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangePublicFolderForwardingDto_Request = {
  required: ['MailboxForwardAddress'],
  type: 'object',
  properties: {
    PublicFolderId: {
      type: 'integer',
      format: 'int32',
    },
    ForwardingUserOrgName: {
      type: 'string',
    },
    UserIdentity: {
      type: 'string',
    },
    ForwardType: {
      type: 'string',
    },
    MailboxForwardAddress: {
      type: 'string',
    },
    DeliverToMailboxAndForward: {
      type: 'boolean',
    },
  },
} as const;

export const $ExchangePublicFolderEnableDisableDto = {
  type: 'object',
  properties: {
    PublicFolderId: {
      type: 'integer',
      format: 'int32',
    },
    IsMailEnabled: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangePublicFolderEnableDisableDto_Request = {
  type: 'object',
  properties: {
    IsMailEnabled: {
      type: 'boolean',
    },
  },
} as const;

export const $RolesDto = {
  type: 'object',
  properties: {
    Roles: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/RoleDto:List',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $RoleDto = {
  type: 'object',
  properties: {
    RoleId: {
      type: 'integer',
      format: 'int32',
    },
    SystemName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    ServerType: {
      type: 'string',
    },
    Platform: {
      type: 'string',
    },
    RemoteOnly: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $RoleDto_List = {
  type: 'object',
  properties: {
    RoleId: {
      type: 'integer',
      format: 'int32',
    },
    SystemName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    ServerType: {
      type: 'string',
    },
    Platform: {
      type: 'string',
    },
    RemoteOnly: {
      type: 'boolean',
    },
  },
} as const;

export const $ServerRolesDto = {
  type: 'object',
  properties: {
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoles: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ServerRoleDto:List',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ServersDto = {
  type: 'object',
  properties: {
    Servers: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ServerDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ServerDto = {
  required: ['DisplayName', 'SystemName'],
  type: 'object',
  properties: {
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    SystemName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    Platform: {
      type: 'string',
    },
    ServerIp: {
      type: 'string',
    },
    Providers: {
      type: 'string',
    },
    Status: {
      type: 'string',
    },
    BuildNumber: {
      type: 'string',
    },
    UserName: {
      type: 'string',
    },
    UserPassword: {
      type: 'string',
    },
    IsPrimary: {
      type: 'boolean',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    RoleId: {
      type: 'integer',
      format: 'int32',
    },
    ReleaseDate: {
      type: 'string',
      format: 'date-time',
    },
    Guid: {
      type: 'string',
    },
    LicenseStatus: {
      type: 'string',
    },
    UsedQuantity: {
      type: 'integer',
      format: 'int32',
    },
    OnPremises: {
      type: 'boolean',
    },
    RbxBackupFrequency: {
      type: 'string',
    },
    RbxLastBackupTime: {
      type: 'string',
      format: 'date-time',
    },
    RbxLastBackupStatus: {
      type: 'string',
    },
    RbxRestoreStatus: {
      type: 'string',
    },
    RbxOperationPercentage: {
      type: 'integer',
      format: 'int32',
    },
    RbxRestoreTime: {
      type: 'string',
      format: 'date-time',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ServerDto_List = {
  required: ['DisplayName', 'SystemName'],
  type: 'object',
  properties: {
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    SystemName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    Platform: {
      type: 'string',
    },
    ServerIp: {
      type: 'string',
    },
    Providers: {
      type: 'string',
    },
    Status: {
      type: 'string',
    },
    BuildNumber: {
      type: 'string',
    },
    UserName: {
      type: 'string',
    },
    UserPassword: {
      type: 'string',
    },
    IsPrimary: {
      type: 'boolean',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    RoleId: {
      type: 'integer',
      format: 'int32',
    },
    ReleaseDate: {
      type: 'string',
      format: 'date-time',
    },
    Guid: {
      type: 'string',
    },
    LicenseStatus: {
      type: 'string',
    },
    UsedQuantity: {
      type: 'integer',
      format: 'int32',
    },
    OnPremises: {
      type: 'boolean',
    },
    RbxBackupFrequency: {
      type: 'string',
    },
    RbxLastBackupTime: {
      type: 'string',
      format: 'date-time',
    },
    RbxLastBackupStatus: {
      type: 'string',
    },
    RbxRestoreStatus: {
      type: 'string',
    },
    RbxOperationPercentage: {
      type: 'integer',
      format: 'int32',
    },
    RbxRestoreTime: {
      type: 'string',
      format: 'date-time',
    },
  },
} as const;

export const $PlansDto = {
  type: 'object',
  properties: {
    Plans: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/PlanDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $PlanDto_List = {
  required: ['DisplayName'],
  type: 'object',
  properties: {
    PlanId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    Description: {
      type: 'string',
    },
    CancelationPolicy: {
      type: 'string',
    },
    IsAvailable: {
      type: 'boolean',
    },
    VisibleToUsers: {
      type: 'boolean',
    },
    SystemName: {
      type: 'string',
    },
    DateAdded: {
      type: 'string',
      format: 'date-time',
    },
    Resources: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/PlanResourceDto',
      },
    },
    ResourceComponents: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/PlanResourceComponentDto',
      },
    },
    SoldInstances: {
      type: 'integer',
      format: 'int32',
    },
    VisibleToUserIds: {
      type: 'array',
      items: {
        type: 'integer',
        format: 'int32',
      },
    },
  },
} as const;

export const $PlanDto_Request = {
  required: ['DisplayName'],
  type: 'object',
  properties: {
    DisplayName: {
      type: 'string',
      description: 'Name of the new plan.',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    Description: {
      type: 'string',
    },
    CancelationPolicy: {
      type: 'string',
    },
    IsAvailable: {
      type: 'boolean',
    },
    VisibleToUsers: {
      type: 'boolean',
    },
    Resources: {
      type: 'array',
      description:
        "You can get plan resources by calling 'GET /addons' and composite resources by calling 'GET /composite-resources'.",
      items: {
        $ref: '#/components/schemas/PlanResourceDto',
      },
    },
    ResourceComponents: {
      type: 'array',
      description:
        "You can get plan resource component by calling 'GET /virtualization/base-os-types'.",
      items: {
        $ref: '#/components/schemas/PlanResourceComponentDto',
      },
    },
    SoldInstances: {
      type: 'integer',
      format: 'int32',
    },
    VisibleToUserIds: {
      type: 'array',
      items: {
        type: 'integer',
        format: 'int32',
      },
    },
  },
} as const;

export const $PlanDto = {
  required: ['DisplayName'],
  type: 'object',
  properties: {
    PlanId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    Description: {
      type: 'string',
    },
    CancelationPolicy: {
      type: 'string',
    },
    IsAvailable: {
      type: 'boolean',
    },
    VisibleToUsers: {
      type: 'boolean',
    },
    SystemName: {
      type: 'string',
    },
    DateAdded: {
      type: 'string',
      format: 'date-time',
    },
    Resources: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/PlanResourceDto',
      },
    },
    ResourceComponents: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/PlanResourceComponentDto',
      },
    },
    SoldInstances: {
      type: 'integer',
      format: 'int32',
    },
    VisibleToUserIds: {
      type: 'array',
      items: {
        type: 'integer',
        format: 'int32',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $PlanDto_Copy = {
  required: ['DisplayName'],
  type: 'object',
  properties: {
    PlanId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    Description: {
      type: 'string',
    },
    CancelationPolicy: {
      type: 'string',
    },
    IsAvailable: {
      type: 'boolean',
    },
    VisibleToUsers: {
      type: 'boolean',
    },
    SystemName: {
      type: 'string',
    },
    DateAdded: {
      type: 'string',
      format: 'date-time',
    },
    Resources: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/PlanResourceDto',
      },
    },
    ResourceComponents: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/PlanResourceComponentDto',
      },
    },
    BillingDetails: {
      $ref: '#/components/schemas/ItemBillingDetailsDto:List',
    },
    SoldInstances: {
      type: 'integer',
      format: 'int32',
    },
    VisibleToUserIds: {
      type: 'array',
      items: {
        type: 'integer',
        format: 'int32',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $PlanResourceDto = {
  type: 'object',
  properties: {
    ResourceId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    ProviderName: {
      type: 'string',
    },
    Quantity: {
      type: 'integer',
      format: 'int32',
    },
    IsComposite: {
      type: 'boolean',
    },
  },
} as const;

export const $PlanResourceComponentDto = {
  type: 'object',
  properties: {
    ResourceId: {
      type: 'integer',
      format: 'int32',
    },
    ComponentName: {
      type: 'string',
    },
    Value: {
      type: 'string',
    },
  },
} as const;

export const $ExgMailboxesDto = {
  type: 'object',
  properties: {
    Mailboxes: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExgMailboxDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExgMailboxDto_List = {
  required: ['DisplayName', 'MailboxType', 'MaildomainName'],
  type: 'object',
  properties: {
    MailboxId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    MailDomainId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxType: {
      type: 'string',
    },
    SystemName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    IsNewUser: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    MaildomainName: {
      type: 'string',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    ActiveSync: {
      type: 'boolean',
    },
    ActiveSyncPolicy: {
      type: 'string',
    },
    IMAP: {
      type: 'boolean',
    },
    POP: {
      type: 'boolean',
    },
    MAPI: {
      type: 'boolean',
    },
    OWA: {
      type: 'boolean',
    },
    MailboxSize: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    HideFromAddressBook: {
      type: 'boolean',
    },
    MaxIncomingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    MaxOutgoingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    ProhibitSend: {
      type: 'integer',
      format: 'int32',
    },
    WarnAt: {
      type: 'integer',
      format: 'int32',
    },
    IsDisabled: {
      type: 'boolean',
    },
    GeneralProfile: {
      $ref: '#/components/schemas/UserGeneralProfileDto',
    },
    Flag: {
      type: 'string',
    },
    OfficeLocation: {
      type: 'string',
    },
    SAMAccount: {
      type: 'string',
    },
    PrimarySMTPAddress: {
      type: 'string',
    },
    Guid: {
      type: 'string',
    },
    MailboxLitigationHoldEnabled: {
      type: 'boolean',
    },
    ArchiveMailboxId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxDatabase: {
      type: 'string',
    },
    IsResourceMailbox: {
      type: 'boolean',
    },
    SubOU: {
      type: 'string',
    },
    OrganizationMSOLId: {
      type: 'string',
    },
    LinkedMasterAccount: {
      type: 'string',
    },
    IsNewLinkedMasterAccount: {
      type: 'boolean',
    },
    ActiveDirectoryTrustId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $ExgAddMailboxDto_Request = {
  required: ['DisplayName', 'MailboxType', 'MaildomainName'],
  type: 'object',
  properties: {
    CreateNewUser: {
      type: 'boolean',
      description: 'Set it true to create new user.',
    },
    MailboxType: {
      type: 'string',
      enum: ['usermailbox', 'sharedmailbox', 'linkedmailbox'],
    },
    DisplayName: {
      type: 'string',
    },
    Password: {
      type: 'string',
      description: "Password required when 'CreateNewUser' is set true.",
    },
    MaildomainName: {
      type: 'string',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    ActiveSync: {
      type: 'boolean',
    },
    ActiveSyncPolicy: {
      type: 'string',
    },
    IMAP: {
      type: 'boolean',
    },
    POP: {
      type: 'boolean',
    },
    MAPI: {
      type: 'boolean',
    },
    OWA: {
      type: 'boolean',
    },
    MailboxSize: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    HideFromAddressBook: {
      type: 'boolean',
    },
    MaxIncomingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    MaxOutgoingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    ProhibitSend: {
      type: 'integer',
      format: 'int32',
    },
    WarnAt: {
      type: 'integer',
      format: 'int32',
    },
    GeneralProfile: {
      $ref: '#/components/schemas/UserGeneralProfileDto',
    },
    LinkedMasterAccount: {
      type: 'string',
      description:
        "LinkedMasterAccount required when 'MailboxType' is set  as 'linkedmailbox'.",
    },
    IsNewLinkedMasterAccount: {
      type: 'boolean',
      description:
        "IsNewLinkedMasterAccount required when 'MailboxType' is set  as 'linkedmailbox'. Set 'IsNewLinkedMasterAccount' true to create new user. ",
    },
    ActiveDirectoryTrustId: {
      type: 'integer',
      description:
        "ActiveDirectoryTrustId required when 'MailboxType' is set  as 'linkedmailbox'.",
      format: 'int32',
    },
  },
} as const;

export const $ExgAddMailboxDto_Add = {
  required: ['DisplayName', 'MailboxType', 'MaildomainName'],
  type: 'object',
  properties: {
    CreateNewUser: {
      type: 'boolean',
    },
    ExistingMailboxUserName: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    MailDomainId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxType: {
      type: 'string',
    },
    SystemName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    IsNewUser: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    MaildomainName: {
      type: 'string',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    Flag: {
      type: 'string',
    },
    OfficeLocation: {
      type: 'string',
    },
    SAMAccount: {
      type: 'string',
    },
    PrimarySMTPAddress: {
      type: 'string',
    },
    Guid: {
      type: 'string',
    },
    MailboxLitigationHoldEnabled: {
      type: 'boolean',
    },
    ArchiveMailboxId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxDatabase: {
      type: 'string',
    },
    IsResourceMailbox: {
      type: 'boolean',
    },
    SubOU: {
      type: 'string',
    },
    OrganizationMSOLId: {
      type: 'string',
    },
    LinkedMasterAccount: {
      type: 'string',
    },
    IsNewLinkedMasterAccount: {
      type: 'boolean',
    },
    ActiveDirectoryTrustId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $ExgMailboxDto = {
  required: ['DisplayName', 'MailboxType', 'MaildomainName'],
  type: 'object',
  properties: {
    MailboxId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    MailDomainId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxType: {
      type: 'string',
    },
    SystemName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    IsNewUser: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    MaildomainName: {
      type: 'string',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    ActiveSync: {
      type: 'boolean',
    },
    ActiveSyncPolicy: {
      type: 'string',
    },
    IMAP: {
      type: 'boolean',
    },
    POP: {
      type: 'boolean',
    },
    MAPI: {
      type: 'boolean',
    },
    OWA: {
      type: 'boolean',
    },
    MailboxSize: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    HideFromAddressBook: {
      type: 'boolean',
    },
    MaxIncomingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    MaxOutgoingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    ProhibitSend: {
      type: 'integer',
      format: 'int32',
    },
    WarnAt: {
      type: 'integer',
      format: 'int32',
    },
    IsDisabled: {
      type: 'boolean',
    },
    GeneralProfile: {
      $ref: '#/components/schemas/UserGeneralProfileDto',
    },
    Flag: {
      type: 'string',
    },
    OfficeLocation: {
      type: 'string',
    },
    SAMAccount: {
      type: 'string',
    },
    PrimarySMTPAddress: {
      type: 'string',
    },
    Guid: {
      type: 'string',
    },
    MailboxLitigationHoldEnabled: {
      type: 'boolean',
    },
    ArchiveMailboxId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxDatabase: {
      type: 'string',
    },
    IsResourceMailbox: {
      type: 'boolean',
    },
    SubOU: {
      type: 'string',
    },
    OrganizationMSOLId: {
      type: 'string',
    },
    LinkedMasterAccount: {
      type: 'string',
    },
    IsNewLinkedMasterAccount: {
      type: 'boolean',
    },
    ActiveDirectoryTrustId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExgMailboxEnableDisableDto_Request = {
  type: 'object',
  properties: {
    IsDisabled: {
      type: 'boolean',
    },
  },
} as const;

export const $MailboxActiveSyncSettingsDto = {
  type: 'object',
  properties: {
    IsActivated: {
      type: 'boolean',
    },
    ActiveSyncMailboxPolicy: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    ActivesyncEnabled: {
      type: 'string',
    },
    IsDefault: {
      type: 'string',
    },
    Identity: {
      type: 'string',
    },
    Name: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $UpdateMailboxASyncDto_Request = {
  type: 'object',
  properties: {
    IsActivated: {
      type: 'boolean',
    },
    ActiveSyncMailboxPolicy: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeArchiveMailboxListDto = {
  type: 'object',
  properties: {
    ArchiveMailboxes: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExchangeArchiveMailboxDto:List',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeArchiveMailboxDto_List = {
  required: ['ArchiveDatabase', 'ArchiveQuota', 'ArchiveWarningQuota'],
  type: 'object',
  properties: {
    ArchiveDatabase: {
      type: 'string',
    },
    ArchiveName: {
      type: 'string',
    },
    ArchiveQuota: {
      type: 'string',
    },
    ArchiveWarningQuota: {
      type: 'string',
    },
    ArchiveMailboxSize: {
      type: 'string',
    },
    IsDisabledArchiveMailbox: {
      type: 'string',
    },
    RoleName: {
      type: 'string',
    },
    Count: {
      type: 'integer',
      format: 'int32',
    },
    TotalCount: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $UpdateArchiveMailboxDto_Request = {
  type: 'object',
  properties: {
    ArchiveQuota: {
      type: 'string',
    },
    ArchiveWarningQuota: {
      type: 'string',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxServerType: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeArchiveMailboxDto = {
  required: ['ArchiveDatabase', 'ArchiveQuota', 'ArchiveWarningQuota'],
  type: 'object',
  properties: {
    ArchiveDatabase: {
      type: 'string',
    },
    ArchiveName: {
      type: 'string',
    },
    ArchiveQuota: {
      type: 'string',
    },
    ArchiveWarningQuota: {
      type: 'string',
    },
    ArchiveMailboxSize: {
      type: 'string',
    },
    IsDisabledArchiveMailbox: {
      type: 'string',
    },
    RoleName: {
      type: 'string',
    },
    Count: {
      type: 'integer',
      format: 'int32',
    },
    TotalCount: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $CreateArchiveMailboxDto_Request = {
  type: 'object',
  properties: {
    MailboxId: {
      type: 'integer',
      format: 'int32',
    },
    ArchiveMailboxDatabase: {
      type: 'string',
    },
    ArchiveQuota: {
      type: 'string',
    },
    ArchiveWarningQuota: {
      type: 'string',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxServerType: {
      type: 'string',
    },
  },
} as const;

export const $UpdateArchiveMailboxStatusDto_Request = {
  type: 'object',
  properties: {
    IsDisabledArchiveMailbox: {
      type: 'boolean',
    },
  },
} as const;

export const $UpdateUserGeneralPropertiesDto = {
  type: 'object',
  properties: {
    MailboxId: {
      type: 'integer',
      format: 'int32',
    },
    GeneralProfile: {
      $ref: '#/components/schemas/UserGeneralProfileDto',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $UpdateUserGeneralPropertiesDto_Request = {
  type: 'object',
  properties: {
    GeneralProfile: {
      $ref: '#/components/schemas/UserGeneralProfileDto',
    },
  },
} as const;

export const $UserMailboxPasswordDto_Request = {
  required: ['Password'],
  type: 'object',
  properties: {
    Password: {
      type: 'string',
    },
  },
} as const;

export const $UserMailboxEmailAddressesDto = {
  type: 'object',
  properties: {
    EmailAddresses: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/UserMailboxEmailAddressDto:List',
      },
    },
    MailboxId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $UserMailboxEmailAddressDto_List = {
  type: 'object',
  properties: {
    EmailAddress: {
      type: 'string',
    },
    IsPrimary: {
      type: 'boolean',
    },
  },
} as const;

export const $SetPrimaryEmailAddressDto_Request = {
  type: 'object',
  properties: {
    EmailAddress: {
      type: 'string',
    },
  },
} as const;

export const $AddUserMailboxEmailAddressDto_Request = {
  type: 'object',
  properties: {
    EmailAddress: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeRecipientListDto_MailboxRequest = {
  type: 'object',
  properties: {
    ExchangeRecipients: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExchangeRecipientDto',
      },
    },
    PublicFolderId: {
      type: 'integer',
      format: 'int32',
    },
    IsAllSender: {
      type: 'boolean',
    },
    RecipientId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $UserMailboxAdvancedPropertiesDto = {
  type: 'object',
  properties: {
    MailboxId: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxSize: {
      type: 'integer',
      format: 'int32',
    },
    ProhibitSend: {
      type: 'integer',
      format: 'int32',
    },
    WarnAt: {
      type: 'integer',
      format: 'int32',
    },
    MaxIncomingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    MaxOutgoingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    RetentionDays: {
      type: 'integer',
      format: 'int32',
    },
    IMAP: {
      type: 'boolean',
    },
    POP: {
      type: 'boolean',
    },
    MAPI: {
      type: 'boolean',
    },
    OWA: {
      type: 'boolean',
    },
    HideFromAddressBook: {
      type: 'boolean',
    },
    IsRetentionDefault: {
      type: 'boolean',
    },
    IsPermanentDelete: {
      type: 'boolean',
    },
    MailboxDatabase: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $UserMailboxAdvancedPropertiesDto_Request = {
  type: 'object',
  properties: {
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxSize: {
      type: 'integer',
      format: 'int32',
    },
    ProhibitSend: {
      type: 'integer',
      format: 'int32',
    },
    WarnAt: {
      type: 'integer',
      format: 'int32',
    },
    MaxIncomingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    MaxOutgoingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    RetentionDays: {
      type: 'integer',
      format: 'int32',
    },
    IMAP: {
      type: 'boolean',
    },
    POP: {
      type: 'boolean',
    },
    MAPI: {
      type: 'boolean',
    },
    OWA: {
      type: 'boolean',
    },
    HideFromAddressBook: {
      type: 'boolean',
    },
    IsRetentionDefault: {
      type: 'boolean',
    },
    IsPermanentDelete: {
      type: 'boolean',
    },
    MailboxDatabase: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeMailboxForwardingDto = {
  type: 'object',
  properties: {
    MailboxId: {
      type: 'integer',
      format: 'int32',
    },
    ForwardingUserOrgName: {
      type: 'string',
    },
    UserIdentity: {
      type: 'string',
    },
    ForwardType: {
      type: 'string',
    },
    MailboxForwardAddress: {
      type: 'string',
      description: `Forwarding would be enabled if MailboxForwardAddress has some valid email address is passed.
            Forwarding would be disabled if this property is empty or null.`,
    },
    DeliverToMailboxAndForward: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeMailboxForwardingDto_Request = {
  type: 'object',
  properties: {
    ForwardingUserOrgName: {
      type: 'string',
    },
    UserIdentity: {
      type: 'string',
    },
    ForwardType: {
      type: 'string',
    },
    MailboxForwardAddress: {
      type: 'string',
      description: `Forwarding would be enabled if MailboxForwardAddress has some valid email address is passed.
            Forwarding would be disabled if this property is empty or null.`,
    },
    DeliverToMailboxAndForward: {
      type: 'boolean',
    },
  },
} as const;

export const $ExchangeMailboxStatsDto = {
  type: 'object',
  properties: {
    ItemCount: {
      type: 'string',
    },
    TotalItemSize: {
      type: 'string',
    },
    DeletedItemCount: {
      type: 'string',
    },
    TotalDeletedItemSize: {
      type: 'string',
    },
    LastLogonTime: {
      type: 'string',
    },
    LastLogoffTime: {
      type: 'string',
    },
    Database: {
      type: 'string',
    },
    StorageLimitStatus: {
      type: 'string',
    },
    LastLoggedOnUserAccount: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $LitigationHoldSettingsDto = {
  type: 'object',
  properties: {
    MailboxId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    ApiUserId: {
      type: 'integer',
      format: 'int32',
    },
    LitigationHoldEnabled: {
      type: 'boolean',
    },
    RetentionUrl: {
      type: 'string',
    },
    RetentionComment: {
      type: 'string',
    },
    LitigationHoldDuration: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $LitigationHoldSettingsDto_Request = {
  type: 'object',
  properties: {
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    LitigationHoldEnabled: {
      type: 'boolean',
    },
    RetentionUrl: {
      type: 'string',
    },
    RetentionComment: {
      type: 'string',
    },
    LitigationHoldDuration: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeBulkUserListDto = {
  type: 'object',
  properties: {
    UsersNotCreated: {
      type: 'integer',
      format: 'int32',
    },
    ExchangeBulkUsers: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExchangeBulkUserDto:List',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeBulkUserDto_List = {
  type: 'object',
  properties: {
    FirstName: {
      type: 'string',
    },
    LastName: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    UserName: {
      type: 'string',
    },
    EmailAddress: {
      type: 'string',
    },
    Feasibility: {
      type: 'string',
    },
    StatusMessage: {
      type: 'string',
    },
    PlanId: {
      type: 'string',
    },
    Feasible: {
      type: 'boolean',
    },
    IsCreated: {
      type: 'boolean',
    },
    MailboxSize: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $ExgBulkMailboxesDto_Request = {
  type: 'object',
  properties: {
    Mailboxes: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExgBulkMailboxDto:List',
      },
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    MailDomainName: {
      type: 'string',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    Country: {
      type: 'integer',
      format: 'int32',
    },
    IMAP: {
      type: 'boolean',
    },
    POP: {
      type: 'boolean',
    },
    MAPI: {
      type: 'boolean',
    },
    OWA: {
      type: 'boolean',
    },
    ActiveSync: {
      type: 'boolean',
    },
    ActiveSyncPolicy: {
      type: 'string',
    },
    HideFromAddressBook: {
      type: 'boolean',
    },
    MaxIncomingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    MaxOutgoingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    IsDisabled: {
      type: 'boolean',
    },
    IsActivated: {
      type: 'boolean',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationName: {
      type: 'string',
    },
    Flag: {
      type: 'string',
    },
    ProhibitSend: {
      type: 'integer',
      format: 'int32',
    },
    WarnAt: {
      type: 'integer',
      format: 'int32',
    },
    SAMAccount: {
      type: 'string',
    },
    MailboxLitigationHoldEnabled: {
      type: 'boolean',
    },
    MailboxDatabase: {
      type: 'string',
    },
    OfficeLocation: {
      type: 'string',
    },
    FileName: {
      type: 'string',
    },
    City: {
      type: 'string',
    },
    ZipCode: {
      type: 'string',
    },
    State: {
      type: 'string',
    },
    CountryId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $ExgBulkMailboxDto_List = {
  type: 'object',
  properties: {
    Password: {
      type: 'string',
    },
    EmailAddress: {
      type: 'string',
    },
    FirstName: {
      type: 'string',
    },
    LastName: {
      type: 'string',
    },
    MailboxSize: {
      type: 'integer',
      format: 'int32',
    },
    OfficeLocation: {
      type: 'string',
    },
    City: {
      type: 'string',
    },
    ZipCode: {
      type: 'string',
    },
    State: {
      type: 'string',
    },
    Country: {
      type: 'string',
    },
    Feasible: {
      type: 'boolean',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    IMAP: {
      type: 'boolean',
    },
    POP: {
      type: 'boolean',
    },
    MAPI: {
      type: 'boolean',
    },
    OWA: {
      type: 'boolean',
    },
    ActiveSync: {
      type: 'boolean',
    },
    MaxIncomingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    MaxOutgoingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    ProhibitSend: {
      type: 'integer',
      format: 'int32',
    },
    WarnAt: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $ExgBulkMailboxDto = {
  type: 'object',
  properties: {
    Password: {
      type: 'string',
    },
    EmailAddress: {
      type: 'string',
    },
    FirstName: {
      type: 'string',
    },
    LastName: {
      type: 'string',
    },
    MailboxSize: {
      type: 'integer',
      format: 'int32',
    },
    OfficeLocation: {
      type: 'string',
    },
    City: {
      type: 'string',
    },
    ZipCode: {
      type: 'string',
    },
    State: {
      type: 'string',
    },
    Country: {
      type: 'string',
    },
    Feasible: {
      type: 'boolean',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    IMAP: {
      type: 'boolean',
    },
    POP: {
      type: 'boolean',
    },
    MAPI: {
      type: 'boolean',
    },
    OWA: {
      type: 'boolean',
    },
    ActiveSync: {
      type: 'boolean',
    },
    MaxIncomingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    MaxOutgoingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    ProhibitSend: {
      type: 'integer',
      format: 'int32',
    },
    WarnAt: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExgEditBulkMailboxDto_Request = {
  type: 'object',
  properties: {
    Property: {
      type: 'string',
    },
    IsAllUsers: {
      type: 'boolean',
    },
    ExchangeRecipients: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExchangeRecipientDto',
      },
    },
    MailboxSize: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    IMAP: {
      type: 'boolean',
    },
    POP: {
      type: 'boolean',
    },
    MAPI: {
      type: 'boolean',
    },
    OWA: {
      type: 'boolean',
    },
    ActiveSync: {
      type: 'boolean',
    },
    HideFromAddressBook: {
      type: 'boolean',
    },
    MaxIncomingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    MaxOutgoingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    ProhibitSend: {
      type: 'integer',
      format: 'int32',
    },
    WarnAt: {
      type: 'integer',
      format: 'int32',
    },
    IsRetentionDefault: {
      type: 'boolean',
    },
    IsPermanentDelete: {
      type: 'boolean',
    },
    RetentionDays: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeMailboxOutOfOfficeDto = {
  type: 'object',
  properties: {
    MailboxId: {
      type: 'integer',
      format: 'int32',
    },
    EnableAutoReply: {
      type: 'boolean',
    },
    SetLimit: {
      type: 'boolean',
    },
    SendExternalMessage: {
      type: 'boolean',
    },
    AutoReplyState: {
      type: 'string',
    },
    InternalMessage: {
      type: 'string',
    },
    ExternalMessage: {
      type: 'string',
    },
    ExternalAudience: {
      type: 'string',
    },
    StartDateTime: {
      type: 'string',
      format: 'date-time',
    },
    EndDateTime: {
      type: 'string',
      format: 'date-time',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeMailboxOutOfOfficeDto_Request = {
  type: 'object',
  properties: {
    EnableAutoReply: {
      type: 'boolean',
    },
    SetLimit: {
      type: 'boolean',
    },
    SendExternalMessage: {
      type: 'boolean',
    },
    AutoReplyState: {
      type: 'string',
    },
    InternalMessage: {
      type: 'string',
    },
    ExternalMessage: {
      type: 'string',
    },
    ExternalAudience: {
      type: 'string',
    },
    StartDateTime: {
      type: 'string',
      format: 'date-time',
    },
    EndDateTime: {
      type: 'string',
      format: 'date-time',
    },
  },
} as const;

export const $ExchangeResourceMailboxesDto = {
  type: 'object',
  properties: {
    Mailboxes: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ExchangeResourceMailboxDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeResourceMailboxDto_List = {
  required: ['DisplayName', 'MailDomainName', 'MailboxType'],
  type: 'object',
  properties: {
    MailboxId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    MailDomainId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxType: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    SystemName: {
      type: 'string',
    },
    MailDomainName: {
      type: 'string',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    Country: {
      type: 'integer',
      format: 'int32',
    },
    IMAP: {
      type: 'boolean',
    },
    POP: {
      type: 'boolean',
    },
    MAPI: {
      type: 'boolean',
    },
    OWA: {
      type: 'boolean',
    },
    MailboxSize: {
      type: 'integer',
      format: 'int32',
    },
    HideFromAddressBook: {
      type: 'boolean',
    },
    MaxIncomingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    MaxOutgoingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    IsDisabled: {
      type: 'boolean',
    },
    IsActivated: {
      type: 'boolean',
    },
    Password: {
      type: 'string',
    },
    ActiveSync: {
      type: 'boolean',
    },
    ActiveSyncPolicy: {
      type: 'string',
    },
    GeneralProfile: {
      $ref: '#/components/schemas/UserGeneralProfileDto',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationName: {
      type: 'string',
    },
    Flag: {
      type: 'string',
    },
    ProhibitSend: {
      type: 'integer',
      format: 'int32',
    },
    WarnAt: {
      type: 'integer',
      format: 'int32',
    },
    SAMAccount: {
      type: 'string',
    },
    MailboxLitigationHoldEnabled: {
      type: 'boolean',
    },
    ArchiveMailboxId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxDatabase: {
      type: 'string',
    },
    OfficeLocation: {
      type: 'string',
    },
    OrganizationMSOLId: {
      type: 'string',
    },
  },
} as const;

export const $ExchangeResourceMailboxDto_Request = {
  required: ['DisplayName', 'MailDomainName', 'MailboxType'],
  type: 'object',
  properties: {
    MailboxType: {
      type: 'string',
      description:
        "you can get mailbox types by calling 'GET /system-entities/exchange/resource-mailbox-types'.",
      enum: ['room', 'equipment'],
    },
    DisplayName: {
      type: 'string',
      description: 'Give display of resource mailbox.',
    },
    MailDomainName: {
      type: 'string',
      description:
        'Give maildomain name to attach with resource mailbox display name.',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    IMAP: {
      type: 'boolean',
    },
    POP: {
      type: 'boolean',
    },
    MAPI: {
      type: 'boolean',
    },
    OWA: {
      type: 'boolean',
    },
    MailboxSize: {
      type: 'integer',
      format: 'int32',
    },
    HideFromAddressBook: {
      type: 'boolean',
    },
    MaxIncomingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    MaxOutgoingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    GeneralProfile: {
      $ref: '#/components/schemas/UserGeneralProfileDto',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $ExchangeResourceMailboxDto = {
  required: ['DisplayName', 'MailDomainName', 'MailboxType'],
  type: 'object',
  properties: {
    MailboxId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    MailDomainId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxType: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    SystemName: {
      type: 'string',
    },
    MailDomainName: {
      type: 'string',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    Country: {
      type: 'integer',
      format: 'int32',
    },
    IMAP: {
      type: 'boolean',
    },
    POP: {
      type: 'boolean',
    },
    MAPI: {
      type: 'boolean',
    },
    OWA: {
      type: 'boolean',
    },
    MailboxSize: {
      type: 'integer',
      format: 'int32',
    },
    HideFromAddressBook: {
      type: 'boolean',
    },
    MaxIncomingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    MaxOutgoingMsgSize: {
      type: 'integer',
      format: 'int32',
    },
    IsDisabled: {
      type: 'boolean',
    },
    IsActivated: {
      type: 'boolean',
    },
    Password: {
      type: 'string',
    },
    ActiveSync: {
      type: 'boolean',
    },
    ActiveSyncPolicy: {
      type: 'string',
    },
    GeneralProfile: {
      $ref: '#/components/schemas/UserGeneralProfileDto',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationName: {
      type: 'string',
    },
    Flag: {
      type: 'string',
    },
    ProhibitSend: {
      type: 'integer',
      format: 'int32',
    },
    WarnAt: {
      type: 'integer',
      format: 'int32',
    },
    SAMAccount: {
      type: 'string',
    },
    MailboxLitigationHoldEnabled: {
      type: 'boolean',
    },
    ArchiveMailboxId: {
      type: 'integer',
      format: 'int32',
    },
    MailboxDatabase: {
      type: 'string',
    },
    OfficeLocation: {
      type: 'string',
    },
    OrganizationMSOLId: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ResourceDelegateListDto = {
  type: 'object',
  properties: {
    Username: {
      type: 'string',
    },
    ExchangeRecipients: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ResourceDelegateDto:List',
      },
    },
    RecordCount: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ResourceDelegateDto_List = {
  type: 'object',
  properties: {
    EmailAddress: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
  },
} as const;

export const $PolicyUserListDto = {
  type: 'object',
  properties: {
    Username: {
      type: 'string',
    },
    ExchangeRecipients: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/PolicyUserDto:List',
      },
    },
    RecordCount: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $PolicyUserDto_List = {
  type: 'object',
  properties: {
    EmailAddress: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
  },
} as const;

export const $ResourceMailboxPropertiesDto = {
  type: 'object',
  properties: {
    bIsAllRequestOutOfPolicyUpdated: {
      type: 'boolean',
    },
    bIsAllBookInPolicyUpdated: {
      type: 'boolean',
    },
    bIsAllRequestInPolicyUpdated: {
      type: 'boolean',
    },
    bIsAllowConflictsUpdated: {
      type: 'boolean',
    },
    bIsAutomateProcessingUpdated: {
      type: 'boolean',
    },
    bIsAllowRecurringMeetingsUpdated: {
      type: 'boolean',
    },
    bIsScheduleOnlyDuringWorkHoursUpdated: {
      type: 'boolean',
    },
    bIsEnforceSchedulingHorizonUpdated: {
      type: 'boolean',
    },
    bIsBookingWindowInDaysUpdated: {
      type: 'boolean',
    },
    bIsMaximumDurationInMinutesUpdated: {
      type: 'boolean',
    },
    bIsMaximumConflictInstancesUpdated: {
      type: 'boolean',
    },
    bIsConflictPercentageAllowedUpdated: {
      type: 'boolean',
    },
    bIsForwardRequestsToDelegatesUpdated: {
      type: 'boolean',
    },
    bIsDeleteAttachmentsUpdated: {
      type: 'boolean',
    },
    bIsDeleteCommentsUpdated: {
      type: 'boolean',
    },
    bIsDeleteSubjectUpdated: {
      type: 'boolean',
    },
    bIsDeleteNonCalendarItemsUpdated: {
      type: 'boolean',
    },
    bIsAddOrganizerToSubjectUpdated: {
      type: 'boolean',
    },
    bIsRemovePrivatePropertyUpdated: {
      type: 'boolean',
    },
    bIsOrganizerInfoUpdated: {
      type: 'boolean',
    },
    bIsAddAdditionalResponseUpdated: {
      type: 'boolean',
    },
    bIsTentativePendingApprovalUpdated: {
      type: 'boolean',
    },
    MailboxId: {
      type: 'integer',
      format: 'int32',
    },
    AllowConflicts: {
      type: 'boolean',
    },
    AutomateProcessing: {
      type: 'string',
    },
    AllowRecurringMeetings: {
      type: 'boolean',
    },
    ScheduleOnlyDuringWorkHours: {
      type: 'boolean',
    },
    EnforceSchedulingHorizon: {
      type: 'boolean',
    },
    BookingWindowInDays: {
      type: 'integer',
      format: 'int32',
    },
    MaximumDurationInMinutes: {
      type: 'integer',
      format: 'int32',
    },
    MaximumConflictInstances: {
      type: 'integer',
      format: 'int32',
    },
    ConflictPercentageAllowed: {
      type: 'integer',
      format: 'int32',
    },
    ForwardRequestsToDelegates: {
      type: 'boolean',
    },
    DeleteAttachments: {
      type: 'boolean',
    },
    DeleteComments: {
      type: 'boolean',
    },
    DeleteSubject: {
      type: 'boolean',
    },
    DeleteNonCalendarItems: {
      type: 'boolean',
    },
    AddOrganizerToSubject: {
      type: 'boolean',
    },
    RemovePrivateProperty: {
      type: 'boolean',
    },
    OrganizerInfo: {
      type: 'boolean',
    },
    AddAdditionalResponse: {
      type: 'boolean',
    },
    AdditionalResponse: {
      type: 'string',
    },
    TentativePendingApproval: {
      type: 'boolean',
    },
    AllRequestOutOfPolicy: {
      type: 'boolean',
    },
    AllBookInPolicy: {
      type: 'boolean',
    },
    AllRequestInPolicy: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ResourceMailboxPropertiesDto_Request = {
  type: 'object',
  properties: {
    bIsAllRequestOutOfPolicyUpdated: {
      type: 'boolean',
    },
    bIsAllBookInPolicyUpdated: {
      type: 'boolean',
    },
    bIsAllRequestInPolicyUpdated: {
      type: 'boolean',
    },
    bIsAllowConflictsUpdated: {
      type: 'boolean',
    },
    bIsAutomateProcessingUpdated: {
      type: 'boolean',
    },
    bIsAllowRecurringMeetingsUpdated: {
      type: 'boolean',
    },
    bIsScheduleOnlyDuringWorkHoursUpdated: {
      type: 'boolean',
    },
    bIsEnforceSchedulingHorizonUpdated: {
      type: 'boolean',
    },
    bIsBookingWindowInDaysUpdated: {
      type: 'boolean',
    },
    bIsMaximumDurationInMinutesUpdated: {
      type: 'boolean',
    },
    bIsMaximumConflictInstancesUpdated: {
      type: 'boolean',
    },
    bIsConflictPercentageAllowedUpdated: {
      type: 'boolean',
    },
    bIsForwardRequestsToDelegatesUpdated: {
      type: 'boolean',
    },
    bIsDeleteAttachmentsUpdated: {
      type: 'boolean',
    },
    bIsDeleteCommentsUpdated: {
      type: 'boolean',
    },
    bIsDeleteSubjectUpdated: {
      type: 'boolean',
    },
    bIsDeleteNonCalendarItemsUpdated: {
      type: 'boolean',
    },
    bIsAddOrganizerToSubjectUpdated: {
      type: 'boolean',
    },
    bIsRemovePrivatePropertyUpdated: {
      type: 'boolean',
    },
    bIsOrganizerInfoUpdated: {
      type: 'boolean',
    },
    bIsAddAdditionalResponseUpdated: {
      type: 'boolean',
    },
    bIsTentativePendingApprovalUpdated: {
      type: 'boolean',
    },
    MailboxId: {
      type: 'integer',
      format: 'int32',
    },
    AllowConflicts: {
      type: 'boolean',
    },
    AutomateProcessing: {
      type: 'string',
    },
    AllowRecurringMeetings: {
      type: 'boolean',
    },
    ScheduleOnlyDuringWorkHours: {
      type: 'boolean',
    },
    EnforceSchedulingHorizon: {
      type: 'boolean',
    },
    BookingWindowInDays: {
      type: 'integer',
      format: 'int32',
    },
    MaximumDurationInMinutes: {
      type: 'integer',
      format: 'int32',
    },
    MaximumConflictInstances: {
      type: 'integer',
      format: 'int32',
    },
    ConflictPercentageAllowed: {
      type: 'integer',
      format: 'int32',
    },
    ForwardRequestsToDelegates: {
      type: 'boolean',
    },
    DeleteAttachments: {
      type: 'boolean',
    },
    DeleteComments: {
      type: 'boolean',
    },
    DeleteSubject: {
      type: 'boolean',
    },
    DeleteNonCalendarItems: {
      type: 'boolean',
    },
    AddOrganizerToSubject: {
      type: 'boolean',
    },
    RemovePrivateProperty: {
      type: 'boolean',
    },
    OrganizerInfo: {
      type: 'boolean',
    },
    AddAdditionalResponse: {
      type: 'boolean',
    },
    AdditionalResponse: {
      type: 'string',
    },
    TentativePendingApproval: {
      type: 'boolean',
    },
    AllRequestOutOfPolicy: {
      type: 'boolean',
    },
    AllBookInPolicy: {
      type: 'boolean',
    },
    AllRequestInPolicy: {
      type: 'boolean',
    },
  },
} as const;

export const $SharePointUserWebApplicationListDto = {
  type: 'object',
  properties: {
    SharePointUserWebApplications: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SharePointUserWebApplicationDto',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SharePointUserWebApplicationDto_Request = {
  required: ['ServerRoleId', 'SharePointWebApplicationName'],
  type: 'object',
  properties: {
    SharePointWebApplicationId: {
      type: 'integer',
      format: 'int32',
    },
    SharePointWebApplicationName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    ServerIp: {
      type: 'string',
    },
    ServerName: {
      type: 'string',
    },
  },
} as const;

export const $SharePointUserWebApplicationDto = {
  required: ['ServerRoleId', 'SharePointWebApplicationName'],
  type: 'object',
  properties: {
    SharePointWebApplicationId: {
      type: 'integer',
      format: 'int32',
    },
    SharePointWebApplicationName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    ServerIp: {
      type: 'string',
    },
    ServerName: {
      type: 'string',
    },
  },
} as const;

export const $AssignSharePointWebApplicationDto = {
  type: 'object',
  properties: {
    SharePointWebApplications: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SharePointUserWebApplicationDto',
      },
    },
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $AssignSharePointWebApplicationDto_Request = {
  type: 'object',
  properties: {
    SharePointWebApplications: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SharePointUserWebApplicationDto:Request',
      },
    },
  },
} as const;

export const $SharePointGroupListDto = {
  type: 'object',
  properties: {
    SharePointGroups: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SharePointGroupDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SharePointGroupDto = {
  required: ['Description', 'GroupName'],
  type: 'object',
  properties: {
    GroupName: {
      type: 'string',
    },
    GroupLogin: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    Dn: {
      type: 'string',
    },
    SiteId: {
      type: 'string',
    },
    SiteUrl: {
      type: 'string',
    },
    GroupAdministrator: {
      type: 'string',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    SharePointRoles: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SharePointRoleDto',
      },
    },
    SharePointUsersLogin: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SharePointGroupDto_Request = {
  required: ['Description', 'GroupName'],
  type: 'object',
  properties: {
    GroupName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    GroupAdministrator: {
      type: 'string',
      description:
        "you can get group administrator by calling 'GET /sharepoint/sites/{siteId}/users'.",
    },
    SharePointRoles: {
      type: 'array',
      description:
        "you can get SharePoint roles by calling 'GET /sharepoint/sites/{sharePointSiteId}/roles'.",
      items: {
        $ref: '#/components/schemas/SharePointRoleDto',
      },
    },
    SharePointUsersLogin: {
      type: 'array',
      description:
        "you can get SharePoint users login by calling 'GET /sharepoint/sites/{siteId}/users'.",
      items: {
        type: 'string',
      },
    },
  },
} as const;

export const $SharePointGroupDto_List = {
  required: ['Description', 'GroupName'],
  type: 'object',
  properties: {
    GroupName: {
      type: 'string',
    },
    GroupLogin: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    Dn: {
      type: 'string',
    },
    SiteId: {
      type: 'string',
    },
    SiteUrl: {
      type: 'string',
    },
    GroupAdministrator: {
      type: 'string',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    SharePointRoles: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SharePointRoleDto',
      },
    },
    SharePointUsersLogin: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
} as const;

export const $SharePointRoleDto = {
  type: 'object',
  properties: {
    RoleName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
  },
} as const;

export const $SharePointRoleListDto = {
  type: 'object',
  properties: {
    SharePointRoles: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SharePointRoleDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SharePointRoleListDto_Request = {
  type: 'object',
  properties: {
    SharePointRoles: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SharePointRoleDto',
      },
    },
  },
} as const;

export const $SharePointUserListDto = {
  type: 'object',
  properties: {
    SPUsers: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SharePointUserDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SharePointUserDto_List = {
  required: ['UserName'],
  type: 'object',
  properties: {
    CreateNewUser: {
      type: 'boolean',
    },
    SPUserId: {
      type: 'integer',
      format: 'int32',
    },
    UserName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    UserEmailAddress: {
      type: 'string',
    },
    UserPassword: {
      type: 'string',
    },
    UserLogin: {
      type: 'string',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    SiteId: {
      type: 'integer',
      format: 'int32',
    },
    SiteUrl: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    SharePointRoles: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SharePointRoleDto',
      },
    },
    GeneralProfile: {
      $ref: '#/components/schemas/UserGeneralProfileDto',
    },
  },
} as const;

export const $SharePointUserDto_Request = {
  required: ['UserName'],
  type: 'object',
  properties: {
    CreateNewUser: {
      type: 'boolean',
      description: 'Set it true to create new user.',
    },
    UserName: {
      type: 'string',
    },
    UserEmailAddress: {
      type: 'string',
      description:
        "User email address is required when 'CreateNewUser' is true.",
    },
    UserPassword: {
      type: 'string',
      description: "User password is required when 'CreateNewUser' is true.",
    },
    SharePointRoles: {
      type: 'array',
      description:
        "you can get SharePoint roles by calling 'GET /sharepoint/sites/{sharePointSiteId}/roles",
      items: {
        $ref: '#/components/schemas/SharePointRoleDto',
      },
    },
    GeneralProfile: {
      $ref: '#/components/schemas/UserGeneralProfileDto',
    },
  },
} as const;

export const $SharePointUserDto = {
  required: ['UserName'],
  type: 'object',
  properties: {
    CreateNewUser: {
      type: 'boolean',
    },
    SPUserId: {
      type: 'integer',
      format: 'int32',
    },
    UserName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    UserEmailAddress: {
      type: 'string',
    },
    UserPassword: {
      type: 'string',
    },
    UserLogin: {
      type: 'string',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    SiteId: {
      type: 'integer',
      format: 'int32',
    },
    SiteUrl: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    SharePointRoles: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SharePointRoleDto',
      },
    },
    GeneralProfile: {
      $ref: '#/components/schemas/UserGeneralProfileDto',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SharePointGroupMemberListDto = {
  type: 'object',
  properties: {
    SharePointGroupMembers: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SharePointGroupMemberDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SharePointGroupMemberListDto_Request = {
  type: 'object',
  properties: {
    SharePointGroupMembers: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SharePointGroupMemberDto:List',
      },
    },
  },
} as const;

export const $SharePointGroupMemberDto = {
  type: 'object',
  properties: {
    UserLogin: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SharePointGroupMemberDto_List = {
  type: 'object',
  properties: {
    UserLogin: {
      type: 'string',
    },
  },
} as const;

export const $SharePointSettingsDto = {
  required: [
    'AdminUserName',
    'AdminUserPassword',
    'HostName',
    'SharePointServerType',
  ],
  type: 'object',
  properties: {
    SharePointServerType: {
      type: 'string',
    },
    HostName: {
      type: 'string',
    },
    AdminUserName: {
      type: 'string',
    },
    AdminUserPassword: {
      type: 'string',
    },
    DomainController: {
      type: 'string',
    },
    ADAdmin: {
      type: 'string',
    },
    ADAdminPassword: {
      type: 'string',
    },
    ParentOU: {
      type: 'string',
    },
    WebRole: {
      type: 'boolean',
    },
    WebApplication: {
      type: 'string',
    },
  },
} as const;

export const $SharePointWebApplicationListDto = {
  type: 'object',
  properties: {
    SharePointWebApplications: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SharePointWebApplicationDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SharePointWebApplicationDto = {
  type: 'object',
  properties: {
    Url: {
      type: 'string',
    },
    Name: {
      type: 'string',
    },
  },
} as const;

export const $SharePointLocaleListDto = {
  type: 'object',
  properties: {
    SharePointLocales: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SharePointLocaleDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SharePointLocaleDto = {
  type: 'object',
  properties: {
    DisplayName: {
      type: 'string',
    },
    Tag: {
      type: 'string',
    },
    Lcid: {
      type: 'string',
    },
  },
} as const;

export const $SharePointWebTemplateListDto = {
  type: 'object',
  properties: {
    SharePointWebTemplates: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SharePointWebTemplateDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SharePointWebTemplateDto = {
  required: ['Lcid'],
  type: 'object',
  properties: {
    TemplateId: {
      type: 'string',
    },
    Name: {
      type: 'string',
    },
    Lcid: {
      type: 'string',
    },
  },
} as const;

export const $SharePointSiteListDto = {
  type: 'object',
  properties: {
    SPSites: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SharePointSiteDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SharePointSiteDto = {
  required: [
    'LanguageId',
    'OrganizationId',
    'SPDomain',
    'SPHostHeader',
    'ServerRoleId',
    'SharePointUserName',
    'SharePointUserPassword',
    'SiteTemplateId',
    'SiteTitle',
  ],
  type: 'object',
  properties: {
    SPSiteId: {
      type: 'integer',
      format: 'int32',
    },
    SPHostHeader: {
      type: 'string',
    },
    SPDomain: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    MaxDatabaseSize: {
      type: 'integer',
      format: 'int32',
    },
    SPUserUsage: {
      type: 'integer',
      format: 'int32',
    },
    SPGroupUsage: {
      type: 'integer',
      format: 'int32',
    },
    IsSubSite: {
      type: 'boolean',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    DBStorageUsage: {
      type: 'number',
      format: 'double',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    ParentSiteId: {
      type: 'integer',
      format: 'int32',
    },
    SitePath: {
      type: 'string',
    },
    SiteUrl: {
      type: 'string',
    },
    IsDeleted: {
      type: 'boolean',
    },
    WebApplication: {
      type: 'string',
    },
    LanguageId: {
      type: 'integer',
      format: 'int32',
    },
    SiteTemplateId: {
      type: 'string',
    },
    SiteTitle: {
      type: 'string',
    },
    DatabaseStorageSize: {
      type: 'integer',
      format: 'int32',
    },
    DatabaseWarningEmailPercentage: {
      minimum: 0,
      type: 'integer',
      format: 'int32',
    },
    SharePointUserName: {
      type: 'string',
    },
    SharePointUserPassword: {
      type: 'string',
    },
    OrganizationName: {
      type: 'string',
    },
    OwnerName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SharePointSiteDto_Request = {
  required: [
    'LanguageId',
    'OrganizationId',
    'SPDomain',
    'SPHostHeader',
    'ServerRoleId',
    'SharePointUserName',
    'SharePointUserPassword',
    'SiteTemplateId',
    'SiteTitle',
  ],
  type: 'object',
  properties: {
    SPHostHeader: {
      type: 'string',
    },
    SPDomain: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    WebApplication: {
      type: 'string',
    },
    LanguageId: {
      type: 'integer',
      description:
        "You can get language id by calling 'GET /sharepoint-server/{serverRoleId}/locales'.",
      format: 'int32',
    },
    SiteTemplateId: {
      type: 'string',
      description:
        "You can get site template id by calling 'GET /sharepoint-server/{serverRoleId}/locales/{localeId}/web-templates'.",
    },
    SiteTitle: {
      type: 'string',
    },
    DatabaseStorageSize: {
      type: 'integer',
      format: 'int32',
    },
    DatabaseWarningEmailPercentage: {
      minimum: 0,
      type: 'integer',
      format: 'int32',
    },
    SharePointUserName: {
      type: 'string',
    },
    SharePointUserPassword: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
  },
} as const;

export const $SharePointSiteDto_List = {
  type: 'object',
  properties: {
    SPSiteId: {
      type: 'integer',
      format: 'int32',
    },
    SPHostHeader: {
      type: 'string',
    },
    SPDomain: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    MaxDatabaseSize: {
      type: 'integer',
      format: 'int32',
    },
    SPUserUsage: {
      type: 'integer',
      format: 'int32',
    },
    SPGroupUsage: {
      type: 'integer',
      format: 'int32',
    },
    IsSubSite: {
      type: 'boolean',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    DBStorageUsage: {
      type: 'number',
      format: 'double',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    ParentSiteId: {
      type: 'integer',
      format: 'int32',
    },
    SitePath: {
      type: 'string',
    },
    SiteUrl: {
      type: 'string',
    },
    IsDeleted: {
      type: 'boolean',
    },
    WebApplication: {
      type: 'string',
    },
    LanguageId: {
      type: 'integer',
      format: 'int32',
    },
    SiteTemplateId: {
      type: 'string',
    },
    SiteTitle: {
      type: 'string',
    },
    DatabaseStorageSize: {
      type: 'integer',
      format: 'int32',
    },
    DatabaseWarningEmailPercentage: {
      minimum: 0,
      type: 'integer',
      format: 'int32',
    },
    SharePointUserName: {
      type: 'string',
    },
    SharePointUserPassword: {
      type: 'string',
    },
    OrganizationName: {
      type: 'string',
    },
    OwnerName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
  },
} as const;

export const $SharePointSubSiteDto = {
  required: [
    'LanguageId',
    'OrganizationId',
    'SPHostHeader',
    'ServerRoleId',
    'SiteTemplateId',
  ],
  type: 'object',
  properties: {
    SPSiteId: {
      type: 'integer',
      format: 'int32',
    },
    SPHostHeader: {
      type: 'string',
    },
    SitePath: {
      type: 'string',
    },
    SPDomain: {
      type: 'string',
    },
    SiteUrl: {
      type: 'string',
    },
    SiteTitle: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    UseUniquePermissions: {
      type: 'boolean',
    },
    LanguageId: {
      type: 'integer',
      format: 'int32',
    },
    SiteTemplateId: {
      type: 'string',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    ApiUserId: {
      type: 'integer',
      format: 'int32',
    },
    ParentSiteId: {
      type: 'integer',
      format: 'int32',
    },
    IsSubSite: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SharePointSubSiteDto_Request = {
  required: [
    'LanguageId',
    'OrganizationId',
    'SPHostHeader',
    'ServerRoleId',
    'SiteTemplateId',
  ],
  type: 'object',
  properties: {
    SPHostHeader: {
      type: 'string',
    },
    SiteTitle: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    UseUniquePermissions: {
      type: 'boolean',
      description:
        'Set this true to use your own user permissions setting, otherwise it use parent site permissions.',
    },
    LanguageId: {
      type: 'integer',
      description:
        "You can get language id by calling 'GET /sharepoint-server/{serverRoleId}/locales'.",
      format: 'int32',
    },
    SiteTemplateId: {
      type: 'string',
      description:
        "You can get site template id by calling 'GET /sharepoint-server/{serverRoleId}/locales/{localeId}/web-templates'.",
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $SharePointSiteDetailDto = {
  type: 'object',
  properties: {
    DatabaseStorageUsage: {
      type: 'integer',
      format: 'int32',
    },
    StorageMaximumLevel: {
      type: 'integer',
      format: 'int32',
    },
    StorageWarningLevel: {
      type: 'integer',
      format: 'int32',
    },
    Bandwidth: {
      type: 'number',
      format: 'double',
    },
    Hits: {
      type: 'integer',
      format: 'int32',
    },
    UsagePercentage: {
      type: 'number',
      format: 'double',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SharePointUserChangePasswordDto = {
  required: ['Password', 'SPUserId'],
  type: 'object',
  properties: {
    SPUserId: {
      type: 'integer',
      format: 'int32',
    },
    SiteId: {
      type: 'integer',
      format: 'int32',
    },
    UserName: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SharePointUserChangePasswordDto_Request = {
  required: ['Password'],
  type: 'object',
  properties: {
    UserName: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
  },
} as const;

export const $SharePointGeneralProfileDto = {
  type: 'object',
  properties: {
    SPUserId: {
      type: 'integer',
      format: 'int32',
    },
    SiteId: {
      type: 'integer',
      format: 'int32',
    },
    UserName: {
      type: 'string',
    },
    GeneralProfile: {
      $ref: '#/components/schemas/UserGeneralProfileDto',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SharePointGeneralProfileDto_Request = {
  type: 'object',
  properties: {
    SPUserId: {
      type: 'integer',
      format: 'int32',
    },
    SiteId: {
      type: 'integer',
      format: 'int32',
    },
    UserName: {
      type: 'string',
    },
    GeneralProfile: {
      $ref: '#/components/schemas/UserGeneralProfileDto',
    },
  },
} as const;

export const $SkypeGroupListDto = {
  type: 'object',
  properties: {
    SkypeGroups: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SkypeGroupDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeGroupDto_List = {
  required: ['Description', 'OrganizationId', 'ResponseGroupName'],
  type: 'object',
  properties: {
    ResponseGroupId: {
      type: 'integer',
      format: 'int32',
    },
    ResponseGroupName: {
      type: 'string',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    IsDisabled: {
      type: 'boolean',
    },
    IsDeleted: {
      type: 'boolean',
    },
    GroupIdentity: {
      type: 'string',
    },
    ApplicationServiceName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    AgentAlertTime: {
      type: 'integer',
      format: 'int32',
    },
    ParticipationPolicy: {
      type: 'string',
    },
    RoutingMethod: {
      type: 'string',
    },
    DistributionGroupAddress: {
      type: 'string',
    },
    EnterpriseVoiceUsers: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
} as const;

export const $SkypeGroupDto = {
  required: ['Description', 'OrganizationId', 'ResponseGroupName'],
  type: 'object',
  properties: {
    ResponseGroupId: {
      type: 'integer',
      format: 'int32',
    },
    ResponseGroupName: {
      type: 'string',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    IsDisabled: {
      type: 'boolean',
    },
    IsDeleted: {
      type: 'boolean',
    },
    GroupIdentity: {
      type: 'string',
    },
    ApplicationServiceName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    AgentAlertTime: {
      type: 'integer',
      format: 'int32',
    },
    ParticipationPolicy: {
      type: 'string',
    },
    RoutingMethod: {
      type: 'string',
    },
    DistributionGroupAddress: {
      type: 'string',
    },
    EnterpriseVoiceUsers: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeGroupDto_Request = {
  required: ['Description', 'OrganizationId', 'ResponseGroupName'],
  type: 'object',
  properties: {
    ResponseGroupName: {
      type: 'string',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    ApplicationServiceName: {
      type: 'string',
      description:
        "Application service name should be in the format, 'ApplicationServer:application server name'.",
    },
    Description: {
      type: 'string',
    },
    AgentAlertTime: {
      type: 'integer',
      format: 'int32',
    },
    ParticipationPolicy: {
      type: 'string',
      enum: ['Informal', 'Formal'],
    },
    RoutingMethod: {
      type: 'string',
      enum: ['LongestIdle', 'Serial', 'Parallel', 'RoundRobin', 'Attendant'],
    },
    EnterpriseVoiceUsers: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
} as const;

export const $SkypeQueueListDto = {
  type: 'object',
  properties: {
    SkypeQueues: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SkypeQueueDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeQueueDto_List = {
  required: ['Description', 'OrganizationId', 'ResponseQueueName'],
  type: 'object',
  properties: {
    ResponseQueueId: {
      type: 'integer',
      format: 'int32',
    },
    ResponseQueueName: {
      type: 'string',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    IsDisabled: {
      type: 'boolean',
    },
    IsDeleted: {
      type: 'boolean',
    },
    QueueIdentity: {
      type: 'string',
    },
    ApplicationServiceName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    EnableQueueTimeout: {
      type: 'boolean',
    },
    TimeoutAction: {
      type: 'string',
    },
    TimeoutPeriod: {
      type: 'integer',
      format: 'int32',
    },
    TimeoutQueueIdentity: {
      type: 'string',
    },
    TimeoutQueueName: {
      type: 'string',
    },
    TimeoutAddress: {
      type: 'string',
    },
    EnableQueueOverflow: {
      type: 'boolean',
    },
    OverflowAction: {
      type: 'string',
    },
    OverflowCandidate: {
      type: 'string',
    },
    OverflowQueueIdentity: {
      type: 'string',
    },
    OverflowQueueName: {
      type: 'string',
    },
    MaximumCalls: {
      type: 'integer',
      format: 'int32',
    },
    AgentAlertTime: {
      type: 'integer',
      format: 'int32',
    },
    ParticipationPolicy: {
      type: 'string',
    },
    RoutingMethod: {
      type: 'string',
    },
    OverflowAddress: {
      type: 'string',
    },
    DistributionGroupAddress: {
      type: 'string',
    },
    Groups: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    GroupIdentities: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
} as const;

export const $SkypeQueueDto = {
  required: ['Description', 'OrganizationId', 'ResponseQueueName'],
  type: 'object',
  properties: {
    ResponseQueueId: {
      type: 'integer',
      format: 'int32',
    },
    ResponseQueueName: {
      type: 'string',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    IsDisabled: {
      type: 'boolean',
    },
    IsDeleted: {
      type: 'boolean',
    },
    QueueIdentity: {
      type: 'string',
    },
    ApplicationServiceName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    EnableQueueTimeout: {
      type: 'boolean',
    },
    TimeoutAction: {
      type: 'string',
    },
    TimeoutPeriod: {
      type: 'integer',
      format: 'int32',
    },
    TimeoutQueueIdentity: {
      type: 'string',
    },
    TimeoutQueueName: {
      type: 'string',
    },
    TimeoutAddress: {
      type: 'string',
    },
    EnableQueueOverflow: {
      type: 'boolean',
    },
    OverflowAction: {
      type: 'string',
    },
    OverflowCandidate: {
      type: 'string',
    },
    OverflowQueueIdentity: {
      type: 'string',
    },
    OverflowQueueName: {
      type: 'string',
    },
    MaximumCalls: {
      type: 'integer',
      format: 'int32',
    },
    AgentAlertTime: {
      type: 'integer',
      format: 'int32',
    },
    ParticipationPolicy: {
      type: 'string',
    },
    RoutingMethod: {
      type: 'string',
    },
    OverflowAddress: {
      type: 'string',
    },
    DistributionGroupAddress: {
      type: 'string',
    },
    Groups: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    GroupIdentities: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeQueueDto_Request = {
  required: ['Description', 'OrganizationId', 'ResponseQueueName'],
  type: 'object',
  properties: {
    ResponseQueueName: {
      type: 'string',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    ApplicationServiceName: {
      type: 'string',
      description:
        "Application service name should be in the format, 'ApplicationServer:application server name'.",
    },
    Description: {
      type: 'string',
    },
    EnableQueueTimeout: {
      type: 'boolean',
    },
    TimeoutAction: {
      type: 'string',
      description:
        "Timeout action is required when 'EnableQueueTimeout' is true.",
      enum: [
        'TransferToQueue',
        'TransferToUri',
        'TransferToVoicemailUri',
        'TransferToPstn',
        'Terminate',
      ],
    },
    TimeoutPeriod: {
      type: 'integer',
      description:
        "Timeout period is required when 'EnableQueueTimeout' is true.",
      format: 'int32',
    },
    TimeoutQueueName: {
      type: 'string',
      description:
        "Timeout queue name is required when 'TimeoutAction' is set as 'TransferToQueue'.",
    },
    TimeoutAddress: {
      type: 'string',
      description:
        "Timeout queue name is required when 'TimeoutAction' is set as 'TransferToUri' or 'TransferToVoicemailUri' or 'TransferToPstn'.",
    },
    EnableQueueOverflow: {
      type: 'boolean',
    },
    OverflowAction: {
      type: 'string',
      description:
        "Overflow action is required when 'EnableQueueOverflow' is true.",
      enum: [
        'TransferToQueue',
        'TransferToUri',
        'TransferToVoicemailUri',
        'TransferToPstn',
        'Terminate',
      ],
    },
    OverflowQueueName: {
      type: 'string',
      description:
        "Overflow queue name is required when 'OverflowAction' is set as 'TransferToQueue'.",
    },
    MaximumCalls: {
      type: 'integer',
      description:
        "Maximum calls is required when 'EnableQueueOverflow' is true.",
      format: 'int32',
    },
    OverflowAddress: {
      type: 'string',
      description:
        "Overflow address is required when 'OverflowAction' is set as 'TransferToUri' or 'TransferToVoicemailUri' or 'TransferToPstn'.",
    },
    Groups: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
} as const;

export const $SkypeSettingsDto = {
  type: 'object',
  properties: {
    ServerIp: {
      type: 'string',
    },
    DomainController: {
      type: 'string',
    },
    ADAdmin: {
      type: 'string',
    },
    ADPassword: {
      type: 'string',
    },
    ParentOU: {
      type: 'string',
    },
    HostName: {
      type: 'string',
    },
    AdminUserName: {
      type: 'string',
    },
    AdminUserPassword: {
      type: 'string',
    },
    UserRegistrarPool: {
      type: 'string',
    },
    SkypeServerType: {
      type: 'string',
    },
  },
} as const;

export const $SkypeRegistrarPoolListDto = {
  type: 'object',
  properties: {
    Pools: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SkypeRegistrarPoolDto',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeRegistrarPoolDto = {
  type: 'object',
  properties: {
    PoolName: {
      type: 'string',
    },
  },
} as const;

export const $AssignSkypeServerPoolListDto = {
  required: ['UserId'],
  type: 'object',
  properties: {
    Pools: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/AssignSkypeServerPoolDto',
      },
    },
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $AssignSkypeServerPoolDto = {
  required: ['PoolName', 'ServerRoleId'],
  type: 'object',
  properties: {
    PoolName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $SkypeTimeZoneListDto = {
  type: 'object',
  properties: {
    TimeZones: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SkypeTimeZoneDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeTimeZoneDto = {
  type: 'object',
  properties: {
    Name: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    Id: {
      type: 'string',
    },
  },
} as const;

export const $LineUriListDto = {
  type: 'object',
  properties: {
    LineUris: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/LineUriDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $LineUriDto_List = {
  required: ['LineURI', 'ServerRoleId'],
  type: 'object',
  properties: {
    LineURIId: {
      type: 'integer',
      format: 'int32',
    },
    LineURI: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    AssignedTo: {
      type: 'integer',
      format: 'int32',
    },
    IsUsed: {
      type: 'boolean',
    },
    AssignedToUserName: {
      type: 'string',
    },
    ServerIp: {
      type: 'string',
    },
    ServerName: {
      type: 'string',
    },
  },
} as const;

export const $LineUriDto = {
  required: ['LineURI', 'ServerRoleId'],
  type: 'object',
  properties: {
    LineURIId: {
      type: 'integer',
      format: 'int32',
    },
    LineURI: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    AssignedTo: {
      type: 'integer',
      format: 'int32',
    },
    IsUsed: {
      type: 'boolean',
    },
    IsDeleted: {
      type: 'boolean',
    },
    AddedBy: {
      type: 'integer',
      format: 'int32',
    },
    ModifiedBy: {
      type: 'integer',
      format: 'int32',
    },
    DeletedBy: {
      type: 'integer',
      format: 'int32',
    },
    AssignedToUserName: {
      type: 'string',
    },
    ServerIp: {
      type: 'string',
    },
    ServerName: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $AssignLineUriListDto = {
  required: ['UserId'],
  type: 'object',
  properties: {
    LineUris: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/AssignLineUriDto',
      },
    },
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $AssignLineUriDto = {
  required: ['LineURIId'],
  type: 'object',
  properties: {
    LineURIId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeFederatedDomainListDto = {
  type: 'object',
  properties: {
    FederatedDomains: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SkypeFederatedDomainDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeFederatedDomainDto_List = {
  required: ['Comment', 'DomainName', 'DomainType'],
  type: 'object',
  properties: {
    Comment: {
      type: 'string',
    },
    DomainType: {
      type: 'string',
    },
    ProxyFqdn: {
      type: 'string',
    },
    DomainName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $SkypeFederatedDomainDto = {
  required: ['Comment', 'DomainName', 'DomainType'],
  type: 'object',
  properties: {
    Comment: {
      type: 'string',
    },
    DomainType: {
      type: 'string',
    },
    ProxyFqdn: {
      type: 'string',
    },
    DomainName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeUserPoliciesListDto = {
  type: 'object',
  properties: {
    ConferencingPolicies: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SkypeUserPolicyDto',
      },
    },
    ClientVersionPolicies: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SkypeUserPolicyDto',
      },
    },
    PinPolicies: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SkypeUserPolicyDto',
      },
    },
    ExternalAccessPolicies: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SkypeUserPolicyDto',
      },
    },
    ArchivingPolicies: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SkypeUserPolicyDto',
      },
    },
    LocationPolicies: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SkypeUserPolicyDto',
      },
    },
    MobilityPolicies: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SkypeUserPolicyDto',
      },
    },
    PersistentChatPolicies: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SkypeUserPolicyDto',
      },
    },
    ClientPolicies: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SkypeUserPolicyDto',
      },
    },
    VoicePolicies: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SkypeUserPolicyDto',
      },
    },
    DialInPolicies: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SkypeUserPolicyDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeUserPolicyDto = {
  type: 'object',
  properties: {
    Name: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
  },
} as const;

export const $SkypeApplicationServicesListDto = {
  type: 'object',
  properties: {
    ApplicationServices: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SkypeApplicationServiceDto',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeApplicationServiceDto = {
  type: 'object',
  properties: {
    ApplicationServiceName: {
      type: 'string',
    },
  },
} as const;

export const $AssignSkypeApplicationServiceListDto = {
  required: ['UserId'],
  type: 'object',
  properties: {
    ApplicationServices: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/AssignSkypeApplicationServiceDto',
      },
    },
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $AssignSkypeApplicationServiceDto = {
  required: ['ApplicationServiceName', 'ServerRoleId'],
  type: 'object',
  properties: {
    ApplicationServiceName: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $SkypeSipDomainListDto = {
  type: 'object',
  properties: {
    SipDomains: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SkypeSipDomainDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeSipDomainDto_List = {
  required: ['OrganizationId', 'SIPDomainName', 'ServerRoleId'],
  type: 'object',
  properties: {
    SIPDomainId: {
      type: 'integer',
      format: 'int32',
    },
    SIPDomainName: {
      type: 'string',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    UserCount: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerName: {
      type: 'string',
    },
    MeetSimpleURL: {
      type: 'string',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $SkypeSipDomainDto = {
  required: ['OrganizationId', 'SIPDomainName', 'ServerRoleId'],
  type: 'object',
  properties: {
    SIPDomainId: {
      type: 'integer',
      format: 'int32',
    },
    SIPDomainName: {
      type: 'string',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    UserCount: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerName: {
      type: 'string',
    },
    IsDeleted: {
      type: 'boolean',
    },
    AddedBy: {
      type: 'integer',
      format: 'int32',
    },
    ModifiedBy: {
      type: 'integer',
      format: 'int32',
    },
    DeletedBy: {
      type: 'integer',
      format: 'int32',
    },
    MeetSimpleURL: {
      type: 'string',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeSipDomainDto_Request = {
  required: ['OrganizationId', 'SIPDomainName', 'ServerRoleId'],
  type: 'object',
  properties: {
    SIPDomainName: {
      type: 'string',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      description:
        'Give owner id in case of creating sip domain for any descendent user.',
      format: 'int32',
    },
  },
} as const;

export const $SkypeUserListDto = {
  type: 'object',
  properties: {
    SkypeUsers: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SkypeUserDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeUserDto_List = {
  required: ['SIPDomainId', 'SkypeUserName', 'TelephonyOption'],
  type: 'object',
  properties: {
    SkypeUserId: {
      type: 'integer',
      format: 'int32',
    },
    SkypeUserName: {
      type: 'string',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    SIPAddress: {
      type: 'string',
    },
    SIPDomainId: {
      type: 'integer',
      format: 'int32',
    },
    SIPDomainName: {
      type: 'string',
    },
    UserServerPool: {
      type: 'string',
    },
    IsDisabled: {
      type: 'boolean',
    },
    LineURIId: {
      type: 'integer',
      format: 'int32',
    },
    GUID: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    SipAddressType: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    EnterpriseVoiceEnabled: {
      type: 'boolean',
    },
    RemoteCallControlEnabled: {
      type: 'boolean',
    },
    RemoteCallControlOnly: {
      type: 'boolean',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    GeneralProfile: {
      $ref: '#/components/schemas/UserGeneralProfileDto',
    },
    OrganizationName: {
      type: 'string',
    },
    TelephonyOption: {
      type: 'string',
    },
    LineServerUri: {
      type: 'string',
    },
    LineUri: {
      type: 'string',
    },
    VoicePolicy: {
      type: 'string',
    },
    DialPlan: {
      type: 'string',
    },
    MeetingPolicy: {
      type: 'string',
    },
    MeetingPolicyDetails: {
      type: 'string',
    },
    ConferencingPolicy: {
      type: 'string',
    },
    ClientVersionPolicy: {
      type: 'string',
    },
    PinPolicy: {
      type: 'string',
    },
    ExternalAccessPolicy: {
      type: 'string',
    },
    ArchivingPolicy: {
      type: 'string',
    },
    LocationPolicy: {
      type: 'string',
    },
    MobilityPolicy: {
      type: 'string',
    },
    ClientPolicy: {
      type: 'string',
    },
    PersistentChatPolicy: {
      type: 'string',
    },
    FederationEnabled: {
      type: 'boolean',
    },
    RemoteUserAccess: {
      type: 'boolean',
    },
    PublicImConnectivity: {
      type: 'boolean',
    },
    EnhancedPresence: {
      type: 'boolean',
    },
    ArchiveInternalMessages: {
      type: 'boolean',
    },
    ArchiveFederatedMessages: {
      type: 'boolean',
    },
    AnonymousRecipients: {
      type: 'boolean',
    },
    PbxIntegrationEnabled: {
      type: 'boolean',
    },
  },
} as const;

export const $SkypeUserDto_Request = {
  required: ['SIPDomainId', 'SkypeUserName', 'TelephonyOption'],
  type: 'object',
  properties: {
    SkypeUserName: {
      type: 'string',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    SIPDomainId: {
      type: 'integer',
      format: 'int32',
    },
    UserServerPool: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
      description:
        'Display name should be given if not provided in general profile, it will be ignored if passed in general profile.',
    },
    Password: {
      type: 'string',
    },
    GeneralProfile: {
      $ref: '#/components/schemas/UserGeneralProfileDto',
    },
    TelephonyOption: {
      type: 'string',
      enum: [
        'pctopc',
        'enterprisevoice',
        'audiovideodisabled',
        'remotecallcontrol',
        'remotecallcontrolonly',
      ],
    },
    LineServerUri: {
      type: 'string',
      description:
        "It depends on 'TelephonyOption', Its value is required when telephony option is 'remotecallcontrol' and 'remotecallcontrolonly'.",
    },
    LineUri: {
      type: 'string',
      description:
        "It depends on 'TelephonyOption', It is not required when telephony option is 'audiovideodisabled'.",
    },
    VoicePolicy: {
      type: 'string',
      description:
        "Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'.",
    },
    MeetingPolicy: {
      type: 'string',
      description:
        "Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'.",
    },
    ConferencingPolicy: {
      type: 'string',
      description:
        "Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'.",
    },
    ClientVersionPolicy: {
      type: 'string',
      description:
        "Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'.",
    },
    PinPolicy: {
      type: 'string',
      description:
        "Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'.",
    },
    ExternalAccessPolicy: {
      type: 'string',
      description:
        "Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'.",
    },
    ArchivingPolicy: {
      type: 'string',
      description:
        "Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'.",
    },
    LocationPolicy: {
      type: 'string',
      description:
        "Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'.",
    },
    MobilityPolicy: {
      type: 'string',
      description:
        "Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'.",
    },
    ClientPolicy: {
      type: 'string',
      description:
        "Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'.",
    },
    PersistentChatPolicy: {
      type: 'string',
      description:
        "Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'.",
    },
  },
} as const;

export const $SkypeUserDto = {
  required: ['SIPDomainId', 'SkypeUserName', 'TelephonyOption'],
  type: 'object',
  properties: {
    SkypeUserId: {
      type: 'integer',
      format: 'int32',
    },
    SkypeUserName: {
      type: 'string',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    SIPAddress: {
      type: 'string',
    },
    SIPDomainId: {
      type: 'integer',
      format: 'int32',
    },
    SIPDomainName: {
      type: 'string',
    },
    UserServerPool: {
      type: 'string',
    },
    IsDisabled: {
      type: 'boolean',
    },
    LineURIId: {
      type: 'integer',
      format: 'int32',
    },
    GUID: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    SipAddressType: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    EnterpriseVoiceEnabled: {
      type: 'boolean',
    },
    RemoteCallControlEnabled: {
      type: 'boolean',
    },
    RemoteCallControlOnly: {
      type: 'boolean',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    IsDeleted: {
      type: 'boolean',
    },
    AddedBy: {
      type: 'integer',
      format: 'int32',
    },
    ModifiedBy: {
      type: 'integer',
      format: 'int32',
    },
    DeletedBy: {
      type: 'integer',
      format: 'int32',
    },
    GeneralProfile: {
      $ref: '#/components/schemas/UserGeneralProfileDto',
    },
    OrganizationName: {
      type: 'string',
    },
    TelephonyOption: {
      type: 'string',
    },
    LineServerUri: {
      type: 'string',
    },
    LineUri: {
      type: 'string',
    },
    VoicePolicy: {
      type: 'string',
    },
    DialPlan: {
      type: 'string',
    },
    MeetingPolicy: {
      type: 'string',
    },
    MeetingPolicyDetails: {
      type: 'string',
    },
    ConferencingPolicy: {
      type: 'string',
    },
    ClientVersionPolicy: {
      type: 'string',
    },
    PinPolicy: {
      type: 'string',
    },
    ExternalAccessPolicy: {
      type: 'string',
    },
    ArchivingPolicy: {
      type: 'string',
    },
    LocationPolicy: {
      type: 'string',
    },
    MobilityPolicy: {
      type: 'string',
    },
    ClientPolicy: {
      type: 'string',
    },
    PersistentChatPolicy: {
      type: 'string',
    },
    FederationEnabled: {
      type: 'boolean',
    },
    RemoteUserAccess: {
      type: 'boolean',
    },
    PublicImConnectivity: {
      type: 'boolean',
    },
    EnhancedPresence: {
      type: 'boolean',
    },
    ArchiveInternalMessages: {
      type: 'boolean',
    },
    ArchiveFederatedMessages: {
      type: 'boolean',
    },
    AnonymousRecipients: {
      type: 'boolean',
    },
    PbxIntegrationEnabled: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeUserChangePasswordDto = {
  required: ['Password'],
  type: 'object',
  properties: {
    SkypeUserId: {
      type: 'integer',
      format: 'int32',
    },
    Password: {
      type: 'string',
    },
    SkypeUserName: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeUserChangePasswordDto_Request = {
  required: ['Password'],
  type: 'object',
  properties: {
    Password: {
      type: 'string',
    },
    SkypeUserName: {
      type: 'string',
    },
  },
} as const;

export const $SkypeUserGeneralProfileDto = {
  type: 'object',
  properties: {
    SkypeUserId: {
      type: 'integer',
      format: 'int32',
    },
    SkypeUserName: {
      type: 'string',
    },
    GeneralProfile: {
      $ref: '#/components/schemas/UserGeneralProfileDto',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeUserGeneralProfileDto_Request = {
  type: 'object',
  properties: {
    GeneralProfile: {
      $ref: '#/components/schemas/UserGeneralProfileDto',
    },
  },
} as const;

export const $SkypeUserAdvancedPropertiesDto = {
  type: 'object',
  properties: {
    SkypeUserId: {
      type: 'integer',
      format: 'int32',
    },
    SkypeUserName: {
      type: 'string',
    },
    LineURIId: {
      type: 'integer',
      format: 'int32',
    },
    TelephonyOption: {
      type: 'string',
    },
    LineServerUri: {
      type: 'string',
    },
    LineUri: {
      type: 'string',
    },
    VoicePolicy: {
      type: 'string',
    },
    DialPlan: {
      type: 'string',
    },
    MeetingPolicy: {
      type: 'string',
    },
    MeetingPolicyDetails: {
      type: 'string',
    },
    ConferencingPolicy: {
      type: 'string',
    },
    ClientVersionPolicy: {
      type: 'string',
    },
    PinPolicy: {
      type: 'string',
    },
    ExternalAccessPolicy: {
      type: 'string',
    },
    ArchivingPolicy: {
      type: 'string',
    },
    LocationPolicy: {
      type: 'string',
    },
    MobilityPolicy: {
      type: 'string',
    },
    ClientPolicy: {
      type: 'string',
    },
    PersistentChatPolicy: {
      type: 'string',
    },
    FederationEnabled: {
      type: 'boolean',
    },
    RemoteUserAccess: {
      type: 'boolean',
    },
    PublicImConnectivity: {
      type: 'boolean',
    },
    EnhancedPresence: {
      type: 'boolean',
    },
    ArchiveInternalMessages: {
      type: 'boolean',
    },
    ArchiveFederatedMessages: {
      type: 'boolean',
    },
    AnonymousRecipients: {
      type: 'boolean',
    },
    PbxIntegrationEnabled: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeUserAdvancedPropertiesDto_Request = {
  type: 'object',
  properties: {
    SkypeUserName: {
      type: 'string',
    },
    LineURIId: {
      type: 'integer',
      format: 'int32',
    },
    TelephonyOption: {
      type: 'string',
    },
    LineServerUri: {
      type: 'string',
    },
    LineUri: {
      type: 'string',
    },
    VoicePolicy: {
      type: 'string',
    },
    DialPlan: {
      type: 'string',
    },
    MeetingPolicy: {
      type: 'string',
    },
    MeetingPolicyDetails: {
      type: 'string',
    },
    ConferencingPolicy: {
      type: 'string',
    },
    ClientVersionPolicy: {
      type: 'string',
    },
    PinPolicy: {
      type: 'string',
    },
    ExternalAccessPolicy: {
      type: 'string',
    },
    ArchivingPolicy: {
      type: 'string',
    },
    LocationPolicy: {
      type: 'string',
    },
    MobilityPolicy: {
      type: 'string',
    },
    ClientPolicy: {
      type: 'string',
    },
    PersistentChatPolicy: {
      type: 'string',
    },
    FederationEnabled: {
      type: 'boolean',
    },
    RemoteUserAccess: {
      type: 'boolean',
    },
    PublicImConnectivity: {
      type: 'boolean',
    },
    EnhancedPresence: {
      type: 'boolean',
    },
    ArchiveInternalMessages: {
      type: 'boolean',
    },
    ArchiveFederatedMessages: {
      type: 'boolean',
    },
    AnonymousRecipients: {
      type: 'boolean',
    },
    PbxIntegrationEnabled: {
      type: 'boolean',
    },
  },
} as const;

export const $SkypeUserStatusDto = {
  type: 'object',
  properties: {
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    IsDisabled: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeUserStatusDto_Request = {
  type: 'object',
  properties: {
    IsDisabled: {
      type: 'boolean',
    },
  },
} as const;

export const $SkypeUserForwardingSettingsDto = {
  required: ['ForwardTo'],
  type: 'object',
  properties: {
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    ForwardTo: {
      type: 'string',
    },
    ForwardImmidiately: {
      type: 'boolean',
    },
    ForwardAfter: {
      type: 'string',
    },
    EnableCallForwarding: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeUserForwardingSettingsDto_Request = {
  required: ['ForwardTo'],
  type: 'object',
  properties: {
    ForwardTo: {
      type: 'string',
    },
    ForwardImmidiately: {
      type: 'boolean',
    },
    ForwardAfter: {
      type: 'string',
    },
    EnableCallForwarding: {
      type: 'boolean',
    },
  },
} as const;

export const $SkypeBulkUsersFeasibilityDto = {
  required: ['OrganizationId'],
  type: 'object',
  properties: {
    Users: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SkypeBulkUserDto',
      },
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeBulkUsersFeasibilityDto_Request = {
  required: ['OrganizationId'],
  type: 'object',
  properties: {
    Users: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SkypeBulkUserDto',
      },
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $SkypeBulkUserDto = {
  required: ['UserName'],
  type: 'object',
  properties: {
    UserName: {
      type: 'string',
    },
    SipAddress: {
      type: 'string',
    },
    SipAddressType: {
      type: 'string',
    },
    Password: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    IsFeasible: {
      type: 'boolean',
    },
    OfficeLocation: {
      type: 'string',
    },
    FileName: {
      type: 'string',
    },
    City: {
      type: 'string',
    },
    ZipCode: {
      type: 'string',
    },
    State: {
      type: 'string',
    },
    CountryId: {
      type: 'integer',
      format: 'int32',
    },
    FirstName: {
      type: 'string',
    },
    LastName: {
      type: 'string',
    },
    Country: {
      type: 'string',
    },
    Company: {
      type: 'string',
    },
    Feasibility: {
      type: 'string',
    },
    Notes: {
      type: 'string',
    },
  },
} as const;

export const $SkypeBulkUsersListDto = {
  required: ['OrganizationId', 'UserServerPool'],
  type: 'object',
  properties: {
    Users: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SkypeBulkUserDto',
      },
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    UserServerPool: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeBulkUsersListDto_Request = {
  required: ['OrganizationId', 'UserServerPool'],
  type: 'object',
  properties: {
    Users: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SkypeBulkUserDto',
      },
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    UserServerPool: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $SkypeUserTelephonySettingsDto = {
  required: ['TelephonyOption'],
  type: 'object',
  properties: {
    SkypeUserId: {
      type: 'integer',
      format: 'int32',
    },
    TelephonyOption: {
      type: 'string',
    },
    LineServerUri: {
      type: 'string',
    },
    LineUri: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeUserTelephonySettingsDto_Request = {
  required: ['TelephonyOption'],
  type: 'object',
  properties: {
    TelephonyOption: {
      type: 'string',
    },
    LineServerUri: {
      type: 'string',
    },
    LineUri: {
      type: 'string',
    },
  },
} as const;

export const $SkypeUserPolicySettingsDto = {
  type: 'object',
  properties: {
    SkypeUserId: {
      type: 'integer',
      format: 'int32',
    },
    VoicePolicy: {
      type: 'string',
    },
    DialPlan: {
      type: 'string',
    },
    MeetingPolicy: {
      type: 'string',
    },
    MeetingPolicyDetails: {
      type: 'string',
    },
    ConferencingPolicy: {
      type: 'string',
    },
    ClientVersionPolicy: {
      type: 'string',
    },
    PinPolicy: {
      type: 'string',
    },
    ExternalAccessPolicy: {
      type: 'string',
    },
    ArchivingPolicy: {
      type: 'string',
    },
    LocationPolicy: {
      type: 'string',
    },
    MobilityPolicy: {
      type: 'string',
    },
    ClientPolicy: {
      type: 'string',
    },
    PersistentChatPolicy: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeUserPolicySettingsDto_Request = {
  type: 'object',
  properties: {
    VoicePolicy: {
      type: 'string',
    },
    DialPlan: {
      type: 'string',
    },
    MeetingPolicy: {
      type: 'string',
    },
    MeetingPolicyDetails: {
      type: 'string',
    },
    ConferencingPolicy: {
      type: 'string',
    },
    ClientVersionPolicy: {
      type: 'string',
    },
    PinPolicy: {
      type: 'string',
    },
    ExternalAccessPolicy: {
      type: 'string',
    },
    ArchivingPolicy: {
      type: 'string',
    },
    LocationPolicy: {
      type: 'string',
    },
    MobilityPolicy: {
      type: 'string',
    },
    ClientPolicy: {
      type: 'string',
    },
    PersistentChatPolicy: {
      type: 'string',
    },
  },
} as const;

export const $SkypeWorkflowListDto = {
  type: 'object',
  properties: {
    SkypeWorkflows: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SkypeWorkflowDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeWorkflowDto_List = {
  required: [
    'ApplicationServiceName',
    'LanguageName',
    'OrganizationId',
    'SIPAddress',
    'WorkflowName',
  ],
  type: 'object',
  properties: {
    WorkflowId: {
      type: 'integer',
      format: 'int32',
    },
    WorkflowName: {
      type: 'string',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationName: {
      type: 'string',
    },
    SIPAddress: {
      type: 'string',
    },
    DisplayNumber: {
      type: 'string',
    },
    Type: {
      type: 'string',
    },
    GUID: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    LineURIId: {
      type: 'integer',
      format: 'int32',
    },
    LineURI: {
      type: 'string',
    },
    IsDisabled: {
      type: 'boolean',
    },
    IsDeleted: {
      type: 'boolean',
    },
    WorkflowIdentity: {
      type: 'string',
    },
    LanguageName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    IsActivated: {
      type: 'boolean',
    },
    IsFederationEnabled: {
      type: 'boolean',
    },
    IsAnonymityEnabled: {
      type: 'boolean',
    },
    IsManaged: {
      type: 'boolean',
    },
    TimeZone: {
      type: 'string',
    },
    UseDefaultBusinessHours: {
      type: 'boolean',
    },
    CustomMusicOnHoldFile: {
      type: 'string',
    },
    ApplicationServiceName: {
      type: 'string',
    },
    Managers: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  },
} as const;

export const $SkypeWorkflowDto = {
  required: [
    'ApplicationServiceName',
    'LanguageName',
    'OrganizationId',
    'SIPAddress',
    'WorkflowName',
  ],
  type: 'object',
  properties: {
    WorkflowId: {
      type: 'integer',
      format: 'int32',
    },
    WorkflowName: {
      type: 'string',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    OrganizationName: {
      type: 'string',
    },
    SIPAddress: {
      type: 'string',
    },
    DisplayNumber: {
      type: 'string',
    },
    Type: {
      type: 'string',
    },
    GUID: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    LineURIId: {
      type: 'integer',
      format: 'int32',
    },
    LineURI: {
      type: 'string',
    },
    IsDisabled: {
      type: 'boolean',
    },
    IsDeleted: {
      type: 'boolean',
    },
    WorkflowIdentity: {
      type: 'string',
    },
    LanguageName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    IsActivated: {
      type: 'boolean',
    },
    IsFederationEnabled: {
      type: 'boolean',
    },
    IsAnonymityEnabled: {
      type: 'boolean',
    },
    IsManaged: {
      type: 'boolean',
    },
    TimeZone: {
      type: 'string',
    },
    UseDefaultBusinessHours: {
      type: 'boolean',
    },
    CustomMusicOnHoldFile: {
      type: 'string',
    },
    ApplicationServiceName: {
      type: 'string',
    },
    Managers: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeWorkflowDto_Request = {
  required: [
    'ApplicationServiceName',
    'Description',
    'LanguageName',
    'OrganizationId',
    'SIPAddress',
    'WorkflowName',
  ],
  type: 'object',
  properties: {
    WorkflowName: {
      type: 'string',
    },
    OrganizationId: {
      type: 'integer',
      format: 'int32',
    },
    SIPAddress: {
      type: 'string',
      description:
        "SIP adress should be in given format, 'sip:displayName@sipDomainName' ",
    },
    DisplayNumber: {
      type: 'string',
    },
    Type: {
      type: 'string',
      enum: ['Managed', 'Unmanaged'],
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    LineURIId: {
      type: 'integer',
      description:
        "You can get line URI id by calling 'GET /skype-server/line-uris'.",
      format: 'int32',
    },
    LanguageName: {
      type: 'string',
      description:
        "You can get languages by calling 'GET /system-entities/skype/workflow-languages'.",
    },
    Description: {
      type: 'string',
    },
    IsFederationEnabled: {
      type: 'boolean',
    },
    IsAnonymityEnabled: {
      type: 'boolean',
    },
    TimeZone: {
      type: 'string',
      description:
        "You can get time zones by calling 'GET /skype-server/{serverRoleId}/time-zones'.",
    },
    ApplicationServiceName: {
      type: 'string',
      description:
        "Application service name should be in the format, 'ApplicationServer:application server name'.",
    },
    Managers: {
      type: 'array',
      description: "Managers required when 'type' is 'Managed'.",
      items: {
        type: 'string',
      },
    },
  },
} as const;

export const $SkypeWorkflowGeneralSettingsDto = {
  type: 'object',
  properties: {
    WorkflowName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    LineUri: {
      type: 'string',
    },
    DisplayNumber: {
      type: 'string',
    },
    Language: {
      type: 'string',
    },
    TimeZone: {
      type: 'string',
    },
  },
} as const;

export const $SkypeWorkflowStatusDto = {
  type: 'object',
  properties: {
    WorkflowId: {
      type: 'integer',
      format: 'int32',
    },
    IsDisabled: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeWorkflowStatusDto_Request = {
  type: 'object',
  properties: {
    IsDisabled: {
      type: 'boolean',
    },
  },
} as const;

export const $SkypeWorkflowIvrSettingsDto = {
  type: 'object',
  properties: {
    WorkflowId: {
      type: 'integer',
      format: 'int32',
    },
    Name: {
      type: 'string',
    },
    DefaultAction: {
      $ref: '#/components/schemas/SkypeResponseGroupCallActionDto',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SkypeWorkflowIvrSettingsDto_Request = {
  type: 'object',
  properties: {
    WorkflowId: {
      type: 'integer',
      format: 'int32',
    },
    Name: {
      type: 'string',
    },
    DefaultAction: {
      $ref: '#/components/schemas/SkypeResponseGroupCallActionDto',
    },
  },
} as const;

export const $SkypeResponseGroupCallActionDto = {
  type: 'object',
  properties: {
    CallActionType: {
      type: 'string',
    },
    Prompt: {
      $ref: '#/components/schemas/SkypeResponseGroupPromptDto',
    },
    Question: {
      $ref: '#/components/schemas/SkypeResponseGroupQuestionDto',
    },
    QueueName: {
      type: 'string',
    },
    QueueIdentity: {
      type: 'string',
    },
    SipUri: {
      type: 'string',
    },
  },
} as const;

export const $SkypeResponseGroupPromptDto = {
  type: 'object',
  properties: {
    TextToSpeechPrompt: {
      type: 'string',
    },
    AudioFilePath: {
      type: 'string',
    },
  },
} as const;

export const $SkypeResponseGroupQuestionDto = {
  type: 'object',
  properties: {
    Prompt: {
      $ref: '#/components/schemas/SkypeResponseGroupPromptDto',
    },
    AnswerList: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SkypeResponseGroupAnswerDto',
      },
    },
    InvalidAnswerPrompt: {
      $ref: '#/components/schemas/SkypeResponseGroupPromptDto',
    },
    NoAnswerPrompt: {
      $ref: '#/components/schemas/SkypeResponseGroupPromptDto',
    },
    Name: {
      type: 'string',
    },
  },
} as const;

export const $SkypeResponseGroupAnswerDto = {
  type: 'object',
  properties: {
    Action: {
      $ref: '#/components/schemas/SkypeResponseGroupCallActionDto',
    },
    DigitResponse: {
      type: 'string',
    },
    VoiceResponseList: {
      type: 'string',
    },
    Name: {
      type: 'string',
    },
  },
} as const;

export const $VirtualMachinesDto = {
  type: 'object',
  properties: {
    VirtualMachines: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/VirtualMachineDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $VirtualMachineDto_List = {
  required: ['DisplayName', 'OsAdminPassword'],
  type: 'object',
  properties: {
    IpAddresses: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/VMIPAddressDto',
      },
    },
    VirtualMachineId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    OsTemplateId: {
      type: 'integer',
      format: 'int32',
    },
    OsTemplate: {
      type: 'string',
    },
    OsAdminName: {
      type: 'string',
    },
    OsAdminPassword: {
      type: 'string',
    },
    RamSize: {
      type: 'integer',
      format: 'int32',
    },
    HardDriveSize: {
      type: 'integer',
      format: 'int32',
    },
    CpuCores: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    VirtualMachineGuid: {
      type: 'string',
    },
    NumberOfSnapshots: {
      type: 'integer',
      format: 'int32',
    },
    PublicVLanId: {
      type: 'integer',
      format: 'int32',
    },
    PrivateVLanId: {
      type: 'integer',
      format: 'int32',
    },
    VmStatus: {
      type: 'string',
    },
    ProviderId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerName: {
      type: 'string',
    },
    PublicNetwork: {
      $ref: '#/components/schemas/VirtualNetworkDto',
    },
    PrivateNetwork: {
      $ref: '#/components/schemas/VirtualNetworkDto',
    },
    ManagementNetwork: {
      $ref: '#/components/schemas/VirtualNetworkDto',
    },
    AdminPassword: {
      type: 'string',
    },
    VHDSize: {
      type: 'integer',
      format: 'int32',
    },
    Platform: {
      type: 'string',
    },
    ErrorReason: {
      type: 'string',
    },
    ExternalSwitchId: {
      type: 'string',
    },
    InternalSwithcId: {
      type: 'string',
    },
    PublicIpAddresses: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/IpAddressDto:List',
      },
    },
    PrivateIpAddresses: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/IpAddressDto:List',
      },
    },
    State: {
      type: 'integer',
      format: 'int32',
      enum: [
        0, 2, 3, 6, 10, 32768, 32769, 32770, 32771, 32772, 32773, 32774, 32775,
        32776,
      ],
    },
    ProviderName: {
      type: 'string',
    },
    IsWindows: {
      type: 'boolean',
    },
    PlatformName: {
      type: 'string',
    },
    OnPremises: {
      type: 'boolean',
    },
  },
} as const;

export const $VirtualMachineDto = {
  required: ['DisplayName', 'OsAdminPassword'],
  type: 'object',
  properties: {
    IpAddresses: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/VMIPAddressDto',
      },
    },
    VirtualMachineId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    OsTemplateId: {
      type: 'integer',
      format: 'int32',
    },
    OsTemplate: {
      type: 'string',
    },
    OsAdminName: {
      type: 'string',
    },
    OsAdminPassword: {
      type: 'string',
    },
    RamSize: {
      type: 'integer',
      format: 'int32',
    },
    HardDriveSize: {
      type: 'integer',
      format: 'int32',
    },
    CpuCores: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    VirtualizationServer: {
      $ref: '#/components/schemas/VirtualizationServerDto',
    },
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    VirtualMachineGuid: {
      type: 'string',
    },
    VirtualizationServerName: {
      type: 'string',
    },
    ServerIp: {
      type: 'string',
    },
    NumberOfSnapshots: {
      type: 'integer',
      format: 'int32',
    },
    PublicVLanId: {
      type: 'integer',
      format: 'int32',
    },
    PrivateVLanId: {
      type: 'integer',
      format: 'int32',
    },
    VmStatus: {
      type: 'string',
    },
    ProviderId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerName: {
      type: 'string',
    },
    PublicNetwork: {
      $ref: '#/components/schemas/VirtualNetworkDto',
    },
    PrivateNetwork: {
      $ref: '#/components/schemas/VirtualNetworkDto',
    },
    ManagementNetwork: {
      $ref: '#/components/schemas/VirtualNetworkDto',
    },
    AdminPassword: {
      type: 'string',
    },
    VHDSize: {
      type: 'integer',
      format: 'int32',
    },
    Platform: {
      type: 'string',
    },
    ErrorReason: {
      type: 'string',
    },
    ExternalSwitchId: {
      type: 'string',
    },
    InternalSwithcId: {
      type: 'string',
    },
    PublicIpAddresses: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/IpAddressDto:List',
      },
    },
    PrivateIpAddresses: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/IpAddressDto:List',
      },
    },
    State: {
      type: 'integer',
      format: 'int32',
      enum: [
        0, 2, 3, 6, 10, 32768, 32769, 32770, 32771, 32772, 32773, 32774, 32775,
        32776,
      ],
    },
    ProviderName: {
      type: 'string',
    },
    IsWindows: {
      type: 'boolean',
    },
    PlatformName: {
      type: 'string',
    },
    ExpandRequired: {
      type: 'boolean',
    },
    OnPremises: {
      type: 'boolean',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $VMIPAddressDto = {
  type: 'object',
  properties: {
    IsPublicIP: {
      type: 'boolean',
    },
    IpAddress: {
      type: 'string',
    },
    Subnet: {
      type: 'string',
    },
    GateWay: {
      type: 'string',
    },
    PreferredDnsServer: {
      type: 'string',
    },
    AlternatedDnsServer: {
      type: 'string',
    },
    Family: {
      type: 'string',
    },
  },
} as const;

export const $VirtualizationServerDto = {
  type: 'object',
  properties: {
    ServerIp: {
      type: 'string',
    },
    Type: {
      type: 'string',
    },
    ServerAddress: {
      type: 'string',
    },
    Domain: {
      type: 'string',
    },
    AuthUser: {
      type: 'string',
    },
    AuthPass: {
      type: 'string',
    },
    Version: {
      type: 'integer',
      format: 'int32',
    },
    APIUrl: {
      type: 'string',
    },
    HostName: {
      type: 'string',
    },
    DataCenter: {
      type: 'string',
    },
  },
} as const;

export const $VirtualNetworkDto = {
  type: 'object',
  properties: {
    IPAddresses: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/VMIPAddressDto',
      },
    },
    DNSServers: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    Enabled: {
      type: 'boolean',
    },
    IsLegacyNetwork: {
      type: 'boolean',
    },
    SwitchID: {
      type: 'string',
    },
  },
} as const;

export const $IpAddressDto_List = {
  required: ['Gateway', 'IpAddress', 'SubnetMask'],
  type: 'object',
  properties: {
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    ServerName: {
      type: 'string',
    },
    ServerIP: {
      type: 'string',
    },
    IpAddressId: {
      type: 'integer',
      format: 'int32',
    },
    IpAddress: {
      type: 'string',
    },
    IpType: {
      type: 'string',
    },
    IpTypeId: {
      type: 'integer',
      format: 'int32',
    },
    SubnetMask: {
      type: 'string',
    },
    Gateway: {
      type: 'string',
    },
    PreferredDns: {
      type: 'string',
    },
    AlternateDns: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    Pool: {
      type: 'string',
    },
    VirtualMachineId: {
      type: 'integer',
      format: 'int32',
    },
    Limit: {
      type: 'integer',
      format: 'int32',
    },
    VirtualMachineName: {
      type: 'string',
    },
  },
} as const;

export const $IpAddressDto = {
  required: ['Gateway', 'IpAddress', 'SubnetMask'],
  type: 'object',
  properties: {
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    ServerName: {
      type: 'string',
    },
    ServerIP: {
      type: 'string',
    },
    IpAddressId: {
      type: 'integer',
      format: 'int32',
    },
    IpAddress: {
      type: 'string',
    },
    IpType: {
      type: 'string',
    },
    IpTypeId: {
      type: 'integer',
      format: 'int32',
    },
    SubnetMask: {
      type: 'string',
    },
    Gateway: {
      type: 'string',
    },
    PreferredDns: {
      type: 'string',
    },
    AlternateDns: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    Pool: {
      type: 'string',
    },
    VirtualMachineId: {
      type: 'integer',
      format: 'int32',
    },
    Limit: {
      type: 'integer',
      format: 'int32',
    },
    VirtualMachineName: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $AddVmDto = {
  required: [
    'DisplayName',
    'OsAdminPassword',
    'ProviderId',
    'ResourceComponentPropId',
  ],
  type: 'object',
  properties: {
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    VirtualMachineId: {
      type: 'integer',
      format: 'int32',
    },
    RamSize: {
      type: 'integer',
      format: 'int32',
    },
    HardDriveSize: {
      type: 'integer',
      format: 'int32',
    },
    CpuCores: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    KeyPairName: {
      type: 'string',
    },
    PublicNetworkEnabled: {
      type: 'boolean',
    },
    PrivateNetworkEnabled: {
      type: 'boolean',
    },
    OsTemplateId: {
      type: 'integer',
      format: 'int32',
    },
    OsAdminName: {
      type: 'string',
    },
    OsAdminPassword: {
      type: 'string',
    },
    ProviderId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    ResourceComponentPropId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $AddVmDto_Request = {
  required: [
    'DisplayName',
    'OsAdminPassword',
    'ProviderId',
    'ResourceComponentPropId',
  ],
  type: 'object',
  properties: {
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    RamSize: {
      type: 'integer',
      format: 'int32',
    },
    HardDriveSize: {
      type: 'integer',
      format: 'int32',
    },
    CpuCores: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    KeyPairName: {
      type: 'string',
    },
    PublicNetworkEnabled: {
      type: 'boolean',
    },
    PrivateNetworkEnabled: {
      type: 'boolean',
    },
    OsTemplateId: {
      type: 'integer',
      format: 'int32',
    },
    OsAdminName: {
      type: 'string',
    },
    OsAdminPassword: {
      type: 'string',
    },
    ProviderId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    ResourceComponentPropId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $UpdateVmDto = {
  required: [
    'DisplayName',
    'OsAdminPassword',
    'ProviderId',
    'ResourceComponentPropId',
  ],
  type: 'object',
  properties: {
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    VirtualMachineId: {
      type: 'integer',
      format: 'int32',
    },
    RamSize: {
      type: 'integer',
      format: 'int32',
    },
    HardDriveSize: {
      type: 'integer',
      format: 'int32',
    },
    CpuCores: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    KeyPairName: {
      type: 'string',
    },
    PublicNetworkEnabled: {
      type: 'boolean',
    },
    PrivateNetworkEnabled: {
      type: 'boolean',
    },
    OsTemplateId: {
      type: 'integer',
      format: 'int32',
    },
    OsAdminName: {
      type: 'string',
    },
    OsAdminPassword: {
      type: 'string',
    },
    ProviderId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    ResourceComponentPropId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $UpdateVmDto_Request = {
  required: [
    'DisplayName',
    'OsAdminPassword',
    'ProviderId',
    'ResourceComponentPropId',
  ],
  type: 'object',
  properties: {
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    RamSize: {
      type: 'integer',
      format: 'int32',
    },
    HardDriveSize: {
      type: 'integer',
      format: 'int32',
    },
    CpuCores: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    KeyPairName: {
      type: 'string',
    },
    PublicNetworkEnabled: {
      type: 'boolean',
    },
    PrivateNetworkEnabled: {
      type: 'boolean',
    },
    OsTemplateId: {
      type: 'integer',
      format: 'int32',
    },
    OsAdminName: {
      type: 'string',
    },
    OsAdminPassword: {
      type: 'string',
    },
    ProviderId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    ResourceComponentPropId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $VmAddUpdateResultDto = {
  type: 'object',
  properties: {
    VirtualMachineId: {
      type: 'integer',
      format: 'int32',
    },
    ViolationResourcesReport: {
      $ref: '#/components/schemas/ResourceQtyViolationReportDto:List',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ResourceQtyViolationReportDto_List = {
  type: 'object',
  properties: {
    ViolatedResources: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ResourceQtyViolationDto',
      },
    },
  },
} as const;

export const $ResourceQtyViolationReportDto = {
  type: 'object',
  properties: {
    ViolatedResources: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ResourceQtyViolationDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ResourceQtyViolationDto = {
  type: 'object',
  properties: {
    ResourceId: {
      type: 'integer',
      format: 'int32',
    },
    ResourceDisplayName: {
      type: 'string',
    },
    DesiredQty: {
      type: 'integer',
      format: 'int32',
    },
    AllocatedQty: {
      type: 'integer',
      format: 'int32',
    },
    SoldQty: {
      type: 'integer',
      format: 'int32',
    },
    UsedQty: {
      type: 'integer',
      format: 'int32',
    },
    RemainingQty: {
      type: 'integer',
      format: 'int32',
    },
    SubResources: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SubResourceQtyViolationDto',
      },
    },
    AffactedUsers: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/ResourceQtyViolationAffacteesDto',
      },
    },
  },
} as const;

export const $SubResourceQtyViolationDto = {
  type: 'object',
  properties: {
    ResourceId: {
      type: 'integer',
      format: 'int32',
    },
    ResourceDisplayName: {
      type: 'string',
    },
    DesiredQty: {
      type: 'integer',
      format: 'int32',
    },
    AllocatedQty: {
      type: 'integer',
      format: 'int32',
    },
    SoldQty: {
      type: 'integer',
      format: 'int32',
    },
    UsedQty: {
      type: 'integer',
      format: 'int32',
    },
    RemainingQty: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $ResourceQtyViolationAffacteesDto = {
  type: 'object',
  properties: {
    UserId: {
      type: 'integer',
      format: 'int32',
    },
    UserName: {
      type: 'string',
    },
    DesiredQty: {
      type: 'integer',
      format: 'int32',
    },
    AllocatedQty: {
      type: 'integer',
      format: 'int32',
    },
    SoldQty: {
      type: 'integer',
      format: 'int32',
    },
    UsedQty: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $UpdateVLanDto = {
  type: 'object',
  properties: {
    VirtualMachineId: {
      type: 'integer',
      format: 'int32',
    },
    PublicVLanId: {
      type: 'integer',
      format: 'int32',
    },
    PrivateVLanId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $UpdateVLanDto_Request = {
  type: 'object',
  properties: {
    PublicVLanId: {
      type: 'integer',
      format: 'int32',
    },
    PrivateVLanId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $SystemVirtualMachinesDto = {
  type: 'object',
  properties: {
    VirtualMachines: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/VirtualMachineSettingsDto',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $VirtualMachineSettingsDto = {
  type: 'object',
  properties: {
    Name: {
      type: 'string',
    },
    ID: {
      type: 'string',
    },
    RamSize: {
      type: 'integer',
      format: 'int32',
    },
    CpuCores: {
      type: 'integer',
      format: 'int32',
    },
    VHDPath: {
      type: 'string',
    },
    VHDSize: {
      type: 'integer',
      format: 'int32',
    },
    UpTime: {
      type: 'integer',
      format: 'int64',
    },
    State: {
      type: 'integer',
      format: 'int32',
      enum: [
        0, 2, 3, 6, 10, 32768, 32769, 32770, 32771, 32772, 32773, 32774, 32775,
        32776,
      ],
    },
  },
} as const;

export const $VmIpAddressesDto = {
  type: 'object',
  properties: {
    PublicIpAddresses: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/IpAddressDto:List',
      },
    },
    PrivateIpAddresses: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/IpAddressDto:List',
      },
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $AssignVmIpAddressesDto = {
  type: 'object',
  properties: {
    NoOfPublicIpAddresses: {
      type: 'integer',
      format: 'int32',
    },
    NoOfPrivateIpAddresses: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $SnapShotsDto = {
  type: 'object',
  properties: {
    SnapShotList: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/SnapShotDetailDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $SnapShotDetailDto_List = {
  type: 'object',
  properties: {
    VirtualMachineId: {
      type: 'integer',
      format: 'int32',
    },
    SnapShotGUId: {
      type: 'string',
    },
    SnapShotId: {
      type: 'integer',
      format: 'int32',
    },
    SnapShotName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    VirtualMachineName: {
      type: 'string',
    },
    Dated: {
      type: 'string',
      format: 'date-time',
    },
  },
} as const;

export const $SnapShotDetailDto_Request = {
  type: 'object',
  properties: {
    SnapShotName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
  },
} as const;

export const $SnapShotDetailDto_ApplyRequest = {
  type: 'object',
  properties: {
    SnapShotGUId: {
      type: 'string',
    },
    SnapShotId: {
      type: 'integer',
      format: 'int32',
    },
    SnapShotName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    Dated: {
      type: 'string',
      format: 'date-time',
    },
  },
} as const;

export const $SnapShotDetailDto = {
  type: 'object',
  properties: {
    VirtualMachineId: {
      type: 'integer',
      format: 'int32',
    },
    SnapShotGUId: {
      type: 'string',
    },
    SnapShotId: {
      type: 'integer',
      format: 'int32',
    },
    SnapShotName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    VirtualMachineName: {
      type: 'string',
    },
    Dated: {
      type: 'string',
      format: 'date-time',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ChangeVmPasswordDto = {
  type: 'object',
  properties: {
    VirtualMachineId: {
      type: 'integer',
      format: 'int32',
    },
    OsAdminPassword: {
      type: 'string',
    },
    OsAdminName: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ChangeVmPasswordDto_Request = {
  type: 'object',
  properties: {
    OsAdminPassword: {
      type: 'string',
    },
    OsAdminName: {
      type: 'string',
    },
  },
} as const;

export const $ImportVmDto = {
  required: [
    'DisplayName',
    'OsAdminPassword',
    'ProviderId',
    'ResourceComponentPropId',
  ],
  type: 'object',
  properties: {
    VirtualMachineGuid: {
      type: 'string',
    },
    VmStatus: {
      type: 'string',
    },
    PublicIpAddresses: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/IpAddressDto:List',
      },
    },
    PrivateIpAddresses: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/IpAddressDto:List',
      },
    },
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    VirtualMachineId: {
      type: 'integer',
      format: 'int32',
    },
    RamSize: {
      type: 'integer',
      format: 'int32',
    },
    HardDriveSize: {
      type: 'integer',
      format: 'int32',
    },
    CpuCores: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    KeyPairName: {
      type: 'string',
    },
    PublicNetworkEnabled: {
      type: 'boolean',
    },
    PrivateNetworkEnabled: {
      type: 'boolean',
    },
    OsTemplateId: {
      type: 'integer',
      format: 'int32',
    },
    OsAdminName: {
      type: 'string',
    },
    OsAdminPassword: {
      type: 'string',
    },
    ProviderId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    ResourceComponentPropId: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $ImportVmDto_Request = {
  required: [
    'DisplayName',
    'OsAdminPassword',
    'ProviderId',
    'ResourceComponentPropId',
  ],
  type: 'object',
  properties: {
    VirtualMachineGuid: {
      type: 'string',
    },
    VmStatus: {
      type: 'string',
    },
    PublicIpAddresses: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/IpAddressDto:List',
      },
    },
    PrivateIpAddresses: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/IpAddressDto:List',
      },
    },
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    CResourceId: {
      type: 'integer',
      format: 'int32',
    },
    VirtualMachineId: {
      type: 'integer',
      format: 'int32',
    },
    RamSize: {
      type: 'integer',
      format: 'int32',
    },
    HardDriveSize: {
      type: 'integer',
      format: 'int32',
    },
    CpuCores: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    Description: {
      type: 'string',
    },
    KeyPairName: {
      type: 'string',
    },
    PublicNetworkEnabled: {
      type: 'boolean',
    },
    PrivateNetworkEnabled: {
      type: 'boolean',
    },
    OsTemplateId: {
      type: 'integer',
      format: 'int32',
    },
    OsAdminName: {
      type: 'string',
    },
    OsAdminPassword: {
      type: 'string',
    },
    ProviderId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    ResourceComponentPropId: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $TransferVmDto = {
  type: 'object',
  properties: {
    OwnerId: {
      type: 'integer',
      format: 'int32',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    UserName: {
      type: 'string',
    },
    DisplayName: {
      type: 'string',
    },
    OwnerName: {
      type: 'string',
    },
    OsTemplate: {
      type: 'string',
    },
    Status: {
      type: 'string',
    },
    CpuCores: {
      type: 'integer',
      format: 'int32',
    },
    RamSize: {
      type: 'integer',
      format: 'int32',
    },
    HardDriveSize: {
      type: 'integer',
      format: 'int32',
    },
  },
} as const;

export const $VirtualMachineStatusDto = {
  type: 'object',
  properties: {
    VirtualMachineStatus: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $FetchMachinePasswordDto = {
  type: 'object',
  properties: {
    MachineId: {
      type: 'integer',
      format: 'int32',
    },
    Password: {
      type: 'string',
    },
    FileContents: {
      type: 'string',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $FetchMachinePasswordDto_Request = {
  type: 'object',
  properties: {
    MachineId: {
      type: 'integer',
      format: 'int32',
    },
    Password: {
      type: 'string',
    },
    FileContents: {
      type: 'string',
    },
  },
} as const;

export const $VmOsTemplatesDto = {
  type: 'object',
  properties: {
    OsTemplates: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/VmOsTemplateDto:List',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $VmOsTemplateDto_List = {
  required: ['AdminName', 'DisplayName'],
  type: 'object',
  properties: {
    OsTemplateId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    BaseOsType: {
      type: 'string',
    },
    BaseOsSystemName: {
      type: 'string',
    },
    ServerName: {
      type: 'string',
    },
    VhdPath: {
      type: 'string',
    },
    OsAdminPassword: {
      type: 'string',
    },
    ServerRoleId: {
      type: 'integer',
      format: 'int32',
    },
    ResourceComponentPropId: {
      type: 'integer',
      format: 'int32',
    },
    IaasRefId: {
      type: 'string',
    },
    TemplateProperties: {
      $ref: '#/components/schemas/Object',
    },
    ServerId: {
      type: 'integer',
      format: 'int32',
    },
    ProviderName: {
      type: 'string',
    },
    UsageCount: {
      type: 'string',
    },
    IsWindows: {
      type: 'boolean',
    },
    TemplateSize: {
      type: 'integer',
      format: 'int32',
    },
    GenerationType: {
      type: 'integer',
      format: 'int32',
    },
    IaasOSTempConfig: {
      $ref: '#/components/schemas/IaasConfigsDto',
    },
    AdminName: {
      type: 'string',
    },
    PublicNetworkName: {
      type: 'string',
    },
    PrivateNetworkName: {
      type: 'string',
    },
    RepositoryId: {
      type: 'integer',
      format: 'int32',
    },
    ProviderId: {
      type: 'integer',
      format: 'int32',
    },
    Cache: {
      type: 'boolean',
    },
    RepositoryDisplayName: {
      type: 'string',
    },
  },
} as const;

export const $BaseOsTypesDto = {
  type: 'object',
  properties: {
    BaseOsTypes: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/BaseOsTypeDto',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;

export const $BaseOsTypeDto = {
  type: 'object',
  properties: {
    ResourceComponentPropId: {
      type: 'integer',
      format: 'int32',
    },
    DisplayName: {
      type: 'string',
    },
    IsWindows: {
      type: 'boolean',
    },
    IsActive: {
      type: 'boolean',
    },
    DetailValue: {
      type: 'string',
    },
  },
} as const;

export const $VLANDto = {
  type: 'object',
  properties: {
    VLANId: {
      type: 'integer',
      format: 'int32',
    },
    NetworkId: {
      type: 'string',
    },
    AddedBy: {
      type: 'integer',
      format: 'int32',
    },
    VLANName: {
      type: 'string',
    },
    VLANType: {
      type: 'string',
    },
  },
} as const;

export const $VLANsDto = {
  type: 'object',
  properties: {
    VLANList: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/VLANDto',
      },
    },
    TotalRecords: {
      type: 'integer',
      format: 'int32',
    },
    ErrorCode: {
      type: 'string',
    },
    ErrorDesc: {
      type: 'string',
    },
  },
} as const;
