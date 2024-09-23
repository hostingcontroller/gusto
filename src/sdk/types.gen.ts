export type ADMoveObjectListDto_Request = {
  Objects?: Array<AdObjectGroupMemberDto_Request>;
  DestinationOUPath?: string;
};

export type AdObjectMemberofDto_Request = {
  ObjectDn?: string;
};

export type AdObjectsMemberofListDto_Request = {
  Objects?: Array<AdObjectMemberofDto_Request>;
  ObjectDn?: string;
};

export type AdObjectMemberofDto = {
  UserDn?: string;
  ObjectName?: string;
};

export type AdObjectsMemberofListDto = {
  Objects?: Array<AdObjectMemberofDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type GroupMangaedByDto_Request = {
  ObjectDn?: string;
  ManagedBy?: string;
};

export type GroupMangaedByDto = {
  ManagedBy?: string;
  ObjectName?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type AdObjectDetailsDto = {
  ObjectDn?: string;
  Protection?: boolean;
};

export type AdObjectGroupMemberDto = {
  UserDn?: string;
  Protection?: boolean;
  ObjectName?: string;
};

export type AdObjectGroupMemberDto_Request = {
  ObjectDn?: string;
};

export type AdObjectsGroupMemberListDto = {
  Objects?: Array<AdObjectGroupMemberDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type AdObjectsGroupMemberListDto_Request = {
  Objects?: Array<AdObjectGroupMemberDto_Request>;
  ObjectDn?: string;
};

export type ADUserAccountSettingDto_Request = {
  UserDn?: string;
  SetToNeverExpire?: boolean;
  ExpiryDateTime?: Date;
};

export type ADUserAccountSettingDto = {
  ExpiryDateTime?: Date;
  SetToNeverExpire?: boolean;
  RequirePasswordOnNextLogon?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type AdUsersDto_Request = {
  AdUsers?: Array<AdUserDto_Request>;
};

export type AdUserDto_Request = {
  UserDn?: string;
};

export type AdUserPasswordDto = {
  Password: string;
  RequirePasswordOnNextLogon?: boolean;
  UserDn?: string;
};

export type ActiveDirectoryObjectDto = {
  UpnSuffix?: string;
  SystemName?: string;
  DisplayName?: string;
  Password?: string;
  RequirePasswordOnNextLogon?: boolean;
  OwnerId?: number;
  OrganizationId?: number;
  OrganizationName?: string;
  OuPath?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ActiveDirectoryObjectDto_Request = {
  OrganizationId: number;
  DisplayName: string;
  SystemName: string;
  Password?: string;
  UpnSuffix?: string;
};

export type AdObjectsDto = {
  AdObjects?: Array<AdObjectDto_Request>;
};

export type AdObjectDto_Request = {
  ObjectDn?: string;
  ObjectType?: string;
};

export type OrganizationObjectsDto = {
  OrganizationObjects?: Array<OrganizationObjectDto_List>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type OrganizationObjectDto_List = {
  Name?: string;
  DistinguishedName?: string;
  Enabled?: boolean;
  ObjectType?: string;
  ObjectDetailedType?: string;
};

export type ADUserGeneralProfileDto = {
  ObjectType?: string;
  FirstName?: string;
  LastName?: string;
  DisplayName?: string;
  Initials?: string;
  OfficeLocation?: string;
  StreetAddress?: string;
  ZipCode?: string;
  City?: string;
  State?: string;
  CountryId?: number;
  CountryAbbreviation?: string;
  JobTitle?: string;
  Company?: string;
  Department?: string;
  BusinessPhone?: string;
  HomePhone?: string;
  MobilePhone?: string;
  Fax?: string;
  WebPage?: string;
  Notes?: string;
  Pager?: string;
  UserManager?: ManagerDto;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ManagerDto = {
  Email?: string;
};

export type User = {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  /**
   * User Status
   */
  userStatus?: number;
};

export type ApiResponse = {
  code?: number;
  type?: string;
  message?: string;
};

export type AddUserDto = {
  UserId?: number;
  UserName: string;
  EmailAddress: string;
  RoleId?: number;
  Password: string;
  Description?: string;
  IsDisabled?: number;
  OwnerId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type UsersSearchDto = {
  UserName?: string;
  OwnerId?: number;
  IsDisabled?: number;
  IsBilling?: boolean;
  IsDefaultCreditCardEnabled?: boolean;
  RoleId?: number;
  FirstName?: string;
  LastName?: string;
  Company?: string;
  EmailAddress?: string;
  DirectChild?: boolean;
  ExactNameMatch?: boolean;
  CustomersOnly?: boolean;
  StaffMembersOnly?: boolean;
  CurrentPage?: number;
  PageSize?: number;
};

export type UsersDto = {
  Users?: Array<UserDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type UserDto = {
  UserId?: number;
  UserName: string;
  RoleId?: number;
  RoleName?: string;
  Password: string;
  EmailAddress: string;
  IsSubadmin?: boolean;
  OwnerId?: number;
  OwnerName?: string;
  Description?: string;
  FullName?: string;
  IsDisabled?: number;
  DisabledBy?: number;
  IsDefaultCreditCardEnabled?: boolean;
  BillingProfileId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type UserDto_List = {
  UserId?: number;
  UserName: string;
  RoleId?: number;
  RoleName?: string;
  Password: string;
  EmailAddress: string;
  IsSubadmin?: boolean;
  OwnerId?: number;
  OwnerName?: string;
  Description?: string;
  FullName?: string;
  IsDisabled?: number;
};

export type UserUpdateDto = {
  UserId?: number;
  Password: string;
  Description?: string;
  IsDisabled?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type AddUserDto_Request = {
  /**
   * User name cannot be more than 20 characters long and white space is not allowed.
   */
  UserName: string;
  /**
   * Email address should be valid.
   */
  EmailAddress: string;
  /**
   * You can get role id by calling 'GET /user-roles'
   */
  RoleId: number;
  /**
   * Password should be complex, if the password complexity is enabled.
   */
  Password: string;
  Description?: string;
  /**
   * Set it true if want to disable user.
   */
  IsDisabled?: number;
  OwnerId?: number;
};

export type UserUpdateDto_Request = {
  /**
   * Password should be complex, if the password complexity is enabled.
   */
  Password: string;
  Description?: string;
  /**
   * Set it true if want to disable user.
   */
  IsDisabled?: number;
};

export type UserDisableOptionDto = {
  /**
   * possible values are as follows
   */
  DisableOption?:
    | 'restrictpanelaccess'
    | 'suspenduser'
    | 'restrictpanelaccessandsuspenduser';
};

/**
 * possible values are as follows
 */
export type DisableOption =
  | 'restrictpanelaccess'
  | 'suspenduser'
  | 'restrictpanelaccessandsuspenduser';

/**
 * possible values are as follows
 */
export const DisableOption = {
  RESTRICTPANELACCESS: 'restrictpanelaccess',
  SUSPENDUSER: 'suspenduser',
  RESTRICTPANELACCESSANDSUSPENDUSER: 'restrictpanelaccessandsuspenduser',
} as const;

export type UserChangePasswordDto = {
  /**
   * New password.
   */
  Password: string;
};

export type UserProfileDto_Request = {
  FirstName: string;
  LastName: string;
  Company?: string;
  EmailAddress: string;
  Country: number;
  State: string;
  City: string;
  StreetAddress: string;
  StreetAddress2?: string;
  PostalCode?: string;
  PhoneNo: string;
  FaxNo?: string;
  SocialSecurityNo?: string;
  CustomFields?: Array<UserCustomFieldDto>;
};

export type UserProfileDto = {
  FirstName: string;
  LastName: string;
  EmailAddress: string;
  Company?: string;
  Country?: number;
  State: string;
  City: string;
  StreetAddress: string;
  StreetAddress2?: string;
  PostalCode?: string;
  PhoneNo: string;
  FaxNo?: string;
  SocialSecurityNo?: string;
  CustomFieldXml?: string;
  CustomFields?: Array<UserCustomFieldDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type UserCustomFieldDto = {
  CustomFieldId?: number;
  Value?: string;
};

export type BillingProfileDto = {
  BillingProfileId?: number;
  UserId?: number;
  UserName?: string;
  FirstName: string;
  LastName: string;
  BillingAddress: string;
  BillingCity: string;
  State: string;
  Country?: number;
  ZipCode: string;
  BillingPhone: string;
  BillingFax?: string;
  BillingEmail: string;
  CreditLimit?: number;
  DefaultDiscount?: number;
  CreditCardTypeId?: number;
  CreditCardType?: string;
  CreditCardNo?: string;
  ExpireDate?: Date;
  Cvv2?: string;
  IsEnabled?: boolean;
  IsDefault?: boolean;
  CustomFields?: Array<UserCustomFieldDto>;
  CustomFieldXml?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type BillingProfileDto_List = {
  BillingProfileId?: number;
  UserId?: number;
  UserName?: string;
  FirstName: string;
  LastName: string;
  BillingAddress: string;
  BillingCity: string;
  State: string;
  Country?: number;
  ZipCode: string;
  BillingPhone: string;
  BillingFax?: string;
  BillingEmail: string;
  CreditLimit?: number;
  DefaultDiscount?: number;
  CreditCardTypeId?: number;
  CreditCardType?: string;
  CreditCardNo?: string;
  ExpireDate?: Date;
  Cvv2?: string;
  IsEnabled?: boolean;
  IsDefault?: boolean;
  CustomFields?: Array<UserCustomFieldDto>;
  CustomFieldXml?: string;
};

export type BillingProfileDto_Request = {
  UserId?: number;
  UserName?: string;
  FirstName: string;
  LastName: string;
  BillingAddress: string;
  BillingCity: string;
  State: string;
  Country?: number;
  ZipCode: string;
  BillingPhone: string;
  BillingFax?: string;
  BillingEmail: string;
  CreditLimit?: number;
  DefaultDiscount?: number;
  CreditCardTypeId?: number;
  CreditCardType?: string;
  CreditCardNo?: string;
  ExpireDate?: Date;
  Cvv2?: string;
  IsEnabled?: boolean;
  IsDefault?: boolean;
  CustomFields?: Array<UserCustomFieldDto>;
  CustomFieldXml?: string;
};

export type BillingProfileSearchDto = {
  UserName?: string;
  defaultOnly?: string;
  CreditCardTypeId?: number;
  UserId?: number;
  IncludeUsersProfile?: boolean;
  CurrentPage?: number;
  PageSize?: number;
};

export type BillingProfilesDto = {
  BillingProfiles?: Array<BillingProfileDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type StatusDto = {
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type StatsListDto = {
  Stats?: Array<StatsDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type StatsDto = {
  RoleName?: string;
  Count?: number;
  TotalCount?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type StatsDto_List = {
  RoleName?: string;
  Count?: number;
  TotalCount?: number;
};

export type TokenDto = {
  UserId?: number;
  AuthToken?: string;
  ExpiresIn?: number;
  IssuedOn?: string;
  IsExpired?: boolean;
};

export type AuthenticationDto_Request = {
  LoginName: string;
  Password: string;
  /**
   * Client Application Name
   */
  ApplicationName?: string;
  /**
   * life of token, its value is in hours. Minimum 1 and Maximum 720.
   */
  ExpiresIn?: number;
};

export type AuthenticationDto = {
  LoginName: string;
  Password: string;
  ExpiresIn?: number;
};

export type QuotaReportDto = {
  ReportResources?: Array<QuotaResourceDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type BillingReportsDto = {
  BillingReports?: Array<BillingReportDto>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type BillingReportDto = {
  UserId?: number;
  OwnerId?: number;
  UserName?: string;
  TotalSoldPlans?: number;
  TotalInvoices?: number;
  Balance?: number;
  TotalInvoiceAmounts?: number;
  TotalPaymentsReceived?: number;
  CreditLimit?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type IncomeStatsDto = {
  TotalInvoiceAmounts?: number;
  TotalRevenue?: number;
  IncomeDue?: number;
  TotalPaymentsReceived?: number;
  TotalSubscriptionsCount?: number;
  TotalSubscriptionsAmount?: number;
  TotalTaxes?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type InvoiceStatsDto = {
  TotalInvoices?: number;
  TotalInvoiceAmounts?: number;
  TotalDueInvoices?: number;
  TotalDueInvoicesAmount?: number;
  TotalPaidInvoices?: number;
  TotalPaidInvoicesAmount?: number;
  TotalCancelledInvoices?: number;
  TotalCancelledInvoicesAmount?: number;
  TotalChargedBackInvoices?: number;
  TotalChargedBackInvoicesAmount?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type FundsStatsDto = {
  TotalInvoiceAmounts?: number;
  ConsumedFunds?: number;
  RemainingFunds?: number;
  TotalTaxes?: number;
  TotalPaymentsDone?: number;
  TotalSubscriptionsCount?: number;
  TotalSubscriptionsAmount?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type MailboxStatsReportDto = {
  TotalMailboxCount?: number;
  TotalMailboxSize?: number;
  TotalEnabledMailboxes?: number;
  TotalDisabledMailboxes?: number;
  TotalOWAEnabledMailboxes?: number;
  TotalIMAPEnabledMailboxes?: number;
  TotalMAPIEnabledMailboxes?: number;
  TotalPOPEnabldMailbxoes?: number;
  TotalActiveSyncMailboxes?: number;
  TotalArchiveMailboxes?: number;
  TotalArchiveMailboxSize?: number;
  TotalBBEnabledMailboxes?: number;
  TotalJournalMailboxes?: number;
  TotalPFMailboxes?: number;
  TotalADSyncMailboxes?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeMailboxReportDto = {
  MailboxId?: number;
  OwnerId?: number;
  MailDomainId?: number;
  MailboxType?: string;
  SystemName?: string;
  DisplayName?: string;
  IsNewUser?: string;
  Password?: string;
  MaildomainName?: string;
  CResourceId?: number;
  ActiveSync?: boolean;
  ActiveSyncPolicy?: string;
  IMAP?: boolean;
  POP?: boolean;
  MAPI?: boolean;
  OWA?: boolean;
  MailboxSize?: number;
  OrganizationId?: number;
  OrganizationName?: string;
  ServerRoleId?: number;
  HideFromAddressBook?: boolean;
  MaxIncomingMsgSize?: number;
  MaxOutgoingMsgSize?: number;
  ProhibitSend?: number;
  WarnAt?: number;
  IsDisabled?: boolean;
  Flag?: string;
  OfficeLocation?: string;
  SAMAccount?: string;
  PrimarySMTPAddress?: string;
  Guid?: string;
  MailboxLitigationHoldEnabled?: boolean;
  ArchiveMailboxId?: number;
  MailboxDatabase?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeMailboxReportListDto = {
  Mailboxes?: Array<ExchangeMailboxReportDto>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeCustomReportsDto = {
  ExchangeCustomReports?: Array<ExchangeCustomReportDto>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeCustomReportDto = {
  ReportId?: number;
  ReportName: string;
  ReportDescription?: string;
  ExchangeCommand: string;
  UserId?: number;
  ServerRoleId?: number;
  ExchangeCustomReportOutputFields?: Array<ExchangeGenericReportArgumentsDto>;
  ServerIp?: string;
  ServerName?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeGenericReportArgumentsDto = {
  FieldName?: string;
  FieldValue?: string;
};

export type ExchangeGenericReportListDto = {
  ReportName?: string;
  ReportDescription?: string;
  ExchangeCommand?: string;
  Records?: Array<{
    [key: string]: string;
  }>;
  RecordCount?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ConsumedQuotaResourceDto = {
  RoleName?: string;
  ResourceName?: string;
  ResourceDisplayName?: string;
  Quantity?: number;
};

export type ConsumedQuotaReportDto = {
  ReportResources?: Array<ConsumedQuotaResourceDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type DailyResUsageDto = {
  ResourceName?: string;
  ResourceDisplayName?: string;
  RoleName?: string;
  Usage?: Array<DailyUsageDto>;
};

export type DailyUsageDto = {
  Count?: number;
  DateText?: string;
};

export type DailyResUsageReportDto = {
  Resources?: Array<DailyResUsageDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type PanelStatsDto = {
  Customers?: number;
  StaffMembers?: number;
  ServicePlans?: number;
  SoldPlans?: number;
  Messages?: number;
  ClientTickets?: number;
  MyTickets?: number;
  SubscribedPlans?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type DetailKeyValuePairDto = {
  Key?: string;
  Value?: string;
};

export type QuotaResourceDto = {
  ResourceId?: number;
  ResourceName?: string;
  ResourceDisplayName?: string;
  ProviderId?: number;
  ProviderName?: string;
  ResourceComponent?: string;
  ResourceComponentPropId?: number;
  IsComposite?: boolean;
  AllocatedQty?: number;
  SoldQty?: number;
  UsedQty?: number;
};

export type StatesDto = {
  States?: Array<StateDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type StateDto = {
  StateId?: number;
  StateName?: string;
  StateCode?: string;
  CountryId?: number;
};

export type CountriesDto = {
  Countries?: Array<CountryDto_List>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type CountryDto_List = {
  CountryId?: number;
  CountryName?: string;
  Abbrivation?: string;
  NumericCode?: number;
  ZipCodeRegex?: string;
};

export type CountryDto = {
  CountryId?: number;
  CountryName?: string;
  Abbrivation?: string;
  NumericCode?: number;
  ZipCodeRegex?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type LanguagesDto = {
  Languages?: Array<LanguageDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type LanguageDto = {
  LanguageId?: number;
  LanguageName?: string;
  LanguageDisplayName?: string;
  IsRtl?: boolean;
  LanguageStatus?: boolean;
};

export type TypesItemsDto = {
  TypeItems?: Array<TypeItemsDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type TypeItemsDto = {
  TypeItemId?: number;
  SystemName?: string;
  DisplayName?: string;
  DisplayIndex?: number;
};

export type ErrorLogsDto = {
  ErrorLogs?: Array<ErrorLogDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ErrorLogDto_List = {
  ErrorLogId?: string;
  SourceName?: string;
  MethodName?: string;
  ExpceptionObj?: Object;
  InputParam?: Object;
  ExceptionMsg?: string;
  ExceptionType?: string;
  UserName?: string;
  DateAdded?: Date;
};

export type ErrorLogDto = {
  ErrorLogId?: string;
  SourceName?: string;
  MethodName?: string;
  ExpceptionObj?: Object;
  InputParam?: Object;
  ExceptionMsg?: string;
  ExceptionType?: string;
  UserName?: string;
  DateAdded?: Date;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type Object = {
  [key: string]: unknown;
};

export type AuditsDto = {
  AuditList?: Array<AuditLogDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type AuditLogDto_List = {
  UserId?: number;
  AuditLogId?: number;
  ActionName?: string;
  RequestUri?: string;
  SourceObjectName?: string;
  SourceObjectId?: number;
  SourceObjectType?: string;
  HttpMethod?: string;
  HttpResponseCode?: string;
  DateAdded?: Date;
  UserName?: string;
  LastLoginTime?: Date;
  IPAddress?: string;
};

export type AuditLogDto = {
  UserId?: number;
  AuditLogId?: number;
  ActionName?: string;
  RequestUri?: string;
  SourceObjectName?: string;
  SourceObjectId?: number;
  SourceObjectType?: string;
  HttpMethod?: string;
  HttpResponseCode?: string;
  DateAdded?: Date;
  UserName?: string;
  LastLoginTime?: Date;
  IPAddress?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type CustomFieldsDto = {
  CustomFields?: Array<CustomFieldDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type CustomFieldDto_List = {
  CustomFieldId?: number;
  OwnerId?: number;
  FieldName?: string;
  ProfileFlag?: string;
  Optional?: boolean;
  Tag?: string;
};

export type CustomFieldDto_AddUpdate = {
  FieldName?: string;
  ProfileFlag?: string;
  Optional?: boolean;
  Tag?: string;
};

export type CustomFieldDto = {
  CustomFieldId?: number;
  OwnerId?: number;
  FieldName?: string;
  ProfileFlag?: string;
  Optional?: boolean;
  Tag?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ConfigurationItemsDto = {
  ConfigurationItems?: Array<ConfigurationItemDto_List>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ConfigurationItemDto_List = {
  SystemName?: string;
  ServerRoleConfigured?: boolean;
  ControlValues?: Array<ControlValueDto>;
  ItemMetaData?: ConfigurationItemMetaDataDto;
};

export type ConfigurationItemDto = {
  SystemName?: string;
  ServerRoleConfigured?: boolean;
  ControlValues?: Array<ControlValueDto>;
  ItemMetaData?: ConfigurationItemMetaDataDto;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ConfigurationItemsInputDto = {
  ConfigurationItems?: Array<ConfigurationItemInputDto>;
};

export type ConfigurationItemInputDto = {
  SystemName?: string;
  Value?: string;
};

export type ControlValueDto = {
  Value?: string;
  IsEnabled?: boolean;
};

export type ConfigurationItemMetaDataDto = {
  ConfigurationItemId?: number;
  DisplayName?: string;
  ControlLabel?: string;
  DefaultValue?: string;
  DataSource?: string;
  ControlsTypeId?: number;
  DisplayIndex?: number;
  GroupId?: number;
  HelpText?: string;
  ControlTypeName?: string;
  RegexPattern?: string;
  ValidatorType?: string;
  DependentId?: number;
  IsSuperior?: boolean;
  CssClasses?: string;
  DependentClasses?: string;
};

export type LoggingValuesDto_Request = {
  LoggingKeyvalues?: Array<LoggingValueDto_Request>;
  ServerIp?: string;
};

export type LoggingValuesDto_Request1 = {
  LoggingKeyvalues?: Array<LoggingValueDto_Request>;
};

export type LoggingValueDto_Request = {
  Key?: string;
  Value?: string;
};

export type LoggingValuesDto = {
  LoggingKeyvalues?: Array<LoggingValueDto_List>;
  ServerIp?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type LoggingValueDto_List = {
  Key?: string;
  Value?: string;
};

export type LoggingValueDto = {
  Key?: string;
  Value?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type LogFileDto = {
  ServerIp?: string;
  LogFileName?: string;
  LogFilePath?: string;
  LogFileContent?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SiteproDto_request = {
  Url?: string;
  UserName?: string;
  Password?: string;
  IsEnable?: boolean;
  UseHostSettings?: boolean;
  IsHostEnable?: boolean;
};

export type SiteproDto = {
  Url?: string;
  UserName?: string;
  Password?: string;
  IsEnable?: boolean;
  UseHostSettings?: boolean;
  IsHostEnable?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SpamExpertsConfigDto_Request = {
  Url?: string;
  UserName?: string;
  MXRecords?: string;
  Password?: string;
  IsEnable?: boolean;
  UseHostSettings?: boolean;
  IsHostEnable?: boolean;
};

export type SpamExpertsConfigDto = {
  Url?: string;
  UserName?: string;
  MXRecords?: string;
  Password?: string;
  IsEnable?: boolean;
  UseHostSettings?: boolean;
  IsHostEnable?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type UsersUsageReportDto = {
  UsersList?: Array<UserUsageReportDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type UserUsageReportDto_List = {
  UserId?: number;
  UserName?: string;
  TotalAllocated?: number;
  TotalUsed?: number;
};

export type UserUsageReportDto = {
  UserId?: number;
  UserName?: string;
  TotalAllocated?: number;
  TotalUsed?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type DedicatedServerSettingsDto = {
  AssignedServers?: Array<DedicatedServerSettingDto_List>;
  TotalRecords?: number;
  UserId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type DedicatedServerSettingDto_List = {
  ServerId?: number;
  IsShared?: boolean;
};

export type DedicatedServerSettingDto = {
  ServerId?: number;
  IsShared?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type LoadBalancerSettingDto_Request = {
  UserLBSId?: number;
  DefaultLBSId?: number;
  UserLBSName?: string;
  DefaultLBSName?: string;
};

export type DiskUsageReportDto = {
  DiskReport?: Array<DiskUsageDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type DiskUsageDto = {
  Label?: string;
  Value?: number;
};

export type BandwidthUsageReportDto = {
  BandwidthReport?: Array<BandwidthsUsageDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type BandwidthsUsageDto = {
  Label?: string;
  Value?: number;
};

export type LoadBalancerSettingDto = {
  UserId?: number;
  UserLBSId?: number;
  DefaultLBSId?: number;
  UserLBSName?: string;
  DefaultLBSName?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type CustomMenusDto = {
  CustomMenuItems?: Array<CustomMenuDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type CustomMenuDto_List = {
  MenuItemId?: number;
  DisplayName?: string;
  Url?: string;
  ParentMenuItemId?: number;
  ParentMenuItemName?: string;
  IsMain?: boolean;
  VisibleToUsers?: string;
  IconPath?: string;
  PostHCCredentials?: boolean;
  UserNameVar?: string;
  UserPasswordVar?: string;
  MyUsers?: boolean;
  AllUsers?: boolean;
  OwnerId?: number;
  AddedBy?: number;
  DateAdded?: Date;
};

export type CustomMenuDto_Request = {
  DisplayName: string;
  Url: string;
  ParentMenuItemId?: number;
  IsMain?: boolean;
  VisibleToUsers?: string;
  IconPath?: string;
  AddedBy?: number;
  PostHCCredentials?: boolean;
  UserNameVar?: string;
  UserPasswordVar?: string;
  DateAdded?: Date;
  MyUsers?: boolean;
  AllUsers?: boolean;
  ParentMenuItemName: string;
  OwnerId?: number;
};

export type CustomMenuDto_UpdateRequest = {
  DisplayName: string;
  Url: string;
  ParentMenuItemName: string;
  IsMain?: boolean;
  VisibleToUsers?: string;
  MyUsers?: boolean;
  AllUsers?: boolean;
  PostHCCredentials?: boolean;
  UserNameVar?: string;
  UserPasswordVar?: string;
  IconPath?: string;
};

export type CustomMenuDto = {
  MenuItemId?: number;
  DisplayName: string;
  Url: string;
  ParentMenuItemId?: number;
  IsMain?: boolean;
  VisibleToUsers?: string;
  IconPath?: string;
  AddedBy?: number;
  PostHCCredentials?: boolean;
  UserNameVar?: string;
  UserPasswordVar?: string;
  DateAdded?: Date;
  MyUsers?: boolean;
  AllUsers?: boolean;
  ParentMenuItemName: string;
  OwnerId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type MessageDto_Request = {
  MessageSubject: string;
  MessageDetails: string;
  /**
   * '0' is for low priority,'1' is for normal priority and '2' is for high priority.
   */
  MessagePriorityId?: number;
  AllowReply?: boolean;
  SendEmail?: boolean;
  /**
   * SendToUsers is a flag it has multiple values 'my' is for my direct child users,'all' is for all child users and 'selected' is for the user ids provided in SelectedUsersList property but it will only accept the ids of child users (owner should have right on the specific user).
   */
  SendToUsers?: string;
  MessageStatus?: boolean;
  ToUserId?: number;
  /**
   * This is the list of userid of the selected users, you can get userid by calling 'Get /panel-users', method will return you 'Invalid Access' if you give the wrong user id or you do not have rights on that user id.
   */
  SelectedUsersList?: Array<number>;
};

export type MessageDto = {
  MessageId?: number;
  MessageSubject: string;
  MessageDetails: string;
  MessagePriorityId?: number;
  MessagePriorityValue?: string;
  MessageSentDate?: Date;
  AllowReply?: boolean;
  SendEmail?: boolean;
  MessageIdentifier?: number;
  SendToUsers?: string;
  OwnerId?: number;
  MessageStatus?: boolean;
  ToUserId?: number;
  SelectedUsersList?: Array<number>;
  RoleName?: string;
  Count?: number;
  TotalCount?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type MessageDto_List = {
  MessageId?: number;
  MessageSubject: string;
  MessageDetails: string;
  MessagePriorityId?: number;
  MessagePriorityValue?: string;
  MessageSentDate?: Date;
  AllowReply?: boolean;
  SendEmail?: boolean;
  MessageIdentifier?: number;
  SendToUsers?: string;
  OwnerId?: number;
  MessageStatus?: boolean;
  ToUserId?: number;
  SelectedUsersList?: Array<number>;
  RoleName?: string;
  Count?: number;
  TotalCount?: number;
};

export type MessagesDto = {
  Messages?: Array<MessageDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type MessageRepliesDto = {
  MessageReplies?: Array<MessageReplyDto_List>;
  MessageSentToUsers?: Array<MessageSentToUsersDto_List>;
  MessageId?: number;
  OwnerId?: number;
  OwnerName?: string;
  AllowReply?: boolean;
  MessageSubject?: string;
  MessageDetails?: string;
  MessagePriorityId?: number;
  MessageSentDate?: Date;
  MessageStatus?: boolean;
  TotalRecords?: number;
  SendToUsers?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type MessageReplyDto_List = {
  ReplyId?: number;
  MessageId?: number;
  FromUserId?: number;
  FromUserName?: string;
  ToUserId?: number;
  ReplySubject?: string;
  ReplyDetails: string;
  ReplySentDate?: Date;
  ParentId?: number;
  SendToUsers?: string;
  RoleName?: string;
  Count?: number;
  TotalCount?: number;
};

export type MessageReplyDto_Request = {
  ReplyDetails: string;
};

export type MessageReplyDto = {
  ReplyId?: number;
  MessageId?: number;
  FromUserId?: number;
  FromUserName?: string;
  ToUserId?: number;
  ReplySubject?: string;
  ReplyDetails: string;
  ReplySentDate?: Date;
  ParentId?: number;
  SendToUsers?: string;
  RoleName?: string;
  Count?: number;
  TotalCount?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type MessageSentToUsersDto_List = {
  ToUserId?: number;
  ToUsername?: string;
  RoleName?: string;
  Count?: number;
  TotalCount?: number;
};

export type MessageSentToUsersDto = {
  ToUserId?: number;
  ToUsername?: string;
  RoleName?: string;
  Count?: number;
  TotalCount?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type TroubleTicketsStatsDto = {
  OpenTickets?: number;
  ClosedTickets?: number;
  PendingTickets?: number;
  TotalTickets?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type TicketsDto = {
  Tickets?: Array<TicketDto_List>;
  TotalRecords?: number;
  RoleName?: string;
  Count?: number;
  TotalCount?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type TicketDto = {
  TicketId?: number;
  TicketNumber?: string;
  FromUserId?: number;
  ToUserId?: number;
  Subject: string;
  Details: string;
  TicketStatus?: string;
  Category: string;
  Priority?: string;
  IssueDate?: Date;
  DateModified?: Date;
  SendEmail?: boolean;
  ModifiedBy?: number;
  TotalResponses?: number;
  ClientName?: string;
  TicketAttachments?: number;
  RoleName?: string;
  Count?: number;
  TotalCount?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type TicketDto_List = {
  TicketId?: number;
  TicketNumber?: string;
  FromUserId?: number;
  ToUserId?: number;
  Subject?: string;
  Details?: string;
  TicketStatus?: string;
  Category?: string;
  Priority?: string;
  IssueDate?: Date;
  DateModified?: Date;
  SendEmail?: boolean;
  ModifiedBy?: number;
  TotalResponses?: number;
  ClientName?: string;
  TicketAttachments?: number;
  RoleName?: string;
  Count?: number;
  TotalCount?: number;
};

export type TicketDto_Update = {
  TicketNumber?: string;
  FromUserId?: number;
  ToUserId?: number;
  Subject?: string;
  Details?: string;
  TicketStatus?: string;
  Category?: string;
  Priority?: string;
  IssueDate?: Date;
  DateModified?: Date;
  SendEmail?: boolean;
  ClientName?: string;
  TicketAttachments?: number;
};

export type TicketDto_Request = {
  TicketNumber?: string;
  FromUserId?: number;
  ToUserId?: number;
  Subject?: string;
  Details?: string;
  TicketStatus?: string;
  Category?: string;
  Priority?: string;
  IssueDate?: Date;
  DateModified?: Date;
  SendEmail?: boolean;
  ClientName?: string;
  TicketAttachments?: number;
};

export type TicketResponseDto_Request = {
  Details: string;
};

export type TicketResponseDto = {
  TicketResponseId?: number;
  TicketId?: number;
  ResponseTitle?: string;
  ResponderName?: string;
  Details: string;
  ResponderId?: number;
  DateAdded?: Date;
  IsEscalated?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type TicketResponseDto_List = {
  TicketResponseId?: number;
  TicketId?: number;
  ResponseTitle?: string;
  ResponderName?: string;
  Details?: string;
  ResponderId?: number;
  DateAdded?: Date;
  IsEscalated?: boolean;
};

export type TicketResponsesDto = {
  TicketResponses?: Array<TicketResponseDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type CategoryDto_List = {
  CategoryId?: number;
  DisplayName?: string;
  Description?: string;
  IsInternal?: boolean;
};

export type CategoryDto_Request = {
  DisplayName: string;
  Description?: string;
};

export type CategoryDto = {
  CategoryId?: number;
  DisplayName: string;
  Description?: string;
  IsInternal?: boolean;
  DateAdded?: Date;
  DeletedBy?: number;
  DateDeleted?: Date;
  AddedBy?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type CategoriesDto = {
  Categories?: Array<CategoryDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type AttachmentsDto = {
  TicketId?: number;
  Attachments?: Array<AttachmentDto_List>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type AttachmentsDto_Request = {
  Attachments?: Array<AttachmentDto_Request>;
};

export type AttachmentDto_Request = {
  FileData?: string;
  FileName?: string;
  FileType?: string;
  ResponseId?: number;
};

export type AttachmentDto_List = {
  AttachmentId?: number;
  FileData?: string;
  FileName?: string;
  FileType?: string;
  ResponseId?: number;
};

export type AttachmentDto_Details = {
  FileData?: string;
  FileName?: string;
  FileType?: string;
  ResponseId?: number;
};

export type AttachmentDto = {
  AttachmentId?: number;
  FileData?: string;
  FileName?: string;
  FileType?: string;
  ResponseId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SellAddonsDto = {
  SoldAddonList?: Array<SoldAddOnDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SoldAddOnDto_List = {
  SoldAddOnId?: number;
  SoldPlanId?: number;
  DisplayName?: string;
  Type?: string;
  PlanName?: string;
  UserName?: string;
  UnitSize?: number;
  DateAdded?: Date;
  BillingMethod?: string;
  ResourceId?: number;
  Quantity?: number;
  IsComposite?: boolean;
};

export type SoldAddOnDto = {
  SoldAddOnId?: number;
  SoldPlanId?: number;
  DisplayName?: string;
  Type?: string;
  PlanName?: string;
  UserName?: string;
  UnitSize?: number;
  DateAdded?: Date;
  BillingMethod?: string;
  ResourceId?: number;
  Quantity: number;
  IsComposite?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SoldAddOnBillingDetailDto_Request = {
  SellableItemTypeId?: number;
  AddOnRecurringDurationId?: number;
  SetupDiscount?: number;
  RecurringDiscount?: number;
  RecurringDurationId?: number;
  NextInvoiceDate?: Date;
  PaidTillDate?: Date;
  Quantity?: number;
};

export type SoldAddOnBillingDetailDto_List = {
  SoldAddOnId?: number;
  SellableItemTypeId?: number;
  AddOnRecurringDurationId?: number;
  SetupDiscount?: number;
  RecurringDiscount?: number;
  RecurringDurationId?: number;
  NextInvoiceDate?: Date;
  PaidTillDate?: Date;
  Quantity?: number;
};

export type SoldAddOnBillingDetailDto = {
  SoldAddOnId?: number;
  SellableItemTypeId?: number;
  AddOnRecurringDurationId?: number;
  SetupDiscount?: number;
  RecurringDiscount?: number;
  RecurringDurationId?: number;
  NextInvoiceDate?: Date;
  PaidTillDate?: Date;
  Quantity?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SellAddonDto_Request = {
  SoldPlanId?: number;
  AddOns?: Array<AddOnResourcesDto_SellAddon>;
};

export type SellAddonDto = {
  SoldPlanId?: number;
  AddOns?: Array<AddOnResourcesDto_List>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type AddOnResourcesDto_SellAddon = {
  /**
   * you can get resource id by calling 'GET /resources'.
   */
  ResourceId?: number;
  /**
   * Number of instance you want to sell.
   */
  Quantity: number;
  IsComposite?: boolean;
};

export type AddOnResourcesDto_List = {
  ResourceId?: number;
  Quantity: number;
  IsComposite?: boolean;
};

export type AddOnResourcesDto = {
  ResourceId?: number;
  Quantity: number;
  IsComposite?: boolean;
  BillingDetails?: SoldAddOnBillingDetailDto_List;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type AddUpdateSoldAddOnDto_Request = {
  BillingDetails?: SoldAddOnBillingDetailDto_List;
};

export type AddUpdateSoldAddOnDto = {
  SoldAddOnId?: number;
  BillingDetails?: SoldAddOnBillingDetailDto_List;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type CResourcesDto = {
  CompositeResources?: Array<CResourceDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type CResourceDto_List = {
  CompositeResourceId?: number;
  DisplayName?: string;
  SystemName?: string;
  CategoryName?: string;
  IaasRefId?: string;
  CategoryDisplayName?: string;
  ProviderName?: string;
  SoldInstances?: number;
  Resources?: Array<CResourceResourceDto>;
  ResourceComponents?: Array<CResourceResourceComponentDto>;
};

export type CResourceDto_Request = {
  DisplayName: string;
  CategoryName: string;
  CategoryDisplayName?: string;
  ProviderName?: string;
  SoldInstances?: number;
  Resources?: Array<CResourceResourceDto>;
  ResourceComponents?: Array<CResourceResourceComponentDto>;
};

export type UpdateCResourceDto_Request = {
  DisplayName: string;
  Resources?: Array<CResourceResourceDto>;
  ResourceComponents?: Array<CResourceResourceComponentDto>;
};

export type UpdateCResourceDto = {
  CompositeResourceId?: number;
  DisplayName: string;
  SystemName?: string;
  CategoryName: string;
  IaasRefId?: string;
  CategoryDisplayName?: string;
  ProviderName?: string;
  SoldInstances?: number;
  Resources?: Array<CResourceResourceDto>;
  ResourceComponents?: Array<CResourceResourceComponentDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type CResourceDto = {
  CompositeResourceId?: number;
  DisplayName: string;
  SystemName?: string;
  CategoryName: string;
  IaasRefId?: string;
  CategoryDisplayName?: string;
  ProviderName?: string;
  SoldInstances?: number;
  Resources?: Array<CResourceResourceDto>;
  ResourceComponents?: Array<CResourceResourceComponentDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type CResourceResourceDto = {
  ResourceId?: number;
  ResourceName?: string;
  DisplayName?: string;
  Quantity?: number;
};

export type CResourceResourceComponentDto = {
  ResourceId?: number;
  ComponentName?: string;
  Value?: string;
};

export type HostingServicesDto = {
  HostingServices?: Array<HostingServiceDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type HostingServiceDto_List = {
  HostingServiceId?: number;
  SystemName?: string;
  DisplayName?: string;
  Description?: string;
  ServerRole?: string;
};

export type HostingServiceDto = {
  HostingServiceId?: number;
  SystemName?: string;
  DisplayName?: string;
  Description?: string;
  ServerRole?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ProvidersDto = {
  ProviderTypes?: Array<ProviderDto_List>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ProviderDto_List = {
  RoleServerTypeId?: number;
  RoleId?: number;
  SystemName?: string;
  DisplayName?: string;
  PlatformId?: number;
  Platform?: string;
  ProviderName?: string;
  ConfiguredOnly?: boolean;
  KeyValueVerification?: boolean;
  RefrenceIdRequired?: boolean;
  Url?: string;
  HelpText?: string;
  RoleName?: string;
  ProviderType?: string;
};

export type ProviderDto = {
  RoleServerTypeId?: number;
  RoleId?: number;
  SystemName?: string;
  DisplayName?: string;
  PlatformId?: number;
  Platform?: string;
  ProviderName?: string;
  ConfiguredOnly?: boolean;
  KeyValueVerification?: boolean;
  RefrenceIdRequired?: boolean;
  Url?: string;
  HelpText?: string;
  RoleName?: string;
  ProviderType?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ResourcesDto = {
  Resources?: Array<ResourceDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ResourceDto_List = {
  DefaultValue?: number;
  DependentOn?: string;
  OwnerId?: number;
  ResourceBehaviourType?: string;
  ResourceType?: string;
  ProvisioningTypes?: string;
  ServerRoleTypes?: string;
  SupportedRoleProviders?: string;
  ProviderSelection?: string;
  Role?: string;
  DisplayIndex?: number;
  ResourceComponents?: Array<ResourceComponentDto_List>;
  ResourceId?: number;
  SystemName?: string;
  DisplayName?: string;
  Platform?: string;
  Decription?: string;
  DefaultUnit: number;
};

export type ResourceDto_Request = {
  DefaultValue?: number;
  DependentOn?: string;
  OwnerId?: number;
  ResourceBehaviourType?: string;
  ResourceType?: string;
  ProvisioningTypes?: string;
  ServerRoleTypes?: string;
  SupportedRoleProviders?: string;
  ProviderSelection?: string;
  Role?: string;
  DisplayIndex?: number;
  ResourceComponents?: Array<ResourceComponentDto_List>;
  ResourceId?: number;
  SystemName?: string;
  DisplayName?: string;
  Platform?: string;
  Decription?: string;
  DefaultUnit: number;
};

export type ResourceDto = {
  DefaultValue?: number;
  DependentOn?: string;
  OwnerId?: number;
  ResourceBehaviourType?: string;
  ResourceType?: string;
  ProvisioningTypes?: string;
  ServerRoleTypes?: string;
  SupportedRoleProviders?: string;
  ProviderSelection?: string;
  Role?: string;
  DisplayIndex?: number;
  ResourceComponents?: Array<ResourceComponentDto_List>;
  ResourceId?: number;
  SystemName?: string;
  DisplayName?: string;
  Platform?: string;
  Decription?: string;
  DefaultUnit: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ResourceComponentDto_List = {
  ComponentId?: number;
  SystemName?: string;
  DisplayName?: string;
  ComponentProps?: Array<ResourceComponentPropDto>;
};

export type ResourceComponentDto = {
  ComponentId?: number;
  SystemName?: string;
  DisplayName?: string;
  ComponentProps?: Array<ResourceComponentPropDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ResourceComponentPropDto = {
  ResourceComponentPropId?: number;
  SystemName?: string;
  DisplayName?: string;
  Providers?: string;
};

export type ResourceBillingDetailsDto = {
  ItemRecurringDurationId?: number;
  DefaultSetupPrice?: number;
  DefaultRecurringPrice?: number;
  RecurringDurationId?: number;
};

export type AddUpdateResourceDto_Request = {
  DisplayName: string;
  SystemName: string;
  Decription?: string;
  DefaultUnit: number;
};

export type AddUpdateResourceDto_UpdateRequest = {
  DisplayName: string;
  Decription?: string;
  DefaultUnit: number;
};

export type AddUpdateResourceDto = {
  ResourceId?: number;
  SystemName?: string;
  DisplayName?: string;
  Platform?: string;
  Decription?: string;
  DefaultUnit: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ItemBillingDetailsDto = {
  ItemBillingDetailId?: number;
  SetupPrice?: number;
  DefaultSetupDiscount?: number;
  DefaultRecurringDiscount?: number;
  PromotionalPrice?: number;
  PromotionalDurationId?: number;
  PromotionalDuration?: string;
  RecurringDurations?: Array<ItemRecurringDurationsDto_List>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ItemBillingDetailsDto_List = {
  ItemBillingDetailId?: number;
  SetupPrice?: number;
  DefaultSetupDiscount?: number;
  DefaultRecurringDiscount?: number;
  PromotionalPrice?: number;
  PromotionalDurationId?: number;
  PromotionalDuration?: string;
  RecurringDurations?: Array<ItemRecurringDurationsDto_List>;
};

export type ItemRecurringDurationsDto_List = {
  ItemRecurringDurationId?: number;
  RecurringDurationId?: number;
  RecurringMonths?: number;
  RecurringPrice?: number;
  IsDefault?: boolean;
  RecurringDuration?: string;
};

export type ItemRecurringDurationsDto = {
  ItemRecurringDurationId?: number;
  RecurringDurationId?: number;
  RecurringMonths?: number;
  RecurringPrice?: number;
  IsDefault?: boolean;
  RecurringDuration?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type RecurringDurationsDto = {
  TotalRecords?: number;
  RecurringDurations?: Array<RecurringDurationDto_List>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type RecurringDurationDto_List = {
  RecurringDurationId?: number;
  DisplayName?: string;
  Months?: number;
  RecurringType?: string;
};

export type RecurringDurationDto = {
  RecurringDurationId?: number;
  DisplayName?: string;
  Months?: number;
  RecurringType?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SoldPlansDto = {
  SoldPlans?: Array<SoldPlanDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SoldPlanDto_List = {
  PlanId?: number;
  PlanName?: string;
  UserId?: number;
  UserName?: string;
  Quantity?: number;
  SoldDate?: Date;
  SoldPlanId?: number;
  IsDisabled?: boolean;
  BillingDetails?: SoldPlanBillingDetailDto_Request;
};

export type SoldPlanDto = {
  PlanId?: number;
  PlanName?: string;
  UserId?: number;
  UserName: string;
  Quantity?: number;
  SoldDate?: Date;
  SoldPlanId?: number;
  IsDisabled?: boolean;
  BillingDetails?: SoldPlanBillingDetailDto_Request;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SoldPlanBillingDetailDto = {
  SoldPlanId?: number;
  RecurringDurationId?: number;
  SetupDiscount?: number;
  RecurringPrice?: number;
  RecurringDiscount?: number;
  NextInvoiceDate?: Date;
  PaidTillDate?: Date;
  DueSince?: string;
  Quantity?: number;
  PaidStatus?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SoldPlanBillingDetailDto_Request = {
  SoldPlanId?: number;
  RecurringDurationId?: number;
  SetupDiscount?: number;
  RecurringPrice?: number;
  RecurringDiscount?: number;
  NextInvoiceDate?: Date;
  PaidTillDate?: Date;
  DueSince?: string;
  Quantity?: number;
  PaidStatus?: string;
};

export type SoldPlanBillingDetailDto_Update = {
  RecurringDurationId?: number;
  SetupDiscount?: number;
  RecurringPrice?: number;
  RecurringDiscount?: number;
  NextInvoiceDate?: Date;
  PaidTillDate?: Date;
  DueSince?: string;
  Quantity?: number;
  PaidStatus?: string;
};

export type SellPlanDto_Request = {
  PlanId?: number;
  UserId?: number;
  Quantity?: number;
  BillingDetails?: SoldPlanBillingDetailDto_Request;
};

export type SellPlanDto = {
  PlanId?: number;
  UserId?: number;
  Quantity?: number;
  BillingDetails?: SoldPlanBillingDetailDto;
};

export type SoldPlansIsDisabled = {
  IsDisabled?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SoldPlansIsDisabled_Request = {
  IsDisabled?: boolean;
};

export type PurchasePlanDto_Request = {
  PlanId?: number;
  Quantity?: number;
  ItemRecurringDurations?: number;
};

export type PurchasePlanDto = {
  PlanId?: number;
  Quantity?: number;
  ItemRecurringDurations?: number;
  CurrentPage?: number;
  PageSize?: number;
};

export type OperationsDto = {
  DateRequested?: Date;
  DateCompleted?: Date;
  ErrorDetail?: string;
  Flag?: string;
  QueuedOperationId?: number;
  QueuedBy?: number;
  SourceId?: number;
  SourceName?: string;
  OperationName?: string;
  OperationStatus?: string;
  ConfirmationHash?: string;
  IsConfirmed?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type OperationsDto_Request = {
  DateRequested?: Date;
  DateCompleted?: Date;
  ErrorDetail?: string;
  Flag?: string;
  QueuedOperationId?: number;
  QueuedBy?: number;
  SourceId?: number;
  SourceName?: string;
  OperationName?: string;
  OperationStatus?: string;
  ConfirmationHash?: string;
  IsConfirmed?: boolean;
};

export type OperationsDto_List = {
  DateRequested?: Date;
  DateCompleted?: Date;
  ErrorDetail?: string;
  Flag?: string;
  QueuedOperationId?: number;
  QueuedBy?: number;
  SourceId?: number;
  SourceName?: string;
  OperationName?: string;
  OperationStatus?: string;
  ConfirmationHash?: string;
  IsConfirmed?: boolean;
};

export type QueuedOperationsDto = {
  QueuedOperations?: Array<OperationsDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ServerInfoDto = {
  Key?: string;
  Head?: string;
  Value?: string;
  MachineName?: string;
  PrimaryServer?: boolean;
  ServerIp?: string;
  Platform?: string;
  UserName?: string;
  UserPassword?: string;
  ReleaseDate?: Date;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SystemInfoDto = {
  BuildNumber?: string;
  InstallPath?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SystemServicesDto = {
  SystemServices?: Array<SystemServiceDto_List>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SystemServiceDto = {
  ServiceName?: string;
  DisplayName?: string;
  ServiceType?: string;
  ServiceStatus?: string;
  ServiceDescription?: string;
  StartupStatus?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SystemServiceDto_List = {
  ServiceName?: string;
  DisplayName?: string;
  ServiceType?: string;
  ServiceStatus?: string;
  ServiceDescription?: string;
  StartupStatus?: string;
};

export type SystemServiceDto_Request = {
  ServiceName?: string;
  DisplayName?: string;
  ServiceType?: string;
  ServiceStatus?: string;
  ServiceDescription?: string;
  StartupStatus?: string;
};

export type UpdateSystemServiceDto = {
  ServiceName: string;
};

export type EmailsDto = {
  Emails?: Array<EmailDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type EmailDto_List = {
  EmailId?: number;
  ToAddress?: string;
  FromEmailAddress?: string;
  EMailSubject?: string;
  EmailType?: string;
  EmailTemplateId?: number;
  EmailStatus?: boolean;
  RetryCount?: number;
  SentDate?: Date;
  OwnerId?: number;
  CcAddress?: string;
  BccAddress?: string;
  EmailBody?: string;
  EmailErrorDescription?: string;
  IsRetryReset?: boolean;
  MailDeliverySettingsId?: number;
  UserId?: number;
  SmtpPort?: number;
  SmtpAuthentication?: boolean;
  EnableSsl?: boolean;
  MailDeliveryType?: string;
  DnsServer?: string;
  SmtpServer?: string;
  AuthUser?: string;
  AuthPassword?: string;
  FromAddress?: string;
};

export type EmailDto = {
  EmailId?: number;
  ToAddress?: string;
  FromEmailAddress?: string;
  EMailSubject?: string;
  EmailType?: string;
  EmailTemplateId?: number;
  EmailStatus?: boolean;
  RetryCount?: number;
  SentDate?: Date;
  OwnerId?: number;
  CcAddress?: string;
  BccAddress?: string;
  EmailBody?: string;
  EmailErrorDescription?: string;
  IsRetryReset?: boolean;
  MailDeliverySettingsId?: number;
  UserId?: number;
  SmtpPort?: number;
  SmtpAuthentication?: boolean;
  EnableSsl?: boolean;
  MailDeliveryType?: string;
  DnsServer?: string;
  SmtpServer?: string;
  AuthUser?: string;
  AuthPassword?: string;
  FromAddress?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type EmailTemplatesDto = {
  EmailTemplateList?: Array<EmailTemplateDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type EmailTemplateDto = {
  EmailTags?: Array<EmailTagsDto>;
  EmailTemplateId?: number;
  DisplayName: string;
  SystemName?: string;
  Body?: string;
  UserId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type EmailTemplateDto_List = {
  EmailTags?: Array<EmailTagsDto>;
  EmailTemplateId?: number;
  DisplayName?: string;
  SystemName?: string;
  Body?: string;
  UserId?: number;
};

export type EmailTagsDto = {
  EmailTagId?: number;
  DisplayName?: string;
  SystemName?: string;
  ParentName?: string;
  TypeItemId?: number;
};

export type MailSettingsListDto = {
  MailSettings?: Array<MailSettingsDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type MailSettingsDto_List = {
  TemplateId?: number;
  TemplateSystemName?: string;
  TemplateName?: string;
  SendMailToAllUsers?: boolean;
  SendMailToMe?: boolean;
  CCTo?: string;
  ToThisUser?: number;
  DefaultOn?: boolean;
};

export type MailSettingsDto = {
  TemplateId?: number;
  TemplateSystemName?: string;
  TemplateName?: string;
  SendMailToAllUsers?: boolean;
  SendMailToMe?: boolean;
  CCTo?: string;
  ToThisUser?: number;
  DefaultOn?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type AdvanceMailSettingsDto = {
  TemplateName?: string;
  TemplateSystemName?: string;
  TemplateId?: number;
  UsersList?: Array<number>;
  SendMailsToAllUsers?: boolean;
  DefaultOn?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type MailDeliverySettingsDto = {
  MailDeliverySettingsId?: number;
  UserId?: number;
  SmtpPort?: number;
  SmtpAuthentication?: boolean;
  EnableSsl?: boolean;
  MailDeliveryType?: string;
  DnsServer?: string;
  SmtpServer?: string;
  AuthUser?: string;
  AuthPassword?: string;
  FromAddress?: string;
  ToEmailAddress?: string;
  FromEmailAddress?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type MailDeliverySettingsDto_Request = {
  MailDeliverySettingsId?: number;
  UserId?: number;
  SmtpPort?: number;
  SmtpAuthentication?: boolean;
  EnableSsl?: boolean;
  MailDeliveryType?: string;
  DnsServer?: string;
  SmtpServer?: string;
  AuthUser?: string;
  AuthPassword?: string;
  FromAddress?: string;
  ToEmailAddress?: string;
  FromEmailAddress?: string;
};

export type MailDeliverySettingsDto_RequestTestmail = {
  MailDeliverySettingsId?: number;
  UserId?: number;
  SmtpPort?: number;
  SmtpAuthentication?: boolean;
  EnableSsl?: boolean;
  MailDeliveryType?: string;
  DnsServer?: string;
  SmtpServer?: string;
  AuthUser?: string;
  AuthPassword?: string;
  FromAddress?: string;
  ToEmailAddress?: string;
  FromEmailAddress?: string;
  SendTestEmail?: boolean;
};

export type NatIpAddressesDto = {
  NatIpAddresses?: Array<NatIpAddressDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type NatIpAddressDto_List = {
  ServerId?: number;
  ServerName?: string;
  ServerIp?: string;
  NatId?: number;
  ExternalIpAddress?: string;
  InternalIpAddress?: string;
  IpType?: string;
  Limit?: number;
  IsIPv6?: number;
};

export type NatIpAddressDto_Request = {
  ServerId?: number;
  ServerName?: string;
  ServerIp?: string;
  ExternalIpAddress: string;
  InternalIpAddress: string;
  IpType?: string;
  Limit?: number;
  IsIPv6?: number;
};

export type NatIpAddressDto = {
  ServerId?: number;
  ServerName?: string;
  ServerIp?: string;
  NatId?: number;
  ExternalIpAddress: string;
  InternalIpAddress: string;
  IpType?: string;
  Limit?: number;
  IsIPv6?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ResellerDnsDto_Request = {
  /**
   * Primary Server Name
   */
  PNameServer?: string;
  /**
   * Secondary Server Name
   */
  SNameServer?: string;
  NameServer3?: string;
  NameServer4?: string;
  EmailAddress?: string;
};

export type ResellerDnsDto = {
  ResellerDnsId?: number;
  OwnerId?: number;
  PNameServer?: string;
  SNameServer?: string;
  NameServer3?: string;
  NameServer4?: string;
  EmailAddress?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type DnsZonesDto = {
  DnsZones?: Array<DnsZoneDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type DnsZoneDto_List = {
  DnsZoneId?: number;
  OwnerId?: number;
  WebsiteId?: number;
  ServerRoleId?: number;
  OwnerName?: string;
  DnsZoneName?: string;
  IsNameBased?: boolean;
  ProviderName?: string;
  UserName?: string;
  WebServerIp?: string;
  MailServerIp?: string;
  WebsiteType?: string;
  ZoneSettings?: string;
  TimeDifference?: number;
};

export type DnsZoneDto_Request = {
  /**
   * Give ownerId if want to create DNS zone for your child.
   */
  OwnerId?: number;
  /**
   * server role id is required to create dns zone, it will be optional if load balancer settings is set to 'AUTO' for resellers and clients.
   */
  ServerRoleId: number;
  DnsZoneName: string;
  /**
   * provider name is required to create dns zone.
   */
  ProviderName?: string;
  WebServerIp?: string;
  MailServerIp?: string;
  /**
   * WebsiteType have two possible values '0' for ip base and '1' for name base, it is required only in DNSOnly case.
   */
  WebsiteType?: string;
};

export type DnsZoneDto = {
  DnsZoneId?: number;
  OwnerId?: number;
  WebsiteId?: number;
  ServerRoleId?: number;
  OwnerName?: string;
  DnsZoneName: string;
  IsNameBased?: boolean;
  ProviderName?: string;
  UserName?: string;
  WebServerIp?: string;
  MailServerIp?: string;
  ZoneSettings?: string;
  TimeDifference?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type UpdateDnsZoneDto_Request = {
  ZoneSettings: string;
  /**
   * Set it true if want to reload zone settings after save.
   */
  SaveReload?: boolean;
};

export type UpdateDnsZoneDto = {
  DnsZoneId?: number;
  ZoneSettings?: string;
  SaveReload?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type DatabasesDto = {
  Databases?: Array<DatabaseDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type DatabaseDto_List = {
  DatabaseId?: number;
  OwnerId?: number;
  OwnerName?: string;
  DatabaseName?: string;
  Provider?: string;
  DatabasePath?: string;
  WebsiteId?: number;
  WebsiteName?: string;
  InstanceName?: string;
  ServerRoleId?: number;
  DataFileSize?: number;
  LogFileSize?: number;
  CResourceId?: number;
  DatabaseUserList?: Array<string>;
};

export type DatabaseDto_Request = {
  /**
   * Give ownerId if want to create database for your child.
   */
  OwnerId?: number;
  DatabaseName: string;
  /**
   * Database provider is required to create database.
   */
  Provider: string;
  /**
   * Website id is required to create database.
   */
  WebsiteId: number;
  /**
   * Give complete instance name with colon(:) separated port number.
   */
  InstanceName?: string;
  /**
   * Server role id is required to create database.
   */
  ServerRoleId?: number;
  DataFileSize?: number;
  LogFileSize?: number;
  /**
   * Give composite resource id to add database, you can get composite resource id by calling '/composite-resources'.
   */
  CResourceId?: number;
  /**
   * Give the list of database user if want to give permission on this database.
   */
  DatabaseUserList?: Array<string>;
};

export type DatabaseDto = {
  DatabaseId?: number;
  OwnerId?: number;
  OwnerName?: string;
  DatabaseName: string;
  Provider: string;
  DatabasePath?: string;
  WebsiteId?: number;
  WebsiteName: string;
  InstanceName?: string;
  ServerRoleId?: number;
  DataFileSize?: number;
  LogFileSize?: number;
  CResourceId?: number;
  DatabaseUserList?: Array<string>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type UpdateDatabaseDto_Request = {
  OwnerId?: number;
  DataFileSize?: number;
  LogFileSize?: number;
  CResourceId?: number;
};

export type UpdateDatabaseDto = {
  OwnerId?: number;
  DataFileSize?: number;
  LogFileSize?: number;
  CResourceId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type AssignUserstoDatabaseDto_Request = {
  OwnerId?: number;
  DatabaseName?: string;
  DatabaseUserList?: Array<string>;
  /**
   * Give complete instance name with colon(:) separated port number.
   */
  InstanceName?: string;
  Provider?: string;
  ServerRoleId?: number;
};

export type AssignUserstoDatabaseDto = {
  OwnerId?: number;
  DatabaseName?: string;
  DatabaseUserList?: Array<string>;
  InstanceName?: string;
  Provider?: string;
  ServerRoleId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type DatabaseConnectivityDto = {
  DatabaseUserName: string;
  DatabaseUserPassword: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type DatabaseConnectivityDto_Request = {
  DatabaseUserName: string;
  DatabaseUserPassword: string;
};

export type ImportDatabaseDto_Request = {
  OwnerId?: number;
  DatabaseName: string;
  Provider: string;
  DatabaseUserName?: string;
  WebsiteId?: number;
  WebsiteName: string;
  InstanceName: string;
  ServerRoleId?: number;
  CreateForMe?: boolean;
  UserName?: string;
};

export type ImportDatabaseDto = {
  OwnerId?: number;
  DatabaseName: string;
  Provider: string;
  DatabaseUserName?: string;
  WebsiteId?: number;
  WebsiteName: string;
  InstanceName: string;
  ServerRoleId?: number;
  CreateForMe?: boolean;
  UserName?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type DatabaseUsersDto = {
  DatabaseUsers?: Array<DatabaseUserDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type DatabaseUserDto = {
  DatabaseUserId?: number;
  DatabaseUserName: string;
  Password: string;
  OwnerId?: number;
  Provider: string;
  DatabaseList?: Array<string>;
  InstanceName: string;
  ServerRoleId?: number;
  OwnerName?: string;
  DatabaseName?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type DatabaseUserDto_List = {
  DatabaseUserId?: number;
  DatabaseUserName?: string;
  Password?: string;
  OwnerId?: number;
  Provider?: string;
  DatabaseList?: Array<string>;
  InstanceName?: string;
  ServerRoleId?: number;
  OwnerName?: string;
  DatabaseName?: string;
};

export type DatabaseUserDto_Request = {
  DatabaseUserName: string;
  Password: string;
  /**
   * Give ownerId if want to create database user for your child.
   */
  OwnerId?: number;
  Provider: string;
  DatabaseList?: Array<string>;
  /**
   * Give complete instance name with colon(:) separated port number.
   */
  InstanceName: string;
  /**
   * server role id is required to create database user.
   */
  ServerRoleId: number;
};

export type UpdateDatabaseUserDto = {
  DatabaseUserName?: string;
  Password: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type UpdateDatabaseUserDto_Request = {
  DatabaseUserName?: string;
  Password: string;
};

export type AssignDatabasestoUserDto = {
  OwnerId?: number;
  DatabaseList?: Array<string>;
  InstanceName?: string;
  Provider?: string;
  DatabaseUserName?: string;
  ServerRoleId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type AssignDatabasestoUserDto_Request = {
  OwnerId?: number;
  DatabaseList?: Array<string>;
  InstanceName?: string;
  Provider?: string;
  DatabaseUserName?: string;
  ServerRoleId?: number;
};

export type DatabaseTasksDto = {
  DatabaseTasks?: Array<DatabaseTaskDto_List>;
  DatabaseId?: number;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type DatabaseTaskDto_List = {
  DatabaseTaskId?: number;
  DatabaseId?: number;
  TaskName: string;
  DatabaseFilePath?: string;
  SourceServerId?: number;
  TargetServerId?: number;
  TaskStatus?: string;
  DateAdded?: Date;
  DateModified?: Date;
  AddedBy?: number;
  ModifiedBy?: number;
};

export type DatabaseTaskDto = {
  DatabaseTaskId?: number;
  DatabaseId?: number;
  TaskName: string;
  DatabaseFilePath?: string;
  SourceServerId?: number;
  TargetServerId?: number;
  TaskStatus?: string;
  DateAdded?: Date;
  DateModified?: Date;
  AddedBy?: number;
  ModifiedBy?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type RestoreDatabaseDto = {
  BrowsePath?: string;
  WebsiteId?: number;
  CurrentPage?: number;
  PageSize?: number;
};

export type RestoreDatabaseDto_Request = {
  BrowsePath?: string;
  WebsiteId?: number;
};

export type LogRotationDto_Request = {
  ConditionType?: string;
  ActionType?: string;
  SizeLimit?: number;
  DaysLimit?: number;
  FileCountLimit?: number;
};

export type LogRotationDto = {
  LogRotationId?: number;
  OwnerId?: number;
  ConditionType?: string;
  ActionType?: string;
  SizeLimit?: number;
  DaysLimit?: number;
  FileCountLimit?: number;
  AddedBy?: number;
  ModifiedBy?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type MailDomainDto = {
  MailDomainId?: number;
  MailDomainName: string;
  MailServerIp?: string;
  OwnerId?: number;
  ServerRoleId?: number;
  ServerId?: number;
  WebsiteId?: number;
  MailOnly?: boolean;
  ProviderName?: string;
  DnsServerRoleId?: number;
  WebsiteName?: string;
  AddDns?: boolean;
  OwnerName?: string;
  TotalMailboxes?: number;
  DnsProviderName?: string;
  MailAccessUrl?: string;
  MailAdminUrl?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type MailDomainDto_List = {
  MailDomainId?: number;
  MailDomainName: string;
  MailServerIp?: string;
  OwnerId?: number;
  ServerRoleId?: number;
  ServerId?: number;
  WebsiteId?: number;
  MailOnly?: boolean;
  ProviderName?: string;
  DnsServerRoleId?: number;
  WebsiteName?: string;
  AddDns?: boolean;
  OwnerName?: string;
  TotalMailboxes?: number;
  DnsProviderName?: string;
  MailAccessUrl?: string;
  MailAdminUrl?: string;
};

export type MailDomainDto_Request = {
  MailDomainName: string;
  /**
   * Mail server ip is required if want to add DNS zone with mail domain.
   */
  MailServerIp?: string;
  /**
   * Give ownerId if want to create mail domain for your child.
   */
  OwnerId?: number;
  /**
   * server role id is required to create mail domain, it will be optional if load balancer settings is set to 'AUTO' for resellers and clients.
   */
  ServerRoleId?: number;
  /**
   * provider name is required to create mail domain.
   */
  ProviderName?: string;
  /**
   * Set it true if want to create DNS zone with mail domain.
   */
  AddDns?: boolean;
  /**
   * DNS server role id is required to create DNS zone if 'AddDns' flag is true, it will be optional if load balancer settings is set to 'AUTO' for resellers and clients.
   */
  DnsServerRoleId?: number;
  /**
   * If the 'AddDns' flag is true, it will be mandatory to provide the 'DnsProviderName' string.
   */
  DnsProviderName?: string;
};

export type ImportMailDomainDto = {
  MailDomainName: string;
  ServerId?: number;
  OwnerId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ImportMailDomainDto_Request = {
  MailDomainName: string;
  ServerId?: number;
  OwnerId?: number;
};

export type MailBoxDto = {
  MailBoxId?: number;
  MailBoxName: string;
  OwnerId?: number;
  ServerId?: number;
  MailDomainId: number;
  MailBoxSize?: number;
  CResourceId?: number;
  ProviderName?: string;
  MailDomainName?: string;
  EmailAddress?: string;
  Password: string;
  ForwardAddress?: string;
  IsDomainAdmin?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type MailBoxDto_List = {
  MailBoxId?: number;
  MailBoxName: string;
  OwnerId?: number;
  ServerId?: number;
  MailDomainId: number;
  MailBoxSize?: number;
  CResourceId?: number;
  ProviderName?: string;
  MailDomainName?: string;
  EmailAddress?: string;
  Password: string;
  ForwardAddress?: string;
  IsDomainAdmin?: boolean;
};

export type MailBoxDto_Request = {
  /**
   * Mailbox name is required to add mailbox.
   */
  MailBoxName: string;
  /**
   * Mailbox size is required if composite rsource id is less than 1.
   */
  MailBoxSize?: number;
  /**
   * Composite resource id is optional.
   */
  CResourceId?: number;
  /**
   * It is good to set complex password, but simple password is also acceptable.
   */
  Password: string;
  /**
   * Email address should be valid.
   */
  ForwardAddress?: string;
  /**
   * Set it true if want to create admin type mailbox.
   */
  IsDomainAdmin?: boolean;
};

export type UpdateMailBoxDto = {
  MailBoxId: number;
  MailBoxName?: string;
  OwnerId?: number;
  MailDomainId?: number;
  MailBoxSize?: number;
  CResourceId?: number;
  ProviderName?: string;
  ChangePassword?: boolean;
  Password?: string;
  ForwardAddress?: string;
  IsDomainAdmin?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type UpdateMailBoxDto_Request = {
  MailBoxName?: string;
  OwnerId?: number;
  MailBoxSize?: number;
  CResourceId?: number;
  ProviderName?: string;
  ChangePassword?: boolean;
  Password?: string;
  ForwardAddress?: string;
  IsDomainAdmin?: boolean;
};

export type MailboxAliasDto = {
  OwnerId?: number;
  MailDomainId?: number;
  MailBoxId?: number;
  EmailAddress?: string;
  MailBoxName?: string;
  MailDomainName?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type MailboxAliasDto_List = {
  OwnerId?: number;
  EmailAddress?: string;
  MailBoxName?: string;
  MailDomainName?: string;
};

export type MailboxAliasDto_Request = {
  OwnerId?: number;
  EmailAddress?: string;
  MailBoxName?: string;
  MailDomainName?: string;
};

export type DistributionListDto = {
  DistributionListId?: number;
  OwnerId?: number;
  MailBoxId?: number;
  MailBoxName?: string;
  DistributionListName: string;
  MailDomainId?: number;
  MailDomainName?: string;
  MembersList?: Array<string>;
  Members?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type DistributionListDto_Update = {
  OwnerId?: number;
  MailBoxId?: number;
  MailBoxName?: string;
  DistributionListName: string;
  MailDomainName?: string;
  MembersList?: Array<string>;
  Members?: string;
};

export type DistributionListDto_List = {
  DistributionListId?: number;
  OwnerId?: number;
  MailBoxId?: number;
  MailBoxName?: string;
  DistributionListName: string;
  MailDomainId?: number;
  MailDomainName?: string;
  MembersList?: Array<string>;
  Members?: string;
};

export type DistributionListDto_Request = {
  OwnerId?: number;
  MailBoxId?: number;
  MailBoxName?: string;
  DistributionListName: string;
  MailDomainId?: number;
  MailDomainName?: string;
  MembersList?: Array<string>;
  Members?: string;
};

export type WebsiteFileUploadDto = {
  FileName: string;
  BasePath?: string;
  BinaryData: string;
};

export type WebsiteIoDto = {
  ObjectName: string;
  BasePath?: string;
};

export type WebsiteFileContentDto = {
  FileName: string;
  BasePath?: string;
  TextData?: string;
};

export type WebsiteObjectRenameDto = {
  ObjectName: string;
  ObjectNewName: string;
  BasePath?: string;
};

export type WebsiteFilesZipDto = {
  BasePath?: string;
  FilesName: Array<string>;
  ArchieveName: string;
};

export type PermissionsDto = {
  WebsiteId: number;
  FolderPath: string;
  Trustee: string;
  Inheritence: string;
  FinalPermission?: string;
  Operation: string;
  Users?: Array<string>;
  PermissionsToSet?: PermissionDto;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type PermissionsDto_Request = {
  WebsiteId: number;
  FolderPath: string;
  Trustee: string;
  Inheritence: string;
  FinalPermission?: string;
  Operation: string;
  Users?: Array<string>;
  PermissionsToSet?: PermissionDto;
};

export type PermissionDto = {
  FullControl?: boolean;
  Modify?: boolean;
  Read?: boolean;
  Write?: boolean;
  Execute?: boolean;
  Delete?: boolean;
};

export type MailDomainsDto = {
  MailDomains?: Array<MailDomainDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SystemMailDomainListDto = {
  MailDomains?: Array<SystemMailDomainDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SystemMailDomainDto = {
  MailDomainName?: string;
};

export type MailBoxesDto = {
  MailBoxes?: Array<MailBoxDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type MailboxAliasesDto = {
  EmailAddress?: Array<MailboxAliasDto_List>;
  MailBoxId?: number;
  MailDomainId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type DistributionListsDto = {
  DistributionLists?: Array<DistributionListDto_List>;
  TotalRecords?: number;
  MailDomainId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type DistributionListMembersDto = {
  DistributionListName?: string;
  MailDomainName?: string;
  ListMembers?: Array<string>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type FileFoldersDto = {
  SubFolderStructure?: Array<FileFolderDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type FileFolderDto = {
  ObjectType?: string;
  Name?: string;
  FullPath?: string;
  CreationTime?: Date;
  LastAccessTime?: Date;
  ModifiedTime?: Date;
  Size?: number;
  FileData?: string;
  NewPath?: string;
  BinaryData?: string;
  BinaryDataLength?: number;
};

export type FileContentOutDto = {
  BinaryData?: string;
  TextData?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type UserPermissionsDto = {
  UserPermissions?: Array<UserPermissionDto>;
  ModifiedPath?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type UserPermissionDto = {
  UserName?: string;
  Permission?: string;
  ApplyTo?: string;
};

export type ReturnPermissionsStatusDto = {
  UserName?: string;
  Permission?: string;
  ApplyTo?: string;
  FolderPath?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type WebsitesDto = {
  Websites?: Array<WebsiteDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type WebsiteDto = {
  WebsiteId?: number;
  OwnerName?: string;
  RootFolderPath?: string;
  IpAddress?: string;
  DotnetVersion?: string;
  OwnerId: number;
  ServerId?: number;
  ServerRoleId?: number;
  CResourceId?: number;
  ProviderName: string;
  WebsiteState?: string;
  ExecutePermissions?: boolean;
  IsNameBased?: boolean;
  DotNetEnabled?: boolean;
  PhpEnabled?: boolean;
  PHPVersion?: string;
  PerlEnabled?: boolean;
  ColdFusionEnabled?: boolean;
  StatsEnabled?: boolean;
  IsSubDomain?: boolean;
  Status?: string;
  ReadPermission?: boolean;
  WritePermission?: boolean;
  EnableLogging?: boolean;
  SubDomain?: boolean;
  IsDedicated?: boolean;
  LoggingUpdate?: boolean;
  ExpiryDate?: Date;
  DateAdded?: Date;
  SendMailToUser?: boolean;
  DiskUsage?: number;
  BandwidthUsage?: number;
  SoftaculousPath?: string;
  WebsiteName: string;
  ServerType?: string;
  ServerIp?: string;
  AnonymousUser?: string;
  AnonymousUserPass?: string;
  VirtualDirectoryName?: string;
  DefaultDocuments?: string;
  ApplicationPoolUpdate?: boolean;
  ApplicationPoolName?: string;
  VirDirectoryRootPath?: string;
  HttpRedirect?: string;
  DirectoryBrowsingUpdate?: boolean;
  IpAddressUpdate?: boolean;
  DirectoryBrowsing?: boolean;
  RedirectExactUrl?: boolean;
  RedirectChildOnly?: boolean;
  RedirectPermanent?: boolean;
  DefaultDocUpdate?: boolean;
  DefaultDocEnabled?: boolean;
  AnonymousUpdate?: boolean;
  IntegratedAuthenticationUpdate?: boolean;
  AllowAnonymous?: boolean;
  IntegratedAuthentication?: boolean;
  HttpRedirectUpdate?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type WebsiteDto_Request = {
  WebsiteName: string;
  IpAddress?: string;
  /**
   * Owner id is required if want to add a website for your child reseller or client.
   */
  OwnerId: number;
  /**
   * Server role id is required to create website, it will be optional if load balancer settings is set to 'AUTO' for resellers and clients.
   */
  ServerRoleId?: number;
  /**
   * Provider name is required.
   */
  ProviderName: string;
  CResourceId?: number;
  /**
   * Set it true to create name base website.
   */
  IsNameBased?: boolean;
  /**
   * Set it true to enable dot net in website.
   */
  DotNetEnabled?: boolean;
  /**
   * Set it true to enable php in website.
   */
  PhpEnabled?: boolean;
  /**
   * Set it true to enable perl in website.
   */
  PerlEnabled?: boolean;
  /**
   * Set it true to enable cold fusion in website.
   */
  ColdFusionEnabled?: boolean;
  /**
   * Set it true to enable stats in website.
   */
  StatsEnabled?: boolean;
  /**
   * Virtual directory name is required if 'IsNameBased' is set true.
   */
  VirtualDirectoryName?: string;
  /**
   * Set this flag true to create subdomain.
   */
  IsSubDomain?: boolean;
  /**
   * set this flag true to update default document.
   */
  DefaultDocUpdate?: boolean;
  /**
   * Default documents is the comma separated list of file extentions it is required if 'DefaultDocUpdate' is set true.
   */
  DefaultDocuments?: string;
  /**
   * Set this flag true to enable directory browsing when you want client browsers to display a Web page that lists the contents of a directory when a request does not specify a document name and IIS cannot return a default document.
   */
  DirectoryBrowsing?: boolean;
  /**
   * Set this flag true to allow anonymous to a website.
   */
  AllowAnonymous?: boolean;
  /**
   * Set this flag true to enable integrated windows authentication.
   */
  IntegratedAuthentication?: boolean;
  /**
   * Set this flag true to create FTP user with website, it is mandatory when provider is 'apache' and PHP handler DSO is not configured.
   */
  CreateFtpUser?: boolean;
  /**
   * FTP user name to create with website, it is mandatory when provider is 'apache' and PHP handler DSO is not configured.
   */
  FtpUserName?: string;
  /**
   * FTP user password to create with password, it is mandatory when provider is 'apache' and PHP handler DSO is not configured.
   */
  FtpUserPassword?: string;
};

export type WebsiteDto_List = {
  WebsiteId?: number;
  OwnerName?: string;
  RootFolderPath?: string;
  IpAddress?: string;
  DotnetVersion?: string;
  OwnerId: number;
  ServerId?: number;
  ServerRoleId?: number;
  CResourceId?: number;
  ProviderName: string;
  WebsiteState?: string;
  ExecutePermissions?: boolean;
  IsNameBased?: boolean;
  DotNetEnabled?: boolean;
  PhpEnabled?: boolean;
  PHPVersion?: string;
  PerlEnabled?: boolean;
  ColdFusionEnabled?: boolean;
  StatsEnabled?: boolean;
  IsSubDomain?: boolean;
  Status?: string;
  ReadPermission?: boolean;
  WritePermission?: boolean;
  EnableLogging?: boolean;
  SubDomain?: boolean;
  IsDedicated?: boolean;
  LoggingUpdate?: boolean;
  ExpiryDate?: Date;
  DateAdded?: Date;
  SendMailToUser?: boolean;
  DiskUsage?: number;
  BandwidthUsage?: number;
  SoftaculousPath?: string;
  WebsiteName: string;
  ServerType?: string;
  ServerIp?: string;
  AnonymousUser?: string;
  AnonymousUserPass?: string;
  VirtualDirectoryName?: string;
  DefaultDocuments?: string;
  ApplicationPoolUpdate?: boolean;
  ApplicationPoolName?: string;
  VirDirectoryRootPath?: string;
  HttpRedirect?: string;
  DirectoryBrowsingUpdate?: boolean;
  IpAddressUpdate?: boolean;
  DirectoryBrowsing?: boolean;
  RedirectExactUrl?: boolean;
  RedirectChildOnly?: boolean;
  RedirectPermanent?: boolean;
  DefaultDocUpdate?: boolean;
  DefaultDocEnabled?: boolean;
  AnonymousUpdate?: boolean;
  IntegratedAuthenticationUpdate?: boolean;
  AllowAnonymous?: boolean;
  IntegratedAuthentication?: boolean;
  HttpRedirectUpdate?: boolean;
};

export type WebsiteUpdateDto = {
  CResourceId?: number;
  IsNameBased?: boolean;
  PhpEnabled?: boolean;
  DotNetEnabled?: boolean;
  PHPVersion?: string;
  PerlEnabled?: boolean;
  ColdFusionEnabled?: boolean;
  StatsEnabled?: boolean;
  IpAddress?: string;
};

export type ServerWebsitesDto = {
  ServerWebsitesList?: Array<ServerWebsiteDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ServerWebsiteDto = {
  ServerId?: number;
  WebsiteName?: string;
};

export type ImportWebsiteDto = {
  OwnerId?: number;
  ProviderName: string;
  WebsiteName: string;
  ServerRoleId?: number;
  CreateForMe?: boolean;
  UserName?: string;
  IPLessDomain?: boolean;
  SubDomain?: boolean;
  MailDomain?: boolean;
  DNS?: boolean;
  WebsiteId?: number;
  RootFolderPath?: string;
  IpAddress?: string;
  ServerId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ImportWebsiteDto_Request = {
  OwnerId?: number;
  ProviderName: string;
  WebsiteName: string;
  ServerRoleId?: number;
  CreateForMe?: boolean;
  UserName?: string;
  IPLessDomain?: boolean;
  SubDomain?: boolean;
  MailDomain?: boolean;
  DNS?: boolean;
  RootFolderPath?: string;
  IpAddress?: string;
  ServerId?: number;
};

export type ViewStatsDto = {
  URL?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SslsDto = {
  Ssls?: Array<SslDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SslDto = {
  SslId?: number;
  WebsiteId: number;
  SslName: string;
  SslPath: string;
  AllowAnonymous?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SslDto_List = {
  SslId?: number;
  WebsiteId?: number;
  SslName?: string;
  SslPath?: string;
  AllowAnonymous?: boolean;
};

export type SslDto_Request = {
  SslName: string;
  SslPath: string;
  AllowAnonymous?: boolean;
};

export type IPAddressDto = {
  IPAddress?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type IPAddressDto_Request = {
  IPAddress?: string;
};

export type ParkedDomainsDto = {
  ParkedDomains?: Array<ParkedDomainDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ParkedDomainDto = {
  ParkedDomainId?: number;
  ParkedDomainName: string;
  WebsiteId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ParkedDomainDto_List = {
  ParkedDomainId?: number;
  ParkedDomainName: string;
  WebsiteId?: number;
};

export type ParkedDomainDto_Request = {
  ParkedDomainName: string;
};

export type HostHeadersDto = {
  HostHeaders?: Array<HostHeaderDto_List>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type HostHeaderDto = {
  WebsiteName?: string;
  HostHeaderName: string;
  IpAddress?: string;
  WebsiteId?: number;
  Port?: number;
  Prefix?: string;
  Postfix?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type HostHeaderDto_Request = {
  WebsiteName?: string;
  HostHeaderName: string;
  IpAddress?: string;
  Port?: number;
  Prefix?: string;
  Postfix?: string;
};

export type HostHeaderDto_List = {
  WebsiteName?: string;
  HostHeaderName: string;
  IpAddress?: string;
  WebsiteId?: number;
  Port?: number;
  Prefix?: string;
  Postfix?: string;
};

export type VirtualDirectoriesDto = {
  VirtualDirectories?: Array<VirtualDirectoryDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type VirtualDirectoryDto = {
  WebsiteId?: number;
  VirtualDirectoryName: string;
  Exists?: boolean;
  ManagedRuntimeVersion?: string;
  IsAppPoolDedicated?: boolean;
  AllowBasicAuthentication?: boolean;
  SystemUser?: string;
  SystemUserPass?: string;
  WebsiteName: string;
  ServerType?: string;
  ServerIp?: string;
  AnonymousUser?: string;
  AnonymousUserPass?: string;
  DefaultDocuments?: string;
  ApplicationPoolUpdate?: boolean;
  ApplicationPoolName?: string;
  VirDirectoryRootPath?: string;
  HttpRedirect?: string;
  DirectoryBrowsingUpdate?: boolean;
  IpAddressUpdate?: boolean;
  DirectoryBrowsing?: boolean;
  RedirectExactUrl?: boolean;
  RedirectChildOnly?: boolean;
  RedirectPermanent?: boolean;
  DefaultDocUpdate?: boolean;
  DefaultDocEnabled?: boolean;
  AnonymousUpdate?: boolean;
  IntegratedAuthenticationUpdate?: boolean;
  AllowAnonymous?: boolean;
  IntegratedAuthentication?: boolean;
  HttpRedirectUpdate?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type VirtualDirectoryDto_Request = {
  VirtualDirectoryName: string;
  Exists?: boolean;
  ManagedRuntimeVersion?: string;
  IsAppPoolDedicated?: boolean;
  AllowBasicAuthentication?: boolean;
  SystemUser?: string;
  SystemUserPass?: string;
  WebsiteName: string;
  ServerType?: string;
  ServerIp?: string;
  AnonymousUser?: string;
  AnonymousUserPass?: string;
  DefaultDocuments?: string;
  ApplicationPoolUpdate?: boolean;
  ApplicationPoolName?: string;
  VirDirectoryRootPath?: string;
  HttpRedirect?: string;
  DirectoryBrowsingUpdate?: boolean;
  IpAddressUpdate?: boolean;
  DirectoryBrowsing?: boolean;
  RedirectExactUrl?: boolean;
  RedirectChildOnly?: boolean;
  RedirectPermanent?: boolean;
  DefaultDocUpdate?: boolean;
  DefaultDocEnabled?: boolean;
  AnonymousUpdate?: boolean;
  IntegratedAuthenticationUpdate?: boolean;
  AllowAnonymous?: boolean;
  IntegratedAuthentication?: boolean;
  HttpRedirectUpdate?: boolean;
};

export type VirtualDirectoryDto_List = {
  WebsiteId?: number;
  VirtualDirectoryName: string;
  Exists?: boolean;
  ManagedRuntimeVersion?: string;
  IsAppPoolDedicated?: boolean;
  AllowBasicAuthentication?: boolean;
  SystemUser?: string;
  SystemUserPass?: string;
  WebsiteName: string;
  ServerType?: string;
  ServerIp?: string;
  AnonymousUser?: string;
  AnonymousUserPass?: string;
  DefaultDocuments?: string;
  ApplicationPoolUpdate?: boolean;
  ApplicationPoolName?: string;
  VirDirectoryRootPath?: string;
  HttpRedirect?: string;
  DirectoryBrowsingUpdate?: boolean;
  IpAddressUpdate?: boolean;
  DirectoryBrowsing?: boolean;
  RedirectExactUrl?: boolean;
  RedirectChildOnly?: boolean;
  RedirectPermanent?: boolean;
  DefaultDocUpdate?: boolean;
  DefaultDocEnabled?: boolean;
  AnonymousUpdate?: boolean;
  IntegratedAuthenticationUpdate?: boolean;
  AllowAnonymous?: boolean;
  IntegratedAuthentication?: boolean;
  HttpRedirectUpdate?: boolean;
};

export type SysUserChangePasswordDto = {
  Password: string;
  SysUser: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SysUserChangePasswordDto_Request = {
  Password: string;
  SysUser: string;
};

export type ApplicationPoolsWithVDDto = {
  ApplicationPools?: Array<ApplicationPoolWithVDDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ApplicationPoolWithVDDto_List = {
  WebsiteName?: string;
  VirtualDirectoryName?: string;
  VirDirectoryRootPath?: string;
  AppPoolCPUUsage?: number;
  AppPoolMemoryUsage?: number;
  ApplicationPoolIdentity?: number;
  ApplicationPoolName?: string;
  ManagedRuntimeVersionUpdate?: boolean;
  ManagedRuntimeVersion?: string;
  ManagedPipeLineModeUpdate?: boolean;
  ManagedPipeLineMode?: string;
  MaxVirtualMemory?: number;
  MaxUsedMemory?: number;
  MaxCpuUsage?: number;
  CpuUsageRefreshTime?: number;
  CpuUsageExceedAction?: number;
  CpuUsageRefreshTimeUpdate?: boolean;
  MaxVirtualMemoryUpdate?: boolean;
  MaxUsedMemoryUpdate?: boolean;
  MaxCpuUsageUpdate?: boolean;
  CpuUsageExceedActionUpdate?: boolean;
};

export type ApplicationPoolWithVDDto = {
  WebsiteName?: string;
  VirtualDirectoryName?: string;
  VirDirectoryRootPath?: string;
  AppPoolCPUUsage?: number;
  AppPoolMemoryUsage?: number;
  ApplicationPoolIdentity?: number;
  ApplicationPoolName?: string;
  ManagedRuntimeVersionUpdate?: boolean;
  ManagedRuntimeVersion?: string;
  ManagedPipeLineModeUpdate?: boolean;
  ManagedPipeLineMode?: string;
  MaxVirtualMemory?: number;
  MaxUsedMemory?: number;
  MaxCpuUsage?: number;
  CpuUsageRefreshTime?: number;
  CpuUsageExceedAction?: number;
  CpuUsageRefreshTimeUpdate?: boolean;
  MaxVirtualMemoryUpdate?: boolean;
  MaxUsedMemoryUpdate?: boolean;
  MaxCpuUsageUpdate?: boolean;
  CpuUsageExceedActionUpdate?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ApplicationPoolDto = {
  ApplicationPoolIdentity?: number;
  ApplicationPoolName?: string;
  ManagedRuntimeVersionUpdate?: boolean;
  ManagedRuntimeVersion?: string;
  ManagedPipeLineModeUpdate?: boolean;
  ManagedPipeLineMode?: string;
  MaxVirtualMemory?: number;
  MaxUsedMemory?: number;
  MaxCpuUsage?: number;
  CpuUsageRefreshTime?: number;
  CpuUsageExceedAction?: number;
  CpuUsageRefreshTimeUpdate?: boolean;
  MaxVirtualMemoryUpdate?: boolean;
  MaxUsedMemoryUpdate?: boolean;
  MaxCpuUsageUpdate?: boolean;
  CpuUsageExceedActionUpdate?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ApplicationPoolDto_Request = {
  ApplicationPoolIdentity?: number;
  ApplicationPoolName?: string;
  ManagedRuntimeVersionUpdate?: boolean;
  ManagedRuntimeVersion?: string;
  ManagedPipeLineModeUpdate?: boolean;
  ManagedPipeLineMode?: string;
  MaxVirtualMemory?: number;
  MaxUsedMemory?: number;
  MaxCpuUsage?: number;
  CpuUsageRefreshTime?: number;
  CpuUsageExceedAction?: number;
  CpuUsageRefreshTimeUpdate?: boolean;
  MaxVirtualMemoryUpdate?: boolean;
  MaxUsedMemoryUpdate?: boolean;
  MaxCpuUsageUpdate?: boolean;
  CpuUsageExceedActionUpdate?: boolean;
};

export type ApplicationPoolProcessInfoDto = {
  ApplicationPoolName: string;
  AppPoolCPUUsage?: number;
  AppPoolMemoryUsage?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type UrlRedirectionDto = {
  WebsiteId?: number;
  EnableRedirectUrl?: boolean;
  RedirectUrl?: string;
  RedirectClientExact?: boolean;
  RedirectClientBelow?: boolean;
  RedirectClientPermanent?: boolean;
  EnableDefaultDoc?: boolean;
  DefaultDoc?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type UrlRedirectionDto_Request = {
  EnableRedirectUrl?: boolean;
  RedirectUrl?: string;
  RedirectClientExact?: boolean;
  RedirectClientBelow?: boolean;
  RedirectClientPermanent?: boolean;
  EnableDefaultDoc?: boolean;
  DefaultDoc?: string;
};

export type AccessPermissionDto = {
  WebsiteId?: number;
  AllowAnonymous?: boolean;
  IntegratedWindowsAuthentication?: boolean;
  AccessPermissions?: boolean;
  EnableLogging?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type AccessPermissionDto_Request = {
  AllowAnonymous?: boolean;
  IntegratedWindowsAuthentication?: boolean;
  AccessPermissions?: boolean;
  EnableLogging?: boolean;
};

export type CustomErrorsDto = {
  CustomErrors?: Array<CustomErrorDto_List>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type CustomErrorDto = {
  WebsiteId?: number;
  WebsiteName?: string;
  HttpError?: string;
  Type?: string;
  Contents?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type CustomErrorDto_Request = {
  WebsiteName?: string;
  HttpError?: string;
  Type?: string;
  Contents?: string;
};

export type CustomErrorDto_List = {
  WebsiteId?: number;
  WebsiteName?: string;
  HttpError?: string;
  Type?: string;
  Contents?: string;
};

export type FtpUsersDto = {
  FtpUsers?: Array<FtpUserDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type FtpUserDto = {
  FtpUserId?: number;
  FtpUserName?: string;
  UserId?: number;
  OwnerId?: number;
  WebsiteId?: number;
  UserName: string;
  PermittedPath: string;
  Password: string;
  Description?: string;
  IsDisabled?: number;
  Read?: boolean;
  Write?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type FtpUserDto_List = {
  FtpUserId?: number;
  FtpUserName?: string;
  UserId?: number;
  OwnerId?: number;
  WebsiteId?: number;
  UserName: string;
  PermittedPath: string;
  Password: string;
  Description?: string;
  IsDisabled?: number;
  Read?: boolean;
  Write?: boolean;
};

export type FtpUserDto_Request = {
  FtpUserName?: string;
  UserId?: number;
  OwnerId?: number;
  WebsiteId?: number;
  UserName: string;
  PermittedPath: string;
  Password: string;
  Description?: string;
  IsDisabled?: number;
  Read?: boolean;
  Write?: boolean;
};

export type UpdateFtpUserPasswordDto = {
  Password: string;
  UserName: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type UpdateFtpUserPasswordDto_Request = {
  Password: string;
  UserName: string;
};

export type UpdateFtpUserStatusDto = {
  IsDisabled?: number;
  Flag?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type UpdateFtpUserStatusDto_Request = {
  IsDisabled?: number;
  Flag?: string;
};

export type UpdateFtpUserPermissionDto = {
  WebsiteId?: number;
  Read?: boolean;
  Write?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type UpdateFtpUserPermissionDto_Request = {
  Read?: boolean;
  Write?: boolean;
};

export type DotNetInstalledVersionsDto = {
  DotNetInstalledVersions?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ScriptingDto = {
  VirtualDirectoryName?: string;
  ManagedRuntimeVersion?: string;
  PHPVersion?: string;
  IsEnabled?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ScriptingInputModel = {
  VirtualDirectoryName?: string;
  DotNetVersion?: string;
  PHPVersion?: string;
  IsEnabled?: boolean;
};

export type SystemUsersDto = {
  SystemUsers?: Array<string>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeSettingsDto = {
  ExchangeServerType?: string;
  ServerIp?: string;
  User?: string;
  Password?: string;
  Host?: string;
  DomainController?: string;
  ADAdmin?: string;
  ADPassword?: string;
  ParentOU?: string;
  WebRole?: boolean;
};

export type OrganizationalUnitListDto = {
  OrganizationalUnits?: Array<OrganizationalUnitDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type OrganizationalUnitDto = {
  Name?: string;
  Path?: string;
};

export type ActiveDirectorySettingsDto = {
  ServerIp: string;
  ADAdmin: string;
  ADAdminPassword: string;
  DomainController?: string;
  RootOrganizationalUnitPath?: string;
};

export type DomainControllerListDto = {
  DomainControllers?: Array<ExgDomainControllerDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExgDomainControllerDto = {
  Name?: string;
  Fqdn?: string;
  IpAddress?: string;
};

export type ActiveDirectoryListDto = {
  ActiveDirectoryList?: Array<ActiveDirectoryDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ActiveDirectoryDto = {
  ActiveDirectoryTrustId?: number;
  ServerRoleId: number;
  OrganizationId?: number;
  DisplayName?: string;
  DomainController: string;
  ADAdmin: string;
  ADAdminPassword: string;
  RootOU: string;
  ServerIp?: string;
  ServerName?: string;
  OrganizationCount?: number;
  IsDeleted?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ActiveDirectoryDto_Request = {
  ActiveDirectoryTrustId?: number;
  ServerRoleId: number;
  OrganizationId?: number;
  DisplayName?: string;
  DomainController: string;
  ADAdmin: string;
  ADAdminPassword: string;
  RootOU: string;
  ServerIp?: string;
  ServerName?: string;
  OrganizationCount?: number;
  IsDeleted?: boolean;
};

export type ActiveDirectoryDto_Add = {
  ServerRoleId: number;
  OrganizationId?: number;
  DisplayName?: string;
  DomainController: string;
  ADAdmin: string;
  ADAdminPassword: string;
  RootOU: string;
  ServerIp?: string;
  ServerName?: string;
  OrganizationCount?: number;
  IsDeleted?: boolean;
};

export type ActiveDirectoryDto_List = {
  ActiveDirectoryTrustId?: number;
  ServerRoleId: number;
  OrganizationId?: number;
  DisplayName?: string;
  DomainController: string;
  ADAdmin: string;
  ADAdminPassword: string;
  RootOU: string;
  ServerIp?: string;
  ServerName?: string;
  OrganizationCount?: number;
  IsDeleted?: boolean;
};

export type ActiveDirectoryTrustOrganizationListDto = {
  Organizations?: Array<ActiveDirectoryTrustOrganizationDto_List>;
  ActiveDirectoryTrustId: number;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ActiveDirectoryTrustOrganizationListDto_Request = {
  Organizations?: Array<ActiveDirectoryTrustOrganizationDto_List>;
  ActiveDirectoryTrustId: number;
};

export type ActiveDirectoryTrustOrganizationDto = {
  OrganizationId: number;
  OrganizationName?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ActiveDirectoryTrustOrganizationDto_List = {
  OrganizationId: number;
  OrganizationName?: string;
};

export type OrganizationsDto = {
  Organizations?: Array<OrganizationDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ADOrganizationsDto = {
  Organizations?: Array<ADOrganizationDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type OrganizationDto = {
  OrganizationId?: number;
  MailboxDatabaseId?: number;
  MailboxDatabaseName?: string;
  OwnerId?: number;
  OwnerName?: string;
  ServerRoleId?: number;
  MailServerType: string;
  RoleName?: string;
  SystemName: string;
  OWAAccess?: string;
  TotalMailDomains?: number;
  TotalMailboxes?: number;
  TotalSharePointSites?: number;
  TotalSIPDomains?: number;
  TotalSkypeUsers?: number;
  IsADSync?: boolean;
  IsDatabaseSync?: boolean;
  IsResourceSync?: boolean;
  Regions?: string;
  DefaultDomain?: string;
  AddressLine1?: string;
  AddressLine2?: string;
  City?: string;
  FirstName?: string;
  LastName?: string;
  EmailAddress?: string;
  PhoneNumber?: string;
  ZipCode?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ADOrganizationDto_List = {
  OrganizationId?: number;
  OwnerId?: number;
  OwnerName?: string;
  ServerRoleId?: number;
  MailServerType?: string;
  Provider?: string;
  RoleName?: string;
  SystemName?: string;
  TotalAdUsers?: number;
  TotalAdGroups?: number;
  TotalAdContacts?: number;
  SyncLastRunTime?: Date;
  IsADSync?: boolean;
  IsDatabaseSync?: boolean;
  IsResourceSync?: boolean;
  OUPath?: string;
  ServerName?: string;
  ProfileDefaults?: string;
};

export type OrganizationDto_List = {
  OrganizationId?: number;
  MailboxDatabaseId?: number;
  MailboxDatabaseName?: string;
  OwnerId?: number;
  OwnerName?: string;
  ServerRoleId?: number;
  MailServerType: string;
  RoleName?: string;
  SystemName: string;
  OWAAccess?: string;
  TotalMailDomains?: number;
  TotalMailboxes?: number;
  TotalSharePointSites?: number;
  TotalSIPDomains?: number;
  TotalSkypeUsers?: number;
  IsADSync?: boolean;
  IsDatabaseSync?: boolean;
  IsResourceSync?: boolean;
  Regions?: string;
  DefaultDomain?: string;
  AddressLine1?: string;
  AddressLine2?: string;
  City?: string;
  FirstName?: string;
  LastName?: string;
  EmailAddress?: string;
  PhoneNumber?: string;
  ZipCode?: string;
};

export type OrganizationDto_Request = {
  OrganizationId?: number;
  MailboxDatabaseId?: number;
  MailboxDatabaseName?: string;
  OwnerId?: number;
  OwnerName?: string;
  ServerRoleId?: number;
  MailServerType: string;
  RoleName?: string;
  SystemName: string;
  OWAAccess?: string;
  TotalMailDomains?: number;
  TotalMailboxes?: number;
  TotalSharePointSites?: number;
  TotalSIPDomains?: number;
  TotalSkypeUsers?: number;
  IsADSync?: boolean;
  IsDatabaseSync?: boolean;
  IsResourceSync?: boolean;
  Regions?: string;
  DefaultDomain?: string;
  AddressLine1?: string;
  AddressLine2?: string;
  City?: string;
  FirstName?: string;
  LastName?: string;
  EmailAddress?: string;
  PhoneNumber?: string;
  ZipCode?: string;
};

export type OrganizationDto_Add = {
  ServerRoleId?: number;
  MailServerType: string;
  /**
   * Name of the new orgranization.
   */
  SystemName: string;
  /**
   * Give owner ID in case of creating exchange organization for any descendent user.
   */
  OwnerId?: number;
  /**
   * Mailbox database name will be used later in the creation of mailbox. This parameter is optional in case of automatic mailbox database selection in the server settings.
   */
  MailboxDatabaseName?: string;
};

export type SharePointOrganizationDto = {
  ServerRoleId?: number;
  OrganizationId?: number;
  SystemName: string;
  DomainName?: string;
  Provider?: string;
  OwnerId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ActiveDirectoryOrganizationDto = {
  ServerRoleId: number;
  OrganizationId?: number;
  SystemName: string;
  OwnerId?: number;
  OrganizationSuffix?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ActiveDirectoryOrganizationDto_Request = {
  OwnerId: number;
  ServerRoleId: number;
  SystemName: string;
  OrganizationSuffix: string;
};

export type ActiveDirectorySubOrganizationDto = {
  OrganizationId?: number;
  OuName?: string;
  ParentOuPath?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ActiveDirectorySubOrganizationDto_Request = {
  OrganizationId: number;
  OuName: string;
  ParentOuPath: string;
};

export type SharePointOrganizationDto_Add = {
  /**
   * Give owner id in case of creating sharePoint organization for any descendent user.
   */
  OwnerId?: number;
  ServerRoleId?: number;
  /**
   * Name of the new sharePoint organization.
   */
  SystemName: string;
  /**
   * Domain name parameter here is used to add UPNSuffix in Organization's OU.
   */
  DomainName?: string;
  Provider?: string;
};

export type SkypeOrganizationDto = {
  ServerRoleId: number;
  OrganizationId?: number;
  SystemName: string;
  DomainName?: string;
  Provider?: string;
  OwnerId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeOrganizationDto_Add = {
  /**
   * Give owner id in case of creating skype organization for any descendent user.
   */
  OwnerId?: number;
  ServerRoleId: number;
  /**
   * Name of the new skype organization.
   */
  SystemName: string;
  Provider?: string;
};

export type ActiveDirectoryUsersListDto = {
  Users?: Array<ActiveDirectoryUserDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ActiveDirectoryUserDto = {
  DisplayName?: string;
  UserName?: string;
  UserLogin?: string;
  UserPrincipalName?: string;
};

export type ExchangeRecipientListDto = {
  ExchangeRecipients?: Array<ExchangeRecipientDto>;
  MailboxId?: number;
  PublicFolderId?: number;
  IsAllSender?: boolean;
  RecipientId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeRecipientListDto_Request = {
  ExchangeRecipients?: Array<ExchangeRecipientDto>;
  MailboxId?: number;
  PublicFolderId?: number;
  IsAllSender?: boolean;
  RecipientId?: number;
};

export type ExchangeRecipientDto = {
  EmailAddress: string;
  DisplayName?: string;
  AutoMapping?: string;
  MailboxSize?: number;
  CResourceId?: number;
};

export type ExchangeBlockedDomainRuleDto = {
  BlockedDomainId?: number;
  RuleName?: string;
  SentToScope?: string;
  FromAddressMatchesPatterns?: string;
  RejectMessageReasonText?: string;
  Enabled?: boolean;
  OwnerId?: number;
  OrganizationId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeBlockedDomainRuleDto_List = {
  BlockedDomainId?: number;
  RuleName?: string;
  SentToScope?: string;
  FromAddressMatchesPatterns?: string;
  RejectMessageReasonText?: string;
  Enabled?: boolean;
  OwnerId?: number;
  OrganizationId?: number;
};

export type ExchangeBlockedDomainRuleDto_Request = {
  /**
   * You can get possible values of sent to scope by calling 'GET /system-entities/exchange/recipient-locations'.
   */
  SentToScope?:
    | 'NotInOrganization'
    | 'InOrganization'
    | 'ExternalPartner'
    | 'ExternalNonPartner';
  FromAddressMatchesPatterns?: string;
  RejectMessageReasonText?: string;
};

/**
 * You can get possible values of sent to scope by calling 'GET /system-entities/exchange/recipient-locations'.
 */
export type SentToScope =
  | 'NotInOrganization'
  | 'InOrganization'
  | 'ExternalPartner'
  | 'ExternalNonPartner';

/**
 * You can get possible values of sent to scope by calling 'GET /system-entities/exchange/recipient-locations'.
 */
export const SentToScope = {
  NOT_IN_ORGANIZATION: 'NotInOrganization',
  IN_ORGANIZATION: 'InOrganization',
  EXTERNAL_PARTNER: 'ExternalPartner',
  EXTERNAL_NON_PARTNER: 'ExternalNonPartner',
} as const;

export type ExchangeBlockedDomainRulesDto = {
  BlockedDomainRules?: Array<ExchangeBlockedDomainRuleDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeBlockedDomainEnableDisableDto = {
  Enabled?: boolean;
  OrganizationId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeBlockedDomainEnableDisableDto_Request = {
  Enabled?: boolean;
};

export type ExchangeJournalRuleDto = {
  JournalMailboxId?: number;
  JournalingMailbox: string;
  JournalingMailboxPassword: string;
  MailboxDatabase?: string;
  EnableJournalRule?: boolean;
  IsEnabled?: boolean;
  JournalRuleName?: string;
  MailboxSize: string;
  MailboxQuota?: string;
  OrganizationId?: number;
  OwnerId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeJournalRuleDto_Request = {
  JournalingMailbox: string;
  JournalingMailboxPassword: string;
  MailboxSize: string;
};

export type ExchangeJournalRuleDto_List = {
  JournalMailboxId?: number;
  JournalingMailbox: string;
  JournalingMailboxPassword: string;
  MailboxDatabase?: string;
  EnableJournalRule?: boolean;
  IsEnabled?: boolean;
  JournalRuleName?: string;
  MailboxSize: string;
  MailboxQuota?: string;
  OrganizationId?: number;
  OwnerId?: number;
};

export type ExchangeJournalRulesDto = {
  JournalRules?: Array<ExchangeJournalRuleDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeJournalRuleEnableDisableDto = {
  EnableJournalRule?: boolean;
  OrganizationId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeJournalRuleEnableDisableDto_Update = {
  EnableJournalRule?: boolean;
};

export type ExchangeMailDisclaimersDto = {
  MailDisclaimers?: Array<ExchangeMailDisclaimerDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeMailDisclaimerDto = {
  OrganizationId?: number;
  DisplayName?: string;
  RecipientLocation?: string;
  DisclaimerText?: string;
  Location?: string;
  FallbackAction?: string;
  IsDisabled?: boolean;
  OwnerId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeMailDisclaimerDto_Request = {
  DisclaimerText?: string;
  Location?: 'Append' | 'Prepend';
  FallbackAction?: 'Ignore' | 'Wrap' | 'Reject';
  /**
   * You can get possible values of recipient location by calling 'GET /system-entities/exchange/recipient-locations'.
   */
  RecipientLocation?:
    | 'NotInOrganization'
    | 'InOrganization'
    | 'ExternalPartner'
    | 'ExternalNonPartner';
};

export type Location = 'Append' | 'Prepend';

export const Location = {
  APPEND: 'Append',
  PREPEND: 'Prepend',
} as const;

export type FallbackAction = 'Ignore' | 'Wrap' | 'Reject';

export const FallbackAction = {
  IGNORE: 'Ignore',
  WRAP: 'Wrap',
  REJECT: 'Reject',
} as const;

/**
 * You can get possible values of recipient location by calling 'GET /system-entities/exchange/recipient-locations'.
 */
export type RecipientLocation =
  | 'NotInOrganization'
  | 'InOrganization'
  | 'ExternalPartner'
  | 'ExternalNonPartner';

/**
 * You can get possible values of recipient location by calling 'GET /system-entities/exchange/recipient-locations'.
 */
export const RecipientLocation = {
  NOT_IN_ORGANIZATION: 'NotInOrganization',
  IN_ORGANIZATION: 'InOrganization',
  EXTERNAL_PARTNER: 'ExternalPartner',
  EXTERNAL_NON_PARTNER: 'ExternalNonPartner',
} as const;

export type ExchangeMailDisclaimerDto_List = {
  OrganizationId?: number;
  DisplayName?: string;
  RecipientLocation?: string;
  DisclaimerText?: string;
  Location?: string;
  FallbackAction?: string;
  IsDisabled?: boolean;
  OwnerId?: number;
};

export type ExchangeMailDisclaimerEnableDisableDto = {
  IsDisabled?: boolean;
  OrganizationId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeMailDisclaimerEnableDisableDto_Request = {
  IsDisabled?: boolean;
};

export type ExchangeServerListDto = {
  ExchangeServers?: Array<ExchangeServerDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeServerDto = {
  Domain?: string;
  IsClientAccessServer?: string;
  IsMailboxServer?: string;
  AdminDisplayVersion?: string;
  Edition?: string;
  HostName?: string;
  OutLookAnywhereEnabled?: boolean;
  ExchangeVersion?: string;
  DataPath?: string;
  DataPathEx?: string;
  Name?: string;
  Fqdn?: string;
  IpAddress?: string;
};

export type ServerRoleDto = {
  RoleId?: number;
  ServerId?: number;
  ServerRoleId?: number;
  ServerIp?: string;
  SystemName?: string;
  DisplayName?: string;
  PlatformName?: string;
  WebRoleSettings?: WebServerRole;
  FtpRoleSettings?: FtpServerRole;
  DnsRoleSettings?: DnsServerRole;
  DatabaseRoleSettings?: DatabaseServerRole;
  MailRoleSettings?: MailServerRole;
  SharePointRoleSettings?: SharePointServerRole;
  SkypeRoleSettings?: SkypeServerRole;
  CrmRoleSettings?: CrmServerRole;
  VirtualizationRoleSettings?: VirtualizationServerRole;
  ExchangeRoleSettings?: ExchangeServerRole;
  BlackBerryRoleSettings?: BlackBerryServerRole;
  IaasRoleSettings?: IaasServerRole;
  Office365ServerSettings?: Office365ServerRole;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ServerRoleDto_List = {
  RoleId?: number;
  ServerId?: number;
  ServerRoleId?: number;
  ServerIp?: string;
  SystemName?: string;
  DisplayName?: string;
  PlatformName?: string;
};

export type WebServerRole = {
  SelectedWebServerType?: string;
  Webspace: string;
  SelectedFtpServerType?: string;
  VirtualDirectoryName?: string;
  IpLessDomainIp?: string;
  IpLessFtpSite?: string;
  FtpVersion?: string;
  ApplicationPoolEnabled?: boolean;
  SoftaculousEnabled?: boolean;
  SoftaculousPath?: string;
  DomainControllerEnabled?: boolean;
  DomainControllerName?: string;
  DefaultOrganizationalUnit?: string;
  SslWebsite?: string;
  WebServerPort?: string;
  ConfFilePath?: string;
  PidFilePath?: string;
  ServiceFilePath?: string;
  SslEnabledWebsite?: string;
  StatServerType?: string;
  PhpAvailableVersions?: Array<string>;
  IndexServerCatalogs?: IndexServerCatalog;
  PhpVersions?: Array<Php>;
  Perl?: PerlObject;
  DotNet?: DotNetObject;
  ColdFusion?: ColdFusionObject;
  AwStats?: AwStat;
  DeepMetrix?: DeepMetrixStat;
  SmarterStats?: SmarterStat;
  Webalizer?: WebalizerStat;
  WebTrend?: WebTrendStat;
};

export type IndexServerCatalog = {
  IsEnabled?: boolean;
};

export type Php = {
  Version?: string;
  FastCgiEnabled?: boolean;
  Handler?: string;
  InstallPath?: string;
};

export type PerlObject = {
  InstallPath?: string;
};

export type DotNetObject = {
  InstallPath?: string;
};

export type ColdFusionObject = {
  ColdfusionPassword?: string;
  InstallPath?: string;
};

export type AwStat = {
  IsEnabled?: boolean;
};

export type DeepMetrixStat = {
  RemoteConfigured?: boolean;
  XspVersion?: boolean;
  ServerIp?: string;
  Port?: string;
  AdminName?: string;
  AdminPassword?: string;
};

export type SmarterStat = {
  IsEnterpriseVersion?: boolean;
  AdminName?: string;
  AdminPassword?: string;
  ServerIp?: string;
  Port?: string;
  AccessUrl?: string;
  LogsPath?: string;
};

export type WebalizerStat = {
  IsEnabled?: boolean;
};

export type WebTrendStat = {
  WebTrendVersion?: string;
  ServerIp?: string;
  Port?: string;
};

export type FtpServerRole = {
  SelectedFtpServerType?: string;
  IpLessFtpSite?: string;
  VirtualDirectoryName?: string;
  ServuIniFilePath: string;
  DefaultDomain?: string;
  WuFtpd: string;
  VsFtpd: string;
  Proftpd: string;
};

export type DnsServerRole = {
  SelectedDnsServerType?: string;
  DnsPath: string;
  NameServer1: string;
  NameServer2: string;
  NameServer3?: string;
  NameServer4?: string;
  EmailAddress: string;
  SpfRecord?: string;
  DnsEnabled?: boolean;
  IsSecondaryOnly?: boolean;
  SecondaryEnabled?: boolean;
  SpfEnabled?: boolean;
  Ns3Enabled?: boolean;
  Ns4Enabled?: boolean;
  Ns2ServerRoleId?: number;
  Ns3ServerRoleId?: number;
  Ns4ServerRoleId?: number;
  RefreshTime: number;
  NumberOfRetries: number;
  ExpireTime: number;
  Ttl: number;
  ConfFilePath?: string;
  DnsPidFilePath?: string;
  DnsServiceFilePath?: string;
  ChrootEnvironment?: boolean;
  ChrootDirectoryPath?: string;
  DnsRecords?: Array<DnsRecord>;
};

export type DnsRecord = {
  Name?: string;
  Data?: string;
  Preference?: string;
  Type?: string;
};

export type DatabaseServerRole = {
  SqlInstances?: Array<SqlInstance>;
  MySqlInstances?: Array<MySqlInstance>;
};

export type SqlInstance = {
  ServerName: string;
  DatabasePath: string;
  IpAddress: string;
  Port: string;
  AdminName: string;
  AdminPassword: string;
};

export type MySqlInstance = {
  ServerName: string;
  InstallPath: string;
  IpAddress: string;
  Port: string;
  AdminName: string;
  AdminPassword: string;
};

export type MailServerRole = {
  SelectedMailServerType?: string;
  Port?: string;
  ServerIp: string;
  MailAccessUrl?: string;
  MailAdminUrl?: string;
  MerakIpBinding?: string;
  Enabled?: string;
  Name?: string;
  MDaemonPort?: string;
  DsnName?: string;
  Database?: string;
  AdminUser?: string;
  AdminPassword?: string;
  VirtualDirPath?: string;
  InstallPath?: string;
  RootAddress?: string;
  ListAdministrator?: string;
  ConfFilePath?: string;
  MailPidFile?: string;
  MailServiceFile?: string;
  SmtpAuthentication?: string;
  VpopHomeDirectory?: string;
  QmailHomeDirectory?: string;
  DovecotConfFile?: string;
  DovecotServiceFile?: string;
  ExternalDllPath?: string;
  SystemDsn?: string;
  DsnUsername?: string;
  DsnPassword?: string;
};

export type SharePointServerRole = {
  SelectedSharePointServerType?: string;
  HostName: string;
  ServerIp?: string;
  AdminUserName: string;
  AdminUserPassword: string;
  DbMaxsize?: string;
  DbWarningsize?: string;
  DefaultWebApp?: string;
  DomainController?: string;
  RootOu: string;
  ADAdmin: string;
  ADAdminPassword: string;
  WebApplicationName: string;
};

export type SkypeServerRole = {
  SelectedSkypeServerType?: string;
  ServerIp?: string;
  Version?: string;
  DomainController: string;
  HostHeader?: string;
  RootOu: string;
  SimpleUrlType?: string;
  SimpleUrlHostHeader?: string;
  SimpleUrlDefaultDomain?: string;
  HostName?: string;
  AdministratorLogin?: string;
  AdministratorPassword?: string;
  ADAdmin?: string;
  ADAdminPassword?: string;
  ServerPool?: string;
  ApplicationService?: string;
};

export type CrmServerRole = {
  SelectedCrmServerType?: string;
  DefaultAuthentication?: boolean;
  UserName: string;
  UserPassword: string;
  DomainName: string;
  Serverport: string;
  BindingType?: string;
  InternetFacingDomain: string;
  SqlReportServerUrl: string;
  DomainController: string;
  RootOu: string;
};

export type VirtualizationServerRole = {
  SelectedVirtualizationServerType?: string;
  ServerName?: string;
  ServerApiUrl?: string;
  AdministratorLogin: string;
  AdministratorPassword: string;
  ConfirmPassword?: string;
  VirtualMachineRootPath?: string;
  ExternalNetworkName: string;
  PreferredDns: string;
  AlternateDns?: string;
  InternalNetworkName?: string;
  BandwidthManagement?: boolean;
  BandwidthTools?: string;
  BandwidthParserPath?: string;
  BandwidthLogFolder?: string;
  BandwidthReportFolder?: string;
  Version?: number;
  DataStoreName?: string;
  ProviderEnabled?: boolean;
};

export type ExchangeServerRole = {
  SelectedExchangeServerType?: string;
  SelectedBlackBerryServer?: string;
  ActAsBackupServerOnly?: boolean;
  SrvRecordEnabled?: boolean;
  SrvHostName?: string;
  MailMxIpAddress?: string;
  ClientAccessServer?: string;
  OwaAccessUrl?: string;
  PublicFolderServer?: string;
  DomainController?: string;
  RootOu?: string;
  HostName?: string;
  AdministratorLogin?: string;
  AdministratorPassword?: string;
  DatabaseSelectionMode?: string;
  ActiveDirectoryMode?: string;
  DomainAdministrator?: string;
  DomainPassword?: string;
};

export type BlackBerryServerRole = {
  SelectedBlackBerryServerType?: string;
  SelectedExchangeServers?: string;
  AdminClientServerName?: string;
  AdminClientPath: string;
  AdminClientPassword: string;
  ConfirmPassword?: string;
  AdminServiceServerName?: string;
  BlackBerryEnterpriseServerName: string;
  UserName: string;
  UserPassword: string;
  ConfirmUserPassword?: string;
  AccountType?: string;
};

export type IaasServerRole = {
  IaasConfig?: IaasConfigsDto;
  SelectedVirtualizationServerType?: string;
  ServerId?: number;
  RoleId?: number;
};

export type IaasConfigsDto = {
  StepName?: string;
  Data?: Array<IaasKeyValuePair>;
};

export type IaasKeyValuePair = {
  SystemName?: string;
  Value?: string;
};

export type Office365ServerRole = {
  SelectedOffice365ServerType: string;
  CSPUserName: string;
  CSPUserPassword: string;
  ApplicationSecret: string;
  PartnerServiceApiRoot: string;
  ApplicationDomain: string;
  Regions?: Array<string>;
  ApplicationId: string;
  Authority: string;
  UserApplicationId: string;
  DomainSuffix: string;
};

export type ExchangeMailDomainsDto = {
  ExchangeMailDomains?: Array<ExchangeMailDomainDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeMailDomainDto = {
  MailDomainId?: number;
  MailDomain: string;
  MailDomainType?: string;
  MailServerIp?: string;
  OrganizationId: number;
  OrganizationName?: string;
  ServerRoleId?: number;
  Provider?: string;
  OwnerId?: number;
  IsDisabled?: boolean;
  DnsTxtRecord?: string;
  IsVerified?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeMailDomainDto_Request = {
  MailDomain: string;
  MailDomainType?: 'authoritative' | 'internalRelay' | 'externalRelay';
  OrganizationId: number;
  ServerRoleId?: number;
  Provider?: string;
  /**
   * Give owner id in case of creating mail domain for any descendent user.
   */
  OwnerId?: number;
};

export type MailDomainType =
  | 'authoritative'
  | 'internalRelay'
  | 'externalRelay';

export const MailDomainType = {
  AUTHORITATIVE: 'authoritative',
  INTERNAL_RELAY: 'internalRelay',
  EXTERNAL_RELAY: 'externalRelay',
} as const;

export type ExchangeMailDomainDto_List = {
  MailDomainId?: number;
  MailDomain: string;
  MailDomainType?: string;
  MailServerIp?: string;
  OrganizationId: number;
  OrganizationName?: string;
  ServerRoleId?: number;
  Provider?: string;
  OwnerId?: number;
  IsDisabled?: boolean;
  DnsTxtRecord?: string;
  IsVerified?: boolean;
};

export type UpdateMailDomainDto = {
  MailDomainId: number;
  MailDomainType: string;
  IsDisabled?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type UpdateMailDomainDto_Request = {
  MailDomainType: string;
  IsDisabled?: boolean;
};

export type ExchangeDistributionListsDto = {
  DistributionList?: Array<ExchangeDistributionListDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeDistributionListDto = {
  ExchangeDistributionListId?: number;
  OrganizationId: number;
  OrganizationName?: string;
  OwnerId?: number;
  DisplayName: string;
  CResourceId?: number;
  EmailAddress: string;
  IsDistribution?: boolean;
  IsAllSenderAuthenticated?: boolean;
  ServerRoleId?: number;
  InComingMessageSizeLimit?: number;
  ListAdmin?: string;
  ListType?: string;
  SubOU?: string;
  OrganizationMSOLId?: string;
  ExchangeRecipients?: Array<ExchangeRecipientDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeDistributionListDto_List = {
  ExchangeDistributionListId?: number;
  OrganizationId: number;
  OrganizationName?: string;
  OwnerId?: number;
  DisplayName: string;
  CResourceId?: number;
  EmailAddress: string;
  IsDistribution?: boolean;
  IsAllSenderAuthenticated?: boolean;
  ServerRoleId?: number;
  InComingMessageSizeLimit?: number;
  ListAdmin?: string;
  ListType?: string;
  SubOU?: string;
  OrganizationMSOLId?: string;
  ExchangeRecipients?: Array<ExchangeRecipientDto>;
};

export type ExchangeDistributionListDto_Request = {
  OrganizationId: number;
  DisplayName: string;
  CResourceId?: number;
  EmailAddress: string;
  /**
   * Set it true to create 'distribution' type of list otherwise it will create 'security' type of list.
   */
  IsDistribution?: boolean;
  IsAllSenderAuthenticated?: boolean;
  ServerRoleId?: number;
  InComingMessageSizeLimit?: number;
  ListAdmin?: string;
  ExchangeRecipients?: Array<ExchangeRecipientDto_exgRequest>;
};

export type ExchangeRecipientDto_exgRequest = {
  EmailAddress: string;
};

export type UpdateExchangeDLAdminDto = {
  ExchangeDistributionListId?: number;
  ListAdmin: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type UpdateExchangeDLAdminDto_Request = {
  ListAdmin: string;
};

export type ExchangeDistributionListMembersDto = {
  ExchangeDistributionListId?: number;
  ExchangeRecipients?: Array<ExchangeRecipientDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeDistributionListMembersDto_Request = {
  ExchangeRecipients?: Array<ExchangeRecipientDto>;
};

export type RecipientEmailAddressesDto = {
  EmailAddresses?: Array<RecipientEmailAddressDto_List>;
  RecipientId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type RecipientEmailAddressDto = {
  EmailAddress?: string;
  IsPrimary?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type RecipientEmailAddressDto_List = {
  EmailAddress?: string;
  IsPrimary?: boolean;
};

export type SetRecipientPrimaryEmailAddressDto = {
  RecipientId?: number;
  EmailAddress?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SetRecipientPrimaryEmailAddressDto_Request = {
  EmailAddress?: string;
};

export type AddRecipientEmailAddressDto = {
  RecipientId?: number;
  EmailAddress?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type AddRecipientEmailAddressDto_Request = {
  EmailAddress?: string;
};

export type ExchangeDistributionListAdvancePropertiesDto = {
  ExchangeDistributionListId?: number;
  DisplayName?: string;
  CResourceId?: number;
  OrganizationId?: number;
  MailboxServerType?: string;
  InComingMessageSizeLimit?: number;
  IsAllSenderAuthenticated?: boolean;
  IsSendOutToOriginator?: boolean;
  IsHideFromList?: boolean;
  ReportToManagerEnabled?: boolean;
  ReportToOriginatorEnabled?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeDistributionListAdvancePropertiesDto_Request = {
  DisplayName?: string;
  CResourceId?: number;
  OrganizationId?: number;
  MailboxServerType?: string;
  InComingMessageSizeLimit?: number;
  IsAllSenderAuthenticated?: boolean;
  IsSendOutToOriginator?: boolean;
  IsHideFromList?: boolean;
  ReportToManagerEnabled?: boolean;
  ReportToOriginatorEnabled?: boolean;
};

export type ExchangeMailContactsDto = {
  ContactsList?: Array<ExchangeMailContactDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeMailContactDto_List = {
  ExchangeMailContactId?: number;
  OrganizationId: number;
  OrganizationName?: string;
  OwnerId?: number;
  FirstName: string;
  LastName: string;
  DisplayName?: string;
  PrimaryEmailAddress?: string;
  DistinguishedName?: string;
  ContactName: string;
  ExternalEmailAddress: string;
  InternalEmailAddress?: string;
  ServerRoleId?: number;
  HiddenFromAddressLists?: boolean;
  IsDisabled?: boolean;
  MaximumRecipients?: number;
  MaxReceiveSize?: number;
  GeneralProfile?: UserGeneralProfileDto;
  SubOU?: string;
  OrganizationMSOLId?: string;
};

export type ExchangeMailContactDto_Request = {
  OrganizationId: number;
  FirstName: string;
  LastName: string;
  ContactName: string;
  ExternalEmailAddress: string;
  InternalEmailAddress?: string;
  ServerRoleId?: number;
  HiddenFromAddressLists?: boolean;
  MaximumRecipients?: number;
  MaxReceiveSize?: number;
  GeneralProfile?: UserGeneralProfileDto;
};

export type ExchangeMailContactDto = {
  ExchangeMailContactId?: number;
  OrganizationId: number;
  OrganizationName?: string;
  OwnerId?: number;
  FirstName: string;
  LastName: string;
  DisplayName?: string;
  PrimaryEmailAddress?: string;
  DistinguishedName?: string;
  ContactName: string;
  ExternalEmailAddress: string;
  InternalEmailAddress?: string;
  ServerRoleId?: number;
  HiddenFromAddressLists?: boolean;
  IsDisabled?: boolean;
  MaximumRecipients?: number;
  MaxReceiveSize?: number;
  GeneralProfile?: UserGeneralProfileDto;
  SubOU?: string;
  OrganizationMSOLId?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ManagerDto_Resquest = {
  Id?: number;
  Email?: string;
  ManagerType?: string;
};

export type UserGeneralProfileDto_Request = {
  UserDn?: string;
  ObjectType?: string;
  FirstName?: string;
  LastName?: string;
  DisplayName?: string;
  Initials?: string;
  OfficeLocation?: string;
  StreetAddress?: string;
  ZipCode?: string;
  City?: string;
  State?: string;
  CountryId?: number;
  CountryAbbreviation?: string;
  JobTitle?: string;
  Company?: string;
  Department?: string;
  BusinessPhone?: string;
  HomePhone?: string;
  MobilePhone?: string;
  Fax?: string;
  WebPage?: string;
  Notes?: string;
  Pager?: string;
  UserManager?: ManagerDto_Resquest;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type UserGeneralProfileDto = {
  FirstName?: string;
  LastName?: string;
  DisplayName?: string;
  Initials?: string;
  OfficeLocation?: string;
  StreetAddress?: string;
  ZipCode?: string;
  City?: string;
  State: string;
  CountryId?: number;
  JobTitle?: string;
  Company?: string;
  Department?: string;
  BusinessPhone?: string;
  HomePhone?: string;
  MobilePhone?: string;
  Fax?: string;
  WebPage?: string;
  Notes?: string;
};

export type ExchangeMailContactGeneralPropertiesDto = {
  ExchangeMailContactId?: number;
  GeneralProfile?: UserGeneralProfileDto;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeMailContactGeneralPropertiesDto_Request = {
  ExchangeMailContactId?: number;
  GeneralProfile?: UserGeneralProfileDto;
};

export type ExchangeMailContactAdvancedPropertiesDto = {
  ExchangeMailContactId?: number;
  DisplayName?: string;
  ExternalEmailAddress?: string;
  HiddenFromAddressLists?: boolean;
  MaximumRecipients?: number;
  MaxReceiveSize?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeMailContactAdvancedPropertiesDto_Request = {
  DisplayName?: string;
  ExternalEmailAddress?: string;
  HiddenFromAddressLists?: boolean;
  MaximumRecipients?: number;
  MaxReceiveSize?: number;
};

export type ExgMailboxDatabasesDto = {
  MailboxDatabases?: Array<ExgMailboxDatabaseDto>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExgMailboxDatabaseDto = {
  UserId?: number;
  MailboxDatabaseId?: number;
  UserName?: string;
  ServerIp?: string;
  ServerName?: string;
  DatabasePath?: string;
  LogFolderPath?: string;
  Mounted?: boolean;
  MountAtStartup?: boolean;
  MailboxDatabaseName?: string;
  IsForMailBoxDB?: boolean;
  IsForArchiveMailboxDB?: boolean;
  ServerRoleId?: number;
};

export type AssignExgMailboxDatabasesDto = {
  MailboxDatabases?: Array<AssignExchangeDatabaseDto>;
  UserId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type AssignExgMailboxDatabasesDto_Request = {
  MailboxDatabases?: Array<AssignExchangeDatabaseDto>;
};

export type AssignExchangeDatabaseDto = {
  MailboxDatabaseName?: string;
  IsForMailBoxDB?: boolean;
  IsForArchiveMailboxDB?: boolean;
  ServerRoleId?: number;
};

export type ExgUpdateMailboxDatabaseDto = {
  MailboxDatabaseName: string;
  Mount?: boolean;
};

export type ExgAddMailboxDatabaseDto = {
  MailboxDatabaseName: string;
  DatabasePath: string;
  LogFolderPath: string;
  MailboxSever: string;
  Mount?: boolean;
};

export type ExchangePfMailboxesDto = {
  PfMailboxes?: Array<ExchangePfMailboxDto>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangePfMailboxDto = {
  PfMailboxName: string;
  MailboxDatabase: string;
  ExcludeFromServingHierarchy?: boolean;
};

export type UpdateExchangePfMailboxDto = {
  PfMailboxName: string;
  ExcludeFromServingHierarchy?: boolean;
};

export type AssignExchangePfMailboxDto = {
  UserId: number;
  PfMailboxes: Array<string>;
};

export type ActiveSyncPoliciesDto = {
  ActiveSyncPolicies?: Array<ActiveSyncPolicyDto_List>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ActiveSyncPolicyDto = {
  Name: string;
  DevicePolicyRefreshInterval?: string;
  AllowNonProvisionableDevices?: boolean;
  DevicePasswordEnabled?: boolean;
  AlphanumericDevicePasswordRequired?: boolean;
  MaxInactivityTimeDeviceLock?: string;
  MinDevicePasswordLength?: string;
  PasswordRecoveryEnabled?: boolean;
  RequireDeviceEncryption?: boolean;
  AttachmentsEnabled?: boolean;
  AllowSimpleDevicePassword?: boolean;
  DevicePasswordExpiration?: string;
  DevicePasswordHistory?: string;
  IsDefault?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ActiveSyncPolicyDto_Request = {
  Name: string;
  DevicePolicyRefreshInterval?: string;
  AllowNonProvisionableDevices?: boolean;
  DevicePasswordEnabled?: boolean;
  AlphanumericDevicePasswordRequired?: boolean;
  MaxInactivityTimeDeviceLock?: string;
  MinDevicePasswordLength?: string;
  PasswordRecoveryEnabled?: boolean;
  RequireDeviceEncryption?: boolean;
  AttachmentsEnabled?: boolean;
  AllowSimpleDevicePassword?: boolean;
  DevicePasswordExpiration?: string;
  DevicePasswordHistory?: string;
  IsDefault?: boolean;
};

export type ActiveSyncPolicyDto_List = {
  Name: string;
  DevicePolicyRefreshInterval?: string;
  AllowNonProvisionableDevices?: boolean;
  DevicePasswordEnabled?: boolean;
  AlphanumericDevicePasswordRequired?: boolean;
  MaxInactivityTimeDeviceLock?: string;
  MinDevicePasswordLength?: string;
  PasswordRecoveryEnabled?: boolean;
  RequireDeviceEncryption?: boolean;
  AttachmentsEnabled?: boolean;
  AllowSimpleDevicePassword?: boolean;
  DevicePasswordExpiration?: string;
  DevicePasswordHistory?: string;
  IsDefault?: boolean;
};

export type DefaultASyncPolicyDto = {
  Name: string;
};

export type OutlookAnywhrListDto = {
  OutlookAnywhrList?: Array<OutlookAnywhrDto_List>;
  ServerCount?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type OutlookAnywhrDto = {
  HostName: string;
  CasServer: string;
  AuthenticationMode: string;
  SslOffloading?: boolean;
  IpAddress?: string;
  RPCPath?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type OutlookAnywhrDto_List = {
  HostName: string;
  CasServer: string;
  AuthenticationMode: string;
  SslOffloading?: boolean;
  IpAddress?: string;
  RPCPath?: string;
};

export type OutlookAnywhrDto_Request = {
  HostName: string;
  CasServer: string;
  AuthenticationMode: string;
  SslOffloading?: boolean;
  IpAddress?: string;
  RPCPath?: string;
};

export type OrganizationSyncDto = {
  OrganizationId?: number;
  MailboxDatabaseId?: number;
  MailboxDatabaseName?: string;
  SystemName?: string;
  ServerRoleId?: number;
  IsResourceSync?: boolean;
  IsADSync?: boolean;
  IsDatabaseSync?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type OrganizationSyncDto_List = {
  OrganizationId?: number;
  MailboxDatabaseId?: number;
  MailboxDatabaseName?: string;
  SystemName?: string;
  ServerRoleId?: number;
  IsResourceSync?: boolean;
  IsADSync?: boolean;
  IsDatabaseSync?: boolean;
};

export type ExgUpdateOrganizationADSyncDto = {
  IsADSync?: boolean;
  IsResourceSync?: boolean;
  OrganizationId?: number;
  ServerRoleId?: number;
  MailboxDatabaseName?: string;
};

export type ExgUpdateOrganizationADSyncDto_Request = {
  IsADSync?: boolean;
  IsResourceSync?: boolean;
  ServerRoleId?: number;
  MailboxDatabaseName?: string;
};

export type OrganizationsSyncDto = {
  Organizations?: Array<OrganizationSyncDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangePublicFoldersDto = {
  PFList?: Array<ExchangePublicFolderDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangePublicFolderDto = {
  PublicFolderId?: number;
  PFName: string;
  PFMailbox: string;
  EmailID?: string;
  OUPath?: string;
  TargetOU?: string;
  AccessRight?: string;
  NewAccessRight?: string;
  OldAccessRight?: string;
  DoForAllUsers?: boolean;
  IsMailEnabled?: boolean;
  PublicFolderType?: string;
  Identity?: string;
  Quota?: string;
  OrganizationName?: string;
  ServerRoleId?: number;
  OrganizationId: number;
  CResourceId?: number;
  MailDomainName?: string;
  OwnerId?: number;
  Flag?: string;
  OrganizationMSOLId?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangePublicFolderDto_List = {
  PublicFolderId?: number;
  PFName: string;
  PFMailbox: string;
  EmailID?: string;
  OUPath?: string;
  TargetOU?: string;
  AccessRight?: string;
  NewAccessRight?: string;
  OldAccessRight?: string;
  DoForAllUsers?: boolean;
  IsMailEnabled?: boolean;
  PublicFolderType?: string;
  Identity?: string;
  Quota?: string;
  OrganizationName?: string;
  ServerRoleId?: number;
  OrganizationId: number;
  CResourceId?: number;
  MailDomainName?: string;
  OwnerId?: number;
  Flag?: string;
  OrganizationMSOLId?: string;
};

export type ExchangePublicFolderDto_Request = {
  PFName: string;
  PFMailbox: string;
  /**
   * Email Id value depends on 'IsMailEnabled'. If 'IsMailEnabled' is set to true emailId should be provided.
   */
  EmailID?: string;
  IsMailEnabled?: boolean;
  /**
   * You can get public folder type by calling 'GET /system-entities/exchange/public-folder-types'.
   */
  PublicFolderType?: 'mail' | 'contact' | 'calendar' | 'task';
  Quota?: string;
  OrganizationId: number;
  CResourceId?: number;
};

/**
 * You can get public folder type by calling 'GET /system-entities/exchange/public-folder-types'.
 */
export type PublicFolderType = 'mail' | 'contact' | 'calendar' | 'task';

/**
 * You can get public folder type by calling 'GET /system-entities/exchange/public-folder-types'.
 */
export const PublicFolderType = {
  MAIL: 'mail',
  CONTACT: 'contact',
  CALENDAR: 'calendar',
  TASK: 'task',
} as const;

export type ExchangePublicFolderGeneralPropertiesDto = {
  PublicFolderId?: number;
  ProhibitSend?: number;
  WarnAt?: number;
  MaxItemSize?: number;
  RetentionDays?: number;
  AgeLimitsDays?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangePublicFolderGeneralPropertiesDto_Request = {
  ProhibitSend?: number;
  WarnAt?: number;
  MaxItemSize?: number;
  RetentionDays?: number;
  AgeLimitsDays?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangePublicFolderAdvancedPropertiesDto = {
  PublicFolderId?: number;
  MaxIncomingMsgSize: number;
  MaxOutgoingMsgSize: number;
  DisplayName: string;
  HideFromAddressBook?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangePublicFolderAdvancedPropertiesDto_Request = {
  PublicFolderId?: number;
  MaxIncomingMsgSize: number;
  MaxOutgoingMsgSize: number;
  DisplayName: string;
  HideFromAddressBook?: boolean;
};

export type ExchangePFUsersListDto = {
  TotalCount?: string;
  PFUsersList?: Array<ExchangePFUserDto_List>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangePFUserDto = {
  PublicFolderId?: number;
  UserName?: string;
  DisplayName?: string;
  Permission?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangePFUserDto_List = {
  PublicFolderId?: number;
  UserName?: string;
  DisplayName?: string;
  Permission?: string;
};

export type UpdatePFClientPermission = {
  PublicFolderId?: number;
  NewAccessRight: string;
  OldAccessRight: string;
  ClientEmailAddress?: string;
  DoForAllUsers?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type UpdatePFClientPermission_Request = {
  NewAccessRight: string;
  OldAccessRight: string;
  ClientEmailAddress?: string;
  DoForAllUsers?: boolean;
};

export type ExchangePublicFolderForwardingDto = {
  PublicFolderId?: number;
  ForwardingUserOrgName?: string;
  UserIdentity?: string;
  ForwardType?: string;
  MailboxForwardAddress: string;
  DeliverToMailboxAndForward?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangePublicFolderForwardingDto_Request = {
  PublicFolderId?: number;
  ForwardingUserOrgName?: string;
  UserIdentity?: string;
  ForwardType?: string;
  MailboxForwardAddress: string;
  DeliverToMailboxAndForward?: boolean;
};

export type ExchangePublicFolderEnableDisableDto = {
  PublicFolderId?: number;
  IsMailEnabled?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangePublicFolderEnableDisableDto_Request = {
  IsMailEnabled?: boolean;
};

export type RolesDto = {
  Roles?: Array<RoleDto_List>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type RoleDto = {
  RoleId?: number;
  SystemName?: string;
  DisplayName?: string;
  ServerType?: string;
  Platform?: string;
  RemoteOnly?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type RoleDto_List = {
  RoleId?: number;
  SystemName?: string;
  DisplayName?: string;
  ServerType?: string;
  Platform?: string;
  RemoteOnly?: boolean;
};

export type ServerRolesDto = {
  ServerId?: number;
  ServerRoles?: Array<ServerRoleDto_List>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ServersDto = {
  Servers?: Array<ServerDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ServerDto = {
  ServerId?: number;
  SystemName: string;
  DisplayName: string;
  Platform?: string;
  ServerIp?: string;
  Providers?: string;
  Status?: string;
  BuildNumber?: string;
  UserName?: string;
  UserPassword?: string;
  IsPrimary?: boolean;
  ServerRoleId?: number;
  RoleId?: number;
  ReleaseDate?: Date;
  Guid?: string;
  LicenseStatus?: string;
  UsedQuantity?: number;
  OnPremises?: boolean;
  RbxBackupFrequency?: string;
  RbxLastBackupTime?: Date;
  RbxLastBackupStatus?: string;
  RbxRestoreStatus?: string;
  RbxOperationPercentage?: number;
  RbxRestoreTime?: Date;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ServerDto_List = {
  ServerId?: number;
  SystemName: string;
  DisplayName: string;
  Platform?: string;
  ServerIp?: string;
  Providers?: string;
  Status?: string;
  BuildNumber?: string;
  UserName?: string;
  UserPassword?: string;
  IsPrimary?: boolean;
  ServerRoleId?: number;
  RoleId?: number;
  ReleaseDate?: Date;
  Guid?: string;
  LicenseStatus?: string;
  UsedQuantity?: number;
  OnPremises?: boolean;
  RbxBackupFrequency?: string;
  RbxLastBackupTime?: Date;
  RbxLastBackupStatus?: string;
  RbxRestoreStatus?: string;
  RbxOperationPercentage?: number;
  RbxRestoreTime?: Date;
};

export type PlansDto = {
  Plans?: Array<PlanDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type PlanDto_List = {
  PlanId?: number;
  DisplayName: string;
  OwnerId?: number;
  Description?: string;
  CancelationPolicy?: string;
  IsAvailable?: boolean;
  VisibleToUsers?: boolean;
  SystemName?: string;
  DateAdded?: Date;
  Resources?: Array<PlanResourceDto>;
  ResourceComponents?: Array<PlanResourceComponentDto>;
  SoldInstances?: number;
  VisibleToUserIds?: Array<number>;
};

export type PlanDto_Request = {
  /**
   * Name of the new plan.
   */
  DisplayName: string;
  OwnerId?: number;
  Description?: string;
  CancelationPolicy?: string;
  IsAvailable?: boolean;
  VisibleToUsers?: boolean;
  /**
   * You can get plan resources by calling 'GET /addons' and composite resources by calling 'GET /composite-resources'.
   */
  Resources?: Array<PlanResourceDto>;
  /**
   * You can get plan resource component by calling 'GET /virtualization/base-os-types'.
   */
  ResourceComponents?: Array<PlanResourceComponentDto>;
  SoldInstances?: number;
  VisibleToUserIds?: Array<number>;
};

export type PlanDto = {
  PlanId?: number;
  DisplayName: string;
  OwnerId?: number;
  Description?: string;
  CancelationPolicy?: string;
  IsAvailable?: boolean;
  VisibleToUsers?: boolean;
  SystemName?: string;
  DateAdded?: Date;
  Resources?: Array<PlanResourceDto>;
  ResourceComponents?: Array<PlanResourceComponentDto>;
  SoldInstances?: number;
  VisibleToUserIds?: Array<number>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type PlanDto_Copy = {
  PlanId?: number;
  DisplayName: string;
  OwnerId?: number;
  Description?: string;
  CancelationPolicy?: string;
  IsAvailable?: boolean;
  VisibleToUsers?: boolean;
  SystemName?: string;
  DateAdded?: Date;
  Resources?: Array<PlanResourceDto>;
  ResourceComponents?: Array<PlanResourceComponentDto>;
  BillingDetails?: ItemBillingDetailsDto_List;
  SoldInstances?: number;
  VisibleToUserIds?: Array<number>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type PlanResourceDto = {
  ResourceId?: number;
  DisplayName?: string;
  ProviderName?: string;
  Quantity?: number;
  IsComposite?: boolean;
};

export type PlanResourceComponentDto = {
  ResourceId?: number;
  ComponentName?: string;
  Value?: string;
};

export type ExgMailboxesDto = {
  Mailboxes?: Array<ExgMailboxDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExgMailboxDto_List = {
  MailboxId?: number;
  OwnerId?: number;
  MailDomainId?: number;
  MailboxType: string;
  SystemName?: string;
  DisplayName: string;
  IsNewUser?: string;
  Password?: string;
  MaildomainName: string;
  CResourceId?: number;
  ActiveSync?: boolean;
  ActiveSyncPolicy?: string;
  IMAP?: boolean;
  POP?: boolean;
  MAPI?: boolean;
  OWA?: boolean;
  MailboxSize?: number;
  OrganizationId?: number;
  OrganizationName?: string;
  ServerRoleId?: number;
  HideFromAddressBook?: boolean;
  MaxIncomingMsgSize?: number;
  MaxOutgoingMsgSize?: number;
  ProhibitSend?: number;
  WarnAt?: number;
  IsDisabled?: boolean;
  GeneralProfile?: UserGeneralProfileDto;
  Flag?: string;
  OfficeLocation?: string;
  SAMAccount?: string;
  PrimarySMTPAddress?: string;
  Guid?: string;
  MailboxLitigationHoldEnabled?: boolean;
  ArchiveMailboxId?: number;
  MailboxDatabase?: string;
  IsResourceMailbox?: boolean;
  SubOU?: string;
  OrganizationMSOLId?: string;
  LinkedMasterAccount?: string;
  IsNewLinkedMasterAccount?: boolean;
  ActiveDirectoryTrustId?: number;
};

export type ExgAddMailboxDto_Request = {
  /**
   * Set it true to create new user.
   */
  CreateNewUser?: boolean;
  MailboxType: 'usermailbox' | 'sharedmailbox' | 'linkedmailbox';
  DisplayName: string;
  /**
   * Password required when 'CreateNewUser' is set true.
   */
  Password?: string;
  MaildomainName: string;
  CResourceId?: number;
  ActiveSync?: boolean;
  ActiveSyncPolicy?: string;
  IMAP?: boolean;
  POP?: boolean;
  MAPI?: boolean;
  OWA?: boolean;
  MailboxSize?: number;
  OrganizationId?: number;
  ServerRoleId?: number;
  HideFromAddressBook?: boolean;
  MaxIncomingMsgSize?: number;
  MaxOutgoingMsgSize?: number;
  ProhibitSend?: number;
  WarnAt?: number;
  GeneralProfile?: UserGeneralProfileDto;
  /**
   * LinkedMasterAccount required when 'MailboxType' is set  as 'linkedmailbox'.
   */
  LinkedMasterAccount?: string;
  /**
   * IsNewLinkedMasterAccount required when 'MailboxType' is set  as 'linkedmailbox'. Set 'IsNewLinkedMasterAccount' true to create new user.
   */
  IsNewLinkedMasterAccount?: boolean;
  /**
   * ActiveDirectoryTrustId required when 'MailboxType' is set  as 'linkedmailbox'.
   */
  ActiveDirectoryTrustId?: number;
};

export type MailboxType = 'usermailbox' | 'sharedmailbox' | 'linkedmailbox';

export const MailboxType = {
  USERMAILBOX: 'usermailbox',
  SHAREDMAILBOX: 'sharedmailbox',
  LINKEDMAILBOX: 'linkedmailbox',
} as const;

export type ExgAddMailboxDto_Add = {
  CreateNewUser?: boolean;
  ExistingMailboxUserName?: string;
  OwnerId?: number;
  MailDomainId?: number;
  MailboxType: string;
  SystemName?: string;
  DisplayName: string;
  IsNewUser?: string;
  Password?: string;
  MaildomainName: string;
  CResourceId?: number;
  OrganizationId?: number;
  ServerRoleId?: number;
  Flag?: string;
  OfficeLocation?: string;
  SAMAccount?: string;
  PrimarySMTPAddress?: string;
  Guid?: string;
  MailboxLitigationHoldEnabled?: boolean;
  ArchiveMailboxId?: number;
  MailboxDatabase?: string;
  IsResourceMailbox?: boolean;
  SubOU?: string;
  OrganizationMSOLId?: string;
  LinkedMasterAccount?: string;
  IsNewLinkedMasterAccount?: boolean;
  ActiveDirectoryTrustId?: number;
};

export type ExgMailboxDto = {
  MailboxId?: number;
  OwnerId?: number;
  MailDomainId?: number;
  MailboxType: string;
  SystemName?: string;
  DisplayName: string;
  IsNewUser?: string;
  Password?: string;
  MaildomainName: string;
  CResourceId?: number;
  ActiveSync?: boolean;
  ActiveSyncPolicy?: string;
  IMAP?: boolean;
  POP?: boolean;
  MAPI?: boolean;
  OWA?: boolean;
  MailboxSize?: number;
  OrganizationId?: number;
  OrganizationName?: string;
  ServerRoleId?: number;
  HideFromAddressBook?: boolean;
  MaxIncomingMsgSize?: number;
  MaxOutgoingMsgSize?: number;
  ProhibitSend?: number;
  WarnAt?: number;
  IsDisabled?: boolean;
  GeneralProfile?: UserGeneralProfileDto;
  Flag?: string;
  OfficeLocation?: string;
  SAMAccount?: string;
  PrimarySMTPAddress?: string;
  Guid?: string;
  MailboxLitigationHoldEnabled?: boolean;
  ArchiveMailboxId?: number;
  MailboxDatabase?: string;
  IsResourceMailbox?: boolean;
  SubOU?: string;
  OrganizationMSOLId?: string;
  LinkedMasterAccount?: string;
  IsNewLinkedMasterAccount?: boolean;
  ActiveDirectoryTrustId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExgMailboxEnableDisableDto_Request = {
  IsDisabled?: boolean;
};

export type MailboxActiveSyncSettingsDto = {
  IsActivated?: boolean;
  ActiveSyncMailboxPolicy?: string;
  DisplayName?: string;
  ActivesyncEnabled?: string;
  IsDefault?: string;
  Identity?: string;
  Name?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type UpdateMailboxASyncDto_Request = {
  IsActivated?: boolean;
  ActiveSyncMailboxPolicy?: string;
};

export type ExchangeArchiveMailboxListDto = {
  ArchiveMailboxes?: Array<ExchangeArchiveMailboxDto_List>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeArchiveMailboxDto_List = {
  ArchiveDatabase: string;
  ArchiveName?: string;
  ArchiveQuota: string;
  ArchiveWarningQuota: string;
  ArchiveMailboxSize?: string;
  IsDisabledArchiveMailbox?: string;
  RoleName?: string;
  Count?: number;
  TotalCount?: number;
};

export type UpdateArchiveMailboxDto_Request = {
  ArchiveQuota?: string;
  ArchiveWarningQuota?: string;
  CResourceId?: number;
  OwnerId?: number;
  MailboxServerType?: string;
};

export type ExchangeArchiveMailboxDto = {
  ArchiveDatabase: string;
  ArchiveName?: string;
  ArchiveQuota: string;
  ArchiveWarningQuota: string;
  ArchiveMailboxSize?: string;
  IsDisabledArchiveMailbox?: string;
  RoleName?: string;
  Count?: number;
  TotalCount?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type CreateArchiveMailboxDto_Request = {
  MailboxId?: number;
  ArchiveMailboxDatabase?: string;
  ArchiveQuota?: string;
  ArchiveWarningQuota?: string;
  CResourceId?: number;
  OwnerId?: number;
  MailboxServerType?: string;
};

export type UpdateArchiveMailboxStatusDto_Request = {
  IsDisabledArchiveMailbox?: boolean;
};

export type UpdateUserGeneralPropertiesDto = {
  MailboxId?: number;
  GeneralProfile?: UserGeneralProfileDto;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type UpdateUserGeneralPropertiesDto_Request = {
  GeneralProfile?: UserGeneralProfileDto;
};

export type UserMailboxPasswordDto_Request = {
  Password: string;
};

export type UserMailboxEmailAddressesDto = {
  EmailAddresses?: Array<UserMailboxEmailAddressDto_List>;
  MailboxId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type UserMailboxEmailAddressDto_List = {
  EmailAddress?: string;
  IsPrimary?: boolean;
};

export type SetPrimaryEmailAddressDto_Request = {
  EmailAddress?: string;
};

export type AddUserMailboxEmailAddressDto_Request = {
  EmailAddress?: string;
};

export type ExchangeRecipientListDto_MailboxRequest = {
  ExchangeRecipients?: Array<ExchangeRecipientDto>;
  PublicFolderId?: number;
  IsAllSender?: boolean;
  RecipientId?: number;
};

export type UserMailboxAdvancedPropertiesDto = {
  MailboxId?: number;
  CResourceId?: number;
  MailboxSize?: number;
  ProhibitSend?: number;
  WarnAt?: number;
  MaxIncomingMsgSize?: number;
  MaxOutgoingMsgSize?: number;
  RetentionDays?: number;
  IMAP?: boolean;
  POP?: boolean;
  MAPI?: boolean;
  OWA?: boolean;
  HideFromAddressBook?: boolean;
  IsRetentionDefault?: boolean;
  IsPermanentDelete?: boolean;
  MailboxDatabase?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type UserMailboxAdvancedPropertiesDto_Request = {
  CResourceId?: number;
  MailboxSize?: number;
  ProhibitSend?: number;
  WarnAt?: number;
  MaxIncomingMsgSize?: number;
  MaxOutgoingMsgSize?: number;
  RetentionDays?: number;
  IMAP?: boolean;
  POP?: boolean;
  MAPI?: boolean;
  OWA?: boolean;
  HideFromAddressBook?: boolean;
  IsRetentionDefault?: boolean;
  IsPermanentDelete?: boolean;
  MailboxDatabase?: string;
};

export type ExchangeMailboxForwardingDto = {
  MailboxId?: number;
  ForwardingUserOrgName?: string;
  UserIdentity?: string;
  ForwardType?: string;
  /**
   * Forwarding would be enabled if MailboxForwardAddress has some valid email address is passed.
   * Forwarding would be disabled if this property is empty or null.
   */
  MailboxForwardAddress?: string;
  DeliverToMailboxAndForward?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeMailboxForwardingDto_Request = {
  ForwardingUserOrgName?: string;
  UserIdentity?: string;
  ForwardType?: string;
  /**
   * Forwarding would be enabled if MailboxForwardAddress has some valid email address is passed.
   * Forwarding would be disabled if this property is empty or null.
   */
  MailboxForwardAddress?: string;
  DeliverToMailboxAndForward?: boolean;
};

export type ExchangeMailboxStatsDto = {
  ItemCount?: string;
  TotalItemSize?: string;
  DeletedItemCount?: string;
  TotalDeletedItemSize?: string;
  LastLogonTime?: string;
  LastLogoffTime?: string;
  Database?: string;
  StorageLimitStatus?: string;
  LastLoggedOnUserAccount?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type LitigationHoldSettingsDto = {
  MailboxId?: number;
  OwnerId?: number;
  ApiUserId?: number;
  LitigationHoldEnabled?: boolean;
  RetentionUrl?: string;
  RetentionComment?: string;
  LitigationHoldDuration?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type LitigationHoldSettingsDto_Request = {
  OwnerId?: number;
  LitigationHoldEnabled?: boolean;
  RetentionUrl?: string;
  RetentionComment?: string;
  LitigationHoldDuration?: string;
};

export type ExchangeBulkUserListDto = {
  UsersNotCreated?: number;
  ExchangeBulkUsers?: Array<ExchangeBulkUserDto_List>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeBulkUserDto_List = {
  FirstName?: string;
  LastName?: string;
  Password?: string;
  UserName?: string;
  EmailAddress?: string;
  Feasibility?: string;
  StatusMessage?: string;
  PlanId?: string;
  Feasible?: boolean;
  IsCreated?: boolean;
  MailboxSize?: number;
  CResourceId?: number;
};

export type ExgBulkMailboxesDto_Request = {
  Mailboxes?: Array<ExgBulkMailboxDto_List>;
  OwnerId?: number;
  MailDomainName?: string;
  CResourceId?: number;
  Country?: number;
  IMAP?: boolean;
  POP?: boolean;
  MAPI?: boolean;
  OWA?: boolean;
  ActiveSync?: boolean;
  ActiveSyncPolicy?: string;
  HideFromAddressBook?: boolean;
  MaxIncomingMsgSize?: number;
  MaxOutgoingMsgSize?: number;
  IsDisabled?: boolean;
  IsActivated?: boolean;
  ServerRoleId?: number;
  OrganizationId?: number;
  OrganizationName?: string;
  Flag?: string;
  ProhibitSend?: number;
  WarnAt?: number;
  SAMAccount?: string;
  MailboxLitigationHoldEnabled?: boolean;
  MailboxDatabase?: string;
  OfficeLocation?: string;
  FileName?: string;
  City?: string;
  ZipCode?: string;
  State?: string;
  CountryId?: number;
};

export type ExgBulkMailboxDto_List = {
  Password?: string;
  EmailAddress?: string;
  FirstName?: string;
  LastName?: string;
  MailboxSize?: number;
  OfficeLocation?: string;
  City?: string;
  ZipCode?: string;
  State?: string;
  Country?: string;
  Feasible?: boolean;
  CResourceId?: number;
  IMAP?: boolean;
  POP?: boolean;
  MAPI?: boolean;
  OWA?: boolean;
  ActiveSync?: boolean;
  MaxIncomingMsgSize?: number;
  MaxOutgoingMsgSize?: number;
  ProhibitSend?: number;
  WarnAt?: number;
};

export type ExgBulkMailboxDto = {
  Password?: string;
  EmailAddress?: string;
  FirstName?: string;
  LastName?: string;
  MailboxSize?: number;
  OfficeLocation?: string;
  City?: string;
  ZipCode?: string;
  State?: string;
  Country?: string;
  Feasible?: boolean;
  CResourceId?: number;
  IMAP?: boolean;
  POP?: boolean;
  MAPI?: boolean;
  OWA?: boolean;
  ActiveSync?: boolean;
  MaxIncomingMsgSize?: number;
  MaxOutgoingMsgSize?: number;
  ProhibitSend?: number;
  WarnAt?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExgEditBulkMailboxDto_Request = {
  Property?: string;
  IsAllUsers?: boolean;
  ExchangeRecipients?: Array<ExchangeRecipientDto>;
  MailboxSize?: number;
  OrganizationId?: number;
  CResourceId?: number;
  IMAP?: boolean;
  POP?: boolean;
  MAPI?: boolean;
  OWA?: boolean;
  ActiveSync?: boolean;
  HideFromAddressBook?: boolean;
  MaxIncomingMsgSize?: number;
  MaxOutgoingMsgSize?: number;
  ProhibitSend?: number;
  WarnAt?: number;
  IsRetentionDefault?: boolean;
  IsPermanentDelete?: boolean;
  RetentionDays?: number;
  OwnerId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeMailboxOutOfOfficeDto = {
  MailboxId?: number;
  EnableAutoReply?: boolean;
  SetLimit?: boolean;
  SendExternalMessage?: boolean;
  AutoReplyState?: string;
  InternalMessage?: string;
  ExternalMessage?: string;
  ExternalAudience?: string;
  StartDateTime?: Date;
  EndDateTime?: Date;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeMailboxOutOfOfficeDto_Request = {
  EnableAutoReply?: boolean;
  SetLimit?: boolean;
  SendExternalMessage?: boolean;
  AutoReplyState?: string;
  InternalMessage?: string;
  ExternalMessage?: string;
  ExternalAudience?: string;
  StartDateTime?: Date;
  EndDateTime?: Date;
};

export type ExchangeResourceMailboxesDto = {
  Mailboxes?: Array<ExchangeResourceMailboxDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ExchangeResourceMailboxDto_List = {
  MailboxId?: number;
  OwnerId?: number;
  MailDomainId?: number;
  MailboxType: string;
  DisplayName: string;
  SystemName?: string;
  MailDomainName: string;
  CResourceId?: number;
  Country?: number;
  IMAP?: boolean;
  POP?: boolean;
  MAPI?: boolean;
  OWA?: boolean;
  MailboxSize?: number;
  HideFromAddressBook?: boolean;
  MaxIncomingMsgSize?: number;
  MaxOutgoingMsgSize?: number;
  IsDisabled?: boolean;
  IsActivated?: boolean;
  Password?: string;
  ActiveSync?: boolean;
  ActiveSyncPolicy?: string;
  GeneralProfile?: UserGeneralProfileDto;
  ServerRoleId?: number;
  OrganizationId?: number;
  OrganizationName?: string;
  Flag?: string;
  ProhibitSend?: number;
  WarnAt?: number;
  SAMAccount?: string;
  MailboxLitigationHoldEnabled?: boolean;
  ArchiveMailboxId?: number;
  MailboxDatabase?: string;
  OfficeLocation?: string;
  OrganizationMSOLId?: string;
};

export type ExchangeResourceMailboxDto_Request = {
  /**
   * you can get mailbox types by calling 'GET /system-entities/exchange/resource-mailbox-types'.
   */
  MailboxType: 'room' | 'equipment';
  /**
   * Give display of resource mailbox.
   */
  DisplayName: string;
  /**
   * Give maildomain name to attach with resource mailbox display name.
   */
  MailDomainName: string;
  CResourceId?: number;
  IMAP?: boolean;
  POP?: boolean;
  MAPI?: boolean;
  OWA?: boolean;
  MailboxSize?: number;
  HideFromAddressBook?: boolean;
  MaxIncomingMsgSize?: number;
  MaxOutgoingMsgSize?: number;
  GeneralProfile?: UserGeneralProfileDto;
  ServerRoleId?: number;
  OrganizationId?: number;
};

/**
 * you can get mailbox types by calling 'GET /system-entities/exchange/resource-mailbox-types'.
 */
export type MailboxType2 = 'room' | 'equipment';

/**
 * you can get mailbox types by calling 'GET /system-entities/exchange/resource-mailbox-types'.
 */
export const MailboxType2 = {
  ROOM: 'room',
  EQUIPMENT: 'equipment',
} as const;

export type ExchangeResourceMailboxDto = {
  MailboxId?: number;
  OwnerId?: number;
  MailDomainId?: number;
  MailboxType: string;
  DisplayName: string;
  SystemName?: string;
  MailDomainName: string;
  CResourceId?: number;
  Country?: number;
  IMAP?: boolean;
  POP?: boolean;
  MAPI?: boolean;
  OWA?: boolean;
  MailboxSize?: number;
  HideFromAddressBook?: boolean;
  MaxIncomingMsgSize?: number;
  MaxOutgoingMsgSize?: number;
  IsDisabled?: boolean;
  IsActivated?: boolean;
  Password?: string;
  ActiveSync?: boolean;
  ActiveSyncPolicy?: string;
  GeneralProfile?: UserGeneralProfileDto;
  ServerRoleId?: number;
  OrganizationId?: number;
  OrganizationName?: string;
  Flag?: string;
  ProhibitSend?: number;
  WarnAt?: number;
  SAMAccount?: string;
  MailboxLitigationHoldEnabled?: boolean;
  ArchiveMailboxId?: number;
  MailboxDatabase?: string;
  OfficeLocation?: string;
  OrganizationMSOLId?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ResourceDelegateListDto = {
  Username?: string;
  ExchangeRecipients?: Array<ResourceDelegateDto_List>;
  RecordCount?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ResourceDelegateDto_List = {
  EmailAddress?: string;
  DisplayName?: string;
};

export type PolicyUserListDto = {
  Username?: string;
  ExchangeRecipients?: Array<PolicyUserDto_List>;
  RecordCount?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type PolicyUserDto_List = {
  EmailAddress?: string;
  DisplayName?: string;
};

export type ResourceMailboxPropertiesDto = {
  bIsAllRequestOutOfPolicyUpdated?: boolean;
  bIsAllBookInPolicyUpdated?: boolean;
  bIsAllRequestInPolicyUpdated?: boolean;
  bIsAllowConflictsUpdated?: boolean;
  bIsAutomateProcessingUpdated?: boolean;
  bIsAllowRecurringMeetingsUpdated?: boolean;
  bIsScheduleOnlyDuringWorkHoursUpdated?: boolean;
  bIsEnforceSchedulingHorizonUpdated?: boolean;
  bIsBookingWindowInDaysUpdated?: boolean;
  bIsMaximumDurationInMinutesUpdated?: boolean;
  bIsMaximumConflictInstancesUpdated?: boolean;
  bIsConflictPercentageAllowedUpdated?: boolean;
  bIsForwardRequestsToDelegatesUpdated?: boolean;
  bIsDeleteAttachmentsUpdated?: boolean;
  bIsDeleteCommentsUpdated?: boolean;
  bIsDeleteSubjectUpdated?: boolean;
  bIsDeleteNonCalendarItemsUpdated?: boolean;
  bIsAddOrganizerToSubjectUpdated?: boolean;
  bIsRemovePrivatePropertyUpdated?: boolean;
  bIsOrganizerInfoUpdated?: boolean;
  bIsAddAdditionalResponseUpdated?: boolean;
  bIsTentativePendingApprovalUpdated?: boolean;
  MailboxId?: number;
  AllowConflicts?: boolean;
  AutomateProcessing?: string;
  AllowRecurringMeetings?: boolean;
  ScheduleOnlyDuringWorkHours?: boolean;
  EnforceSchedulingHorizon?: boolean;
  BookingWindowInDays?: number;
  MaximumDurationInMinutes?: number;
  MaximumConflictInstances?: number;
  ConflictPercentageAllowed?: number;
  ForwardRequestsToDelegates?: boolean;
  DeleteAttachments?: boolean;
  DeleteComments?: boolean;
  DeleteSubject?: boolean;
  DeleteNonCalendarItems?: boolean;
  AddOrganizerToSubject?: boolean;
  RemovePrivateProperty?: boolean;
  OrganizerInfo?: boolean;
  AddAdditionalResponse?: boolean;
  AdditionalResponse?: string;
  TentativePendingApproval?: boolean;
  AllRequestOutOfPolicy?: boolean;
  AllBookInPolicy?: boolean;
  AllRequestInPolicy?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ResourceMailboxPropertiesDto_Request = {
  bIsAllRequestOutOfPolicyUpdated?: boolean;
  bIsAllBookInPolicyUpdated?: boolean;
  bIsAllRequestInPolicyUpdated?: boolean;
  bIsAllowConflictsUpdated?: boolean;
  bIsAutomateProcessingUpdated?: boolean;
  bIsAllowRecurringMeetingsUpdated?: boolean;
  bIsScheduleOnlyDuringWorkHoursUpdated?: boolean;
  bIsEnforceSchedulingHorizonUpdated?: boolean;
  bIsBookingWindowInDaysUpdated?: boolean;
  bIsMaximumDurationInMinutesUpdated?: boolean;
  bIsMaximumConflictInstancesUpdated?: boolean;
  bIsConflictPercentageAllowedUpdated?: boolean;
  bIsForwardRequestsToDelegatesUpdated?: boolean;
  bIsDeleteAttachmentsUpdated?: boolean;
  bIsDeleteCommentsUpdated?: boolean;
  bIsDeleteSubjectUpdated?: boolean;
  bIsDeleteNonCalendarItemsUpdated?: boolean;
  bIsAddOrganizerToSubjectUpdated?: boolean;
  bIsRemovePrivatePropertyUpdated?: boolean;
  bIsOrganizerInfoUpdated?: boolean;
  bIsAddAdditionalResponseUpdated?: boolean;
  bIsTentativePendingApprovalUpdated?: boolean;
  MailboxId?: number;
  AllowConflicts?: boolean;
  AutomateProcessing?: string;
  AllowRecurringMeetings?: boolean;
  ScheduleOnlyDuringWorkHours?: boolean;
  EnforceSchedulingHorizon?: boolean;
  BookingWindowInDays?: number;
  MaximumDurationInMinutes?: number;
  MaximumConflictInstances?: number;
  ConflictPercentageAllowed?: number;
  ForwardRequestsToDelegates?: boolean;
  DeleteAttachments?: boolean;
  DeleteComments?: boolean;
  DeleteSubject?: boolean;
  DeleteNonCalendarItems?: boolean;
  AddOrganizerToSubject?: boolean;
  RemovePrivateProperty?: boolean;
  OrganizerInfo?: boolean;
  AddAdditionalResponse?: boolean;
  AdditionalResponse?: string;
  TentativePendingApproval?: boolean;
  AllRequestOutOfPolicy?: boolean;
  AllBookInPolicy?: boolean;
  AllRequestInPolicy?: boolean;
};

export type SharePointUserWebApplicationListDto = {
  SharePointUserWebApplications?: Array<SharePointUserWebApplicationDto>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SharePointUserWebApplicationDto_Request = {
  SharePointWebApplicationId?: number;
  SharePointWebApplicationName: string;
  ServerRoleId: number;
  UserId?: number;
  ServerIp?: string;
  ServerName?: string;
};

export type SharePointUserWebApplicationDto = {
  SharePointWebApplicationId?: number;
  SharePointWebApplicationName: string;
  ServerRoleId: number;
  UserId?: number;
  ServerIp?: string;
  ServerName?: string;
};

export type AssignSharePointWebApplicationDto = {
  SharePointWebApplications?: Array<SharePointUserWebApplicationDto>;
  UserId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type AssignSharePointWebApplicationDto_Request = {
  SharePointWebApplications?: Array<SharePointUserWebApplicationDto_Request>;
};

export type SharePointGroupListDto = {
  SharePointGroups?: Array<SharePointGroupDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SharePointGroupDto = {
  GroupName: string;
  GroupLogin?: string;
  Description: string;
  Dn?: string;
  SiteId?: string;
  SiteUrl?: string;
  GroupAdministrator?: string;
  OrganizationId?: number;
  OwnerId?: number;
  SharePointRoles?: Array<SharePointRoleDto>;
  SharePointUsersLogin?: Array<string>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SharePointGroupDto_Request = {
  GroupName: string;
  Description: string;
  /**
   * you can get group administrator by calling 'GET /sharepoint/sites/{siteId}/users'.
   */
  GroupAdministrator?: string;
  /**
   * you can get SharePoint roles by calling 'GET /sharepoint/sites/{sharePointSiteId}/roles'.
   */
  SharePointRoles?: Array<SharePointRoleDto>;
  /**
   * you can get SharePoint users login by calling 'GET /sharepoint/sites/{siteId}/users'.
   */
  SharePointUsersLogin?: Array<string>;
};

export type SharePointGroupDto_List = {
  GroupName: string;
  GroupLogin?: string;
  Description: string;
  Dn?: string;
  SiteId?: string;
  SiteUrl?: string;
  GroupAdministrator?: string;
  OrganizationId?: number;
  OwnerId?: number;
  SharePointRoles?: Array<SharePointRoleDto>;
  SharePointUsersLogin?: Array<string>;
};

export type SharePointRoleDto = {
  RoleName?: string;
  Description?: string;
};

export type SharePointRoleListDto = {
  SharePointRoles?: Array<SharePointRoleDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SharePointRoleListDto_Request = {
  SharePointRoles?: Array<SharePointRoleDto>;
};

export type SharePointUserListDto = {
  SPUsers?: Array<SharePointUserDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SharePointUserDto_List = {
  CreateNewUser?: boolean;
  SPUserId?: number;
  UserName: string;
  DisplayName?: string;
  UserEmailAddress?: string;
  UserPassword?: string;
  UserLogin?: string;
  OrganizationId?: number;
  SiteId?: number;
  SiteUrl?: string;
  OwnerId?: number;
  CResourceId?: number;
  ServerRoleId?: number;
  SharePointRoles?: Array<SharePointRoleDto>;
  GeneralProfile?: UserGeneralProfileDto;
};

export type SharePointUserDto_Request = {
  /**
   * Set it true to create new user.
   */
  CreateNewUser?: boolean;
  UserName: string;
  /**
   * User email address is required when 'CreateNewUser' is true.
   */
  UserEmailAddress?: string;
  /**
   * User password is required when 'CreateNewUser' is true.
   */
  UserPassword?: string;
  /**
   * you can get SharePoint roles by calling 'GET /sharepoint/sites/{sharePointSiteId}/roles
   */
  SharePointRoles?: Array<SharePointRoleDto>;
  GeneralProfile?: UserGeneralProfileDto;
};

export type SharePointUserDto = {
  CreateNewUser?: boolean;
  SPUserId?: number;
  UserName: string;
  DisplayName?: string;
  UserEmailAddress?: string;
  UserPassword?: string;
  UserLogin?: string;
  OrganizationId?: number;
  SiteId?: number;
  SiteUrl?: string;
  OwnerId?: number;
  CResourceId?: number;
  ServerRoleId?: number;
  SharePointRoles?: Array<SharePointRoleDto>;
  GeneralProfile?: UserGeneralProfileDto;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SharePointGroupMemberListDto = {
  SharePointGroupMembers?: Array<SharePointGroupMemberDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SharePointGroupMemberListDto_Request = {
  SharePointGroupMembers?: Array<SharePointGroupMemberDto_List>;
};

export type SharePointGroupMemberDto = {
  UserLogin?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SharePointGroupMemberDto_List = {
  UserLogin?: string;
};

export type SharePointSettingsDto = {
  SharePointServerType: string;
  HostName: string;
  AdminUserName: string;
  AdminUserPassword: string;
  DomainController?: string;
  ADAdmin?: string;
  ADAdminPassword?: string;
  ParentOU?: string;
  WebRole?: boolean;
  WebApplication?: string;
};

export type SharePointWebApplicationListDto = {
  SharePointWebApplications?: Array<SharePointWebApplicationDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SharePointWebApplicationDto = {
  Url?: string;
  Name?: string;
};

export type SharePointLocaleListDto = {
  SharePointLocales?: Array<SharePointLocaleDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SharePointLocaleDto = {
  DisplayName?: string;
  Tag?: string;
  Lcid?: string;
};

export type SharePointWebTemplateListDto = {
  SharePointWebTemplates?: Array<SharePointWebTemplateDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SharePointWebTemplateDto = {
  TemplateId?: string;
  Name?: string;
  Lcid: string;
};

export type SharePointSiteListDto = {
  SPSites?: Array<SharePointSiteDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SharePointSiteDto = {
  SPSiteId?: number;
  SPHostHeader: string;
  SPDomain: string;
  ServerRoleId: number;
  MaxDatabaseSize?: number;
  SPUserUsage?: number;
  SPGroupUsage?: number;
  IsSubSite?: boolean;
  OwnerId?: number;
  DBStorageUsage?: number;
  OrganizationId: number;
  CResourceId?: number;
  ParentSiteId?: number;
  SitePath?: string;
  SiteUrl?: string;
  IsDeleted?: boolean;
  WebApplication?: string;
  LanguageId: number;
  SiteTemplateId: string;
  SiteTitle: string;
  DatabaseStorageSize?: number;
  DatabaseWarningEmailPercentage?: number;
  SharePointUserName: string;
  SharePointUserPassword: string;
  OrganizationName?: string;
  OwnerName?: string;
  Description?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SharePointSiteDto_Request = {
  SPHostHeader: string;
  SPDomain: string;
  ServerRoleId: number;
  OwnerId?: number;
  OrganizationId: number;
  CResourceId?: number;
  WebApplication?: string;
  /**
   * You can get language id by calling 'GET /sharepoint-server/{serverRoleId}/locales'.
   */
  LanguageId: number;
  /**
   * You can get site template id by calling 'GET /sharepoint-server/{serverRoleId}/locales/{localeId}/web-templates'.
   */
  SiteTemplateId: string;
  SiteTitle: string;
  DatabaseStorageSize?: number;
  DatabaseWarningEmailPercentage?: number;
  SharePointUserName: string;
  SharePointUserPassword: string;
  Description?: string;
};

export type SharePointSiteDto_List = {
  SPSiteId?: number;
  SPHostHeader?: string;
  SPDomain?: string;
  ServerRoleId?: number;
  MaxDatabaseSize?: number;
  SPUserUsage?: number;
  SPGroupUsage?: number;
  IsSubSite?: boolean;
  OwnerId?: number;
  DBStorageUsage?: number;
  OrganizationId?: number;
  CResourceId?: number;
  ParentSiteId?: number;
  SitePath?: string;
  SiteUrl?: string;
  IsDeleted?: boolean;
  WebApplication?: string;
  LanguageId?: number;
  SiteTemplateId?: string;
  SiteTitle?: string;
  DatabaseStorageSize?: number;
  DatabaseWarningEmailPercentage?: number;
  SharePointUserName?: string;
  SharePointUserPassword?: string;
  OrganizationName?: string;
  OwnerName?: string;
  Description?: string;
};

export type SharePointSubSiteDto = {
  SPSiteId?: number;
  SPHostHeader: string;
  SitePath?: string;
  SPDomain?: string;
  SiteUrl?: string;
  SiteTitle?: string;
  Description?: string;
  UseUniquePermissions?: boolean;
  LanguageId: number;
  SiteTemplateId: string;
  OrganizationId: number;
  ServerRoleId: number;
  OwnerId?: number;
  ApiUserId?: number;
  ParentSiteId?: number;
  IsSubSite?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SharePointSubSiteDto_Request = {
  SPHostHeader: string;
  SiteTitle?: string;
  Description?: string;
  /**
   * Set this true to use your own user permissions setting, otherwise it use parent site permissions.
   */
  UseUniquePermissions?: boolean;
  /**
   * You can get language id by calling 'GET /sharepoint-server/{serverRoleId}/locales'.
   */
  LanguageId: number;
  /**
   * You can get site template id by calling 'GET /sharepoint-server/{serverRoleId}/locales/{localeId}/web-templates'.
   */
  SiteTemplateId: string;
  OrganizationId: number;
  ServerRoleId: number;
};

export type SharePointSiteDetailDto = {
  DatabaseStorageUsage?: number;
  StorageMaximumLevel?: number;
  StorageWarningLevel?: number;
  Bandwidth?: number;
  Hits?: number;
  UsagePercentage?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SharePointUserChangePasswordDto = {
  SPUserId: number;
  SiteId?: number;
  UserName?: string;
  Password: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SharePointUserChangePasswordDto_Request = {
  UserName?: string;
  Password: string;
};

export type SharePointGeneralProfileDto = {
  SPUserId?: number;
  SiteId?: number;
  UserName?: string;
  GeneralProfile?: UserGeneralProfileDto;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SharePointGeneralProfileDto_Request = {
  SPUserId?: number;
  SiteId?: number;
  UserName?: string;
  GeneralProfile?: UserGeneralProfileDto;
};

export type SkypeGroupListDto = {
  SkypeGroups?: Array<SkypeGroupDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeGroupDto_List = {
  ResponseGroupId?: number;
  ResponseGroupName: string;
  OrganizationId: number;
  OrganizationName?: string;
  ServerRoleId?: number;
  IsDisabled?: boolean;
  IsDeleted?: boolean;
  GroupIdentity?: string;
  ApplicationServiceName?: string;
  Description: string;
  OwnerId?: number;
  AgentAlertTime?: number;
  ParticipationPolicy?: string;
  RoutingMethod?: string;
  DistributionGroupAddress?: string;
  EnterpriseVoiceUsers?: Array<string>;
};

export type SkypeGroupDto = {
  ResponseGroupId?: number;
  ResponseGroupName: string;
  OrganizationId: number;
  OrganizationName?: string;
  ServerRoleId?: number;
  IsDisabled?: boolean;
  IsDeleted?: boolean;
  GroupIdentity?: string;
  ApplicationServiceName?: string;
  Description: string;
  OwnerId?: number;
  AgentAlertTime?: number;
  ParticipationPolicy?: string;
  RoutingMethod?: string;
  DistributionGroupAddress?: string;
  EnterpriseVoiceUsers?: Array<string>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeGroupDto_Request = {
  ResponseGroupName: string;
  OrganizationId: number;
  ServerRoleId?: number;
  /**
   * Application service name should be in the format, 'ApplicationServer:application server name'.
   */
  ApplicationServiceName?: string;
  Description: string;
  AgentAlertTime?: number;
  ParticipationPolicy?: 'Informal' | 'Formal';
  RoutingMethod?:
    | 'LongestIdle'
    | 'Serial'
    | 'Parallel'
    | 'RoundRobin'
    | 'Attendant';
  EnterpriseVoiceUsers?: Array<string>;
};

export type ParticipationPolicy = 'Informal' | 'Formal';

export const ParticipationPolicy = {
  INFORMAL: 'Informal',
  FORMAL: 'Formal',
} as const;

export type RoutingMethod =
  | 'LongestIdle'
  | 'Serial'
  | 'Parallel'
  | 'RoundRobin'
  | 'Attendant';

export const RoutingMethod = {
  LONGEST_IDLE: 'LongestIdle',
  SERIAL: 'Serial',
  PARALLEL: 'Parallel',
  ROUND_ROBIN: 'RoundRobin',
  ATTENDANT: 'Attendant',
} as const;

export type SkypeQueueListDto = {
  SkypeQueues?: Array<SkypeQueueDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeQueueDto_List = {
  ResponseQueueId?: number;
  ResponseQueueName: string;
  OrganizationId: number;
  OrganizationName?: string;
  ServerRoleId?: number;
  IsDisabled?: boolean;
  IsDeleted?: boolean;
  QueueIdentity?: string;
  ApplicationServiceName?: string;
  Description: string;
  OwnerId?: number;
  EnableQueueTimeout?: boolean;
  TimeoutAction?: string;
  TimeoutPeriod?: number;
  TimeoutQueueIdentity?: string;
  TimeoutQueueName?: string;
  TimeoutAddress?: string;
  EnableQueueOverflow?: boolean;
  OverflowAction?: string;
  OverflowCandidate?: string;
  OverflowQueueIdentity?: string;
  OverflowQueueName?: string;
  MaximumCalls?: number;
  AgentAlertTime?: number;
  ParticipationPolicy?: string;
  RoutingMethod?: string;
  OverflowAddress?: string;
  DistributionGroupAddress?: string;
  Groups?: Array<string>;
  GroupIdentities?: Array<string>;
};

export type SkypeQueueDto = {
  ResponseQueueId?: number;
  ResponseQueueName: string;
  OrganizationId: number;
  OrganizationName?: string;
  ServerRoleId?: number;
  IsDisabled?: boolean;
  IsDeleted?: boolean;
  QueueIdentity?: string;
  ApplicationServiceName?: string;
  Description: string;
  OwnerId?: number;
  EnableQueueTimeout?: boolean;
  TimeoutAction?: string;
  TimeoutPeriod?: number;
  TimeoutQueueIdentity?: string;
  TimeoutQueueName?: string;
  TimeoutAddress?: string;
  EnableQueueOverflow?: boolean;
  OverflowAction?: string;
  OverflowCandidate?: string;
  OverflowQueueIdentity?: string;
  OverflowQueueName?: string;
  MaximumCalls?: number;
  AgentAlertTime?: number;
  ParticipationPolicy?: string;
  RoutingMethod?: string;
  OverflowAddress?: string;
  DistributionGroupAddress?: string;
  Groups?: Array<string>;
  GroupIdentities?: Array<string>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeQueueDto_Request = {
  ResponseQueueName: string;
  OrganizationId: number;
  /**
   * Application service name should be in the format, 'ApplicationServer:application server name'.
   */
  ApplicationServiceName?: string;
  Description: string;
  EnableQueueTimeout?: boolean;
  /**
   * Timeout action is required when 'EnableQueueTimeout' is true.
   */
  TimeoutAction?:
    | 'TransferToQueue'
    | 'TransferToUri'
    | 'TransferToVoicemailUri'
    | 'TransferToPstn'
    | 'Terminate';
  /**
   * Timeout period is required when 'EnableQueueTimeout' is true.
   */
  TimeoutPeriod?: number;
  /**
   * Timeout queue name is required when 'TimeoutAction' is set as 'TransferToQueue'.
   */
  TimeoutQueueName?: string;
  /**
   * Timeout queue name is required when 'TimeoutAction' is set as 'TransferToUri' or 'TransferToVoicemailUri' or 'TransferToPstn'.
   */
  TimeoutAddress?: string;
  EnableQueueOverflow?: boolean;
  /**
   * Overflow action is required when 'EnableQueueOverflow' is true.
   */
  OverflowAction?:
    | 'TransferToQueue'
    | 'TransferToUri'
    | 'TransferToVoicemailUri'
    | 'TransferToPstn'
    | 'Terminate';
  /**
   * Overflow queue name is required when 'OverflowAction' is set as 'TransferToQueue'.
   */
  OverflowQueueName?: string;
  /**
   * Maximum calls is required when 'EnableQueueOverflow' is true.
   */
  MaximumCalls?: number;
  /**
   * Overflow address is required when 'OverflowAction' is set as 'TransferToUri' or 'TransferToVoicemailUri' or 'TransferToPstn'.
   */
  OverflowAddress?: string;
  Groups?: Array<string>;
};

/**
 * Timeout action is required when 'EnableQueueTimeout' is true.
 */
export type TimeoutAction =
  | 'TransferToQueue'
  | 'TransferToUri'
  | 'TransferToVoicemailUri'
  | 'TransferToPstn'
  | 'Terminate';

/**
 * Timeout action is required when 'EnableQueueTimeout' is true.
 */
export const TimeoutAction = {
  TRANSFER_TO_QUEUE: 'TransferToQueue',
  TRANSFER_TO_URI: 'TransferToUri',
  TRANSFER_TO_VOICEMAIL_URI: 'TransferToVoicemailUri',
  TRANSFER_TO_PSTN: 'TransferToPstn',
  TERMINATE: 'Terminate',
} as const;

/**
 * Overflow action is required when 'EnableQueueOverflow' is true.
 */
export type OverflowAction =
  | 'TransferToQueue'
  | 'TransferToUri'
  | 'TransferToVoicemailUri'
  | 'TransferToPstn'
  | 'Terminate';

/**
 * Overflow action is required when 'EnableQueueOverflow' is true.
 */
export const OverflowAction = {
  TRANSFER_TO_QUEUE: 'TransferToQueue',
  TRANSFER_TO_URI: 'TransferToUri',
  TRANSFER_TO_VOICEMAIL_URI: 'TransferToVoicemailUri',
  TRANSFER_TO_PSTN: 'TransferToPstn',
  TERMINATE: 'Terminate',
} as const;

export type SkypeSettingsDto = {
  ServerIp?: string;
  DomainController?: string;
  ADAdmin?: string;
  ADPassword?: string;
  ParentOU?: string;
  HostName?: string;
  AdminUserName?: string;
  AdminUserPassword?: string;
  UserRegistrarPool?: string;
  SkypeServerType?: string;
};

export type SkypeRegistrarPoolListDto = {
  Pools?: Array<SkypeRegistrarPoolDto>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeRegistrarPoolDto = {
  PoolName?: string;
};

export type AssignSkypeServerPoolListDto = {
  Pools?: Array<AssignSkypeServerPoolDto>;
  UserId: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type AssignSkypeServerPoolDto = {
  PoolName: string;
  ServerRoleId: number;
};

export type SkypeTimeZoneListDto = {
  TimeZones?: Array<SkypeTimeZoneDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeTimeZoneDto = {
  Name?: string;
  DisplayName?: string;
  Id?: string;
};

export type LineUriListDto = {
  LineUris?: Array<LineUriDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type LineUriDto_List = {
  LineURIId?: number;
  LineURI: string;
  ServerRoleId: number;
  OrganizationId?: number;
  AssignedTo?: number;
  IsUsed?: boolean;
  AssignedToUserName?: string;
  ServerIp?: string;
  ServerName?: string;
};

export type LineUriDto = {
  LineURIId?: number;
  LineURI: string;
  ServerRoleId: number;
  OrganizationId?: number;
  AssignedTo?: number;
  IsUsed?: boolean;
  IsDeleted?: boolean;
  AddedBy?: number;
  ModifiedBy?: number;
  DeletedBy?: number;
  AssignedToUserName?: string;
  ServerIp?: string;
  ServerName?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type AssignLineUriListDto = {
  LineUris?: Array<AssignLineUriDto>;
  UserId: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type AssignLineUriDto = {
  LineURIId: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeFederatedDomainListDto = {
  FederatedDomains?: Array<SkypeFederatedDomainDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeFederatedDomainDto_List = {
  Comment: string;
  DomainType: string;
  ProxyFqdn?: string;
  DomainName: string;
  ServerRoleId?: number;
};

export type SkypeFederatedDomainDto = {
  Comment: string;
  DomainType: string;
  ProxyFqdn?: string;
  DomainName: string;
  ServerRoleId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeUserPoliciesListDto = {
  ConferencingPolicies?: Array<SkypeUserPolicyDto>;
  ClientVersionPolicies?: Array<SkypeUserPolicyDto>;
  PinPolicies?: Array<SkypeUserPolicyDto>;
  ExternalAccessPolicies?: Array<SkypeUserPolicyDto>;
  ArchivingPolicies?: Array<SkypeUserPolicyDto>;
  LocationPolicies?: Array<SkypeUserPolicyDto>;
  MobilityPolicies?: Array<SkypeUserPolicyDto>;
  PersistentChatPolicies?: Array<SkypeUserPolicyDto>;
  ClientPolicies?: Array<SkypeUserPolicyDto>;
  VoicePolicies?: Array<SkypeUserPolicyDto>;
  DialInPolicies?: Array<SkypeUserPolicyDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeUserPolicyDto = {
  Name?: string;
  DisplayName?: string;
  Description?: string;
};

export type SkypeApplicationServicesListDto = {
  ApplicationServices?: Array<SkypeApplicationServiceDto>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeApplicationServiceDto = {
  ApplicationServiceName?: string;
};

export type AssignSkypeApplicationServiceListDto = {
  ApplicationServices?: Array<AssignSkypeApplicationServiceDto>;
  UserId: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type AssignSkypeApplicationServiceDto = {
  ApplicationServiceName: string;
  ServerRoleId: number;
};

export type SkypeSipDomainListDto = {
  SipDomains?: Array<SkypeSipDomainDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeSipDomainDto_List = {
  SIPDomainId?: number;
  SIPDomainName: string;
  OrganizationId: number;
  ServerRoleId: number;
  UserCount?: number;
  OwnerId?: number;
  OwnerName?: string;
  MeetSimpleURL?: string;
  CResourceId?: number;
};

export type SkypeSipDomainDto = {
  SIPDomainId?: number;
  SIPDomainName: string;
  OrganizationId: number;
  ServerRoleId: number;
  UserCount?: number;
  OwnerId?: number;
  OwnerName?: string;
  IsDeleted?: boolean;
  AddedBy?: number;
  ModifiedBy?: number;
  DeletedBy?: number;
  MeetSimpleURL?: string;
  CResourceId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeSipDomainDto_Request = {
  SIPDomainName: string;
  OrganizationId: number;
  ServerRoleId: number;
  /**
   * Give owner id in case of creating sip domain for any descendent user.
   */
  OwnerId?: number;
};

export type SkypeUserListDto = {
  SkypeUsers?: Array<SkypeUserDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeUserDto_List = {
  SkypeUserId?: number;
  SkypeUserName: string;
  OrganizationId?: number;
  ServerRoleId?: number;
  SIPAddress?: string;
  SIPDomainId: number;
  SIPDomainName?: string;
  UserServerPool?: string;
  IsDisabled?: boolean;
  LineURIId?: number;
  GUID?: string;
  DisplayName?: string;
  SipAddressType?: string;
  Password?: string;
  EnterpriseVoiceEnabled?: boolean;
  RemoteCallControlEnabled?: boolean;
  RemoteCallControlOnly?: boolean;
  OwnerId?: number;
  GeneralProfile?: UserGeneralProfileDto;
  OrganizationName?: string;
  TelephonyOption: string;
  LineServerUri?: string;
  LineUri?: string;
  VoicePolicy?: string;
  DialPlan?: string;
  MeetingPolicy?: string;
  MeetingPolicyDetails?: string;
  ConferencingPolicy?: string;
  ClientVersionPolicy?: string;
  PinPolicy?: string;
  ExternalAccessPolicy?: string;
  ArchivingPolicy?: string;
  LocationPolicy?: string;
  MobilityPolicy?: string;
  ClientPolicy?: string;
  PersistentChatPolicy?: string;
  FederationEnabled?: boolean;
  RemoteUserAccess?: boolean;
  PublicImConnectivity?: boolean;
  EnhancedPresence?: boolean;
  ArchiveInternalMessages?: boolean;
  ArchiveFederatedMessages?: boolean;
  AnonymousRecipients?: boolean;
  PbxIntegrationEnabled?: boolean;
};

export type SkypeUserDto_Request = {
  SkypeUserName: string;
  OrganizationId?: number;
  ServerRoleId?: number;
  SIPDomainId: number;
  UserServerPool?: string;
  /**
   * Display name should be given if not provided in general profile, it will be ignored if passed in general profile.
   */
  DisplayName?: string;
  Password?: string;
  GeneralProfile?: UserGeneralProfileDto;
  TelephonyOption:
    | 'pctopc'
    | 'enterprisevoice'
    | 'audiovideodisabled'
    | 'remotecallcontrol'
    | 'remotecallcontrolonly';
  /**
   * It depends on 'TelephonyOption', Its value is required when telephony option is 'remotecallcontrol' and 'remotecallcontrolonly'.
   */
  LineServerUri?: string;
  /**
   * It depends on 'TelephonyOption', It is not required when telephony option is 'audiovideodisabled'.
   */
  LineUri?: string;
  /**
   * Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'.
   */
  VoicePolicy?: string;
  /**
   * Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'.
   */
  MeetingPolicy?: string;
  /**
   * Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'.
   */
  ConferencingPolicy?: string;
  /**
   * Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'.
   */
  ClientVersionPolicy?: string;
  /**
   * Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'.
   */
  PinPolicy?: string;
  /**
   * Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'.
   */
  ExternalAccessPolicy?: string;
  /**
   * Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'.
   */
  ArchivingPolicy?: string;
  /**
   * Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'.
   */
  LocationPolicy?: string;
  /**
   * Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'.
   */
  MobilityPolicy?: string;
  /**
   * Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'.
   */
  ClientPolicy?: string;
  /**
   * Policy format should be 'Tag:policy name', You can get policies list by calling 'GET /skype-server/{serverRoleId}/user-policies'.
   */
  PersistentChatPolicy?: string;
};

export type TelephonyOption =
  | 'pctopc'
  | 'enterprisevoice'
  | 'audiovideodisabled'
  | 'remotecallcontrol'
  | 'remotecallcontrolonly';

export const TelephonyOption = {
  PCTOPC: 'pctopc',
  ENTERPRISEVOICE: 'enterprisevoice',
  AUDIOVIDEODISABLED: 'audiovideodisabled',
  REMOTECALLCONTROL: 'remotecallcontrol',
  REMOTECALLCONTROLONLY: 'remotecallcontrolonly',
} as const;

export type SkypeUserDto = {
  SkypeUserId?: number;
  SkypeUserName: string;
  OrganizationId?: number;
  ServerRoleId?: number;
  SIPAddress?: string;
  SIPDomainId: number;
  SIPDomainName?: string;
  UserServerPool?: string;
  IsDisabled?: boolean;
  LineURIId?: number;
  GUID?: string;
  DisplayName?: string;
  SipAddressType?: string;
  Password?: string;
  EnterpriseVoiceEnabled?: boolean;
  RemoteCallControlEnabled?: boolean;
  RemoteCallControlOnly?: boolean;
  OwnerId?: number;
  IsDeleted?: boolean;
  AddedBy?: number;
  ModifiedBy?: number;
  DeletedBy?: number;
  GeneralProfile?: UserGeneralProfileDto;
  OrganizationName?: string;
  TelephonyOption: string;
  LineServerUri?: string;
  LineUri?: string;
  VoicePolicy?: string;
  DialPlan?: string;
  MeetingPolicy?: string;
  MeetingPolicyDetails?: string;
  ConferencingPolicy?: string;
  ClientVersionPolicy?: string;
  PinPolicy?: string;
  ExternalAccessPolicy?: string;
  ArchivingPolicy?: string;
  LocationPolicy?: string;
  MobilityPolicy?: string;
  ClientPolicy?: string;
  PersistentChatPolicy?: string;
  FederationEnabled?: boolean;
  RemoteUserAccess?: boolean;
  PublicImConnectivity?: boolean;
  EnhancedPresence?: boolean;
  ArchiveInternalMessages?: boolean;
  ArchiveFederatedMessages?: boolean;
  AnonymousRecipients?: boolean;
  PbxIntegrationEnabled?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeUserChangePasswordDto = {
  SkypeUserId?: number;
  Password: string;
  SkypeUserName?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeUserChangePasswordDto_Request = {
  Password: string;
  SkypeUserName?: string;
};

export type SkypeUserGeneralProfileDto = {
  SkypeUserId?: number;
  SkypeUserName?: string;
  GeneralProfile?: UserGeneralProfileDto;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeUserGeneralProfileDto_Request = {
  GeneralProfile?: UserGeneralProfileDto;
};

export type SkypeUserAdvancedPropertiesDto = {
  SkypeUserId?: number;
  SkypeUserName?: string;
  LineURIId?: number;
  TelephonyOption?: string;
  LineServerUri?: string;
  LineUri?: string;
  VoicePolicy?: string;
  DialPlan?: string;
  MeetingPolicy?: string;
  MeetingPolicyDetails?: string;
  ConferencingPolicy?: string;
  ClientVersionPolicy?: string;
  PinPolicy?: string;
  ExternalAccessPolicy?: string;
  ArchivingPolicy?: string;
  LocationPolicy?: string;
  MobilityPolicy?: string;
  ClientPolicy?: string;
  PersistentChatPolicy?: string;
  FederationEnabled?: boolean;
  RemoteUserAccess?: boolean;
  PublicImConnectivity?: boolean;
  EnhancedPresence?: boolean;
  ArchiveInternalMessages?: boolean;
  ArchiveFederatedMessages?: boolean;
  AnonymousRecipients?: boolean;
  PbxIntegrationEnabled?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeUserAdvancedPropertiesDto_Request = {
  SkypeUserName?: string;
  LineURIId?: number;
  TelephonyOption?: string;
  LineServerUri?: string;
  LineUri?: string;
  VoicePolicy?: string;
  DialPlan?: string;
  MeetingPolicy?: string;
  MeetingPolicyDetails?: string;
  ConferencingPolicy?: string;
  ClientVersionPolicy?: string;
  PinPolicy?: string;
  ExternalAccessPolicy?: string;
  ArchivingPolicy?: string;
  LocationPolicy?: string;
  MobilityPolicy?: string;
  ClientPolicy?: string;
  PersistentChatPolicy?: string;
  FederationEnabled?: boolean;
  RemoteUserAccess?: boolean;
  PublicImConnectivity?: boolean;
  EnhancedPresence?: boolean;
  ArchiveInternalMessages?: boolean;
  ArchiveFederatedMessages?: boolean;
  AnonymousRecipients?: boolean;
  PbxIntegrationEnabled?: boolean;
};

export type SkypeUserStatusDto = {
  UserId?: number;
  IsDisabled?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeUserStatusDto_Request = {
  IsDisabled?: boolean;
};

export type SkypeUserForwardingSettingsDto = {
  UserId?: number;
  ForwardTo: string;
  ForwardImmidiately?: boolean;
  ForwardAfter?: string;
  EnableCallForwarding?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeUserForwardingSettingsDto_Request = {
  ForwardTo: string;
  ForwardImmidiately?: boolean;
  ForwardAfter?: string;
  EnableCallForwarding?: boolean;
};

export type SkypeBulkUsersFeasibilityDto = {
  Users?: Array<SkypeBulkUserDto>;
  OrganizationId: number;
  OwnerId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeBulkUsersFeasibilityDto_Request = {
  Users?: Array<SkypeBulkUserDto>;
  OrganizationId: number;
  OwnerId?: number;
};

export type SkypeBulkUserDto = {
  UserName: string;
  SipAddress?: string;
  SipAddressType?: string;
  Password?: string;
  DisplayName?: string;
  IsFeasible?: boolean;
  OfficeLocation?: string;
  FileName?: string;
  City?: string;
  ZipCode?: string;
  State?: string;
  CountryId?: number;
  FirstName?: string;
  LastName?: string;
  Country?: string;
  Company?: string;
  Feasibility?: string;
  Notes?: string;
};

export type SkypeBulkUsersListDto = {
  Users?: Array<SkypeBulkUserDto>;
  OrganizationId: number;
  UserServerPool: string;
  OwnerId?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeBulkUsersListDto_Request = {
  Users?: Array<SkypeBulkUserDto>;
  OrganizationId: number;
  UserServerPool: string;
  OwnerId?: number;
};

export type SkypeUserTelephonySettingsDto = {
  SkypeUserId?: number;
  TelephonyOption: string;
  LineServerUri?: string;
  LineUri?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeUserTelephonySettingsDto_Request = {
  TelephonyOption: string;
  LineServerUri?: string;
  LineUri?: string;
};

export type SkypeUserPolicySettingsDto = {
  SkypeUserId?: number;
  VoicePolicy?: string;
  DialPlan?: string;
  MeetingPolicy?: string;
  MeetingPolicyDetails?: string;
  ConferencingPolicy?: string;
  ClientVersionPolicy?: string;
  PinPolicy?: string;
  ExternalAccessPolicy?: string;
  ArchivingPolicy?: string;
  LocationPolicy?: string;
  MobilityPolicy?: string;
  ClientPolicy?: string;
  PersistentChatPolicy?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeUserPolicySettingsDto_Request = {
  VoicePolicy?: string;
  DialPlan?: string;
  MeetingPolicy?: string;
  MeetingPolicyDetails?: string;
  ConferencingPolicy?: string;
  ClientVersionPolicy?: string;
  PinPolicy?: string;
  ExternalAccessPolicy?: string;
  ArchivingPolicy?: string;
  LocationPolicy?: string;
  MobilityPolicy?: string;
  ClientPolicy?: string;
  PersistentChatPolicy?: string;
};

export type SkypeWorkflowListDto = {
  SkypeWorkflows?: Array<SkypeWorkflowDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeWorkflowDto_List = {
  WorkflowId?: number;
  WorkflowName: string;
  OrganizationId: number;
  OrganizationName?: string;
  SIPAddress: string;
  DisplayNumber?: string;
  Type?: string;
  GUID?: string;
  ServerRoleId?: number;
  LineURIId?: number;
  LineURI?: string;
  IsDisabled?: boolean;
  IsDeleted?: boolean;
  WorkflowIdentity?: string;
  LanguageName: string;
  Description?: string;
  OwnerId?: number;
  IsActivated?: boolean;
  IsFederationEnabled?: boolean;
  IsAnonymityEnabled?: boolean;
  IsManaged?: boolean;
  TimeZone?: string;
  UseDefaultBusinessHours?: boolean;
  CustomMusicOnHoldFile?: string;
  ApplicationServiceName: string;
  Managers?: Array<string>;
};

export type SkypeWorkflowDto = {
  WorkflowId?: number;
  WorkflowName: string;
  OrganizationId: number;
  OrganizationName?: string;
  SIPAddress: string;
  DisplayNumber?: string;
  Type?: string;
  GUID?: string;
  ServerRoleId?: number;
  LineURIId?: number;
  LineURI?: string;
  IsDisabled?: boolean;
  IsDeleted?: boolean;
  WorkflowIdentity?: string;
  LanguageName: string;
  Description?: string;
  OwnerId?: number;
  IsActivated?: boolean;
  IsFederationEnabled?: boolean;
  IsAnonymityEnabled?: boolean;
  IsManaged?: boolean;
  TimeZone?: string;
  UseDefaultBusinessHours?: boolean;
  CustomMusicOnHoldFile?: string;
  ApplicationServiceName: string;
  Managers?: Array<string>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeWorkflowDto_Request = {
  WorkflowName: string;
  OrganizationId: number;
  /**
   * SIP adress should be in given format, 'sip:displayName@sipDomainName'
   */
  SIPAddress: string;
  DisplayNumber?: string;
  Type?: 'Managed' | 'Unmanaged';
  ServerRoleId?: number;
  /**
   * You can get line URI id by calling 'GET /skype-server/line-uris'.
   */
  LineURIId?: number;
  /**
   * You can get languages by calling 'GET /system-entities/skype/workflow-languages'.
   */
  LanguageName: string;
  Description: string;
  IsFederationEnabled?: boolean;
  IsAnonymityEnabled?: boolean;
  /**
   * You can get time zones by calling 'GET /skype-server/{serverRoleId}/time-zones'.
   */
  TimeZone?: string;
  /**
   * Application service name should be in the format, 'ApplicationServer:application server name'.
   */
  ApplicationServiceName: string;
  /**
   * Managers required when 'type' is 'Managed'.
   */
  Managers?: Array<string>;
};

export type Type = 'Managed' | 'Unmanaged';

export const Type = {
  MANAGED: 'Managed',
  UNMANAGED: 'Unmanaged',
} as const;

export type SkypeWorkflowGeneralSettingsDto = {
  WorkflowName?: string;
  Description?: string;
  LineUri?: string;
  DisplayNumber?: string;
  Language?: string;
  TimeZone?: string;
};

export type SkypeWorkflowStatusDto = {
  WorkflowId?: number;
  IsDisabled?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeWorkflowStatusDto_Request = {
  IsDisabled?: boolean;
};

export type SkypeWorkflowIvrSettingsDto = {
  WorkflowId?: number;
  Name?: string;
  DefaultAction?: SkypeResponseGroupCallActionDto;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SkypeWorkflowIvrSettingsDto_Request = {
  WorkflowId?: number;
  Name?: string;
  DefaultAction?: SkypeResponseGroupCallActionDto;
};

export type SkypeResponseGroupCallActionDto = {
  CallActionType?: string;
  Prompt?: SkypeResponseGroupPromptDto;
  Question?: SkypeResponseGroupQuestionDto;
  QueueName?: string;
  QueueIdentity?: string;
  SipUri?: string;
};

export type SkypeResponseGroupPromptDto = {
  TextToSpeechPrompt?: string;
  AudioFilePath?: string;
};

export type SkypeResponseGroupQuestionDto = {
  Prompt?: SkypeResponseGroupPromptDto;
  AnswerList?: Array<SkypeResponseGroupAnswerDto>;
  InvalidAnswerPrompt?: SkypeResponseGroupPromptDto;
  NoAnswerPrompt?: SkypeResponseGroupPromptDto;
  Name?: string;
};

export type SkypeResponseGroupAnswerDto = {
  Action?: SkypeResponseGroupCallActionDto;
  DigitResponse?: string;
  VoiceResponseList?: string;
  Name?: string;
};

export type VirtualMachinesDto = {
  VirtualMachines?: Array<VirtualMachineDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type VirtualMachineDto_List = {
  IpAddresses?: Array<VMIPAddressDto>;
  VirtualMachineId?: number;
  OwnerId?: number;
  DisplayName: string;
  Description?: string;
  OsTemplateId?: number;
  OsTemplate?: string;
  OsAdminName?: string;
  OsAdminPassword: string;
  RamSize?: number;
  HardDriveSize?: number;
  CpuCores?: number;
  CResourceId?: number;
  ServerId?: number;
  VirtualMachineGuid?: string;
  NumberOfSnapshots?: number;
  PublicVLanId?: number;
  PrivateVLanId?: number;
  VmStatus?: string;
  ProviderId?: number;
  ServerRoleId?: number;
  OwnerName?: string;
  PublicNetwork?: VirtualNetworkDto;
  PrivateNetwork?: VirtualNetworkDto;
  ManagementNetwork?: VirtualNetworkDto;
  AdminPassword?: string;
  VHDSize?: number;
  Platform?: string;
  ErrorReason?: string;
  ExternalSwitchId?: string;
  InternalSwithcId?: string;
  PublicIpAddresses?: Array<IpAddressDto_List>;
  PrivateIpAddresses?: Array<IpAddressDto_List>;
  State?:
    | 0
    | 2
    | 3
    | 6
    | 10
    | 32768
    | 32769
    | 32770
    | 32771
    | 32772
    | 32773
    | 32774
    | 32775
    | 32776;
  ProviderName?: string;
  IsWindows?: boolean;
  PlatformName?: string;
  OnPremises?: boolean;
};

export type State =
  | 0
  | 2
  | 3
  | 6
  | 10
  | 32768
  | 32769
  | 32770
  | 32771
  | 32772
  | 32773
  | 32774
  | 32775
  | 32776;

export const State = {
  _0: 0,
  _2: 2,
  _3: 3,
  _6: 6,
  _10: 10,
  _32768: 32768,
  _32769: 32769,
  _32770: 32770,
  _32771: 32771,
  _32772: 32772,
  _32773: 32773,
  _32774: 32774,
  _32775: 32775,
  _32776: 32776,
} as const;

export type VirtualMachineDto = {
  IpAddresses?: Array<VMIPAddressDto>;
  VirtualMachineId?: number;
  OwnerId?: number;
  DisplayName: string;
  Description?: string;
  OsTemplateId?: number;
  OsTemplate?: string;
  OsAdminName?: string;
  OsAdminPassword: string;
  RamSize?: number;
  HardDriveSize?: number;
  CpuCores?: number;
  CResourceId?: number;
  VirtualizationServer?: VirtualizationServerDto;
  ServerId?: number;
  VirtualMachineGuid?: string;
  VirtualizationServerName?: string;
  ServerIp?: string;
  NumberOfSnapshots?: number;
  PublicVLanId?: number;
  PrivateVLanId?: number;
  VmStatus?: string;
  ProviderId?: number;
  ServerRoleId?: number;
  OwnerName?: string;
  PublicNetwork?: VirtualNetworkDto;
  PrivateNetwork?: VirtualNetworkDto;
  ManagementNetwork?: VirtualNetworkDto;
  AdminPassword?: string;
  VHDSize?: number;
  Platform?: string;
  ErrorReason?: string;
  ExternalSwitchId?: string;
  InternalSwithcId?: string;
  PublicIpAddresses?: Array<IpAddressDto_List>;
  PrivateIpAddresses?: Array<IpAddressDto_List>;
  State?:
    | 0
    | 2
    | 3
    | 6
    | 10
    | 32768
    | 32769
    | 32770
    | 32771
    | 32772
    | 32773
    | 32774
    | 32775
    | 32776;
  ProviderName?: string;
  IsWindows?: boolean;
  PlatformName?: string;
  ExpandRequired?: boolean;
  OnPremises?: boolean;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type VMIPAddressDto = {
  IsPublicIP?: boolean;
  IpAddress?: string;
  Subnet?: string;
  GateWay?: string;
  PreferredDnsServer?: string;
  AlternatedDnsServer?: string;
  Family?: string;
};

export type VirtualizationServerDto = {
  ServerIp?: string;
  Type?: string;
  ServerAddress?: string;
  Domain?: string;
  AuthUser?: string;
  AuthPass?: string;
  Version?: number;
  APIUrl?: string;
  HostName?: string;
  DataCenter?: string;
};

export type VirtualNetworkDto = {
  IPAddresses?: Array<VMIPAddressDto>;
  DNSServers?: Array<string>;
  Enabled?: boolean;
  IsLegacyNetwork?: boolean;
  SwitchID?: string;
};

export type IpAddressDto_List = {
  ServerId?: number;
  ServerName?: string;
  ServerIP?: string;
  IpAddressId?: number;
  IpAddress: string;
  IpType?: string;
  IpTypeId?: number;
  SubnetMask: string;
  Gateway: string;
  PreferredDns?: string;
  AlternateDns?: string;
  ServerRoleId?: number;
  Pool?: string;
  VirtualMachineId?: number;
  Limit?: number;
  VirtualMachineName?: string;
};

export type IpAddressDto = {
  ServerId?: number;
  ServerName?: string;
  ServerIP?: string;
  IpAddressId?: number;
  IpAddress: string;
  IpType?: string;
  IpTypeId?: number;
  SubnetMask: string;
  Gateway: string;
  PreferredDns?: string;
  AlternateDns?: string;
  ServerRoleId?: number;
  Pool?: string;
  VirtualMachineId?: number;
  Limit?: number;
  VirtualMachineName?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type AddVmDto = {
  ServerId?: number;
  OwnerId?: number;
  CResourceId?: number;
  VirtualMachineId?: number;
  RamSize?: number;
  HardDriveSize?: number;
  CpuCores?: number;
  DisplayName: string;
  Description?: string;
  KeyPairName?: string;
  PublicNetworkEnabled?: boolean;
  PrivateNetworkEnabled?: boolean;
  OsTemplateId?: number;
  OsAdminName?: string;
  OsAdminPassword: string;
  ProviderId: number;
  ServerRoleId?: number;
  ResourceComponentPropId: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type AddVmDto_Request = {
  ServerId?: number;
  OwnerId?: number;
  CResourceId?: number;
  RamSize?: number;
  HardDriveSize?: number;
  CpuCores?: number;
  DisplayName: string;
  Description?: string;
  KeyPairName?: string;
  PublicNetworkEnabled?: boolean;
  PrivateNetworkEnabled?: boolean;
  OsTemplateId?: number;
  OsAdminName?: string;
  OsAdminPassword: string;
  ProviderId: number;
  ServerRoleId?: number;
  ResourceComponentPropId: number;
};

export type UpdateVmDto = {
  ServerId?: number;
  OwnerId?: number;
  CResourceId?: number;
  VirtualMachineId?: number;
  RamSize?: number;
  HardDriveSize?: number;
  CpuCores?: number;
  DisplayName: string;
  Description?: string;
  KeyPairName?: string;
  PublicNetworkEnabled?: boolean;
  PrivateNetworkEnabled?: boolean;
  OsTemplateId?: number;
  OsAdminName?: string;
  OsAdminPassword: string;
  ProviderId: number;
  ServerRoleId?: number;
  ResourceComponentPropId: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type UpdateVmDto_Request = {
  ServerId?: number;
  OwnerId?: number;
  CResourceId?: number;
  RamSize?: number;
  HardDriveSize?: number;
  CpuCores?: number;
  DisplayName: string;
  Description?: string;
  KeyPairName?: string;
  PublicNetworkEnabled?: boolean;
  PrivateNetworkEnabled?: boolean;
  OsTemplateId?: number;
  OsAdminName?: string;
  OsAdminPassword: string;
  ProviderId: number;
  ServerRoleId?: number;
  ResourceComponentPropId: number;
};

export type VmAddUpdateResultDto = {
  VirtualMachineId?: number;
  ViolationResourcesReport?: ResourceQtyViolationReportDto_List;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ResourceQtyViolationReportDto_List = {
  ViolatedResources?: Array<ResourceQtyViolationDto>;
};

export type ResourceQtyViolationReportDto = {
  ViolatedResources?: Array<ResourceQtyViolationDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ResourceQtyViolationDto = {
  ResourceId?: number;
  ResourceDisplayName?: string;
  DesiredQty?: number;
  AllocatedQty?: number;
  SoldQty?: number;
  UsedQty?: number;
  RemainingQty?: number;
  SubResources?: Array<SubResourceQtyViolationDto>;
  AffactedUsers?: Array<ResourceQtyViolationAffacteesDto>;
};

export type SubResourceQtyViolationDto = {
  ResourceId?: number;
  ResourceDisplayName?: string;
  DesiredQty?: number;
  AllocatedQty?: number;
  SoldQty?: number;
  UsedQty?: number;
  RemainingQty?: number;
};

export type ResourceQtyViolationAffacteesDto = {
  UserId?: number;
  UserName?: string;
  DesiredQty?: number;
  AllocatedQty?: number;
  SoldQty?: number;
  UsedQty?: number;
};

export type UpdateVLanDto = {
  VirtualMachineId?: number;
  PublicVLanId?: number;
  PrivateVLanId?: number;
};

export type UpdateVLanDto_Request = {
  PublicVLanId?: number;
  PrivateVLanId?: number;
};

export type SystemVirtualMachinesDto = {
  VirtualMachines?: Array<VirtualMachineSettingsDto>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type VirtualMachineSettingsDto = {
  Name?: string;
  ID?: string;
  RamSize?: number;
  CpuCores?: number;
  VHDPath?: string;
  VHDSize?: number;
  UpTime?: number;
  State?:
    | 0
    | 2
    | 3
    | 6
    | 10
    | 32768
    | 32769
    | 32770
    | 32771
    | 32772
    | 32773
    | 32774
    | 32775
    | 32776;
};

export type VmIpAddressesDto = {
  PublicIpAddresses?: Array<IpAddressDto_List>;
  PrivateIpAddresses?: Array<IpAddressDto_List>;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type AssignVmIpAddressesDto = {
  NoOfPublicIpAddresses?: number;
  NoOfPrivateIpAddresses?: number;
};

export type SnapShotsDto = {
  SnapShotList?: Array<SnapShotDetailDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type SnapShotDetailDto_List = {
  VirtualMachineId?: number;
  SnapShotGUId?: string;
  SnapShotId?: number;
  SnapShotName?: string;
  Description?: string;
  VirtualMachineName?: string;
  Dated?: Date;
};

export type SnapShotDetailDto_Request = {
  SnapShotName?: string;
  Description?: string;
};

export type SnapShotDetailDto_ApplyRequest = {
  SnapShotGUId?: string;
  SnapShotId?: number;
  SnapShotName?: string;
  Description?: string;
  Dated?: Date;
};

export type SnapShotDetailDto = {
  VirtualMachineId?: number;
  SnapShotGUId?: string;
  SnapShotId?: number;
  SnapShotName?: string;
  Description?: string;
  VirtualMachineName?: string;
  Dated?: Date;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ChangeVmPasswordDto = {
  VirtualMachineId?: number;
  OsAdminPassword?: string;
  OsAdminName?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ChangeVmPasswordDto_Request = {
  OsAdminPassword?: string;
  OsAdminName?: string;
};

export type ImportVmDto = {
  VirtualMachineGuid?: string;
  VmStatus?: string;
  PublicIpAddresses?: Array<IpAddressDto_List>;
  PrivateIpAddresses?: Array<IpAddressDto_List>;
  ServerId?: number;
  OwnerId?: number;
  CResourceId?: number;
  VirtualMachineId?: number;
  RamSize?: number;
  HardDriveSize?: number;
  CpuCores?: number;
  DisplayName: string;
  Description?: string;
  KeyPairName?: string;
  PublicNetworkEnabled?: boolean;
  PrivateNetworkEnabled?: boolean;
  OsTemplateId?: number;
  OsAdminName?: string;
  OsAdminPassword: string;
  ProviderId: number;
  ServerRoleId?: number;
  ResourceComponentPropId: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ImportVmDto_Request = {
  VirtualMachineGuid?: string;
  VmStatus?: string;
  PublicIpAddresses?: Array<IpAddressDto_List>;
  PrivateIpAddresses?: Array<IpAddressDto_List>;
  ServerId?: number;
  OwnerId?: number;
  CResourceId?: number;
  VirtualMachineId?: number;
  RamSize?: number;
  HardDriveSize?: number;
  CpuCores?: number;
  DisplayName: string;
  Description?: string;
  KeyPairName?: string;
  PublicNetworkEnabled?: boolean;
  PrivateNetworkEnabled?: boolean;
  OsTemplateId?: number;
  OsAdminName?: string;
  OsAdminPassword: string;
  ProviderId: number;
  ServerRoleId?: number;
  ResourceComponentPropId: number;
};

export type TransferVmDto = {
  OwnerId?: number;
  ServerRoleId?: number;
  UserName?: string;
  DisplayName?: string;
  OwnerName?: string;
  OsTemplate?: string;
  Status?: string;
  CpuCores?: number;
  RamSize?: number;
  HardDriveSize?: number;
};

export type VirtualMachineStatusDto = {
  VirtualMachineStatus?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type FetchMachinePasswordDto = {
  MachineId?: number;
  Password?: string;
  FileContents?: string;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type FetchMachinePasswordDto_Request = {
  MachineId?: number;
  Password?: string;
  FileContents?: string;
};

export type VmOsTemplatesDto = {
  OsTemplates?: Array<VmOsTemplateDto_List>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type VmOsTemplateDto_List = {
  OsTemplateId?: number;
  DisplayName: string;
  BaseOsType?: string;
  BaseOsSystemName?: string;
  ServerName?: string;
  VhdPath?: string;
  OsAdminPassword?: string;
  ServerRoleId?: number;
  ResourceComponentPropId?: number;
  IaasRefId?: string;
  TemplateProperties?: Object;
  ServerId?: number;
  ProviderName?: string;
  UsageCount?: string;
  IsWindows?: boolean;
  TemplateSize?: number;
  GenerationType?: number;
  IaasOSTempConfig?: IaasConfigsDto;
  AdminName: string;
  PublicNetworkName?: string;
  PrivateNetworkName?: string;
  RepositoryId?: number;
  ProviderId?: number;
  Cache?: boolean;
  RepositoryDisplayName?: string;
};

export type BaseOsTypesDto = {
  BaseOsTypes?: Array<BaseOsTypeDto>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type BaseOsTypeDto = {
  ResourceComponentPropId?: number;
  DisplayName?: string;
  IsWindows?: boolean;
  IsActive?: boolean;
  DetailValue?: string;
};

export type VLANDto = {
  VLANId?: number;
  NetworkId?: string;
  AddedBy?: number;
  VLANName?: string;
  VLANType?: string;
};

export type VLANsDto = {
  VLANList?: Array<VLANDto>;
  TotalRecords?: number;
  ErrorCode?: string;
  ErrorDesc?: string;
};

export type ActiveDirectoryObjectAddActiveDirectoryUserData = {
  /**
   * Provide data for user to be added.
   */
  body: ActiveDirectoryObjectDto_Request;
  path: {
    organizationId: number;
  };
};

export type ActiveDirectoryObjectAddActiveDirectoryUserResponse =
  ActiveDirectoryObjectDto;

export type ActiveDirectoryObjectAddActiveDirectoryUserError = unknown;

export type ActiveDirectoryObjectChangeAdUserPasswordData = {
  /**
   * UserDn is the distinguished name of user whose password settings will be updated.
   */
  body: AdUserPasswordDto;
  path: {
    organizationId: number;
  };
};

export type ActiveDirectoryObjectChangeAdUserPasswordResponse = StatusDto;

export type ActiveDirectoryObjectChangeAdUserPasswordError = unknown;

export type ActiveDirectoryObjectToggleAdUserStateData = {
  /**
   * AdUsers is the list of users in which UserDn is the distinguished name of user whose state will be toggled.
   */
  body: AdUsersDto_Request;
  path: {
    organizationId: number;
  };
};

export type ActiveDirectoryObjectToggleAdUserStateResponse = StatusDto;

export type ActiveDirectoryObjectToggleAdUserStateError = unknown;

export type ActiveDirectoryGetOrganizationObjectsData = {
  path: {
    organizationId: number;
  };
  query?: {
    /**
     * Search specific objects by name.
     */
    objectName?: string;
    /**
     * Provide ObjectType to retrieve specific type of objects.
     */
    objectType?: string;
  };
};

export type ActiveDirectoryGetOrganizationObjectsResponse =
  OrganizationObjectsDto;

export type ActiveDirectoryGetOrganizationObjectsError = unknown;

export type ActiveDirectoryDeleteMultipleObjectsData = {
  /**
   * AdObjects is the list of objects in which ObjectDn is the distinguished name of object or value of UPN suffix which will be deleted from Active Directory. ObjectType is required in case of UPN suffix deletion
   */
  body: AdObjectsDto;
  path: {
    organizationId: number;
  };
};

export type ActiveDirectoryDeleteMultipleObjectsResponse = StatusDto;

export type ActiveDirectoryDeleteMultipleObjectsError = unknown;

export type ActiveDirectoryObjectGetObjectAccountSettingsData = {
  path: {
    organizationId: number;
  };
  query: {
    /**
     * The UserDn is the distinguished name of user whose account expiry settings will be retrieved.
     */
    userDn: string;
  };
};

export type ActiveDirectoryObjectGetObjectAccountSettingsResponse =
  ADUserAccountSettingDto;

export type ActiveDirectoryObjectGetObjectAccountSettingsError = unknown;

export type ActiveDirectoryObjectSetObjectAccountSettingsData = {
  /**
   * The UserDn is the distinguished name of user whose account expiry settings will be updated.
   */
  body: ADUserAccountSettingDto_Request;
  query: {
    organizationId: number;
  };
};

export type ActiveDirectoryObjectSetObjectAccountSettingsResponse = StatusDto;

export type ActiveDirectoryObjectSetObjectAccountSettingsError = unknown;

export type ActiveDirectoryObjectSetObjectDetailsData = {
  /**
   * The objectDn is the distinguished name of object whose protection from accidental deletion will be updated.
   */
  body: AdObjectDetailsDto;
  path: {
    organizationId: number;
  };
};

export type ActiveDirectoryObjectSetObjectDetailsResponse = StatusDto;

export type ActiveDirectoryObjectSetObjectDetailsError = unknown;

export type ActiveDirectoryObjectGetAdObjectGeneralPropertiesData = {
  path: {
    organizationId: number;
  };
  query: {
    /**
     * The objectDn is the distinguished name of object whose general properties will be retrieved.
     */
    objectDn: string;
  };
};

export type ActiveDirectoryObjectGetAdObjectGeneralPropertiesResponse =
  ADUserGeneralProfileDto;

export type ActiveDirectoryObjectGetAdObjectGeneralPropertiesError = unknown;

export type ActiveDirectoryObjectUpdateAdObjectGeneralPropertiesData = {
  /**
   * The UserDn is the distinguished name of object whose general properties will be updated.
   */
  body: UserGeneralProfileDto_Request;
  path: {
    organizationId: number;
  };
};

export type ActiveDirectoryObjectUpdateAdObjectGeneralPropertiesResponse =
  StatusDto;

export type ActiveDirectoryObjectUpdateAdObjectGeneralPropertiesError = unknown;

export type ActiveDirectoryObjectGetObjectMemberOfDetailsData = {
  path: {
    organizationId: number;
  };
  query?: {
    /**
     * The objectDn is the distinguished name of object whose membership details will be retrieved.
     */
    objectDn?: string;
  };
};

export type ActiveDirectoryObjectGetObjectMemberOfDetailsResponse =
  AdObjectsMemberofListDto;

export type ActiveDirectoryObjectGetObjectMemberOfDetailsError = unknown;

export type ActiveDirectoryObjectUpdateObjectMemberOfDetailsData = {
  /**
   * The objectDn is the distinguished name of object which will be added in those groups whose distinguished names are provided in objects list.
   */
  body: AdObjectsMemberofListDto_Request;
  path: {
    organizationId: number;
  };
};

export type ActiveDirectoryObjectUpdateObjectMemberOfDetailsResponse =
  StatusDto;

export type ActiveDirectoryObjectUpdateObjectMemberOfDetailsError = unknown;

export type ActiveDirectoryObjectMoveObjectToOuData = {
  /**
   * The destinationOUPath is the path of organizational unit where objects will be moved and Objects is the list of objects in which objectDn is the distinguished name of object which will be moved from one organizational unit to other.
   */
  body: ADMoveObjectListDto_Request;
  path: {
    organizationId: number;
  };
};

export type ActiveDirectoryObjectMoveObjectToOuResponse = StatusDto;

export type ActiveDirectoryObjectMoveObjectToOuError = unknown;

export type ActiveDirectoryObjectGetGroupMembersData = {
  path: {
    organizationId: number;
  };
  query?: {
    /**
     * The objectDn is the distinguished name of group whose members list will be retrieved.
     */
    objectDn?: string;
  };
};

export type ActiveDirectoryObjectGetGroupMembersResponse =
  AdObjectsGroupMemberListDto;

export type ActiveDirectoryObjectGetGroupMembersError = unknown;

export type ActiveDirectoryObjectUpdateGroupMembersData = {
  /**
   * The objectDn is the distinguished name of group whose members will be updated and Objects is the list of objects in which objectDn is the distinguished name of object which will be added as member of this group.
   */
  body: AdObjectsGroupMemberListDto_Request;
  path: {
    organizationId: number;
  };
};

export type ActiveDirectoryObjectUpdateGroupMembersResponse = StatusDto;

export type ActiveDirectoryObjectUpdateGroupMembersError = unknown;

export type ActiveDirectoryObjectGetGroupAdminData = {
  path: {
    organizationId: number;
  };
  query: {
    /**
     * The objectDn is the distinguished name of group whose admin will be retrieved.
     */
    objectDn: string;
  };
};

export type ActiveDirectoryObjectGetGroupAdminResponse = GroupMangaedByDto;

export type ActiveDirectoryObjectGetGroupAdminError = unknown;

export type ActiveDirectoryObjectUpdateGroupAdminData = {
  /**
   * The objectDn is the distinguished name of group whose admin will be updated and ManagedBy is the distinguished name of user who will be added as admin of this group.
   */
  body: GroupMangaedByDto_Request;
  path: {
    organizationId: number;
  };
};

export type ActiveDirectoryObjectUpdateGroupAdminResponse = StatusDto;

export type ActiveDirectoryObjectUpdateGroupAdminError = unknown;

export type TokenGetTokenDetailsData = {
  query: {
    /**
     * Give value of token.
     */
    token: string;
  };
};

export type TokenGetTokenDetailsResponse = TokenDto;

export type TokenGetTokenDetailsError = unknown;

export type TokenGenerateTokenData = {
  /**
   * The complete details to generate token.
   */
  body: AuthenticationDto_Request;
};

export type TokenGenerateTokenResponse = TokenDto;

export type TokenGenerateTokenError = unknown;

export type TokenRevokeTokenData = {
  query: {
    /**
     * Give value of token.
     */
    token: string;
  };
};

export type TokenRevokeTokenResponse = StatusDto;

export type TokenRevokeTokenError = unknown;

export type UsersGetAllUsersData = {
  query?: {
    /**
     * Give value if want to search by company. It will return all the possible results that contain the provided value.
     */
    company?: string;
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Set true if want to get all customers only.
     */
    customersOnly?: boolean;
    /**
     * Set true if want to get the direct children only of the provided ownerid.
     */
    directChild?: boolean;
    /**
     * Give value if want to search by emailaddress. It will return all the possible results that contain the provided value.
     */
    emailAddress?: string;
    /**
     * Set true if want to exactly match the provided username.
     */
    exactNameMatch?: boolean;
    /**
     * Give value if want to search by firstname. It will return all the possible results that contain the provided value.
     */
    firstName?: string;
    /**
     * Set true if want to get all disabled users.
     */
    isDisabled?: number;
    /**
     * Give value if want to search by lastname. It will return all the possible results that contain the provided value.
     */
    lastName?: string;
    /**
     * Give value if want to search by ownerId.
     */
    ownerId?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give value if want to search by roleId. You will get AllUserRoles by calling 'GET: /user-roles'
     */
    roleId?: number;
    /**
     * Set true if want to get all staff members only.
     */
    staffMembersOnly?: boolean;
    /**
     * Give value if want to search by username.
     */
    userName?: string;
  };
};

export type UsersGetAllUsersResponse = UsersDto;

export type UsersGetAllUsersError = unknown;

export type UsersAddUserData = {
  /**
   * The complete details of user to be added.
   */
  body: AddUserDto_Request;
};

export type UsersAddUserResponse = AddUserDto;

export type UsersAddUserError = unknown;

export type UsersGetUserDetailsData = {
  path: {
    /**
     * The Id of user whose details are required, use '0' for getting own details.
     */
    userId: number;
  };
};

export type UsersGetUserDetailsResponse = UserDto;

export type UsersGetUserDetailsError = unknown;

export type UsersUpdateUserData = {
  /**
   * The complete details of user to be updated.
   */
  body: UserUpdateDto_Request;
  path: {
    /**
     * The Id of user whose details are to be updated. Use '0' to update own details.
     */
    userId: number;
  };
};

export type UsersUpdateUserResponse = AddUserDto;

export type UsersUpdateUserError = unknown;

export type UsersDeleteUserData = {
  path: {
    /**
     * The Id of user to be deleted.
     */
    userId: number;
  };
  query?: {
    /**
     * It is a bool flag, it works for the customers, mark true if the user has consumed resources under it.
     */
    advanceDelete?: boolean;
  };
};

export type UsersDeleteUserResponse = StatusDto;

export type UsersDeleteUserError = unknown;

export type UsersDisableUserData = {
  /**
   * The detail of ways the user can be disabled. There are three ways the user can be disabled. The user can be Suspended (suspenduser), Restricted Access (restrictpanelaccess) and Completely Disabled (restrictpanelaccessandsuspenduser).
   */
  body: UserDisableOptionDto;
  path: {
    /**
     * The Id of user to be disabled.
     */
    userId: number;
  };
};

export type UsersDisableUserResponse = StatusDto;

export type UsersDisableUserError = unknown;

export type UsersEnableUserData = {
  path: {
    /**
     * The Id of user to be enabled.
     */
    userId: number;
  };
};

export type UsersEnableUserResponse = StatusDto;

export type UsersEnableUserError = unknown;

export type UsersChangePasswordData = {
  /**
   * The packet contains a new password.
   */
  body: UserChangePasswordDto;
  path: {
    /**
     * The Id of user whose password is to be changed. Use '0' to change own password.
     */
    userId: number;
  };
};

export type UsersChangePasswordResponse = StatusDto;

export type UsersChangePasswordError = unknown;

export type UsersIsLoginNameAvailableData = {
  path: {
    /**
     * Give username to check its availability.
     */
    userName: string;
  };
};

export type UsersIsLoginNameAvailableResponse = StatusDto;

export type UsersIsLoginNameAvailableError = unknown;

export type UsersGetUserProfileDetailsData = {
  path: {
    /**
     * The Id of user whose profile details are to be obtained. Use '0' for getting own profile details.
     */
    userId: number;
  };
};

export type UsersGetUserProfileDetailsResponse = UserProfileDto;

export type UsersGetUserProfileDetailsError = unknown;

export type UsersUpdateUserProfileData = {
  /**
   * Complete details that you want to set.
   */
  body: UserProfileDto_Request;
  path: {
    /**
     * The Id of user whose profile details are to be obtained. Use '0' for getting own profile details.
     */
    userId: number;
  };
};

export type UsersUpdateUserProfileResponse = StatusDto;

export type UsersUpdateUserProfileError = unknown;

export type ReportGetUserQuotaReportData = {
  query?: {
    /**
     * IsComposite is the bool value, mark it true to get only composite resources.
     */
    isComposite?: boolean;
    /**
     * Give providerName to get the quota for a specific provider, you can get the providers by calling 'GET /providers'.
     */
    providerName?: string;
    /**
     * Give resourcesNames to get the quota for the specific resources, comma separated resource name will be passed, you can get the resource name by calling 'GET /resources'.
     */
    resourcesNames?: string;
    /**
     * Give serverRole to get the quota for a specific server role, you can get the sever role by calling 'Get /server-roles'.
     */
    serverRole?: string;
    /**
     * Give userid to get the quota report for a specific user, you can get userid by calling 'Get /panel-users'.
     */
    userId?: number;
  };
};

export type ReportGetUserQuotaReportResponse = QuotaReportDto;

export type ReportGetUserQuotaReportError = unknown;

export type ReportGetConsumedResourcesResponse = ConsumedQuotaReportDto;

export type ReportGetConsumedResourcesError = unknown;

export type ReportGetDailyResourcesUsageResponse = DailyResUsageReportDto;

export type ReportGetDailyResourcesUsageError = unknown;

export type ReportGetMonthlyResourcesUsageResponse = DailyResUsageReportDto;

export type ReportGetMonthlyResourcesUsageError = unknown;

export type ReportGetPanelStatsResponse = PanelStatsDto;

export type ReportGetPanelStatsError = unknown;

export type ReportDiskUsageUsersListData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give number of months to get details according to it.
     */
    months?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give userName to retrieve disk usage for a specific user, you can get username by calling 'Get /panel-users'.
     */
    userName?: string;
  };
};

export type ReportDiskUsageUsersListResponse = UsersUsageReportDto;

export type ReportDiskUsageUsersListError = unknown;

export type ReportDiskUsageReportMonthlyData = {
  query?: {
    /**
     * Give number of months to get report.
     */
    months?: number;
    /**
     * Give ownerid to get report. Use '0' to get own details.
     */
    ownerId?: number;
  };
};

export type ReportDiskUsageReportMonthlyResponse = DiskUsageReportDto;

export type ReportDiskUsageReportMonthlyError = unknown;

export type ReportDiskUsageReportTotalData = {
  query?: {
    /**
     * Give ownerid to get report. Use '0' to get own details.
     */
    ownerId?: number;
  };
};

export type ReportDiskUsageReportTotalResponse = DiskUsageReportDto;

export type ReportDiskUsageReportTotalError = unknown;

export type ReportBandwidthUsageReportMonthlyData = {
  query?: {
    /**
     * Give number of months to get report.
     */
    months?: number;
    /**
     * Give ownerid to get report. Use '0' to get own details.
     */
    ownerId?: number;
  };
};

export type ReportBandwidthUsageReportMonthlyResponse = BandwidthUsageReportDto;

export type ReportBandwidthUsageReportMonthlyError = unknown;

export type ReportBandwidthUsageReportTotalData = {
  query?: {
    /**
     * Give ownerid to get report. Use '0' to get own details.
     */
    ownerId?: number;
  };
};

export type ReportBandwidthUsageReportTotalResponse = BandwidthUsageReportDto;

export type ReportBandwidthUsageReportTotalError = unknown;

export type ConfigurationsBandwidthUsageUsersListData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give number of months to get details according to it.
     */
    months?: number;
    /**
     * the ownerId to get all its children.
     */
    ownerId?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give username to get bandwidth usage for a specific user, you can get username by calling 'Get /panel-users'.
     */
    userName?: string;
  };
};

export type ConfigurationsBandwidthUsageUsersListResponse = UsersUsageReportDto;

export type ConfigurationsBandwidthUsageUsersListError = unknown;

export type SettingsGetAllStatesData = {
  path: {
    /**
     * Give a countryId to get its states, You can get it by calling 'Get /system-entities/countries'.
     */
    countryId: number;
  };
};

export type SettingsGetAllStatesResponse = StatesDto;

export type SettingsGetAllStatesError = unknown;

export type SettingsGetAllCountriesData = {
  query?: {
    /**
     * Give a countryId to get its details, pass 0 to get all countries.
     */
    countryId?: number;
    /**
     * Give a countryName to get its details.
     */
    countryName?: string;
  };
};

export type SettingsGetAllCountriesResponse = CountriesDto;

export type SettingsGetAllCountriesError = unknown;

export type SettingsGetAllLanguagesResponse = LanguagesDto;

export type SettingsGetAllLanguagesError = unknown;

export type SettingsGetAllLanguagesByLangNameData = {
  path: {
    /**
     * Give a langName to get details, You can get it by calling 'Get /system-entities/languages'.
     */
    langName: string;
  };
};

export type SettingsGetAllLanguagesByLangNameResponse = LanguagesDto;

export type SettingsGetAllLanguagesByLangNameError = unknown;

export type SettingsGetAllResourceQuotaTypesResponse = TypesItemsDto;

export type SettingsGetAllResourceQuotaTypesError = unknown;

export type SettingsGetAllResourceProvisioningTypesResponse = TypesItemsDto;

export type SettingsGetAllResourceProvisioningTypesError = unknown;

export type SettingsGetVmStatusTypesResponse = TypesItemsDto;

export type SettingsGetVmStatusTypesError = unknown;

export type SettingsGetTicketStatusResponse = TypesItemsDto;

export type SettingsGetTicketStatusError = unknown;

export type SettingsGetExchangeMailboxTypesResponse = TypesItemsDto;

export type SettingsGetExchangeMailboxTypesError = unknown;

export type SettingsGetResourceMailboxTypesResponse = TypesItemsDto;

export type SettingsGetResourceMailboxTypesError = unknown;

export type SettingsGetExchangeMailDomainTypesResponse = TypesItemsDto;

export type SettingsGetExchangeMailDomainTypesError = unknown;

export type SettingsGetExchangeRecpientsTypesResponse = TypesItemsDto;

export type SettingsGetExchangeRecpientsTypesError = unknown;

export type SettingsGetExchangeBlockedDomainRuleRecipientLocationResponse =
  TypesItemsDto;

export type SettingsGetExchangeBlockedDomainRuleRecipientLocationError =
  unknown;

export type SettingsGetPublicFolderTypesResponse = TypesItemsDto;

export type SettingsGetPublicFolderTypesError = unknown;

export type SettingsGetTelephonyOptionsResponse = TypesItemsDto;

export type SettingsGetTelephonyOptionsError = unknown;

export type SettingsGetRoutingMethodsResponse = TypesItemsDto;

export type SettingsGetRoutingMethodsError = unknown;

export type SettingsGetParticipationPolicyResponse = TypesItemsDto;

export type SettingsGetParticipationPolicyError = unknown;

export type SettingsGetResponseGroupCallActionsResponse = TypesItemsDto;

export type SettingsGetResponseGroupCallActionsError = unknown;

export type SettingsGetWorkflowCallActionsResponse = TypesItemsDto;

export type SettingsGetWorkflowCallActionsError = unknown;

export type SettingsGetWorkflowLanguagesResponse = TypesItemsDto;

export type SettingsGetWorkflowLanguagesError = unknown;

export type MessageCenterAddNewMessageData = {
  /**
   * Complete details of message to be added.
   */
  body: MessageDto_Request;
};

export type MessageCenterAddNewMessageResponse = MessageDto;

export type MessageCenterAddNewMessageError = unknown;

export type MessageCenterGetMessageDetailsData = {
  path: {
    /**
     * Give message id to get its details.
     */
    messageId: number;
  };
};

export type MessageCenterGetMessageDetailsResponse = MessageDto;

export type MessageCenterGetMessageDetailsError = unknown;

export type MessageCenterUpdateMessageStatusData = {
  /**
   * Message details to be updated.
   */
  body: MessageDto_Request;
  path: {
    /**
     * Give message id to update message.
     */
    messageId: number;
  };
};

export type MessageCenterUpdateMessageStatusResponse = MessageDto;

export type MessageCenterUpdateMessageStatusError = unknown;

export type MessageCenterDeleteMessageData = {
  path: {
    /**
     * Give message id to delete it.
     */
    messageId: number;
  };
};

export type MessageCenterDeleteMessageResponse = StatusDto;

export type MessageCenterDeleteMessageError = unknown;

export type MessageCenterGetSentMessagesResponse = MessagesDto;

export type MessageCenterGetSentMessagesError = unknown;

export type MessageCenterGetReceivedMessagesResponse = MessagesDto;

export type MessageCenterGetReceivedMessagesError = unknown;

export type MessageCenterMessageRepliesData = {
  path: {
    /**
     * Give message id to get all its replies.
     */
    messageId: number;
  };
};

export type MessageCenterMessageRepliesResponse = MessageRepliesDto;

export type MessageCenterMessageRepliesError = unknown;

export type MessageCenterAddMessageReplyData = {
  /**
   * Complete details of message reply to add.
   */
  body: MessageReplyDto_Request;
  path: {
    /**
     * Message id to reply.
     */
    messageId: string;
  };
};

export type MessageCenterAddMessageReplyResponse = MessageReplyDto;

export type MessageCenterAddMessageReplyError = unknown;

export type TicketsGetAllStatsResponse = TroubleTicketsStatsDto;

export type TicketsGetAllStatsError = unknown;

export type TicketsGetAllTicketsData = {
  query?: {
    /**
     * Give category if you want to search by category. You can get list of categories by calling 'GET /tickets/categories'.
     */
    category?: string;
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * If flag is empty then this method will return all of service providers tickets if set to 'CLIENT' then it will return all your customer's tickets.
     */
    flag?: string;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give subject if you want to search by ticket subject.
     */
    subject?: string;
    /**
     * Give ticket number if you want to search by number.
     */
    ticketNumber?: string;
    /**
     * Give ticketstatus if you want to search by ticket status. You can get list of ticket status by calling 'GET /system-entities/ticket-statuses'.
     */
    ticketStatus?: string;
  };
};

export type TicketsGetAllTicketsResponse = TicketsDto;

export type TicketsGetAllTicketsError = unknown;

export type TicketsAddTicketData = {
  body: TicketDto_Request;
};

export type TicketsAddTicketResponse = TicketDto;

export type TicketsAddTicketError = unknown;

export type TicketsGetTicketDetailData = {
  path: {
    /**
     * Give the id of the ticket whose details are to be retrieved.
     */
    ticketId: number;
  };
};

export type TicketsGetTicketDetailResponse = TicketDto;

export type TicketsGetTicketDetailError = unknown;

export type TicketsUpdateTicketData = {
  /**
   * Complete details of a ticket to update.
   */
  body: TicketDto_Update;
  path: {
    /**
     * The ticket id of the updated ticket.
     */
    ticketId: string;
  };
};

export type TicketsUpdateTicketResponse = TicketDto;

export type TicketsUpdateTicketError = unknown;

export type TicketsDeleteTicketData = {
  path: {
    /**
     * Give ticket id of the ticket to be deleted.
     */
    ticketId: number;
  };
};

export type TicketsDeleteTicketResponse = StatusDto;

export type TicketsDeleteTicketError = unknown;

export type TicketsGetTicketReplyData = {
  path: {
    /**
     * Give the id of the ticket to get all of its replies.
     */
    ticketId: number;
  };
};

export type TicketsGetTicketReplyResponse = TicketResponsesDto;

export type TicketsGetTicketReplyError = unknown;

export type TicketsReplyTicketData = {
  /**
   * complete details of a ticket reply.
   */
  body: TicketResponseDto_Request;
  path: {
    /**
     * The id of the ticket to reply.
     */
    ticketId: number;
  };
};

export type TicketsReplyTicketResponse = TicketResponseDto;

export type TicketsReplyTicketError = unknown;

export type TicketsAddTicketAttachmentData = {
  /**
   * List of files to attach, file size should not increase to 5MB each.
   */
  body: AttachmentsDto_Request;
  path: {
    /**
     * The id of the ticket to add file attachment.
     */
    TicketId: string;
  };
};

export type TicketsAddTicketAttachmentResponse = AttachmentsDto;

export type TicketsAddTicketAttachmentError = unknown;

export type TicketsGetAllAttachmentsData = {
  path: {
    /**
     * The id of the ticket to get file attachments.
     */
    ticketId: number;
  };
};

export type TicketsGetAllAttachmentsResponse = AttachmentsDto;

export type TicketsGetAllAttachmentsError = unknown;

export type TicketsGetAttachmentDetailData = {
  path: {
    /**
     * The id of the attachment to get it's details.
     */
    attachmentId: number;
    /**
     * The id of the ticket to get file attachment.
     */
    ticketId: number;
  };
};

export type TicketsGetAttachmentDetailResponse = AttachmentDto;

export type TicketsGetAttachmentDetailError = unknown;

export type AddOnsGetAllResourcesData = {
  query?: {
    /**
     * Give hosting service if you want to filter according to it.
     */
    hostingService?: string;
    ownerId?: number;
    /**
     * Give providerType if you want to filter according to it. You can get provider types by calling 'GET /providers'.
     */
    providerType?: string;
    /**
     * Give resourceName if you want to filter according to it.
     */
    resourceName?: string;
  };
};

export type AddOnsGetAllResourcesResponse = ResourcesDto;

export type AddOnsGetAllResourcesError = unknown;

export type AddOnsAddResourceData = {
  /**
   * Complete detials to add addon.
   */
  body: AddUpdateResourceDto_Request;
};

export type AddOnsAddResourceResponse = AddUpdateResourceDto;

export type AddOnsAddResourceError = unknown;

export type AddOnsGetResourceDetailsData = {
  path: {
    /**
     * Give the id of addon whose details are to be retrieved.
     */
    addonId: number;
  };
};

export type AddOnsGetResourceDetailsResponse = ResourceDto;

export type AddOnsGetResourceDetailsError = unknown;

export type AddOnsUpdateResourceData = {
  /**
   * Complete detials to update addon.
   */
  body: AddUpdateResourceDto_UpdateRequest;
  path: {
    /**
     * The id of addon to update.
     */
    addonId: number;
  };
};

export type AddOnsUpdateResourceResponse = StatusDto;

export type AddOnsUpdateResourceError = unknown;

export type AddOnsDeleteResourceData = {
  path: {
    /**
     * Give the id of addon to be deleted.
     */
    addonId: number;
  };
};

export type AddOnsDeleteResourceResponse = StatusDto;

export type AddOnsDeleteResourceError = unknown;

export type AddOnsGetBaseOsTypesData = {
  path: {
    /**
     * Give component name to filter according to it.
     */
    componentName: string;
  };
};

export type AddOnsGetBaseOsTypesResponse = ResourceComponentDto;

export type AddOnsGetBaseOsTypesError = unknown;

export type SoldAddOnsGetAllSoldAddOnsData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    ownerId?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give plan id to get its sold addons, you can get plan id by calling 'GET /plans'.
     */
    planId?: number;
    soldAddOnId?: number;
    /**
     * Give sold addon name to get its matching sold addons.
     */
    soldAddOnName?: string;
    /**
     * Give sold plan id to get its sold addons, you can get sold plan id by calling 'GET /sold-plans'.
     */
    soldPlanId?: number;
    /**
     * Give sold plan name to filter sold addons according to it.
     */
    soldPlanName?: string;
    /**
     * Give user name to filter sold addons according to it.
     */
    userName?: string;
  };
};

export type SoldAddOnsGetAllSoldAddOnsResponse = SellAddonsDto;

export type SoldAddOnsGetAllSoldAddOnsError = unknown;

export type SoldAddOnsSellAddOnData = {
  /**
   * Complete details of addon to sell.
   */
  body: SellAddonDto_Request;
};

export type SoldAddOnsSellAddOnResponse = SellAddonDto;

export type SoldAddOnsSellAddOnError = unknown;

export type SoldAddOnsGetSoldAddonDetailsData = {
  path: {
    /**
     * The id of sold addon to get details.
     */
    soldAddOnId: number;
  };
};

export type SoldAddOnsGetSoldAddonDetailsResponse = SoldAddOnDto;

export type SoldAddOnsGetSoldAddonDetailsError = unknown;

export type SoldAddOnsDeleteSoldAddonData = {
  path: {
    /**
     * The id of sold addon to delete.
     */
    soldAddOnId: number;
  };
};

export type SoldAddOnsDeleteSoldAddonResponse = StatusDto;

export type SoldAddOnsDeleteSoldAddonError = unknown;

export type CompositeResourceGetAllCresourcesData = {
  query?: {
    /**
     * Give category name to filter composite resource according to it.
     */
    categoryName?: string;
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give display name to filter composite resource according to it.
     */
    displayName?: string;
    /**
     * Set exactmatch to true if want to match display name exactly.
     */
    exactMatch?: boolean;
    /**
     * Set includeproperties true if want to include properties of composite resources in result.
     */
    includeProperties?: boolean;
    /**
     * Set includepurchased true if want to include purchased composite resources in result.
     */
    includePurchased?: boolean;
    ownerId?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give provider name to filter composite resource according to it.
     */
    providerName?: string;
    /**
     * Give resource component to filter composite resource according to it.
     */
    resourceComponent?: string;
    /**
     * Give resource name to filter composite resource according to it.
     */
    resourceName?: string;
  };
};

export type CompositeResourceGetAllCresourcesResponse = CResourcesDto;

export type CompositeResourceGetAllCresourcesError = unknown;

export type CompositeResourceAddCresourceData = {
  /**
   * Complete details of composite resources to add.
   */
  body: CResourceDto_Request;
};

export type CompositeResourceAddCresourceResponse = CResourceDto;

export type CompositeResourceAddCresourceError = unknown;

export type CompositeResourceGetCresourceDetailsData = {
  path: {
    /**
     * The id of composite resource to get details.
     */
    cResourceId: number;
  };
};

export type CompositeResourceGetCresourceDetailsResponse = CResourceDto;

export type CompositeResourceGetCresourceDetailsError = unknown;

export type CompositeResourceUpdateCresourceData = {
  body: UpdateCResourceDto_Request;
  path: {
    /**
     * The id of composite resource to update.
     */
    cResourceId: number;
  };
};

export type CompositeResourceUpdateCresourceResponse = UpdateCResourceDto;

export type CompositeResourceUpdateCresourceError = unknown;

export type CompositeResourceDeleteCresourceData = {
  path: {
    /**
     * The id of composite resource to delete.
     */
    cResourceId: number;
  };
};

export type CompositeResourceDeleteCresourceResponse = StatusDto;

export type CompositeResourceDeleteCresourceError = unknown;

export type HostingServicesGetAllHostingServicesResponse = HostingServicesDto;

export type HostingServicesGetAllHostingServicesError = unknown;

export type ProvidersGetProviderTypesData = {
  query?: {
    /**
     * Set it true to get only configured providers.
     */
    configuredOnly?: boolean;
    /**
     * Give providertype to filter provider types according to it.
     */
    providerType?: string;
    /**
     * Give rolename to filter provider types according to it, you can get role name by calling 'GET /Server-Roles'.
     */
    roleName?: string;
  };
};

export type ProvidersGetProviderTypesResponse = ProvidersDto;

export type ProvidersGetProviderTypesError = unknown;

export type SoldPlanGetAllSoldPlansData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give dateadded if want to filter sold plans according to it.
     */
    dateAdded?: Date;
    /**
     * Give duesince if want to filter sold plans according to it.
     */
    dueSince?: string;
    /**
     * Give nextinvoicedate if want to filter sold plans according to it.
     */
    nextInvoiceDate?: Date;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give paidstatus if want to filter sold plans according to it.
     */
    paidStatus?: string;
    /**
     * Give searchcriteria if want to filter sold plans according to it.
     */
    paidTillDate?: Date;
    /**
     * The plan id to get filtered sold plans according to it, you can get user id by calling 'GET /plans'
     */
    planId?: number;
    /**
     * The plan name to get filtered sold plans according to it, you can get user id by calling 'GET /plans'
     */
    planName?: string;
    /**
     * Give recurringdurationid if want to filter sold plans according to it, you can get recurring duration by calling 'GET /addons/recurring-durations' .
     */
    recurringDurationId?: number;
    /**
     * Give searchcriteria if want to filter sold plans according to it.
     */
    searchCriteria?: string;
    /**
     * Give search date to filter sold plans according to it and one it will match according to value set in 'searchoperator'.
     */
    searchDate?: Date;
    /**
     * Search operator is flag of integer type to search with date, it has three possible values,'1'(Equal to), '-1'(Less then) and '2'(Greater then).
     */
    searchOperator?: number;
    /**
     * The user id to get filtered sold plans according to it, you can get user id by calling 'GET /panel-users'
     */
    userId?: number;
    /**
     * The user name to get filtered sold plans according to it, you can get user id by calling 'GET /panel-users'
     */
    userName?: string;
  };
};

export type SoldPlanGetAllSoldPlansResponse = SoldPlansDto;

export type SoldPlanGetAllSoldPlansError = unknown;

export type SoldPlanAddSoldPlanData = {
  /**
   * Complete details of a plan to sell.
   */
  body: SellPlanDto_Request;
};

export type SoldPlanAddSoldPlanResponse = SoldPlanDto;

export type SoldPlanAddSoldPlanError = unknown;

export type SoldPlanGetSoldPlanDetailsData = {
  path: {
    /**
     * The sold plan id to get details.
     */
    soldPlanId: number;
  };
};

export type SoldPlanGetSoldPlanDetailsResponse = SoldPlanDto;

export type SoldPlanGetSoldPlanDetailsError = unknown;

export type SoldPlanUpDateSoldPlansData = {
  /**
   * Complete details of plan to update.
   */
  body: SoldPlansIsDisabled_Request;
  path: {
    /**
     * Sold plan id to update.
     */
    soldPlanId: number;
  };
};

export type SoldPlanUpDateSoldPlansResponse = StatusDto;

export type SoldPlanUpDateSoldPlansError = unknown;

export type SoldPlanDeleteSoldPlanData = {
  path: {
    /**
     * The sold plan id to delete.
     */
    soldPlanId: number;
  };
};

export type SoldPlanDeleteSoldPlanResponse = StatusDto;

export type SoldPlanDeleteSoldPlanError = unknown;

export type SubscriptionsGetPurchasedPlanDetailsData = {
  path: {
    /**
     * The sold plan id to get details, you can get sold plan id by calling 'GET /purchased-plans'
     */
    soldPlanId: number;
  };
};

export type SubscriptionsGetPurchasedPlanDetailsResponse = SoldPlanDto;

export type SubscriptionsGetPurchasedPlanDetailsError = unknown;

export type SubscriptionsGetAllPurchasedPlansData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    ownerId?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * The plan name to get filtered subscriptions according to it, you can get user id by calling 'GET /plans'
     */
    planName?: string;
    /**
     * The user id to get filtered subscriptions according to it, you can get user id by calling 'GET /panel-users'
     */
    userId?: number;
  };
};

export type SubscriptionsGetAllPurchasedPlansResponse = SoldPlansDto;

export type SubscriptionsGetAllPurchasedPlansError = unknown;

export type CustomFieldsListAllCustomFieldsData = {
  query?: {
    /**
     * The custom field profileFlag, profileFlag have multiple values 'general' to get general profile fields and 'billing' to get billing profile fields.
     */
    profileFlag?: string;
    /**
     * Give userid to get the custom fields for a specific user, you can get userid by calling 'Get /panel-users'.
     */
    userId?: number;
  };
};

export type CustomFieldsListAllCustomFieldsResponse = CustomFieldsDto;

export type CustomFieldsListAllCustomFieldsError = unknown;

export type TicketsGetAllCategoryResponse = CategoriesDto;

export type TicketsGetAllCategoryError = unknown;

export type DnsListAllDnsZonesData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give DNS zone name to get filtered list of zones according to it.
     */
    dnsZoneName?: string;
    /**
     * Give owner name to get filtered list of zones according to it.
     */
    ownerName?: string;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give user id to get filtered list of zones according to it, you can get user id by calling 'GET /panel-users'.
     */
    userId?: number;
  };
};

export type DnsListAllDnsZonesResponse = DnsZonesDto;

export type DnsListAllDnsZonesError = unknown;

export type DnsAddDnsZoneData = {
  /**
   * Complete details of dns zone to add.
   */
  body: DnsZoneDto_Request;
};

export type DnsAddDnsZoneResponse = DnsZoneDto;

export type DnsAddDnsZoneError = unknown;

export type DnsGetDnsZoneDetailData = {
  path: {
    /**
     * Give dns zone id to update its details, You can get dns zone id by calling 'GET /dns-zones'.
     */
    dnsZoneId: number;
  };
};

export type DnsGetDnsZoneDetailResponse = DnsZoneDto;

export type DnsGetDnsZoneDetailError = unknown;

export type DnsUpdateDnsZoneData = {
  /**
   * Complete details of dns zone to update.
   */
  body: UpdateDnsZoneDto_Request;
  path: {
    /**
     * Give dns zone id to update its details, You can get dns zone id by calling 'GET /dns-zones'.
     */
    dnsZoneId: number;
  };
};

export type DnsUpdateDnsZoneResponse = DnsZoneDto;

export type DnsUpdateDnsZoneError = unknown;

export type DnsDeleteDnsZoneData = {
  path: {
    /**
     * Give dns zone id to update its details, You can get dns zone id by calling 'GET /dns-zones'.
     */
    dnsZoneId: number;
  };
};

export type DnsDeleteDnsZoneResponse = StatusDto;

export type DnsDeleteDnsZoneError = unknown;

export type DatabasesListAllDatabasesData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give database name to get filtered list of databases according to it.
     */
    databaseName?: string;
    /**
     * Give database user id to get filtered list of databases according to it, you can get database user id by calling 'GET /databases/users'.
     */
    databaseUserId?: number;
    /**
     * Give database user name to get filtered list of databases according to it.
     */
    databaseUserName?: string;
    /**
     * flag is optional, set the flag value to 'PERMISSIONS' get permission of a user on databases.
     */
    flag?: string;
    /**
     * Give instance name to get filtered list of databases according to it.
     */
    instanceName?: string;
    /**
     * Give owner name to get filtered list of databases according to it.
     */
    ownerName?: string;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give provider name to get filtered list of databases according to it.
     */
    provider?: string;
    /**
     * Give server role id to get filtered list of databases according to it, you can get server role id by calling 'GET /servers/{serverId}/roles'.
     */
    serverRoleId?: number;
    /**
     * Give user id to get filtered list of databases according to it, you can get user id by calling 'GET /panel-users'.
     */
    userId?: number;
    /**
     * Give website id to get filtered list of databases according to it, you can get website id by calling 'GET /websites'.
     */
    websiteId?: number;
    /**
     * Give website name to get filtered list of databases according to it.
     */
    websiteName?: string;
  };
};

export type DatabasesListAllDatabasesResponse = DatabasesDto;

export type DatabasesListAllDatabasesError = unknown;

export type DatabasesAddDatabaseData = {
  /**
   * Complete details to add database.
   */
  body: DatabaseDto_Request;
};

export type DatabasesAddDatabaseResponse = DatabaseDto;

export type DatabasesAddDatabaseError = unknown;

export type DatabasesListAllDatabaseTasksData = {
  path: {
    /**
     * Give database id to get filtered database task according to it, you can get database id by calling 'GET /databases'.
     */
    databaseId: number;
  };
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Flag have multiple values to get filtered tasks according to it 'backup' for backup type tasks, 'shrink' for shrink type tasks and 'restore' for restore type tasks.
     */
    flag?: string;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
  };
};

export type DatabasesListAllDatabaseTasksResponse = DatabaseTasksDto;

export type DatabasesListAllDatabaseTasksError = unknown;

export type DatabasesBackupDatabaseData = {
  path: {
    /**
     * Give database id to backup, you can get database id by calling 'GET /databases'.
     */
    databaseId: number;
  };
};

export type DatabasesBackupDatabaseResponse = DatabaseTaskDto;

export type DatabasesBackupDatabaseError = unknown;

export type DatabasesShrinkDatabaseData = {
  path: {
    /**
     * Give database id to shrink, you can get database id by calling 'GET /databases'.
     */
    databaseId: number;
  };
};

export type DatabasesShrinkDatabaseResponse = StatusDto;

export type DatabasesShrinkDatabaseError = unknown;

export type DatabasesRestoreDatabaseData = {
  body: RestoreDatabaseDto_Request;
  path: {
    /**
     * Give database id to restore, you can get database id by calling 'GET /databases'.
     */
    databaseId: number;
  };
};

export type DatabasesRestoreDatabaseResponse = DatabaseTaskDto;

export type DatabasesRestoreDatabaseError = unknown;

export type DatabasesGetDatabaseDetailData = {
  path: {
    /**
     * Give database id to get its details, you can get database id by calling 'GET /databases'.
     */
    databaseId: number;
  };
};

export type DatabasesGetDatabaseDetailResponse = DatabaseDto;

export type DatabasesGetDatabaseDetailError = unknown;

export type DatabasesUpdateDatabaseData = {
  /**
   * Complete details of database to update.
   */
  body: UpdateDatabaseDto_Request;
  path: {
    /**
     * Give database id to update its details, you can get database id by calling 'GET /databases'.
     */
    databaseId: number;
  };
};

export type DatabasesUpdateDatabaseResponse = DatabaseDto;

export type DatabasesUpdateDatabaseError = unknown;

export type DatabasesDeleteDatabaseData = {
  path: {
    /**
     * Give database id to delete, you can get database id by calling 'GET /databases'.
     */
    databaseId: number;
  };
};

export type DatabasesDeleteDatabaseResponse = StatusDto;

export type DatabasesDeleteDatabaseError = unknown;

export type DatabasesAssignUserstoDatabaseData = {
  body: AssignUserstoDatabaseDto_Request;
  path: {
    /**
     * Give database id to assign databases, you can get database id by calling 'GET /databases'.
     */
    databaseId: number;
  };
};

export type DatabasesAssignUserstoDatabaseResponse = StatusDto;

export type DatabasesAssignUserstoDatabaseError = unknown;

export type DatabasesTestDatabaseConnectivityData = {
  body: DatabaseConnectivityDto_Request;
  path: {
    /**
     * Give database id to test database connectivity, you can get database id by calling 'GET /databases'.
     */
    databaseId: number;
  };
};

export type DatabasesTestDatabaseConnectivityResponse = StatusDto;

export type DatabasesTestDatabaseConnectivityError = unknown;

export type DatabasesListAllDatabaseUsersData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give database user name to get filtered list of database users according to it.
     */
    databaseUserName?: string;
    /**
     * flag is optional, set the flag value to 'PERMISSIONS' get permission of database on users.
     */
    flag?: string;
    /**
     * Give instance name to get filtered list of database users according to it.
     */
    instanceName?: string;
    /**
     * Give owner id to get filtered list of database users according to it, you can get owner id by calling '/GET panel-users'.
     */
    ownerId?: number;
    /**
     * Give owner name to get filtered list of database users according to it.
     */
    ownerName?: string;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give provider name to get filtered list of database users according to it.
     */
    provider?: string;
    /**
     * Give server role id to get filtered list of database users according to it, you can get server role id by calling 'GET /servers/{serverId}/roles'.
     */
    serverRoleId?: number;
    /**
     * Give user id to get filtered list of database users according to it, you can get user id by calling 'GET /panel-users'.
     */
    userId?: number;
  };
};

export type DatabasesListAllDatabaseUsersResponse = DatabaseUsersDto;

export type DatabasesListAllDatabaseUsersError = unknown;

export type DatabasesAddDatabaseUserData = {
  body: DatabaseUserDto_Request;
};

export type DatabasesAddDatabaseUserResponse = StatusDto;

export type DatabasesAddDatabaseUserError = unknown;

export type DatabasesGetDatabasesAssignedUserData = {
  path: {
    /**
     * Give database id to get all its assigned database users.
     */
    databaseId: number;
  };
};

export type DatabasesGetDatabasesAssignedUserResponse = DatabaseUsersDto;

export type DatabasesGetDatabasesAssignedUserError = unknown;

export type DatabasesGetUsersAssignedDatabaseData = {
  path: {
    /**
     * Give database user id to get filtered list of assigned databases according to it, you can get database user id by calling 'GET /databases/users'.
     */
    databaseUserId: number;
  };
};

export type DatabasesGetUsersAssignedDatabaseResponse = DatabasesDto;

export type DatabasesGetUsersAssignedDatabaseError = unknown;

export type DatabasesGetDatabaseUserDetailData = {
  path: {
    /**
     * Give database user id to get its details, you can get database user id by calling 'GET /databases/users'.
     */
    databaseUserId: number;
  };
};

export type DatabasesGetDatabaseUserDetailResponse = DatabaseUserDto;

export type DatabasesGetDatabaseUserDetailError = unknown;

export type DatabasesDeleteDatabaseUserData = {
  path: {
    /**
     * Give database user id to delete database user, you can get database user id by calling 'GET /databases/users'.
     */
    databaseUserId: number;
  };
};

export type DatabasesDeleteDatabaseUserResponse = StatusDto;

export type DatabasesDeleteDatabaseUserError = unknown;

export type DatabasesChangePasswordData = {
  body: UpdateDatabaseUserDto_Request;
  path: {
    /**
     * Give database user id to change its password, you can get database user id by calling 'GET /databases/users'.
     */
    databaseUserId: number;
  };
};

export type DatabasesChangePasswordResponse = StatusDto;

export type DatabasesChangePasswordError = unknown;

export type DatabasesAssignDatabasestoUserData = {
  body: AssignDatabasestoUserDto_Request;
  path: {
    /**
     * Give database user id to assign databases, you can get database user id by calling 'GET /databases/users'.
     */
    databaseUserId: number;
  };
};

export type DatabasesAssignDatabasestoUserResponse = StatusDto;

export type DatabasesAssignDatabasestoUserError = unknown;

export type MailDomainsListAllMailDomainsData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give mail domain name to get filtered mail domains according to it.
     */
    mailDomainName?: string;
    /**
     * Set it true to get mailonly mail domains.
     */
    mailOnly?: boolean;
    /**
     * Give owner name to get filtered list of mail domains according to it.
     */
    ownerName?: string;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give provider name to get filtered list of mail domains according to it.
     */
    providerName?: string;
    /**
     * Give user id to get filtered list of mail domains according to it, you can get user id by calling 'GET /panel-users'.
     */
    userId?: number;
    /**
     * Give website id to get filtered list of mail domains according to it, you can get user id by calling 'GET /websites'.
     */
    websiteid?: number;
    /**
     * Give website name to get filtered list of mail domains according to it.
     */
    websiteName?: string;
  };
};

export type MailDomainsListAllMailDomainsResponse = MailDomainsDto;

export type MailDomainsListAllMailDomainsError = unknown;

export type MailDomainsAddMailDomainData = {
  body: MailDomainDto_Request;
};

export type MailDomainsAddMailDomainResponse = MailDomainDto;

export type MailDomainsAddMailDomainError = unknown;

export type MailDomainsGetMailDomainDetailData = {
  path: {
    /**
     * Give mail domain id to get its details, you can get mail domain id by calling 'GET /mail-domains'.
     */
    mailDomainId: number;
  };
};

export type MailDomainsGetMailDomainDetailResponse = MailDomainDto;

export type MailDomainsGetMailDomainDetailError = unknown;

export type MailDomainsDeleteMailDomainData = {
  path: {
    /**
     * Give mail domain id to delete, you can get mail domain id by calling 'GET /mail-domains'.
     */
    mailDomainId: number;
  };
};

export type MailDomainsDeleteMailDomainResponse = StatusDto;

export type MailDomainsDeleteMailDomainError = unknown;

export type MailDomainsListAllMailBoxesData = {
  path: {
    /**
     * Give mail domain id to get its mailboxes, you can get mail domain id by calling 'GET /mail-domains'.
     */
    mailDomainId: number;
  };
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give mailbox name to get filtered mailboxes according to it.
     */
    mailBoxName?: string;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
  };
};

export type MailDomainsListAllMailBoxesResponse = MailBoxesDto;

export type MailDomainsListAllMailBoxesError = unknown;

export type MailDomainsAddMailBoxData = {
  body: MailBoxDto_Request;
  path: {
    /**
     * Give mail domain id to add mailbox, you can get mail domain id by calling 'GET /mail-domains'.
     */
    mailDomainId: number;
  };
};

export type MailDomainsAddMailBoxResponse = MailBoxDto;

export type MailDomainsAddMailBoxError = unknown;

export type MailDomainsGetMailBoxDetailData = {
  path: {
    /**
     * Give mailbox id to get mailbox details, you can get mailbox id by calling 'GET /mail-domains/{mailDomainId}/mailboxes'.
     */
    mailBoxId: number;
    /**
     * Give mail domain id to get mailbox details, you can get mail domain id by calling 'GET /mail-domains'.
     */
    mailDomainId: number;
  };
};

export type MailDomainsGetMailBoxDetailResponse = MailBoxDto;

export type MailDomainsGetMailBoxDetailError = unknown;

export type MailDomainsUpdateMailBoxData = {
  body: UpdateMailBoxDto_Request;
  path: {
    /**
     * Give mailbox id to update mailbox, you can get mailbox id by calling 'GET /mail-domains/{mailDomainId}/mailboxes'.
     */
    mailBoxId: number;
    /**
     * Give mail domain id to update mailbox, you can get mail domain id by calling 'GET /mail-domains'.
     */
    mailDomainId: number;
  };
};

export type MailDomainsUpdateMailBoxResponse = MailBoxDto;

export type MailDomainsUpdateMailBoxError = unknown;

export type MailDomainsDeleteMailBoxData = {
  path: {
    /**
     * Give mailbox id to delete mailbox, you can get mailbox id by calling 'GET /mail-domains/{mailDomainId}/mailboxes'.
     */
    mailBoxId: number;
    /**
     * Give mail domain id to delete mailbox, you can get mail domain id by calling 'GET /mail-domains'.
     */
    mailDomainId: number;
  };
};

export type MailDomainsDeleteMailBoxResponse = StatusDto;

export type MailDomainsDeleteMailBoxError = unknown;

export type MailDomainsListAllEmailAddressesData = {
  path: {
    /**
     * Give mailbox id to get list of email aliases, you can get mailbox id by calling 'GET /mail-domains/{mailDomainId}/mailboxes'.
     */
    mailBoxId: number;
    /**
     * Give mail domain id to get list of email aliases, you can get mail domain id by calling 'GET /mail-domains'.
     */
    mailDomainId: number;
  };
  query?: {
    /**
     * Give mailbox name to get filtered list of email aliases according to it.
     */
    mailBoxName?: string;
  };
};

export type MailDomainsListAllEmailAddressesResponse = MailboxAliasesDto;

export type MailDomainsListAllEmailAddressesError = unknown;

export type MailDomainsAddEmailAddressData = {
  body: MailboxAliasDto_Request;
  path: {
    /**
     * Give mailbox id to add email alias, you can get mailbox id by calling 'GET /mail-domains/{mailDomainId}/mailboxes'.
     */
    mailBoxId: number;
    /**
     * Give mail domain id to add email alias, you can get mail domain id by calling 'GET /mail-domains'.
     */
    mailDomainId: number;
  };
};

export type MailDomainsAddEmailAddressResponse = StatusDto;

export type MailDomainsAddEmailAddressError = unknown;

export type MailDomainsDeleteEmailAddressData = {
  path: {
    /**
     * Give email address to delete.
     */
    emailAddress: string;
    /**
     * Give mailbox id to delete email alias, you can get mailbox id by calling 'GET /mail-domains/{mailDomainId}/mailboxes'.
     */
    mailBoxId: number;
    /**
     * Give mail domain id to delete email alias, you can get mail domain id by calling 'GET /mail-domains'.
     */
    mailDomainId: number;
  };
};

export type MailDomainsDeleteEmailAddressResponse = StatusDto;

export type MailDomainsDeleteEmailAddressError = unknown;

export type MailDomainsListAllDistributionListData = {
  path: {
    /**
     * Give mail domain id to get all distribution list, you can get mail domain id by calling 'GET /mail-domains'.
     */
    mailDomainId: number;
  };
};

export type MailDomainsListAllDistributionListResponse = DistributionListsDto;

export type MailDomainsListAllDistributionListError = unknown;

export type MailDomainsAddDistributionListData = {
  body: DistributionListDto_Request;
  path: {
    /**
     * Give mail domain id to add distribution list, you can get mail domain id by calling 'GET /mail-domains'.
     */
    mailDomainId: number;
  };
};

export type MailDomainsAddDistributionListResponse = DistributionListDto;

export type MailDomainsAddDistributionListError = unknown;

export type MailDomainsGetDistributionListDetailData = {
  path: {
    /**
     * Give list name to get distribution list details.
     */
    listName: string;
    /**
     * Give mail domain id to get distribution list details, you can get mail domain id by calling 'GET /mail-domains'.
     */
    mailDomainId: number;
  };
};

export type MailDomainsGetDistributionListDetailResponse =
  DistributionListMembersDto;

export type MailDomainsGetDistributionListDetailError = unknown;

export type MailDomainsUpdateDistributionListData = {
  body: DistributionListDto_Update;
  path: {
    /**
     * Give list name to update its details.
     */
    listName: string;
    /**
     * Give mail domain id to update distribution list, you can get mail domain id by calling 'GET /mail-domains'.
     */
    mailDomainId: number;
  };
};

export type MailDomainsUpdateDistributionListResponse = StatusDto;

export type MailDomainsUpdateDistributionListError = unknown;

export type MailDomainsDeleteDistributionListData = {
  path: {
    /**
     * Give list name to delete.
     */
    listName: string;
    /**
     * Give mail domain id to delete distribution list, you can get mail domain id by calling 'GET /mail-domains'.
     */
    mailDomainId: number;
  };
};

export type MailDomainsDeleteDistributionListResponse = StatusDto;

export type MailDomainsDeleteDistributionListError = unknown;

export type WebsiteIoGetAllFilesAndFoldersData = {
  path: {
    /**
     * Give website id to get filtered files and folders according to it, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
  query?: {
    /**
     * Give base path to get filtered files and folders according to it.
     */
    basePath?: string;
    /**
     * Set it true to skip files in response.
     */
    skipFiles?: boolean;
  };
};

export type WebsiteIoGetAllFilesAndFoldersResponse = FileFoldersDto;

export type WebsiteIoGetAllFilesAndFoldersError = unknown;

export type WebsiteIoUploadData = {
  body: WebsiteFileUploadDto;
  path: {
    /**
     * Give website id to upload file, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsiteIoUploadResponse = StatusDto;

export type WebsiteIoUploadError = unknown;

export type WebsiteIoDeleteData = {
  path: {
    /**
     * Give website id to delete, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
  query: {
    /**
     * Give base path to delete files and folders according to it.
     */
    basePath?: string;
    objectName: string;
  };
};

export type WebsiteIoDeleteResponse = StatusDto;

export type WebsiteIoDeleteError = unknown;

export type WebsiteIoCreateData = {
  body: WebsiteIoDto;
  path: {
    /**
     * Give website id to create, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsiteIoCreateResponse = StatusDto;

export type WebsiteIoCreateError = unknown;

export type WebsiteIoDownloadData = {
  path: {
    /**
     * Give website id to download, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
  query: {
    /**
     * Give base path to download filtered files and folders according to it.
     */
    basePath?: string;
    /**
     * Give binary to download files and folders according to it.
     */
    binary?: boolean;
    /**
     * Give object name to download files and folders according to it.
     */
    objectName: string;
  };
};

export type WebsiteIoDownloadResponse = FileContentOutDto;

export type WebsiteIoDownloadError = unknown;

export type WebsiteIoUpdateData = {
  body: WebsiteFileContentDto;
  path: {
    /**
     * Give website id to update, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsiteIoUpdateResponse = StatusDto;

export type WebsiteIoUpdateError = unknown;

export type WebsiteIoRenameData = {
  body: WebsiteObjectRenameDto;
  path: {
    /**
     * Give website id to rename, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsiteIoRenameResponse = StatusDto;

export type WebsiteIoRenameError = unknown;

export type WebsiteIoZipData = {
  body: WebsiteFilesZipDto;
  path: {
    /**
     * Give website id to zip, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsiteIoZipResponse = StatusDto;

export type WebsiteIoZipError = unknown;

export type WebsiteIoUnzipData = {
  body: WebsiteIoDto;
  path: {
    /**
     * Give website id to unzip, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsiteIoUnzipResponse = StatusDto;

export type WebsiteIoUnzipError = unknown;

export type WebsiteIoGetAclPermissionData = {
  path: {
    /**
     * Give website id to get acl permissions, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
  query: {
    /**
     * Delete is a permission type.
     */
    delete?: boolean;
    /**
     * Execute is a permission type.
     */
    execute?: boolean;
    finalPermission?: string;
    /**
     * Folder path is the complete address of folder
     */
    folderPath: string;
    /**
     * Fullcontrol is a permission type.
     */
    fullControl?: boolean;
    inheritence: string;
    /**
     * Modify is a permission type.
     */
    modify?: boolean;
    operation: string;
    /**
     * Read is a permission type.
     */
    read?: boolean;
    trustee: string;
    /**
     * List of users to assign permissions, you can get users by calling 'GET /panel-users'.
     */
    users?: Array<string>;
    /**
     * Write is a permission type.
     */
    write?: boolean;
  };
};

export type WebsiteIoGetAclPermissionResponse = UserPermissionsDto;

export type WebsiteIoGetAclPermissionError = unknown;

export type WebsiteIoSetAclPermissionData = {
  body: PermissionsDto_Request;
  path: {
    /**
     * Give website id to set acl permission, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsiteIoSetAclPermissionResponse = ReturnPermissionsStatusDto;

export type WebsiteIoSetAclPermissionError = unknown;

export type WebsitesGetAllWebsitesData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Set true if want to match the provided website name exactly.
     */
    exactNameMatch?: boolean;
    /**
     * Set isNameBasedSites to 1 to get filtered websites according to it.
     */
    isNameBasedSites?: number;
    /**
     * Set isSubDomainSites to 1 to get filtered websites according to it.
     */
    isSubDomainSites?: number;
    /**
     * Give owner id to get filtered websites according to it, you can get owner id by calling 'GET /panel-users'.
     */
    ownerId?: number;
    /**
     * Give owner name to get filtered websites according to it.
     */
    ownerName?: string;
    /**
     * Set true if want to get owner only websites.
     */
    ownerOnlyWebsites?: boolean;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give search date to filter sold plans according to it and one it will match according to value set in 'searchoperator'.
     */
    searchDate?: Date;
    /**
     * Search operator is flag of type integer to search with date, it has three possible values,'1'(on), '-1'(Before) and '2'(After).
     */
    searchOperator?: number;
    /**
     * Give server id to get the filtered websites list according to it, you can get server id by calling 'GET /servers'.
     */
    serverId?: number;
    /**
     * Give website name to get filtered websites according to it.
     */
    websiteName?: string;
  };
};

export type WebsitesGetAllWebsitesResponse = WebsitesDto;

export type WebsitesGetAllWebsitesError = unknown;

export type WebsitesAddWebsiteData = {
  body: WebsiteDto_Request;
};

export type WebsitesAddWebsiteResponse = WebsiteDto;

export type WebsitesAddWebsiteError = unknown;

export type WebsitesGetWebsiteDetailsData = {
  path: {
    /**
     * Give website id to get details, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesGetWebsiteDetailsResponse = WebsiteDto;

export type WebsitesGetWebsiteDetailsError = unknown;

export type WebsitesEditWebsiteData = {
  body: WebsiteUpdateDto;
  path: {
    /**
     * Give website id to get details, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesEditWebsiteResponse = WebsiteDto;

export type WebsitesEditWebsiteError = unknown;

export type WebsitesDeleteWebsiteData = {
  path: {
    /**
     * Give website id to delete, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesDeleteWebsiteResponse = StatusDto;

export type WebsitesDeleteWebsiteError = unknown;

export type WebsitesStartSiteData = {
  path: {
    /**
     * Give website id to start site, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesStartSiteResponse = StatusDto;

export type WebsitesStartSiteError = unknown;

export type WebsitesStopSiteData = {
  path: {
    /**
     * Give website id to stop, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesStopSiteResponse = StatusDto;

export type WebsitesStopSiteError = unknown;

export type WebsitesEnableStatsData = {
  path: {
    /**
     * Give website id to enable summary, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesEnableStatsResponse = StatusDto;

export type WebsitesEnableStatsError = unknown;

export type WebsitesDisableStatsData = {
  path: {
    /**
     * Give website id to disable summary, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesDisableStatsResponse = StatusDto;

export type WebsitesDisableStatsError = unknown;

export type WebsitesViewStatsData = {
  path: {
    /**
     * Give website id to view summary, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesViewStatsResponse = ViewStatsDto;

export type WebsitesViewStatsError = unknown;

export type WebsitesGetAllSharedSslsData = {
  path: {
    /**
     * Give website id to get all shared ssl, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesGetAllSharedSslsResponse = SslsDto;

export type WebsitesGetAllSharedSslsError = unknown;

export type WebsitesAddSharedSslData = {
  body: SslDto_Request;
  path: {
    /**
     * Give website id to add shared ssl, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesAddSharedSslResponse = StatusDto;

export type WebsitesAddSharedSslError = unknown;

export type WebsitesDeleteSharedSslData = {
  path: {
    /**
     * Give ssl id to delete, you can get ssl id by calling 'GET /websites/{websiteId}/shared-ssl'.
     */
    sslId: number;
    /**
     * Give website id to delete shared ssl, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesDeleteSharedSslResponse = StatusDto;

export type WebsitesDeleteSharedSslError = unknown;

export type WebsitesUpdateIpAddressData = {
  body: IPAddressDto_Request;
  path: {
    /**
     * Give website id to update IP address, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesUpdateIpAddressResponse = StatusDto;

export type WebsitesUpdateIpAddressError = unknown;

export type WebsitesGetAllParkedDomainsData = {
  path: {
    /**
     * Give website id to get list of parked domains, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesGetAllParkedDomainsResponse = ParkedDomainsDto;

export type WebsitesGetAllParkedDomainsError = unknown;

export type WebsitesAddParkedDomainData = {
  body: ParkedDomainDto_Request;
  path: {
    /**
     * Give website id to add parked domain, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesAddParkedDomainResponse = ParkedDomainDto;

export type WebsitesAddParkedDomainError = unknown;

export type WebsitesDeleteParkedDomainData = {
  path: {
    /**
     * Give parked domain id to delete parked domain, you can get parked domain id by calling 'GET /websites/{websiteId}/parked-domains'.
     */
    parkedDomainId: number;
    /**
     * Give website id to delete parked domain, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesDeleteParkedDomainResponse = StatusDto;

export type WebsitesDeleteParkedDomainError = unknown;

export type WebsitesGetAllHostHeadersData = {
  path: {
    /**
     * Give website id to get list of host headers, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesGetAllHostHeadersResponse = HostHeadersDto;

export type WebsitesGetAllHostHeadersError = unknown;

export type WebsitesAddHostHeaderData = {
  body: HostHeaderDto_Request;
  path: {
    /**
     * Give website id to add host header, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesAddHostHeaderResponse = StatusDto;

export type WebsitesAddHostHeaderError = unknown;

export type WebsitesDeleteHostHeaderData = {
  path: {
    /**
     * Give host header name to delete host header.
     */
    hostHeaderName: string;
    /**
     * Give website id to delete host header, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesDeleteHostHeaderResponse = StatusDto;

export type WebsitesDeleteHostHeaderError = unknown;

export type WebsitesGetAllVirtualDirectoriesData = {
  path: {
    /**
     * Give website id to get list of virtual directories, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesGetAllVirtualDirectoriesResponse = VirtualDirectoriesDto;

export type WebsitesGetAllVirtualDirectoriesError = unknown;

export type WebsitesUpdateVirtualDirectoryData = {
  body: VirtualDirectoryDto_Request;
  path: {
    /**
     * Give website id to update virtual directory, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesUpdateVirtualDirectoryResponse = StatusDto;

export type WebsitesUpdateVirtualDirectoryError = unknown;

export type WebsitesAddVirtualDirectoryData = {
  body: VirtualDirectoryDto_Request;
  path: {
    /**
     * Give website id to add virtual directory, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesAddVirtualDirectoryResponse = StatusDto;

export type WebsitesAddVirtualDirectoryError = unknown;

export type WebsitesGetVirtualDirectoryDetailsData = {
  path: {
    /**
     * Give virtual directory name to get details.
     */
    virtualDirectoryName: string;
    /**
     * Give website id to get virtual directory details, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesGetVirtualDirectoryDetailsResponse = VirtualDirectoryDto;

export type WebsitesGetVirtualDirectoryDetailsError = unknown;

export type WebsitesDeleteVirtualDirectoryData = {
  path: {
    /**
     * Give virtual directory name to delete.
     */
    virtualDirectoryName: string;
    /**
     * Give website id to delete virtual directory, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesDeleteVirtualDirectoryResponse = StatusDto;

export type WebsitesDeleteVirtualDirectoryError = unknown;

export type WebsitesChangeSysUserPasswordData = {
  body: SysUserChangePasswordDto_Request;
  path: {
    /**
     * Give website id to change virtual directory user password, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesChangeSysUserPasswordResponse = StatusDto;

export type WebsitesChangeSysUserPasswordError = unknown;

export type WebsitesGetApplicationPoolProcessInfoData = {
  path: {
    /**
     * Give application pool name to get its process information.
     */
    appPoolName: string;
    /**
     * Give website id to get application pool process informaion, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesGetApplicationPoolProcessInfoResponse =
  ApplicationPoolProcessInfoDto;

export type WebsitesGetApplicationPoolProcessInfoError = unknown;

export type WebsitesGetUrlRedirectionSettingsData = {
  path: {
    /**
     * Give website id to get url redirection settings, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesGetUrlRedirectionSettingsResponse = UrlRedirectionDto;

export type WebsitesGetUrlRedirectionSettingsError = unknown;

export type WebsitesSaveUrlRedirectionSettingsData = {
  body: UrlRedirectionDto_Request;
  path: {
    /**
     * Give website id to save url redirection settings, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesSaveUrlRedirectionSettingsResponse = StatusDto;

export type WebsitesSaveUrlRedirectionSettingsError = unknown;

export type WebsitesGetAccessPermissionsSettingsData = {
  path: {
    /**
     * Give website id to get access permissions settings, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesGetAccessPermissionsSettingsResponse = AccessPermissionDto;

export type WebsitesGetAccessPermissionsSettingsError = unknown;

export type WebsitesSaveAccessPermissionsSettingsData = {
  body: AccessPermissionDto_Request;
  path: {
    /**
     * Give website id to save access permissions settings, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesSaveAccessPermissionsSettingsResponse = StatusDto;

export type WebsitesSaveAccessPermissionsSettingsError = unknown;

export type WebsitesGetCustomErrorsListData = {
  path: {
    /**
     * Give website id to get list of custom errors, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesGetCustomErrorsListResponse = CustomErrorsDto;

export type WebsitesGetCustomErrorsListError = unknown;

export type WebsitesUpdateCustomErrorsData = {
  body: CustomErrorDto_Request;
  path: {
    /**
     * Give website id to update custom errors, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesUpdateCustomErrorsResponse = StatusDto;

export type WebsitesUpdateCustomErrorsError = unknown;

export type WebsitesListAllFtpUsersData = {
  path: {
    /**
     * Give website id to get list of FTP users, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give permitted path to get filtered list of FTP users according to it.
     */
    permittedPath?: string;
    /**
     * Give server id to get filtered list of FTP users according to it, you can get server id by calling 'GET /servers'.
     */
    serverId?: number;
    /**
     * Give user id to get filtered list of FTP users according to it, you can get user id by calling 'GET /panel-users'.
     */
    userId?: number;
  };
};

export type WebsitesListAllFtpUsersResponse = FtpUsersDto;

export type WebsitesListAllFtpUsersError = unknown;

export type WebsitesAddFtpUserData = {
  body: FtpUserDto_Request;
  path: {
    /**
     * Give website id to add FTP user, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesAddFtpUserResponse = FtpUserDto;

export type WebsitesAddFtpUserError = unknown;

export type WebsitesGetFtpUserDetailData = {
  path: {
    /**
     * Give FTP user id to get its details, you can get FTP user id by calling 'GET /websites/{websiteId}/ftp-users'.
     */
    ftpUserId: number;
    /**
     * Give website id to get FTP user details, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesGetFtpUserDetailResponse = FtpUserDto;

export type WebsitesGetFtpUserDetailError = unknown;

export type WebsitesUpdateFtpUserPasswordData = {
  body: UpdateFtpUserPasswordDto_Request;
  path: {
    /**
     * Give FTP user id to update FTP user password, you can get FTP user id by calling 'GET /websites/{websiteId}/ftp-users'.
     */
    ftpUserId: number;
    /**
     * Give website id to update FTP user password, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesUpdateFtpUserPasswordResponse = StatusDto;

export type WebsitesUpdateFtpUserPasswordError = unknown;

export type WebsitesDeleteFtpUserData = {
  path: {
    /**
     * Give FTP user id to delete, you can get FTP user id by calling 'GET /websites/{websiteId}/ftp-users'.
     */
    ftpUserId: number;
    /**
     * Give website id to delete FTP user, you can get website id by calling 'GET /websites'.
     */
    websiteId: string;
  };
};

export type WebsitesDeleteFtpUserResponse = StatusDto;

export type WebsitesDeleteFtpUserError = unknown;

export type WebsitesUpdateFtpUserStatusData = {
  body: UpdateFtpUserStatusDto_Request;
  path: {
    /**
     * Give FTP user id to update FTP user status, you can get FTP user id by calling 'GET /websites/{websiteId}/ftp-users'.
     */
    ftpUserId: number;
    /**
     * Give website id to update FTP user status, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesUpdateFtpUserStatusResponse = StatusDto;

export type WebsitesUpdateFtpUserStatusError = unknown;

export type WebsitesUpdateFtpUserPermissionData = {
  body: UpdateFtpUserPermissionDto_Request;
  path: {
    /**
     * Give FTP user id to update FTP user permissions, you can get FTP user id by calling 'GET /websites/{websiteId}/ftp-users'.
     */
    ftpUserId: number;
    /**
     * Give website id to update FTP user permissions, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesUpdateFtpUserPermissionResponse = StatusDto;

export type WebsitesUpdateFtpUserPermissionError = unknown;

export type WebsitesGetDotNetInstalledVersionsData = {
  path: {
    /**
     * Give website id to get dot net installed version, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
  query?: {
    /**
     * Give virtual directory name to get dot net installed version.
     */
    vdirName?: string;
  };
};

export type WebsitesGetDotNetInstalledVersionsResponse =
  DotNetInstalledVersionsDto;

export type WebsitesGetDotNetInstalledVersionsError = unknown;

export type WebsitesScriptingData = {
  body: ScriptingInputModel;
  path: {
    /**
     * Scripting type is a flag, its possible values are 'dotnet','php','perl' and 'coldfusion'.
     */
    scriptingType: string;
    /**
     * Give website id to update scripting, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesScriptingResponse = StatusDto;

export type WebsitesScriptingError = unknown;

export type WebsitesRecycleWebsiteApplicationPoolData = {
  path: {
    /**
     * Give website id to recycle application pool, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesRecycleWebsiteApplicationPoolResponse = StatusDto;

export type WebsitesRecycleWebsiteApplicationPoolError = unknown;

export type WebsitesRestoreDefaultData = {
  path: {
    /**
     * Give website id to restore default, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesRestoreDefaultResponse = StatusDto;

export type WebsitesRestoreDefaultError = unknown;

export type WebsitesGetSystemUsersData = {
  path: {
    /**
     * Give website id to get system users, you can get website id by calling 'GET /websites'.
     */
    websiteId: number;
  };
};

export type WebsitesGetSystemUsersResponse = SystemUsersDto;

export type WebsitesGetSystemUsersError = unknown;

export type RolesGetRolesData = {
  query?: {
    /**
     * Set clusterEnabled to true to get list of enabled roles only.
     */
    clusterEnabled?: boolean;
  };
};

export type RolesGetRolesResponse = RolesDto;

export type RolesGetRolesError = unknown;

export type RolesGetServerRolesData = {
  path: {
    /**
     * Give server id to get filtered list of server roles according to it, you can get server id by calling 'GET /servers'.
     */
    serverId: number;
  };
};

export type RolesGetServerRolesResponse = ServerRolesDto;

export type RolesGetServerRolesError = unknown;

export type RolesGetAllServersData = {
  query?: {
    /**
     * Set configuredOnly to true to get list of configured servers only.
     */
    configuredOnly?: boolean;
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give server role name to get filtered list of servers according to it.
     */
    serverRole?: string;
    /**
     * Give system name to get filtered list of servers according to it.
     */
    systemName?: string;
  };
};

export type RolesGetAllServersResponse = ServersDto;

export type RolesGetAllServersError = unknown;

export type PlanGetAllPlansData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give display name to filter service plan according to it.
     */
    displayName?: string;
    /**
     * Set it true to match display name exactly.
     */
    exactMatch?: boolean;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
  };
};

export type PlanGetAllPlansResponse = PlansDto;

export type PlanGetAllPlansError = unknown;

export type PlanAddPlanData = {
  body: PlanDto_Request;
};

export type PlanAddPlanResponse = PlanDto;

export type PlanAddPlanError = unknown;

export type PlanGetPlanDetailsData = {
  path: {
    /**
     * Give plan id to get its details, you can get plan id by calling 'GET /plans'.
     */
    planId: number;
  };
};

export type PlanGetPlanDetailsResponse = PlanDto;

export type PlanGetPlanDetailsError = unknown;

export type PlanUpdatePlanData = {
  body: PlanDto_Request;
  path: {
    /**
     * Give plan id to update its details according to it, you can get plan id by calling 'GET /plans'.
     */
    planId: number;
  };
  query?: {
    updateType?: string;
  };
};

export type PlanUpdatePlanResponse = PlanDto;

export type PlanUpdatePlanError = unknown;

export type PlanDeletePlanData = {
  path: {
    /**
     * Give plan id of the service plan to be deleted, you can get plan id by calling 'GET /plans'.
     */
    planId: number;
  };
};

export type PlanDeletePlanResponse = StatusDto;

export type PlanDeletePlanError = unknown;

export type OrganizationsGetAllOrganizationsData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Flag is optional it can be null, its possible value is 'UserOnly' with this value it will return direct children only.
     */
    flag?: string;
    /**
     * Give mail server type to get filtered list of organizations according to it.
     */
    mailServerType?: string;
    /**
     * Give owner id to get filtered list of organizations according to it, you can get owner id by calling 'GET /panel-users'.
     */
    ownerId?: number;
    /**
     * Give owner name to get filtered list of organizations according to it.
     */
    ownerName?: string;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give server role id to get filtered list of organizations according to it, you can get server role id by calling 'GET /servers/{serverId}/roles'.
     */
    serverRoleId?: number;
    /**
     * Give organization system name to get filtered list of organizations according to it.
     */
    systemName?: string;
  };
};

export type OrganizationsGetAllOrganizationsResponse = OrganizationsDto;

export type OrganizationsGetAllOrganizationsError = unknown;

export type OrganizationsGetOrganizationDetailsData = {
  path: {
    /**
     * Give organization id to get its details, you can get organization id by calling 'GET /organizations/exchange'.
     */
    organizationId: number;
  };
};

export type OrganizationsGetOrganizationDetailsResponse = OrganizationDto;

export type OrganizationsGetOrganizationDetailsError = unknown;

export type OrganizationsGetAllExchangeOrganizationsData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Flag is optional it can be null, its possible value is 'UserOnly' with this value it will return direct children only.
     */
    flag?: string;
    /**
     * Give mail server type to get filtered list of exchange organizations according to it, its possible values 'exchange2013' and 'exchange2016'.
     */
    mailServerType?: string;
    /**
     * Give owner id to get filtered list of exchange organizations according to it, you can get owner id by calling 'GET /panel-users'.
     */
    ownerId?: number;
    /**
     * Give owner name to get filtered list of exchange organizations according to it.
     */
    ownerName?: string;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give server role id to get filtered list of exchange organizations according to it, you can get server role id by calling 'GET /servers/{serverId}/roles'.
     */
    serverRoleId?: number;
    /**
     * Give organization system name to get filtered list of exchange organizations according to it.
     */
    systemName?: string;
  };
};

export type OrganizationsGetAllExchangeOrganizationsResponse = OrganizationsDto;

export type OrganizationsGetAllExchangeOrganizationsError = unknown;

export type OrganizationsAddExchangeOrganizationData = {
  body: OrganizationDto_Add;
};

export type OrganizationsAddExchangeOrganizationResponse = OrganizationDto;

export type OrganizationsAddExchangeOrganizationError = unknown;

export type OrganizationsDeleteExchangeOrganizationData = {
  path: {
    /**
     * Give organization id to delete, you can get organization id by calling 'GET /organizations/exchange'.
     */
    organizationId: number;
  };
};

export type OrganizationsDeleteExchangeOrganizationResponse = StatusDto;

export type OrganizationsDeleteExchangeOrganizationError = unknown;

export type OrganizationsGetAllSharePointOrganizationsData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Flag is optional it can be null, its possible value is 'UserOnly' with this value it will return direct children only.
     */
    flag?: string;
    /**
     * Give mail server type to get filtered list of sharePoint organizations according to it.
     */
    mailServerType?: string;
    /**
     * Give owner id to get filtered list of sharePoint organizations according to it, you can get owner id by calling 'GET /panel-users'.
     */
    ownerId?: number;
    /**
     * Give owner name to get filtered list of sharePoint organizations according to it.
     */
    ownerName?: string;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give server role id to get filtered list of sharePoint organizations according to it, you can get server role id by calling 'GET /servers/{serverId}/roles'.
     */
    serverRoleId?: number;
    /**
     * Give organization system name to get filtered list of sharePoint organizations according to it.
     */
    systemName?: string;
  };
};

export type OrganizationsGetAllSharePointOrganizationsResponse = StatusDto;

export type OrganizationsGetAllSharePointOrganizationsError = unknown;

export type OrganizationsAddSharePointOrganizationData = {
  body: SharePointOrganizationDto_Add;
};

export type OrganizationsAddSharePointOrganizationResponse =
  SharePointOrganizationDto;

export type OrganizationsAddSharePointOrganizationError = unknown;

export type OrganizationsDeleteSharePointOrganizationData = {
  path: {
    /**
     * Give organization id to delete, you can get organization id by calling 'GET /organizations/exchange'.
     */
    organizationId: number;
  };
};

export type OrganizationsDeleteSharePointOrganizationResponse = StatusDto;

export type OrganizationsDeleteSharePointOrganizationError = unknown;

export type OrganizationsGetAllSkypeOrganizationsData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Flag is optional it can be null, its possible value is 'UserOnly' with this value it will return direct children only.
     */
    flag?: string;
    /**
     * Give mail server type to get filtered list of skype organizations according to it.
     */
    mailServerType?: string;
    /**
     * Give owner id to get filtered list of skype organizations according to it, you can get owner id by calling 'GET /panel-users'.
     */
    ownerId?: number;
    /**
     * Give owner name to get filtered list of skype organizations according to it.
     */
    ownerName?: string;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give server role id to get filtered list of skype organizations according to it, you can get server role id by calling 'GET /servers/{serverId}/roles'.
     */
    serverRoleId?: number;
    /**
     * Give organization system name to get filtered list of skype organizations according to it.
     */
    systemName?: string;
  };
};

export type OrganizationsGetAllSkypeOrganizationsResponse = OrganizationsDto;

export type OrganizationsGetAllSkypeOrganizationsError = unknown;

export type OrganizationsAddSkypeOrganizationData = {
  body: SkypeOrganizationDto_Add;
};

export type OrganizationsAddSkypeOrganizationResponse = SkypeOrganizationDto;

export type OrganizationsAddSkypeOrganizationError = unknown;

export type OrganizationsDeleteSkypeOrganizationData = {
  path: {
    /**
     * Give organization id to get filtered list of trusted active directories according to it, you can get organization id by calling 'GET /organizations/exchange'.
     */
    organizationId: number;
  };
};

export type OrganizationsDeleteSkypeOrganizationResponse = StatusDto;

export type OrganizationsDeleteSkypeOrganizationError = unknown;

export type OrganizationsGetAllActiveDirectoryOrganizationsData = {
  query?: {
    /**
     * Get organization by id.
     */
    organizationId?: string;
    ownerId?: number;
    /**
     * Enter owner name to get all organizations of a specific owner.
     */
    ownerName?: string;
    /**
     * Enter serverRoleId to get all organizations of a specific server.
     */
    serverRoleId?: number;
    /**
     * Enter organization name to get list of organizations that containss specific name.
     */
    systemName?: string;
  };
};

export type OrganizationsGetAllActiveDirectoryOrganizationsResponse =
  ADOrganizationsDto;

export type OrganizationsGetAllActiveDirectoryOrganizationsError = unknown;

export type OrganizationsAddActiveDirectoryOrganizationData = {
  /**
   * Enter details of organization to be added.
   */
  body: ActiveDirectoryOrganizationDto_Request;
};

export type OrganizationsAddActiveDirectoryOrganizationResponse =
  ActiveDirectoryOrganizationDto;

export type OrganizationsAddActiveDirectoryOrganizationError = unknown;

export type OrganizationsAddActiveDirectorySubOrganizationData = {
  /**
   * Enter name of sub-organization to be added and parentOUPath is the path under which sub-organization will be added like TestOrg/org2 in that case new subou will be added under org2.
   */
  body: ActiveDirectorySubOrganizationDto_Request;
};

export type OrganizationsAddActiveDirectorySubOrganizationResponse =
  ActiveDirectorySubOrganizationDto;

export type OrganizationsAddActiveDirectorySubOrganizationError = unknown;

export type OrganizationsDeleteActiveDirectoryOrganizationData = {
  path: {
    organizationId: number;
  };
};

export type OrganizationsDeleteActiveDirectoryOrganizationResponse = StatusDto;

export type OrganizationsDeleteActiveDirectoryOrganizationError = unknown;

export type ExchangeMailDomainsGetAllExchangeMailDomainsData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Set it true to get exactly matching exchange mail domains according to mail domain name.
     */
    exactMatch?: boolean;
    /**
     * Set it true to get only verified exchange mail domains.
     */
    isVerified?: boolean;
    /**
     * Give mail domain name to get filtered list of exchange mail domains according to it.
     */
    mailDomain?: string;
    /**
     * Give organization id to get filtered list of exchange mail domains according to it, you can get organiation id by calling 'GET /organizations/exchange'.
     */
    organizationId?: number;
    /**
     * Give owner id to get filtered list of exchange mail domains according to it, you can get owner id by calling 'GET /panel-users'.
     */
    ownerId?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
  };
};

export type ExchangeMailDomainsGetAllExchangeMailDomainsResponse =
  ExchangeMailDomainsDto;

export type ExchangeMailDomainsGetAllExchangeMailDomainsError = unknown;

export type ExchangeMailDomainsAddExchangeMailDomainData = {
  body: ExchangeMailDomainDto_Request;
};

export type ExchangeMailDomainsAddExchangeMailDomainResponse =
  ExchangeMailDomainDto;

export type ExchangeMailDomainsAddExchangeMailDomainError = unknown;

export type ExchangeMailDomainsGetExchangemailDomainDetailsData = {
  path: {
    /**
     * Give exchange mail domain id to get exchange mail domain details, you can get exchange mail domain id by calling 'GET /exchange/mail-domains'.
     */
    exgMaildomainId: number;
  };
};

export type ExchangeMailDomainsGetExchangemailDomainDetailsResponse =
  ExchangeMailDomainDto;

export type ExchangeMailDomainsGetExchangemailDomainDetailsError = unknown;

export type ExchangeMailDomainsEditExchangeMailDomainData = {
  body: UpdateMailDomainDto_Request;
  path: {
    /**
     * Give exchange mail domain id to update exchange mail domain details, you can get exchange mail domain id by calling 'GET /exchange/mail-domains'.
     */
    exgMaildomainId: number;
  };
};

export type ExchangeMailDomainsEditExchangeMailDomainResponse = StatusDto;

export type ExchangeMailDomainsEditExchangeMailDomainError = unknown;

export type ExchangeMailDomainsDeleteExchangeMailDomainData = {
  path: {
    /**
     * Give exchange mail domain id to delete, you can get exchange mail domain id by calling 'GET /exchange/mail-domains'.
     */
    exgMaildomainId: number;
  };
};

export type ExchangeMailDomainsDeleteExchangeMailDomainResponse = StatusDto;

export type ExchangeMailDomainsDeleteExchangeMailDomainError = unknown;

export type ExchangeMailDomainsEnableDisableExchangeMailDomainData = {
  body: UpdateMailDomainDto_Request;
  path: {
    /**
     * Give exchange mail domain id to change exchange mail domain status, you can get exchange mail domain id by calling 'GET /exchange/mail-domains'.
     */
    exgMaildomainId: number;
  };
};

export type ExchangeMailDomainsEnableDisableExchangeMailDomainResponse =
  StatusDto;

export type ExchangeMailDomainsEnableDisableExchangeMailDomainError = unknown;

export type ExgMailboxGetAllExgMailboxsData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give display name to get filtered list of mailboxes according to it.
     */
    displayName?: string;
    /**
     * includeResourceMailbox is a type of flag set it '1' to get only resource mailbox, set it '2' to get all mailboxes, any other value besides these will result in exclusion of resource mailboxes.
     */
    includeResourceMailbox?: number;
    /**
     * Give mail domain name to get filtered list of mailboxes according to it.
     */
    mailDomainName?: string;
    /**
     * Give organization id to get filtered list of mailboxes according to it, you can get organiation id by calling 'GET /organizations/exchange'.
     */
    organizationId?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
  };
};

export type ExgMailboxGetAllExgMailboxsResponse = ExgMailboxesDto;

export type ExgMailboxGetAllExgMailboxsError = unknown;

export type ExgMailboxAddExgMailboxData = {
  body: ExgAddMailboxDto_Request;
};

export type ExgMailboxAddExgMailboxResponse = ExgMailboxDto;

export type ExgMailboxAddExgMailboxError = unknown;

export type ExgMailboxUpdateExgMailboxData = {
  body: ExgMailboxEnableDisableDto_Request;
  path: {
    /**
     * Give exchange mailbox id to update its details, you can get exchange mailbox id by calling 'GET /exchange/mailboxes'.
     */
    exgMailboxId: number;
  };
};

export type ExgMailboxUpdateExgMailboxResponse = ExgMailboxDto;

export type ExgMailboxUpdateExgMailboxError = unknown;

export type ExgMailboxGetExgMailboxDetailsData = {
  path: {
    /**
     * Give exchange mailbox id to get its details, you can get exchange mailbox id by calling 'GET /exchange/mailboxes'.
     */
    exgMailboxId: number;
  };
};

export type ExgMailboxGetExgMailboxDetailsResponse = ExgMailboxDto;

export type ExgMailboxGetExgMailboxDetailsError = unknown;

export type ExgMailboxDeleteExgMailboxData = {
  path: {
    /**
     * Give exchange mailbox id to delete it, you can get exchange mailbox id by calling 'GET /exchange/mailboxes'.
     */
    exgMailboxId: number;
  };
};

export type ExgMailboxDeleteExgMailboxResponse = StatusDto;

export type ExgMailboxDeleteExgMailboxError = unknown;

export type ExgMailboxGetExgMailboxAsyncPolicyData = {
  path: {
    /**
     * Give exchange mailbox id to get mailbox active sync policy settings, you can get exchange mailbox id by calling 'GET /exchange/mailboxes'.
     */
    exgMailboxId: number;
  };
};

export type ExgMailboxGetExgMailboxAsyncPolicyResponse =
  MailboxActiveSyncSettingsDto;

export type ExgMailboxGetExgMailboxAsyncPolicyError = unknown;

export type ExgMailboxUpdateExgMailboxAsyncPolicyData = {
  body: UpdateMailboxASyncDto_Request;
  path: {
    /**
     * Give exchange mailbox id to update active sync policy settings, you can get exchange mailbox id by calling 'GET /exchange/mailboxes'.
     */
    exgMailboxId: number;
  };
};

export type ExgMailboxUpdateExgMailboxAsyncPolicyResponse = StatusDto;

export type ExgMailboxUpdateExgMailboxAsyncPolicyError = unknown;

export type ExgMailboxGetUserMailboxGeneralPropertiesData = {
  path: {
    /**
     * Give mailbox id to get user mailbox general properties, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxGetUserMailboxGeneralPropertiesResponse =
  UpdateUserGeneralPropertiesDto;

export type ExgMailboxGetUserMailboxGeneralPropertiesError = unknown;

export type ExgMailboxUpdateExgMailboxGeneralPropertiesData = {
  body: UpdateUserGeneralPropertiesDto_Request;
  path: {
    /**
     * Give mailbox id to update mailbox general properties, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxUpdateExgMailboxGeneralPropertiesResponse = StatusDto;

export type ExgMailboxUpdateExgMailboxGeneralPropertiesError = unknown;

export type ExgMailboxChangeUserMailboxPasswordData = {
  body: UserMailboxPasswordDto_Request;
  path: {
    /**
     * Give mailbox id to change mailbox password, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxChangeUserMailboxPasswordResponse = StatusDto;

export type ExgMailboxChangeUserMailboxPasswordError = unknown;

export type ExgMailboxGetUserMailboxEmailAddressesData = {
  path: {
    /**
     * Give mailbox id to get filtered list of user mailbox email addresses according to it, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxGetUserMailboxEmailAddressesResponse =
  UserMailboxEmailAddressesDto;

export type ExgMailboxGetUserMailboxEmailAddressesError = unknown;

export type ExgMailboxSetPrimaryEmailAddressesData = {
  body: SetPrimaryEmailAddressDto_Request;
  path: {
    /**
     * Give mailbox id to set primary email addresses, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxSetPrimaryEmailAddressesResponse = StatusDto;

export type ExgMailboxSetPrimaryEmailAddressesError = unknown;

export type ExgMailboxAddUserMailboxEmailAddressesData = {
  body: AddUserMailboxEmailAddressDto_Request;
  path: {
    /**
     * Give mailbox id to add mailbox email addresses, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxAddUserMailboxEmailAddressesResponse = StatusDto;

export type ExgMailboxAddUserMailboxEmailAddressesError = unknown;

export type ExgMailboxDeleteUserMailboxEmailAddressesData = {
  path: {
    /**
     * Give mailbox id to delete mailbox email address, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
  query?: {
    /**
     * Give email address to delete it.
     */
    emailAddress?: string;
  };
};

export type ExgMailboxDeleteUserMailboxEmailAddressesResponse = StatusDto;

export type ExgMailboxDeleteUserMailboxEmailAddressesError = unknown;

export type ExgMailboxGetUserSendOnBehalfUsersData = {
  path: {
    /**
     * Give mailbox id to get mailbox send on behalf users, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxGetUserSendOnBehalfUsersResponse =
  ExchangeRecipientListDto;

export type ExgMailboxGetUserSendOnBehalfUsersError = unknown;

export type ExgMailboxAddUserSendOnBehalfUsersData = {
  body: ExchangeRecipientListDto_MailboxRequest;
  path: {
    /**
     * Give mailbox id to add mailbox send on behalf users, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxAddUserSendOnBehalfUsersResponse = StatusDto;

export type ExgMailboxAddUserSendOnBehalfUsersError = unknown;

export type ExgMailboxRemoveUserSendOnBehalfUsersData = {
  body: ExchangeRecipientListDto_MailboxRequest;
  path: {
    /**
     * Give mailbox id to remove mailbox send on behalf users, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxRemoveUserSendOnBehalfUsersResponse = StatusDto;

export type ExgMailboxRemoveUserSendOnBehalfUsersError = unknown;

export type ExgMailboxGetUserMailboxAdvancedPropertiesData = {
  path: {
    /**
     * Give mailbox id to get mailbox advanced properties, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxGetUserMailboxAdvancedPropertiesResponse =
  UserMailboxAdvancedPropertiesDto;

export type ExgMailboxGetUserMailboxAdvancedPropertiesError = unknown;

export type ExgMailboxUpdateUserMailboxAdvancedPropertiesData = {
  body: UserMailboxAdvancedPropertiesDto_Request;
  path: {
    /**
     * Give mailbox id to update mailbox advanced properties, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxUpdateUserMailboxAdvancedPropertiesResponse =
  UserMailboxAdvancedPropertiesDto;

export type ExgMailboxUpdateUserMailboxAdvancedPropertiesError = unknown;

export type ExgMailboxGetUserAcceptedSendersData = {
  path: {
    /**
     * Give mailbox id to get mailbox accepted senders, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxGetUserAcceptedSendersResponse = ExchangeRecipientListDto;

export type ExgMailboxGetUserAcceptedSendersError = unknown;

export type ExgMailboxAddUserAcceptedSendersData = {
  body: ExchangeRecipientListDto_MailboxRequest;
  path: {
    /**
     * Give mailbox id to add mailbox accepted senders, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxAddUserAcceptedSendersResponse = StatusDto;

export type ExgMailboxAddUserAcceptedSendersError = unknown;

export type ExgMailboxRemoveUserAcceptedSendersData = {
  body: ExchangeRecipientListDto_MailboxRequest;
  path: {
    /**
     * Give mailbox id to remove mailbox accepted senders, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxRemoveUserAcceptedSendersResponse = StatusDto;

export type ExgMailboxRemoveUserAcceptedSendersError = unknown;

export type ExgMailboxGetUserRejectedSendersData = {
  path: {
    /**
     * Give mailbox id to get mailbox rejected senders, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxGetUserRejectedSendersResponse = ExchangeRecipientListDto;

export type ExgMailboxGetUserRejectedSendersError = unknown;

export type ExgMailboxAddUserRejectedSendersData = {
  body: ExchangeRecipientListDto_MailboxRequest;
  path: {
    /**
     * Give mailbox id to add mailbox rejected senders, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxAddUserRejectedSendersResponse = StatusDto;

export type ExgMailboxAddUserRejectedSendersError = unknown;

export type ExgMailboxRemoveUserRejectedSendersData = {
  body: ExchangeRecipientListDto;
  path: {
    /**
     * Give mailbox id to remove mailbox rejected senders, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxRemoveUserRejectedSendersResponse = StatusDto;

export type ExgMailboxRemoveUserRejectedSendersError = unknown;

export type ExgMailboxGetUserFullAccessPermissionData = {
  path: {
    /**
     * Give mailbox id to get list of mailbox full access permissions, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxGetUserFullAccessPermissionResponse =
  ExchangeRecipientListDto;

export type ExgMailboxGetUserFullAccessPermissionError = unknown;

export type ExgMailboxAddUserFullAccessPermissionData = {
  body: ExchangeRecipientListDto_MailboxRequest;
  path: {
    /**
     * Give mailbox id to add mailbox full access permission, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxAddUserFullAccessPermissionResponse = StatusDto;

export type ExgMailboxAddUserFullAccessPermissionError = unknown;

export type ExgMailboxRemoveUserFullAccessPermissionData = {
  body: ExchangeRecipientListDto_MailboxRequest;
  path: {
    /**
     * Give mailbox id to remove mailbox full access permissions, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxRemoveUserFullAccessPermissionResponse = StatusDto;

export type ExgMailboxRemoveUserFullAccessPermissionError = unknown;

export type ExgMailboxGetUserSendAsPermissionData = {
  path: {
    /**
     * Give mailbox id to get mailbox send as permission, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxGetUserSendAsPermissionResponse =
  ExchangeRecipientListDto;

export type ExgMailboxGetUserSendAsPermissionError = unknown;

export type ExgMailboxAddUserSendAsPermissionData = {
  body: ExchangeRecipientListDto_MailboxRequest;
  path: {
    /**
     * Give mailbox id to add mailbox send as permission, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxAddUserSendAsPermissionResponse = StatusDto;

export type ExgMailboxAddUserSendAsPermissionError = unknown;

export type ExgMailboxRemoveUserSendAsPermissionData = {
  body: ExchangeRecipientListDto_MailboxRequest;
  path: {
    /**
     * Give mailbox id to remove mailbox send as permission, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxRemoveUserSendAsPermissionResponse = StatusDto;

export type ExgMailboxRemoveUserSendAsPermissionError = unknown;

export type ExgMailboxGetUserForwardingAddressData = {
  path: {
    /**
     * Give mailbox id to get mailbox forwarding address, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxGetUserForwardingAddressResponse =
  ExchangeMailboxForwardingDto;

export type ExgMailboxGetUserForwardingAddressError = unknown;

export type ExgMailboxUpdateUserForwardingAddressData = {
  body: ExchangeMailboxForwardingDto_Request;
  path: {
    /**
     * Give mailbox id to update mailbox forwarding address, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxUpdateUserForwardingAddressResponse = StatusDto;

export type ExgMailboxUpdateUserForwardingAddressError = unknown;

export type ExgMailboxGetUserStatisticsData = {
  path: {
    /**
     * Give mailbox id to get mailbox summary, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxGetUserStatisticsResponse = ExchangeMailboxStatsDto;

export type ExgMailboxGetUserStatisticsError = unknown;

export type ExgMailboxGetMailboxLitigationHoldSettingsData = {
  path: {
    /**
     * Give mailbox id to get mailbox litigation hold settings, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxGetMailboxLitigationHoldSettingsResponse =
  LitigationHoldSettingsDto;

export type ExgMailboxGetMailboxLitigationHoldSettingsError = unknown;

export type ExgMailboxUpdateMailboxLitigationHoldSettingsData = {
  body: LitigationHoldSettingsDto_Request;
  path: {
    /**
     * Give mailbox id to update mailbox litigation hold settings, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxUpdateMailboxLitigationHoldSettingsResponse =
  LitigationHoldSettingsDto;

export type ExgMailboxUpdateMailboxLitigationHoldSettingsError = unknown;

export type ExgMailboxGetAllListsOfUserMailboxData = {
  path: {
    /**
     * Give mailbox id to get all distribution lists of user mailbox, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxGetAllListsOfUserMailboxResponse =
  ExchangeRecipientListDto;

export type ExgMailboxGetAllListsOfUserMailboxError = unknown;

export type ExgMailboxAddUserMailboxToListData = {
  body: ExchangeRecipientListDto_MailboxRequest;
  path: {
    /**
     * Give mailbox id to add user mailbox to distrbution list, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxAddUserMailboxToListResponse = ExchangeRecipientListDto;

export type ExgMailboxAddUserMailboxToListError = unknown;

export type ExgMailboxRemoveUserMailboxFromListData = {
  body: ExchangeRecipientListDto_MailboxRequest;
  path: {
    /**
     * Give mailbox id to remove user mailbox to distrbution list, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxRemoveUserMailboxFromListResponse =
  ExchangeRecipientListDto;

export type ExgMailboxRemoveUserMailboxFromListError = unknown;

export type ExgMailboxGetArchiveMailboxSettingsData = {
  path: {
    /**
     * Give mailbox id to get archive mailbox settings, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxGetArchiveMailboxSettingsResponse =
  ExchangeArchiveMailboxListDto;

export type ExgMailboxGetArchiveMailboxSettingsError = unknown;

export type ExgMailboxUpdateArchiveMailboxData = {
  body: UpdateArchiveMailboxDto_Request;
  path: {
    /**
     * Give mailbox id to Update archive mailbox according to it, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxUpdateArchiveMailboxResponse = ExchangeArchiveMailboxDto;

export type ExgMailboxUpdateArchiveMailboxError = unknown;

export type ExgMailboxAddArchiveMailboxData = {
  body: CreateArchiveMailboxDto_Request;
  path: {
    /**
     * Give mailbox id to add archive mailbox, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxAddArchiveMailboxResponse = ExchangeArchiveMailboxDto;

export type ExgMailboxAddArchiveMailboxError = unknown;

export type ExgMailboxUpdateArchiveMailboxStatusData = {
  body: UpdateArchiveMailboxStatusDto_Request;
  path: {
    /**
     * Give mailbox id to update archive mailbox status, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxUpdateArchiveMailboxStatusResponse = StatusDto;

export type ExgMailboxUpdateArchiveMailboxStatusError = unknown;

export type ExgMailboxCheckBulkMailboxFeasibilityData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give organization id to check bulk mailbox feasibility according to it, you can get organiation id by calling 'GET /organizations/exchange'.
     */
    organizationId: number;
  };
};

export type ExgMailboxCheckBulkMailboxFeasibilityResponse =
  ExchangeBulkUserListDto;

export type ExgMailboxCheckBulkMailboxFeasibilityError = unknown;

export type ExgMailboxAddExgBulkMailboxData = {
  body: ExgBulkMailboxesDto_Request;
};

export type ExgMailboxAddExgBulkMailboxResponse = ExgBulkMailboxDto;

export type ExgMailboxAddExgBulkMailboxError = unknown;

export type ExgMailboxUpdateExgBulkMailboxData = {
  body: ExgEditBulkMailboxDto_Request;
  path: {
    /**
     * Give organization id to update bulk mailbox according to it, you can get organiation id by calling 'GET /organizations/exchange'.
     */
    organizationId: number;
  };
};

export type ExgMailboxUpdateExgBulkMailboxResponse = ExgBulkMailboxDto;

export type ExgMailboxUpdateExgBulkMailboxError = unknown;

export type ExgMailboxGetMailboxAutoReplyConfigurationData = {
  path: {
    /**
     * Give mailbox id to get auto reply configuration, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxGetMailboxAutoReplyConfigurationResponse =
  ExchangeMailboxOutOfOfficeDto;

export type ExgMailboxGetMailboxAutoReplyConfigurationError = unknown;

export type ExgMailboxSetUserAutoReplyConfigurationData = {
  body: ExchangeMailboxOutOfOfficeDto_Request;
  path: {
    /**
     * Give mailbox id to set mailbox auto reply configuration, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExgMailboxSetUserAutoReplyConfigurationResponse = StatusDto;

export type ExgMailboxSetUserAutoReplyConfigurationError = unknown;

export type ExchangeDistributionListGetAllExchangeDistributionListsData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give display name to get filtered list of exchange distribution lists according to it.
     */
    displayName?: string;
    /**
     * Give email address to get filtered list of exchange distribution lists according to it.
     */
    emailAddress?: string;
    /**
     * Give organization id to get filtered list of exchange distribution lists according to it, you can get organiation id by calling 'GET /organizations/exchange'.
     */
    organizationId?: number;
    /**
     * Give owner id to get filtered list of exchange distribution lists according to it, you can get owner id by calling 'GET /panel-users'.
     */
    ownerId?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
  };
};

export type ExchangeDistributionListGetAllExchangeDistributionListsResponse =
  ExchangeDistributionListsDto;

export type ExchangeDistributionListGetAllExchangeDistributionListsError =
  unknown;

export type ExchangeDistributionListAddExchangeDistributionListData = {
  body: ExchangeDistributionListDto_Request;
};

export type ExchangeDistributionListAddExchangeDistributionListResponse =
  ExchangeDistributionListDto;

export type ExchangeDistributionListAddExchangeDistributionListError = unknown;

export type ExchangeDistributionListUpdateExchangeDlAdministratorData = {
  body: UpdateExchangeDLAdminDto_Request;
  path: {
    /**
     * Give distribution list id to update exchange distribution list details, you can get distribution list id by calling 'GET /exchange/distribution-lists'.
     */
    distributionlistsId: number;
  };
};

export type ExchangeDistributionListUpdateExchangeDlAdministratorResponse =
  StatusDto;

export type ExchangeDistributionListUpdateExchangeDlAdministratorError =
  unknown;

export type ExchangeDistributionListGetExchangeDlDetailsData = {
  path: {
    /**
     * Give distribution list id to get exchange distribution list details, you can get distribution list id by calling 'GET /exchange/distribution-lists'.
     */
    distributionlistId: number;
  };
};

export type ExchangeDistributionListGetExchangeDlDetailsResponse =
  ExchangeDistributionListDto;

export type ExchangeDistributionListGetExchangeDlDetailsError = unknown;

export type ExchangeDistributionListDeleteExchangeDistributionListData = {
  path: {
    /**
     * Give distribution list id to delete, you can get distribution list id by calling 'GET /exchange/distribution-lists'.
     */
    distributionlistId: number;
  };
};

export type ExchangeDistributionListDeleteExchangeDistributionListResponse =
  StatusDto;

export type ExchangeDistributionListDeleteExchangeDistributionListError =
  unknown;

export type ExchangeDistributionListGetExchangeListMembersData = {
  path: {
    /**
     * Give distribution list id to get filtered list of exchange distribution list members according to it, you can get distribution list id by calling 'GET /exchange/distribution-lists'.
     */
    distributionlistsId: number;
  };
};

export type ExchangeDistributionListGetExchangeListMembersResponse =
  ExchangeDistributionListMembersDto;

export type ExchangeDistributionListGetExchangeListMembersError = unknown;

export type ExchangeDistributionListUpdateExchangeListMembersData = {
  body: ExchangeDistributionListMembersDto_Request;
  path: {
    /**
     * Give distribution list id to update exchange distribution list members, you can get distribution list id by calling 'GET /exchange/distribution-lists'.
     */
    distributionlistsId: number;
  };
};

export type ExchangeDistributionListUpdateExchangeListMembersResponse =
  StatusDto;

export type ExchangeDistributionListUpdateExchangeListMembersError = unknown;

export type ExchangeDistributionListRemoveListExchangeListMembersData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give distribution list id to remove exchange distribution list members, you can get distribution list id by calling 'GET /exchange/distribution-lists'.
     */
    distributionlistsId: number;
  };
};

export type ExchangeDistributionListRemoveListExchangeListMembersResponse =
  StatusDto;

export type ExchangeDistributionListRemoveListExchangeListMembersError =
  unknown;

export type ExchangeDistributionListGetListAcceptedSendersData = {
  path: {
    /**
     * Give distribution list id to get filtered list of exchange distribution list accepted senders, you can get distribution list id by calling 'GET /exchange/distribution-lists'.
     */
    distributionlistsId: number;
  };
};

export type ExchangeDistributionListGetListAcceptedSendersResponse =
  ExchangeRecipientListDto;

export type ExchangeDistributionListGetListAcceptedSendersError = unknown;

export type ExchangeDistributionListAddListAcceptedSendersData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give distribution list id to add exchange distribution list accepted sender, you can get distribution list id by calling 'GET /exchange/distribution-lists'.
     */
    distributionlistsId: number;
  };
};

export type ExchangeDistributionListAddListAcceptedSendersResponse = StatusDto;

export type ExchangeDistributionListAddListAcceptedSendersError = unknown;

export type ExchangeDistributionListRemoveListAcceptedSendersData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give distribution list id to update exchange distribution list details, you can get distribution list id by calling 'GET /exchange/distribution-lists'.
     */
    distributionlistsId: number;
  };
};

export type ExchangeDistributionListRemoveListAcceptedSendersResponse =
  StatusDto;

export type ExchangeDistributionListRemoveListAcceptedSendersError = unknown;

export type ExchangeDistributionListGetListRejectedSendersData = {
  path: {
    /**
     * Give distribution list id to get filtered list of exchange distribution list rejected senders according to it, you can get distribution list id by calling 'GET /exchange/distribution-lists'.
     */
    distributionlistsId: number;
  };
};

export type ExchangeDistributionListGetListRejectedSendersResponse =
  ExchangeRecipientListDto;

export type ExchangeDistributionListGetListRejectedSendersError = unknown;

export type ExchangeDistributionListAddListRejectedSendersData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give distribution list id to add exchange distribution list rejected senders, you can get distribution list id by calling 'GET /exchange/distribution-lists'.
     */
    distributionlistsId: number;
  };
};

export type ExchangeDistributionListAddListRejectedSendersResponse = StatusDto;

export type ExchangeDistributionListAddListRejectedSendersError = unknown;

export type ExchangeDistributionListRemoveListRejectedSendersData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give distribution list id to update exchange distribution list rejected senders, you can get distribution list id by calling 'GET /exchange/distribution-lists'.
     */
    distributionlistsId: number;
  };
};

export type ExchangeDistributionListRemoveListRejectedSendersResponse =
  StatusDto;

export type ExchangeDistributionListRemoveListRejectedSendersError = unknown;

export type ExchangeDistributionListGetListSendOnBehalfUsersData = {
  path: {
    /**
     * Give distribution list id to get filtered exchange distribution list send on behalf users according to it, you can get distribution list id by calling 'GET /exchange/distribution-lists'.
     */
    distributionlistsId: number;
  };
};

export type ExchangeDistributionListGetListSendOnBehalfUsersResponse =
  ExchangeRecipientListDto;

export type ExchangeDistributionListGetListSendOnBehalfUsersError = unknown;

export type ExchangeDistributionListAddListSendOnBehalfUsersData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give distribution list id to add  exchange distribution list send on behalf user, you can get distribution list id by calling 'GET /exchange/distribution-lists'.
     */
    distributionlistsId: number;
  };
};

export type ExchangeDistributionListAddListSendOnBehalfUsersResponse =
  StatusDto;

export type ExchangeDistributionListAddListSendOnBehalfUsersError = unknown;

export type ExchangeDistributionListRemoveListSendOnBehalfUsersData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give distribution list id to update exchange distribution list send on behalf users, you can get distribution list id by calling 'GET /exchange/distribution-lists'.
     */
    distributionlistsId: number;
  };
};

export type ExchangeDistributionListRemoveListSendOnBehalfUsersResponse =
  StatusDto;

export type ExchangeDistributionListRemoveListSendOnBehalfUsersError = unknown;

export type ExchangeDistributionListGetListEmailAddressesData = {
  path: {
    /**
     * Give distribution list id to get filtered exchange distribution list email addresses according to it, you can get distribution list id by calling 'GET /exchange/distribution-lists'.
     */
    distributionlistsId: number;
  };
};

export type ExchangeDistributionListGetListEmailAddressesResponse =
  RecipientEmailAddressesDto;

export type ExchangeDistributionListGetListEmailAddressesError = unknown;

export type ExchangeDistributionListSetListPrimaryEmailAddressData = {
  body: SetRecipientPrimaryEmailAddressDto_Request;
  path: {
    /**
     * Give distribution list id to set exchange distribution list email address, you can get distribution list id by calling 'GET /exchange/distribution-lists'.
     */
    distributionlistsId: number;
  };
};

export type ExchangeDistributionListSetListPrimaryEmailAddressResponse =
  StatusDto;

export type ExchangeDistributionListSetListPrimaryEmailAddressError = unknown;

export type ExchangeDistributionListAddListEmailAddressData = {
  body: AddRecipientEmailAddressDto_Request;
  path: {
    /**
     * Give distribution list id to add exchange distribution list email address, you can get distribution list id by calling 'GET /exchange/distribution-lists'.
     */
    distributionlistsId: number;
  };
};

export type ExchangeDistributionListAddListEmailAddressResponse = StatusDto;

export type ExchangeDistributionListAddListEmailAddressError = unknown;

export type ExchangeDistributionListDeleteListEmailAddressData = {
  path: {
    /**
     * Give distribution list id to delete exchange distribution list email address, you can get distribution list id by calling 'GET /exchange/distribution-lists'.
     */
    distributionlistsId: number;
  };
  query?: {
    /**
     * Give email address to delete exchange distribution list email address.
     */
    emailAddress?: string;
  };
};

export type ExchangeDistributionListDeleteListEmailAddressResponse = StatusDto;

export type ExchangeDistributionListDeleteListEmailAddressError = unknown;

export type ExchangeDistributionListGetListPropertiesData = {
  path: {
    /**
     * Give distribution list id to get exchange distribution list properties according to it, you can get distribution list id by calling 'GET /exchange/distribution-lists'.
     */
    distributionlistsId: number;
  };
};

export type ExchangeDistributionListGetListPropertiesResponse =
  ExchangeDistributionListAdvancePropertiesDto;

export type ExchangeDistributionListGetListPropertiesError = unknown;

export type ExchangeDistributionListUpdateListSettingsData = {
  body: ExchangeDistributionListAdvancePropertiesDto_Request;
  path: {
    /**
     * Give distribution list id to update exchange distribution list details, you can get distribution list id by calling 'GET /exchange/distribution-lists'.
     */
    distributionlistsId: number;
  };
};

export type ExchangeDistributionListUpdateListSettingsResponse =
  ExchangeDistributionListAdvancePropertiesDto;

export type ExchangeDistributionListUpdateListSettingsError = unknown;

export type ExchangeMailContactGetAllExchangeMailContactsData = {
  query?: {
    /**
     * Give contact name to get filtered list of mail contacts according to it.
     */
    contactName?: string;
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give display name to get filtered list of exchange mail contacts according to it.
     */
    displayName?: string;
    /**
     * Give distinguished name to get filtered list of exchange mail contacts according to it.
     */
    distinguishedName?: string;
    /**
     * Give external email address to get filtered list of exchange mail contacts according to it.
     */
    externalEmailAddress?: string;
    /**
     * Give internal email address to get filtered list of exchange mail contacts according to it.
     */
    internalEmailAddress?: string;
    /**
     * Give organization id to get filtered list of exchange mail contacts according to it, you can get organiation id by calling 'GET /organizations/exchange'.
     */
    organizationId?: number;
    /**
     * Give owner id to get filtered list of exchange mail contacts according to it, you can get owner id by calling 'GET /panel-users'.
     */
    ownerId?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give primary email address to get filtered list of exchange mail contacts according to it.
     */
    primaryEmailAddress?: string;
  };
};

export type ExchangeMailContactGetAllExchangeMailContactsResponse =
  ExchangeMailContactsDto;

export type ExchangeMailContactGetAllExchangeMailContactsError = unknown;

export type ExchangeMailContactAddExchangeMailContactData = {
  body: ExchangeMailContactDto_Request;
};

export type ExchangeMailContactAddExchangeMailContactResponse =
  ExchangeMailContactDto;

export type ExchangeMailContactAddExchangeMailContactError = unknown;

export type ExchangeMailContactGetExchangeMailContactDetailsData = {
  path: {
    /**
     * Give mail contact id to get its details, you can get owner id by calling 'GET /exchange/mail-contacts'.
     */
    mailContactId: number;
  };
};

export type ExchangeMailContactGetExchangeMailContactDetailsResponse =
  ExchangeMailContactDto;

export type ExchangeMailContactGetExchangeMailContactDetailsError = unknown;

export type ExchangeMailContactDeleteMailContactData = {
  path: {
    /**
     * Give mail contact id to delete, you can get owner id by calling 'GET /exchange/mail-contacts'.
     */
    mailContactId: number;
  };
};

export type ExchangeMailContactDeleteMailContactResponse = StatusDto;

export type ExchangeMailContactDeleteMailContactError = unknown;

export type ExchangeMailContactGetMailContactAcceptedSendersData = {
  path: {
    /**
     * Give mail contact id to get filtered list of mail contact accepted senders according to it, you can get owner id by calling 'GET /exchange/mail-contacts'.
     */
    mailContactId: number;
  };
};

export type ExchangeMailContactGetMailContactAcceptedSendersResponse =
  ExchangeRecipientListDto;

export type ExchangeMailContactGetMailContactAcceptedSendersError = unknown;

export type ExchangeMailContactAddMailContactAcceptedSendersData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give mail contact id to add exchange mail contact accepted senders according to it, you can get owner id by calling 'GET /exchange/mail-contacts'.
     */
    mailContactId: number;
  };
};

export type ExchangeMailContactAddMailContactAcceptedSendersResponse =
  StatusDto;

export type ExchangeMailContactAddMailContactAcceptedSendersError = unknown;

export type ExchangeMailContactRemoveMailContactAcceptedSendersData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give mail contact id to update exchange mail contact accepted senders, you can get owner id by calling 'GET /exchange/mail-contacts'.
     */
    mailContactId: number;
  };
};

export type ExchangeMailContactRemoveMailContactAcceptedSendersResponse =
  StatusDto;

export type ExchangeMailContactRemoveMailContactAcceptedSendersError = unknown;

export type ExchangeMailContactGetMailContactRejectedSendersData = {
  path: {
    /**
     * Give mail contact id to get filtered list of exchange mail contact rejected senders according to it, you can get owner id by calling 'GET /exchange/mail-contacts'.
     */
    mailContactId: number;
  };
};

export type ExchangeMailContactGetMailContactRejectedSendersResponse =
  ExchangeRecipientListDto;

export type ExchangeMailContactGetMailContactRejectedSendersError = unknown;

export type ExchangeMailContactAddMailContactRejectedSendersData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give mail contact id to add exchange mail contact rejected senders, you can get owner id by calling 'GET /exchange/mail-contacts'.
     */
    mailContactId: number;
  };
};

export type ExchangeMailContactAddMailContactRejectedSendersResponse =
  StatusDto;

export type ExchangeMailContactAddMailContactRejectedSendersError = unknown;

export type ExchangeMailContactRemoveMailContactRejectedSendersData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give mail contact id to update exchange mail contact rejected senders, you can get owner id by calling 'GET /exchange/mail-contacts'.
     */
    mailContactId: number;
  };
};

export type ExchangeMailContactRemoveMailContactRejectedSendersResponse =
  StatusDto;

export type ExchangeMailContactRemoveMailContactRejectedSendersError = unknown;

export type ExchangeMailContactGetMailContactEmailAddressesData = {
  path: {
    /**
     * Give mail contact id to get filtered list of mail contact email addresses according to it, you can get owner id by calling 'GET /exchange/mail-contacts'.
     */
    mailContactId: number;
  };
};

export type ExchangeMailContactGetMailContactEmailAddressesResponse =
  RecipientEmailAddressesDto;

export type ExchangeMailContactGetMailContactEmailAddressesError = unknown;

export type ExchangeMailContactAddMailContactEmailAddressData = {
  body: AddRecipientEmailAddressDto_Request;
  path: {
    /**
     * Give mail contact id to add exchange mail contact email addresses, you can get owner id by calling 'GET /exchange/mail-contacts'.
     */
    mailContactId: number;
  };
};

export type ExchangeMailContactAddMailContactEmailAddressResponse = StatusDto;

export type ExchangeMailContactAddMailContactEmailAddressError = unknown;

export type ExchangeMailContactDeleteMailContactEmailAddressData = {
  path: {
    /**
     * Give mail contact id to delete, you can get owner id by calling 'GET /exchange/mail-contacts'.
     */
    mailContactId: number;
  };
  query?: {
    /**
     * Give email address to delete.
     */
    emailAddress?: string;
  };
};

export type ExchangeMailContactDeleteMailContactEmailAddressResponse =
  StatusDto;

export type ExchangeMailContactDeleteMailContactEmailAddressError = unknown;

export type ExchangeMailContactSetMailContactPrimaryEmailAddressData = {
  body: SetRecipientPrimaryEmailAddressDto_Request;
  path: {
    /**
     * Give mail contact id to update exchange mail contact primary email address, you can get owner id by calling 'GET /exchange/mail-contacts'.
     */
    mailContactId: number;
  };
};

export type ExchangeMailContactSetMailContactPrimaryEmailAddressResponse =
  StatusDto;

export type ExchangeMailContactSetMailContactPrimaryEmailAddressError = unknown;

export type ExchangeMailContactSetMailContactExternalEmailAddressData = {
  body: SetRecipientPrimaryEmailAddressDto_Request;
  path: {
    /**
     * Give mail contact id to update exchange mail contact external email address, you can get owner id by calling 'GET /exchange/mail-contacts'.
     */
    mailContactId: number;
  };
};

export type ExchangeMailContactSetMailContactExternalEmailAddressResponse =
  StatusDto;

export type ExchangeMailContactSetMailContactExternalEmailAddressError =
  unknown;

export type ExchangeMailContactGetMailContactGeneralSettingsData = {
  path: {
    /**
     * Give mail contact id to get mail contact general settings according to it, you can get owner id by calling 'GET /exchange/mail-contacts'.
     */
    mailContactId: number;
  };
};

export type ExchangeMailContactGetMailContactGeneralSettingsResponse =
  ExchangeMailContactGeneralPropertiesDto;

export type ExchangeMailContactGetMailContactGeneralSettingsError = unknown;

export type ExchangeMailContactUpdateMailContactGeneralSettingsData = {
  body: ExchangeMailContactGeneralPropertiesDto_Request;
  path: {
    /**
     * Give mail contact id to update exchange mail contact general settings, you can get owner id by calling 'GET /exchange/mail-contacts'.
     */
    mailContactId: number;
  };
};

export type ExchangeMailContactUpdateMailContactGeneralSettingsResponse =
  StatusDto;

export type ExchangeMailContactUpdateMailContactGeneralSettingsError = unknown;

export type ExchangeMailContactGetMailContactAdvancedSettingsData = {
  path: {
    /**
     * Give mail contact id to get exchange mail contact advanced settings according to it, you can get owner id by calling 'GET /exchange/mail-contacts'.
     */
    mailContactId: number;
  };
};

export type ExchangeMailContactGetMailContactAdvancedSettingsResponse =
  ExchangeMailContactAdvancedPropertiesDto;

export type ExchangeMailContactGetMailContactAdvancedSettingsError = unknown;

export type ExchangeMailContactUpdateMailContactAdvancedSettingsData = {
  body: ExchangeMailContactAdvancedPropertiesDto_Request;
  path: {
    /**
     * Give mail contact id to update exchange mail contact advanced settings according to it, you can get owner id by calling 'GET /exchange/mail-contacts'.
     */
    mailContactId: number;
  };
};

export type ExchangeMailContactUpdateMailContactAdvancedSettingsResponse =
  StatusDto;

export type ExchangeMailContactUpdateMailContactAdvancedSettingsError = unknown;

export type ExchangeMailContactUpdateMailContactData = {
  body: ExchangeMailContactDto_Request;
  path: {
    /**
     * Give mail contact id to update mail contact according to it, you can get owner id by calling 'GET /exchange/mail-contacts'.
     */
    mailContactId: number;
  };
};

export type ExchangeMailContactUpdateMailContactResponse =
  ExchangeMailContactDto;

export type ExchangeMailContactUpdateMailContactError = unknown;

export type ExchangeResourceMailboxGetAllExchangeResourceMailboxsData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give display name to get filtered list of resource mailboxes according to it.
     */
    displayName?: string;
    /**
     * includeResourceMailbox is a type of flag set it '1' to get only resource mailbox, set it '2' to get all mailboxes, otherwise it will exclude resource mailboxes.
     */
    includeResourceMailbox?: number;
    /**
     * Give mail domain name to get filtered list of resource mailboxes according to it.
     */
    mailDomainName?: string;
    /**
     * Give organization id to get filtered list of resource mailboxes according to it, you can get organiation id by calling 'GET /organizations/exchange'.
     */
    organizationId?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
  };
};

export type ExchangeResourceMailboxGetAllExchangeResourceMailboxsResponse =
  ExchangeResourceMailboxesDto;

export type ExchangeResourceMailboxGetAllExchangeResourceMailboxsError =
  unknown;

export type ExchangeResourceMailboxAddExchangeResourceMailboxData = {
  body: ExchangeResourceMailboxDto_Request;
};

export type ExchangeResourceMailboxAddExchangeResourceMailboxResponse =
  ExchangeResourceMailboxDto;

export type ExchangeResourceMailboxAddExchangeResourceMailboxError = unknown;

export type ExchangeResourceMailboxGetResourceMailboxDetailsData = {
  path: {
    /**
     * Give exchange mailbox id to get resource mailbox details, you can get exchange mailbox id by calling 'GET /exchange/mailboxes'.
     */
    exgMailboxId: number;
  };
};

export type ExchangeResourceMailboxGetResourceMailboxDetailsResponse =
  ExchangeResourceMailboxDto;

export type ExchangeResourceMailboxGetResourceMailboxDetailsError = unknown;

export type ExchangeResourceMailboxDeleteExchangeResourceMailboxData = {
  path: {
    /**
     * Give exchange mailbox id to delete resource mailbox, you can get exchange mailbox id by calling 'GET /exchange/mailboxes'.
     */
    exgMailboxId: number;
  };
};

export type ExchangeResourceMailboxDeleteExchangeResourceMailboxResponse =
  StatusDto;

export type ExchangeResourceMailboxDeleteExchangeResourceMailboxError = unknown;

export type ExchangeResourceMailboxUpdateExchangeResourceMailboxData = {
  body: ExgMailboxEnableDisableDto_Request;
  path: {
    /**
     * Give exchange mailbox id to update resource mailbox, you can get exchange mailbox id by calling 'GET /exchange/mailboxes'.
     */
    exgMailboxId: number;
  };
};

export type ExchangeResourceMailboxUpdateExchangeResourceMailboxResponse =
  ExgMailboxDto;

export type ExchangeResourceMailboxUpdateExchangeResourceMailboxError = unknown;

export type ExchangeResourceMailboxGetArchiveResourceMailboxSettingsData = {
  path: {
    /**
     * Give mailbox id to get archive resource mailbox settings, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxGetArchiveResourceMailboxSettingsResponse =
  ExchangeArchiveMailboxListDto;

export type ExchangeResourceMailboxGetArchiveResourceMailboxSettingsError =
  unknown;

export type ExchangeResourceMailboxUpdateArchiveResourceMailboxData = {
  body: UpdateArchiveMailboxDto_Request;
  path: {
    /**
     * Give mailbox id to update archive resource mailbox, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxUpdateArchiveResourceMailboxResponse =
  ExchangeArchiveMailboxDto;

export type ExchangeResourceMailboxUpdateArchiveResourceMailboxError = unknown;

export type ExchangeResourceMailboxAddArchiveResourceMailboxData = {
  body: CreateArchiveMailboxDto_Request;
  path: {
    /**
     * Give mailbox id to add archive resource mailbox, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxAddArchiveResourceMailboxResponse =
  ExchangeArchiveMailboxDto;

export type ExchangeResourceMailboxAddArchiveResourceMailboxError = unknown;

export type ExchangeResourceMailboxUpdateArchiveResourceMailboxStatusData = {
  body: UpdateArchiveMailboxStatusDto_Request;
  path: {
    /**
     * Give mailbox id to set mailbox auto reply configuration, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxUpdateArchiveResourceMailboxStatusResponse =
  StatusDto;

export type ExchangeResourceMailboxUpdateArchiveResourceMailboxStatusError =
  unknown;

export type ExchangeResourceMailboxGetExchangeResourceMailboxGeneralPropertiesData =
  {
    path: {
      /**
       * Give mailbox id to set mailbox auto reply configuration, you can get mailbox id by calling 'GET /exchange/mailboxes'.
       */
      mailboxId: number;
    };
  };

export type ExchangeResourceMailboxGetExchangeResourceMailboxGeneralPropertiesResponse =
  UpdateUserGeneralPropertiesDto;

export type ExchangeResourceMailboxGetExchangeResourceMailboxGeneralPropertiesError =
  unknown;

export type ExchangeResourceMailboxUpdateExchangeResourceMailboxGeneralPropertiesData =
  {
    body: UpdateUserGeneralPropertiesDto_Request;
    path: {
      /**
       * Give mailbox id to update resource mailbox general properties, you can get mailbox id by calling 'GET /exchange/mailboxes'.
       */
      mailboxId: number;
    };
  };

export type ExchangeResourceMailboxUpdateExchangeResourceMailboxGeneralPropertiesResponse =
  StatusDto;

export type ExchangeResourceMailboxUpdateExchangeResourceMailboxGeneralPropertiesError =
  unknown;

export type ExchangeResourceMailboxGetExchangeResourceMailboxAdvancedPropertiesData =
  {
    path: {
      /**
       * Give mailbox id to set mailbox auto reply configuration, you can get mailbox id by calling 'GET /exchange/mailboxes'.
       */
      mailboxId: number;
    };
  };

export type ExchangeResourceMailboxGetExchangeResourceMailboxAdvancedPropertiesResponse =
  UserMailboxAdvancedPropertiesDto;

export type ExchangeResourceMailboxGetExchangeResourceMailboxAdvancedPropertiesError =
  unknown;

export type ExchangeResourceMailboxUpdateExchangeResourceMailboxAdvancedPropertiesData =
  {
    body: UserMailboxAdvancedPropertiesDto_Request;
    path: {
      /**
       * Give mailbox id to update resource mailbox advanced properties, you can get mailbox id by calling 'GET /exchange/mailboxes'.
       */
      mailboxId: number;
    };
  };

export type ExchangeResourceMailboxUpdateExchangeResourceMailboxAdvancedPropertiesResponse =
  UserMailboxAdvancedPropertiesDto;

export type ExchangeResourceMailboxUpdateExchangeResourceMailboxAdvancedPropertiesError =
  unknown;

export type ExchangeResourceMailboxGetResourceMailboxEmailAddressesData = {
  path: {
    /**
     * Give mailbox id to get filtered list of resource mailbox email addresses according to it, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxGetResourceMailboxEmailAddressesResponse =
  UserMailboxEmailAddressesDto;

export type ExchangeResourceMailboxGetResourceMailboxEmailAddressesError =
  unknown;

export type ExchangeResourceMailboxSetPrimaryEmailAddressesData = {
  body: SetPrimaryEmailAddressDto_Request;
  path: {
    /**
     * Give mailbox id to set primary email address, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxSetPrimaryEmailAddressesResponse = StatusDto;

export type ExchangeResourceMailboxSetPrimaryEmailAddressesError = unknown;

export type ExchangeResourceMailboxAddResourceMailboxEmailAddressesData = {
  body: AddUserMailboxEmailAddressDto_Request;
  path: {
    /**
     * Give mailbox id to add resource mailbox email address, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxAddResourceMailboxEmailAddressesResponse =
  StatusDto;

export type ExchangeResourceMailboxAddResourceMailboxEmailAddressesError =
  unknown;

export type ExchangeResourceMailboxDeleteResourceMailboxEmailAddressesData = {
  path: {
    /**
     * Give mailbox id to delete resource mailbox email address according to it, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
  query?: {
    emailAddress?: string;
  };
};

export type ExchangeResourceMailboxDeleteResourceMailboxEmailAddressesResponse =
  StatusDto;

export type ExchangeResourceMailboxDeleteResourceMailboxEmailAddressesError =
  unknown;

export type ExchangeResourceMailboxGetResourceMailboxSendOnBehalfUsersData = {
  path: {
    /**
     * Give mailbox id to get filtered list of resource mailbox send on behalf users according to it, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxGetResourceMailboxSendOnBehalfUsersResponse =
  ExchangeRecipientListDto;

export type ExchangeResourceMailboxGetResourceMailboxSendOnBehalfUsersError =
  unknown;

export type ExchangeResourceMailboxAddResourceMailboxSendOnBehalfUsersData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give mailbox id to add resource mailbox send on behalf users, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxAddResourceMailboxSendOnBehalfUsersResponse =
  StatusDto;

export type ExchangeResourceMailboxAddResourceMailboxSendOnBehalfUsersError =
  unknown;

export type ExchangeResourceMailboxRemoveResourceMailboxSendOnBehalfUsersData =
  {
    body: ExchangeRecipientListDto_Request;
    path: {
      /**
       * Give mailbox id to remove resource mailbox send on behalf users, you can get mailbox id by calling 'GET /exchange/mailboxes'.
       */
      mailboxId: number;
    };
  };

export type ExchangeResourceMailboxRemoveResourceMailboxSendOnBehalfUsersResponse =
  StatusDto;

export type ExchangeResourceMailboxRemoveResourceMailboxSendOnBehalfUsersError =
  unknown;

export type ExchangeResourceMailboxGetResourceMailboxAcceptedSendersData = {
  path: {
    /**
     * Give mailbox id to get resource mailbox accepted senders, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxGetResourceMailboxAcceptedSendersResponse =
  ExchangeRecipientListDto;

export type ExchangeResourceMailboxGetResourceMailboxAcceptedSendersError =
  unknown;

export type ExchangeResourceMailboxAddResourceMailboxAcceptedSendersData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give mailbox id to add resource mailbox accepted senders, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxAddResourceMailboxAcceptedSendersResponse =
  StatusDto;

export type ExchangeResourceMailboxAddResourceMailboxAcceptedSendersError =
  unknown;

export type ExchangeResourceMailboxRemoveResourceMailboxAcceptedSendersData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give mailbox id to remove resource mailbox accepted senders, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxRemoveResourceMailboxAcceptedSendersResponse =
  StatusDto;

export type ExchangeResourceMailboxRemoveResourceMailboxAcceptedSendersError =
  unknown;

export type ExchangeResourceMailboxGetResourceMailboxRejectedSendersData = {
  path: {
    /**
     * Give mailbox id to get resource mailbox rejected senders, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxGetResourceMailboxRejectedSendersResponse =
  ExchangeRecipientListDto;

export type ExchangeResourceMailboxGetResourceMailboxRejectedSendersError =
  unknown;

export type ExchangeResourceMailboxAddResourceMailboxRejectedSendersData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give mailbox id to add resource mailbox rejected senders, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxAddResourceMailboxRejectedSendersResponse =
  StatusDto;

export type ExchangeResourceMailboxAddResourceMailboxRejectedSendersError =
  unknown;

export type ExchangeResourceMailboxRemoveResourceMailboxRejectedSendersData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give mailbox id to remove resource mailbox rejected senders, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxRemoveResourceMailboxRejectedSendersResponse =
  StatusDto;

export type ExchangeResourceMailboxRemoveResourceMailboxRejectedSendersError =
  unknown;

export type ExchangeResourceMailboxGetUserFullAccessPermissionData = {
  path: {
    /**
     * Give mailbox id to get mailbox full access permissions, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxGetUserFullAccessPermissionResponse =
  ExchangeRecipientListDto;

export type ExchangeResourceMailboxGetUserFullAccessPermissionError = unknown;

export type ExchangeResourceMailboxAddUserFullAccessPermissionData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give mailbox id to add mailbox full access permission, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxAddUserFullAccessPermissionResponse =
  StatusDto;

export type ExchangeResourceMailboxAddUserFullAccessPermissionError = unknown;

export type ExchangeResourceMailboxRemoveUserFullAccessPermissionData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give mailbox id to remove mailbox full access permissions according to it, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxRemoveUserFullAccessPermissionResponse =
  StatusDto;

export type ExchangeResourceMailboxRemoveUserFullAccessPermissionError =
  unknown;

export type ExchangeResourceMailboxGetUserSendAsPermissionData = {
  path: {
    /**
     * Give mailbox id to get mailbox send as permissions according to it, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxGetUserSendAsPermissionResponse =
  ExchangeRecipientListDto;

export type ExchangeResourceMailboxGetUserSendAsPermissionError = unknown;

export type ExchangeResourceMailboxAddUserSendAsPermissionData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give mailbox id to add mailbox send as permission according to it, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxAddUserSendAsPermissionResponse = StatusDto;

export type ExchangeResourceMailboxAddUserSendAsPermissionError = unknown;

export type ExchangeResourceMailboxRemoveUserSendAsPermissionData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give mailbox id to remove mailbox send as permission, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxRemoveUserSendAsPermissionResponse =
  StatusDto;

export type ExchangeResourceMailboxRemoveUserSendAsPermissionError = unknown;

export type ExchangeResourceMailboxGetUserForwardingAddressData = {
  path: {
    /**
     * Give mailbox id to get mailbox forwarding Address, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxGetUserForwardingAddressResponse =
  ExchangeMailboxForwardingDto;

export type ExchangeResourceMailboxGetUserForwardingAddressError = unknown;

export type ExchangeResourceMailboxUpdateUserForwardingAddressData = {
  body: ExchangeMailboxForwardingDto_Request;
  path: {
    /**
     * Give mailbox id to update mailbox forwarding address according to it, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxUpdateUserForwardingAddressResponse =
  StatusDto;

export type ExchangeResourceMailboxUpdateUserForwardingAddressError = unknown;

export type ExchangeResourceMailboxGetResourceMailboxStatisticsData = {
  path: {
    /**
     * Give mailbox id to get resource mailbox statistics according to it, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxGetResourceMailboxStatisticsResponse =
  ExchangeMailboxStatsDto;

export type ExchangeResourceMailboxGetResourceMailboxStatisticsError = unknown;

export type ExchangeResourceMailboxGetAllListsOfUserMailboxData = {
  path: {
    /**
     * Give mailbox id to get all distribution lists of user mailbox according to it, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxGetAllListsOfUserMailboxResponse =
  ExchangeRecipientListDto;

export type ExchangeResourceMailboxGetAllListsOfUserMailboxError = unknown;

export type ExchangeResourceMailboxAddUserMailboxToListData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give mailbox id to add user mailbox to distribution list according to it, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxAddUserMailboxToListResponse =
  ExchangeRecipientListDto;

export type ExchangeResourceMailboxAddUserMailboxToListError = unknown;

export type ExchangeResourceMailboxRemoveUserMailboxFromListData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give mailbox id to remove user mailbox from distribution list, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxRemoveUserMailboxFromListResponse =
  ExchangeRecipientListDto;

export type ExchangeResourceMailboxRemoveUserMailboxFromListError = unknown;

export type ExchangeResourceMailboxGetDelegatesForResourceMailboxData = {
  path: {
    /**
     * Give mailbox id to get filtered list of delegates for resource mailbox according to it, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxGetDelegatesForResourceMailboxResponse =
  ResourceDelegateListDto;

export type ExchangeResourceMailboxGetDelegatesForResourceMailboxError =
  unknown;

export type ExchangeResourceMailboxAddDelegatesForResourceMailboxData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give mailbox id to add delegates for resource mailbox, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxAddDelegatesForResourceMailboxResponse =
  StatusDto;

export type ExchangeResourceMailboxAddDelegatesForResourceMailboxError =
  unknown;

export type ExchangeResourceMailboxRemoveDelegatesForResourceMailboxData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give mailbox id to remove delegates for resource mailbox according to it, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxRemoveDelegatesForResourceMailboxResponse =
  StatusDto;

export type ExchangeResourceMailboxRemoveDelegatesForResourceMailboxError =
  unknown;

export type ExchangeResourceMailboxGetResourceMailboxBookInPolicyUsersData = {
  path: {
    /**
     * Give mailbox id to get resource mailbox book in policy users, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxGetResourceMailboxBookInPolicyUsersResponse =
  PolicyUserListDto;

export type ExchangeResourceMailboxGetResourceMailboxBookInPolicyUsersError =
  unknown;

export type ExchangeResourceMailboxAddResourceMailboxBookInPolicyRequestData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give mailbox id to add resource mailbox book in policy request, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxAddResourceMailboxBookInPolicyRequestResponse =
  StatusDto;

export type ExchangeResourceMailboxAddResourceMailboxBookInPolicyRequestError =
  unknown;

export type ExchangeResourceMailboxRemoveResourceMailboxBookInPolicyUsersData =
  {
    body: ExchangeRecipientListDto_Request;
    path: {
      /**
       * Give mailbox id to remove resource mailbox book in policy, you can get mailbox id by calling 'GET /exchange/mailboxes'.
       */
      mailboxId: number;
    };
  };

export type ExchangeResourceMailboxRemoveResourceMailboxBookInPolicyUsersResponse =
  StatusDto;

export type ExchangeResourceMailboxRemoveResourceMailboxBookInPolicyUsersError =
  unknown;

export type ExchangeResourceMailboxGetResourceMailboxRequestInPolicyUsersData =
  {
    path: {
      /**
       * Give mailbox id to get resource mailbox request in policy users, you can get mailbox id by calling 'GET /exchange/mailboxes'.
       */
      mailboxId: number;
    };
  };

export type ExchangeResourceMailboxGetResourceMailboxRequestInPolicyUsersResponse =
  PolicyUserListDto;

export type ExchangeResourceMailboxGetResourceMailboxRequestInPolicyUsersError =
  unknown;

export type ExchangeResourceMailboxAddResourceMailboxRequestInPolicyUsersData =
  {
    body: ExchangeRecipientListDto_Request;
    path: {
      /**
       * Give mailbox id to add resource mailbox request in policy users, you can get mailbox id by calling 'GET /exchange/mailboxes'.
       */
      mailboxId: number;
    };
  };

export type ExchangeResourceMailboxAddResourceMailboxRequestInPolicyUsersResponse =
  StatusDto;

export type ExchangeResourceMailboxAddResourceMailboxRequestInPolicyUsersError =
  unknown;

export type ExchangeResourceMailboxRemoveResourceMailboxRequestInPolicyUsersData =
  {
    body: ExchangeRecipientListDto_Request;
    path: {
      /**
       * Give mailbox id to remove resource mailbox request in policy users, you can get mailbox id by calling 'GET /exchange/mailboxes'.
       */
      mailboxId: number;
    };
  };

export type ExchangeResourceMailboxRemoveResourceMailboxRequestInPolicyUsersResponse =
  StatusDto;

export type ExchangeResourceMailboxRemoveResourceMailboxRequestInPolicyUsersError =
  unknown;

export type ExchangeResourceMailboxGetResourceMailboxOutPolicyUsersData = {
  path: {
    /**
     * Give mailbox id to get filtered list of resource mailbox out policy users according to it, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxGetResourceMailboxOutPolicyUsersResponse =
  PolicyUserListDto;

export type ExchangeResourceMailboxGetResourceMailboxOutPolicyUsersError =
  unknown;

export type ExchangeResourceMailboxAddResourceMailboxOutPolicyUsersData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give mailbox id to add resource mailbox out policy users, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxAddResourceMailboxOutPolicyUsersResponse =
  StatusDto;

export type ExchangeResourceMailboxAddResourceMailboxOutPolicyUsersError =
  unknown;

export type ExchangeResourceMailboxRemoveResourceMailboxOutPolicyUsersData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give mailbox id to set mailbox auto reply configuration, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxRemoveResourceMailboxOutPolicyUsersResponse =
  StatusDto;

export type ExchangeResourceMailboxRemoveResourceMailboxOutPolicyUsersError =
  unknown;

export type ExchangeResourceMailboxGetResourceMaiboxPolicySettingsData = {
  path: {
    /**
     * Give mailbox id to get resource mailbox policy settings, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxGetResourceMaiboxPolicySettingsResponse =
  ResourceMailboxPropertiesDto;

export type ExchangeResourceMailboxGetResourceMaiboxPolicySettingsError =
  unknown;

export type ExchangeResourceMailboxUpdateResourceMaiboxPolicySettingsData = {
  body: ResourceMailboxPropertiesDto_Request;
  path: {
    /**
     * Give mailbox id to update resource mailbox policy settings, you can get mailbox id by calling 'GET /exchange/mailboxes'.
     */
    mailboxId: number;
  };
};

export type ExchangeResourceMailboxUpdateResourceMaiboxPolicySettingsResponse =
  StatusDto;

export type ExchangeResourceMailboxUpdateResourceMaiboxPolicySettingsError =
  unknown;

export type ExchangePublicFolderGetAllExchangePublicFoldersData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give email address to get filtered list of exchange public folders according to it.
     */
    emailID?: string;
    /**
     * Give organization id to get filtered list of exchange public folders according to it, you can get organiation id by calling 'GET /organizations/exchange'.
     */
    organizationId?: number;
    /**
     * Give owner id to get filtered list of exchange public folders according to it, you can get owner id by calling 'GET /panel-users'.
     */
    ownerId?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give public folder name to get filtered list of exchange public folders according to it.
     */
    pFName?: string;
  };
};

export type ExchangePublicFolderGetAllExchangePublicFoldersResponse =
  ExchangePublicFoldersDto;

export type ExchangePublicFolderGetAllExchangePublicFoldersError = unknown;

export type ExchangePublicFolderAddExchangePublicFolderData = {
  body: ExchangePublicFolderDto_Request;
};

export type ExchangePublicFolderAddExchangePublicFolderResponse =
  ExchangePublicFolderDto;

export type ExchangePublicFolderAddExchangePublicFolderError = unknown;

export type ExchangePublicFolderGetExchangePublicFolderDetailsData = {
  path: {
    /**
     * Give public folder id to get exchange public folder details according to it, you can get public folder id by calling 'GET /exchange/public-folders'.
     */
    publicFolderId: number;
  };
};

export type ExchangePublicFolderGetExchangePublicFolderDetailsResponse =
  ExchangePublicFolderDto;

export type ExchangePublicFolderGetExchangePublicFolderDetailsError = unknown;

export type ExchangePublicFolderDeleteExchangePublicFolderData = {
  path: {
    /**
     * Give public folder id to delete, you can get public folder id by calling 'GET /exchange/public-folders'.
     */
    publicFolderId: number;
  };
};

export type ExchangePublicFolderDeleteExchangePublicFolderResponse = StatusDto;

export type ExchangePublicFolderDeleteExchangePublicFolderError = unknown;

export type ExchangePublicFolderGetExchangePublicFolderGeneralPropertiesData = {
  path: {
    /**
     * Give public folder id to get exchange public folder details according to it, you can get public folder id by calling 'GET /exchange/public-folders'.
     */
    publicFolderId: number;
  };
};

export type ExchangePublicFolderGetExchangePublicFolderGeneralPropertiesResponse =
  ExchangePublicFolderGeneralPropertiesDto;

export type ExchangePublicFolderGetExchangePublicFolderGeneralPropertiesError =
  unknown;

export type ExchangePublicFolderUpdateExchangePublicFolderGeneralPropertiesData =
  {
    body: ExchangePublicFolderGeneralPropertiesDto_Request;
    path: {
      /**
       * Give public folder id to update exchange public folder details according to it, you can get public folder id by calling 'GET /exchange/public-folders'.
       */
      publicFolderId: number;
    };
  };

export type ExchangePublicFolderUpdateExchangePublicFolderGeneralPropertiesResponse =
  StatusDto;

export type ExchangePublicFolderUpdateExchangePublicFolderGeneralPropertiesError =
  unknown;

export type ExchangePublicFolderGetExchangePublicFolderAdvancedPropertiesData =
  {
    path: {
      /**
       * Give public folder id to get exchange public folder advanced properties according to it, you can get public folder id by calling 'GET /exchange/public-folders'.
       */
      publicFolderId: number;
    };
  };

export type ExchangePublicFolderGetExchangePublicFolderAdvancedPropertiesResponse =
  ExchangePublicFolderAdvancedPropertiesDto;

export type ExchangePublicFolderGetExchangePublicFolderAdvancedPropertiesError =
  unknown;

export type ExchangePublicFolderUpdateExchangePublicFolderAdvancedPropertiesData =
  {
    body: ExchangePublicFolderAdvancedPropertiesDto_Request;
    path: {
      /**
       * Give public folder id to update exchange public folder advanced properties according to it, you can get public folder id by calling 'GET /exchange/public-folders'.
       */
      publicFolderId: number;
    };
  };

export type ExchangePublicFolderUpdateExchangePublicFolderAdvancedPropertiesResponse =
  StatusDto;

export type ExchangePublicFolderUpdateExchangePublicFolderAdvancedPropertiesError =
  unknown;

export type ExchangePublicFolderGetExchangePublicFolderPermissionsData = {
  path: {
    /**
     * Give public folder id to get exchange public folder permissions according to it, you can get public folder id by calling 'GET /exchange/public-folders'.
     */
    publicFolderId: number;
  };
};

export type ExchangePublicFolderGetExchangePublicFolderPermissionsResponse =
  ExchangePFUsersListDto;

export type ExchangePublicFolderGetExchangePublicFolderPermissionsError =
  unknown;

export type ExchangePublicFolderUpdateExchangePublicFolderPermissionsData = {
  body: UpdatePFClientPermission_Request;
  path: {
    /**
     * Give public folder id to update exchange public folder permissions according to it, you can get public folder id by calling 'GET /exchange/public-folders'.
     */
    publicFolderId: number;
  };
};

export type ExchangePublicFolderUpdateExchangePublicFolderPermissionsResponse =
  StatusDto;

export type ExchangePublicFolderUpdateExchangePublicFolderPermissionsError =
  unknown;

export type ExchangePublicFolderGetPublicFolderAcceptedSendersData = {
  path: {
    /**
     * Give public folder id to get exchange public folder details according to it, you can get public folder id by calling 'GET /exchange/public-folders'.
     */
    publicFolderId: number;
  };
};

export type ExchangePublicFolderGetPublicFolderAcceptedSendersResponse =
  ExchangeRecipientListDto;

export type ExchangePublicFolderGetPublicFolderAcceptedSendersError = unknown;

export type ExchangePublicFolderAddPublicFolderAcceptedSendersData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give public folder id to add exchange public folder accepted senders according to it, you can get public folder id by calling 'GET /exchange/public-folders'.
     */
    publicFolderId: number;
  };
};

export type ExchangePublicFolderAddPublicFolderAcceptedSendersResponse =
  StatusDto;

export type ExchangePublicFolderAddPublicFolderAcceptedSendersError = unknown;

export type ExchangePublicFolderRemovePublicFolderAcceptedSendersData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give public folder id to remove exchange public folder accepted senders according to it, you can get public folder id by calling 'GET /exchange/public-folders'.
     */
    publicFolderId: number;
  };
};

export type ExchangePublicFolderRemovePublicFolderAcceptedSendersResponse =
  StatusDto;

export type ExchangePublicFolderRemovePublicFolderAcceptedSendersError =
  unknown;

export type ExchangePublicFolderGetPublicFolderRejectedSendersData = {
  path: {
    /**
     * Give public folder id to get exchange public folder rejected senders according to it, you can get public folder id by calling 'GET /exchange/public-folders'.
     */
    publicFolderId: number;
  };
};

export type ExchangePublicFolderGetPublicFolderRejectedSendersResponse =
  ExchangeRecipientListDto;

export type ExchangePublicFolderGetPublicFolderRejectedSendersError = unknown;

export type ExchangePublicFolderAddPublicFolderRejectedSendersData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give public folder id to add exchange public folder rejected senders, you can get public folder id by calling 'GET /exchange/public-folders'.
     */
    publicFolderId: number;
  };
};

export type ExchangePublicFolderAddPublicFolderRejectedSendersResponse =
  StatusDto;

export type ExchangePublicFolderAddPublicFolderRejectedSendersError = unknown;

export type ExchangePublicFolderRemovePublicFolderRejectedSendersData = {
  body: ExchangeRecipientListDto_Request;
  path: {
    /**
     * Give public folder id to remove exchange public folder rejected senders according to it, you can get public folder id by calling 'GET /exchange/public-folders'.
     */
    publicFolderId: number;
  };
};

export type ExchangePublicFolderRemovePublicFolderRejectedSendersResponse =
  StatusDto;

export type ExchangePublicFolderRemovePublicFolderRejectedSendersError =
  unknown;

export type ExchangePublicFolderGetPublicFolderEmailAddressesData = {
  path: {
    /**
     * Give public folder id to get filtered exchange public folder email addresses according to it, you can get public folder id by calling 'GET /exchange/public-folders'.
     */
    publicFolderId: number;
  };
};

export type ExchangePublicFolderGetPublicFolderEmailAddressesResponse =
  RecipientEmailAddressesDto;

export type ExchangePublicFolderGetPublicFolderEmailAddressesError = unknown;

export type ExchangePublicFolderAddPublicFolderEmailAddressesData = {
  body: AddRecipientEmailAddressDto_Request;
  path: {
    /**
     * Give public folder id to add exchange public folder email addresses, you can get public folder id by calling 'GET /exchange/public-folders'.
     */
    publicFolderId: number;
  };
};

export type ExchangePublicFolderAddPublicFolderEmailAddressesResponse =
  StatusDto;

export type ExchangePublicFolderAddPublicFolderEmailAddressesError = unknown;

export type ExchangePublicFolderDeletePublicFolderEmailAddressesData = {
  path: {
    /**
     * Give public folder id to delete exchange public folder email addresses according to it, you can get public folder id by calling 'GET /exchange/public-folders'.
     */
    publicFolderId: number;
  };
  query?: {
    /**
     * Give email address to delete exchange public folder email addresses according to it
     */
    emailAddress?: string;
  };
};

export type ExchangePublicFolderDeletePublicFolderEmailAddressesResponse =
  StatusDto;

export type ExchangePublicFolderDeletePublicFolderEmailAddressesError = unknown;

export type ExchangePublicFolderGetPublicFolderForwardingAddressData = {
  path: {
    /**
     * Give public folder id to get exchange public folder Forwarding address details according to it, you can get public folder id by calling 'GET /exchange/public-folders'.
     */
    publicFolderId: number;
  };
};

export type ExchangePublicFolderGetPublicFolderForwardingAddressResponse =
  ExchangePublicFolderForwardingDto;

export type ExchangePublicFolderGetPublicFolderForwardingAddressError = unknown;

export type ExchangePublicFolderUpdatePublicFolderForwardingAddressData = {
  body: ExchangePublicFolderForwardingDto_Request;
  path: {
    /**
     * Give public folder id to update exchange public folder forwarding address according to it, you can get public folder id by calling 'GET /exchange/public-folders'.
     */
    publicFolderId: number;
  };
};

export type ExchangePublicFolderUpdatePublicFolderForwardingAddressResponse =
  StatusDto;

export type ExchangePublicFolderUpdatePublicFolderForwardingAddressError =
  unknown;

export type ExchangePublicFolderEnableDisablePublicFolderData = {
  body: ExchangePublicFolderEnableDisableDto_Request;
  path: {
    /**
     * Give public folder id to enable disable public folder according to it, you can get public folder id by calling 'GET /exchange/public-folders'.
     */
    publicFolderId: number;
  };
};

export type ExchangePublicFolderEnableDisablePublicFolderResponse = StatusDto;

export type ExchangePublicFolderEnableDisablePublicFolderError = unknown;

export type ExchangeJournalRuleAddExchangeJournalRuleData = {
  body: ExchangeJournalRuleDto_Request;
  path: {
    /**
     * Give organization id to add journal rule, you can get organiation id by calling 'GET /organizations/exchange'.
     */
    organizationId: number;
  };
};

export type ExchangeJournalRuleAddExchangeJournalRuleResponse =
  ExchangeJournalRuleDto;

export type ExchangeJournalRuleAddExchangeJournalRuleError = unknown;

export type ExchangeJournalRuleDeleteExchangeJournalRuleData = {
  path: {
    /**
     * Give organization id to delete exchange journal rule, you can get organiation id by calling 'GET /organizations/exchange'.
     */
    organizationId: number;
  };
};

export type ExchangeJournalRuleDeleteExchangeJournalRuleResponse = StatusDto;

export type ExchangeJournalRuleDeleteExchangeJournalRuleError = unknown;

export type ExchangeJournalRuleGetAllExchangeJournalRulesData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give organization id to get filtered list of journal rule according to it, you can get organiation id by calling 'GET /organizations/exchange'.
     */
    organizationId?: number;
    /**
     * Give owner id to get filtered list of journal rule according to it, you can get owner id by calling 'GET /panel-users'.
     */
    ownerId?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
  };
};

export type ExchangeJournalRuleGetAllExchangeJournalRulesResponse =
  ExchangeJournalRulesDto;

export type ExchangeJournalRuleGetAllExchangeJournalRulesError = unknown;

export type ExchangeJournalRuleEnableDisableExchangeJournalRuleData = {
  body: ExchangeJournalRuleEnableDisableDto_Update;
  path: {
    /**
     * Give organization id to update exchange blocked domain rule status, you can get organiation id by calling 'GET /organizations/exchange'.
     */
    organizationId: number;
  };
};

export type ExchangeJournalRuleEnableDisableExchangeJournalRuleResponse =
  StatusDto;

export type ExchangeJournalRuleEnableDisableExchangeJournalRuleError = unknown;

export type ExchangeBlockedDomainRuleGetBlockedDomainRuleDetailsData = {
  path: {
    /**
     * Give organization id to get blocked domain rule details, you can get organiation id by calling 'GET /organizations/exchange'.
     */
    organizationId: number;
  };
};

export type ExchangeBlockedDomainRuleGetBlockedDomainRuleDetailsResponse =
  ExchangeBlockedDomainRuleDto;

export type ExchangeBlockedDomainRuleGetBlockedDomainRuleDetailsError = unknown;

export type ExchangeBlockedDomainRuleUpdateExchangeBlockedDomainRuleData = {
  body: ExchangeBlockedDomainRuleDto_Request;
  path: {
    /**
     * Give organization id to update blocked domain rule details, you can get organiation id by calling 'GET /organizations/exchange'.
     */
    organizationId: string;
  };
};

export type ExchangeBlockedDomainRuleUpdateExchangeBlockedDomainRuleResponse =
  ExchangeBlockedDomainRuleDto;

export type ExchangeBlockedDomainRuleUpdateExchangeBlockedDomainRuleError =
  unknown;

export type ExchangeBlockedDomainRuleAddExchangeBlockedDomainRuleData = {
  body: ExchangeBlockedDomainRuleDto_Request;
  path: {
    /**
     * Give organization id to add blocked domain rule, you can get organiation id by calling 'GET /organizations/exchange'.
     */
    organizationId: string;
  };
};

export type ExchangeBlockedDomainRuleAddExchangeBlockedDomainRuleResponse =
  ExchangeBlockedDomainRuleDto;

export type ExchangeBlockedDomainRuleAddExchangeBlockedDomainRuleError =
  unknown;

export type ExchangeBlockedDomainRuleDeleteExchangeBlockedDomainRuleData = {
  path: {
    /**
     * Give organization id to delete blocked domain rule details, you can get organiation id by calling 'GET /organizations/exchange'.
     */
    organizationId: number;
  };
};

export type ExchangeBlockedDomainRuleDeleteExchangeBlockedDomainRuleResponse =
  StatusDto;

export type ExchangeBlockedDomainRuleDeleteExchangeBlockedDomainRuleError =
  unknown;

export type ExchangeBlockedDomainRuleGetExchangeBlockedDomainRulesData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give organization id to get filtered list of blocked domain rule according to it, you can get organiation id by calling 'GET /organizations/exchange'.
     */
    organizationId?: number;
    /**
     * Give owner id to get filtered list of blocked domain rule according to it, you can get owner id by calling 'GET /panel-users'.
     */
    ownerId?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
  };
};

export type ExchangeBlockedDomainRuleGetExchangeBlockedDomainRulesResponse =
  ExchangeBlockedDomainRulesDto;

export type ExchangeBlockedDomainRuleGetExchangeBlockedDomainRulesError =
  unknown;

export type ExchangeBlockedDomainRuleEnableDisableExchangeBlockedDomainRuleData =
  {
    body: ExchangeBlockedDomainEnableDisableDto_Request;
    path: {
      /**
       * Give organization id to update blocked domain rule status, you can get organiation id by calling 'GET /organizations/exchange'.
       */
      organizationId: number;
    };
  };

export type ExchangeBlockedDomainRuleEnableDisableExchangeBlockedDomainRuleResponse =
  StatusDto;

export type ExchangeBlockedDomainRuleEnableDisableExchangeBlockedDomainRuleError =
  unknown;

export type ExchangeMailDisclaimerGetAllExchangeMailDisclaimersData = {
  path: {
    /**
     * Give organization id to get list of exchange mail disclaimers, you can get organiation id by calling 'GET /organizations/exchange'.
     */
    organizationId: number;
  };
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give owner id to get filtered list of exchange mail disclaimers according to it, you can get owner id by calling 'GET /panel-users'.
     */
    ownerId?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
  };
};

export type ExchangeMailDisclaimerGetAllExchangeMailDisclaimersResponse =
  ExchangeMailDisclaimersDto;

export type ExchangeMailDisclaimerGetAllExchangeMailDisclaimersError = unknown;

export type ExchangeMailDisclaimerUpdateExchangeMailDisclaimerData = {
  body: ExchangeMailDisclaimerDto_Request;
  path: {
    /**
     * Give organization id to update exchange mail disclaimer, you can get organiation id by calling 'GET /organizations/exchange'.
     */
    organizationId: number;
  };
};

export type ExchangeMailDisclaimerUpdateExchangeMailDisclaimerResponse =
  StatusDto;

export type ExchangeMailDisclaimerUpdateExchangeMailDisclaimerError = unknown;

export type ExchangeMailDisclaimerAddExchangeMailDisclaimerData = {
  body: ExchangeMailDisclaimerDto_Request;
  path: {
    /**
     * Give organization id to add exchange mail disclaimer, you can get organiation id by calling 'GET /organizations/exchange'.
     */
    organizationId: number;
  };
};

export type ExchangeMailDisclaimerAddExchangeMailDisclaimerResponse =
  ExchangeMailDisclaimerDto;

export type ExchangeMailDisclaimerAddExchangeMailDisclaimerError = unknown;

export type ExchangeMailDisclaimerDeleteExchangeMailDisclaimerData = {
  path: {
    /**
     * Give organization id to delete exchange mail disclaimer, you can get organiation id by calling 'GET /organizations/exchange'.
     */
    organizationId: number;
  };
};

export type ExchangeMailDisclaimerDeleteExchangeMailDisclaimerResponse =
  StatusDto;

export type ExchangeMailDisclaimerDeleteExchangeMailDisclaimerError = unknown;

export type ExchangeMailDisclaimerEnableDisableExchangeMailDisclaimerData = {
  body: ExchangeMailDisclaimerEnableDisableDto_Request;
  path: {
    /**
     * Give organization id to update status of exchange mail disclaimer, you can get organiation id by calling 'GET /organizations/exchange'.
     */
    organizationId: number;
  };
};

export type ExchangeMailDisclaimerEnableDisableExchangeMailDisclaimerResponse =
  StatusDto;

export type ExchangeMailDisclaimerEnableDisableExchangeMailDisclaimerError =
  unknown;

export type ExgConfsGetAllExgMailBoxesDbData = {
  path: {
    /**
     * Give server role id to get filtered list of exchange mailboxes database according to it, you can get server role id by calling 'GET /servers/{serverId}/roles'.
     */
    serverRoleId: number;
  };
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
  };
};

export type ExgConfsGetAllExgMailBoxesDbResponse = ExgMailboxDatabasesDto;

export type ExgConfsGetAllExgMailBoxesDbError = unknown;

export type ExgConfsGetAllExgMailBoxesDbByUserIdData = {
  path: {
    /**
     * Give server role id to get filtered list of exchange mailboxes database according to it, you can get server role id by calling 'GET /servers/{serverId}/roles'.
     */
    serverRoleId: number;
    /**
     * Give user id to get filtered list of exchange mailboxes database according to it, you can get user id by calling 'GET /panel-users'.
     */
    userId: number;
  };
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give user name to get filtered list of exchange mailboxes database according to it.
     */
    userName?: string;
  };
};

export type ExgConfsGetAllExgMailBoxesDbByUserIdResponse =
  ExgMailboxDatabasesDto;

export type ExgConfsGetAllExgMailBoxesDbByUserIdError = unknown;

export type ExgConfsGetAllExgPfMailBoxesData = {
  path: {
    /**
     * Give server role id to get filtered list of exchange public folder mailboxes according to it, you can get server role id by calling 'GET /servers/{serverId}/roles'.
     */
    serverRoleId: number;
  };
};

export type ExgConfsGetAllExgPfMailBoxesResponse = ExchangePfMailboxesDto;

export type ExgConfsGetAllExgPfMailBoxesError = unknown;

export type ExgConfsGetAllExgPfMailBoxesByUserIdData = {
  path: {
    /**
     * Give server role id to get filtered list of exchange public folder mailboxes according to it, you can get server role id by calling 'GET /servers/{serverId}/roles'.
     */
    serverRoleId: number;
    /**
     * Give user id to get filtered list of exchange public folder mailboxes according to it, you can get user id by calling 'GET /panel-users'.
     */
    userId: number;
  };
};

export type ExgConfsGetAllExgPfMailBoxesByUserIdResponse =
  ExchangePfMailboxesDto;

export type ExgConfsGetAllExgPfMailBoxesByUserIdError = unknown;

export type ExgConfsActiveSyncPoliciesData = {
  path: {
    /**
     * Give server role id to get filtered list of exchange servers according to it, you can get server role id by calling 'GET /servers/{serverId}/roles'.
     */
    serverRoleId: string;
  };
  query: {
    /**
     * Give server role id to get filtered list of exchange servers according to it, you can get server role id by calling 'GET /servers/{serverId}/roles'.
     */
    serverRoleId: number;
  };
};

export type ExgConfsActiveSyncPoliciesResponse = ActiveSyncPoliciesDto;

export type ExgConfsActiveSyncPoliciesError = unknown;

export type ExchangeGetExchangeListsByAdministratorData = {
  query: {
    /**
     * Give user email address to get filtered list of distribution list according to it.
     */
    administrator: string;
    /**
     * Give organization id to get filtered list of distribution list according to it, you can get organiation id by calling 'GET /organizations/exchange'.
     */
    organizationId: number;
  };
};

export type ExchangeGetExchangeListsByAdministratorResponse =
  ExchangeDistributionListsDto;

export type ExchangeGetExchangeListsByAdministratorError = unknown;

export type ExchangeIsUserDistributionListMemberData = {
  path: {
    /**
     * Give distribution list id to update exchange distribution list details, you can get distribution list id by calling 'GET /exchange/distribution-lists'.
     */
    distributionlistsId: number;
  };
  query: {
    /**
     * Give user email address to check its existance in distribution list.
     */
    userEmailAddress: string;
  };
};

export type ExchangeIsUserDistributionListMemberResponse = StatusDto;

export type ExchangeIsUserDistributionListMemberError = unknown;

export type SharePointSiteGetAllSharePointSitesData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give organization id to get filtered list of SharePoint sites according to it, you can get organiation id by calling 'GET /organizations/sharepoint'.
     */
    organizationId?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give site name to get filtered list of SharePoint sites according to it.
     */
    siteName?: string;
    /**
     * Give SharePoint host header to get filtered list of SharePoint sites according to it.
     */
    sPHostHeader?: string;
  };
};

export type SharePointSiteGetAllSharePointSitesResponse = SharePointSiteListDto;

export type SharePointSiteGetAllSharePointSitesError = unknown;

export type SharePointSiteAddSharePointSiteData = {
  body: SharePointSiteDto_Request;
};

export type SharePointSiteAddSharePointSiteResponse = SharePointSiteDto;

export type SharePointSiteAddSharePointSiteError = unknown;

export type SharePointSiteGetSharePointSiteDetailsData = {
  path: {
    /**
     * Give SharePoint site id to get its details, you can get SharePoint site id by calling 'GET /sharepoint/sites'.
     */
    sharePointSiteId: number;
  };
};

export type SharePointSiteGetSharePointSiteDetailsResponse = SharePointSiteDto;

export type SharePointSiteGetSharePointSiteDetailsError = unknown;

export type SharePointSiteDeleteSharePointSiteData = {
  path: {
    /**
     * Give SharePoint site id to delete it, you can get site id by calling 'GET /sharepoint/sites'.
     */
    sharePointSiteId: number;
  };
};

export type SharePointSiteDeleteSharePointSiteResponse = StatusDto;

export type SharePointSiteDeleteSharePointSiteError = unknown;

export type SharePointSiteGetAllSharePointSubSitesData = {
  path: {
    /**
     * Give site id to get filtered list of SharePoint subsites according to it, you can get site id by calling 'GET /sharepoint/sites'.
     */
    sharePointSiteId: number;
  };
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give organization id to get filtered list of SharePoint sites according to it, you can get organiation id by calling 'GET /organizations/sharepoint'.
     */
    organizationId?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give site name to get filtered list of SharePoint subsites according to it.
     */
    siteName?: string;
    /**
     * Give SharePoint host header to get filtered list of SharePoint subsites according to it.
     */
    sPHostHeader?: string;
  };
};

export type SharePointSiteGetAllSharePointSubSitesResponse =
  SharePointSiteListDto;

export type SharePointSiteGetAllSharePointSubSitesError = unknown;

export type SharePointSiteAddSharePointSubSiteData = {
  body: SharePointSubSiteDto_Request;
  path: {
    /**
     * Give SharePoint site id to add SharePoint subsite according to it, you can get site id by calling 'GET /sharepoint/sites'.
     */
    sharePointSiteId: number;
  };
};

export type SharePointSiteAddSharePointSubSiteResponse = SharePointSubSiteDto;

export type SharePointSiteAddSharePointSubSiteError = unknown;

export type SharePointSiteGetAllSharePointSiteRolesData = {
  path: {
    /**
     * Give SharePoint site id to get filtered list of SharePoint site roles according to it, you can get site id by calling 'GET /sharepoint/sites'.
     */
    sharePointSiteId: number;
  };
};

export type SharePointSiteGetAllSharePointSiteRolesResponse =
  SharePointRoleListDto;

export type SharePointSiteGetAllSharePointSiteRolesError = unknown;

export type SharePointSiteDeleteSharePointSubSiteData = {
  path: {
    /**
     * Give SharePoint subsite id to delete it, you can get user id by calling 'GET /sharepoint/sites/{sharePointSiteId}/subsites'.
     */
    sharePointSubSiteId: number;
  };
};

export type SharePointSiteDeleteSharePointSubSiteResponse = StatusDto;

export type SharePointSiteDeleteSharePointSubSiteError = unknown;

export type SharePointSiteGetSharePointSiteStatsData = {
  path: {
    /**
     * Give SharePoint site id to get SharePoint site summary according to it, you can get site id by calling 'GET /sharepoint/sites'.
     */
    sharePointSiteId: number;
  };
};

export type SharePointSiteGetSharePointSiteStatsResponse =
  SharePointSiteDetailDto;

export type SharePointSiteGetSharePointSiteStatsError = unknown;

export type SharePointUserGetSharePointUsersData = {
  path: {
    /**
     * Give site id to get filtered list of SharePoint users according to it, you can get site id by calling 'GET /sharepoint/sites'.
     */
    siteId: number;
  };
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give organization id to get filtered list of SharePoint users according to it, you can get organiation id by calling 'GET /organizations/sharepoint'.
     */
    organizationId?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give user name to get filtered list of SharePoint users according to it.
     */
    userName?: string;
  };
};

export type SharePointUserGetSharePointUsersResponse = SharePointUserListDto;

export type SharePointUserGetSharePointUsersError = unknown;

export type SharePointUserAddSharePointUserData = {
  body: SharePointUserDto_Request;
  path: {
    /**
     * Give site id to add SharePoint user, you can get site id by calling 'GET /sharepoint/sites'.
     */
    siteId: number;
  };
};

export type SharePointUserAddSharePointUserResponse = StatusDto;

export type SharePointUserAddSharePointUserError = unknown;

export type SharePointUserGetSharePointUserDetailsData = {
  path: {
    /**
     * Give SharePoint user id to get its details, you can get user id by calling 'GET /sharepoint/sites/{siteId}/users'.
     */
    sharePointUserId: number;
    /**
     * Give site id to get SharePoint user details according to it, you can get site id by calling 'GET /sharepoint/sites'.
     */
    siteId: number;
  };
};

export type SharePointUserGetSharePointUserDetailsResponse = SharePointUserDto;

export type SharePointUserGetSharePointUserDetailsError = unknown;

export type SharePointUserDeleteSharePointSiteUserData = {
  path: {
    /**
     * Give site id to delete SharePoint site user according to it, you can get site id by calling 'GET /sharepoint/sites'.
     */
    siteId: number;
    /**
     * Give SharePoint user id to delete it, you can get user id by calling 'GET /sharepoint/sites/{siteId}/users'.
     */
    userId: number;
  };
};

export type SharePointUserDeleteSharePointSiteUserResponse = StatusDto;

export type SharePointUserDeleteSharePointSiteUserError = unknown;

export type SharePointUserGetSharePointUserRolesData = {
  path: {
    /**
     * Give site id to get SharePoint user roles according to it, you can get site id by calling 'GET /sharepoint/sites'.
     */
    siteId: number;
    /**
     * Give sharePoint user id to get SharePoint user roles according to it, you can get user id by calling 'GET /sharepoint/sites/{siteId}/users'.
     */
    userId: number;
  };
};

export type SharePointUserGetSharePointUserRolesResponse =
  SharePointRoleListDto;

export type SharePointUserGetSharePointUserRolesError = unknown;

export type SharePointUserUpdateSharePointUserRolesData = {
  body: SharePointRoleListDto_Request;
  path: {
    /**
     * Give site id to update SharePoint user roles according to it, you can get site id by calling 'GET /sharepoint/sites'.
     */
    siteId: number;
    /**
     * Give SharePoint user id to Update SharePoint user roles according to it, you can get user id by calling 'GET /sharepoint/sites/{siteId}/users'.
     */
    userId: number;
  };
};

export type SharePointUserUpdateSharePointUserRolesResponse = StatusDto;

export type SharePointUserUpdateSharePointUserRolesError = unknown;

export type SharePointUserChangeSharePointUserPasswordData = {
  body: SharePointUserChangePasswordDto_Request;
  path: {
    /**
     * Give site id to change SharePoint user password according to it, you can get site id by calling 'GET /sharepoint/sites'.
     */
    siteId: number;
    /**
     * Give SharePoint user id to change its password, you can get user id by calling 'GET /sharepoint/sites/{siteId}/users'.
     */
    userId: number;
  };
};

export type SharePointUserChangeSharePointUserPasswordResponse = StatusDto;

export type SharePointUserChangeSharePointUserPasswordError = unknown;

export type SharePointUserGetSharePointUserPropertiesData = {
  path: {
    /**
     * Give site id to get filtered list of SharePoint user properties according to it, you can get site id by calling 'GET /sharepoint/sites'.
     */
    siteId: number;
    /**
     * Give SharePoint user id to get filtered list of SharePoint user properties according to it, you can get user id by calling 'GET /sharepoint/sites/{siteId}/users'.
     */
    userId: number;
  };
};

export type SharePointUserGetSharePointUserPropertiesResponse =
  SharePointGeneralProfileDto;

export type SharePointUserGetSharePointUserPropertiesError = unknown;

export type SharePointUserUpdateSharePointUserPropertiesData = {
  body: SharePointGeneralProfileDto_Request;
  path: {
    /**
     * Give site id to update SharePoint user properties according to it, you can get site id by calling 'GET /sharepoint/sites'.
     */
    siteId: number;
    /**
     * Give SharePoint user id to update its properties, you can get user id by calling 'GET /sharepoint/sites/{siteId}/users'.
     */
    userId: number;
  };
};

export type SharePointUserUpdateSharePointUserPropertiesResponse = StatusDto;

export type SharePointUserUpdateSharePointUserPropertiesError = unknown;

export type SharePointUserGetExistingSharePointUsersData = {
  path: {
    /**
     * Give site id to get filtered list of SharePoint groups according to it, you can get site id by calling 'GET /sharepoint/sites'.
     */
    siteId: number;
  };
};

export type SharePointUserGetExistingSharePointUsersResponse =
  ActiveDirectoryUsersListDto;

export type SharePointUserGetExistingSharePointUsersError = unknown;

export type SharePointGroupGetSharePointGroupsData = {
  path: {
    /**
     * Give site id to get filtered list of SharePoint groups according to it, you can get site id by calling 'GET /sharepoint/sites'.
     */
    siteId: number;
  };
};

export type SharePointGroupGetSharePointGroupsResponse = SharePointGroupListDto;

export type SharePointGroupGetSharePointGroupsError = unknown;

export type SharePointGroupAddSharePointGroupData = {
  body: SharePointGroupDto_Request;
  path: {
    /**
     * Give site id to add SharePoint group, you can get site id by calling 'GET /sharepoint/sites'.
     */
    siteId: number;
  };
};

export type SharePointGroupAddSharePointGroupResponse = StatusDto;

export type SharePointGroupAddSharePointGroupError = unknown;

export type SharePointGroupDeleteSharePointGroupsData = {
  path: {
    /**
     * Give group name to delete.
     */
    groupName: string;
    /**
     * Give site id to delete SharePoint group according to it, you can get site id by calling 'GET /sharepoint/sites'.
     */
    siteId: number;
  };
};

export type SharePointGroupDeleteSharePointGroupsResponse = StatusDto;

export type SharePointGroupDeleteSharePointGroupsError = unknown;

export type SharePointGroupGetSharePointGroupRolesData = {
  path: {
    /**
     * Give group name to get filtered list of SharePoint group roles according to it.
     */
    groupName: string;
    /**
     * Give site id to get filtered list of SharePoint group roles according to it, you can get site id by calling 'GET /sharepoint/sites'.
     */
    siteId: number;
  };
};

export type SharePointGroupGetSharePointGroupRolesResponse =
  SharePointRoleListDto;

export type SharePointGroupGetSharePointGroupRolesError = unknown;

export type SharePointGroupUpdateSharePointGroupRolesData = {
  body: SharePointRoleListDto_Request;
  path: {
    /**
     * Give group name to update its roles.
     */
    groupName: string;
    /**
     * Give site id to update SharePoint group roles according to it, you can get site id by calling 'GET /sharepoint/sites'.
     */
    siteId: number;
  };
};

export type SharePointGroupUpdateSharePointGroupRolesResponse = StatusDto;

export type SharePointGroupUpdateSharePointGroupRolesError = unknown;

export type SharePointGroupGetSharePointGroupUsersData = {
  path: {
    /**
     * Give group name to get filtered list of SharePoint group members according to it.
     */
    groupName: string;
    /**
     * Give site id to get filtered list of SharePoint group members according to it, you can get site id by calling 'GET /sharepoint/sites'.
     */
    siteId: number;
  };
};

export type SharePointGroupGetSharePointGroupUsersResponse =
  SharePointUserListDto;

export type SharePointGroupGetSharePointGroupUsersError = unknown;

export type SharePointGroupAddSharePointGroupUsersData = {
  body: SharePointGroupMemberListDto_Request;
  path: {
    /**
     * Give group name to add members in it.
     */
    groupName: string;
    /**
     * Give site id to add SharePoint group members according to it, you can get site id by calling 'GET /sharepoint/sites'.
     */
    siteId: number;
  };
};

export type SharePointGroupAddSharePointGroupUsersResponse = StatusDto;

export type SharePointGroupAddSharePointGroupUsersError = unknown;

export type SharePointGroupRemoveSharePointGroupUsersData = {
  body: SharePointGroupMemberListDto_Request;
  path: {
    /**
     * Give group name to remove members from it.
     */
    groupName: string;
    /**
     * Give site id to remove SharePoint group members according to it, you can get site id by calling 'GET /sharepoint/sites'.
     */
    siteId: number;
  };
};

export type SharePointGroupRemoveSharePointGroupUsersResponse = StatusDto;

export type SharePointGroupRemoveSharePointGroupUsersError = unknown;

export type SharePointConfGetUserSpWebApplicationsData = {
  path: {
    /**
     * Give server role id to get filtered list of user SharePoint web applications according to it, you can get server role id by calling 'GET /servers/{serverId}/roles'.
     */
    serverRoleId: number;
    /**
     * Give user id to get filtered list of user SharePoint web applications according to it, you can get user id by calling 'GET /panel-users'.
     */
    userId: number;
  };
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
  };
};

export type SharePointConfGetUserSpWebApplicationsResponse =
  SharePointUserWebApplicationListDto;

export type SharePointConfGetUserSpWebApplicationsError = unknown;

export type SharePointServerGetSharePointServerWebApplicationsData = {
  path: {
    /**
     * Give server role id to get filtered list of SharePoint server web applications according to it, you can get server role id by calling 'GET /servers/{serverId}/roles'.
     */
    serverRoleId: number;
  };
};

export type SharePointServerGetSharePointServerWebApplicationsResponse =
  SharePointWebApplicationListDto;

export type SharePointServerGetSharePointServerWebApplicationsError = unknown;

export type SharePointServerGetSharePointServerLocalesData = {
  path: {
    /**
     * Give server role id to get filtered list of SharePoint server locales according to it, you can get server role id by calling 'GET /servers/{serverId}/roles'.
     */
    serverRoleId: number;
  };
};

export type SharePointServerGetSharePointServerLocalesResponse =
  SharePointLocaleListDto;

export type SharePointServerGetSharePointServerLocalesError = unknown;

export type SharePointServerGetSharePointServerWebTemplatesData = {
  path: {
    /**
     * Give locale id to get filtered list of SharePoint server web templates according to it, you can get locale id by calling 'GET /sharepoint-server/{serverRoleId}/locales'.
     */
    localeId: string;
    /**
     * Give server role id to get filtered list of SharePoint server web templates according to it, you can get server role id by calling 'GET /servers/{serverId}/roles'.
     */
    serverRoleId: number;
  };
};

export type SharePointServerGetSharePointServerWebTemplatesResponse =
  SharePointWebTemplateListDto;

export type SharePointServerGetSharePointServerWebTemplatesError = unknown;

export type SkypeUserListSkypeUsersData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Set enterpriseVoiceEnabled to true to get filtered list of skype users according to it.
     */
    enterpriseVoiceEnabled?: boolean;
    /**
     * Give organization id to get filtered list of skype users according to it, you can get organiation id by calling 'GET /organizations/skype'.
     */
    organizationId?: number;
    /**
     * Give owner id to get filtered list of skype users according to it, you can get owner id by calling 'GET /panel-users'.
     */
    ownerId?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give SIP address to get filtered list of skype users according to it.
     */
    sIPAddress?: string;
    /**
     * Give SIP domain id to get filtered list of skype users according to it, you can get SIP domain id by calling 'GET /skype/sip-domains'.
     */
    sIPDomainId?: number;
    /**
     * Give skype user name to get filtered list of skype users according to it.
     */
    skypeUserName?: string;
  };
};

export type SkypeUserListSkypeUsersResponse = SkypeUserListDto;

export type SkypeUserListSkypeUsersError = unknown;

export type SkypeUserAddSkypeUserData = {
  body: SkypeUserDto_Request;
};

export type SkypeUserAddSkypeUserResponse = StatusDto;

export type SkypeUserAddSkypeUserError = unknown;

export type SkypeUserGetSkypeUserDetailsData = {
  path: {
    /**
     * Give skype user id to get its details, you can get owner id by calling 'GET /skype/users'.
     */
    skypeUserId: number;
  };
};

export type SkypeUserGetSkypeUserDetailsResponse = SkypeUserDto;

export type SkypeUserGetSkypeUserDetailsError = unknown;

export type SkypeUserDeleteSkypeUserData = {
  path: {
    /**
     * Give skype user id to get its details, you can get owner id by calling 'GET /skype/users'.
     */
    skypeUserId: number;
  };
};

export type SkypeUserDeleteSkypeUserResponse = StatusDto;

export type SkypeUserDeleteSkypeUserError = unknown;

export type SkypeUserChangeSkypeUserPasswordData = {
  body: SkypeUserChangePasswordDto_Request;
  path: {
    /**
     * Give user id to update its password, you can get user id by calling 'GET /skype/users'.
     */
    userId: number;
  };
};

export type SkypeUserChangeSkypeUserPasswordResponse = StatusDto;

export type SkypeUserChangeSkypeUserPasswordError = unknown;

export type SkypeUserGetSkypeUserPropertiesData = {
  path: {
    /**
     * Give user id to get its properties, you can get user id by calling 'GET /skype/users'.
     */
    userId: number;
  };
};

export type SkypeUserGetSkypeUserPropertiesResponse =
  SkypeUserGeneralProfileDto;

export type SkypeUserGetSkypeUserPropertiesError = unknown;

export type SkypeUserUpdateSkypeUserPropertiesData = {
  body: SkypeUserGeneralProfileDto_Request;
  path: {
    /**
     * Give user id to update its properties, you can get user id by calling 'GET /skype/users'.
     */
    userId: number;
  };
};

export type SkypeUserUpdateSkypeUserPropertiesResponse = StatusDto;

export type SkypeUserUpdateSkypeUserPropertiesError = unknown;

export type SkypeUserGetSkypeUserAdvancedSettingsData = {
  path: {
    /**
     * Give user id to get its advanced settings, you can get user id by calling 'GET /skype/users'.
     */
    userId: number;
  };
};

export type SkypeUserGetSkypeUserAdvancedSettingsResponse =
  SkypeUserAdvancedPropertiesDto;

export type SkypeUserGetSkypeUserAdvancedSettingsError = unknown;

export type SkypeUserUpdateSkypeUserAdvancedPropertiesData = {
  body: SkypeUserAdvancedPropertiesDto_Request;
  path: {
    /**
     * Give user id to update its advanced settings, you can get user id by calling 'GET /skype/users'.
     */
    userId: number;
  };
};

export type SkypeUserUpdateSkypeUserAdvancedPropertiesResponse = StatusDto;

export type SkypeUserUpdateSkypeUserAdvancedPropertiesError = unknown;

export type SkypeUserUpdateSkypeUserStatusData = {
  body: SkypeUserStatusDto_Request;
  path: {
    /**
     * Give user id to update its status, you can get user id by calling 'GET /skype/users'.
     */
    userId: number;
  };
};

export type SkypeUserUpdateSkypeUserStatusResponse = StatusDto;

export type SkypeUserUpdateSkypeUserStatusError = unknown;

export type SkypeUserGetSkypeUserForwardingSettingsData = {
  path: {
    /**
     * Give user id to get its forwarding settings, you can get user id by calling 'GET /skype/users'.
     */
    userId: number;
  };
};

export type SkypeUserGetSkypeUserForwardingSettingsResponse =
  SkypeUserForwardingSettingsDto;

export type SkypeUserGetSkypeUserForwardingSettingsError = unknown;

export type SkypeUserUpdateSkypeUserForwardingSettingsData = {
  body: SkypeUserForwardingSettingsDto_Request;
  path: {
    /**
     * Give user id to update its forwarding settings, you can get user id by calling 'GET /skype/users'.
     */
    userId: number;
  };
};

export type SkypeUserUpdateSkypeUserForwardingSettingsResponse = StatusDto;

export type SkypeUserUpdateSkypeUserForwardingSettingsError = unknown;

export type SkypeUserCheckBulkSkypeUsersFeasibilityData = {
  body: SkypeBulkUsersFeasibilityDto_Request;
};

export type SkypeUserCheckBulkSkypeUsersFeasibilityResponse =
  SkypeBulkUsersListDto;

export type SkypeUserCheckBulkSkypeUsersFeasibilityError = unknown;

export type SkypeUserAddBulkSkypeUsersData = {
  body: SkypeBulkUsersListDto_Request;
};

export type SkypeUserAddBulkSkypeUsersResponse = SkypeBulkUsersListDto;

export type SkypeUserAddBulkSkypeUsersError = unknown;

export type SkypeUserUpdateSkypeUserTelephonySettingsData = {
  body: SkypeUserTelephonySettingsDto_Request;
  path: {
    /**
     * Give user id to update its telephony settings, you can get user id by calling 'GET /skype/users'.
     */
    userId: number;
  };
};

export type SkypeUserUpdateSkypeUserTelephonySettingsResponse = StatusDto;

export type SkypeUserUpdateSkypeUserTelephonySettingsError = unknown;

export type SkypeUserUpdateSkypeUserPolicySettingsData = {
  body: SkypeUserPolicySettingsDto_Request;
  path: {
    /**
     * Give user id to update its policy settings, you can get user id by calling 'GET /skype/users'.
     */
    userId: number;
  };
};

export type SkypeUserUpdateSkypeUserPolicySettingsResponse = StatusDto;

export type SkypeUserUpdateSkypeUserPolicySettingsError = unknown;

export type SkypeSipDomainListSipDomainsData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give organization id to get filtered list of SIP domains according to it, you can get organiation id by calling 'GET /organizations/skype'.
     */
    organizationId?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give SIP domain name to get filtered list of SIP domains according to it.
     */
    sIPDomainName?: string;
  };
};

export type SkypeSipDomainListSipDomainsResponse = SkypeSipDomainListDto;

export type SkypeSipDomainListSipDomainsError = unknown;

export type SkypeSipDomainAddSkypeSipDomainData = {
  body: SkypeSipDomainDto_Request;
};

export type SkypeSipDomainAddSkypeSipDomainResponse = SkypeSipDomainDto;

export type SkypeSipDomainAddSkypeSipDomainError = unknown;

export type SkypeSipDomainGetSipDomainDetailsData = {
  path: {
    /**
     * Give SIP domain id to get its details, you can get SIP domain id by calling 'GET /skype/sip-domains'.
     */
    sipDomainId: number;
  };
};

export type SkypeSipDomainGetSipDomainDetailsResponse = SkypeSipDomainDto;

export type SkypeSipDomainGetSipDomainDetailsError = unknown;

export type SkypeSipDomainDeleteSipDomainData = {
  path: {
    /**
     * Give SIP domain id to delete it, you can get SIP domain id by calling 'GET /skype/sip-domains'.
     */
    sipDomainId: number;
  };
};

export type SkypeSipDomainDeleteSipDomainResponse = StatusDto;

export type SkypeSipDomainDeleteSipDomainError = unknown;

export type SkypeGroupListSkypeGroupsData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give organization id to get filtered list of skype groups according to it, you can get organiation id by calling 'GET /organizations/skype'.
     */
    organizationId?: number;
    /**
     * Give owner id to get filtered list of skype groups according to it, you can get owner id by calling 'GET /panel-users'.
     */
    ownerId?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give response group name to get filtered list of skype groups according to it.
     */
    responseGroupName?: string;
  };
};

export type SkypeGroupListSkypeGroupsResponse = SkypeGroupListDto;

export type SkypeGroupListSkypeGroupsError = unknown;

export type SkypeGroupAddSkypeResponseGroupData = {
  body: SkypeGroupDto_Request;
};

export type SkypeGroupAddSkypeResponseGroupResponse = SkypeGroupDto;

export type SkypeGroupAddSkypeResponseGroupError = unknown;

export type SkypeGroupGetSkypeGroupDetailsData = {
  path: {
    /**
     * Give response group id to get its details, you can get response group id by calling 'GET /skype/response-groups'.
     */
    skypeResponseGroupId: number;
  };
};

export type SkypeGroupGetSkypeGroupDetailsResponse = SkypeGroupDto;

export type SkypeGroupGetSkypeGroupDetailsError = unknown;

export type SkypeGroupDeleteSkypeGroupData = {
  path: {
    /**
     * Give response group id to delete it, you can get response group id by calling 'GET /skype/response-groups'.
     */
    skypeResponseGroupId: number;
  };
};

export type SkypeGroupDeleteSkypeGroupResponse = StatusDto;

export type SkypeGroupDeleteSkypeGroupError = unknown;

export type SkypeGroupGetSkypeGroupPropertiesData = {
  path: {
    /**
     * Give response group id to get skype group properties according to it, you can get response group id by calling 'GET /skype/response-groups'.
     */
    skypeResponseGroupId: number;
  };
};

export type SkypeGroupGetSkypeGroupPropertiesResponse = SkypeGroupDto;

export type SkypeGroupGetSkypeGroupPropertiesError = unknown;

export type SkypeGroupUpdateSkypeGroupPropertiesData = {
  body: SkypeGroupDto;
  path: {
    /**
     * Give response group id to get its properties, you can get response group id by calling 'GET /skype/response-groups'.
     */
    skypeResponseGroupId: number;
  };
};

export type SkypeGroupUpdateSkypeGroupPropertiesResponse = StatusDto;

export type SkypeGroupUpdateSkypeGroupPropertiesError = unknown;

export type SkypeQueueListSkypeQueuesData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give organization id to get filtered list of skype queues according to it, you can get organiation id by calling 'GET /organizations/skype'.
     */
    organizationId?: number;
    /**
     * Give owner id to get filtered list of skype queues according to it, you can get owner id by calling 'GET /panel-users'.
     */
    ownerId?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give response queue name to get filtered list of skype queues according to it.
     */
    responseQueueName?: string;
  };
};

export type SkypeQueueListSkypeQueuesResponse = SkypeQueueListDto;

export type SkypeQueueListSkypeQueuesError = unknown;

export type SkypeQueueAddSkypeResponseQueueData = {
  body: SkypeQueueDto_Request;
};

export type SkypeQueueAddSkypeResponseQueueResponse = SkypeQueueDto;

export type SkypeQueueAddSkypeResponseQueueError = unknown;

export type SkypeQueueGetSkypeQueueDetailsData = {
  path: {
    /**
     * Give skype response queue id to get its details, you can get queue id by calling 'GET /skype/queues'.
     */
    skypeResponseQueueId: number;
  };
};

export type SkypeQueueGetSkypeQueueDetailsResponse = SkypeQueueDto;

export type SkypeQueueGetSkypeQueueDetailsError = unknown;

export type SkypeQueueDeleteSkypeQueueData = {
  path: {
    /**
     * Give skype response queue id to delete it, you can get queue id by calling 'GET /skype/queues'.
     */
    skypeResponseQueueId: number;
  };
};

export type SkypeQueueDeleteSkypeQueueResponse = StatusDto;

export type SkypeQueueDeleteSkypeQueueError = unknown;

export type SkypeQueueGetSkypeQueuePropertiesData = {
  path: {
    /**
     * Give skype response queue id to get skype queue properties according to it, you can get queue id by calling 'GET /skype/queues'.
     */
    skypeResponseQueueId: number;
  };
};

export type SkypeQueueGetSkypeQueuePropertiesResponse = SkypeQueueDto;

export type SkypeQueueGetSkypeQueuePropertiesError = unknown;

export type SkypeQueueUpdateSkypeQueuePropertiesData = {
  body: SkypeQueueDto_Request;
  path: {
    /**
     * Give skype response queue id to update its properties, you can get queue id by calling 'GET /skype/queues'.
     */
    skypeResponseQueueId: number;
  };
};

export type SkypeQueueUpdateSkypeQueuePropertiesResponse = StatusDto;

export type SkypeQueueUpdateSkypeQueuePropertiesError = unknown;

export type SkypeWorkflowListSkypeWorkflowsData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give organization id to get filtered list of workflows according to it, you can get organiation id by calling 'GET /organizations/skype'.
     */
    organizationId?: number;
    /**
     * Give owner id to get filtered list of workflows according to it, you can get owner id by calling 'GET /panel-users'.
     */
    ownerId?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give SIP address to get filtered list of workflows according to it.
     */
    sIPAddress?: string;
    /**
     * Give workflow name to get filtered list of workflows according to it.
     */
    workflowName?: string;
  };
};

export type SkypeWorkflowListSkypeWorkflowsResponse = SkypeWorkflowListDto;

export type SkypeWorkflowListSkypeWorkflowsError = unknown;

export type SkypeWorkflowAddSkypeWorkflowData = {
  body: SkypeWorkflowDto_Request;
};

export type SkypeWorkflowAddSkypeWorkflowResponse = SkypeWorkflowDto;

export type SkypeWorkflowAddSkypeWorkflowError = unknown;

export type SkypeWorkflowGetSkypeWorkflowDetailsData = {
  path: {
    /**
     * Give workflow id to get its details, you can get workflow id by calling 'GET /skype/workflows'.
     */
    workflowId: number;
  };
};

export type SkypeWorkflowGetSkypeWorkflowDetailsResponse = SkypeWorkflowDto;

export type SkypeWorkflowGetSkypeWorkflowDetailsError = unknown;

export type SkypeWorkflowDeleteSkypeWorkflowData = {
  path: {
    /**
     * Give workflow id to delete it, you can get workflow id by calling 'GET /skype/workflows'.
     */
    workflowId: number;
  };
};

export type SkypeWorkflowDeleteSkypeWorkflowResponse = StatusDto;

export type SkypeWorkflowDeleteSkypeWorkflowError = unknown;

export type SkypeWorkflowGetSkypeWorkflowSettingsData = {
  path: {
    /**
     * Give workflow id to get its settings, you can get workflow id by calling 'GET /skype/workflows'.
     */
    workflowId: number;
  };
};

export type SkypeWorkflowGetSkypeWorkflowSettingsResponse = SkypeWorkflowDto;

export type SkypeWorkflowGetSkypeWorkflowSettingsError = unknown;

export type SkypeWorkflowUpdateSkypeWorkflowSettingsData = {
  body: SkypeWorkflowGeneralSettingsDto;
  path: {
    /**
     * Give workflow id to update its settings, you can get workflow id by calling 'GET /skype/workflows'.
     */
    workflowId: number;
  };
};

export type SkypeWorkflowUpdateSkypeWorkflowSettingsResponse = StatusDto;

export type SkypeWorkflowUpdateSkypeWorkflowSettingsError = unknown;

export type SkypeWorkflowUpdateWorkflowActivationStatusData = {
  body: SkypeWorkflowStatusDto_Request;
  path: {
    /**
     * Give workflow id to update its activation status, you can get workflow id by calling 'GET /skype/workflows'.
     */
    workflowId: number;
  };
};

export type SkypeWorkflowUpdateWorkflowActivationStatusResponse = StatusDto;

export type SkypeWorkflowUpdateWorkflowActivationStatusError = unknown;

export type SkypeWorkflowUpdateWorkflowFederationStatusData = {
  body: SkypeWorkflowStatusDto_Request;
  path: {
    /**
     * Give workflow id to update its federation status, you can get workflow id by calling 'GET /skype/workflows'.
     */
    workflowId: number;
  };
};

export type SkypeWorkflowUpdateWorkflowFederationStatusResponse = StatusDto;

export type SkypeWorkflowUpdateWorkflowFederationStatusError = unknown;

export type SkypeWorkflowUpdateWorkflowAnonymityStatusData = {
  body: SkypeWorkflowStatusDto_Request;
  path: {
    /**
     * Give workflow id to update its anonymity status, you can get workflow id by calling 'GET /skype/workflows'.
     */
    workflowId: number;
  };
};

export type SkypeWorkflowUpdateWorkflowAnonymityStatusResponse = StatusDto;

export type SkypeWorkflowUpdateWorkflowAnonymityStatusError = unknown;

export type SkypeWorkflowUpdateWorkflowIvrSettingsData = {
  body: SkypeWorkflowIvrSettingsDto_Request;
  path: {
    /**
     * Give workflow id to update its IVR settings, you can get workflow id by calling 'GET /skype/workflows'.
     */
    workflowId: number;
  };
};

export type SkypeWorkflowUpdateWorkflowIvrSettingsResponse = StatusDto;

export type SkypeWorkflowUpdateWorkflowIvrSettingsError = unknown;

export type SkypeServerGetServerRegistrarPoolsData = {
  path: {
    /**
     * Give server role id to get filtered server registrar pools according to it, you can get server role id by calling 'GET /servers/{serverId}/roles'.
     */
    serverRoleId: number;
  };
};

export type SkypeServerGetServerRegistrarPoolsResponse =
  SkypeRegistrarPoolListDto;

export type SkypeServerGetServerRegistrarPoolsError = unknown;

export type SkypeServerGetUserAssignedServerPoolsData = {
  path: {
    /**
     * Give server role id to get filtered list of user assigned server pools according to it, you can get server role id by calling 'GET /servers/{serverId}/roles'.
     */
    serverRoleId: number;
    /**
     * Give user id to get filtered list of assigned server pools according to it, you can get user id by calling 'GET /panel-users'.
     */
    userId: number;
  };
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
  };
};

export type SkypeServerGetUserAssignedServerPoolsResponse =
  SkypeRegistrarPoolListDto;

export type SkypeServerGetUserAssignedServerPoolsError = unknown;

export type SkypeServerGetServerTimeZonesData = {
  path: {
    /**
     * Give server role id to get filtered list of server time zones according to it, you can get server role id by calling 'GET /servers/{serverId}/roles'.
     */
    serverRoleId: number;
  };
};

export type SkypeServerGetServerTimeZonesResponse = SkypeTimeZoneListDto;

export type SkypeServerGetServerTimeZonesError = unknown;

export type SkypeServerListUserLineUrisData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give line URI to get filtered list of user line URIs according to it.
     */
    lineURI?: string;
    /**
     * Set notUsed to true to get only free line URIs.
     */
    notUsed?: boolean;
    /**
     * Give organization id to get filtered list of user line URIs according to it, you can get organiation id by calling 'GET /organizations/skype'.
     */
    organizationId?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give server role id to get filtered list of user line URIs according to it, you can get server role id by calling 'GET /servers/{serverId}/roles'.
     */
    serverRoleId?: number;
    /**
     * Give user id to get filtered list of user line URIs according to it, you can get user id by calling 'GET /panel-users'.
     */
    userId?: number;
    /**
     * Set userOnly to true to get only used line URIs.
     */
    userOnly?: boolean;
  };
};

export type SkypeServerListUserLineUrisResponse = LineUriListDto;

export type SkypeServerListUserLineUrisError = unknown;

export type SkypeServerGetLineUriDetailsData = {
  path: {
    /**
     * Give line URI id to get its details, you can get line URI id by calling 'GET /skype-server/line-uris'.
     */
    lineUriId: number;
  };
};

export type SkypeServerGetLineUriDetailsResponse = LineUriDto;

export type SkypeServerGetLineUriDetailsError = unknown;

export type SkypeServerGetFederatedDomainsData = {
  path: {
    /**
     * Give server role id to get filtered list of federated domains according to it, you can get server role id by calling 'GET /servers/{serverId}/roles'.
     */
    serverRoleId: number;
  };
};

export type SkypeServerGetFederatedDomainsResponse =
  SkypeFederatedDomainListDto;

export type SkypeServerGetFederatedDomainsError = unknown;

export type SkypeServerGetSkypeUserPoliciesData = {
  path: {
    /**
     * Give server role id to get filtered list of user policies according to it, you can get server role id by calling 'GET /servers/{serverId}/roles'.
     */
    serverRoleId: number;
  };
};

export type SkypeServerGetSkypeUserPoliciesResponse = SkypeUserPoliciesListDto;

export type SkypeServerGetSkypeUserPoliciesError = unknown;

export type SkypeServerGetServerApplicationServicesData = {
  path: {
    /**
     * Give server role id to get filtered list of server application services according to it, you can get server role id by calling 'GET /servers/{serverId}/roles'.
     */
    serverRoleId: number;
  };
};

export type SkypeServerGetServerApplicationServicesResponse =
  SkypeApplicationServicesListDto;

export type SkypeServerGetServerApplicationServicesError = unknown;

export type SkypeServerGetUserAssignedApplicationServicesData = {
  path: {
    /**
     * Give server role id to get filtered list of user assigned application services according to it, you can get server role id by calling 'GET /servers/{serverId}/roles'.
     */
    serverRoleId: number;
    /**
     * Give user id to get filtered list of assigned application services according to it, you can get user id by calling 'GET /panel-users'.
     */
    userId: number;
  };
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
  };
};

export type SkypeServerGetUserAssignedApplicationServicesResponse =
  SkypeApplicationServicesListDto;

export type SkypeServerGetUserAssignedApplicationServicesError = unknown;

export type VirtualMachineListVirtualMachinesData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give display name to get filtered list of virtual machines according to it.
     */
    displayName?: string;
    /**
     * Set true if want to match the display name exactly.
     */
    exactNameMatch?: boolean;
    /**
     * Give owner id to get filtered list of virtual machines according to it, you can get owner id by calling 'GET /panel-users'.
     */
    ownerId?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give provider name to get filtered list of virtual machines according to it.
     */
    providerName?: string;
    /**
     * Give server id to get filtered list of virtual machines according to it, you can get server id by calling 'GET /servers'.
     */
    serverId?: number;
  };
};

export type VirtualMachineListVirtualMachinesResponse = VirtualMachinesDto;

export type VirtualMachineListVirtualMachinesError = unknown;

export type VirtualMachineAddVirtualMachineData = {
  body: AddVmDto_Request;
};

export type VirtualMachineAddVirtualMachineResponse = AddVmDto;

export type VirtualMachineAddVirtualMachineError = unknown;

export type VirtualMachineGetVirtualMachineDetailsData = {
  path: {
    /**
     * Give virtual machine id to get its details, you can get virtual machine id by calling 'GET /virtualization/virtual-machines'.
     */
    virtualMachineId: number;
  };
  query?: {
    /**
     * Set thumbnail true to get the snapshot of the screen.
     */
    thumbnail?: boolean;
  };
};

export type VirtualMachineGetVirtualMachineDetailsResponse = VirtualMachineDto;

export type VirtualMachineGetVirtualMachineDetailsError = unknown;

export type VirtualMachineUpdateVirtualMachineData = {
  body: UpdateVmDto_Request;
  path: {
    /**
     * Give virtual machine id to update its details, you can get virtual machine id by calling 'GET /virtualization/virtual-machines'.
     */
    virtualMachineId: number;
  };
};

export type VirtualMachineUpdateVirtualMachineResponse = VmAddUpdateResultDto;

export type VirtualMachineUpdateVirtualMachineError = unknown;

export type VirtualMachineDeleteVirtualMachineData = {
  path: {
    /**
     * Give virtual machine id to delete it, you can get virtual machine id by calling 'GET /virtualization/virtual-machines'.
     */
    virtualMachineId: number;
  };
};

export type VirtualMachineDeleteVirtualMachineResponse = StatusDto;

export type VirtualMachineDeleteVirtualMachineError = unknown;

export type VirtualMachineUpdateVlanData = {
  body: UpdateVLanDto_Request;
  path: {
    /**
     * Give virtual machine id to update its VLAN, you can get virtual machine id by calling 'GET /virtualization/virtual-machines'.
     */
    virtualMachineId: number;
  };
};

export type VirtualMachineUpdateVlanResponse = StatusDto;

export type VirtualMachineUpdateVlanError = unknown;

export type VirtualMachineSystemVirtualMachinesListData = {
  path: {
    /**
     * Give server id to get filtered list of system virtual machines according to it, you can get server id by calling 'GET /servers'.
     */
    serverId: number;
  };
};

export type VirtualMachineSystemVirtualMachinesListResponse =
  SystemVirtualMachinesDto;

export type VirtualMachineSystemVirtualMachinesListError = unknown;

export type VirtualMachineGetSystemVirtualMachineSettingsData = {
  path: {
    /**
     * Give server id to get virtual machine settings according to it, you can get server id by calling 'GET /servers'.
     */
    serverId: number;
    /**
     * Give virtual machine GUid to get its settings.
     */
    virtualMachineGuid: string;
  };
};

export type VirtualMachineGetSystemVirtualMachineSettingsResponse =
  VirtualMachineDto;

export type VirtualMachineGetSystemVirtualMachineSettingsError = unknown;

export type VirtualMachineGetVirtualMachineIpAddressesData = {
  path: {
    /**
     * Give virtual machine id to get virtual machine IP addresses according to it, you can get virtual machine id by calling 'GET /virtualization/virtual-machines'.
     */
    virtualMachineId: number;
  };
};

export type VirtualMachineGetVirtualMachineIpAddressesResponse =
  VmIpAddressesDto;

export type VirtualMachineGetVirtualMachineIpAddressesError = unknown;

export type VirtualMachineAssignVmIpAddressesData = {
  body: AssignVmIpAddressesDto;
  path: {
    /**
     * Give virtual machine id to assign IP address to it, you can get virtual machine id by calling 'GET /virtualization/virtual-machines'.
     */
    virtualMachineId: number;
  };
};

export type VirtualMachineAssignVmIpAddressesResponse = StatusDto;

export type VirtualMachineAssignVmIpAddressesError = unknown;

export type VirtualMachineDeleteVmAssignedIpAddressData = {
  path: {
    /**
     * Give IP address id to unassign it.
     */
    ipAddressId: number;
    /**
     * Give virtual machine id to delete its assigned IP address, you can get virtual machine id by calling 'GET /virtualization/virtual-machines'.
     */
    virtualMachineId: number;
  };
};

export type VirtualMachineDeleteVmAssignedIpAddressResponse = StatusDto;

export type VirtualMachineDeleteVmAssignedIpAddressError = unknown;

export type VirtualMachineGetAllSnapShotsData = {
  path: {
    /**
     * Give virtual machine id to filtered list of snapshots according to it, you can get virtual machine id by calling 'GET /virtualization/virtual-machines'.
     */
    virtualMachineId: number;
  };
};

export type VirtualMachineGetAllSnapShotsResponse = SnapShotsDto;

export type VirtualMachineGetAllSnapShotsError = unknown;

export type VirtualMachineTakeSnapShotData = {
  body: SnapShotDetailDto_Request;
  path: {
    /**
     * Give virtual machine id to take its snapshot, you can get virtual machine id by calling 'GET /virtualization/virtual-machines'.
     */
    virtualMachineId: number;
  };
};

export type VirtualMachineTakeSnapShotResponse = SnapShotDetailDto;

export type VirtualMachineTakeSnapShotError = unknown;

export type VirtualMachineApplySnapShotData = {
  body: SnapShotDetailDto_ApplyRequest;
  path: {
    snapShotId: string;
    /**
     * Give virtual machine id to apply snapshot on it, you can get virtual machine id by calling 'GET /virtualization/virtual-machines'.
     */
    virtualMachineId: number;
  };
};

export type VirtualMachineApplySnapShotResponse = StatusDto;

export type VirtualMachineApplySnapShotError = unknown;

export type VirtualMachineGetSnapShotDetailData = {
  path: {
    /**
     * Give snapshot id to get its details, you can get snapshot id by calling 'GET /virtualization/virtual-machines/{virtualMachineId}/snapshots'.
     */
    snapShotId: number;
  };
};

export type VirtualMachineGetSnapShotDetailResponse = SnapShotDetailDto;

export type VirtualMachineGetSnapShotDetailError = unknown;

export type VirtualMachineDeleteSnapShotData = {
  path: {
    /**
     * Give snapshot id to delete it, you can get snapshot id by calling 'GET /virtualization/virtual-machines/{virtualMachineId}/snapshots'.
     */
    snapshotId: number;
    /**
     * Give virtual machine id to delete snapshot according to it, you can get virtual machine id by calling 'GET /virtualization/virtual-machines'.
     */
    virtualMachineId: number;
  };
};

export type VirtualMachineDeleteSnapShotResponse = StatusDto;

export type VirtualMachineDeleteSnapShotError = unknown;

export type VirtualMachineChangePasswordData = {
  body: ChangeVmPasswordDto_Request;
  path: {
    /**
     * Give virtual machine id to change its password, you can get virtual machine id by calling 'GET /virtualization/virtual-machines'.
     */
    virtualMachineId: number;
  };
};

export type VirtualMachineChangePasswordResponse = StatusDto;

export type VirtualMachineChangePasswordError = unknown;

export type VirtualMachineStartVirtualMachineData = {
  path: {
    /**
     * Give virtual machine id to start it, you can get virtual machine id by calling 'GET /virtualization/virtual-machines'.
     */
    virtualMachineId: number;
  };
};

export type VirtualMachineStartVirtualMachineResponse = StatusDto;

export type VirtualMachineStartVirtualMachineError = unknown;

export type VirtualMachinePauseVirtualMachineData = {
  path: {
    /**
     * Give virtual machine id to pause it, you can get virtual machine id by calling 'GET /virtualization/virtual-machines'.
     */
    virtualMachineId: number;
  };
};

export type VirtualMachinePauseVirtualMachineResponse = StatusDto;

export type VirtualMachinePauseVirtualMachineError = unknown;

export type VirtualMachineResumeVirtualMachineData = {
  path: {
    /**
     * Give virtual machine id to resume it, you can get virtual machine id by calling 'GET /virtualization/virtual-machines'.
     */
    virtualMachineId: number;
  };
};

export type VirtualMachineResumeVirtualMachineResponse = StatusDto;

export type VirtualMachineResumeVirtualMachineError = unknown;

export type VirtualMachineRebootVirtualMachineData = {
  path: {
    /**
     * Give virtual machine id to reboot it, you can get virtual machine id by calling 'GET /virtualization/virtual-machines'.
     */
    virtualMachineId: number;
  };
};

export type VirtualMachineRebootVirtualMachineResponse = StatusDto;

export type VirtualMachineRebootVirtualMachineError = unknown;

export type VirtualMachineShutdownVirtualMachineData = {
  path: {
    /**
     * Give virtual machine id to shut down it, you can get virtual machine id by calling 'GET /virtualization/virtual-machines'.
     */
    virtualMachineId: number;
  };
};

export type VirtualMachineShutdownVirtualMachineResponse = StatusDto;

export type VirtualMachineShutdownVirtualMachineError = unknown;

export type VirtualMachineImportVirtualMachineData = {
  body: ImportVmDto_Request;
};

export type VirtualMachineImportVirtualMachineResponse = VmAddUpdateResultDto;

export type VirtualMachineImportVirtualMachineError = unknown;

export type VirtualMachineTransferVirtualMachineData = {
  body: TransferVmDto;
  path: {
    /**
     * Give virtual machine id to tranfer it, you can get virtual machine id by calling 'GET /virtualization/virtual-machines'.
     */
    virtualMachineId: number;
  };
};

export type VirtualMachineTransferVirtualMachineResponse = VirtualMachineDto;

export type VirtualMachineTransferVirtualMachineError = unknown;

export type VirtualMachineGetVirtualMachineCurrentStateData = {
  path: {
    /**
     * Give virtual machine id to get its current state, you can get virtual machine id by calling 'GET /virtualization/virtual-machines'.
     */
    virtualMachineId: number;
  };
};

export type VirtualMachineGetVirtualMachineCurrentStateResponse =
  VirtualMachineStatusDto;

export type VirtualMachineGetVirtualMachineCurrentStateError = unknown;

export type VirtualMachineFetchMachinePasswordData = {
  body: FetchMachinePasswordDto_Request;
  path: {
    /**
     * Give virtual machine id to fetch its password, you can get virtual machine id by calling 'GET /virtualization/virtual-machines'.
     */
    virtualMachineId: number;
  };
};

export type VirtualMachineFetchMachinePasswordResponse =
  FetchMachinePasswordDto;

export type VirtualMachineFetchMachinePasswordError = unknown;

export type ResourceGetAllBaseOsTypesResponse = BaseOsTypesDto;

export type ResourceGetAllBaseOsTypesError = unknown;

export type VlaNsGetAllVlaNsData = {
  query?: {
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give VLAN name to get filtered list according to it.
     */
    vLANName?: string;
  };
};

export type VlaNsGetAllVlaNsResponse = VLANsDto;

export type VlaNsGetAllVlaNsError = unknown;

export type OsTemplatesGetAllOsTemplatesData = {
  query?: {
    /**
     * Give base OS system name to get filtered list of OS templates according to it, you can get base OS system name by calling 'GET /virtualization/base-os-types'.
     */
    baseOsSystemName?: string;
    /**
     * For paginated results. Default is 1.
     */
    currentPage?: number;
    /**
     * Give display name to get filtered list of OS templates according to it.
     */
    displayName?: string;
    /**
     * Give owner id to get filtered list of OS templates according to it, you can get owner id by calling 'GET /panel-users'.
     */
    ownerId?: number;
    /**
     * For page size. Default is 10.
     */
    pageSize?: number;
    /**
     * Give provider name to get filtered list of OS templates according to it.
     */
    providerName?: string;
    /**
     * Give server id to get filtered list of OS templates according to it, you can get server id by calling 'GET /servers'.
     */
    serverId?: number;
  };
};

export type OsTemplatesGetAllOsTemplatesResponse = VmOsTemplatesDto;

export type OsTemplatesGetAllOsTemplatesError = unknown;

export type $OpenApiTs = {
  'active-directory/organizations/{organizationId}/users': {
    post: {
      req: ActiveDirectoryObjectAddActiveDirectoryUserData;
      res: {
        /**
         * OK
         */
        '200': ActiveDirectoryObjectDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/active-directory/organizations/{organizationId}/users/password': {
    put: {
      req: ActiveDirectoryObjectChangeAdUserPasswordData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/active-directory/organizations/{organizationId}/users/enable-disable': {
    put: {
      req: ActiveDirectoryObjectToggleAdUserStateData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/active-directory/organizations/{organizationId}/objects': {
    get: {
      req: ActiveDirectoryGetOrganizationObjectsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': OrganizationObjectsDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ActiveDirectoryDeleteMultipleObjectsData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/active-directory/organizations/{organizationId}/objects/account': {
    get: {
      req: ActiveDirectoryObjectGetObjectAccountSettingsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ADUserAccountSettingDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ActiveDirectoryObjectSetObjectAccountSettingsData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/active-directory/organizations/{organizationId}/objects/details': {
    put: {
      req: ActiveDirectoryObjectSetObjectDetailsData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/active-directory/organizations/{organizationId}/objects/general-profile': {
    get: {
      req: ActiveDirectoryObjectGetAdObjectGeneralPropertiesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ADUserGeneralProfileDto;
      };
    };
    put: {
      req: ActiveDirectoryObjectUpdateAdObjectGeneralPropertiesData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/active-directory/organizations/{organizationId}/objects/memberof': {
    get: {
      req: ActiveDirectoryObjectGetObjectMemberOfDetailsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': AdObjectsMemberofListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ActiveDirectoryObjectUpdateObjectMemberOfDetailsData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/active-directory/organizations/{organizationId}/objects/move': {
    put: {
      req: ActiveDirectoryObjectMoveObjectToOuData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/active-directory/organizations/{organizationId}/groups/members': {
    get: {
      req: ActiveDirectoryObjectGetGroupMembersData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': AdObjectsGroupMemberListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ActiveDirectoryObjectUpdateGroupMembersData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/active-directory/organizations/{organizationId}/groups/admin': {
    get: {
      req: ActiveDirectoryObjectGetGroupAdminData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': GroupMangaedByDto;
        /**
         * Record Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ActiveDirectoryObjectUpdateGroupAdminData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/auth-tokens': {
    get: {
      req: TokenGetTokenDetailsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': TokenDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: TokenGenerateTokenData;
      res: {
        /**
         * Successfully Generated
         */
        '200': TokenDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Method Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: TokenRevokeTokenData;
      res: {
        /**
         * Operation Successful
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/panel-users': {
    get: {
      req: UsersGetAllUsersData;
      res: {
        /**
         * OK
         */
        '200': UsersDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: UsersAddUserData;
      res: {
        /**
         * Successfully Added
         */
        '200': AddUserDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Method Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/panel-users/{userId}': {
    get: {
      req: UsersGetUserDetailsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': UserDto;
        /**
         * Record Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: UsersUpdateUserData;
      res: {
        /**
         * Successfully Updated
         */
        '200': AddUserDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: UsersDeleteUserData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Record Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/panel-users/{userId}/disable': {
    put: {
      req: UsersDisableUserData;
      res: {
        /**
         * Successfully Disabled
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/panel-users/{userId}/enable': {
    put: {
      req: UsersEnableUserData;
      res: {
        /**
         * Successfully Enabled
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/panel-users/{userId}/change-password': {
    put: {
      req: UsersChangePasswordData;
      res: {
        /**
         * Successfully password changed
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/panel-users/user-names/{userName}': {
    get: {
      req: UsersIsLoginNameAvailableData;
      res: {
        /**
         * Available/Not_Available
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/panel-users/{userId}/general-profile': {
    get: {
      req: UsersGetUserProfileDetailsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': UserProfileDto;
        /**
         * Record Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: UsersUpdateUserProfileData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Record Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/reports/quota': {
    get: {
      req: ReportGetUserQuotaReportData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': QuotaReportDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/reports/quota/consumed': {
    get: {
      res: {
        /**
         * Successfully retrieved
         */
        '200': ConsumedQuotaReportDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/reports/quota/daily-consumed': {
    get: {
      res: {
        /**
         * Successfully retrieved
         */
        '200': DailyResUsageReportDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/reports/quota/monthly-consumed': {
    get: {
      res: {
        /**
         * Successfully retrieved
         */
        '200': DailyResUsageReportDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/reports/panel-summary': {
    get: {
      res: {
        /**
         * Successfully retrieved
         */
        '200': PanelStatsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/reports/disk-usage-report': {
    get: {
      req: ReportDiskUsageUsersListData;
      res: {
        /**
         * Successfully Reterived
         */
        '200': UsersUsageReportDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/reports/disk-usage-report/monthly': {
    get: {
      req: ReportDiskUsageReportMonthlyData;
      res: {
        /**
         * Successfully Reterived
         */
        '200': DiskUsageReportDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/reports/disk-usage-report/total': {
    get: {
      req: ReportDiskUsageReportTotalData;
      res: {
        /**
         * Successfully Reterived
         */
        '200': DiskUsageReportDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/reports/bandwidth-usage-report/monthly': {
    get: {
      req: ReportBandwidthUsageReportMonthlyData;
      res: {
        /**
         * Successfully Reterived
         */
        '200': BandwidthUsageReportDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/reports/bandwidth-usage-report/total': {
    get: {
      req: ReportBandwidthUsageReportTotalData;
      res: {
        /**
         * Successfully Reterived
         */
        '200': BandwidthUsageReportDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/reports/bandwidth-usage-report': {
    get: {
      req: ConfigurationsBandwidthUsageUsersListData;
      res: {
        /**
         * Successfully Reterived
         */
        '200': UsersUsageReportDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/system-entities/states/{countryId}': {
    get: {
      req: SettingsGetAllStatesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': StatesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/system-entities/countries': {
    get: {
      req: SettingsGetAllCountriesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': CountriesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/system-entities/languages': {
    get: {
      res: {
        /**
         * Successfully retrieved
         */
        '200': LanguagesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/system-entities/languages/{langName}': {
    get: {
      req: SettingsGetAllLanguagesByLangNameData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': LanguagesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/system-entities/resource-quota-types': {
    get: {
      res: {
        /**
         * Successfully retrieved
         */
        '200': TypesItemsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/system-entities/resource-provisioning-types': {
    get: {
      res: {
        /**
         * Successfully retrieved
         */
        '200': TypesItemsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/system-entities/vm-status-types': {
    get: {
      res: {
        /**
         * Successfully retrieved
         */
        '200': TypesItemsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/system-entities/ticket-statuses': {
    get: {
      res: {
        /**
         * Successfully retrieved
         */
        '200': TypesItemsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/system-entities/exchange/mailbox-types': {
    get: {
      res: {
        /**
         * Successfully retrieved
         */
        '200': TypesItemsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/system-entities/exchange/resource-mailbox-types': {
    get: {
      res: {
        /**
         * Successfully retrieved
         */
        '200': TypesItemsDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/system-entities/exchange/mail-domain-types': {
    get: {
      res: {
        /**
         * Successfully retrieved
         */
        '200': TypesItemsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/system-entities/exchange/recipient-types': {
    get: {
      res: {
        /**
         * Successfully retrieved
         */
        '200': TypesItemsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/system-entities/exchange/recipient-locations': {
    get: {
      res: {
        /**
         * Successfully retrieved
         */
        '200': TypesItemsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/system-entities/exchange/public-folder-types': {
    get: {
      res: {
        /**
         * Successfully retrieved
         */
        '200': TypesItemsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/system-entities/skype/telephony-options': {
    get: {
      res: {
        /**
         * Successfully retrieved
         */
        '200': TypesItemsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/system-entities/skype/routing-methods': {
    get: {
      res: {
        /**
         * Successfully retrieved
         */
        '200': TypesItemsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/system-entities/skype/participation-policy-types': {
    get: {
      res: {
        /**
         * Successfully retrieved
         */
        '200': TypesItemsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/system-entities/skype/response-group-call-actions': {
    get: {
      res: {
        /**
         * Successfully retrieved
         */
        '200': TypesItemsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/system-entities/skype/workflow-call-actions': {
    get: {
      res: {
        /**
         * Successfully retrieved
         */
        '200': TypesItemsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/system-entities/skype/workflow-languages': {
    get: {
      res: {
        /**
         * Successfully retrieved
         */
        '200': TypesItemsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/message-center': {
    post: {
      req: MessageCenterAddNewMessageData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': MessageDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/message-center/{messageId}': {
    get: {
      req: MessageCenterGetMessageDetailsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': MessageDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: MessageCenterUpdateMessageStatusData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': MessageDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: MessageCenterDeleteMessageData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/message-center/sent-messages': {
    get: {
      res: {
        /**
         * Successfully retrieved
         */
        '200': MessagesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/message-center/received-messages': {
    get: {
      res: {
        /**
         * Successfully retrieved
         */
        '200': MessagesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/message-center/{messageId}/message-replies': {
    get: {
      req: MessageCenterMessageRepliesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': MessageRepliesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: MessageCenterAddMessageReplyData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': MessageReplyDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Pre Condition Failed
         */
        '412': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/tickets/summary': {
    get: {
      res: {
        /**
         * Successfully retrieved
         */
        '200': TroubleTicketsStatsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/tickets': {
    get: {
      req: TicketsGetAllTicketsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': TicketsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: TicketsAddTicketData;
      res: {
        /**
         * Successfully Added
         */
        '200': TicketDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/tickets/{ticketId}': {
    get: {
      req: TicketsGetTicketDetailData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': TicketDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: TicketsUpdateTicketData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': TicketDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: TicketsDeleteTicketData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/tickets/{ticketId}/replies': {
    get: {
      req: TicketsGetTicketReplyData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': TicketResponsesDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: TicketsReplyTicketData;
      res: {
        /**
         * Successfully Added
         */
        '200': TicketResponseDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/tickets/{TicketId}/attachments': {
    post: {
      req: TicketsAddTicketAttachmentData;
      res: {
        /**
         * Successfully Added
         */
        '200': AttachmentsDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/tickets/{ticketId}/attachments': {
    get: {
      req: TicketsGetAllAttachmentsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': AttachmentsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/tickets/{ticketId}/attachments/{attachmentId}': {
    get: {
      req: TicketsGetAttachmentDetailData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': AttachmentDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/addons': {
    get: {
      req: AddOnsGetAllResourcesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ResourcesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: AddOnsAddResourceData;
      res: {
        /**
         * Successfully Added
         */
        '200': AddUpdateResourceDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/addons/{addonId}': {
    get: {
      req: AddOnsGetResourceDetailsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ResourceDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: AddOnsUpdateResourceData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: AddOnsDeleteResourceData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/addons/components/{componentName}/properties': {
    get: {
      req: AddOnsGetBaseOsTypesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ResourceComponentDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/sold-addons': {
    get: {
      req: SoldAddOnsGetAllSoldAddOnsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': SellAddonsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: SoldAddOnsSellAddOnData;
      res: {
        /**
         * Addon Successfully Sold
         */
        '200': SellAddonDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/sold-addons/{soldAddOnId}': {
    get: {
      req: SoldAddOnsGetSoldAddonDetailsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': SoldAddOnDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: SoldAddOnsDeleteSoldAddonData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/composite-resources': {
    get: {
      req: CompositeResourceGetAllCresourcesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': CResourcesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: CompositeResourceAddCresourceData;
      res: {
        /**
         * Successfully Added
         */
        '200': CResourceDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/composite-resources/{cResourceId}': {
    get: {
      req: CompositeResourceGetCresourceDetailsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': CResourceDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: CompositeResourceUpdateCresourceData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': UpdateCResourceDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: CompositeResourceDeleteCresourceData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/composite-resources/categories': {
    get: {
      res: {
        /**
         * Successfully retrieved
         */
        '200': HostingServicesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/providers': {
    get: {
      req: ProvidersGetProviderTypesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ProvidersDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/sold-plans': {
    get: {
      req: SoldPlanGetAllSoldPlansData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': SoldPlansDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: SoldPlanAddSoldPlanData;
      res: {
        /**
         * Successfully Added
         */
        '200': SoldPlanDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/sold-plans/{soldPlanId}': {
    get: {
      req: SoldPlanGetSoldPlanDetailsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': SoldPlanDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: SoldPlanUpDateSoldPlansData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: SoldPlanDeleteSoldPlanData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/purchased-plans/{soldPlanId}': {
    get: {
      req: SubscriptionsGetPurchasedPlanDetailsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': SoldPlanDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/purchased-plans': {
    get: {
      req: SubscriptionsGetAllPurchasedPlansData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': SoldPlansDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/panel-conf/custom-fields': {
    get: {
      req: CustomFieldsListAllCustomFieldsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': CustomFieldsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/panel-conf/tickets/categories': {
    get: {
      res: {
        /**
         * Successfully retrieved
         */
        '200': CategoriesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/dns-zones': {
    get: {
      req: DnsListAllDnsZonesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': DnsZonesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: DnsAddDnsZoneData;
      res: {
        /**
         * Successfully Added
         */
        '200': DnsZoneDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/dns-zones/{dnsZoneId}': {
    get: {
      req: DnsGetDnsZoneDetailData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': DnsZoneDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: DnsUpdateDnsZoneData;
      res: {
        /**
         * Successfully Updated
         */
        '200': DnsZoneDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: DnsDeleteDnsZoneData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/databases': {
    get: {
      req: DatabasesListAllDatabasesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': DatabasesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: DatabasesAddDatabaseData;
      res: {
        /**
         * Successfully Added
         */
        '200': DatabaseDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/databases/{databaseId}/action-history': {
    get: {
      req: DatabasesListAllDatabaseTasksData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': DatabaseTasksDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/databases/{databaseId}/backup': {
    post: {
      req: DatabasesBackupDatabaseData;
      res: {
        /**
         * Successfully Queued
         */
        '200': DatabaseTaskDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/databases/{databaseId}/shrink': {
    post: {
      req: DatabasesShrinkDatabaseData;
      res: {
        /**
         * Shrink Successfully
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/databases/{databaseId}/restore': {
    post: {
      req: DatabasesRestoreDatabaseData;
      res: {
        /**
         * Successfully Queued
         */
        '200': DatabaseTaskDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/databases/{databaseId}': {
    get: {
      req: DatabasesGetDatabaseDetailData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': DatabaseDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: DatabasesUpdateDatabaseData;
      res: {
        /**
         * Successfully Updated
         */
        '200': DatabaseDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: DatabasesDeleteDatabaseData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/databases/{databaseId}/assign': {
    put: {
      req: DatabasesAssignUserstoDatabaseData;
      res: {
        /**
         * Successfully Assigned
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/databases/{databaseId}/connectivity': {
    post: {
      req: DatabasesTestDatabaseConnectivityData;
      res: {
        /**
         * Successfully Connected
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/databases/users': {
    get: {
      req: DatabasesListAllDatabaseUsersData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': DatabaseUsersDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: DatabasesAddDatabaseUserData;
      res: {
        /**
         * Successfully Added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/databases/{databaseId}/users/assigned-users': {
    get: {
      req: DatabasesGetDatabasesAssignedUserData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': DatabaseUsersDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/databases/users/{databaseUserId}/assigned-databases': {
    get: {
      req: DatabasesGetUsersAssignedDatabaseData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': DatabasesDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/databases/users/{databaseUserId}': {
    get: {
      req: DatabasesGetDatabaseUserDetailData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': DatabaseUserDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: DatabasesDeleteDatabaseUserData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/databases/users/{databaseUserId}/change-password': {
    put: {
      req: DatabasesChangePasswordData;
      res: {
        /**
         * Password Successfully Changed
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/databases/users/{databaseUserId}/assign': {
    put: {
      req: DatabasesAssignDatabasestoUserData;
      res: {
        /**
         * Successfully Assigned
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/mail-domains': {
    get: {
      req: MailDomainsListAllMailDomainsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': MailDomainsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: MailDomainsAddMailDomainData;
      res: {
        /**
         * Successfully Added
         */
        '200': MailDomainDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/mail-domains/{mailDomainId}': {
    get: {
      req: MailDomainsGetMailDomainDetailData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': MailDomainDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: MailDomainsDeleteMailDomainData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/mail-domains/{mailDomainId}/mailboxes': {
    get: {
      req: MailDomainsListAllMailBoxesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': MailBoxesDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: MailDomainsAddMailBoxData;
      res: {
        /**
         * Successfully Added
         */
        '200': MailBoxDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/mail-domains/{mailDomainId}/mailboxes/{mailBoxId}': {
    get: {
      req: MailDomainsGetMailBoxDetailData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': MailBoxDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: MailDomainsUpdateMailBoxData;
      res: {
        /**
         * Successfully Updated
         */
        '200': MailBoxDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: MailDomainsDeleteMailBoxData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/mail-domains/{mailDomainId}/mailboxes/{mailBoxId}/email-aliases': {
    get: {
      req: MailDomainsListAllEmailAddressesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': MailboxAliasesDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: MailDomainsAddEmailAddressData;
      res: {
        /**
         * Successfully Added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/mail-domains/{mailDomainId}/mailboxes/{mailBoxId}/email-aliases/{emailAddress}': {
    delete: {
      req: MailDomainsDeleteEmailAddressData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/mail-domains/{mailDomainId}/distribution-lists': {
    get: {
      req: MailDomainsListAllDistributionListData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': DistributionListsDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: MailDomainsAddDistributionListData;
      res: {
        /**
         * Successfully Added
         */
        '200': DistributionListDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/mail-domains/{mailDomainId}/distribution-lists/{listName}': {
    get: {
      req: MailDomainsGetDistributionListDetailData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': DistributionListMembersDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: MailDomainsUpdateDistributionListData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: MailDomainsDeleteDistributionListData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/io': {
    get: {
      req: WebsiteIoGetAllFilesAndFoldersData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': FileFoldersDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: WebsiteIoUploadData;
      res: {
        /**
         * Successfully Uploaded
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: WebsiteIoDeleteData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/io/new': {
    post: {
      req: WebsiteIoCreateData;
      res: {
        /**
         * Successfully Created
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/io/content': {
    get: {
      req: WebsiteIoDownloadData;
      res: {
        /**
         * Successfully Downloaded
         */
        '200': FileContentOutDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: WebsiteIoUpdateData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/io/rename': {
    put: {
      req: WebsiteIoRenameData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/io/zip': {
    put: {
      req: WebsiteIoZipData;
      res: {
        /**
         * Successfully Zipped
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/io/unzip': {
    put: {
      req: WebsiteIoUnzipData;
      res: {
        /**
         * Successfully Unzipped
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/io/permissions': {
    get: {
      req: WebsiteIoGetAclPermissionData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': UserPermissionsDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: WebsiteIoSetAclPermissionData;
      res: {
        /**
         * Successfully Updated
         */
        '200': ReturnPermissionsStatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites': {
    get: {
      req: WebsitesGetAllWebsitesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': WebsitesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: WebsitesAddWebsiteData;
      res: {
        /**
         * Successfully Added
         */
        '200': WebsiteDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}': {
    get: {
      req: WebsitesGetWebsiteDetailsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': WebsiteDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: WebsitesEditWebsiteData;
      res: {
        /**
         * Successfully Updated
         */
        '200': WebsiteDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: WebsitesDeleteWebsiteData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/start': {
    put: {
      req: WebsitesStartSiteData;
      res: {
        /**
         * Successfully Started
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Pre Condition Failed
         */
        '412': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/stop': {
    put: {
      req: WebsitesStopSiteData;
      res: {
        /**
         * Successfully Stopped
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/stats/enable': {
    put: {
      req: WebsitesEnableStatsData;
      res: {
        /**
         * Successfully Enabled
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/stats/disable': {
    put: {
      req: WebsitesDisableStatsData;
      res: {
        /**
         * Successfully Disabled
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/stats/view': {
    get: {
      req: WebsitesViewStatsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ViewStatsDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/shared-ssl': {
    get: {
      req: WebsitesGetAllSharedSslsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': SslsDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: WebsitesAddSharedSslData;
      res: {
        /**
         * Successfully Added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/shared-ssl/{sslId}': {
    delete: {
      req: WebsitesDeleteSharedSslData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/ipaddress': {
    put: {
      req: WebsitesUpdateIpAddressData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/parked-domains': {
    get: {
      req: WebsitesGetAllParkedDomainsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ParkedDomainsDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: WebsitesAddParkedDomainData;
      res: {
        /**
         * Successfully Added
         */
        '200': ParkedDomainDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/parked-domains/{parkedDomainId}': {
    delete: {
      req: WebsitesDeleteParkedDomainData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/host-headers': {
    get: {
      req: WebsitesGetAllHostHeadersData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': HostHeadersDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: WebsitesAddHostHeaderData;
      res: {
        /**
         * Successfully Added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/host-headers/{hostHeaderName}': {
    delete: {
      req: WebsitesDeleteHostHeaderData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/virtual-directories': {
    get: {
      req: WebsitesGetAllVirtualDirectoriesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': VirtualDirectoriesDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: WebsitesUpdateVirtualDirectoryData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: WebsitesAddVirtualDirectoryData;
      res: {
        /**
         * Successfully Added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/virtual-directories/vdName/{virtualDirectoryName}': {
    get: {
      req: WebsitesGetVirtualDirectoryDetailsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': VirtualDirectoryDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: WebsitesDeleteVirtualDirectoryData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/virtual-directories/change-password': {
    put: {
      req: WebsitesChangeSysUserPasswordData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/app-pools/{appPoolName}/process-info': {
    get: {
      req: WebsitesGetApplicationPoolProcessInfoData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ApplicationPoolProcessInfoDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/url-redirection': {
    get: {
      req: WebsitesGetUrlRedirectionSettingsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': UrlRedirectionDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: WebsitesSaveUrlRedirectionSettingsData;
      res: {
        /**
         * Successfully Saved
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/access-permissions': {
    get: {
      req: WebsitesGetAccessPermissionsSettingsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': AccessPermissionDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: WebsitesSaveAccessPermissionsSettingsData;
      res: {
        /**
         * Successfully Saved
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/custom-errors': {
    get: {
      req: WebsitesGetCustomErrorsListData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': CustomErrorsDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: WebsitesUpdateCustomErrorsData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/ftp-users': {
    get: {
      req: WebsitesListAllFtpUsersData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': FtpUsersDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: WebsitesAddFtpUserData;
      res: {
        /**
         * Successfully Added
         */
        '200': FtpUserDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Already Exists
         */
        '409': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/ftp-users/{ftpUserId}': {
    get: {
      req: WebsitesGetFtpUserDetailData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': FtpUserDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: WebsitesUpdateFtpUserPasswordData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: WebsitesDeleteFtpUserData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/ftp-users/{ftpUserId}/status': {
    put: {
      req: WebsitesUpdateFtpUserStatusData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/ftp-users/{ftpUserId}/permissions': {
    put: {
      req: WebsitesUpdateFtpUserPermissionData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/dotnetversions': {
    get: {
      req: WebsitesGetDotNetInstalledVersionsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': DotNetInstalledVersionsDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/scripting/{scriptingType}': {
    put: {
      req: WebsitesScriptingData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/app-pools-recycle': {
    put: {
      req: WebsitesRecycleWebsiteApplicationPoolData;
      res: {
        /**
         * Successfully Recycled
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/restore-default': {
    put: {
      req: WebsitesRestoreDefaultData;
      res: {
        /**
         * Successfully Restored
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/websites/{websiteId}/system-users': {
    get: {
      req: WebsitesGetSystemUsersData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': SystemUsersDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/Server-Roles': {
    get: {
      req: RolesGetRolesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': RolesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/servers/{serverId}/roles': {
    get: {
      req: RolesGetServerRolesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ServerRolesDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/servers': {
    get: {
      req: RolesGetAllServersData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ServersDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/plans': {
    get: {
      req: PlanGetAllPlansData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': PlansDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: PlanAddPlanData;
      res: {
        /**
         * Successfully Added
         */
        '200': PlanDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Already Exists
         */
        '409': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/plans/{planId}': {
    get: {
      req: PlanGetPlanDetailsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': PlanDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: PlanUpdatePlanData;
      res: {
        /**
         * Successfully Updated
         */
        '200': PlanDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Already Exists
         */
        '409': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: PlanDeletePlanData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/organizations': {
    get: {
      req: OrganizationsGetAllOrganizationsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': OrganizationsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/organizations/{organizationId}': {
    get: {
      req: OrganizationsGetOrganizationDetailsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': OrganizationDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/organizations/exchange': {
    get: {
      req: OrganizationsGetAllExchangeOrganizationsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': OrganizationsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: OrganizationsAddExchangeOrganizationData;
      res: {
        /**
         * Successfully Added
         */
        '200': OrganizationDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/organizations/{organizationId}/exchange': {
    delete: {
      req: OrganizationsDeleteExchangeOrganizationData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/organizations/sharepoint': {
    get: {
      req: OrganizationsGetAllSharePointOrganizationsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': StatusDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: OrganizationsAddSharePointOrganizationData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': SharePointOrganizationDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/organizations/{organizationId}/sharepoint': {
    delete: {
      req: OrganizationsDeleteSharePointOrganizationData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/organizations/skype': {
    get: {
      req: OrganizationsGetAllSkypeOrganizationsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': OrganizationsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: OrganizationsAddSkypeOrganizationData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': SkypeOrganizationDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/organizations/{organizationId}/skype': {
    delete: {
      req: OrganizationsDeleteSkypeOrganizationData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/organizations/active-directory': {
    get: {
      req: OrganizationsGetAllActiveDirectoryOrganizationsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ADOrganizationsDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: OrganizationsAddActiveDirectoryOrganizationData;
      res: {
        /**
         * Successfully Added
         */
        '200': ActiveDirectoryOrganizationDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/organizations/active-directory/sub-ou': {
    post: {
      req: OrganizationsAddActiveDirectorySubOrganizationData;
      res: {
        /**
         * Successfully added
         */
        '200': ActiveDirectorySubOrganizationDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/organizations/{organizationId}/active-directory': {
    delete: {
      req: OrganizationsDeleteActiveDirectoryOrganizationData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mail-domains': {
    get: {
      req: ExchangeMailDomainsGetAllExchangeMailDomainsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeMailDomainsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: ExchangeMailDomainsAddExchangeMailDomainData;
      res: {
        /**
         * Successfully Added
         */
        '200': ExchangeMailDomainDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mail-domains/{exgMaildomainId}': {
    get: {
      req: ExchangeMailDomainsGetExchangemailDomainDetailsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeMailDomainDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeMailDomainsEditExchangeMailDomainData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangeMailDomainsDeleteExchangeMailDomainData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mail-domains/{exgMaildomainId}/enable-disable': {
    put: {
      req: ExchangeMailDomainsEnableDisableExchangeMailDomainData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mailboxes': {
    get: {
      req: ExgMailboxGetAllExgMailboxsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExgMailboxesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: ExgMailboxAddExgMailboxData;
      res: {
        /**
         * Successfully Added
         */
        '200': ExgMailboxDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mailboxes/{exgMailboxId}/enable-disable': {
    put: {
      req: ExgMailboxUpdateExgMailboxData;
      res: {
        /**
         * Successfully Updated
         */
        '200': ExgMailboxDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mailboxes/{exgMailboxId}': {
    get: {
      req: ExgMailboxGetExgMailboxDetailsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExgMailboxDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExgMailboxDeleteExgMailboxData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mailboxes/{exgMailboxId}/async-policies': {
    get: {
      req: ExgMailboxGetExgMailboxAsyncPolicyData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': MailboxActiveSyncSettingsDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExgMailboxUpdateExgMailboxAsyncPolicyData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mailboxes/{mailboxId}/general-properties': {
    get: {
      req: ExgMailboxGetUserMailboxGeneralPropertiesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': UpdateUserGeneralPropertiesDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExgMailboxUpdateExgMailboxGeneralPropertiesData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mailboxes/{mailboxId}/change-password': {
    put: {
      req: ExgMailboxChangeUserMailboxPasswordData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mailboxes/{mailboxId}/email-addresses': {
    get: {
      req: ExgMailboxGetUserMailboxEmailAddressesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': UserMailboxEmailAddressesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExgMailboxSetPrimaryEmailAddressesData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: ExgMailboxAddUserMailboxEmailAddressesData;
      res: {
        /**
         * Successfully Added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExgMailboxDeleteUserMailboxEmailAddressesData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mailboxes/{mailboxId}/send-on-behalf': {
    get: {
      req: ExgMailboxGetUserSendOnBehalfUsersData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeRecipientListDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExgMailboxAddUserSendOnBehalfUsersData;
      res: {
        /**
         * Successfully added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExgMailboxRemoveUserSendOnBehalfUsersData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mailboxes/{mailboxId}/advanced-properties': {
    get: {
      req: ExgMailboxGetUserMailboxAdvancedPropertiesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': UserMailboxAdvancedPropertiesDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExgMailboxUpdateUserMailboxAdvancedPropertiesData;
      res: {
        /**
         * Successfully Updated
         */
        '200': UserMailboxAdvancedPropertiesDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mailboxes/{mailboxId}/accepted-senders': {
    get: {
      req: ExgMailboxGetUserAcceptedSendersData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeRecipientListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExgMailboxAddUserAcceptedSendersData;
      res: {
        /**
         * Successfully Added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExgMailboxRemoveUserAcceptedSendersData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mailboxes/{mailboxId}/rejected-senders': {
    get: {
      req: ExgMailboxGetUserRejectedSendersData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeRecipientListDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExgMailboxAddUserRejectedSendersData;
      res: {
        /**
         * Successfully Added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExgMailboxRemoveUserRejectedSendersData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mailboxes/{mailboxId}/full-access-permissions': {
    get: {
      req: ExgMailboxGetUserFullAccessPermissionData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeRecipientListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExgMailboxAddUserFullAccessPermissionData;
      res: {
        /**
         * Successfully Added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExgMailboxRemoveUserFullAccessPermissionData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mailboxes/{mailboxId}/send-as-permissions': {
    get: {
      req: ExgMailboxGetUserSendAsPermissionData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeRecipientListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExgMailboxAddUserSendAsPermissionData;
      res: {
        /**
         * Successfully Added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExgMailboxRemoveUserSendAsPermissionData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mailboxes/{mailboxId}/forwarding-address': {
    get: {
      req: ExgMailboxGetUserForwardingAddressData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeMailboxForwardingDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExgMailboxUpdateUserForwardingAddressData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mailboxes/{mailboxId}/stats': {
    get: {
      req: ExgMailboxGetUserStatisticsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeMailboxStatsDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mailboxes/{mailboxId}/litigation-hold': {
    get: {
      req: ExgMailboxGetMailboxLitigationHoldSettingsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': LitigationHoldSettingsDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExgMailboxUpdateMailboxLitigationHoldSettingsData;
      res: {
        /**
         * Successfully Updated
         */
        '200': LitigationHoldSettingsDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mailboxes/{mailboxId}/memberships': {
    get: {
      req: ExgMailboxGetAllListsOfUserMailboxData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeRecipientListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExgMailboxAddUserMailboxToListData;
      res: {
        /**
         * Successfully Added
         */
        '200': ExchangeRecipientListDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExgMailboxRemoveUserMailboxFromListData;
      res: {
        /**
         * Successfully Updated
         */
        '200': ExchangeRecipientListDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mailboxes/{mailboxId}/archive-mailbox': {
    get: {
      req: ExgMailboxGetArchiveMailboxSettingsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeArchiveMailboxListDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExgMailboxUpdateArchiveMailboxData;
      res: {
        /**
         * Successfully Updated
         */
        '200': ExchangeArchiveMailboxDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: ExgMailboxAddArchiveMailboxData;
      res: {
        /**
         * Successfully Added
         */
        '200': ExchangeArchiveMailboxDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mailboxes/{mailboxId}/archive-mailbox/enable-disable': {
    put: {
      req: ExgMailboxUpdateArchiveMailboxStatusData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mailboxes/{organizationId}/bulk/feasibility': {
    put: {
      req: ExgMailboxCheckBulkMailboxFeasibilityData;
      res: {
        /**
         * Successfully Updated
         */
        '200': ExchangeBulkUserListDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mailboxes/bulk': {
    post: {
      req: ExgMailboxAddExgBulkMailboxData;
      res: {
        /**
         * Successfully Added
         */
        '200': ExgBulkMailboxDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mailboxes/{organizationId}/bulk': {
    put: {
      req: ExgMailboxUpdateExgBulkMailboxData;
      res: {
        /**
         * Successfully Updated
         */
        '200': ExgBulkMailboxDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mailboxes/{mailboxId}/auto-reply': {
    get: {
      req: ExgMailboxGetMailboxAutoReplyConfigurationData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeMailboxOutOfOfficeDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExgMailboxSetUserAutoReplyConfigurationData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/distribution-lists': {
    get: {
      req: ExchangeDistributionListGetAllExchangeDistributionListsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeDistributionListsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: ExchangeDistributionListAddExchangeDistributionListData;
      res: {
        /**
         * Successfully Added
         */
        '200': ExchangeDistributionListDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/distribution-lists/{distributionlistsId}/administrator': {
    put: {
      req: ExchangeDistributionListUpdateExchangeDlAdministratorData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/distribution-lists/{distributionlistId}': {
    get: {
      req: ExchangeDistributionListGetExchangeDlDetailsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeDistributionListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangeDistributionListDeleteExchangeDistributionListData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/distribution-lists/{distributionlistsId}/members': {
    get: {
      req: ExchangeDistributionListGetExchangeListMembersData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeDistributionListMembersDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeDistributionListUpdateExchangeListMembersData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangeDistributionListRemoveListExchangeListMembersData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/distribution-lists/{distributionlistsId}/accepted-senders': {
    get: {
      req: ExchangeDistributionListGetListAcceptedSendersData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeRecipientListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeDistributionListAddListAcceptedSendersData;
      res: {
        /**
         * Successfully Added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangeDistributionListRemoveListAcceptedSendersData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/distribution-lists/{distributionlistsId}/rejected-senders': {
    get: {
      req: ExchangeDistributionListGetListRejectedSendersData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeRecipientListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeDistributionListAddListRejectedSendersData;
      res: {
        /**
         * Successfully Added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangeDistributionListRemoveListRejectedSendersData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/distribution-lists/{distributionlistsId}/send-on-behalf': {
    get: {
      req: ExchangeDistributionListGetListSendOnBehalfUsersData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeRecipientListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeDistributionListAddListSendOnBehalfUsersData;
      res: {
        /**
         * Successfully Added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangeDistributionListRemoveListSendOnBehalfUsersData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/distribution-lists/{distributionlistsId}/email-addresses': {
    get: {
      req: ExchangeDistributionListGetListEmailAddressesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': RecipientEmailAddressesDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeDistributionListSetListPrimaryEmailAddressData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: ExchangeDistributionListAddListEmailAddressData;
      res: {
        /**
         * Successfully Added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangeDistributionListDeleteListEmailAddressData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/distribution-lists/{distributionlistsId}/properties': {
    get: {
      req: ExchangeDistributionListGetListPropertiesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeDistributionListAdvancePropertiesDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeDistributionListUpdateListSettingsData;
      res: {
        /**
         * Successfully Updated
         */
        '200': ExchangeDistributionListAdvancePropertiesDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mail-contacts': {
    get: {
      req: ExchangeMailContactGetAllExchangeMailContactsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeMailContactsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: ExchangeMailContactAddExchangeMailContactData;
      res: {
        /**
         * Successfully Added
         */
        '200': ExchangeMailContactDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mail-contacts/{mailContactId}': {
    get: {
      req: ExchangeMailContactGetExchangeMailContactDetailsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeMailContactDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangeMailContactDeleteMailContactData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mail-contacts/{mailContactId}/accepted-senders': {
    get: {
      req: ExchangeMailContactGetMailContactAcceptedSendersData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeRecipientListDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeMailContactAddMailContactAcceptedSendersData;
      res: {
        /**
         * Successfully Added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangeMailContactRemoveMailContactAcceptedSendersData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mail-contacts/{mailContactId}/rejected-senders': {
    get: {
      req: ExchangeMailContactGetMailContactRejectedSendersData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeRecipientListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeMailContactAddMailContactRejectedSendersData;
      res: {
        /**
         * Successfully Added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangeMailContactRemoveMailContactRejectedSendersData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mail-contacts/{mailContactId}/email-addresses': {
    get: {
      req: ExchangeMailContactGetMailContactEmailAddressesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': RecipientEmailAddressesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: ExchangeMailContactAddMailContactEmailAddressData;
      res: {
        /**
         * Successfully Added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangeMailContactDeleteMailContactEmailAddressData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mail-contacts/{mailContactId}/email-addresses/primary': {
    put: {
      req: ExchangeMailContactSetMailContactPrimaryEmailAddressData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mail-contacts/{mailContactId}/email-addresses/external': {
    put: {
      req: ExchangeMailContactSetMailContactExternalEmailAddressData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mail-contacts/{mailContactId}/general-properties': {
    get: {
      req: ExchangeMailContactGetMailContactGeneralSettingsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeMailContactGeneralPropertiesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeMailContactUpdateMailContactGeneralSettingsData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mail-contacts/{mailContactId}/advanced-properties': {
    get: {
      req: ExchangeMailContactGetMailContactAdvancedSettingsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeMailContactAdvancedPropertiesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeMailContactUpdateMailContactAdvancedSettingsData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/mail-contacts/{mailContactId}/enable-disable': {
    put: {
      req: ExchangeMailContactUpdateMailContactData;
      res: {
        /**
         * Successfully Updated
         */
        '200': ExchangeMailContactDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/resource-mailboxes': {
    get: {
      req: ExchangeResourceMailboxGetAllExchangeResourceMailboxsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeResourceMailboxesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: ExchangeResourceMailboxAddExchangeResourceMailboxData;
      res: {
        /**
         * Successfully Added
         */
        '200': ExchangeResourceMailboxDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/resource-mailboxes/{exgMailboxId}': {
    get: {
      req: ExchangeResourceMailboxGetResourceMailboxDetailsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeResourceMailboxDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangeResourceMailboxDeleteExchangeResourceMailboxData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/resource-mailboxes/{exgMailboxId}/enable-disable': {
    put: {
      req: ExchangeResourceMailboxUpdateExchangeResourceMailboxData;
      res: {
        /**
         * Successfully Updated
         */
        '200': ExgMailboxDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/resource-mailboxes/{mailboxId}/archive-mailbox': {
    get: {
      req: ExchangeResourceMailboxGetArchiveResourceMailboxSettingsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeArchiveMailboxListDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeResourceMailboxUpdateArchiveResourceMailboxData;
      res: {
        /**
         * Successfully Updated
         */
        '200': ExchangeArchiveMailboxDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: ExchangeResourceMailboxAddArchiveResourceMailboxData;
      res: {
        /**
         * Successfully Added
         */
        '200': ExchangeArchiveMailboxDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/resource-mailboxes/{mailboxId}/archive-mailbox/enable-disable': {
    put: {
      req: ExchangeResourceMailboxUpdateArchiveResourceMailboxStatusData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/resource-mailboxes/{mailboxId}/general-properties': {
    get: {
      req: ExchangeResourceMailboxGetExchangeResourceMailboxGeneralPropertiesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': UpdateUserGeneralPropertiesDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeResourceMailboxUpdateExchangeResourceMailboxGeneralPropertiesData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/resource-mailboxes/{mailboxId}/advanced-properties': {
    get: {
      req: ExchangeResourceMailboxGetExchangeResourceMailboxAdvancedPropertiesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': UserMailboxAdvancedPropertiesDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeResourceMailboxUpdateExchangeResourceMailboxAdvancedPropertiesData;
      res: {
        /**
         * Successfully Updated
         */
        '200': UserMailboxAdvancedPropertiesDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/resource-mailboxes/{mailboxId}/email-addresses': {
    get: {
      req: ExchangeResourceMailboxGetResourceMailboxEmailAddressesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': UserMailboxEmailAddressesDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeResourceMailboxSetPrimaryEmailAddressesData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: ExchangeResourceMailboxAddResourceMailboxEmailAddressesData;
      res: {
        /**
         * Successfully Added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangeResourceMailboxDeleteResourceMailboxEmailAddressesData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/resource-mailboxes/{mailboxId}/send-on-behalf': {
    get: {
      req: ExchangeResourceMailboxGetResourceMailboxSendOnBehalfUsersData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeRecipientListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeResourceMailboxAddResourceMailboxSendOnBehalfUsersData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangeResourceMailboxRemoveResourceMailboxSendOnBehalfUsersData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/resource-mailboxes/{mailboxId}/accepted-senders': {
    get: {
      req: ExchangeResourceMailboxGetResourceMailboxAcceptedSendersData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeRecipientListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeResourceMailboxAddResourceMailboxAcceptedSendersData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangeResourceMailboxRemoveResourceMailboxAcceptedSendersData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/resource-mailboxes/{mailboxId}/rejected-senders': {
    get: {
      req: ExchangeResourceMailboxGetResourceMailboxRejectedSendersData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeRecipientListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeResourceMailboxAddResourceMailboxRejectedSendersData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangeResourceMailboxRemoveResourceMailboxRejectedSendersData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/resource-mailboxes/{mailboxId}/full-access-permissions': {
    get: {
      req: ExchangeResourceMailboxGetUserFullAccessPermissionData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeRecipientListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeResourceMailboxAddUserFullAccessPermissionData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangeResourceMailboxRemoveUserFullAccessPermissionData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/resource-mailboxes/{mailboxId}/send-as-permissions': {
    get: {
      req: ExchangeResourceMailboxGetUserSendAsPermissionData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeRecipientListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeResourceMailboxAddUserSendAsPermissionData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangeResourceMailboxRemoveUserSendAsPermissionData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/resource-mailboxes/{mailboxId}/forwarding-address': {
    get: {
      req: ExchangeResourceMailboxGetUserForwardingAddressData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeMailboxForwardingDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeResourceMailboxUpdateUserForwardingAddressData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/resource-mailboxes/{mailboxId}/stats': {
    get: {
      req: ExchangeResourceMailboxGetResourceMailboxStatisticsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeMailboxStatsDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/resource-mailboxes/{mailboxId}/memberships': {
    get: {
      req: ExchangeResourceMailboxGetAllListsOfUserMailboxData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeRecipientListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeResourceMailboxAddUserMailboxToListData;
      res: {
        /**
         * Successfully Updated
         */
        '200': ExchangeRecipientListDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangeResourceMailboxRemoveUserMailboxFromListData;
      res: {
        /**
         * Successfully Updated
         */
        '200': ExchangeRecipientListDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/resource-mailboxes/{mailboxId}/delegates': {
    get: {
      req: ExchangeResourceMailboxGetDelegatesForResourceMailboxData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ResourceDelegateListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeResourceMailboxAddDelegatesForResourceMailboxData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangeResourceMailboxRemoveDelegatesForResourceMailboxData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/resource-mailboxes/{mailboxId}/book-in-policy-users': {
    get: {
      req: ExchangeResourceMailboxGetResourceMailboxBookInPolicyUsersData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': PolicyUserListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeResourceMailboxAddResourceMailboxBookInPolicyRequestData;
      res: {
        /**
         * Successfully Added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangeResourceMailboxRemoveResourceMailboxBookInPolicyUsersData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/resource-mailboxes/{mailboxId}/request-in-policy-users': {
    get: {
      req: ExchangeResourceMailboxGetResourceMailboxRequestInPolicyUsersData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': PolicyUserListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeResourceMailboxAddResourceMailboxRequestInPolicyUsersData;
      res: {
        /**
         * Successfully Added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangeResourceMailboxRemoveResourceMailboxRequestInPolicyUsersData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/resource-mailboxes/{mailboxId}/request-out-policy-users': {
    get: {
      req: ExchangeResourceMailboxGetResourceMailboxOutPolicyUsersData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': PolicyUserListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeResourceMailboxAddResourceMailboxOutPolicyUsersData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangeResourceMailboxRemoveResourceMailboxOutPolicyUsersData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/resource-mailboxes/{mailboxId}/resource-mailbox-policy-settings': {
    get: {
      req: ExchangeResourceMailboxGetResourceMaiboxPolicySettingsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ResourceMailboxPropertiesDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeResourceMailboxUpdateResourceMaiboxPolicySettingsData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/public-folders': {
    get: {
      req: ExchangePublicFolderGetAllExchangePublicFoldersData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangePublicFoldersDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: ExchangePublicFolderAddExchangePublicFolderData;
      res: {
        /**
         * Successfully Added
         */
        '200': ExchangePublicFolderDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/public-folders/{publicFolderId}': {
    get: {
      req: ExchangePublicFolderGetExchangePublicFolderDetailsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangePublicFolderDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangePublicFolderDeleteExchangePublicFolderData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/public-folders/{publicFolderId}/general-properties': {
    get: {
      req: ExchangePublicFolderGetExchangePublicFolderGeneralPropertiesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangePublicFolderGeneralPropertiesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangePublicFolderUpdateExchangePublicFolderGeneralPropertiesData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/public-folders/{publicFolderId}/advanced-properties': {
    get: {
      req: ExchangePublicFolderGetExchangePublicFolderAdvancedPropertiesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangePublicFolderAdvancedPropertiesDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangePublicFolderUpdateExchangePublicFolderAdvancedPropertiesData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/public-folders/{publicFolderId}/permissions': {
    get: {
      req: ExchangePublicFolderGetExchangePublicFolderPermissionsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangePFUsersListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangePublicFolderUpdateExchangePublicFolderPermissionsData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/public-folders/{publicFolderId}/accepted-senders': {
    get: {
      req: ExchangePublicFolderGetPublicFolderAcceptedSendersData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeRecipientListDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangePublicFolderAddPublicFolderAcceptedSendersData;
      res: {
        /**
         * Successfully Added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangePublicFolderRemovePublicFolderAcceptedSendersData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/public-folders/{publicFolderId}/rejected-senders': {
    get: {
      req: ExchangePublicFolderGetPublicFolderRejectedSendersData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeRecipientListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangePublicFolderAddPublicFolderRejectedSendersData;
      res: {
        /**
         * Successfully Added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangePublicFolderRemovePublicFolderRejectedSendersData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/public-folders/{publicFolderId}/email-addresses': {
    get: {
      req: ExchangePublicFolderGetPublicFolderEmailAddressesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': RecipientEmailAddressesDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: ExchangePublicFolderAddPublicFolderEmailAddressesData;
      res: {
        /**
         * Successfully added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangePublicFolderDeletePublicFolderEmailAddressesData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/public-folders/{publicFolderId}/forwarding-address': {
    get: {
      req: ExchangePublicFolderGetPublicFolderForwardingAddressData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangePublicFolderForwardingDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangePublicFolderUpdatePublicFolderForwardingAddressData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/public-folders/{publicFolderId}/enable-disable': {
    put: {
      req: ExchangePublicFolderEnableDisablePublicFolderData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/organizations/{organizationId}/journal-rules': {
    post: {
      req: ExchangeJournalRuleAddExchangeJournalRuleData;
      res: {
        /**
         * Successfully Added
         */
        '200': ExchangeJournalRuleDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangeJournalRuleDeleteExchangeJournalRuleData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/organizations/journal-rules': {
    get: {
      req: ExchangeJournalRuleGetAllExchangeJournalRulesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeJournalRulesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/organizations/{organizationId}/journal-rules/enable-disable': {
    put: {
      req: ExchangeJournalRuleEnableDisableExchangeJournalRuleData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/organizations/{organizationId}/blocked-domain-rules': {
    get: {
      req: ExchangeBlockedDomainRuleGetBlockedDomainRuleDetailsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeBlockedDomainRuleDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeBlockedDomainRuleUpdateExchangeBlockedDomainRuleData;
      res: {
        /**
         * Successfully Updated
         */
        '200': ExchangeBlockedDomainRuleDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: ExchangeBlockedDomainRuleAddExchangeBlockedDomainRuleData;
      res: {
        /**
         * Successfully Added
         */
        '200': ExchangeBlockedDomainRuleDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangeBlockedDomainRuleDeleteExchangeBlockedDomainRuleData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/organizations/blocked-domain-rules': {
    get: {
      req: ExchangeBlockedDomainRuleGetExchangeBlockedDomainRulesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeBlockedDomainRulesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/organizations/{organizationId}/blocked-domain-rules/enable-disable': {
    put: {
      req: ExchangeBlockedDomainRuleEnableDisableExchangeBlockedDomainRuleData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/organizations/{organizationId}/mail-disclaimers': {
    get: {
      req: ExchangeMailDisclaimerGetAllExchangeMailDisclaimersData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeMailDisclaimersDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: ExchangeMailDisclaimerUpdateExchangeMailDisclaimerData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: ExchangeMailDisclaimerAddExchangeMailDisclaimerData;
      res: {
        /**
         * Successfully Added
         */
        '200': ExchangeMailDisclaimerDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: ExchangeMailDisclaimerDeleteExchangeMailDisclaimerData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/organizations/{organizationId}/mail-disclaimers/enable-disable': {
    put: {
      req: ExchangeMailDisclaimerEnableDisableExchangeMailDisclaimerData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/{serverRoleId}/mailbox-databases': {
    get: {
      req: ExgConfsGetAllExgMailBoxesDbData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExgMailboxDatabasesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/{serverRoleId}/mailbox-databases/{userId}': {
    get: {
      req: ExgConfsGetAllExgMailBoxesDbByUserIdData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExgMailboxDatabasesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/{serverRoleId}/public-folder-mailboxes': {
    get: {
      req: ExgConfsGetAllExgPfMailBoxesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangePfMailboxesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/{serverRoleId}/public-folder-mailboxes/{userId}': {
    get: {
      req: ExgConfsGetAllExgPfMailBoxesByUserIdData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangePfMailboxesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/{serverRoleId}/activesync-policies': {
    get: {
      req: ExgConfsActiveSyncPoliciesData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ActiveSyncPoliciesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/distribution-lists/by-administrator': {
    get: {
      req: ExchangeGetExchangeListsByAdministratorData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': ExchangeDistributionListsDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/exchange/distribution-lists/{distributionlistsId}/is-member': {
    get: {
      req: ExchangeIsUserDistributionListMemberData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/sharepoint/sites': {
    get: {
      req: SharePointSiteGetAllSharePointSitesData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SharePointSiteListDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: SharePointSiteAddSharePointSiteData;
      res: {
        /**
         * Successfully Added
         */
        '200': SharePointSiteDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Pre Condition Failed
         */
        '412': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/sharepoint/sites/{sharePointSiteId}': {
    get: {
      req: SharePointSiteGetSharePointSiteDetailsData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SharePointSiteDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: SharePointSiteDeleteSharePointSiteData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/sharepoint/sites/{sharePointSiteId}/subsites': {
    get: {
      req: SharePointSiteGetAllSharePointSubSitesData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SharePointSiteListDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: SharePointSiteAddSharePointSubSiteData;
      res: {
        /**
         * Successfully Added
         */
        '200': SharePointSubSiteDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/sharepoint/sites/{sharePointSiteId}/roles': {
    get: {
      req: SharePointSiteGetAllSharePointSiteRolesData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SharePointRoleListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/sharepoint/sites/{sharePointSubSiteId}/subsites': {
    delete: {
      req: SharePointSiteDeleteSharePointSubSiteData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/sharepoint/sites/{sharePointSiteId}/stats': {
    get: {
      req: SharePointSiteGetSharePointSiteStatsData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SharePointSiteDetailDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/sharepoint/sites/{siteId}/users': {
    get: {
      req: SharePointUserGetSharePointUsersData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SharePointUserListDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: SharePointUserAddSharePointUserData;
      res: {
        /**
         * Successfully Added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/sharepoint/sites/{siteId}/users/{sharePointUserId}': {
    get: {
      req: SharePointUserGetSharePointUserDetailsData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SharePointUserDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/sharepoint/sites/{siteId}/users/{userId}': {
    delete: {
      req: SharePointUserDeleteSharePointSiteUserData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/sharepoint/sites/{siteId}/users/{userId}/roles': {
    get: {
      req: SharePointUserGetSharePointUserRolesData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SharePointRoleListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: SharePointUserUpdateSharePointUserRolesData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/sharepoint/sites/{siteId}/users/{userId}/change-password': {
    put: {
      req: SharePointUserChangeSharePointUserPasswordData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/sharepoint/sites/{siteId}/users/{userId}/general-profile': {
    get: {
      req: SharePointUserGetSharePointUserPropertiesData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SharePointGeneralProfileDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: SharePointUserUpdateSharePointUserPropertiesData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/sharepoint/sites/{siteId}/users/existing': {
    get: {
      req: SharePointUserGetExistingSharePointUsersData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': ActiveDirectoryUsersListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/sharepoint/sites/{siteId}/groups': {
    get: {
      req: SharePointGroupGetSharePointGroupsData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SharePointGroupListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: SharePointGroupAddSharePointGroupData;
      res: {
        /**
         * Successfully Added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/sharepoint/sites/{siteId}/groups/{groupName}': {
    delete: {
      req: SharePointGroupDeleteSharePointGroupsData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/sharepoint/sites/{siteId}/groups/{groupName}/roles': {
    get: {
      req: SharePointGroupGetSharePointGroupRolesData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SharePointRoleListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: SharePointGroupUpdateSharePointGroupRolesData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/sharepoint/sites/{siteId}/groups/{groupName}/group-members': {
    get: {
      req: SharePointGroupGetSharePointGroupUsersData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SharePointUserListDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: SharePointGroupAddSharePointGroupUsersData;
      res: {
        /**
         * Successfully Added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: SharePointGroupRemoveSharePointGroupUsersData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/sharepoint/{serverRoleId}/web-applications/{userId}': {
    get: {
      req: SharePointConfGetUserSpWebApplicationsData;
      res: {
        /**
         * Successfully retrieved
         */
        '200': SharePointUserWebApplicationListDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/sharepoint-server/{serverRoleId}/web-applications': {
    get: {
      req: SharePointServerGetSharePointServerWebApplicationsData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SharePointWebApplicationListDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/sharepoint-server/{serverRoleId}/locales': {
    get: {
      req: SharePointServerGetSharePointServerLocalesData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SharePointLocaleListDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/sharepoint-server/{serverRoleId}/locales/{localeId}/web-templates': {
    get: {
      req: SharePointServerGetSharePointServerWebTemplatesData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SharePointWebTemplateListDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype/users': {
    get: {
      req: SkypeUserListSkypeUsersData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SkypeUserListDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: SkypeUserAddSkypeUserData;
      res: {
        /**
         * Successfully Added
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype/users/{skypeUserId}': {
    get: {
      req: SkypeUserGetSkypeUserDetailsData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SkypeUserDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: SkypeUserDeleteSkypeUserData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype/users/{userId}/change-password': {
    put: {
      req: SkypeUserChangeSkypeUserPasswordData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype/users/{userId}/general-profile': {
    get: {
      req: SkypeUserGetSkypeUserPropertiesData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SkypeUserGeneralProfileDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: SkypeUserUpdateSkypeUserPropertiesData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype/users/{userId}/advanced-properties': {
    get: {
      req: SkypeUserGetSkypeUserAdvancedSettingsData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SkypeUserAdvancedPropertiesDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: SkypeUserUpdateSkypeUserAdvancedPropertiesData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype/users/{userId}/status': {
    put: {
      req: SkypeUserUpdateSkypeUserStatusData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype/users/{userId}/forwarding': {
    get: {
      req: SkypeUserGetSkypeUserForwardingSettingsData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SkypeUserForwardingSettingsDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: SkypeUserUpdateSkypeUserForwardingSettingsData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype/users/bulk/feasibility': {
    put: {
      req: SkypeUserCheckBulkSkypeUsersFeasibilityData;
      res: {
        /**
         * Successfully Updated
         */
        '200': SkypeBulkUsersListDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype/users/bulk': {
    post: {
      req: SkypeUserAddBulkSkypeUsersData;
      res: {
        /**
         * Successfully Added
         */
        '200': SkypeBulkUsersListDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype/users/{userId}/telephony-settings': {
    put: {
      req: SkypeUserUpdateSkypeUserTelephonySettingsData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype/users/{userId}/policy-settings': {
    put: {
      req: SkypeUserUpdateSkypeUserPolicySettingsData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype/sip-domains': {
    get: {
      req: SkypeSipDomainListSipDomainsData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SkypeSipDomainListDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: SkypeSipDomainAddSkypeSipDomainData;
      res: {
        /**
         * Successfully Added
         */
        '200': SkypeSipDomainDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Already Exists
         */
        '409': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype/sip-domains/{sipDomainId}': {
    get: {
      req: SkypeSipDomainGetSipDomainDetailsData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SkypeSipDomainDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: SkypeSipDomainDeleteSipDomainData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype/response-groups': {
    get: {
      req: SkypeGroupListSkypeGroupsData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SkypeGroupListDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: SkypeGroupAddSkypeResponseGroupData;
      res: {
        /**
         * Successfully Added
         */
        '200': SkypeGroupDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype/response-groups/{skypeResponseGroupId}': {
    get: {
      req: SkypeGroupGetSkypeGroupDetailsData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SkypeGroupDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: SkypeGroupDeleteSkypeGroupData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype/response-groups/{skypeResponseGroupId}/properties': {
    get: {
      req: SkypeGroupGetSkypeGroupPropertiesData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SkypeGroupDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: SkypeGroupUpdateSkypeGroupPropertiesData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype/queues': {
    get: {
      req: SkypeQueueListSkypeQueuesData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SkypeQueueListDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: SkypeQueueAddSkypeResponseQueueData;
      res: {
        /**
         * Successfully Added
         */
        '200': SkypeQueueDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype/queues/{skypeResponseQueueId}': {
    get: {
      req: SkypeQueueGetSkypeQueueDetailsData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SkypeQueueDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: SkypeQueueDeleteSkypeQueueData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype/queues/{skypeResponseQueueId}/properties': {
    get: {
      req: SkypeQueueGetSkypeQueuePropertiesData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SkypeQueueDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: SkypeQueueUpdateSkypeQueuePropertiesData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype/workflows': {
    get: {
      req: SkypeWorkflowListSkypeWorkflowsData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SkypeWorkflowListDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: SkypeWorkflowAddSkypeWorkflowData;
      res: {
        /**
         * Successfully Added
         */
        '200': SkypeWorkflowDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype/workflows/{workflowId}': {
    get: {
      req: SkypeWorkflowGetSkypeWorkflowDetailsData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SkypeWorkflowDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: SkypeWorkflowDeleteSkypeWorkflowData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype/workflows/{workflowId}/settings': {
    get: {
      req: SkypeWorkflowGetSkypeWorkflowSettingsData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SkypeWorkflowDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: SkypeWorkflowUpdateSkypeWorkflowSettingsData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype/workflows/{workflowId}/activation': {
    put: {
      req: SkypeWorkflowUpdateWorkflowActivationStatusData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype/workflows/{workflowId}/federation': {
    put: {
      req: SkypeWorkflowUpdateWorkflowFederationStatusData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype/workflows/{workflowId}/anonymity': {
    put: {
      req: SkypeWorkflowUpdateWorkflowAnonymityStatusData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype/workflows/{workflowId}/ivr': {
    put: {
      req: SkypeWorkflowUpdateWorkflowIvrSettingsData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype-server/{serverRoleId}/registrar-pools': {
    get: {
      req: SkypeServerGetServerRegistrarPoolsData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SkypeRegistrarPoolListDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype-server/{serverRoleId}/registrar-pools/{userId}': {
    get: {
      req: SkypeServerGetUserAssignedServerPoolsData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SkypeRegistrarPoolListDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype-server/{serverRoleId}/time-zones': {
    get: {
      req: SkypeServerGetServerTimeZonesData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SkypeTimeZoneListDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype-server/line-uris': {
    get: {
      req: SkypeServerListUserLineUrisData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': LineUriListDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype-server/line-uris/{lineUriId}': {
    get: {
      req: SkypeServerGetLineUriDetailsData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': LineUriDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype-server/{serverRoleId}/federated-domains': {
    get: {
      req: SkypeServerGetFederatedDomainsData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SkypeFederatedDomainListDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype-server/{serverRoleId}/user-policies': {
    get: {
      req: SkypeServerGetSkypeUserPoliciesData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SkypeUserPoliciesListDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype-server/{serverRoleId}/application-services': {
    get: {
      req: SkypeServerGetServerApplicationServicesData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SkypeApplicationServicesListDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/skype-server/{serverRoleId}/application-services/{userId}': {
    get: {
      req: SkypeServerGetUserAssignedApplicationServicesData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SkypeApplicationServicesListDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/virtualization/virtual-machines': {
    get: {
      req: VirtualMachineListVirtualMachinesData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': VirtualMachinesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    post: {
      req: VirtualMachineAddVirtualMachineData;
      res: {
        /**
         * Successfully Added
         */
        '200': AddVmDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Pre Condition Failed
         */
        '412': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/virtualization/virtual-machines/{virtualMachineId}': {
    get: {
      req: VirtualMachineGetVirtualMachineDetailsData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': VirtualMachineDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: VirtualMachineUpdateVirtualMachineData;
      res: {
        /**
         * Successfully Updated
         */
        '200': VmAddUpdateResultDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    delete: {
      req: VirtualMachineDeleteVirtualMachineData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/virtualization/virtual-machines/{virtualMachineId}/vlan': {
    put: {
      req: VirtualMachineUpdateVlanData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/virtualization-server/{serverId}/virtual-machines': {
    get: {
      req: VirtualMachineSystemVirtualMachinesListData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SystemVirtualMachinesDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/virtualization-server/{serverId}/virtual-machines/{virtualMachineGuid}': {
    get: {
      req: VirtualMachineGetSystemVirtualMachineSettingsData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': VirtualMachineDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/virtualization/virtual-machines/{virtualMachineId}/ip-addresses': {
    get: {
      req: VirtualMachineGetVirtualMachineIpAddressesData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': VmIpAddressesDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: VirtualMachineAssignVmIpAddressesData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/virtualization/virtual-machines/{virtualMachineId}/ip-addresses/{ipAddressId}': {
    delete: {
      req: VirtualMachineDeleteVmAssignedIpAddressData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/virtualization/virtual-machines/{virtualMachineId}/snapshots': {
    get: {
      req: VirtualMachineGetAllSnapShotsData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SnapShotsDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
    put: {
      req: VirtualMachineTakeSnapShotData;
      res: {
        /**
         * Successfully Added
         */
        '200': SnapShotDetailDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/virtualization/virtual-machines/{virtualMachineId}/snapshots/{snapShotId}': {
    put: {
      req: VirtualMachineApplySnapShotData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/virtualization/virtual-machines/snapshots/{snapShotId}': {
    get: {
      req: VirtualMachineGetSnapShotDetailData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': SnapShotDetailDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/virtualization/virtual-machines/{virtualMachineId}/snapshots/{snapshotId}': {
    delete: {
      req: VirtualMachineDeleteSnapShotData;
      res: {
        /**
         * Successfully Deleted
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/virtualization/virtual-machines/{virtualMachineId}/password': {
    put: {
      req: VirtualMachineChangePasswordData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/virtualization/virtual-machines/{virtualMachineId}/start': {
    put: {
      req: VirtualMachineStartVirtualMachineData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Pre Condition Failed
         */
        '412': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/virtualization/virtual-machines/{virtualMachineId}/pause': {
    put: {
      req: VirtualMachinePauseVirtualMachineData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/virtualization/virtual-machines/{virtualMachineId}/resume': {
    put: {
      req: VirtualMachineResumeVirtualMachineData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/virtualization/virtual-machines/{virtualMachineId}/reboot': {
    put: {
      req: VirtualMachineRebootVirtualMachineData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/virtualization/virtual-machines/{virtualMachineId}/shutdown': {
    put: {
      req: VirtualMachineShutdownVirtualMachineData;
      res: {
        /**
         * Successfully Updated
         */
        '200': StatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/virtualization/virtual-machines/importvm': {
    post: {
      req: VirtualMachineImportVirtualMachineData;
      res: {
        /**
         * Successfully Updated
         */
        '200': VmAddUpdateResultDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/virtualization/virtual-machines/{virtualMachineId}/transfer': {
    put: {
      req: VirtualMachineTransferVirtualMachineData;
      res: {
        /**
         * Successfully Updated
         */
        '200': VirtualMachineDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Pre Condition Failed
         */
        '412': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/virtualization/virtual-machines/{virtualMachineId}/state': {
    get: {
      req: VirtualMachineGetVirtualMachineCurrentStateData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': VirtualMachineStatusDto;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/virtualization/virtual-machines/{virtualMachineId}/fetchpassword': {
    put: {
      req: VirtualMachineFetchMachinePasswordData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': FetchMachinePasswordDto;
        /**
         * Invalid Input Data
         */
        '400': unknown;
        /**
         * Not Found
         */
        '404': unknown;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/virtualization/base-os-types': {
    get: {
      res: {
        /**
         * Successfully Retrieved
         */
        '200': BaseOsTypesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/virtualization/vlans': {
    get: {
      req: VlaNsGetAllVlaNsData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': VLANsDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
  '/virtualization/os-templates': {
    get: {
      req: OsTemplatesGetAllOsTemplatesData;
      res: {
        /**
         * Successfully Retrieved
         */
        '200': VmOsTemplatesDto;
        /**
         * Internal Server Error
         */
        '500': unknown;
      };
    };
  };
};

export type ActiveDirectoryObjectGetObjectAccountSettingsResponseTransformer = (
  data: any,
) => Promise<ActiveDirectoryObjectGetObjectAccountSettingsResponse>;

export type ADUserAccountSettingDtoModelResponseTransformer = (
  data: any,
) => ADUserAccountSettingDto;

export const ADUserAccountSettingDtoModelResponseTransformer: ADUserAccountSettingDtoModelResponseTransformer =
  (data) => {
    if (data?.ExpiryDateTime) {
      data.ExpiryDateTime = new Date(data.ExpiryDateTime);
    }
    return data;
  };

export const ActiveDirectoryObjectGetObjectAccountSettingsResponseTransformer: ActiveDirectoryObjectGetObjectAccountSettingsResponseTransformer =
  async (data) => {
    ADUserAccountSettingDtoModelResponseTransformer(data);
    return data;
  };

export type MessageCenterAddNewMessageResponseTransformer = (
  data: any,
) => Promise<MessageCenterAddNewMessageResponse>;

export type MessageDtoModelResponseTransformer = (data: any) => MessageDto;

export const MessageDtoModelResponseTransformer: MessageDtoModelResponseTransformer =
  (data) => {
    if (data?.MessageSentDate) {
      data.MessageSentDate = new Date(data.MessageSentDate);
    }
    return data;
  };

export const MessageCenterAddNewMessageResponseTransformer: MessageCenterAddNewMessageResponseTransformer =
  async (data) => {
    MessageDtoModelResponseTransformer(data);
    return data;
  };

export type MessageCenterGetMessageDetailsResponseTransformer = (
  data: any,
) => Promise<MessageCenterGetMessageDetailsResponse>;

export const MessageCenterGetMessageDetailsResponseTransformer: MessageCenterGetMessageDetailsResponseTransformer =
  async (data) => {
    MessageDtoModelResponseTransformer(data);
    return data;
  };

export type MessageCenterUpdateMessageStatusResponseTransformer = (
  data: any,
) => Promise<MessageCenterUpdateMessageStatusResponse>;

export const MessageCenterUpdateMessageStatusResponseTransformer: MessageCenterUpdateMessageStatusResponseTransformer =
  async (data) => {
    MessageDtoModelResponseTransformer(data);
    return data;
  };

export type MessageCenterGetSentMessagesResponseTransformer = (
  data: any,
) => Promise<MessageCenterGetSentMessagesResponse>;

export type MessagesDtoModelResponseTransformer = (data: any) => MessagesDto;

export type MessageDto_ListModelResponseTransformer = (
  data: any,
) => MessageDto_List;

export const MessageDto_ListModelResponseTransformer: MessageDto_ListModelResponseTransformer =
  (data) => {
    if (data?.MessageSentDate) {
      data.MessageSentDate = new Date(data.MessageSentDate);
    }
    return data;
  };

export const MessagesDtoModelResponseTransformer: MessagesDtoModelResponseTransformer =
  (data) => {
    if (Array.isArray(data?.Messages)) {
      data.Messages.forEach(MessageDto_ListModelResponseTransformer);
    }
    return data;
  };

export const MessageCenterGetSentMessagesResponseTransformer: MessageCenterGetSentMessagesResponseTransformer =
  async (data) => {
    MessagesDtoModelResponseTransformer(data);
    return data;
  };

export type MessageCenterGetReceivedMessagesResponseTransformer = (
  data: any,
) => Promise<MessageCenterGetReceivedMessagesResponse>;

export const MessageCenterGetReceivedMessagesResponseTransformer: MessageCenterGetReceivedMessagesResponseTransformer =
  async (data) => {
    MessagesDtoModelResponseTransformer(data);
    return data;
  };

export type MessageCenterMessageRepliesResponseTransformer = (
  data: any,
) => Promise<MessageCenterMessageRepliesResponse>;

export type MessageRepliesDtoModelResponseTransformer = (
  data: any,
) => MessageRepliesDto;

export type MessageReplyDto_ListModelResponseTransformer = (
  data: any,
) => MessageReplyDto_List;

export const MessageReplyDto_ListModelResponseTransformer: MessageReplyDto_ListModelResponseTransformer =
  (data) => {
    if (data?.ReplySentDate) {
      data.ReplySentDate = new Date(data.ReplySentDate);
    }
    return data;
  };

export const MessageRepliesDtoModelResponseTransformer: MessageRepliesDtoModelResponseTransformer =
  (data) => {
    if (Array.isArray(data?.MessageReplies)) {
      data.MessageReplies.forEach(MessageReplyDto_ListModelResponseTransformer);
    }
    if (data?.MessageSentDate) {
      data.MessageSentDate = new Date(data.MessageSentDate);
    }
    return data;
  };

export const MessageCenterMessageRepliesResponseTransformer: MessageCenterMessageRepliesResponseTransformer =
  async (data) => {
    MessageRepliesDtoModelResponseTransformer(data);
    return data;
  };

export type MessageCenterAddMessageReplyResponseTransformer = (
  data: any,
) => Promise<MessageCenterAddMessageReplyResponse>;

export type MessageReplyDtoModelResponseTransformer = (
  data: any,
) => MessageReplyDto;

export const MessageReplyDtoModelResponseTransformer: MessageReplyDtoModelResponseTransformer =
  (data) => {
    if (data?.ReplySentDate) {
      data.ReplySentDate = new Date(data.ReplySentDate);
    }
    return data;
  };

export const MessageCenterAddMessageReplyResponseTransformer: MessageCenterAddMessageReplyResponseTransformer =
  async (data) => {
    MessageReplyDtoModelResponseTransformer(data);
    return data;
  };

export type TicketsGetAllTicketsResponseTransformer = (
  data: any,
) => Promise<TicketsGetAllTicketsResponse>;

export type TicketsDtoModelResponseTransformer = (data: any) => TicketsDto;

export type TicketDto_ListModelResponseTransformer = (
  data: any,
) => TicketDto_List;

export const TicketDto_ListModelResponseTransformer: TicketDto_ListModelResponseTransformer =
  (data) => {
    if (data?.IssueDate) {
      data.IssueDate = new Date(data.IssueDate);
    }
    if (data?.DateModified) {
      data.DateModified = new Date(data.DateModified);
    }
    return data;
  };

export const TicketsDtoModelResponseTransformer: TicketsDtoModelResponseTransformer =
  (data) => {
    if (Array.isArray(data?.Tickets)) {
      data.Tickets.forEach(TicketDto_ListModelResponseTransformer);
    }
    return data;
  };

export const TicketsGetAllTicketsResponseTransformer: TicketsGetAllTicketsResponseTransformer =
  async (data) => {
    TicketsDtoModelResponseTransformer(data);
    return data;
  };

export type TicketsAddTicketResponseTransformer = (
  data: any,
) => Promise<TicketsAddTicketResponse>;

export type TicketDtoModelResponseTransformer = (data: any) => TicketDto;

export const TicketDtoModelResponseTransformer: TicketDtoModelResponseTransformer =
  (data) => {
    if (data?.IssueDate) {
      data.IssueDate = new Date(data.IssueDate);
    }
    if (data?.DateModified) {
      data.DateModified = new Date(data.DateModified);
    }
    return data;
  };

export const TicketsAddTicketResponseTransformer: TicketsAddTicketResponseTransformer =
  async (data) => {
    TicketDtoModelResponseTransformer(data);
    return data;
  };

export type TicketsGetTicketDetailResponseTransformer = (
  data: any,
) => Promise<TicketsGetTicketDetailResponse>;

export const TicketsGetTicketDetailResponseTransformer: TicketsGetTicketDetailResponseTransformer =
  async (data) => {
    TicketDtoModelResponseTransformer(data);
    return data;
  };

export type TicketsUpdateTicketResponseTransformer = (
  data: any,
) => Promise<TicketsUpdateTicketResponse>;

export const TicketsUpdateTicketResponseTransformer: TicketsUpdateTicketResponseTransformer =
  async (data) => {
    TicketDtoModelResponseTransformer(data);
    return data;
  };

export type TicketsGetTicketReplyResponseTransformer = (
  data: any,
) => Promise<TicketsGetTicketReplyResponse>;

export type TicketResponsesDtoModelResponseTransformer = (
  data: any,
) => TicketResponsesDto;

export type TicketResponseDto_ListModelResponseTransformer = (
  data: any,
) => TicketResponseDto_List;

export const TicketResponseDto_ListModelResponseTransformer: TicketResponseDto_ListModelResponseTransformer =
  (data) => {
    if (data?.DateAdded) {
      data.DateAdded = new Date(data.DateAdded);
    }
    return data;
  };

export const TicketResponsesDtoModelResponseTransformer: TicketResponsesDtoModelResponseTransformer =
  (data) => {
    if (Array.isArray(data?.TicketResponses)) {
      data.TicketResponses.forEach(
        TicketResponseDto_ListModelResponseTransformer,
      );
    }
    return data;
  };

export const TicketsGetTicketReplyResponseTransformer: TicketsGetTicketReplyResponseTransformer =
  async (data) => {
    TicketResponsesDtoModelResponseTransformer(data);
    return data;
  };

export type TicketsReplyTicketResponseTransformer = (
  data: any,
) => Promise<TicketsReplyTicketResponse>;

export type TicketResponseDtoModelResponseTransformer = (
  data: any,
) => TicketResponseDto;

export const TicketResponseDtoModelResponseTransformer: TicketResponseDtoModelResponseTransformer =
  (data) => {
    if (data?.DateAdded) {
      data.DateAdded = new Date(data.DateAdded);
    }
    return data;
  };

export const TicketsReplyTicketResponseTransformer: TicketsReplyTicketResponseTransformer =
  async (data) => {
    TicketResponseDtoModelResponseTransformer(data);
    return data;
  };

export type SoldAddOnsGetAllSoldAddOnsResponseTransformer = (
  data: any,
) => Promise<SoldAddOnsGetAllSoldAddOnsResponse>;

export type SellAddonsDtoModelResponseTransformer = (
  data: any,
) => SellAddonsDto;

export type SoldAddOnDto_ListModelResponseTransformer = (
  data: any,
) => SoldAddOnDto_List;

export const SoldAddOnDto_ListModelResponseTransformer: SoldAddOnDto_ListModelResponseTransformer =
  (data) => {
    if (data?.DateAdded) {
      data.DateAdded = new Date(data.DateAdded);
    }
    return data;
  };

export const SellAddonsDtoModelResponseTransformer: SellAddonsDtoModelResponseTransformer =
  (data) => {
    if (Array.isArray(data?.SoldAddonList)) {
      data.SoldAddonList.forEach(SoldAddOnDto_ListModelResponseTransformer);
    }
    return data;
  };

export const SoldAddOnsGetAllSoldAddOnsResponseTransformer: SoldAddOnsGetAllSoldAddOnsResponseTransformer =
  async (data) => {
    SellAddonsDtoModelResponseTransformer(data);
    return data;
  };

export type SoldAddOnsGetSoldAddonDetailsResponseTransformer = (
  data: any,
) => Promise<SoldAddOnsGetSoldAddonDetailsResponse>;

export type SoldAddOnDtoModelResponseTransformer = (data: any) => SoldAddOnDto;

export const SoldAddOnDtoModelResponseTransformer: SoldAddOnDtoModelResponseTransformer =
  (data) => {
    if (data?.DateAdded) {
      data.DateAdded = new Date(data.DateAdded);
    }
    return data;
  };

export const SoldAddOnsGetSoldAddonDetailsResponseTransformer: SoldAddOnsGetSoldAddonDetailsResponseTransformer =
  async (data) => {
    SoldAddOnDtoModelResponseTransformer(data);
    return data;
  };

export type SoldPlanGetAllSoldPlansResponseTransformer = (
  data: any,
) => Promise<SoldPlanGetAllSoldPlansResponse>;

export type SoldPlansDtoModelResponseTransformer = (data: any) => SoldPlansDto;

export type SoldPlanDto_ListModelResponseTransformer = (
  data: any,
) => SoldPlanDto_List;

export type SoldPlanBillingDetailDto_RequestModelResponseTransformer = (
  data: any,
) => SoldPlanBillingDetailDto_Request;

export const SoldPlanBillingDetailDto_RequestModelResponseTransformer: SoldPlanBillingDetailDto_RequestModelResponseTransformer =
  (data) => {
    if (data?.NextInvoiceDate) {
      data.NextInvoiceDate = new Date(data.NextInvoiceDate);
    }
    if (data?.PaidTillDate) {
      data.PaidTillDate = new Date(data.PaidTillDate);
    }
    return data;
  };

export const SoldPlanDto_ListModelResponseTransformer: SoldPlanDto_ListModelResponseTransformer =
  (data) => {
    if (data?.SoldDate) {
      data.SoldDate = new Date(data.SoldDate);
    }
    if (data?.BillingDetails) {
      SoldPlanBillingDetailDto_RequestModelResponseTransformer(
        data.BillingDetails,
      );
    }
    return data;
  };

export const SoldPlansDtoModelResponseTransformer: SoldPlansDtoModelResponseTransformer =
  (data) => {
    if (Array.isArray(data?.SoldPlans)) {
      data.SoldPlans.forEach(SoldPlanDto_ListModelResponseTransformer);
    }
    return data;
  };

export const SoldPlanGetAllSoldPlansResponseTransformer: SoldPlanGetAllSoldPlansResponseTransformer =
  async (data) => {
    SoldPlansDtoModelResponseTransformer(data);
    return data;
  };

export type SoldPlanAddSoldPlanResponseTransformer = (
  data: any,
) => Promise<SoldPlanAddSoldPlanResponse>;

export type SoldPlanDtoModelResponseTransformer = (data: any) => SoldPlanDto;

export const SoldPlanDtoModelResponseTransformer: SoldPlanDtoModelResponseTransformer =
  (data) => {
    if (data?.SoldDate) {
      data.SoldDate = new Date(data.SoldDate);
    }
    if (data?.BillingDetails) {
      SoldPlanBillingDetailDto_RequestModelResponseTransformer(
        data.BillingDetails,
      );
    }
    return data;
  };

export const SoldPlanAddSoldPlanResponseTransformer: SoldPlanAddSoldPlanResponseTransformer =
  async (data) => {
    SoldPlanDtoModelResponseTransformer(data);
    return data;
  };

export type SoldPlanGetSoldPlanDetailsResponseTransformer = (
  data: any,
) => Promise<SoldPlanGetSoldPlanDetailsResponse>;

export const SoldPlanGetSoldPlanDetailsResponseTransformer: SoldPlanGetSoldPlanDetailsResponseTransformer =
  async (data) => {
    SoldPlanDtoModelResponseTransformer(data);
    return data;
  };

export type SubscriptionsGetPurchasedPlanDetailsResponseTransformer = (
  data: any,
) => Promise<SubscriptionsGetPurchasedPlanDetailsResponse>;

export const SubscriptionsGetPurchasedPlanDetailsResponseTransformer: SubscriptionsGetPurchasedPlanDetailsResponseTransformer =
  async (data) => {
    SoldPlanDtoModelResponseTransformer(data);
    return data;
  };

export type SubscriptionsGetAllPurchasedPlansResponseTransformer = (
  data: any,
) => Promise<SubscriptionsGetAllPurchasedPlansResponse>;

export const SubscriptionsGetAllPurchasedPlansResponseTransformer: SubscriptionsGetAllPurchasedPlansResponseTransformer =
  async (data) => {
    SoldPlansDtoModelResponseTransformer(data);
    return data;
  };

export type DatabasesListAllDatabaseTasksResponseTransformer = (
  data: any,
) => Promise<DatabasesListAllDatabaseTasksResponse>;

export type DatabaseTasksDtoModelResponseTransformer = (
  data: any,
) => DatabaseTasksDto;

export type DatabaseTaskDto_ListModelResponseTransformer = (
  data: any,
) => DatabaseTaskDto_List;

export const DatabaseTaskDto_ListModelResponseTransformer: DatabaseTaskDto_ListModelResponseTransformer =
  (data) => {
    if (data?.DateAdded) {
      data.DateAdded = new Date(data.DateAdded);
    }
    if (data?.DateModified) {
      data.DateModified = new Date(data.DateModified);
    }
    return data;
  };

export const DatabaseTasksDtoModelResponseTransformer: DatabaseTasksDtoModelResponseTransformer =
  (data) => {
    if (Array.isArray(data?.DatabaseTasks)) {
      data.DatabaseTasks.forEach(DatabaseTaskDto_ListModelResponseTransformer);
    }
    return data;
  };

export const DatabasesListAllDatabaseTasksResponseTransformer: DatabasesListAllDatabaseTasksResponseTransformer =
  async (data) => {
    DatabaseTasksDtoModelResponseTransformer(data);
    return data;
  };

export type DatabasesBackupDatabaseResponseTransformer = (
  data: any,
) => Promise<DatabasesBackupDatabaseResponse>;

export type DatabaseTaskDtoModelResponseTransformer = (
  data: any,
) => DatabaseTaskDto;

export const DatabaseTaskDtoModelResponseTransformer: DatabaseTaskDtoModelResponseTransformer =
  (data) => {
    if (data?.DateAdded) {
      data.DateAdded = new Date(data.DateAdded);
    }
    if (data?.DateModified) {
      data.DateModified = new Date(data.DateModified);
    }
    return data;
  };

export const DatabasesBackupDatabaseResponseTransformer: DatabasesBackupDatabaseResponseTransformer =
  async (data) => {
    DatabaseTaskDtoModelResponseTransformer(data);
    return data;
  };

export type DatabasesRestoreDatabaseResponseTransformer = (
  data: any,
) => Promise<DatabasesRestoreDatabaseResponse>;

export const DatabasesRestoreDatabaseResponseTransformer: DatabasesRestoreDatabaseResponseTransformer =
  async (data) => {
    DatabaseTaskDtoModelResponseTransformer(data);
    return data;
  };

export type WebsiteIoGetAllFilesAndFoldersResponseTransformer = (
  data: any,
) => Promise<WebsiteIoGetAllFilesAndFoldersResponse>;

export type FileFoldersDtoModelResponseTransformer = (
  data: any,
) => FileFoldersDto;

export type FileFolderDtoModelResponseTransformer = (
  data: any,
) => FileFolderDto;

export const FileFolderDtoModelResponseTransformer: FileFolderDtoModelResponseTransformer =
  (data) => {
    if (data?.CreationTime) {
      data.CreationTime = new Date(data.CreationTime);
    }
    if (data?.LastAccessTime) {
      data.LastAccessTime = new Date(data.LastAccessTime);
    }
    if (data?.ModifiedTime) {
      data.ModifiedTime = new Date(data.ModifiedTime);
    }
    return data;
  };

export const FileFoldersDtoModelResponseTransformer: FileFoldersDtoModelResponseTransformer =
  (data) => {
    if (Array.isArray(data?.SubFolderStructure)) {
      data.SubFolderStructure.forEach(FileFolderDtoModelResponseTransformer);
    }
    return data;
  };

export const WebsiteIoGetAllFilesAndFoldersResponseTransformer: WebsiteIoGetAllFilesAndFoldersResponseTransformer =
  async (data) => {
    FileFoldersDtoModelResponseTransformer(data);
    return data;
  };

export type WebsitesGetAllWebsitesResponseTransformer = (
  data: any,
) => Promise<WebsitesGetAllWebsitesResponse>;

export type WebsitesDtoModelResponseTransformer = (data: any) => WebsitesDto;

export type WebsiteDto_ListModelResponseTransformer = (
  data: any,
) => WebsiteDto_List;

export const WebsiteDto_ListModelResponseTransformer: WebsiteDto_ListModelResponseTransformer =
  (data) => {
    if (data?.ExpiryDate) {
      data.ExpiryDate = new Date(data.ExpiryDate);
    }
    if (data?.DateAdded) {
      data.DateAdded = new Date(data.DateAdded);
    }
    return data;
  };

export const WebsitesDtoModelResponseTransformer: WebsitesDtoModelResponseTransformer =
  (data) => {
    if (Array.isArray(data?.Websites)) {
      data.Websites.forEach(WebsiteDto_ListModelResponseTransformer);
    }
    return data;
  };

export const WebsitesGetAllWebsitesResponseTransformer: WebsitesGetAllWebsitesResponseTransformer =
  async (data) => {
    WebsitesDtoModelResponseTransformer(data);
    return data;
  };

export type WebsitesAddWebsiteResponseTransformer = (
  data: any,
) => Promise<WebsitesAddWebsiteResponse>;

export type WebsiteDtoModelResponseTransformer = (data: any) => WebsiteDto;

export const WebsiteDtoModelResponseTransformer: WebsiteDtoModelResponseTransformer =
  (data) => {
    if (data?.ExpiryDate) {
      data.ExpiryDate = new Date(data.ExpiryDate);
    }
    if (data?.DateAdded) {
      data.DateAdded = new Date(data.DateAdded);
    }
    return data;
  };

export const WebsitesAddWebsiteResponseTransformer: WebsitesAddWebsiteResponseTransformer =
  async (data) => {
    WebsiteDtoModelResponseTransformer(data);
    return data;
  };

export type WebsitesGetWebsiteDetailsResponseTransformer = (
  data: any,
) => Promise<WebsitesGetWebsiteDetailsResponse>;

export const WebsitesGetWebsiteDetailsResponseTransformer: WebsitesGetWebsiteDetailsResponseTransformer =
  async (data) => {
    WebsiteDtoModelResponseTransformer(data);
    return data;
  };

export type WebsitesEditWebsiteResponseTransformer = (
  data: any,
) => Promise<WebsitesEditWebsiteResponse>;

export const WebsitesEditWebsiteResponseTransformer: WebsitesEditWebsiteResponseTransformer =
  async (data) => {
    WebsiteDtoModelResponseTransformer(data);
    return data;
  };

export type RolesGetAllServersResponseTransformer = (
  data: any,
) => Promise<RolesGetAllServersResponse>;

export type ServersDtoModelResponseTransformer = (data: any) => ServersDto;

export type ServerDto_ListModelResponseTransformer = (
  data: any,
) => ServerDto_List;

export const ServerDto_ListModelResponseTransformer: ServerDto_ListModelResponseTransformer =
  (data) => {
    if (data?.ReleaseDate) {
      data.ReleaseDate = new Date(data.ReleaseDate);
    }
    if (data?.RbxLastBackupTime) {
      data.RbxLastBackupTime = new Date(data.RbxLastBackupTime);
    }
    if (data?.RbxRestoreTime) {
      data.RbxRestoreTime = new Date(data.RbxRestoreTime);
    }
    return data;
  };

export const ServersDtoModelResponseTransformer: ServersDtoModelResponseTransformer =
  (data) => {
    if (Array.isArray(data?.Servers)) {
      data.Servers.forEach(ServerDto_ListModelResponseTransformer);
    }
    return data;
  };

export const RolesGetAllServersResponseTransformer: RolesGetAllServersResponseTransformer =
  async (data) => {
    ServersDtoModelResponseTransformer(data);
    return data;
  };

export type PlanGetAllPlansResponseTransformer = (
  data: any,
) => Promise<PlanGetAllPlansResponse>;

export type PlansDtoModelResponseTransformer = (data: any) => PlansDto;

export type PlanDto_ListModelResponseTransformer = (data: any) => PlanDto_List;

export const PlanDto_ListModelResponseTransformer: PlanDto_ListModelResponseTransformer =
  (data) => {
    if (data?.DateAdded) {
      data.DateAdded = new Date(data.DateAdded);
    }
    return data;
  };

export const PlansDtoModelResponseTransformer: PlansDtoModelResponseTransformer =
  (data) => {
    if (Array.isArray(data?.Plans)) {
      data.Plans.forEach(PlanDto_ListModelResponseTransformer);
    }
    return data;
  };

export const PlanGetAllPlansResponseTransformer: PlanGetAllPlansResponseTransformer =
  async (data) => {
    PlansDtoModelResponseTransformer(data);
    return data;
  };

export type PlanAddPlanResponseTransformer = (
  data: any,
) => Promise<PlanAddPlanResponse>;

export type PlanDtoModelResponseTransformer = (data: any) => PlanDto;

export const PlanDtoModelResponseTransformer: PlanDtoModelResponseTransformer =
  (data) => {
    if (data?.DateAdded) {
      data.DateAdded = new Date(data.DateAdded);
    }
    return data;
  };

export const PlanAddPlanResponseTransformer: PlanAddPlanResponseTransformer =
  async (data) => {
    PlanDtoModelResponseTransformer(data);
    return data;
  };

export type PlanGetPlanDetailsResponseTransformer = (
  data: any,
) => Promise<PlanGetPlanDetailsResponse>;

export const PlanGetPlanDetailsResponseTransformer: PlanGetPlanDetailsResponseTransformer =
  async (data) => {
    PlanDtoModelResponseTransformer(data);
    return data;
  };

export type PlanUpdatePlanResponseTransformer = (
  data: any,
) => Promise<PlanUpdatePlanResponse>;

export const PlanUpdatePlanResponseTransformer: PlanUpdatePlanResponseTransformer =
  async (data) => {
    PlanDtoModelResponseTransformer(data);
    return data;
  };

export type OrganizationsGetAllActiveDirectoryOrganizationsResponseTransformer =
  (
    data: any,
  ) => Promise<OrganizationsGetAllActiveDirectoryOrganizationsResponse>;

export type ADOrganizationsDtoModelResponseTransformer = (
  data: any,
) => ADOrganizationsDto;

export type ADOrganizationDto_ListModelResponseTransformer = (
  data: any,
) => ADOrganizationDto_List;

export const ADOrganizationDto_ListModelResponseTransformer: ADOrganizationDto_ListModelResponseTransformer =
  (data) => {
    if (data?.SyncLastRunTime) {
      data.SyncLastRunTime = new Date(data.SyncLastRunTime);
    }
    return data;
  };

export const ADOrganizationsDtoModelResponseTransformer: ADOrganizationsDtoModelResponseTransformer =
  (data) => {
    if (Array.isArray(data?.Organizations)) {
      data.Organizations.forEach(
        ADOrganizationDto_ListModelResponseTransformer,
      );
    }
    return data;
  };

export const OrganizationsGetAllActiveDirectoryOrganizationsResponseTransformer: OrganizationsGetAllActiveDirectoryOrganizationsResponseTransformer =
  async (data) => {
    ADOrganizationsDtoModelResponseTransformer(data);
    return data;
  };

export type ExgMailboxGetMailboxAutoReplyConfigurationResponseTransformer = (
  data: any,
) => Promise<ExgMailboxGetMailboxAutoReplyConfigurationResponse>;

export type ExchangeMailboxOutOfOfficeDtoModelResponseTransformer = (
  data: any,
) => ExchangeMailboxOutOfOfficeDto;

export const ExchangeMailboxOutOfOfficeDtoModelResponseTransformer: ExchangeMailboxOutOfOfficeDtoModelResponseTransformer =
  (data) => {
    if (data?.StartDateTime) {
      data.StartDateTime = new Date(data.StartDateTime);
    }
    if (data?.EndDateTime) {
      data.EndDateTime = new Date(data.EndDateTime);
    }
    return data;
  };

export const ExgMailboxGetMailboxAutoReplyConfigurationResponseTransformer: ExgMailboxGetMailboxAutoReplyConfigurationResponseTransformer =
  async (data) => {
    ExchangeMailboxOutOfOfficeDtoModelResponseTransformer(data);
    return data;
  };

export type VirtualMachineGetAllSnapShotsResponseTransformer = (
  data: any,
) => Promise<VirtualMachineGetAllSnapShotsResponse>;

export type SnapShotsDtoModelResponseTransformer = (data: any) => SnapShotsDto;

export type SnapShotDetailDto_ListModelResponseTransformer = (
  data: any,
) => SnapShotDetailDto_List;

export const SnapShotDetailDto_ListModelResponseTransformer: SnapShotDetailDto_ListModelResponseTransformer =
  (data) => {
    if (data?.Dated) {
      data.Dated = new Date(data.Dated);
    }
    return data;
  };

export const SnapShotsDtoModelResponseTransformer: SnapShotsDtoModelResponseTransformer =
  (data) => {
    if (Array.isArray(data?.SnapShotList)) {
      data.SnapShotList.forEach(SnapShotDetailDto_ListModelResponseTransformer);
    }
    return data;
  };

export const VirtualMachineGetAllSnapShotsResponseTransformer: VirtualMachineGetAllSnapShotsResponseTransformer =
  async (data) => {
    SnapShotsDtoModelResponseTransformer(data);
    return data;
  };

export type VirtualMachineTakeSnapShotResponseTransformer = (
  data: any,
) => Promise<VirtualMachineTakeSnapShotResponse>;

export type SnapShotDetailDtoModelResponseTransformer = (
  data: any,
) => SnapShotDetailDto;

export const SnapShotDetailDtoModelResponseTransformer: SnapShotDetailDtoModelResponseTransformer =
  (data) => {
    if (data?.Dated) {
      data.Dated = new Date(data.Dated);
    }
    return data;
  };

export const VirtualMachineTakeSnapShotResponseTransformer: VirtualMachineTakeSnapShotResponseTransformer =
  async (data) => {
    SnapShotDetailDtoModelResponseTransformer(data);
    return data;
  };

export type VirtualMachineGetSnapShotDetailResponseTransformer = (
  data: any,
) => Promise<VirtualMachineGetSnapShotDetailResponse>;

export const VirtualMachineGetSnapShotDetailResponseTransformer: VirtualMachineGetSnapShotDetailResponseTransformer =
  async (data) => {
    SnapShotDetailDtoModelResponseTransformer(data);
    return data;
  };
