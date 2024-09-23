import { createClient, createConfig, type Options } from './client';
import {
  type ActiveDirectoryObjectAddActiveDirectoryUserData,
  type ActiveDirectoryObjectAddActiveDirectoryUserError,
  type ActiveDirectoryObjectAddActiveDirectoryUserResponse,
  type ActiveDirectoryObjectChangeAdUserPasswordData,
  type ActiveDirectoryObjectChangeAdUserPasswordError,
  type ActiveDirectoryObjectChangeAdUserPasswordResponse,
  type ActiveDirectoryObjectToggleAdUserStateData,
  type ActiveDirectoryObjectToggleAdUserStateError,
  type ActiveDirectoryObjectToggleAdUserStateResponse,
  type ActiveDirectoryGetOrganizationObjectsData,
  type ActiveDirectoryGetOrganizationObjectsError,
  type ActiveDirectoryGetOrganizationObjectsResponse,
  type ActiveDirectoryDeleteMultipleObjectsData,
  type ActiveDirectoryDeleteMultipleObjectsError,
  type ActiveDirectoryDeleteMultipleObjectsResponse,
  type ActiveDirectoryObjectGetObjectAccountSettingsData,
  type ActiveDirectoryObjectGetObjectAccountSettingsError,
  type ActiveDirectoryObjectGetObjectAccountSettingsResponse,
  type ActiveDirectoryObjectSetObjectAccountSettingsData,
  type ActiveDirectoryObjectSetObjectAccountSettingsError,
  type ActiveDirectoryObjectSetObjectAccountSettingsResponse,
  type ActiveDirectoryObjectSetObjectDetailsData,
  type ActiveDirectoryObjectSetObjectDetailsError,
  type ActiveDirectoryObjectSetObjectDetailsResponse,
  type ActiveDirectoryObjectGetAdObjectGeneralPropertiesData,
  type ActiveDirectoryObjectGetAdObjectGeneralPropertiesError,
  type ActiveDirectoryObjectGetAdObjectGeneralPropertiesResponse,
  type ActiveDirectoryObjectUpdateAdObjectGeneralPropertiesData,
  type ActiveDirectoryObjectUpdateAdObjectGeneralPropertiesError,
  type ActiveDirectoryObjectUpdateAdObjectGeneralPropertiesResponse,
  type ActiveDirectoryObjectGetObjectMemberOfDetailsData,
  type ActiveDirectoryObjectGetObjectMemberOfDetailsError,
  type ActiveDirectoryObjectGetObjectMemberOfDetailsResponse,
  type ActiveDirectoryObjectUpdateObjectMemberOfDetailsData,
  type ActiveDirectoryObjectUpdateObjectMemberOfDetailsError,
  type ActiveDirectoryObjectUpdateObjectMemberOfDetailsResponse,
  type ActiveDirectoryObjectMoveObjectToOuData,
  type ActiveDirectoryObjectMoveObjectToOuError,
  type ActiveDirectoryObjectMoveObjectToOuResponse,
  type ActiveDirectoryObjectGetGroupMembersData,
  type ActiveDirectoryObjectGetGroupMembersError,
  type ActiveDirectoryObjectGetGroupMembersResponse,
  type ActiveDirectoryObjectUpdateGroupMembersData,
  type ActiveDirectoryObjectUpdateGroupMembersError,
  type ActiveDirectoryObjectUpdateGroupMembersResponse,
  type ActiveDirectoryObjectGetGroupAdminData,
  type ActiveDirectoryObjectGetGroupAdminError,
  type ActiveDirectoryObjectGetGroupAdminResponse,
  type ActiveDirectoryObjectUpdateGroupAdminData,
  type ActiveDirectoryObjectUpdateGroupAdminError,
  type ActiveDirectoryObjectUpdateGroupAdminResponse,
  type TokenGetTokenDetailsData,
  type TokenGetTokenDetailsError,
  type TokenGetTokenDetailsResponse,
  type TokenGenerateTokenData,
  type TokenGenerateTokenError,
  type TokenGenerateTokenResponse,
  type TokenRevokeTokenData,
  type TokenRevokeTokenError,
  type TokenRevokeTokenResponse,
  type UsersGetAllUsersData,
  type UsersGetAllUsersError,
  type UsersGetAllUsersResponse,
  type UsersAddUserData,
  type UsersAddUserError,
  type UsersAddUserResponse,
  type UsersGetUserDetailsData,
  type UsersGetUserDetailsError,
  type UsersGetUserDetailsResponse,
  type UsersUpdateUserData,
  type UsersUpdateUserError,
  type UsersUpdateUserResponse,
  type UsersDeleteUserData,
  type UsersDeleteUserError,
  type UsersDeleteUserResponse,
  type UsersDisableUserData,
  type UsersDisableUserError,
  type UsersDisableUserResponse,
  type UsersEnableUserData,
  type UsersEnableUserError,
  type UsersEnableUserResponse,
  type UsersChangePasswordData,
  type UsersChangePasswordError,
  type UsersChangePasswordResponse,
  type UsersIsLoginNameAvailableData,
  type UsersIsLoginNameAvailableError,
  type UsersIsLoginNameAvailableResponse,
  type UsersGetUserProfileDetailsData,
  type UsersGetUserProfileDetailsError,
  type UsersGetUserProfileDetailsResponse,
  type UsersUpdateUserProfileData,
  type UsersUpdateUserProfileError,
  type UsersUpdateUserProfileResponse,
  type ReportGetUserQuotaReportData,
  type ReportGetUserQuotaReportError,
  type ReportGetUserQuotaReportResponse,
  type ReportGetConsumedResourcesError,
  type ReportGetConsumedResourcesResponse,
  type ReportGetDailyResourcesUsageError,
  type ReportGetDailyResourcesUsageResponse,
  type ReportGetMonthlyResourcesUsageError,
  type ReportGetMonthlyResourcesUsageResponse,
  type ReportGetPanelStatsError,
  type ReportGetPanelStatsResponse,
  type ReportDiskUsageUsersListData,
  type ReportDiskUsageUsersListError,
  type ReportDiskUsageUsersListResponse,
  type ReportDiskUsageReportMonthlyData,
  type ReportDiskUsageReportMonthlyError,
  type ReportDiskUsageReportMonthlyResponse,
  type ReportDiskUsageReportTotalData,
  type ReportDiskUsageReportTotalError,
  type ReportDiskUsageReportTotalResponse,
  type ReportBandwidthUsageReportMonthlyData,
  type ReportBandwidthUsageReportMonthlyError,
  type ReportBandwidthUsageReportMonthlyResponse,
  type ReportBandwidthUsageReportTotalData,
  type ReportBandwidthUsageReportTotalError,
  type ReportBandwidthUsageReportTotalResponse,
  type ConfigurationsBandwidthUsageUsersListData,
  type ConfigurationsBandwidthUsageUsersListError,
  type ConfigurationsBandwidthUsageUsersListResponse,
  type SettingsGetAllStatesData,
  type SettingsGetAllStatesError,
  type SettingsGetAllStatesResponse,
  type SettingsGetAllCountriesData,
  type SettingsGetAllCountriesError,
  type SettingsGetAllCountriesResponse,
  type SettingsGetAllLanguagesError,
  type SettingsGetAllLanguagesResponse,
  type SettingsGetAllLanguagesByLangNameData,
  type SettingsGetAllLanguagesByLangNameError,
  type SettingsGetAllLanguagesByLangNameResponse,
  type SettingsGetAllResourceQuotaTypesError,
  type SettingsGetAllResourceQuotaTypesResponse,
  type SettingsGetAllResourceProvisioningTypesError,
  type SettingsGetAllResourceProvisioningTypesResponse,
  type SettingsGetVmStatusTypesError,
  type SettingsGetVmStatusTypesResponse,
  type SettingsGetTicketStatusError,
  type SettingsGetTicketStatusResponse,
  type SettingsGetExchangeMailboxTypesError,
  type SettingsGetExchangeMailboxTypesResponse,
  type SettingsGetResourceMailboxTypesError,
  type SettingsGetResourceMailboxTypesResponse,
  type SettingsGetExchangeMailDomainTypesError,
  type SettingsGetExchangeMailDomainTypesResponse,
  type SettingsGetExchangeRecpientsTypesError,
  type SettingsGetExchangeRecpientsTypesResponse,
  type SettingsGetExchangeBlockedDomainRuleRecipientLocationError,
  type SettingsGetExchangeBlockedDomainRuleRecipientLocationResponse,
  type SettingsGetPublicFolderTypesError,
  type SettingsGetPublicFolderTypesResponse,
  type SettingsGetTelephonyOptionsError,
  type SettingsGetTelephonyOptionsResponse,
  type SettingsGetRoutingMethodsError,
  type SettingsGetRoutingMethodsResponse,
  type SettingsGetParticipationPolicyError,
  type SettingsGetParticipationPolicyResponse,
  type SettingsGetResponseGroupCallActionsError,
  type SettingsGetResponseGroupCallActionsResponse,
  type SettingsGetWorkflowCallActionsError,
  type SettingsGetWorkflowCallActionsResponse,
  type SettingsGetWorkflowLanguagesError,
  type SettingsGetWorkflowLanguagesResponse,
  type MessageCenterAddNewMessageData,
  type MessageCenterAddNewMessageError,
  type MessageCenterAddNewMessageResponse,
  type MessageCenterGetMessageDetailsData,
  type MessageCenterGetMessageDetailsError,
  type MessageCenterGetMessageDetailsResponse,
  type MessageCenterUpdateMessageStatusData,
  type MessageCenterUpdateMessageStatusError,
  type MessageCenterUpdateMessageStatusResponse,
  type MessageCenterDeleteMessageData,
  type MessageCenterDeleteMessageError,
  type MessageCenterDeleteMessageResponse,
  type MessageCenterGetSentMessagesError,
  type MessageCenterGetSentMessagesResponse,
  type MessageCenterGetReceivedMessagesError,
  type MessageCenterGetReceivedMessagesResponse,
  type MessageCenterMessageRepliesData,
  type MessageCenterMessageRepliesError,
  type MessageCenterMessageRepliesResponse,
  type MessageCenterAddMessageReplyData,
  type MessageCenterAddMessageReplyError,
  type MessageCenterAddMessageReplyResponse,
  type TicketsGetAllStatsError,
  type TicketsGetAllStatsResponse,
  type TicketsGetAllTicketsData,
  type TicketsGetAllTicketsError,
  type TicketsGetAllTicketsResponse,
  type TicketsAddTicketData,
  type TicketsAddTicketError,
  type TicketsAddTicketResponse,
  type TicketsGetTicketDetailData,
  type TicketsGetTicketDetailError,
  type TicketsGetTicketDetailResponse,
  type TicketsUpdateTicketData,
  type TicketsUpdateTicketError,
  type TicketsUpdateTicketResponse,
  type TicketsDeleteTicketData,
  type TicketsDeleteTicketError,
  type TicketsDeleteTicketResponse,
  type TicketsGetTicketReplyData,
  type TicketsGetTicketReplyError,
  type TicketsGetTicketReplyResponse,
  type TicketsReplyTicketData,
  type TicketsReplyTicketError,
  type TicketsReplyTicketResponse,
  type TicketsAddTicketAttachmentData,
  type TicketsAddTicketAttachmentError,
  type TicketsAddTicketAttachmentResponse,
  type TicketsGetAllAttachmentsData,
  type TicketsGetAllAttachmentsError,
  type TicketsGetAllAttachmentsResponse,
  type TicketsGetAttachmentDetailData,
  type TicketsGetAttachmentDetailError,
  type TicketsGetAttachmentDetailResponse,
  type AddOnsGetAllResourcesData,
  type AddOnsGetAllResourcesError,
  type AddOnsGetAllResourcesResponse,
  type AddOnsAddResourceData,
  type AddOnsAddResourceError,
  type AddOnsAddResourceResponse,
  type AddOnsGetResourceDetailsData,
  type AddOnsGetResourceDetailsError,
  type AddOnsGetResourceDetailsResponse,
  type AddOnsUpdateResourceData,
  type AddOnsUpdateResourceError,
  type AddOnsUpdateResourceResponse,
  type AddOnsDeleteResourceData,
  type AddOnsDeleteResourceError,
  type AddOnsDeleteResourceResponse,
  type AddOnsGetBaseOsTypesData,
  type AddOnsGetBaseOsTypesError,
  type AddOnsGetBaseOsTypesResponse,
  type SoldAddOnsGetAllSoldAddOnsData,
  type SoldAddOnsGetAllSoldAddOnsError,
  type SoldAddOnsGetAllSoldAddOnsResponse,
  type SoldAddOnsSellAddOnData,
  type SoldAddOnsSellAddOnError,
  type SoldAddOnsSellAddOnResponse,
  type SoldAddOnsGetSoldAddonDetailsData,
  type SoldAddOnsGetSoldAddonDetailsError,
  type SoldAddOnsGetSoldAddonDetailsResponse,
  type SoldAddOnsDeleteSoldAddonData,
  type SoldAddOnsDeleteSoldAddonError,
  type SoldAddOnsDeleteSoldAddonResponse,
  type CompositeResourceGetAllCresourcesData,
  type CompositeResourceGetAllCresourcesError,
  type CompositeResourceGetAllCresourcesResponse,
  type CompositeResourceAddCresourceData,
  type CompositeResourceAddCresourceError,
  type CompositeResourceAddCresourceResponse,
  type CompositeResourceGetCresourceDetailsData,
  type CompositeResourceGetCresourceDetailsError,
  type CompositeResourceGetCresourceDetailsResponse,
  type CompositeResourceUpdateCresourceData,
  type CompositeResourceUpdateCresourceError,
  type CompositeResourceUpdateCresourceResponse,
  type CompositeResourceDeleteCresourceData,
  type CompositeResourceDeleteCresourceError,
  type CompositeResourceDeleteCresourceResponse,
  type HostingServicesGetAllHostingServicesError,
  type HostingServicesGetAllHostingServicesResponse,
  type ProvidersGetProviderTypesData,
  type ProvidersGetProviderTypesError,
  type ProvidersGetProviderTypesResponse,
  type SoldPlanGetAllSoldPlansData,
  type SoldPlanGetAllSoldPlansError,
  type SoldPlanGetAllSoldPlansResponse,
  type SoldPlanAddSoldPlanData,
  type SoldPlanAddSoldPlanError,
  type SoldPlanAddSoldPlanResponse,
  type SoldPlanGetSoldPlanDetailsData,
  type SoldPlanGetSoldPlanDetailsError,
  type SoldPlanGetSoldPlanDetailsResponse,
  type SoldPlanUpDateSoldPlansData,
  type SoldPlanUpDateSoldPlansError,
  type SoldPlanUpDateSoldPlansResponse,
  type SoldPlanDeleteSoldPlanData,
  type SoldPlanDeleteSoldPlanError,
  type SoldPlanDeleteSoldPlanResponse,
  type SubscriptionsGetPurchasedPlanDetailsData,
  type SubscriptionsGetPurchasedPlanDetailsError,
  type SubscriptionsGetPurchasedPlanDetailsResponse,
  type SubscriptionsGetAllPurchasedPlansData,
  type SubscriptionsGetAllPurchasedPlansError,
  type SubscriptionsGetAllPurchasedPlansResponse,
  type CustomFieldsListAllCustomFieldsData,
  type CustomFieldsListAllCustomFieldsError,
  type CustomFieldsListAllCustomFieldsResponse,
  type TicketsGetAllCategoryError,
  type TicketsGetAllCategoryResponse,
  type DnsListAllDnsZonesData,
  type DnsListAllDnsZonesError,
  type DnsListAllDnsZonesResponse,
  type DnsAddDnsZoneData,
  type DnsAddDnsZoneError,
  type DnsAddDnsZoneResponse,
  type DnsGetDnsZoneDetailData,
  type DnsGetDnsZoneDetailError,
  type DnsGetDnsZoneDetailResponse,
  type DnsUpdateDnsZoneData,
  type DnsUpdateDnsZoneError,
  type DnsUpdateDnsZoneResponse,
  type DnsDeleteDnsZoneData,
  type DnsDeleteDnsZoneError,
  type DnsDeleteDnsZoneResponse,
  type DatabasesListAllDatabasesData,
  type DatabasesListAllDatabasesError,
  type DatabasesListAllDatabasesResponse,
  type DatabasesAddDatabaseData,
  type DatabasesAddDatabaseError,
  type DatabasesAddDatabaseResponse,
  type DatabasesListAllDatabaseTasksData,
  type DatabasesListAllDatabaseTasksError,
  type DatabasesListAllDatabaseTasksResponse,
  type DatabasesBackupDatabaseData,
  type DatabasesBackupDatabaseError,
  type DatabasesBackupDatabaseResponse,
  type DatabasesShrinkDatabaseData,
  type DatabasesShrinkDatabaseError,
  type DatabasesShrinkDatabaseResponse,
  type DatabasesRestoreDatabaseData,
  type DatabasesRestoreDatabaseError,
  type DatabasesRestoreDatabaseResponse,
  type DatabasesGetDatabaseDetailData,
  type DatabasesGetDatabaseDetailError,
  type DatabasesGetDatabaseDetailResponse,
  type DatabasesUpdateDatabaseData,
  type DatabasesUpdateDatabaseError,
  type DatabasesUpdateDatabaseResponse,
  type DatabasesDeleteDatabaseData,
  type DatabasesDeleteDatabaseError,
  type DatabasesDeleteDatabaseResponse,
  type DatabasesAssignUserstoDatabaseData,
  type DatabasesAssignUserstoDatabaseError,
  type DatabasesAssignUserstoDatabaseResponse,
  type DatabasesTestDatabaseConnectivityData,
  type DatabasesTestDatabaseConnectivityError,
  type DatabasesTestDatabaseConnectivityResponse,
  type DatabasesListAllDatabaseUsersData,
  type DatabasesListAllDatabaseUsersError,
  type DatabasesListAllDatabaseUsersResponse,
  type DatabasesAddDatabaseUserData,
  type DatabasesAddDatabaseUserError,
  type DatabasesAddDatabaseUserResponse,
  type DatabasesGetDatabasesAssignedUserData,
  type DatabasesGetDatabasesAssignedUserError,
  type DatabasesGetDatabasesAssignedUserResponse,
  type DatabasesGetUsersAssignedDatabaseData,
  type DatabasesGetUsersAssignedDatabaseError,
  type DatabasesGetUsersAssignedDatabaseResponse,
  type DatabasesGetDatabaseUserDetailData,
  type DatabasesGetDatabaseUserDetailError,
  type DatabasesGetDatabaseUserDetailResponse,
  type DatabasesDeleteDatabaseUserData,
  type DatabasesDeleteDatabaseUserError,
  type DatabasesDeleteDatabaseUserResponse,
  type DatabasesChangePasswordData,
  type DatabasesChangePasswordError,
  type DatabasesChangePasswordResponse,
  type DatabasesAssignDatabasestoUserData,
  type DatabasesAssignDatabasestoUserError,
  type DatabasesAssignDatabasestoUserResponse,
  type MailDomainsListAllMailDomainsData,
  type MailDomainsListAllMailDomainsError,
  type MailDomainsListAllMailDomainsResponse,
  type MailDomainsAddMailDomainData,
  type MailDomainsAddMailDomainError,
  type MailDomainsAddMailDomainResponse,
  type MailDomainsGetMailDomainDetailData,
  type MailDomainsGetMailDomainDetailError,
  type MailDomainsGetMailDomainDetailResponse,
  type MailDomainsDeleteMailDomainData,
  type MailDomainsDeleteMailDomainError,
  type MailDomainsDeleteMailDomainResponse,
  type MailDomainsListAllMailBoxesData,
  type MailDomainsListAllMailBoxesError,
  type MailDomainsListAllMailBoxesResponse,
  type MailDomainsAddMailBoxData,
  type MailDomainsAddMailBoxError,
  type MailDomainsAddMailBoxResponse,
  type MailDomainsGetMailBoxDetailData,
  type MailDomainsGetMailBoxDetailError,
  type MailDomainsGetMailBoxDetailResponse,
  type MailDomainsUpdateMailBoxData,
  type MailDomainsUpdateMailBoxError,
  type MailDomainsUpdateMailBoxResponse,
  type MailDomainsDeleteMailBoxData,
  type MailDomainsDeleteMailBoxError,
  type MailDomainsDeleteMailBoxResponse,
  type MailDomainsListAllEmailAddressesData,
  type MailDomainsListAllEmailAddressesError,
  type MailDomainsListAllEmailAddressesResponse,
  type MailDomainsAddEmailAddressData,
  type MailDomainsAddEmailAddressError,
  type MailDomainsAddEmailAddressResponse,
  type MailDomainsDeleteEmailAddressData,
  type MailDomainsDeleteEmailAddressError,
  type MailDomainsDeleteEmailAddressResponse,
  type MailDomainsListAllDistributionListData,
  type MailDomainsListAllDistributionListError,
  type MailDomainsListAllDistributionListResponse,
  type MailDomainsAddDistributionListData,
  type MailDomainsAddDistributionListError,
  type MailDomainsAddDistributionListResponse,
  type MailDomainsGetDistributionListDetailData,
  type MailDomainsGetDistributionListDetailError,
  type MailDomainsGetDistributionListDetailResponse,
  type MailDomainsUpdateDistributionListData,
  type MailDomainsUpdateDistributionListError,
  type MailDomainsUpdateDistributionListResponse,
  type MailDomainsDeleteDistributionListData,
  type MailDomainsDeleteDistributionListError,
  type MailDomainsDeleteDistributionListResponse,
  type WebsiteIoGetAllFilesAndFoldersData,
  type WebsiteIoGetAllFilesAndFoldersError,
  type WebsiteIoGetAllFilesAndFoldersResponse,
  type WebsiteIoUploadData,
  type WebsiteIoUploadError,
  type WebsiteIoUploadResponse,
  type WebsiteIoDeleteData,
  type WebsiteIoDeleteError,
  type WebsiteIoDeleteResponse,
  type WebsiteIoCreateData,
  type WebsiteIoCreateError,
  type WebsiteIoCreateResponse,
  type WebsiteIoDownloadData,
  type WebsiteIoDownloadError,
  type WebsiteIoDownloadResponse,
  type WebsiteIoUpdateData,
  type WebsiteIoUpdateError,
  type WebsiteIoUpdateResponse,
  type WebsiteIoRenameData,
  type WebsiteIoRenameError,
  type WebsiteIoRenameResponse,
  type WebsiteIoZipData,
  type WebsiteIoZipError,
  type WebsiteIoZipResponse,
  type WebsiteIoUnzipData,
  type WebsiteIoUnzipError,
  type WebsiteIoUnzipResponse,
  type WebsiteIoGetAclPermissionData,
  type WebsiteIoGetAclPermissionError,
  type WebsiteIoGetAclPermissionResponse,
  type WebsiteIoSetAclPermissionData,
  type WebsiteIoSetAclPermissionError,
  type WebsiteIoSetAclPermissionResponse,
  type WebsitesGetAllWebsitesData,
  type WebsitesGetAllWebsitesError,
  type WebsitesGetAllWebsitesResponse,
  type WebsitesAddWebsiteData,
  type WebsitesAddWebsiteError,
  type WebsitesAddWebsiteResponse,
  type WebsitesGetWebsiteDetailsData,
  type WebsitesGetWebsiteDetailsError,
  type WebsitesGetWebsiteDetailsResponse,
  type WebsitesEditWebsiteData,
  type WebsitesEditWebsiteError,
  type WebsitesEditWebsiteResponse,
  type WebsitesDeleteWebsiteData,
  type WebsitesDeleteWebsiteError,
  type WebsitesDeleteWebsiteResponse,
  type WebsitesStartSiteData,
  type WebsitesStartSiteError,
  type WebsitesStartSiteResponse,
  type WebsitesStopSiteData,
  type WebsitesStopSiteError,
  type WebsitesStopSiteResponse,
  type WebsitesEnableStatsData,
  type WebsitesEnableStatsError,
  type WebsitesEnableStatsResponse,
  type WebsitesDisableStatsData,
  type WebsitesDisableStatsError,
  type WebsitesDisableStatsResponse,
  type WebsitesViewStatsData,
  type WebsitesViewStatsError,
  type WebsitesViewStatsResponse,
  type WebsitesGetAllSharedSslsData,
  type WebsitesGetAllSharedSslsError,
  type WebsitesGetAllSharedSslsResponse,
  type WebsitesAddSharedSslData,
  type WebsitesAddSharedSslError,
  type WebsitesAddSharedSslResponse,
  type WebsitesDeleteSharedSslData,
  type WebsitesDeleteSharedSslError,
  type WebsitesDeleteSharedSslResponse,
  type WebsitesUpdateIpAddressData,
  type WebsitesUpdateIpAddressError,
  type WebsitesUpdateIpAddressResponse,
  type WebsitesGetAllParkedDomainsData,
  type WebsitesGetAllParkedDomainsError,
  type WebsitesGetAllParkedDomainsResponse,
  type WebsitesAddParkedDomainData,
  type WebsitesAddParkedDomainError,
  type WebsitesAddParkedDomainResponse,
  type WebsitesDeleteParkedDomainData,
  type WebsitesDeleteParkedDomainError,
  type WebsitesDeleteParkedDomainResponse,
  type WebsitesGetAllHostHeadersData,
  type WebsitesGetAllHostHeadersError,
  type WebsitesGetAllHostHeadersResponse,
  type WebsitesAddHostHeaderData,
  type WebsitesAddHostHeaderError,
  type WebsitesAddHostHeaderResponse,
  type WebsitesDeleteHostHeaderData,
  type WebsitesDeleteHostHeaderError,
  type WebsitesDeleteHostHeaderResponse,
  type WebsitesGetAllVirtualDirectoriesData,
  type WebsitesGetAllVirtualDirectoriesError,
  type WebsitesGetAllVirtualDirectoriesResponse,
  type WebsitesUpdateVirtualDirectoryData,
  type WebsitesUpdateVirtualDirectoryError,
  type WebsitesUpdateVirtualDirectoryResponse,
  type WebsitesAddVirtualDirectoryData,
  type WebsitesAddVirtualDirectoryError,
  type WebsitesAddVirtualDirectoryResponse,
  type WebsitesGetVirtualDirectoryDetailsData,
  type WebsitesGetVirtualDirectoryDetailsError,
  type WebsitesGetVirtualDirectoryDetailsResponse,
  type WebsitesDeleteVirtualDirectoryData,
  type WebsitesDeleteVirtualDirectoryError,
  type WebsitesDeleteVirtualDirectoryResponse,
  type WebsitesChangeSysUserPasswordData,
  type WebsitesChangeSysUserPasswordError,
  type WebsitesChangeSysUserPasswordResponse,
  type WebsitesGetApplicationPoolProcessInfoData,
  type WebsitesGetApplicationPoolProcessInfoError,
  type WebsitesGetApplicationPoolProcessInfoResponse,
  type WebsitesGetUrlRedirectionSettingsData,
  type WebsitesGetUrlRedirectionSettingsError,
  type WebsitesGetUrlRedirectionSettingsResponse,
  type WebsitesSaveUrlRedirectionSettingsData,
  type WebsitesSaveUrlRedirectionSettingsError,
  type WebsitesSaveUrlRedirectionSettingsResponse,
  type WebsitesGetAccessPermissionsSettingsData,
  type WebsitesGetAccessPermissionsSettingsError,
  type WebsitesGetAccessPermissionsSettingsResponse,
  type WebsitesSaveAccessPermissionsSettingsData,
  type WebsitesSaveAccessPermissionsSettingsError,
  type WebsitesSaveAccessPermissionsSettingsResponse,
  type WebsitesGetCustomErrorsListData,
  type WebsitesGetCustomErrorsListError,
  type WebsitesGetCustomErrorsListResponse,
  type WebsitesUpdateCustomErrorsData,
  type WebsitesUpdateCustomErrorsError,
  type WebsitesUpdateCustomErrorsResponse,
  type WebsitesListAllFtpUsersData,
  type WebsitesListAllFtpUsersError,
  type WebsitesListAllFtpUsersResponse,
  type WebsitesAddFtpUserData,
  type WebsitesAddFtpUserError,
  type WebsitesAddFtpUserResponse,
  type WebsitesGetFtpUserDetailData,
  type WebsitesGetFtpUserDetailError,
  type WebsitesGetFtpUserDetailResponse,
  type WebsitesUpdateFtpUserPasswordData,
  type WebsitesUpdateFtpUserPasswordError,
  type WebsitesUpdateFtpUserPasswordResponse,
  type WebsitesDeleteFtpUserData,
  type WebsitesDeleteFtpUserError,
  type WebsitesDeleteFtpUserResponse,
  type WebsitesUpdateFtpUserStatusData,
  type WebsitesUpdateFtpUserStatusError,
  type WebsitesUpdateFtpUserStatusResponse,
  type WebsitesUpdateFtpUserPermissionData,
  type WebsitesUpdateFtpUserPermissionError,
  type WebsitesUpdateFtpUserPermissionResponse,
  type WebsitesGetDotNetInstalledVersionsData,
  type WebsitesGetDotNetInstalledVersionsError,
  type WebsitesGetDotNetInstalledVersionsResponse,
  type WebsitesScriptingData,
  type WebsitesScriptingError,
  type WebsitesScriptingResponse,
  type WebsitesRecycleWebsiteApplicationPoolData,
  type WebsitesRecycleWebsiteApplicationPoolError,
  type WebsitesRecycleWebsiteApplicationPoolResponse,
  type WebsitesRestoreDefaultData,
  type WebsitesRestoreDefaultError,
  type WebsitesRestoreDefaultResponse,
  type WebsitesGetSystemUsersData,
  type WebsitesGetSystemUsersError,
  type WebsitesGetSystemUsersResponse,
  type RolesGetRolesData,
  type RolesGetRolesError,
  type RolesGetRolesResponse,
  type RolesGetServerRolesData,
  type RolesGetServerRolesError,
  type RolesGetServerRolesResponse,
  type RolesGetAllServersData,
  type RolesGetAllServersError,
  type RolesGetAllServersResponse,
  type PlanGetAllPlansData,
  type PlanGetAllPlansError,
  type PlanGetAllPlansResponse,
  type PlanAddPlanData,
  type PlanAddPlanError,
  type PlanAddPlanResponse,
  type PlanGetPlanDetailsData,
  type PlanGetPlanDetailsError,
  type PlanGetPlanDetailsResponse,
  type PlanUpdatePlanData,
  type PlanUpdatePlanError,
  type PlanUpdatePlanResponse,
  type PlanDeletePlanData,
  type PlanDeletePlanError,
  type PlanDeletePlanResponse,
  type OrganizationsGetAllOrganizationsData,
  type OrganizationsGetAllOrganizationsError,
  type OrganizationsGetAllOrganizationsResponse,
  type OrganizationsGetOrganizationDetailsData,
  type OrganizationsGetOrganizationDetailsError,
  type OrganizationsGetOrganizationDetailsResponse,
  type OrganizationsGetAllExchangeOrganizationsData,
  type OrganizationsGetAllExchangeOrganizationsError,
  type OrganizationsGetAllExchangeOrganizationsResponse,
  type OrganizationsAddExchangeOrganizationData,
  type OrganizationsAddExchangeOrganizationError,
  type OrganizationsAddExchangeOrganizationResponse,
  type OrganizationsDeleteExchangeOrganizationData,
  type OrganizationsDeleteExchangeOrganizationError,
  type OrganizationsDeleteExchangeOrganizationResponse,
  type OrganizationsGetAllSharePointOrganizationsData,
  type OrganizationsGetAllSharePointOrganizationsError,
  type OrganizationsGetAllSharePointOrganizationsResponse,
  type OrganizationsAddSharePointOrganizationData,
  type OrganizationsAddSharePointOrganizationError,
  type OrganizationsAddSharePointOrganizationResponse,
  type OrganizationsDeleteSharePointOrganizationData,
  type OrganizationsDeleteSharePointOrganizationError,
  type OrganizationsDeleteSharePointOrganizationResponse,
  type OrganizationsGetAllSkypeOrganizationsData,
  type OrganizationsGetAllSkypeOrganizationsError,
  type OrganizationsGetAllSkypeOrganizationsResponse,
  type OrganizationsAddSkypeOrganizationData,
  type OrganizationsAddSkypeOrganizationError,
  type OrganizationsAddSkypeOrganizationResponse,
  type OrganizationsDeleteSkypeOrganizationData,
  type OrganizationsDeleteSkypeOrganizationError,
  type OrganizationsDeleteSkypeOrganizationResponse,
  type OrganizationsGetAllActiveDirectoryOrganizationsData,
  type OrganizationsGetAllActiveDirectoryOrganizationsError,
  type OrganizationsGetAllActiveDirectoryOrganizationsResponse,
  type OrganizationsAddActiveDirectoryOrganizationData,
  type OrganizationsAddActiveDirectoryOrganizationError,
  type OrganizationsAddActiveDirectoryOrganizationResponse,
  type OrganizationsAddActiveDirectorySubOrganizationData,
  type OrganizationsAddActiveDirectorySubOrganizationError,
  type OrganizationsAddActiveDirectorySubOrganizationResponse,
  type OrganizationsDeleteActiveDirectoryOrganizationData,
  type OrganizationsDeleteActiveDirectoryOrganizationError,
  type OrganizationsDeleteActiveDirectoryOrganizationResponse,
  type ExchangeMailDomainsGetAllExchangeMailDomainsData,
  type ExchangeMailDomainsGetAllExchangeMailDomainsError,
  type ExchangeMailDomainsGetAllExchangeMailDomainsResponse,
  type ExchangeMailDomainsAddExchangeMailDomainData,
  type ExchangeMailDomainsAddExchangeMailDomainError,
  type ExchangeMailDomainsAddExchangeMailDomainResponse,
  type ExchangeMailDomainsGetExchangemailDomainDetailsData,
  type ExchangeMailDomainsGetExchangemailDomainDetailsError,
  type ExchangeMailDomainsGetExchangemailDomainDetailsResponse,
  type ExchangeMailDomainsEditExchangeMailDomainData,
  type ExchangeMailDomainsEditExchangeMailDomainError,
  type ExchangeMailDomainsEditExchangeMailDomainResponse,
  type ExchangeMailDomainsDeleteExchangeMailDomainData,
  type ExchangeMailDomainsDeleteExchangeMailDomainError,
  type ExchangeMailDomainsDeleteExchangeMailDomainResponse,
  type ExchangeMailDomainsEnableDisableExchangeMailDomainData,
  type ExchangeMailDomainsEnableDisableExchangeMailDomainError,
  type ExchangeMailDomainsEnableDisableExchangeMailDomainResponse,
  type ExgMailboxGetAllExgMailboxsData,
  type ExgMailboxGetAllExgMailboxsError,
  type ExgMailboxGetAllExgMailboxsResponse,
  type ExgMailboxAddExgMailboxData,
  type ExgMailboxAddExgMailboxError,
  type ExgMailboxAddExgMailboxResponse,
  type ExgMailboxUpdateExgMailboxData,
  type ExgMailboxUpdateExgMailboxError,
  type ExgMailboxUpdateExgMailboxResponse,
  type ExgMailboxGetExgMailboxDetailsData,
  type ExgMailboxGetExgMailboxDetailsError,
  type ExgMailboxGetExgMailboxDetailsResponse,
  type ExgMailboxDeleteExgMailboxData,
  type ExgMailboxDeleteExgMailboxError,
  type ExgMailboxDeleteExgMailboxResponse,
  type ExgMailboxGetExgMailboxAsyncPolicyData,
  type ExgMailboxGetExgMailboxAsyncPolicyError,
  type ExgMailboxGetExgMailboxAsyncPolicyResponse,
  type ExgMailboxUpdateExgMailboxAsyncPolicyData,
  type ExgMailboxUpdateExgMailboxAsyncPolicyError,
  type ExgMailboxUpdateExgMailboxAsyncPolicyResponse,
  type ExgMailboxGetUserMailboxGeneralPropertiesData,
  type ExgMailboxGetUserMailboxGeneralPropertiesError,
  type ExgMailboxGetUserMailboxGeneralPropertiesResponse,
  type ExgMailboxUpdateExgMailboxGeneralPropertiesData,
  type ExgMailboxUpdateExgMailboxGeneralPropertiesError,
  type ExgMailboxUpdateExgMailboxGeneralPropertiesResponse,
  type ExgMailboxChangeUserMailboxPasswordData,
  type ExgMailboxChangeUserMailboxPasswordError,
  type ExgMailboxChangeUserMailboxPasswordResponse,
  type ExgMailboxGetUserMailboxEmailAddressesData,
  type ExgMailboxGetUserMailboxEmailAddressesError,
  type ExgMailboxGetUserMailboxEmailAddressesResponse,
  type ExgMailboxSetPrimaryEmailAddressesData,
  type ExgMailboxSetPrimaryEmailAddressesError,
  type ExgMailboxSetPrimaryEmailAddressesResponse,
  type ExgMailboxAddUserMailboxEmailAddressesData,
  type ExgMailboxAddUserMailboxEmailAddressesError,
  type ExgMailboxAddUserMailboxEmailAddressesResponse,
  type ExgMailboxDeleteUserMailboxEmailAddressesData,
  type ExgMailboxDeleteUserMailboxEmailAddressesError,
  type ExgMailboxDeleteUserMailboxEmailAddressesResponse,
  type ExgMailboxGetUserSendOnBehalfUsersData,
  type ExgMailboxGetUserSendOnBehalfUsersError,
  type ExgMailboxGetUserSendOnBehalfUsersResponse,
  type ExgMailboxAddUserSendOnBehalfUsersData,
  type ExgMailboxAddUserSendOnBehalfUsersError,
  type ExgMailboxAddUserSendOnBehalfUsersResponse,
  type ExgMailboxRemoveUserSendOnBehalfUsersData,
  type ExgMailboxRemoveUserSendOnBehalfUsersError,
  type ExgMailboxRemoveUserSendOnBehalfUsersResponse,
  type ExgMailboxGetUserMailboxAdvancedPropertiesData,
  type ExgMailboxGetUserMailboxAdvancedPropertiesError,
  type ExgMailboxGetUserMailboxAdvancedPropertiesResponse,
  type ExgMailboxUpdateUserMailboxAdvancedPropertiesData,
  type ExgMailboxUpdateUserMailboxAdvancedPropertiesError,
  type ExgMailboxUpdateUserMailboxAdvancedPropertiesResponse,
  type ExgMailboxGetUserAcceptedSendersData,
  type ExgMailboxGetUserAcceptedSendersError,
  type ExgMailboxGetUserAcceptedSendersResponse,
  type ExgMailboxAddUserAcceptedSendersData,
  type ExgMailboxAddUserAcceptedSendersError,
  type ExgMailboxAddUserAcceptedSendersResponse,
  type ExgMailboxRemoveUserAcceptedSendersData,
  type ExgMailboxRemoveUserAcceptedSendersError,
  type ExgMailboxRemoveUserAcceptedSendersResponse,
  type ExgMailboxGetUserRejectedSendersData,
  type ExgMailboxGetUserRejectedSendersError,
  type ExgMailboxGetUserRejectedSendersResponse,
  type ExgMailboxAddUserRejectedSendersData,
  type ExgMailboxAddUserRejectedSendersError,
  type ExgMailboxAddUserRejectedSendersResponse,
  type ExgMailboxRemoveUserRejectedSendersData,
  type ExgMailboxRemoveUserRejectedSendersError,
  type ExgMailboxRemoveUserRejectedSendersResponse,
  type ExgMailboxGetUserFullAccessPermissionData,
  type ExgMailboxGetUserFullAccessPermissionError,
  type ExgMailboxGetUserFullAccessPermissionResponse,
  type ExgMailboxAddUserFullAccessPermissionData,
  type ExgMailboxAddUserFullAccessPermissionError,
  type ExgMailboxAddUserFullAccessPermissionResponse,
  type ExgMailboxRemoveUserFullAccessPermissionData,
  type ExgMailboxRemoveUserFullAccessPermissionError,
  type ExgMailboxRemoveUserFullAccessPermissionResponse,
  type ExgMailboxGetUserSendAsPermissionData,
  type ExgMailboxGetUserSendAsPermissionError,
  type ExgMailboxGetUserSendAsPermissionResponse,
  type ExgMailboxAddUserSendAsPermissionData,
  type ExgMailboxAddUserSendAsPermissionError,
  type ExgMailboxAddUserSendAsPermissionResponse,
  type ExgMailboxRemoveUserSendAsPermissionData,
  type ExgMailboxRemoveUserSendAsPermissionError,
  type ExgMailboxRemoveUserSendAsPermissionResponse,
  type ExgMailboxGetUserForwardingAddressData,
  type ExgMailboxGetUserForwardingAddressError,
  type ExgMailboxGetUserForwardingAddressResponse,
  type ExgMailboxUpdateUserForwardingAddressData,
  type ExgMailboxUpdateUserForwardingAddressError,
  type ExgMailboxUpdateUserForwardingAddressResponse,
  type ExgMailboxGetUserStatisticsData,
  type ExgMailboxGetUserStatisticsError,
  type ExgMailboxGetUserStatisticsResponse,
  type ExgMailboxGetMailboxLitigationHoldSettingsData,
  type ExgMailboxGetMailboxLitigationHoldSettingsError,
  type ExgMailboxGetMailboxLitigationHoldSettingsResponse,
  type ExgMailboxUpdateMailboxLitigationHoldSettingsData,
  type ExgMailboxUpdateMailboxLitigationHoldSettingsError,
  type ExgMailboxUpdateMailboxLitigationHoldSettingsResponse,
  type ExgMailboxGetAllListsOfUserMailboxData,
  type ExgMailboxGetAllListsOfUserMailboxError,
  type ExgMailboxGetAllListsOfUserMailboxResponse,
  type ExgMailboxAddUserMailboxToListData,
  type ExgMailboxAddUserMailboxToListError,
  type ExgMailboxAddUserMailboxToListResponse,
  type ExgMailboxRemoveUserMailboxFromListData,
  type ExgMailboxRemoveUserMailboxFromListError,
  type ExgMailboxRemoveUserMailboxFromListResponse,
  type ExgMailboxGetArchiveMailboxSettingsData,
  type ExgMailboxGetArchiveMailboxSettingsError,
  type ExgMailboxGetArchiveMailboxSettingsResponse,
  type ExgMailboxUpdateArchiveMailboxData,
  type ExgMailboxUpdateArchiveMailboxError,
  type ExgMailboxUpdateArchiveMailboxResponse,
  type ExgMailboxAddArchiveMailboxData,
  type ExgMailboxAddArchiveMailboxError,
  type ExgMailboxAddArchiveMailboxResponse,
  type ExgMailboxUpdateArchiveMailboxStatusData,
  type ExgMailboxUpdateArchiveMailboxStatusError,
  type ExgMailboxUpdateArchiveMailboxStatusResponse,
  type ExgMailboxCheckBulkMailboxFeasibilityData,
  type ExgMailboxCheckBulkMailboxFeasibilityError,
  type ExgMailboxCheckBulkMailboxFeasibilityResponse,
  type ExgMailboxAddExgBulkMailboxData,
  type ExgMailboxAddExgBulkMailboxError,
  type ExgMailboxAddExgBulkMailboxResponse,
  type ExgMailboxUpdateExgBulkMailboxData,
  type ExgMailboxUpdateExgBulkMailboxError,
  type ExgMailboxUpdateExgBulkMailboxResponse,
  type ExgMailboxGetMailboxAutoReplyConfigurationData,
  type ExgMailboxGetMailboxAutoReplyConfigurationError,
  type ExgMailboxGetMailboxAutoReplyConfigurationResponse,
  type ExgMailboxSetUserAutoReplyConfigurationData,
  type ExgMailboxSetUserAutoReplyConfigurationError,
  type ExgMailboxSetUserAutoReplyConfigurationResponse,
  type ExchangeDistributionListGetAllExchangeDistributionListsData,
  type ExchangeDistributionListGetAllExchangeDistributionListsError,
  type ExchangeDistributionListGetAllExchangeDistributionListsResponse,
  type ExchangeDistributionListAddExchangeDistributionListData,
  type ExchangeDistributionListAddExchangeDistributionListError,
  type ExchangeDistributionListAddExchangeDistributionListResponse,
  type ExchangeDistributionListUpdateExchangeDlAdministratorData,
  type ExchangeDistributionListUpdateExchangeDlAdministratorError,
  type ExchangeDistributionListUpdateExchangeDlAdministratorResponse,
  type ExchangeDistributionListGetExchangeDlDetailsData,
  type ExchangeDistributionListGetExchangeDlDetailsError,
  type ExchangeDistributionListGetExchangeDlDetailsResponse,
  type ExchangeDistributionListDeleteExchangeDistributionListData,
  type ExchangeDistributionListDeleteExchangeDistributionListError,
  type ExchangeDistributionListDeleteExchangeDistributionListResponse,
  type ExchangeDistributionListGetExchangeListMembersData,
  type ExchangeDistributionListGetExchangeListMembersError,
  type ExchangeDistributionListGetExchangeListMembersResponse,
  type ExchangeDistributionListUpdateExchangeListMembersData,
  type ExchangeDistributionListUpdateExchangeListMembersError,
  type ExchangeDistributionListUpdateExchangeListMembersResponse,
  type ExchangeDistributionListRemoveListExchangeListMembersData,
  type ExchangeDistributionListRemoveListExchangeListMembersError,
  type ExchangeDistributionListRemoveListExchangeListMembersResponse,
  type ExchangeDistributionListGetListAcceptedSendersData,
  type ExchangeDistributionListGetListAcceptedSendersError,
  type ExchangeDistributionListGetListAcceptedSendersResponse,
  type ExchangeDistributionListAddListAcceptedSendersData,
  type ExchangeDistributionListAddListAcceptedSendersError,
  type ExchangeDistributionListAddListAcceptedSendersResponse,
  type ExchangeDistributionListRemoveListAcceptedSendersData,
  type ExchangeDistributionListRemoveListAcceptedSendersError,
  type ExchangeDistributionListRemoveListAcceptedSendersResponse,
  type ExchangeDistributionListGetListRejectedSendersData,
  type ExchangeDistributionListGetListRejectedSendersError,
  type ExchangeDistributionListGetListRejectedSendersResponse,
  type ExchangeDistributionListAddListRejectedSendersData,
  type ExchangeDistributionListAddListRejectedSendersError,
  type ExchangeDistributionListAddListRejectedSendersResponse,
  type ExchangeDistributionListRemoveListRejectedSendersData,
  type ExchangeDistributionListRemoveListRejectedSendersError,
  type ExchangeDistributionListRemoveListRejectedSendersResponse,
  type ExchangeDistributionListGetListSendOnBehalfUsersData,
  type ExchangeDistributionListGetListSendOnBehalfUsersError,
  type ExchangeDistributionListGetListSendOnBehalfUsersResponse,
  type ExchangeDistributionListAddListSendOnBehalfUsersData,
  type ExchangeDistributionListAddListSendOnBehalfUsersError,
  type ExchangeDistributionListAddListSendOnBehalfUsersResponse,
  type ExchangeDistributionListRemoveListSendOnBehalfUsersData,
  type ExchangeDistributionListRemoveListSendOnBehalfUsersError,
  type ExchangeDistributionListRemoveListSendOnBehalfUsersResponse,
  type ExchangeDistributionListGetListEmailAddressesData,
  type ExchangeDistributionListGetListEmailAddressesError,
  type ExchangeDistributionListGetListEmailAddressesResponse,
  type ExchangeDistributionListSetListPrimaryEmailAddressData,
  type ExchangeDistributionListSetListPrimaryEmailAddressError,
  type ExchangeDistributionListSetListPrimaryEmailAddressResponse,
  type ExchangeDistributionListAddListEmailAddressData,
  type ExchangeDistributionListAddListEmailAddressError,
  type ExchangeDistributionListAddListEmailAddressResponse,
  type ExchangeDistributionListDeleteListEmailAddressData,
  type ExchangeDistributionListDeleteListEmailAddressError,
  type ExchangeDistributionListDeleteListEmailAddressResponse,
  type ExchangeDistributionListGetListPropertiesData,
  type ExchangeDistributionListGetListPropertiesError,
  type ExchangeDistributionListGetListPropertiesResponse,
  type ExchangeDistributionListUpdateListSettingsData,
  type ExchangeDistributionListUpdateListSettingsError,
  type ExchangeDistributionListUpdateListSettingsResponse,
  type ExchangeMailContactGetAllExchangeMailContactsData,
  type ExchangeMailContactGetAllExchangeMailContactsError,
  type ExchangeMailContactGetAllExchangeMailContactsResponse,
  type ExchangeMailContactAddExchangeMailContactData,
  type ExchangeMailContactAddExchangeMailContactError,
  type ExchangeMailContactAddExchangeMailContactResponse,
  type ExchangeMailContactGetExchangeMailContactDetailsData,
  type ExchangeMailContactGetExchangeMailContactDetailsError,
  type ExchangeMailContactGetExchangeMailContactDetailsResponse,
  type ExchangeMailContactDeleteMailContactData,
  type ExchangeMailContactDeleteMailContactError,
  type ExchangeMailContactDeleteMailContactResponse,
  type ExchangeMailContactGetMailContactAcceptedSendersData,
  type ExchangeMailContactGetMailContactAcceptedSendersError,
  type ExchangeMailContactGetMailContactAcceptedSendersResponse,
  type ExchangeMailContactAddMailContactAcceptedSendersData,
  type ExchangeMailContactAddMailContactAcceptedSendersError,
  type ExchangeMailContactAddMailContactAcceptedSendersResponse,
  type ExchangeMailContactRemoveMailContactAcceptedSendersData,
  type ExchangeMailContactRemoveMailContactAcceptedSendersError,
  type ExchangeMailContactRemoveMailContactAcceptedSendersResponse,
  type ExchangeMailContactGetMailContactRejectedSendersData,
  type ExchangeMailContactGetMailContactRejectedSendersError,
  type ExchangeMailContactGetMailContactRejectedSendersResponse,
  type ExchangeMailContactAddMailContactRejectedSendersData,
  type ExchangeMailContactAddMailContactRejectedSendersError,
  type ExchangeMailContactAddMailContactRejectedSendersResponse,
  type ExchangeMailContactRemoveMailContactRejectedSendersData,
  type ExchangeMailContactRemoveMailContactRejectedSendersError,
  type ExchangeMailContactRemoveMailContactRejectedSendersResponse,
  type ExchangeMailContactGetMailContactEmailAddressesData,
  type ExchangeMailContactGetMailContactEmailAddressesError,
  type ExchangeMailContactGetMailContactEmailAddressesResponse,
  type ExchangeMailContactAddMailContactEmailAddressData,
  type ExchangeMailContactAddMailContactEmailAddressError,
  type ExchangeMailContactAddMailContactEmailAddressResponse,
  type ExchangeMailContactDeleteMailContactEmailAddressData,
  type ExchangeMailContactDeleteMailContactEmailAddressError,
  type ExchangeMailContactDeleteMailContactEmailAddressResponse,
  type ExchangeMailContactSetMailContactPrimaryEmailAddressData,
  type ExchangeMailContactSetMailContactPrimaryEmailAddressError,
  type ExchangeMailContactSetMailContactPrimaryEmailAddressResponse,
  type ExchangeMailContactSetMailContactExternalEmailAddressData,
  type ExchangeMailContactSetMailContactExternalEmailAddressError,
  type ExchangeMailContactSetMailContactExternalEmailAddressResponse,
  type ExchangeMailContactGetMailContactGeneralSettingsData,
  type ExchangeMailContactGetMailContactGeneralSettingsError,
  type ExchangeMailContactGetMailContactGeneralSettingsResponse,
  type ExchangeMailContactUpdateMailContactGeneralSettingsData,
  type ExchangeMailContactUpdateMailContactGeneralSettingsError,
  type ExchangeMailContactUpdateMailContactGeneralSettingsResponse,
  type ExchangeMailContactGetMailContactAdvancedSettingsData,
  type ExchangeMailContactGetMailContactAdvancedSettingsError,
  type ExchangeMailContactGetMailContactAdvancedSettingsResponse,
  type ExchangeMailContactUpdateMailContactAdvancedSettingsData,
  type ExchangeMailContactUpdateMailContactAdvancedSettingsError,
  type ExchangeMailContactUpdateMailContactAdvancedSettingsResponse,
  type ExchangeMailContactUpdateMailContactData,
  type ExchangeMailContactUpdateMailContactError,
  type ExchangeMailContactUpdateMailContactResponse,
  type ExchangeResourceMailboxGetAllExchangeResourceMailboxsData,
  type ExchangeResourceMailboxGetAllExchangeResourceMailboxsError,
  type ExchangeResourceMailboxGetAllExchangeResourceMailboxsResponse,
  type ExchangeResourceMailboxAddExchangeResourceMailboxData,
  type ExchangeResourceMailboxAddExchangeResourceMailboxError,
  type ExchangeResourceMailboxAddExchangeResourceMailboxResponse,
  type ExchangeResourceMailboxGetResourceMailboxDetailsData,
  type ExchangeResourceMailboxGetResourceMailboxDetailsError,
  type ExchangeResourceMailboxGetResourceMailboxDetailsResponse,
  type ExchangeResourceMailboxDeleteExchangeResourceMailboxData,
  type ExchangeResourceMailboxDeleteExchangeResourceMailboxError,
  type ExchangeResourceMailboxDeleteExchangeResourceMailboxResponse,
  type ExchangeResourceMailboxUpdateExchangeResourceMailboxData,
  type ExchangeResourceMailboxUpdateExchangeResourceMailboxError,
  type ExchangeResourceMailboxUpdateExchangeResourceMailboxResponse,
  type ExchangeResourceMailboxGetArchiveResourceMailboxSettingsData,
  type ExchangeResourceMailboxGetArchiveResourceMailboxSettingsError,
  type ExchangeResourceMailboxGetArchiveResourceMailboxSettingsResponse,
  type ExchangeResourceMailboxUpdateArchiveResourceMailboxData,
  type ExchangeResourceMailboxUpdateArchiveResourceMailboxError,
  type ExchangeResourceMailboxUpdateArchiveResourceMailboxResponse,
  type ExchangeResourceMailboxAddArchiveResourceMailboxData,
  type ExchangeResourceMailboxAddArchiveResourceMailboxError,
  type ExchangeResourceMailboxAddArchiveResourceMailboxResponse,
  type ExchangeResourceMailboxUpdateArchiveResourceMailboxStatusData,
  type ExchangeResourceMailboxUpdateArchiveResourceMailboxStatusError,
  type ExchangeResourceMailboxUpdateArchiveResourceMailboxStatusResponse,
  type ExchangeResourceMailboxGetExchangeResourceMailboxGeneralPropertiesData,
  type ExchangeResourceMailboxGetExchangeResourceMailboxGeneralPropertiesError,
  type ExchangeResourceMailboxGetExchangeResourceMailboxGeneralPropertiesResponse,
  type ExchangeResourceMailboxUpdateExchangeResourceMailboxGeneralPropertiesData,
  type ExchangeResourceMailboxUpdateExchangeResourceMailboxGeneralPropertiesError,
  type ExchangeResourceMailboxUpdateExchangeResourceMailboxGeneralPropertiesResponse,
  type ExchangeResourceMailboxGetExchangeResourceMailboxAdvancedPropertiesData,
  type ExchangeResourceMailboxGetExchangeResourceMailboxAdvancedPropertiesError,
  type ExchangeResourceMailboxGetExchangeResourceMailboxAdvancedPropertiesResponse,
  type ExchangeResourceMailboxUpdateExchangeResourceMailboxAdvancedPropertiesData,
  type ExchangeResourceMailboxUpdateExchangeResourceMailboxAdvancedPropertiesError,
  type ExchangeResourceMailboxUpdateExchangeResourceMailboxAdvancedPropertiesResponse,
  type ExchangeResourceMailboxGetResourceMailboxEmailAddressesData,
  type ExchangeResourceMailboxGetResourceMailboxEmailAddressesError,
  type ExchangeResourceMailboxGetResourceMailboxEmailAddressesResponse,
  type ExchangeResourceMailboxSetPrimaryEmailAddressesData,
  type ExchangeResourceMailboxSetPrimaryEmailAddressesError,
  type ExchangeResourceMailboxSetPrimaryEmailAddressesResponse,
  type ExchangeResourceMailboxAddResourceMailboxEmailAddressesData,
  type ExchangeResourceMailboxAddResourceMailboxEmailAddressesError,
  type ExchangeResourceMailboxAddResourceMailboxEmailAddressesResponse,
  type ExchangeResourceMailboxDeleteResourceMailboxEmailAddressesData,
  type ExchangeResourceMailboxDeleteResourceMailboxEmailAddressesError,
  type ExchangeResourceMailboxDeleteResourceMailboxEmailAddressesResponse,
  type ExchangeResourceMailboxGetResourceMailboxSendOnBehalfUsersData,
  type ExchangeResourceMailboxGetResourceMailboxSendOnBehalfUsersError,
  type ExchangeResourceMailboxGetResourceMailboxSendOnBehalfUsersResponse,
  type ExchangeResourceMailboxAddResourceMailboxSendOnBehalfUsersData,
  type ExchangeResourceMailboxAddResourceMailboxSendOnBehalfUsersError,
  type ExchangeResourceMailboxAddResourceMailboxSendOnBehalfUsersResponse,
  type ExchangeResourceMailboxRemoveResourceMailboxSendOnBehalfUsersData,
  type ExchangeResourceMailboxRemoveResourceMailboxSendOnBehalfUsersError,
  type ExchangeResourceMailboxRemoveResourceMailboxSendOnBehalfUsersResponse,
  type ExchangeResourceMailboxGetResourceMailboxAcceptedSendersData,
  type ExchangeResourceMailboxGetResourceMailboxAcceptedSendersError,
  type ExchangeResourceMailboxGetResourceMailboxAcceptedSendersResponse,
  type ExchangeResourceMailboxAddResourceMailboxAcceptedSendersData,
  type ExchangeResourceMailboxAddResourceMailboxAcceptedSendersError,
  type ExchangeResourceMailboxAddResourceMailboxAcceptedSendersResponse,
  type ExchangeResourceMailboxRemoveResourceMailboxAcceptedSendersData,
  type ExchangeResourceMailboxRemoveResourceMailboxAcceptedSendersError,
  type ExchangeResourceMailboxRemoveResourceMailboxAcceptedSendersResponse,
  type ExchangeResourceMailboxGetResourceMailboxRejectedSendersData,
  type ExchangeResourceMailboxGetResourceMailboxRejectedSendersError,
  type ExchangeResourceMailboxGetResourceMailboxRejectedSendersResponse,
  type ExchangeResourceMailboxAddResourceMailboxRejectedSendersData,
  type ExchangeResourceMailboxAddResourceMailboxRejectedSendersError,
  type ExchangeResourceMailboxAddResourceMailboxRejectedSendersResponse,
  type ExchangeResourceMailboxRemoveResourceMailboxRejectedSendersData,
  type ExchangeResourceMailboxRemoveResourceMailboxRejectedSendersError,
  type ExchangeResourceMailboxRemoveResourceMailboxRejectedSendersResponse,
  type ExchangeResourceMailboxGetUserFullAccessPermissionData,
  type ExchangeResourceMailboxGetUserFullAccessPermissionError,
  type ExchangeResourceMailboxGetUserFullAccessPermissionResponse,
  type ExchangeResourceMailboxAddUserFullAccessPermissionData,
  type ExchangeResourceMailboxAddUserFullAccessPermissionError,
  type ExchangeResourceMailboxAddUserFullAccessPermissionResponse,
  type ExchangeResourceMailboxRemoveUserFullAccessPermissionData,
  type ExchangeResourceMailboxRemoveUserFullAccessPermissionError,
  type ExchangeResourceMailboxRemoveUserFullAccessPermissionResponse,
  type ExchangeResourceMailboxGetUserSendAsPermissionData,
  type ExchangeResourceMailboxGetUserSendAsPermissionError,
  type ExchangeResourceMailboxGetUserSendAsPermissionResponse,
  type ExchangeResourceMailboxAddUserSendAsPermissionData,
  type ExchangeResourceMailboxAddUserSendAsPermissionError,
  type ExchangeResourceMailboxAddUserSendAsPermissionResponse,
  type ExchangeResourceMailboxRemoveUserSendAsPermissionData,
  type ExchangeResourceMailboxRemoveUserSendAsPermissionError,
  type ExchangeResourceMailboxRemoveUserSendAsPermissionResponse,
  type ExchangeResourceMailboxGetUserForwardingAddressData,
  type ExchangeResourceMailboxGetUserForwardingAddressError,
  type ExchangeResourceMailboxGetUserForwardingAddressResponse,
  type ExchangeResourceMailboxUpdateUserForwardingAddressData,
  type ExchangeResourceMailboxUpdateUserForwardingAddressError,
  type ExchangeResourceMailboxUpdateUserForwardingAddressResponse,
  type ExchangeResourceMailboxGetResourceMailboxStatisticsData,
  type ExchangeResourceMailboxGetResourceMailboxStatisticsError,
  type ExchangeResourceMailboxGetResourceMailboxStatisticsResponse,
  type ExchangeResourceMailboxGetAllListsOfUserMailboxData,
  type ExchangeResourceMailboxGetAllListsOfUserMailboxError,
  type ExchangeResourceMailboxGetAllListsOfUserMailboxResponse,
  type ExchangeResourceMailboxAddUserMailboxToListData,
  type ExchangeResourceMailboxAddUserMailboxToListError,
  type ExchangeResourceMailboxAddUserMailboxToListResponse,
  type ExchangeResourceMailboxRemoveUserMailboxFromListData,
  type ExchangeResourceMailboxRemoveUserMailboxFromListError,
  type ExchangeResourceMailboxRemoveUserMailboxFromListResponse,
  type ExchangeResourceMailboxGetDelegatesForResourceMailboxData,
  type ExchangeResourceMailboxGetDelegatesForResourceMailboxError,
  type ExchangeResourceMailboxGetDelegatesForResourceMailboxResponse,
  type ExchangeResourceMailboxAddDelegatesForResourceMailboxData,
  type ExchangeResourceMailboxAddDelegatesForResourceMailboxError,
  type ExchangeResourceMailboxAddDelegatesForResourceMailboxResponse,
  type ExchangeResourceMailboxRemoveDelegatesForResourceMailboxData,
  type ExchangeResourceMailboxRemoveDelegatesForResourceMailboxError,
  type ExchangeResourceMailboxRemoveDelegatesForResourceMailboxResponse,
  type ExchangeResourceMailboxGetResourceMailboxBookInPolicyUsersData,
  type ExchangeResourceMailboxGetResourceMailboxBookInPolicyUsersError,
  type ExchangeResourceMailboxGetResourceMailboxBookInPolicyUsersResponse,
  type ExchangeResourceMailboxAddResourceMailboxBookInPolicyRequestData,
  type ExchangeResourceMailboxAddResourceMailboxBookInPolicyRequestError,
  type ExchangeResourceMailboxAddResourceMailboxBookInPolicyRequestResponse,
  type ExchangeResourceMailboxRemoveResourceMailboxBookInPolicyUsersData,
  type ExchangeResourceMailboxRemoveResourceMailboxBookInPolicyUsersError,
  type ExchangeResourceMailboxRemoveResourceMailboxBookInPolicyUsersResponse,
  type ExchangeResourceMailboxGetResourceMailboxRequestInPolicyUsersData,
  type ExchangeResourceMailboxGetResourceMailboxRequestInPolicyUsersError,
  type ExchangeResourceMailboxGetResourceMailboxRequestInPolicyUsersResponse,
  type ExchangeResourceMailboxAddResourceMailboxRequestInPolicyUsersData,
  type ExchangeResourceMailboxAddResourceMailboxRequestInPolicyUsersError,
  type ExchangeResourceMailboxAddResourceMailboxRequestInPolicyUsersResponse,
  type ExchangeResourceMailboxRemoveResourceMailboxRequestInPolicyUsersData,
  type ExchangeResourceMailboxRemoveResourceMailboxRequestInPolicyUsersError,
  type ExchangeResourceMailboxRemoveResourceMailboxRequestInPolicyUsersResponse,
  type ExchangeResourceMailboxGetResourceMailboxOutPolicyUsersData,
  type ExchangeResourceMailboxGetResourceMailboxOutPolicyUsersError,
  type ExchangeResourceMailboxGetResourceMailboxOutPolicyUsersResponse,
  type ExchangeResourceMailboxAddResourceMailboxOutPolicyUsersData,
  type ExchangeResourceMailboxAddResourceMailboxOutPolicyUsersError,
  type ExchangeResourceMailboxAddResourceMailboxOutPolicyUsersResponse,
  type ExchangeResourceMailboxRemoveResourceMailboxOutPolicyUsersData,
  type ExchangeResourceMailboxRemoveResourceMailboxOutPolicyUsersError,
  type ExchangeResourceMailboxRemoveResourceMailboxOutPolicyUsersResponse,
  type ExchangeResourceMailboxGetResourceMaiboxPolicySettingsData,
  type ExchangeResourceMailboxGetResourceMaiboxPolicySettingsError,
  type ExchangeResourceMailboxGetResourceMaiboxPolicySettingsResponse,
  type ExchangeResourceMailboxUpdateResourceMaiboxPolicySettingsData,
  type ExchangeResourceMailboxUpdateResourceMaiboxPolicySettingsError,
  type ExchangeResourceMailboxUpdateResourceMaiboxPolicySettingsResponse,
  type ExchangePublicFolderGetAllExchangePublicFoldersData,
  type ExchangePublicFolderGetAllExchangePublicFoldersError,
  type ExchangePublicFolderGetAllExchangePublicFoldersResponse,
  type ExchangePublicFolderAddExchangePublicFolderData,
  type ExchangePublicFolderAddExchangePublicFolderError,
  type ExchangePublicFolderAddExchangePublicFolderResponse,
  type ExchangePublicFolderGetExchangePublicFolderDetailsData,
  type ExchangePublicFolderGetExchangePublicFolderDetailsError,
  type ExchangePublicFolderGetExchangePublicFolderDetailsResponse,
  type ExchangePublicFolderDeleteExchangePublicFolderData,
  type ExchangePublicFolderDeleteExchangePublicFolderError,
  type ExchangePublicFolderDeleteExchangePublicFolderResponse,
  type ExchangePublicFolderGetExchangePublicFolderGeneralPropertiesData,
  type ExchangePublicFolderGetExchangePublicFolderGeneralPropertiesError,
  type ExchangePublicFolderGetExchangePublicFolderGeneralPropertiesResponse,
  type ExchangePublicFolderUpdateExchangePublicFolderGeneralPropertiesData,
  type ExchangePublicFolderUpdateExchangePublicFolderGeneralPropertiesError,
  type ExchangePublicFolderUpdateExchangePublicFolderGeneralPropertiesResponse,
  type ExchangePublicFolderGetExchangePublicFolderAdvancedPropertiesData,
  type ExchangePublicFolderGetExchangePublicFolderAdvancedPropertiesError,
  type ExchangePublicFolderGetExchangePublicFolderAdvancedPropertiesResponse,
  type ExchangePublicFolderUpdateExchangePublicFolderAdvancedPropertiesData,
  type ExchangePublicFolderUpdateExchangePublicFolderAdvancedPropertiesError,
  type ExchangePublicFolderUpdateExchangePublicFolderAdvancedPropertiesResponse,
  type ExchangePublicFolderGetExchangePublicFolderPermissionsData,
  type ExchangePublicFolderGetExchangePublicFolderPermissionsError,
  type ExchangePublicFolderGetExchangePublicFolderPermissionsResponse,
  type ExchangePublicFolderUpdateExchangePublicFolderPermissionsData,
  type ExchangePublicFolderUpdateExchangePublicFolderPermissionsError,
  type ExchangePublicFolderUpdateExchangePublicFolderPermissionsResponse,
  type ExchangePublicFolderGetPublicFolderAcceptedSendersData,
  type ExchangePublicFolderGetPublicFolderAcceptedSendersError,
  type ExchangePublicFolderGetPublicFolderAcceptedSendersResponse,
  type ExchangePublicFolderAddPublicFolderAcceptedSendersData,
  type ExchangePublicFolderAddPublicFolderAcceptedSendersError,
  type ExchangePublicFolderAddPublicFolderAcceptedSendersResponse,
  type ExchangePublicFolderRemovePublicFolderAcceptedSendersData,
  type ExchangePublicFolderRemovePublicFolderAcceptedSendersError,
  type ExchangePublicFolderRemovePublicFolderAcceptedSendersResponse,
  type ExchangePublicFolderGetPublicFolderRejectedSendersData,
  type ExchangePublicFolderGetPublicFolderRejectedSendersError,
  type ExchangePublicFolderGetPublicFolderRejectedSendersResponse,
  type ExchangePublicFolderAddPublicFolderRejectedSendersData,
  type ExchangePublicFolderAddPublicFolderRejectedSendersError,
  type ExchangePublicFolderAddPublicFolderRejectedSendersResponse,
  type ExchangePublicFolderRemovePublicFolderRejectedSendersData,
  type ExchangePublicFolderRemovePublicFolderRejectedSendersError,
  type ExchangePublicFolderRemovePublicFolderRejectedSendersResponse,
  type ExchangePublicFolderGetPublicFolderEmailAddressesData,
  type ExchangePublicFolderGetPublicFolderEmailAddressesError,
  type ExchangePublicFolderGetPublicFolderEmailAddressesResponse,
  type ExchangePublicFolderAddPublicFolderEmailAddressesData,
  type ExchangePublicFolderAddPublicFolderEmailAddressesError,
  type ExchangePublicFolderAddPublicFolderEmailAddressesResponse,
  type ExchangePublicFolderDeletePublicFolderEmailAddressesData,
  type ExchangePublicFolderDeletePublicFolderEmailAddressesError,
  type ExchangePublicFolderDeletePublicFolderEmailAddressesResponse,
  type ExchangePublicFolderGetPublicFolderForwardingAddressData,
  type ExchangePublicFolderGetPublicFolderForwardingAddressError,
  type ExchangePublicFolderGetPublicFolderForwardingAddressResponse,
  type ExchangePublicFolderUpdatePublicFolderForwardingAddressData,
  type ExchangePublicFolderUpdatePublicFolderForwardingAddressError,
  type ExchangePublicFolderUpdatePublicFolderForwardingAddressResponse,
  type ExchangePublicFolderEnableDisablePublicFolderData,
  type ExchangePublicFolderEnableDisablePublicFolderError,
  type ExchangePublicFolderEnableDisablePublicFolderResponse,
  type ExchangeJournalRuleAddExchangeJournalRuleData,
  type ExchangeJournalRuleAddExchangeJournalRuleError,
  type ExchangeJournalRuleAddExchangeJournalRuleResponse,
  type ExchangeJournalRuleDeleteExchangeJournalRuleData,
  type ExchangeJournalRuleDeleteExchangeJournalRuleError,
  type ExchangeJournalRuleDeleteExchangeJournalRuleResponse,
  type ExchangeJournalRuleGetAllExchangeJournalRulesData,
  type ExchangeJournalRuleGetAllExchangeJournalRulesError,
  type ExchangeJournalRuleGetAllExchangeJournalRulesResponse,
  type ExchangeJournalRuleEnableDisableExchangeJournalRuleData,
  type ExchangeJournalRuleEnableDisableExchangeJournalRuleError,
  type ExchangeJournalRuleEnableDisableExchangeJournalRuleResponse,
  type ExchangeBlockedDomainRuleGetBlockedDomainRuleDetailsData,
  type ExchangeBlockedDomainRuleGetBlockedDomainRuleDetailsError,
  type ExchangeBlockedDomainRuleGetBlockedDomainRuleDetailsResponse,
  type ExchangeBlockedDomainRuleUpdateExchangeBlockedDomainRuleData,
  type ExchangeBlockedDomainRuleUpdateExchangeBlockedDomainRuleError,
  type ExchangeBlockedDomainRuleUpdateExchangeBlockedDomainRuleResponse,
  type ExchangeBlockedDomainRuleAddExchangeBlockedDomainRuleData,
  type ExchangeBlockedDomainRuleAddExchangeBlockedDomainRuleError,
  type ExchangeBlockedDomainRuleAddExchangeBlockedDomainRuleResponse,
  type ExchangeBlockedDomainRuleDeleteExchangeBlockedDomainRuleData,
  type ExchangeBlockedDomainRuleDeleteExchangeBlockedDomainRuleError,
  type ExchangeBlockedDomainRuleDeleteExchangeBlockedDomainRuleResponse,
  type ExchangeBlockedDomainRuleGetExchangeBlockedDomainRulesData,
  type ExchangeBlockedDomainRuleGetExchangeBlockedDomainRulesError,
  type ExchangeBlockedDomainRuleGetExchangeBlockedDomainRulesResponse,
  type ExchangeBlockedDomainRuleEnableDisableExchangeBlockedDomainRuleData,
  type ExchangeBlockedDomainRuleEnableDisableExchangeBlockedDomainRuleError,
  type ExchangeBlockedDomainRuleEnableDisableExchangeBlockedDomainRuleResponse,
  type ExchangeMailDisclaimerGetAllExchangeMailDisclaimersData,
  type ExchangeMailDisclaimerGetAllExchangeMailDisclaimersError,
  type ExchangeMailDisclaimerGetAllExchangeMailDisclaimersResponse,
  type ExchangeMailDisclaimerUpdateExchangeMailDisclaimerData,
  type ExchangeMailDisclaimerUpdateExchangeMailDisclaimerError,
  type ExchangeMailDisclaimerUpdateExchangeMailDisclaimerResponse,
  type ExchangeMailDisclaimerAddExchangeMailDisclaimerData,
  type ExchangeMailDisclaimerAddExchangeMailDisclaimerError,
  type ExchangeMailDisclaimerAddExchangeMailDisclaimerResponse,
  type ExchangeMailDisclaimerDeleteExchangeMailDisclaimerData,
  type ExchangeMailDisclaimerDeleteExchangeMailDisclaimerError,
  type ExchangeMailDisclaimerDeleteExchangeMailDisclaimerResponse,
  type ExchangeMailDisclaimerEnableDisableExchangeMailDisclaimerData,
  type ExchangeMailDisclaimerEnableDisableExchangeMailDisclaimerError,
  type ExchangeMailDisclaimerEnableDisableExchangeMailDisclaimerResponse,
  type ExgConfsGetAllExgMailBoxesDbData,
  type ExgConfsGetAllExgMailBoxesDbError,
  type ExgConfsGetAllExgMailBoxesDbResponse,
  type ExgConfsGetAllExgMailBoxesDbByUserIdData,
  type ExgConfsGetAllExgMailBoxesDbByUserIdError,
  type ExgConfsGetAllExgMailBoxesDbByUserIdResponse,
  type ExgConfsGetAllExgPfMailBoxesData,
  type ExgConfsGetAllExgPfMailBoxesError,
  type ExgConfsGetAllExgPfMailBoxesResponse,
  type ExgConfsGetAllExgPfMailBoxesByUserIdData,
  type ExgConfsGetAllExgPfMailBoxesByUserIdError,
  type ExgConfsGetAllExgPfMailBoxesByUserIdResponse,
  type ExgConfsActiveSyncPoliciesData,
  type ExgConfsActiveSyncPoliciesError,
  type ExgConfsActiveSyncPoliciesResponse,
  type ExchangeGetExchangeListsByAdministratorData,
  type ExchangeGetExchangeListsByAdministratorError,
  type ExchangeGetExchangeListsByAdministratorResponse,
  type ExchangeIsUserDistributionListMemberData,
  type ExchangeIsUserDistributionListMemberError,
  type ExchangeIsUserDistributionListMemberResponse,
  type SharePointSiteGetAllSharePointSitesData,
  type SharePointSiteGetAllSharePointSitesError,
  type SharePointSiteGetAllSharePointSitesResponse,
  type SharePointSiteAddSharePointSiteData,
  type SharePointSiteAddSharePointSiteError,
  type SharePointSiteAddSharePointSiteResponse,
  type SharePointSiteGetSharePointSiteDetailsData,
  type SharePointSiteGetSharePointSiteDetailsError,
  type SharePointSiteGetSharePointSiteDetailsResponse,
  type SharePointSiteDeleteSharePointSiteData,
  type SharePointSiteDeleteSharePointSiteError,
  type SharePointSiteDeleteSharePointSiteResponse,
  type SharePointSiteGetAllSharePointSubSitesData,
  type SharePointSiteGetAllSharePointSubSitesError,
  type SharePointSiteGetAllSharePointSubSitesResponse,
  type SharePointSiteAddSharePointSubSiteData,
  type SharePointSiteAddSharePointSubSiteError,
  type SharePointSiteAddSharePointSubSiteResponse,
  type SharePointSiteGetAllSharePointSiteRolesData,
  type SharePointSiteGetAllSharePointSiteRolesError,
  type SharePointSiteGetAllSharePointSiteRolesResponse,
  type SharePointSiteDeleteSharePointSubSiteData,
  type SharePointSiteDeleteSharePointSubSiteError,
  type SharePointSiteDeleteSharePointSubSiteResponse,
  type SharePointSiteGetSharePointSiteStatsData,
  type SharePointSiteGetSharePointSiteStatsError,
  type SharePointSiteGetSharePointSiteStatsResponse,
  type SharePointUserGetSharePointUsersData,
  type SharePointUserGetSharePointUsersError,
  type SharePointUserGetSharePointUsersResponse,
  type SharePointUserAddSharePointUserData,
  type SharePointUserAddSharePointUserError,
  type SharePointUserAddSharePointUserResponse,
  type SharePointUserGetSharePointUserDetailsData,
  type SharePointUserGetSharePointUserDetailsError,
  type SharePointUserGetSharePointUserDetailsResponse,
  type SharePointUserDeleteSharePointSiteUserData,
  type SharePointUserDeleteSharePointSiteUserError,
  type SharePointUserDeleteSharePointSiteUserResponse,
  type SharePointUserGetSharePointUserRolesData,
  type SharePointUserGetSharePointUserRolesError,
  type SharePointUserGetSharePointUserRolesResponse,
  type SharePointUserUpdateSharePointUserRolesData,
  type SharePointUserUpdateSharePointUserRolesError,
  type SharePointUserUpdateSharePointUserRolesResponse,
  type SharePointUserChangeSharePointUserPasswordData,
  type SharePointUserChangeSharePointUserPasswordError,
  type SharePointUserChangeSharePointUserPasswordResponse,
  type SharePointUserGetSharePointUserPropertiesData,
  type SharePointUserGetSharePointUserPropertiesError,
  type SharePointUserGetSharePointUserPropertiesResponse,
  type SharePointUserUpdateSharePointUserPropertiesData,
  type SharePointUserUpdateSharePointUserPropertiesError,
  type SharePointUserUpdateSharePointUserPropertiesResponse,
  type SharePointUserGetExistingSharePointUsersData,
  type SharePointUserGetExistingSharePointUsersError,
  type SharePointUserGetExistingSharePointUsersResponse,
  type SharePointGroupGetSharePointGroupsData,
  type SharePointGroupGetSharePointGroupsError,
  type SharePointGroupGetSharePointGroupsResponse,
  type SharePointGroupAddSharePointGroupData,
  type SharePointGroupAddSharePointGroupError,
  type SharePointGroupAddSharePointGroupResponse,
  type SharePointGroupDeleteSharePointGroupsData,
  type SharePointGroupDeleteSharePointGroupsError,
  type SharePointGroupDeleteSharePointGroupsResponse,
  type SharePointGroupGetSharePointGroupRolesData,
  type SharePointGroupGetSharePointGroupRolesError,
  type SharePointGroupGetSharePointGroupRolesResponse,
  type SharePointGroupUpdateSharePointGroupRolesData,
  type SharePointGroupUpdateSharePointGroupRolesError,
  type SharePointGroupUpdateSharePointGroupRolesResponse,
  type SharePointGroupGetSharePointGroupUsersData,
  type SharePointGroupGetSharePointGroupUsersError,
  type SharePointGroupGetSharePointGroupUsersResponse,
  type SharePointGroupAddSharePointGroupUsersData,
  type SharePointGroupAddSharePointGroupUsersError,
  type SharePointGroupAddSharePointGroupUsersResponse,
  type SharePointGroupRemoveSharePointGroupUsersData,
  type SharePointGroupRemoveSharePointGroupUsersError,
  type SharePointGroupRemoveSharePointGroupUsersResponse,
  type SharePointConfGetUserSpWebApplicationsData,
  type SharePointConfGetUserSpWebApplicationsError,
  type SharePointConfGetUserSpWebApplicationsResponse,
  type SharePointServerGetSharePointServerWebApplicationsData,
  type SharePointServerGetSharePointServerWebApplicationsError,
  type SharePointServerGetSharePointServerWebApplicationsResponse,
  type SharePointServerGetSharePointServerLocalesData,
  type SharePointServerGetSharePointServerLocalesError,
  type SharePointServerGetSharePointServerLocalesResponse,
  type SharePointServerGetSharePointServerWebTemplatesData,
  type SharePointServerGetSharePointServerWebTemplatesError,
  type SharePointServerGetSharePointServerWebTemplatesResponse,
  type SkypeUserListSkypeUsersData,
  type SkypeUserListSkypeUsersError,
  type SkypeUserListSkypeUsersResponse,
  type SkypeUserAddSkypeUserData,
  type SkypeUserAddSkypeUserError,
  type SkypeUserAddSkypeUserResponse,
  type SkypeUserGetSkypeUserDetailsData,
  type SkypeUserGetSkypeUserDetailsError,
  type SkypeUserGetSkypeUserDetailsResponse,
  type SkypeUserDeleteSkypeUserData,
  type SkypeUserDeleteSkypeUserError,
  type SkypeUserDeleteSkypeUserResponse,
  type SkypeUserChangeSkypeUserPasswordData,
  type SkypeUserChangeSkypeUserPasswordError,
  type SkypeUserChangeSkypeUserPasswordResponse,
  type SkypeUserGetSkypeUserPropertiesData,
  type SkypeUserGetSkypeUserPropertiesError,
  type SkypeUserGetSkypeUserPropertiesResponse,
  type SkypeUserUpdateSkypeUserPropertiesData,
  type SkypeUserUpdateSkypeUserPropertiesError,
  type SkypeUserUpdateSkypeUserPropertiesResponse,
  type SkypeUserGetSkypeUserAdvancedSettingsData,
  type SkypeUserGetSkypeUserAdvancedSettingsError,
  type SkypeUserGetSkypeUserAdvancedSettingsResponse,
  type SkypeUserUpdateSkypeUserAdvancedPropertiesData,
  type SkypeUserUpdateSkypeUserAdvancedPropertiesError,
  type SkypeUserUpdateSkypeUserAdvancedPropertiesResponse,
  type SkypeUserUpdateSkypeUserStatusData,
  type SkypeUserUpdateSkypeUserStatusError,
  type SkypeUserUpdateSkypeUserStatusResponse,
  type SkypeUserGetSkypeUserForwardingSettingsData,
  type SkypeUserGetSkypeUserForwardingSettingsError,
  type SkypeUserGetSkypeUserForwardingSettingsResponse,
  type SkypeUserUpdateSkypeUserForwardingSettingsData,
  type SkypeUserUpdateSkypeUserForwardingSettingsError,
  type SkypeUserUpdateSkypeUserForwardingSettingsResponse,
  type SkypeUserCheckBulkSkypeUsersFeasibilityData,
  type SkypeUserCheckBulkSkypeUsersFeasibilityError,
  type SkypeUserCheckBulkSkypeUsersFeasibilityResponse,
  type SkypeUserAddBulkSkypeUsersData,
  type SkypeUserAddBulkSkypeUsersError,
  type SkypeUserAddBulkSkypeUsersResponse,
  type SkypeUserUpdateSkypeUserTelephonySettingsData,
  type SkypeUserUpdateSkypeUserTelephonySettingsError,
  type SkypeUserUpdateSkypeUserTelephonySettingsResponse,
  type SkypeUserUpdateSkypeUserPolicySettingsData,
  type SkypeUserUpdateSkypeUserPolicySettingsError,
  type SkypeUserUpdateSkypeUserPolicySettingsResponse,
  type SkypeSipDomainListSipDomainsData,
  type SkypeSipDomainListSipDomainsError,
  type SkypeSipDomainListSipDomainsResponse,
  type SkypeSipDomainAddSkypeSipDomainData,
  type SkypeSipDomainAddSkypeSipDomainError,
  type SkypeSipDomainAddSkypeSipDomainResponse,
  type SkypeSipDomainGetSipDomainDetailsData,
  type SkypeSipDomainGetSipDomainDetailsError,
  type SkypeSipDomainGetSipDomainDetailsResponse,
  type SkypeSipDomainDeleteSipDomainData,
  type SkypeSipDomainDeleteSipDomainError,
  type SkypeSipDomainDeleteSipDomainResponse,
  type SkypeGroupListSkypeGroupsData,
  type SkypeGroupListSkypeGroupsError,
  type SkypeGroupListSkypeGroupsResponse,
  type SkypeGroupAddSkypeResponseGroupData,
  type SkypeGroupAddSkypeResponseGroupError,
  type SkypeGroupAddSkypeResponseGroupResponse,
  type SkypeGroupGetSkypeGroupDetailsData,
  type SkypeGroupGetSkypeGroupDetailsError,
  type SkypeGroupGetSkypeGroupDetailsResponse,
  type SkypeGroupDeleteSkypeGroupData,
  type SkypeGroupDeleteSkypeGroupError,
  type SkypeGroupDeleteSkypeGroupResponse,
  type SkypeGroupGetSkypeGroupPropertiesData,
  type SkypeGroupGetSkypeGroupPropertiesError,
  type SkypeGroupGetSkypeGroupPropertiesResponse,
  type SkypeGroupUpdateSkypeGroupPropertiesData,
  type SkypeGroupUpdateSkypeGroupPropertiesError,
  type SkypeGroupUpdateSkypeGroupPropertiesResponse,
  type SkypeQueueListSkypeQueuesData,
  type SkypeQueueListSkypeQueuesError,
  type SkypeQueueListSkypeQueuesResponse,
  type SkypeQueueAddSkypeResponseQueueData,
  type SkypeQueueAddSkypeResponseQueueError,
  type SkypeQueueAddSkypeResponseQueueResponse,
  type SkypeQueueGetSkypeQueueDetailsData,
  type SkypeQueueGetSkypeQueueDetailsError,
  type SkypeQueueGetSkypeQueueDetailsResponse,
  type SkypeQueueDeleteSkypeQueueData,
  type SkypeQueueDeleteSkypeQueueError,
  type SkypeQueueDeleteSkypeQueueResponse,
  type SkypeQueueGetSkypeQueuePropertiesData,
  type SkypeQueueGetSkypeQueuePropertiesError,
  type SkypeQueueGetSkypeQueuePropertiesResponse,
  type SkypeQueueUpdateSkypeQueuePropertiesData,
  type SkypeQueueUpdateSkypeQueuePropertiesError,
  type SkypeQueueUpdateSkypeQueuePropertiesResponse,
  type SkypeWorkflowListSkypeWorkflowsData,
  type SkypeWorkflowListSkypeWorkflowsError,
  type SkypeWorkflowListSkypeWorkflowsResponse,
  type SkypeWorkflowAddSkypeWorkflowData,
  type SkypeWorkflowAddSkypeWorkflowError,
  type SkypeWorkflowAddSkypeWorkflowResponse,
  type SkypeWorkflowGetSkypeWorkflowDetailsData,
  type SkypeWorkflowGetSkypeWorkflowDetailsError,
  type SkypeWorkflowGetSkypeWorkflowDetailsResponse,
  type SkypeWorkflowDeleteSkypeWorkflowData,
  type SkypeWorkflowDeleteSkypeWorkflowError,
  type SkypeWorkflowDeleteSkypeWorkflowResponse,
  type SkypeWorkflowGetSkypeWorkflowSettingsData,
  type SkypeWorkflowGetSkypeWorkflowSettingsError,
  type SkypeWorkflowGetSkypeWorkflowSettingsResponse,
  type SkypeWorkflowUpdateSkypeWorkflowSettingsData,
  type SkypeWorkflowUpdateSkypeWorkflowSettingsError,
  type SkypeWorkflowUpdateSkypeWorkflowSettingsResponse,
  type SkypeWorkflowUpdateWorkflowActivationStatusData,
  type SkypeWorkflowUpdateWorkflowActivationStatusError,
  type SkypeWorkflowUpdateWorkflowActivationStatusResponse,
  type SkypeWorkflowUpdateWorkflowFederationStatusData,
  type SkypeWorkflowUpdateWorkflowFederationStatusError,
  type SkypeWorkflowUpdateWorkflowFederationStatusResponse,
  type SkypeWorkflowUpdateWorkflowAnonymityStatusData,
  type SkypeWorkflowUpdateWorkflowAnonymityStatusError,
  type SkypeWorkflowUpdateWorkflowAnonymityStatusResponse,
  type SkypeWorkflowUpdateWorkflowIvrSettingsData,
  type SkypeWorkflowUpdateWorkflowIvrSettingsError,
  type SkypeWorkflowUpdateWorkflowIvrSettingsResponse,
  type SkypeServerGetServerRegistrarPoolsData,
  type SkypeServerGetServerRegistrarPoolsError,
  type SkypeServerGetServerRegistrarPoolsResponse,
  type SkypeServerGetUserAssignedServerPoolsData,
  type SkypeServerGetUserAssignedServerPoolsError,
  type SkypeServerGetUserAssignedServerPoolsResponse,
  type SkypeServerGetServerTimeZonesData,
  type SkypeServerGetServerTimeZonesError,
  type SkypeServerGetServerTimeZonesResponse,
  type SkypeServerListUserLineUrisData,
  type SkypeServerListUserLineUrisError,
  type SkypeServerListUserLineUrisResponse,
  type SkypeServerGetLineUriDetailsData,
  type SkypeServerGetLineUriDetailsError,
  type SkypeServerGetLineUriDetailsResponse,
  type SkypeServerGetFederatedDomainsData,
  type SkypeServerGetFederatedDomainsError,
  type SkypeServerGetFederatedDomainsResponse,
  type SkypeServerGetSkypeUserPoliciesData,
  type SkypeServerGetSkypeUserPoliciesError,
  type SkypeServerGetSkypeUserPoliciesResponse,
  type SkypeServerGetServerApplicationServicesData,
  type SkypeServerGetServerApplicationServicesError,
  type SkypeServerGetServerApplicationServicesResponse,
  type SkypeServerGetUserAssignedApplicationServicesData,
  type SkypeServerGetUserAssignedApplicationServicesError,
  type SkypeServerGetUserAssignedApplicationServicesResponse,
  type VirtualMachineListVirtualMachinesData,
  type VirtualMachineListVirtualMachinesError,
  type VirtualMachineListVirtualMachinesResponse,
  type VirtualMachineAddVirtualMachineData,
  type VirtualMachineAddVirtualMachineError,
  type VirtualMachineAddVirtualMachineResponse,
  type VirtualMachineGetVirtualMachineDetailsData,
  type VirtualMachineGetVirtualMachineDetailsError,
  type VirtualMachineGetVirtualMachineDetailsResponse,
  type VirtualMachineUpdateVirtualMachineData,
  type VirtualMachineUpdateVirtualMachineError,
  type VirtualMachineUpdateVirtualMachineResponse,
  type VirtualMachineDeleteVirtualMachineData,
  type VirtualMachineDeleteVirtualMachineError,
  type VirtualMachineDeleteVirtualMachineResponse,
  type VirtualMachineUpdateVlanData,
  type VirtualMachineUpdateVlanError,
  type VirtualMachineUpdateVlanResponse,
  type VirtualMachineSystemVirtualMachinesListData,
  type VirtualMachineSystemVirtualMachinesListError,
  type VirtualMachineSystemVirtualMachinesListResponse,
  type VirtualMachineGetSystemVirtualMachineSettingsData,
  type VirtualMachineGetSystemVirtualMachineSettingsError,
  type VirtualMachineGetSystemVirtualMachineSettingsResponse,
  type VirtualMachineGetVirtualMachineIpAddressesData,
  type VirtualMachineGetVirtualMachineIpAddressesError,
  type VirtualMachineGetVirtualMachineIpAddressesResponse,
  type VirtualMachineAssignVmIpAddressesData,
  type VirtualMachineAssignVmIpAddressesError,
  type VirtualMachineAssignVmIpAddressesResponse,
  type VirtualMachineDeleteVmAssignedIpAddressData,
  type VirtualMachineDeleteVmAssignedIpAddressError,
  type VirtualMachineDeleteVmAssignedIpAddressResponse,
  type VirtualMachineGetAllSnapShotsData,
  type VirtualMachineGetAllSnapShotsError,
  type VirtualMachineGetAllSnapShotsResponse,
  type VirtualMachineTakeSnapShotData,
  type VirtualMachineTakeSnapShotError,
  type VirtualMachineTakeSnapShotResponse,
  type VirtualMachineApplySnapShotData,
  type VirtualMachineApplySnapShotError,
  type VirtualMachineApplySnapShotResponse,
  type VirtualMachineGetSnapShotDetailData,
  type VirtualMachineGetSnapShotDetailError,
  type VirtualMachineGetSnapShotDetailResponse,
  type VirtualMachineDeleteSnapShotData,
  type VirtualMachineDeleteSnapShotError,
  type VirtualMachineDeleteSnapShotResponse,
  type VirtualMachineChangePasswordData,
  type VirtualMachineChangePasswordError,
  type VirtualMachineChangePasswordResponse,
  type VirtualMachineStartVirtualMachineData,
  type VirtualMachineStartVirtualMachineError,
  type VirtualMachineStartVirtualMachineResponse,
  type VirtualMachinePauseVirtualMachineData,
  type VirtualMachinePauseVirtualMachineError,
  type VirtualMachinePauseVirtualMachineResponse,
  type VirtualMachineResumeVirtualMachineData,
  type VirtualMachineResumeVirtualMachineError,
  type VirtualMachineResumeVirtualMachineResponse,
  type VirtualMachineRebootVirtualMachineData,
  type VirtualMachineRebootVirtualMachineError,
  type VirtualMachineRebootVirtualMachineResponse,
  type VirtualMachineShutdownVirtualMachineData,
  type VirtualMachineShutdownVirtualMachineError,
  type VirtualMachineShutdownVirtualMachineResponse,
  type VirtualMachineImportVirtualMachineData,
  type VirtualMachineImportVirtualMachineError,
  type VirtualMachineImportVirtualMachineResponse,
  type VirtualMachineTransferVirtualMachineData,
  type VirtualMachineTransferVirtualMachineError,
  type VirtualMachineTransferVirtualMachineResponse,
  type VirtualMachineGetVirtualMachineCurrentStateData,
  type VirtualMachineGetVirtualMachineCurrentStateError,
  type VirtualMachineGetVirtualMachineCurrentStateResponse,
  type VirtualMachineFetchMachinePasswordData,
  type VirtualMachineFetchMachinePasswordError,
  type VirtualMachineFetchMachinePasswordResponse,
  type ResourceGetAllBaseOsTypesError,
  type ResourceGetAllBaseOsTypesResponse,
  type VlaNsGetAllVlaNsData,
  type VlaNsGetAllVlaNsError,
  type VlaNsGetAllVlaNsResponse,
  type OsTemplatesGetAllOsTemplatesData,
  type OsTemplatesGetAllOsTemplatesError,
  type OsTemplatesGetAllOsTemplatesResponse,
  ActiveDirectoryObjectGetObjectAccountSettingsResponseTransformer,
  MessageCenterAddNewMessageResponseTransformer,
  MessageCenterGetMessageDetailsResponseTransformer,
  MessageCenterUpdateMessageStatusResponseTransformer,
  MessageCenterGetSentMessagesResponseTransformer,
  MessageCenterGetReceivedMessagesResponseTransformer,
  MessageCenterMessageRepliesResponseTransformer,
  MessageCenterAddMessageReplyResponseTransformer,
  TicketsGetAllTicketsResponseTransformer,
  TicketsAddTicketResponseTransformer,
  TicketsGetTicketDetailResponseTransformer,
  TicketsUpdateTicketResponseTransformer,
  TicketsGetTicketReplyResponseTransformer,
  TicketsReplyTicketResponseTransformer,
  SoldAddOnsGetAllSoldAddOnsResponseTransformer,
  SoldAddOnsGetSoldAddonDetailsResponseTransformer,
  SoldPlanGetAllSoldPlansResponseTransformer,
  SoldPlanAddSoldPlanResponseTransformer,
  SoldPlanGetSoldPlanDetailsResponseTransformer,
  SubscriptionsGetPurchasedPlanDetailsResponseTransformer,
  SubscriptionsGetAllPurchasedPlansResponseTransformer,
  DatabasesListAllDatabaseTasksResponseTransformer,
  DatabasesBackupDatabaseResponseTransformer,
  DatabasesRestoreDatabaseResponseTransformer,
  WebsiteIoGetAllFilesAndFoldersResponseTransformer,
  WebsitesGetAllWebsitesResponseTransformer,
  WebsitesAddWebsiteResponseTransformer,
  WebsitesGetWebsiteDetailsResponseTransformer,
  WebsitesEditWebsiteResponseTransformer,
  RolesGetAllServersResponseTransformer,
  PlanGetAllPlansResponseTransformer,
  PlanAddPlanResponseTransformer,
  PlanGetPlanDetailsResponseTransformer,
  PlanUpdatePlanResponseTransformer,
  OrganizationsGetAllActiveDirectoryOrganizationsResponseTransformer,
  ExgMailboxGetMailboxAutoReplyConfigurationResponseTransformer,
  VirtualMachineGetAllSnapShotsResponseTransformer,
  VirtualMachineTakeSnapShotResponseTransformer,
  VirtualMachineGetSnapShotDetailResponseTransformer,
} from './types.gen';

export const client = createClient(createConfig());

/**
 * Add New User
 * The method will add new active directory user and will return new user details.
 */
export const activeDirectoryObjectAddActiveDirectoryUser = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ActiveDirectoryObjectAddActiveDirectoryUserData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    ActiveDirectoryObjectAddActiveDirectoryUserResponse,
    ActiveDirectoryObjectAddActiveDirectoryUserError
  >({
    ...options,
    url: 'active-directory/organizations/{organizationId}/users',
  });
};

/**
 * Change User Password
 * The method will update the password settings of active directory user.
 */
export const activeDirectoryObjectChangeAdUserPassword = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ActiveDirectoryObjectChangeAdUserPasswordData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ActiveDirectoryObjectChangeAdUserPasswordResponse,
    ActiveDirectoryObjectChangeAdUserPasswordError
  >({
    ...options,
    url: '/active-directory/organizations/{organizationId}/users/password',
  });
};

/**
 * Enable/Disable User
 * The method will toggle the state of active directory user.
 */
export const activeDirectoryObjectToggleAdUserState = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ActiveDirectoryObjectToggleAdUserStateData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ActiveDirectoryObjectToggleAdUserStateResponse,
    ActiveDirectoryObjectToggleAdUserStateError
  >({
    ...options,
    url: '/active-directory/organizations/{organizationId}/users/enable-disable',
  });
};

/**
 * Get Organization Objects
 * The method will retrieve the list of organization objects.
 */
export const activeDirectoryGetOrganizationObjects = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ActiveDirectoryGetOrganizationObjectsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ActiveDirectoryGetOrganizationObjectsResponse,
    ActiveDirectoryGetOrganizationObjectsError
  >({
    ...options,
    url: '/active-directory/organizations/{organizationId}/objects',
  });
};

/**
 * Delete Organization Objects
 * The method will delete organization objects provided in list.
 */
export const activeDirectoryDeleteMultipleObjects = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ActiveDirectoryDeleteMultipleObjectsData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ActiveDirectoryDeleteMultipleObjectsResponse,
    ActiveDirectoryDeleteMultipleObjectsError
  >({
    ...options,
    url: '/active-directory/organizations/{organizationId}/objects',
  });
};

/**
 * Get Object Account Settings
 * The method will retrieve the account expiry details.
 */
export const activeDirectoryObjectGetObjectAccountSettings = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ActiveDirectoryObjectGetObjectAccountSettingsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ActiveDirectoryObjectGetObjectAccountSettingsResponse,
    ActiveDirectoryObjectGetObjectAccountSettingsError
  >({
    ...options,
    url: '/active-directory/organizations/{organizationId}/objects/account',
    responseTransformer:
      ActiveDirectoryObjectGetObjectAccountSettingsResponseTransformer,
  });
};

/**
 * Update Object Account Settings
 * The method will update the account expiry settings of user.
 */
export const activeDirectoryObjectSetObjectAccountSettings = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ActiveDirectoryObjectSetObjectAccountSettingsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ActiveDirectoryObjectSetObjectAccountSettingsResponse,
    ActiveDirectoryObjectSetObjectAccountSettingsError
  >({
    ...options,
    url: '/active-directory/organizations/{organizationId}/objects/account',
  });
};

/**
 * Update Object Details
 * The method will update the object protection from accidental delete.
 */
export const activeDirectoryObjectSetObjectDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ActiveDirectoryObjectSetObjectDetailsData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ActiveDirectoryObjectSetObjectDetailsResponse,
    ActiveDirectoryObjectSetObjectDetailsError
  >({
    ...options,
    url: '/active-directory/organizations/{organizationId}/objects/details',
  });
};

/**
 * Get Object General Properties
 * The method will retrieve the general properties of active directory object.
 */
export const activeDirectoryObjectGetAdObjectGeneralProperties = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ActiveDirectoryObjectGetAdObjectGeneralPropertiesData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ActiveDirectoryObjectGetAdObjectGeneralPropertiesResponse,
    ActiveDirectoryObjectGetAdObjectGeneralPropertiesError
  >({
    ...options,
    url: '/active-directory/organizations/{organizationId}/objects/general-profile',
  });
};

/**
 * Update Object General Properties
 * The method will update the general properties of active directory object.
 */
export const activeDirectoryObjectUpdateAdObjectGeneralProperties = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ActiveDirectoryObjectUpdateAdObjectGeneralPropertiesData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ActiveDirectoryObjectUpdateAdObjectGeneralPropertiesResponse,
    ActiveDirectoryObjectUpdateAdObjectGeneralPropertiesError
  >({
    ...options,
    url: '/active-directory/organizations/{organizationId}/objects/general-profile',
  });
};

/**
 * Get Object Membership Detail
 * The method will retrieve the list of groups for which object has membership.
 */
export const activeDirectoryObjectGetObjectMemberOfDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ActiveDirectoryObjectGetObjectMemberOfDetailsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ActiveDirectoryObjectGetObjectMemberOfDetailsResponse,
    ActiveDirectoryObjectGetObjectMemberOfDetailsError
  >({
    ...options,
    url: '/active-directory/organizations/{organizationId}/objects/memberof',
  });
};

/**
 * Update Object Membership
 * The method will add object in those groups which are provided in list.
 */
export const activeDirectoryObjectUpdateObjectMemberOfDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ActiveDirectoryObjectUpdateObjectMemberOfDetailsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ActiveDirectoryObjectUpdateObjectMemberOfDetailsResponse,
    ActiveDirectoryObjectUpdateObjectMemberOfDetailsError
  >({
    ...options,
    url: '/active-directory/organizations/{organizationId}/objects/memberof',
  });
};

/**
 * Move Active Directory Object.
 * The method will move the objects from one organizational unit to other.
 */
export const activeDirectoryObjectMoveObjectToOu = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ActiveDirectoryObjectMoveObjectToOuData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ActiveDirectoryObjectMoveObjectToOuResponse,
    ActiveDirectoryObjectMoveObjectToOuError
  >({
    ...options,
    url: '/active-directory/organizations/{organizationId}/objects/move',
  });
};

/**
 * Get Group Members
 * The method will retrieve the list of memebers of group.
 */
export const activeDirectoryObjectGetGroupMembers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ActiveDirectoryObjectGetGroupMembersData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ActiveDirectoryObjectGetGroupMembersResponse,
    ActiveDirectoryObjectGetGroupMembersError
  >({
    ...options,
    url: '/active-directory/organizations/{organizationId}/groups/members',
  });
};

/**
 * Update Group Members
 * The method will update the members of group.
 */
export const activeDirectoryObjectUpdateGroupMembers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ActiveDirectoryObjectUpdateGroupMembersData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ActiveDirectoryObjectUpdateGroupMembersResponse,
    ActiveDirectoryObjectUpdateGroupMembersError
  >({
    ...options,
    url: '/active-directory/organizations/{organizationId}/groups/members',
  });
};

/**
 * Get Group Admin
 * The method will retrieve the admin of group.
 */
export const activeDirectoryObjectGetGroupAdmin = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ActiveDirectoryObjectGetGroupAdminData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ActiveDirectoryObjectGetGroupAdminResponse,
    ActiveDirectoryObjectGetGroupAdminError
  >({
    ...options,
    url: '/active-directory/organizations/{organizationId}/groups/admin',
  });
};

/**
 * Update Group Admin
 * The method will update the admin of group.
 */
export const activeDirectoryObjectUpdateGroupAdmin = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ActiveDirectoryObjectUpdateGroupAdminData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ActiveDirectoryObjectUpdateGroupAdminResponse,
    ActiveDirectoryObjectUpdateGroupAdminError
  >({
    ...options,
    url: '/active-directory/organizations/{organizationId}/groups/admin',
  });
};

/**
 * Get Token Details
 * Get Token Details, operation will return you complete token details. Tokens are used for authentication.
 */
export const tokenGetTokenDetails = <ThrowOnError extends boolean = false>(
  options: Options<TokenGetTokenDetailsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    TokenGetTokenDetailsResponse,
    TokenGetTokenDetailsError
  >({
    ...options,
    url: '/auth-tokens',
  });
};

/**
 * Generate Token
 * Generate token, method generates token by taking user credentials.
 */
export const tokenGenerateToken = <ThrowOnError extends boolean = false>(
  options: Options<TokenGenerateTokenData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    TokenGenerateTokenResponse,
    TokenGenerateTokenError
  >({
    ...options,
    url: '/auth-tokens',
  });
};

/**
 * Revoke Token
 * Delete Token, it will return you the status of the operation.
 */
export const tokenRevokeToken = <ThrowOnError extends boolean = false>(
  options: Options<TokenRevokeTokenData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    TokenRevokeTokenResponse,
    TokenRevokeTokenError
  >({
    ...options,
    url: '/auth-tokens',
  });
};

/**
 * Get all Users
 * The method fetches a list of all users.
 */
export const usersGetAllUsers = <ThrowOnError extends boolean = false>(
  options?: Options<UsersGetAllUsersData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    UsersGetAllUsersResponse,
    UsersGetAllUsersError
  >({
    ...options,
    url: '/panel-users',
  });
};

/**
 * Add a new User
 * Add new user, method will return you new user id.
 */
export const usersAddUser = <ThrowOnError extends boolean = false>(
  options: Options<UsersAddUserData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    UsersAddUserResponse,
    UsersAddUserError
  >({
    ...options,
    url: '/panel-users',
  });
};

/**
 * Get User Details
 * Get complete user details, method will return you complete details of a user.
 */
export const usersGetUserDetails = <ThrowOnError extends boolean = false>(
  options: Options<UsersGetUserDetailsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    UsersGetUserDetailsResponse,
    UsersGetUserDetailsError
  >({
    ...options,
    url: '/panel-users/{userId}',
  });
};

/**
 * Update User Details
 * Update user details, method will return you user's updated details.
 */
export const usersUpdateUser = <ThrowOnError extends boolean = false>(
  options: Options<UsersUpdateUserData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    UsersUpdateUserResponse,
    UsersUpdateUserError
  >({
    ...options,
    url: '/panel-users/{userId}',
  });
};

/**
 * Delete User
 * Delete user, method will return you the operation status.
 */
export const usersDeleteUser = <ThrowOnError extends boolean = false>(
  options: Options<UsersDeleteUserData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    UsersDeleteUserResponse,
    UsersDeleteUserError
  >({
    ...options,
    url: '/panel-users/{userId}',
  });
};

/**
 * Disable User
 * Disable user, method will return you the operation status.
 */
export const usersDisableUser = <ThrowOnError extends boolean = false>(
  options: Options<UsersDisableUserData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    UsersDisableUserResponse,
    UsersDisableUserError
  >({
    ...options,
    url: '/panel-users/{userId}/disable',
  });
};

/**
 * Enable User
 * Enable user, method will return you the operation status.
 */
export const usersEnableUser = <ThrowOnError extends boolean = false>(
  options: Options<UsersEnableUserData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    UsersEnableUserResponse,
    UsersEnableUserError
  >({
    ...options,
    url: '/panel-users/{userId}/enable',
  });
};

/**
 * Change Password
 * Change user pasword, method will return you the operation status.
 */
export const usersChangePassword = <ThrowOnError extends boolean = false>(
  options: Options<UsersChangePasswordData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    UsersChangePasswordResponse,
    UsersChangePasswordError
  >({
    ...options,
    url: '/panel-users/{userId}/change-password',
  });
};

/**
 * Check Username Availability
 * Check username availablity, method verifies if the username is available for use.
 */
export const usersIsLoginNameAvailable = <ThrowOnError extends boolean = false>(
  options: Options<UsersIsLoginNameAvailableData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    UsersIsLoginNameAvailableResponse,
    UsersIsLoginNameAvailableError
  >({
    ...options,
    url: '/panel-users/user-names/{userName}',
  });
};

/**
 * Get User Profile Details
 * Get user profile details, method will return you the user profile details.
 */
export const usersGetUserProfileDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<UsersGetUserProfileDetailsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    UsersGetUserProfileDetailsResponse,
    UsersGetUserProfileDetailsError
  >({
    ...options,
    url: '/panel-users/{userId}/general-profile',
  });
};

/**
 * Update User Profile
 * Update user profile details, method will return you the operation status.
 */
export const usersUpdateUserProfile = <ThrowOnError extends boolean = false>(
  options: Options<UsersUpdateUserProfileData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    UsersUpdateUserProfileResponse,
    UsersUpdateUserProfileError
  >({
    ...options,
    url: '/panel-users/{userId}/general-profile',
  });
};

/**
 * Get User Quota Report
 * Get user quota report, method will return users quota and all its resources.
 */
export const reportGetUserQuotaReport = <ThrowOnError extends boolean = false>(
  options?: Options<ReportGetUserQuotaReportData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ReportGetUserQuotaReportResponse,
    ReportGetUserQuotaReportError
  >({
    ...options,
    url: '/reports/quota',
  });
};

/**
 * Get Consumed Resources
 * Get consumed resources report, method will return you resources consumption report.
 */
export const reportGetConsumedResources = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ReportGetConsumedResourcesResponse,
    ReportGetConsumedResourcesError
  >({
    ...options,
    url: '/reports/quota/consumed',
  });
};

/**
 * Get Daily Resource Usage
 * Get daily consumed report, method will return you consumption report for last 15 days.
 */
export const reportGetDailyResourcesUsage = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ReportGetDailyResourcesUsageResponse,
    ReportGetDailyResourcesUsageError
  >({
    ...options,
    url: '/reports/quota/daily-consumed',
  });
};

/**
 * Get Monthly Resource Usage
 * Get monthly consumed report, method will return you consumption report for last 12 months.
 */
export const reportGetMonthlyResourcesUsage = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ReportGetMonthlyResourcesUsageResponse,
    ReportGetMonthlyResourcesUsageError
  >({
    ...options,
    url: '/reports/quota/monthly-consumed',
  });
};

/**
 * Get Panel Summary
 * Get panel summary, method will return you panel summary.
 */
export const reportGetPanelStats = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ReportGetPanelStatsResponse,
    ReportGetPanelStatsError
  >({
    ...options,
    url: '/reports/panel-summary',
  });
};

/**
 * Disk Usage Users List
 * Get disk usage users list, method will return you list of users consuming disk space.
 */
export const reportDiskUsageUsersList = <ThrowOnError extends boolean = false>(
  options?: Options<ReportDiskUsageUsersListData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ReportDiskUsageUsersListResponse,
    ReportDiskUsageUsersListError
  >({
    ...options,
    url: '/reports/disk-usage-report',
  });
};

/**
 * Get Monthly Disk Usage
 * Get monthly disk usage report, method will return you monthly disk usage report.
 */
export const reportDiskUsageReportMonthly = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<ReportDiskUsageReportMonthlyData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ReportDiskUsageReportMonthlyResponse,
    ReportDiskUsageReportMonthlyError
  >({
    ...options,
    url: '/reports/disk-usage-report/monthly',
  });
};

/**
 * Get Total Disk Usage
 * Get overall disk usage report, method will return you overall disk usage report.
 */
export const reportDiskUsageReportTotal = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<ReportDiskUsageReportTotalData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ReportDiskUsageReportTotalResponse,
    ReportDiskUsageReportTotalError
  >({
    ...options,
    url: '/reports/disk-usage-report/total',
  });
};

/**
 * Get Monthly Bandwidth Usage
 * Get monthly bandwidth usage report, method will return you monthly bandwidth usage report.
 */
export const reportBandwidthUsageReportMonthly = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<ReportBandwidthUsageReportMonthlyData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ReportBandwidthUsageReportMonthlyResponse,
    ReportBandwidthUsageReportMonthlyError
  >({
    ...options,
    url: '/reports/bandwidth-usage-report/monthly',
  });
};

/**
 * Get Total Bandwidth Usage
 * Get overall bandwidth usage report, method will return you overall bandwidth usage report.
 */
export const reportBandwidthUsageReportTotal = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<ReportBandwidthUsageReportTotalData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ReportBandwidthUsageReportTotalResponse,
    ReportBandwidthUsageReportTotalError
  >({
    ...options,
    url: '/reports/bandwidth-usage-report/total',
  });
};

/**
 * Bandwidth Usage Users List
 * Get bandwidth usage users list, method will return you list of users consuming bandwidth.
 */
export const configurationsBandwidthUsageUsersList = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<ConfigurationsBandwidthUsageUsersListData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ConfigurationsBandwidthUsageUsersListResponse,
    ConfigurationsBandwidthUsageUsersListError
  >({
    ...options,
    url: '/reports/bandwidth-usage-report',
  });
};

/**
 * Get all States
 * Get all states, method will return you all states of a country.
 */
export const settingsGetAllStates = <ThrowOnError extends boolean = false>(
  options: Options<SettingsGetAllStatesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SettingsGetAllStatesResponse,
    SettingsGetAllStatesError
  >({
    ...options,
    url: '/system-entities/states/{countryId}',
  });
};

/**
 * Get all Countries
 * Get all countries, method will return you all countries.
 */
export const settingsGetAllCountries = <ThrowOnError extends boolean = false>(
  options?: Options<SettingsGetAllCountriesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SettingsGetAllCountriesResponse,
    SettingsGetAllCountriesError
  >({
    ...options,
    url: '/system-entities/countries',
  });
};

/**
 * Get all Languages
 * Get all languages, method will return you all languages.
 */
export const settingsGetAllLanguages = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SettingsGetAllLanguagesResponse,
    SettingsGetAllLanguagesError
  >({
    ...options,
    url: '/system-entities/languages',
  });
};

/**
 * Get Language Details
 * Get language details, method will return you language details.
 */
export const settingsGetAllLanguagesByLangName = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SettingsGetAllLanguagesByLangNameData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SettingsGetAllLanguagesByLangNameResponse,
    SettingsGetAllLanguagesByLangNameError
  >({
    ...options,
    url: '/system-entities/languages/{langName}',
  });
};

/**
 * Get Quota Types
 * Get resource quota types, method will return you resource quota types.
 */
export const settingsGetAllResourceQuotaTypes = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SettingsGetAllResourceQuotaTypesResponse,
    SettingsGetAllResourceQuotaTypesError
  >({
    ...options,
    url: '/system-entities/resource-quota-types',
  });
};

/**
 * Get Resource Provisioning Types
 * Get resource provisioning types, method will return you resource provisioning types.
 */
export const settingsGetAllResourceProvisioningTypes = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SettingsGetAllResourceProvisioningTypesResponse,
    SettingsGetAllResourceProvisioningTypesError
  >({
    ...options,
    url: '/system-entities/resource-provisioning-types',
  });
};

/**
 * Get Virtual Machine Status Types
 * Get virtual machine types, method will return you virtual machine types.
 */
export const settingsGetVmStatusTypes = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SettingsGetVmStatusTypesResponse,
    SettingsGetVmStatusTypesError
  >({
    ...options,
    url: '/system-entities/vm-status-types',
  });
};

/**
 * Get Ticket Status
 * Get trouble ticket status types, method will return you list of trouble ticket status types.
 */
export const settingsGetTicketStatus = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SettingsGetTicketStatusResponse,
    SettingsGetTicketStatusError
  >({
    ...options,
    url: '/system-entities/ticket-statuses',
  });
};

/**
 * Get Exchange Mailbox Types
 * Get exchange mailbox types, method will return you list of exchange mailbox types.
 */
export const settingsGetExchangeMailboxTypes = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SettingsGetExchangeMailboxTypesResponse,
    SettingsGetExchangeMailboxTypesError
  >({
    ...options,
    url: '/system-entities/exchange/mailbox-types',
  });
};

/**
 * Get Resource Mailbox Types
 * Get exchange resource mailbox types, method will return you list of exchange resource mailbox types.
 */
export const settingsGetResourceMailboxTypes = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SettingsGetResourceMailboxTypesResponse,
    SettingsGetResourceMailboxTypesError
  >({
    ...options,
    url: '/system-entities/exchange/resource-mailbox-types',
  });
};

/**
 * Get Exchange Mail Domain Types
 * Get exchange mail domain types, method will return you list of exchange mail domain types.
 */
export const settingsGetExchangeMailDomainTypes = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SettingsGetExchangeMailDomainTypesResponse,
    SettingsGetExchangeMailDomainTypesError
  >({
    ...options,
    url: '/system-entities/exchange/mail-domain-types',
  });
};

/**
 * Get Exchange Recpients Types
 * Get exchange recipients types, method will return you list of exchange recipients types.
 */
export const settingsGetExchangeRecpientsTypes = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SettingsGetExchangeRecpientsTypesResponse,
    SettingsGetExchangeRecpientsTypesError
  >({
    ...options,
    url: '/system-entities/exchange/recipient-types',
  });
};

/**
 * Get Exchange Blocked Domain Rule Recipient Location
 * Get exchange blocked domain rule recipient location, method will return you list of exchange blocked domain rule recipient locations.
 */
export const settingsGetExchangeBlockedDomainRuleRecipientLocation = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SettingsGetExchangeBlockedDomainRuleRecipientLocationResponse,
    SettingsGetExchangeBlockedDomainRuleRecipientLocationError
  >({
    ...options,
    url: '/system-entities/exchange/recipient-locations',
  });
};

/**
 * Get Public Folder Types
 * Get public folder types, method will return you list of public folder types.
 */
export const settingsGetPublicFolderTypes = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SettingsGetPublicFolderTypesResponse,
    SettingsGetPublicFolderTypesError
  >({
    ...options,
    url: '/system-entities/exchange/public-folder-types',
  });
};

/**
 * Get Telephony Option Types
 * Get telephony options, method will return you list of telephony option types.
 */
export const settingsGetTelephonyOptions = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SettingsGetTelephonyOptionsResponse,
    SettingsGetTelephonyOptionsError
  >({
    ...options,
    url: '/system-entities/skype/telephony-options',
  });
};

/**
 * Get Routing Method Types
 * Get routing methods, method will return you list of routing method types.
 */
export const settingsGetRoutingMethods = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SettingsGetRoutingMethodsResponse,
    SettingsGetRoutingMethodsError
  >({
    ...options,
    url: '/system-entities/skype/routing-methods',
  });
};

/**
 * Get Participation Policy Types
 * Get participation policy, method will return you list of participation policy types.
 */
export const settingsGetParticipationPolicy = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SettingsGetParticipationPolicyResponse,
    SettingsGetParticipationPolicyError
  >({
    ...options,
    url: '/system-entities/skype/participation-policy-types',
  });
};

/**
 * Get Response Group Call Actions
 * Get response group call actions, method will return you list of response group call actions.
 */
export const settingsGetResponseGroupCallActions = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SettingsGetResponseGroupCallActionsResponse,
    SettingsGetResponseGroupCallActionsError
  >({
    ...options,
    url: '/system-entities/skype/response-group-call-actions',
  });
};

/**
 * Get Workflow Call Action Types
 * Get workflow call actions, method will return you list of workflow call action types.
 */
export const settingsGetWorkflowCallActions = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SettingsGetWorkflowCallActionsResponse,
    SettingsGetWorkflowCallActionsError
  >({
    ...options,
    url: '/system-entities/skype/workflow-call-actions',
  });
};

/**
 * Get Workflow Languages
 * Get workflow languages, method will return you list of workflow languages.
 */
export const settingsGetWorkflowLanguages = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SettingsGetWorkflowLanguagesResponse,
    SettingsGetWorkflowLanguagesError
  >({
    ...options,
    url: '/system-entities/skype/workflow-languages',
  });
};

/**
 * Create a new Message
 * Add new message, method will return you recently added message details.
 */
export const messageCenterAddNewMessage = <
  ThrowOnError extends boolean = false,
>(
  options: Options<MessageCenterAddNewMessageData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    MessageCenterAddNewMessageResponse,
    MessageCenterAddNewMessageError
  >({
    ...options,
    url: '/message-center',
    responseTransformer: MessageCenterAddNewMessageResponseTransformer,
  });
};

/**
 * Get Message Details
 * Get message details, method will return you complete message details.
 */
export const messageCenterGetMessageDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<MessageCenterGetMessageDetailsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    MessageCenterGetMessageDetailsResponse,
    MessageCenterGetMessageDetailsError
  >({
    ...options,
    url: '/message-center/{messageId}',
    responseTransformer: MessageCenterGetMessageDetailsResponseTransformer,
  });
};

/**
 * Update Message Status
 * Update message status, method will return you updated message details.
 */
export const messageCenterUpdateMessageStatus = <
  ThrowOnError extends boolean = false,
>(
  options: Options<MessageCenterUpdateMessageStatusData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    MessageCenterUpdateMessageStatusResponse,
    MessageCenterUpdateMessageStatusError
  >({
    ...options,
    url: '/message-center/{messageId}',
    responseTransformer: MessageCenterUpdateMessageStatusResponseTransformer,
  });
};

/**
 * Delete Message
 * Delete message, method will return you operation status.
 */
export const messageCenterDeleteMessage = <
  ThrowOnError extends boolean = false,
>(
  options: Options<MessageCenterDeleteMessageData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    MessageCenterDeleteMessageResponse,
    MessageCenterDeleteMessageError
  >({
    ...options,
    url: '/message-center/{messageId}',
  });
};

/**
 * Get Sent Messages
 * Get sent message, method will return you list of sent messages.
 */
export const messageCenterGetSentMessages = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    MessageCenterGetSentMessagesResponse,
    MessageCenterGetSentMessagesError
  >({
    ...options,
    url: '/message-center/sent-messages',
    responseTransformer: MessageCenterGetSentMessagesResponseTransformer,
  });
};

/**
 * Get Received Messages
 * Get received message, method will return you list of received messages.
 */
export const messageCenterGetReceivedMessages = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    MessageCenterGetReceivedMessagesResponse,
    MessageCenterGetReceivedMessagesError
  >({
    ...options,
    url: '/message-center/received-messages',
    responseTransformer: MessageCenterGetReceivedMessagesResponseTransformer,
  });
};

/**
 * Get Message Replies
 * Get message replies, method will return you list of message replies.
 */
export const messageCenterMessageReplies = <
  ThrowOnError extends boolean = false,
>(
  options: Options<MessageCenterMessageRepliesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    MessageCenterMessageRepliesResponse,
    MessageCenterMessageRepliesError
  >({
    ...options,
    url: '/message-center/{messageId}/message-replies',
    responseTransformer: MessageCenterMessageRepliesResponseTransformer,
  });
};

/**
 * Add Message Reply
 * Add message reply, method will return you complete messages details with replies.
 */
export const messageCenterAddMessageReply = <
  ThrowOnError extends boolean = false,
>(
  options: Options<MessageCenterAddMessageReplyData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    MessageCenterAddMessageReplyResponse,
    MessageCenterAddMessageReplyError
  >({
    ...options,
    url: '/message-center/{messageId}/message-replies',
    responseTransformer: MessageCenterAddMessageReplyResponseTransformer,
  });
};

/**
 * Get Tickets Summary
 * Get all summary, method will return you complete ticket summary.
 */
export const ticketsGetAllStats = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    TicketsGetAllStatsResponse,
    TicketsGetAllStatsError
  >({
    ...options,
    url: '/tickets/summary',
  });
};

/**
 * Get all Tickets
 * Get all tickets, method will return you list of tickets.
 */
export const ticketsGetAllTickets = <ThrowOnError extends boolean = false>(
  options?: Options<TicketsGetAllTicketsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    TicketsGetAllTicketsResponse,
    TicketsGetAllTicketsError
  >({
    ...options,
    url: '/tickets',
    responseTransformer: TicketsGetAllTicketsResponseTransformer,
  });
};

/**
 * Create a new Ticket
 * Add new ticket, method will return you complete details of newly added ticket.
 */
export const ticketsAddTicket = <ThrowOnError extends boolean = false>(
  options: Options<TicketsAddTicketData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    TicketsAddTicketResponse,
    TicketsAddTicketError
  >({
    ...options,
    url: '/tickets',
    responseTransformer: TicketsAddTicketResponseTransformer,
  });
};

/**
 * Get Ticket Details
 * Get ticket details, method will return you ticket details.
 */
export const ticketsGetTicketDetail = <ThrowOnError extends boolean = false>(
  options: Options<TicketsGetTicketDetailData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    TicketsGetTicketDetailResponse,
    TicketsGetTicketDetailError
  >({
    ...options,
    url: '/tickets/{ticketId}',
    responseTransformer: TicketsGetTicketDetailResponseTransformer,
  });
};

/**
 * Update Ticket Details
 * Update ticket details, method will return you updated ticket details.
 */
export const ticketsUpdateTicket = <ThrowOnError extends boolean = false>(
  options: Options<TicketsUpdateTicketData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    TicketsUpdateTicketResponse,
    TicketsUpdateTicketError
  >({
    ...options,
    url: '/tickets/{ticketId}',
    responseTransformer: TicketsUpdateTicketResponseTransformer,
  });
};

/**
 * Delete Ticket
 * Delete ticket, method will return you operation status.
 */
export const ticketsDeleteTicket = <ThrowOnError extends boolean = false>(
  options: Options<TicketsDeleteTicketData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    TicketsDeleteTicketResponse,
    TicketsDeleteTicketError
  >({
    ...options,
    url: '/tickets/{ticketId}',
  });
};

/**
 * Get Ticket Replies
 * Get ticket replies, method will return you list of ticket replies.
 */
export const ticketsGetTicketReply = <ThrowOnError extends boolean = false>(
  options: Options<TicketsGetTicketReplyData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    TicketsGetTicketReplyResponse,
    TicketsGetTicketReplyError
  >({
    ...options,
    url: '/tickets/{ticketId}/replies',
    responseTransformer: TicketsGetTicketReplyResponseTransformer,
  });
};

/**
 * Add Ticket Reply
 * Reply ticket, method will return you complete details of a ticket with all its replies.
 */
export const ticketsReplyTicket = <ThrowOnError extends boolean = false>(
  options: Options<TicketsReplyTicketData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    TicketsReplyTicketResponse,
    TicketsReplyTicketError
  >({
    ...options,
    url: '/tickets/{ticketId}/replies',
    responseTransformer: TicketsReplyTicketResponseTransformer,
  });
};

/**
 * Add Ticket Attachment
 * Add ticket attachment, method will return complete list of attachments.
 */
export const ticketsAddTicketAttachment = <
  ThrowOnError extends boolean = false,
>(
  options: Options<TicketsAddTicketAttachmentData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    TicketsAddTicketAttachmentResponse,
    TicketsAddTicketAttachmentError
  >({
    ...options,
    url: '/tickets/{TicketId}/attachments',
  });
};

/**
 * Get all Attachments
 * Get all ticket attachments, method will return complete list of attachment files.
 */
export const ticketsGetAllAttachments = <ThrowOnError extends boolean = false>(
  options: Options<TicketsGetAllAttachmentsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    TicketsGetAllAttachmentsResponse,
    TicketsGetAllAttachmentsError
  >({
    ...options,
    url: '/tickets/{ticketId}/attachments',
  });
};

/**
 * Get Attachment Details
 * Get ticket attachment details, method will return complete attachment file details.
 */
export const ticketsGetAttachmentDetail = <
  ThrowOnError extends boolean = false,
>(
  options: Options<TicketsGetAttachmentDetailData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    TicketsGetAttachmentDetailResponse,
    TicketsGetAttachmentDetailError
  >({
    ...options,
    url: '/tickets/{ticketId}/attachments/{attachmentId}',
  });
};

/**
 * Get all Add-ons
 * Get all addons, method will return you list of addons.
 */
export const addOnsGetAllResources = <ThrowOnError extends boolean = false>(
  options?: Options<AddOnsGetAllResourcesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    AddOnsGetAllResourcesResponse,
    AddOnsGetAllResourcesError
  >({
    ...options,
    url: '/addons',
  });
};

/**
 * Add a new Add-on
 * Add addons, method will return you complete detials of recently added addon.
 */
export const addOnsAddResource = <ThrowOnError extends boolean = false>(
  options: Options<AddOnsAddResourceData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    AddOnsAddResourceResponse,
    AddOnsAddResourceError
  >({
    ...options,
    url: '/addons',
  });
};

/**
 * Get Add-on Details
 * Get addon details, method will return you complete details of addon.
 */
export const addOnsGetResourceDetails = <ThrowOnError extends boolean = false>(
  options: Options<AddOnsGetResourceDetailsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    AddOnsGetResourceDetailsResponse,
    AddOnsGetResourceDetailsError
  >({
    ...options,
    url: '/addons/{addonId}',
  });
};

/**
 * Update Add-on Details
 * Update addon, method will return you operation status.
 */
export const addOnsUpdateResource = <ThrowOnError extends boolean = false>(
  options: Options<AddOnsUpdateResourceData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    AddOnsUpdateResourceResponse,
    AddOnsUpdateResourceError
  >({
    ...options,
    url: '/addons/{addonId}',
  });
};

/**
 * Delete Add-on
 * Delete addon, method will return you operation status.
 */
export const addOnsDeleteResource = <ThrowOnError extends boolean = false>(
  options: Options<AddOnsDeleteResourceData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    AddOnsDeleteResourceResponse,
    AddOnsDeleteResourceError
  >({
    ...options,
    url: '/addons/{addonId}',
  });
};

/**
 * Get Base OS Types
 * Get base operating system types, method will return you list of base operating system types.
 */
export const addOnsGetBaseOsTypes = <ThrowOnError extends boolean = false>(
  options: Options<AddOnsGetBaseOsTypesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    AddOnsGetBaseOsTypesResponse,
    AddOnsGetBaseOsTypesError
  >({
    ...options,
    url: '/addons/components/{componentName}/properties',
  });
};

/**
 * Get all Sold Add-ons
 * Get all sold addons, method will return you list of sold addons.
 */
export const soldAddOnsGetAllSoldAddOns = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<SoldAddOnsGetAllSoldAddOnsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SoldAddOnsGetAllSoldAddOnsResponse,
    SoldAddOnsGetAllSoldAddOnsError
  >({
    ...options,
    url: '/sold-addons',
    responseTransformer: SoldAddOnsGetAllSoldAddOnsResponseTransformer,
  });
};

/**
 * Sell Add-on
 * Sell addon, method will return you operation status with recently sold addon details.
 */
export const soldAddOnsSellAddOn = <ThrowOnError extends boolean = false>(
  options: Options<SoldAddOnsSellAddOnData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    SoldAddOnsSellAddOnResponse,
    SoldAddOnsSellAddOnError
  >({
    ...options,
    url: '/sold-addons',
  });
};

/**
 * Get Sold Add-on Details
 * Get sold addon details, method will return you sold addon details.
 */
export const soldAddOnsGetSoldAddonDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SoldAddOnsGetSoldAddonDetailsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SoldAddOnsGetSoldAddonDetailsResponse,
    SoldAddOnsGetSoldAddonDetailsError
  >({
    ...options,
    url: '/sold-addons/{soldAddOnId}',
    responseTransformer: SoldAddOnsGetSoldAddonDetailsResponseTransformer,
  });
};

/**
 * Delete Sold Add-on
 * Delete sold addon, method will return you operation status.
 */
export const soldAddOnsDeleteSoldAddon = <ThrowOnError extends boolean = false>(
  options: Options<SoldAddOnsDeleteSoldAddonData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    SoldAddOnsDeleteSoldAddonResponse,
    SoldAddOnsDeleteSoldAddonError
  >({
    ...options,
    url: '/sold-addons/{soldAddOnId}',
  });
};

/**
 * Get all Composite Resources
 * Get all composite resources, method will return you list of all composite resources.
 */
export const compositeResourceGetAllCresources = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<CompositeResourceGetAllCresourcesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    CompositeResourceGetAllCresourcesResponse,
    CompositeResourceGetAllCresourcesError
  >({
    ...options,
    url: '/composite-resources',
  });
};

/**
 * Add a new Composite Resource
 * Add composite resource, method will return you complete details of recently added composite resource.
 */
export const compositeResourceAddCresource = <
  ThrowOnError extends boolean = false,
>(
  options: Options<CompositeResourceAddCresourceData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    CompositeResourceAddCresourceResponse,
    CompositeResourceAddCresourceError
  >({
    ...options,
    url: '/composite-resources',
  });
};

/**
 * Get Composite Resource Details
 * Get composite resource details, method will return you complete details of composite resource.
 */
export const compositeResourceGetCresourceDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<CompositeResourceGetCresourceDetailsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    CompositeResourceGetCresourceDetailsResponse,
    CompositeResourceGetCresourceDetailsError
  >({
    ...options,
    url: '/composite-resources/{cResourceId}',
  });
};

/**
 * Update Composite Resource Details
 * Update composite resource, method will return you updated details of composite resource.
 */
export const compositeResourceUpdateCresource = <
  ThrowOnError extends boolean = false,
>(
  options: Options<CompositeResourceUpdateCresourceData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    CompositeResourceUpdateCresourceResponse,
    CompositeResourceUpdateCresourceError
  >({
    ...options,
    url: '/composite-resources/{cResourceId}',
  });
};

/**
 * Delete Composite Resource
 * Delete composite resource, method will return you operation status.
 */
export const compositeResourceDeleteCresource = <
  ThrowOnError extends boolean = false,
>(
  options: Options<CompositeResourceDeleteCresourceData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    CompositeResourceDeleteCresourceResponse,
    CompositeResourceDeleteCresourceError
  >({
    ...options,
    url: '/composite-resources/{cResourceId}',
  });
};

/**
 * Get all Hosting Services
 * Get all hosting services, method will return you list of hosting services.
 */
export const hostingServicesGetAllHostingServices = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    HostingServicesGetAllHostingServicesResponse,
    HostingServicesGetAllHostingServicesError
  >({
    ...options,
    url: '/composite-resources/categories',
  });
};

/**
 * Get Provider Types
 * Get provider types, method will return you list of provider types.
 */
export const providersGetProviderTypes = <ThrowOnError extends boolean = false>(
  options?: Options<ProvidersGetProviderTypesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ProvidersGetProviderTypesResponse,
    ProvidersGetProviderTypesError
  >({
    ...options,
    url: '/providers',
  });
};

/**
 * Get all Sold Plans
 * Get all sold plans, method will return you list of sold plans.
 */
export const soldPlanGetAllSoldPlans = <ThrowOnError extends boolean = false>(
  options?: Options<SoldPlanGetAllSoldPlansData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SoldPlanGetAllSoldPlansResponse,
    SoldPlanGetAllSoldPlansError
  >({
    ...options,
    url: '/sold-plans',
    responseTransformer: SoldPlanGetAllSoldPlansResponseTransformer,
  });
};

/**
 * Sell Plan
 * Add sold plan, method will return you complete details of recently sold plan.
 */
export const soldPlanAddSoldPlan = <ThrowOnError extends boolean = false>(
  options: Options<SoldPlanAddSoldPlanData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    SoldPlanAddSoldPlanResponse,
    SoldPlanAddSoldPlanError
  >({
    ...options,
    url: '/sold-plans',
    responseTransformer: SoldPlanAddSoldPlanResponseTransformer,
  });
};

/**
 * Get Sold Plan Details
 * Get sold plan details, method will return you complete details of a sold plan.
 */
export const soldPlanGetSoldPlanDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SoldPlanGetSoldPlanDetailsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SoldPlanGetSoldPlanDetailsResponse,
    SoldPlanGetSoldPlanDetailsError
  >({
    ...options,
    url: '/sold-plans/{soldPlanId}',
    responseTransformer: SoldPlanGetSoldPlanDetailsResponseTransformer,
  });
};

/**
 * Update Sold Plan Details
 * Update sold plan, method will return you operation status.
 */
export const soldPlanUpDateSoldPlans = <ThrowOnError extends boolean = false>(
  options: Options<SoldPlanUpDateSoldPlansData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    SoldPlanUpDateSoldPlansResponse,
    SoldPlanUpDateSoldPlansError
  >({
    ...options,
    url: '/sold-plans/{soldPlanId}',
  });
};

/**
 * Delete Sold Plan
 * Delete sold plan, method will return you operation status.
 */
export const soldPlanDeleteSoldPlan = <ThrowOnError extends boolean = false>(
  options: Options<SoldPlanDeleteSoldPlanData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    SoldPlanDeleteSoldPlanResponse,
    SoldPlanDeleteSoldPlanError
  >({
    ...options,
    url: '/sold-plans/{soldPlanId}',
  });
};

/**
 * Get Subscription Details
 * Get subscription details, method will return you subscription details.
 */
export const subscriptionsGetPurchasedPlanDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SubscriptionsGetPurchasedPlanDetailsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SubscriptionsGetPurchasedPlanDetailsResponse,
    SubscriptionsGetPurchasedPlanDetailsError
  >({
    ...options,
    url: '/purchased-plans/{soldPlanId}',
    responseTransformer:
      SubscriptionsGetPurchasedPlanDetailsResponseTransformer,
  });
};

/**
 * Get all Subscriptions
 * Get all subscriptions, method will return you list of subscription.
 */
export const subscriptionsGetAllPurchasedPlans = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<SubscriptionsGetAllPurchasedPlansData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SubscriptionsGetAllPurchasedPlansResponse,
    SubscriptionsGetAllPurchasedPlansError
  >({
    ...options,
    url: '/purchased-plans',
    responseTransformer: SubscriptionsGetAllPurchasedPlansResponseTransformer,
  });
};

/**
 * Get all Custom Fields
 * List all custom fields, method will return you list of custom fields.
 */
export const customFieldsListAllCustomFields = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<CustomFieldsListAllCustomFieldsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    CustomFieldsListAllCustomFieldsResponse,
    CustomFieldsListAllCustomFieldsError
  >({
    ...options,
    url: '/panel-conf/custom-fields',
  });
};

/**
 * Get all Ticket Categories
 * Get all categories, method will return you list of ticket categories.
 */
export const ticketsGetAllCategory = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    TicketsGetAllCategoryResponse,
    TicketsGetAllCategoryError
  >({
    ...options,
    url: '/panel-conf/tickets/categories',
  });
};

/**
 * Get all DNS Zones
 * List all dns zones, method will return you list of dns zones.
 */
export const dnsListAllDnsZones = <ThrowOnError extends boolean = false>(
  options?: Options<DnsListAllDnsZonesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    DnsListAllDnsZonesResponse,
    DnsListAllDnsZonesError
  >({
    ...options,
    url: '/dns-zones',
  });
};

/**
 * Add a new DNS Zone
 * Add dns zone, method will return you complete details of recently added dns zone.
 */
export const dnsAddDnsZone = <ThrowOnError extends boolean = false>(
  options: Options<DnsAddDnsZoneData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    DnsAddDnsZoneResponse,
    DnsAddDnsZoneError
  >({
    ...options,
    url: '/dns-zones',
  });
};

/**
 * Get DNS Zone Details
 * Get dns zone details, method will return you complete details of dns zone.
 */
export const dnsGetDnsZoneDetail = <ThrowOnError extends boolean = false>(
  options: Options<DnsGetDnsZoneDetailData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    DnsGetDnsZoneDetailResponse,
    DnsGetDnsZoneDetailError
  >({
    ...options,
    url: '/dns-zones/{dnsZoneId}',
  });
};

/**
 * Update DNS Zone Details
 * Update dns zone, method will return you updated details of dns zone.
 */
export const dnsUpdateDnsZone = <ThrowOnError extends boolean = false>(
  options: Options<DnsUpdateDnsZoneData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    DnsUpdateDnsZoneResponse,
    DnsUpdateDnsZoneError
  >({
    ...options,
    url: '/dns-zones/{dnsZoneId}',
  });
};

/**
 * Delete DNS Zone
 * Delete dns zone, method will return you operation status.
 */
export const dnsDeleteDnsZone = <ThrowOnError extends boolean = false>(
  options: Options<DnsDeleteDnsZoneData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    DnsDeleteDnsZoneResponse,
    DnsDeleteDnsZoneError
  >({
    ...options,
    url: '/dns-zones/{dnsZoneId}',
  });
};

/**
 * Get all Databases
 * List all databases, method will return you list of databases.
 */
export const databasesListAllDatabases = <ThrowOnError extends boolean = false>(
  options?: Options<DatabasesListAllDatabasesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    DatabasesListAllDatabasesResponse,
    DatabasesListAllDatabasesError
  >({
    ...options,
    url: '/databases',
  });
};

/**
 * Add a new Database
 * Add database, method will return you recently added database.
 */
export const databasesAddDatabase = <ThrowOnError extends boolean = false>(
  options: Options<DatabasesAddDatabaseData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    DatabasesAddDatabaseResponse,
    DatabasesAddDatabaseError
  >({
    ...options,
    url: '/databases',
  });
};

/**
 * Get all Database Actions History
 * List all database action history, method will return you list of database action history.
 */
export const databasesListAllDatabaseTasks = <
  ThrowOnError extends boolean = false,
>(
  options: Options<DatabasesListAllDatabaseTasksData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    DatabasesListAllDatabaseTasksResponse,
    DatabasesListAllDatabaseTasksError
  >({
    ...options,
    url: '/databases/{databaseId}/action-history',
    responseTransformer: DatabasesListAllDatabaseTasksResponseTransformer,
  });
};

/**
 * Backup Database
 * Backup database, method will return you operation entry in queued operations.
 */
export const databasesBackupDatabase = <ThrowOnError extends boolean = false>(
  options: Options<DatabasesBackupDatabaseData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    DatabasesBackupDatabaseResponse,
    DatabasesBackupDatabaseError
  >({
    ...options,
    url: '/databases/{databaseId}/backup',
    responseTransformer: DatabasesBackupDatabaseResponseTransformer,
  });
};

/**
 * Shrink Database
 * Shrink database, method will return you operation status.
 */
export const databasesShrinkDatabase = <ThrowOnError extends boolean = false>(
  options: Options<DatabasesShrinkDatabaseData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    DatabasesShrinkDatabaseResponse,
    DatabasesShrinkDatabaseError
  >({
    ...options,
    url: '/databases/{databaseId}/shrink',
  });
};

/**
 * Restore Database
 * Restore database, method will return you operation entry in queued operations.
 */
export const databasesRestoreDatabase = <ThrowOnError extends boolean = false>(
  options: Options<DatabasesRestoreDatabaseData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    DatabasesRestoreDatabaseResponse,
    DatabasesRestoreDatabaseError
  >({
    ...options,
    url: '/databases/{databaseId}/restore',
    responseTransformer: DatabasesRestoreDatabaseResponseTransformer,
  });
};

/**
 * Get Database Details
 * Get database details, method will return you complete details of a database.
 */
export const databasesGetDatabaseDetail = <
  ThrowOnError extends boolean = false,
>(
  options: Options<DatabasesGetDatabaseDetailData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    DatabasesGetDatabaseDetailResponse,
    DatabasesGetDatabaseDetailError
  >({
    ...options,
    url: '/databases/{databaseId}',
  });
};

/**
 * Update Database Details
 * Update database details, method will return you updated details of a database.
 */
export const databasesUpdateDatabase = <ThrowOnError extends boolean = false>(
  options: Options<DatabasesUpdateDatabaseData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    DatabasesUpdateDatabaseResponse,
    DatabasesUpdateDatabaseError
  >({
    ...options,
    url: '/databases/{databaseId}',
  });
};

/**
 * Delete Database
 * Delete database, method will return you operation status.
 */
export const databasesDeleteDatabase = <ThrowOnError extends boolean = false>(
  options: Options<DatabasesDeleteDatabaseData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    DatabasesDeleteDatabaseResponse,
    DatabasesDeleteDatabaseError
  >({
    ...options,
    url: '/databases/{databaseId}',
  });
};

/**
 * Assign Users to Database
 * Assign users to database, method will return you recently assigned users to a database.
 */
export const databasesAssignUserstoDatabase = <
  ThrowOnError extends boolean = false,
>(
  options: Options<DatabasesAssignUserstoDatabaseData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    DatabasesAssignUserstoDatabaseResponse,
    DatabasesAssignUserstoDatabaseError
  >({
    ...options,
    url: '/databases/{databaseId}/assign',
  });
};

/**
 * Test Database Connectivity
 * Test database connectivity, method will return you operation status.
 */
export const databasesTestDatabaseConnectivity = <
  ThrowOnError extends boolean = false,
>(
  options: Options<DatabasesTestDatabaseConnectivityData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    DatabasesTestDatabaseConnectivityResponse,
    DatabasesTestDatabaseConnectivityError
  >({
    ...options,
    url: '/databases/{databaseId}/connectivity',
  });
};

/**
 * Get all Database Users
 * List all database users, method will return you list of database users.
 */
export const databasesListAllDatabaseUsers = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<DatabasesListAllDatabaseUsersData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    DatabasesListAllDatabaseUsersResponse,
    DatabasesListAllDatabaseUsersError
  >({
    ...options,
    url: '/databases/users',
  });
};

/**
 * Add a new Database User
 * Add database users, method will return you operation status.
 */
export const databasesAddDatabaseUser = <ThrowOnError extends boolean = false>(
  options: Options<DatabasesAddDatabaseUserData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    DatabasesAddDatabaseUserResponse,
    DatabasesAddDatabaseUserError
  >({
    ...options,
    url: '/databases/users',
  });
};

/**
 * Get Database Assigned Users
 * Get database assigned users, method will return you list of assigned database users.
 */
export const databasesGetDatabasesAssignedUser = <
  ThrowOnError extends boolean = false,
>(
  options: Options<DatabasesGetDatabasesAssignedUserData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    DatabasesGetDatabasesAssignedUserResponse,
    DatabasesGetDatabasesAssignedUserError
  >({
    ...options,
    url: '/databases/{databaseId}/users/assigned-users',
  });
};

/**
 * Get User Assigned Databases
 * Get user assigned databases, method will return you list of databases.
 */
export const databasesGetUsersAssignedDatabase = <
  ThrowOnError extends boolean = false,
>(
  options: Options<DatabasesGetUsersAssignedDatabaseData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    DatabasesGetUsersAssignedDatabaseResponse,
    DatabasesGetUsersAssignedDatabaseError
  >({
    ...options,
    url: '/databases/users/{databaseUserId}/assigned-databases',
  });
};

/**
 * Get Database User Details
 * Get database user details, method will return you database user details.
 */
export const databasesGetDatabaseUserDetail = <
  ThrowOnError extends boolean = false,
>(
  options: Options<DatabasesGetDatabaseUserDetailData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    DatabasesGetDatabaseUserDetailResponse,
    DatabasesGetDatabaseUserDetailError
  >({
    ...options,
    url: '/databases/users/{databaseUserId}',
  });
};

/**
 * Delete Database User
 * Delete database user, method will return you operation status.
 */
export const databasesDeleteDatabaseUser = <
  ThrowOnError extends boolean = false,
>(
  options: Options<DatabasesDeleteDatabaseUserData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    DatabasesDeleteDatabaseUserResponse,
    DatabasesDeleteDatabaseUserError
  >({
    ...options,
    url: '/databases/users/{databaseUserId}',
  });
};

/**
 * Change Password
 * Change password, method will return you operation status.
 */
export const databasesChangePassword = <ThrowOnError extends boolean = false>(
  options: Options<DatabasesChangePasswordData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    DatabasesChangePasswordResponse,
    DatabasesChangePasswordError
  >({
    ...options,
    url: '/databases/users/{databaseUserId}/change-password',
  });
};

/**
 * Assign Databases to User
 * Assign databases to user, method will return you operation status.
 */
export const databasesAssignDatabasestoUser = <
  ThrowOnError extends boolean = false,
>(
  options: Options<DatabasesAssignDatabasestoUserData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    DatabasesAssignDatabasestoUserResponse,
    DatabasesAssignDatabasestoUserError
  >({
    ...options,
    url: '/databases/users/{databaseUserId}/assign',
  });
};

/**
 * Get all Mail Domains
 * List all mail domains, method will return you list of mail domains.
 */
export const mailDomainsListAllMailDomains = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<MailDomainsListAllMailDomainsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    MailDomainsListAllMailDomainsResponse,
    MailDomainsListAllMailDomainsError
  >({
    ...options,
    url: '/mail-domains',
  });
};

/**
 * Add a new Mail Domain
 * Add mail domain, method will return you recently added mail domain.
 */
export const mailDomainsAddMailDomain = <ThrowOnError extends boolean = false>(
  options: Options<MailDomainsAddMailDomainData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    MailDomainsAddMailDomainResponse,
    MailDomainsAddMailDomainError
  >({
    ...options,
    url: '/mail-domains',
  });
};

/**
 * Get Mail Domain Details
 * Get mail domain details, method will return you complete details of a mail domain.
 */
export const mailDomainsGetMailDomainDetail = <
  ThrowOnError extends boolean = false,
>(
  options: Options<MailDomainsGetMailDomainDetailData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    MailDomainsGetMailDomainDetailResponse,
    MailDomainsGetMailDomainDetailError
  >({
    ...options,
    url: '/mail-domains/{mailDomainId}',
  });
};

/**
 * Delete Mail Domain
 * Delete mail domain, method will return you operation status.
 */
export const mailDomainsDeleteMailDomain = <
  ThrowOnError extends boolean = false,
>(
  options: Options<MailDomainsDeleteMailDomainData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    MailDomainsDeleteMailDomainResponse,
    MailDomainsDeleteMailDomainError
  >({
    ...options,
    url: '/mail-domains/{mailDomainId}',
  });
};

/**
 * Get all Mailboxes
 * List all mailboxes, method will return you list of mailboxes.
 */
export const mailDomainsListAllMailBoxes = <
  ThrowOnError extends boolean = false,
>(
  options: Options<MailDomainsListAllMailBoxesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    MailDomainsListAllMailBoxesResponse,
    MailDomainsListAllMailBoxesError
  >({
    ...options,
    url: '/mail-domains/{mailDomainId}/mailboxes',
  });
};

/**
 * Add a new Mailbox
 * Add mailboxes, method will return you recently added mailbox.
 */
export const mailDomainsAddMailBox = <ThrowOnError extends boolean = false>(
  options: Options<MailDomainsAddMailBoxData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    MailDomainsAddMailBoxResponse,
    MailDomainsAddMailBoxError
  >({
    ...options,
    url: '/mail-domains/{mailDomainId}/mailboxes',
  });
};

/**
 * Get Mailbox Details
 * Get mailbox details, method will return you complete mailbox details.
 */
export const mailDomainsGetMailBoxDetail = <
  ThrowOnError extends boolean = false,
>(
  options: Options<MailDomainsGetMailBoxDetailData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    MailDomainsGetMailBoxDetailResponse,
    MailDomainsGetMailBoxDetailError
  >({
    ...options,
    url: '/mail-domains/{mailDomainId}/mailboxes/{mailBoxId}',
  });
};

/**
 * Update Mailbox Details
 * Update mailbox, method will return you complete updated mailbox details.
 */
export const mailDomainsUpdateMailBox = <ThrowOnError extends boolean = false>(
  options: Options<MailDomainsUpdateMailBoxData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    MailDomainsUpdateMailBoxResponse,
    MailDomainsUpdateMailBoxError
  >({
    ...options,
    url: '/mail-domains/{mailDomainId}/mailboxes/{mailBoxId}',
  });
};

/**
 * Delete Mailbox
 * Delete mailbox, method will return you operation status.
 */
export const mailDomainsDeleteMailBox = <ThrowOnError extends boolean = false>(
  options: Options<MailDomainsDeleteMailBoxData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    MailDomainsDeleteMailBoxResponse,
    MailDomainsDeleteMailBoxError
  >({
    ...options,
    url: '/mail-domains/{mailDomainId}/mailboxes/{mailBoxId}',
  });
};

/**
 * Get all Email Aliases
 * List all email aliases, method will return you list of email aliases.
 */
export const mailDomainsListAllEmailAddresses = <
  ThrowOnError extends boolean = false,
>(
  options: Options<MailDomainsListAllEmailAddressesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    MailDomainsListAllEmailAddressesResponse,
    MailDomainsListAllEmailAddressesError
  >({
    ...options,
    url: '/mail-domains/{mailDomainId}/mailboxes/{mailBoxId}/email-aliases',
  });
};

/**
 * Add a new Email Alias
 * Add email alias, method will return you operation status.
 */
export const mailDomainsAddEmailAddress = <
  ThrowOnError extends boolean = false,
>(
  options: Options<MailDomainsAddEmailAddressData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    MailDomainsAddEmailAddressResponse,
    MailDomainsAddEmailAddressError
  >({
    ...options,
    url: '/mail-domains/{mailDomainId}/mailboxes/{mailBoxId}/email-aliases',
  });
};

/**
 * Delete Email Alias
 * Delete email alias, method will return you operation status.
 */
export const mailDomainsDeleteEmailAddress = <
  ThrowOnError extends boolean = false,
>(
  options: Options<MailDomainsDeleteEmailAddressData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    MailDomainsDeleteEmailAddressResponse,
    MailDomainsDeleteEmailAddressError
  >({
    ...options,
    url: '/mail-domains/{mailDomainId}/mailboxes/{mailBoxId}/email-aliases/{emailAddress}',
  });
};

/**
 * Get all Distribution Lists
 * Get all distribution list, method will return you all distribution list.
 */
export const mailDomainsListAllDistributionList = <
  ThrowOnError extends boolean = false,
>(
  options: Options<MailDomainsListAllDistributionListData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    MailDomainsListAllDistributionListResponse,
    MailDomainsListAllDistributionListError
  >({
    ...options,
    url: '/mail-domains/{mailDomainId}/distribution-lists',
  });
};

/**
 * Add a new Distribution List
 * Add distribution list, method will return you recently added distribution list.
 */
export const mailDomainsAddDistributionList = <
  ThrowOnError extends boolean = false,
>(
  options: Options<MailDomainsAddDistributionListData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    MailDomainsAddDistributionListResponse,
    MailDomainsAddDistributionListError
  >({
    ...options,
    url: '/mail-domains/{mailDomainId}/distribution-lists',
  });
};

/**
 * Get Distribution List Details
 * Get distribution list details, method will return you complete details of a distribution list.
 */
export const mailDomainsGetDistributionListDetail = <
  ThrowOnError extends boolean = false,
>(
  options: Options<MailDomainsGetDistributionListDetailData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    MailDomainsGetDistributionListDetailResponse,
    MailDomainsGetDistributionListDetailError
  >({
    ...options,
    url: '/mail-domains/{mailDomainId}/distribution-lists/{listName}',
  });
};

/**
 * Update Distribution List Details
 * Update distribution list, method will return you operation status.
 */
export const mailDomainsUpdateDistributionList = <
  ThrowOnError extends boolean = false,
>(
  options: Options<MailDomainsUpdateDistributionListData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    MailDomainsUpdateDistributionListResponse,
    MailDomainsUpdateDistributionListError
  >({
    ...options,
    url: '/mail-domains/{mailDomainId}/distribution-lists/{listName}',
  });
};

/**
 * Delete Distribution List
 * Delete distribution list, method will return you operation status.
 */
export const mailDomainsDeleteDistributionList = <
  ThrowOnError extends boolean = false,
>(
  options: Options<MailDomainsDeleteDistributionListData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    MailDomainsDeleteDistributionListResponse,
    MailDomainsDeleteDistributionListError
  >({
    ...options,
    url: '/mail-domains/{mailDomainId}/distribution-lists/{listName}',
  });
};

/**
 * Get all Files and Folders
 * Get all files and folders, method will return you list of files and folders.
 */
export const websiteIoGetAllFilesAndFolders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<WebsiteIoGetAllFilesAndFoldersData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    WebsiteIoGetAllFilesAndFoldersResponse,
    WebsiteIoGetAllFilesAndFoldersError
  >({
    ...options,
    url: '/websites/{websiteId}/io',
    responseTransformer: WebsiteIoGetAllFilesAndFoldersResponseTransformer,
  });
};

/**
 * Upload
 * Upload, method will return you operation status.
 */
export const websiteIoUpload = <ThrowOnError extends boolean = false>(
  options: Options<WebsiteIoUploadData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    WebsiteIoUploadResponse,
    WebsiteIoUploadError
  >({
    ...options,
    url: '/websites/{websiteId}/io',
  });
};

/**
 * Delete
 * Delete, method will return you operation status.
 */
export const websiteIoDelete = <ThrowOnError extends boolean = false>(
  options: Options<WebsiteIoDeleteData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    WebsiteIoDeleteResponse,
    WebsiteIoDeleteError
  >({
    ...options,
    url: '/websites/{websiteId}/io',
  });
};

/**
 * Create
 * Create, method will return you operation status.
 */
export const websiteIoCreate = <ThrowOnError extends boolean = false>(
  options: Options<WebsiteIoCreateData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    WebsiteIoCreateResponse,
    WebsiteIoCreateError
  >({
    ...options,
    url: '/websites/{websiteId}/io/new',
  });
};

/**
 * Download
 * Download, method will return you file content.
 */
export const websiteIoDownload = <ThrowOnError extends boolean = false>(
  options: Options<WebsiteIoDownloadData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    WebsiteIoDownloadResponse,
    WebsiteIoDownloadError
  >({
    ...options,
    url: '/websites/{websiteId}/io/content',
  });
};

/**
 * Update
 * Update, method will return you operation status.
 */
export const websiteIoUpdate = <ThrowOnError extends boolean = false>(
  options: Options<WebsiteIoUpdateData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    WebsiteIoUpdateResponse,
    WebsiteIoUpdateError
  >({
    ...options,
    url: '/websites/{websiteId}/io/content',
  });
};

/**
 * Rename
 * Rename, method will return you operation status.
 */
export const websiteIoRename = <ThrowOnError extends boolean = false>(
  options: Options<WebsiteIoRenameData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    WebsiteIoRenameResponse,
    WebsiteIoRenameError
  >({
    ...options,
    url: '/websites/{websiteId}/io/rename',
  });
};

/**
 * Zip
 * Zip, method will return you operation status.
 */
export const websiteIoZip = <ThrowOnError extends boolean = false>(
  options: Options<WebsiteIoZipData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    WebsiteIoZipResponse,
    WebsiteIoZipError
  >({
    ...options,
    url: '/websites/{websiteId}/io/zip',
  });
};

/**
 * Unzip
 * Unzip, method will return you operation status.
 */
export const websiteIoUnzip = <ThrowOnError extends boolean = false>(
  options: Options<WebsiteIoUnzipData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    WebsiteIoUnzipResponse,
    WebsiteIoUnzipError
  >({
    ...options,
    url: '/websites/{websiteId}/io/unzip',
  });
};

/**
 * Get ACL Permissions
 * Get acl permission, method will return you list of permissions.
 */
export const websiteIoGetAclPermission = <ThrowOnError extends boolean = false>(
  options: Options<WebsiteIoGetAclPermissionData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    WebsiteIoGetAclPermissionResponse,
    WebsiteIoGetAclPermissionError
  >({
    ...options,
    url: '/websites/{websiteId}/io/permissions',
  });
};

/**
 * Set ACL Permissions
 * Set acl permission, method will return you operation status.
 */
export const websiteIoSetAclPermission = <ThrowOnError extends boolean = false>(
  options: Options<WebsiteIoSetAclPermissionData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    WebsiteIoSetAclPermissionResponse,
    WebsiteIoSetAclPermissionError
  >({
    ...options,
    url: '/websites/{websiteId}/io/permissions',
  });
};

/**
 * Get all Websites
 * Get all websites, method will return you list of websites.
 */
export const websitesGetAllWebsites = <ThrowOnError extends boolean = false>(
  options?: Options<WebsitesGetAllWebsitesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    WebsitesGetAllWebsitesResponse,
    WebsitesGetAllWebsitesError
  >({
    ...options,
    url: '/websites',
    responseTransformer: WebsitesGetAllWebsitesResponseTransformer,
  });
};

/**
 * Add a new Website
 * Add website, method will return you complete details of recently added website.
 */
export const websitesAddWebsite = <ThrowOnError extends boolean = false>(
  options: Options<WebsitesAddWebsiteData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    WebsitesAddWebsiteResponse,
    WebsitesAddWebsiteError
  >({
    ...options,
    url: '/websites',
    responseTransformer: WebsitesAddWebsiteResponseTransformer,
  });
};

/**
 * Get Website Details
 * Get website details, method will return you complete details of a website.
 */
export const websitesGetWebsiteDetails = <ThrowOnError extends boolean = false>(
  options: Options<WebsitesGetWebsiteDetailsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    WebsitesGetWebsiteDetailsResponse,
    WebsitesGetWebsiteDetailsError
  >({
    ...options,
    url: '/websites/{websiteId}',
    responseTransformer: WebsitesGetWebsiteDetailsResponseTransformer,
  });
};

/**
 * Update Website Details
 * Update website details, method will return you updated details of a website.
 */
export const websitesEditWebsite = <ThrowOnError extends boolean = false>(
  options: Options<WebsitesEditWebsiteData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    WebsitesEditWebsiteResponse,
    WebsitesEditWebsiteError
  >({
    ...options,
    url: '/websites/{websiteId}',
    responseTransformer: WebsitesEditWebsiteResponseTransformer,
  });
};

/**
 * Delete Website
 * Delete website, method will return you operation status.
 */
export const websitesDeleteWebsite = <ThrowOnError extends boolean = false>(
  options: Options<WebsitesDeleteWebsiteData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    WebsitesDeleteWebsiteResponse,
    WebsitesDeleteWebsiteError
  >({
    ...options,
    url: '/websites/{websiteId}',
  });
};

/**
 * Start Website
 * Start site, method will return you operation status.
 */
export const websitesStartSite = <ThrowOnError extends boolean = false>(
  options: Options<WebsitesStartSiteData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    WebsitesStartSiteResponse,
    WebsitesStartSiteError
  >({
    ...options,
    url: '/websites/{websiteId}/start',
  });
};

/**
 * Stop Website
 * Stop site, method will return you operation status.
 */
export const websitesStopSite = <ThrowOnError extends boolean = false>(
  options: Options<WebsitesStopSiteData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    WebsitesStopSiteResponse,
    WebsitesStopSiteError
  >({
    ...options,
    url: '/websites/{websiteId}/stop',
  });
};

/**
 * Enable Web Stats
 * Enable stats, method will return you operation status.
 */
export const websitesEnableStats = <ThrowOnError extends boolean = false>(
  options: Options<WebsitesEnableStatsData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    WebsitesEnableStatsResponse,
    WebsitesEnableStatsError
  >({
    ...options,
    url: '/websites/{websiteId}/stats/enable',
  });
};

/**
 * Disable Web Stats
 * Disable stats, method will return you operation status.
 */
export const websitesDisableStats = <ThrowOnError extends boolean = false>(
  options: Options<WebsitesDisableStatsData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    WebsitesDisableStatsResponse,
    WebsitesDisableStatsError
  >({
    ...options,
    url: '/websites/{websiteId}/stats/disable',
  });
};

/**
 * View Web Stats
 * View summary, method will return you website summary.
 */
export const websitesViewStats = <ThrowOnError extends boolean = false>(
  options: Options<WebsitesViewStatsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    WebsitesViewStatsResponse,
    WebsitesViewStatsError
  >({
    ...options,
    url: '/websites/{websiteId}/stats/view',
  });
};

/**
 * Get all Shared SSLs
 * Get all shared ssls, method will return you list of shared ssl.
 */
export const websitesGetAllSharedSsls = <ThrowOnError extends boolean = false>(
  options: Options<WebsitesGetAllSharedSslsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    WebsitesGetAllSharedSslsResponse,
    WebsitesGetAllSharedSslsError
  >({
    ...options,
    url: '/websites/{websiteId}/shared-ssl',
  });
};

/**
 * Add a new Shared SSL
 * Add shared ssl, method will return you operation status.
 */
export const websitesAddSharedSsl = <ThrowOnError extends boolean = false>(
  options: Options<WebsitesAddSharedSslData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    WebsitesAddSharedSslResponse,
    WebsitesAddSharedSslError
  >({
    ...options,
    url: '/websites/{websiteId}/shared-ssl',
  });
};

/**
 * Delete Shared SSL
 * Delete shared ssl, method will return you operation status.
 */
export const websitesDeleteSharedSsl = <ThrowOnError extends boolean = false>(
  options: Options<WebsitesDeleteSharedSslData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    WebsitesDeleteSharedSslResponse,
    WebsitesDeleteSharedSslError
  >({
    ...options,
    url: '/websites/{websiteId}/shared-ssl/{sslId}',
  });
};

/**
 * Update IP Address Details
 * Update IP address, method will return you operation status.
 */
export const websitesUpdateIpAddress = <ThrowOnError extends boolean = false>(
  options: Options<WebsitesUpdateIpAddressData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    WebsitesUpdateIpAddressResponse,
    WebsitesUpdateIpAddressError
  >({
    ...options,
    url: '/websites/{websiteId}/ipaddress',
  });
};

/**
 * Get all Parked Domains
 * Get all parked daomains, method will return you list of parked domains.
 */
export const websitesGetAllParkedDomains = <
  ThrowOnError extends boolean = false,
>(
  options: Options<WebsitesGetAllParkedDomainsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    WebsitesGetAllParkedDomainsResponse,
    WebsitesGetAllParkedDomainsError
  >({
    ...options,
    url: '/websites/{websiteId}/parked-domains',
  });
};

/**
 * Add a new Parked Domain
 * Add parked domain, method will return you details of recently added parked domain.
 */
export const websitesAddParkedDomain = <ThrowOnError extends boolean = false>(
  options: Options<WebsitesAddParkedDomainData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    WebsitesAddParkedDomainResponse,
    WebsitesAddParkedDomainError
  >({
    ...options,
    url: '/websites/{websiteId}/parked-domains',
  });
};

/**
 * Delete Parked Domain
 * Delete parked domain, method will return you operation status.
 */
export const websitesDeleteParkedDomain = <
  ThrowOnError extends boolean = false,
>(
  options: Options<WebsitesDeleteParkedDomainData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    WebsitesDeleteParkedDomainResponse,
    WebsitesDeleteParkedDomainError
  >({
    ...options,
    url: '/websites/{websiteId}/parked-domains/{parkedDomainId}',
  });
};

/**
 * Get all Host Headers
 * Get all host headers, method will return you list of host headers.
 */
export const websitesGetAllHostHeaders = <ThrowOnError extends boolean = false>(
  options: Options<WebsitesGetAllHostHeadersData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    WebsitesGetAllHostHeadersResponse,
    WebsitesGetAllHostHeadersError
  >({
    ...options,
    url: '/websites/{websiteId}/host-headers',
  });
};

/**
 * Add a new Host Header
 * Add host header, method will return you operation status.
 */
export const websitesAddHostHeader = <ThrowOnError extends boolean = false>(
  options: Options<WebsitesAddHostHeaderData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    WebsitesAddHostHeaderResponse,
    WebsitesAddHostHeaderError
  >({
    ...options,
    url: '/websites/{websiteId}/host-headers',
  });
};

/**
 * Delete Host Header
 * Delete host header, method will return you operation status.
 */
export const websitesDeleteHostHeader = <ThrowOnError extends boolean = false>(
  options: Options<WebsitesDeleteHostHeaderData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    WebsitesDeleteHostHeaderResponse,
    WebsitesDeleteHostHeaderError
  >({
    ...options,
    url: '/websites/{websiteId}/host-headers/{hostHeaderName}',
  });
};

/**
 * Get all Virtual Directories
 * Get all virtual directories, method will return you list of virtual directories.
 */
export const websitesGetAllVirtualDirectories = <
  ThrowOnError extends boolean = false,
>(
  options: Options<WebsitesGetAllVirtualDirectoriesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    WebsitesGetAllVirtualDirectoriesResponse,
    WebsitesGetAllVirtualDirectoriesError
  >({
    ...options,
    url: '/websites/{websiteId}/virtual-directories',
  });
};

/**
 * Update Virtual Directory Details
 * Update virtual directory, method will return you operation status.
 */
export const websitesUpdateVirtualDirectory = <
  ThrowOnError extends boolean = false,
>(
  options: Options<WebsitesUpdateVirtualDirectoryData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    WebsitesUpdateVirtualDirectoryResponse,
    WebsitesUpdateVirtualDirectoryError
  >({
    ...options,
    url: '/websites/{websiteId}/virtual-directories',
  });
};

/**
 * Add a new Virtual Directory
 * Add virtual directory, method will return you operation status.
 */
export const websitesAddVirtualDirectory = <
  ThrowOnError extends boolean = false,
>(
  options: Options<WebsitesAddVirtualDirectoryData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    WebsitesAddVirtualDirectoryResponse,
    WebsitesAddVirtualDirectoryError
  >({
    ...options,
    url: '/websites/{websiteId}/virtual-directories',
  });
};

/**
 * Get Virtual Directory Details
 * Get virtual directory details, method will return you virtual directory details.
 */
export const websitesGetVirtualDirectoryDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<WebsitesGetVirtualDirectoryDetailsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    WebsitesGetVirtualDirectoryDetailsResponse,
    WebsitesGetVirtualDirectoryDetailsError
  >({
    ...options,
    url: '/websites/{websiteId}/virtual-directories/vdName/{virtualDirectoryName}',
  });
};

/**
 * Delete Virtual Directory
 * Delete virtual directory, method will return you operation status.
 */
export const websitesDeleteVirtualDirectory = <
  ThrowOnError extends boolean = false,
>(
  options: Options<WebsitesDeleteVirtualDirectoryData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    WebsitesDeleteVirtualDirectoryResponse,
    WebsitesDeleteVirtualDirectoryError
  >({
    ...options,
    url: '/websites/{websiteId}/virtual-directories/vdName/{virtualDirectoryName}',
  });
};

/**
 * Change System User Password
 * Change system user password, method will return you operation status.
 */
export const websitesChangeSysUserPassword = <
  ThrowOnError extends boolean = false,
>(
  options: Options<WebsitesChangeSysUserPasswordData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    WebsitesChangeSysUserPasswordResponse,
    WebsitesChangeSysUserPasswordError
  >({
    ...options,
    url: '/websites/{websiteId}/virtual-directories/change-password',
  });
};

/**
 * Get Application Pool Process Information
 * Get application pool process information, method will return you application pool process informaion.
 */
export const websitesGetApplicationPoolProcessInfo = <
  ThrowOnError extends boolean = false,
>(
  options: Options<WebsitesGetApplicationPoolProcessInfoData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    WebsitesGetApplicationPoolProcessInfoResponse,
    WebsitesGetApplicationPoolProcessInfoError
  >({
    ...options,
    url: '/websites/{websiteId}/app-pools/{appPoolName}/process-info',
  });
};

/**
 * Get URL Redirection Settings
 * Get url redirection settings, method will return you complete url redirection settings.
 */
export const websitesGetUrlRedirectionSettings = <
  ThrowOnError extends boolean = false,
>(
  options: Options<WebsitesGetUrlRedirectionSettingsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    WebsitesGetUrlRedirectionSettingsResponse,
    WebsitesGetUrlRedirectionSettingsError
  >({
    ...options,
    url: '/websites/{websiteId}/url-redirection',
  });
};

/**
 * Save URL Redirection Settings
 * Save url redirection settings, method will return you operation status.
 */
export const websitesSaveUrlRedirectionSettings = <
  ThrowOnError extends boolean = false,
>(
  options: Options<WebsitesSaveUrlRedirectionSettingsData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    WebsitesSaveUrlRedirectionSettingsResponse,
    WebsitesSaveUrlRedirectionSettingsError
  >({
    ...options,
    url: '/websites/{websiteId}/url-redirection',
  });
};

/**
 * Get Access Permissions Settings
 * Get access permissions settings, method will return you complete access permission settings.
 */
export const websitesGetAccessPermissionsSettings = <
  ThrowOnError extends boolean = false,
>(
  options: Options<WebsitesGetAccessPermissionsSettingsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    WebsitesGetAccessPermissionsSettingsResponse,
    WebsitesGetAccessPermissionsSettingsError
  >({
    ...options,
    url: '/websites/{websiteId}/access-permissions',
  });
};

/**
 * Save Access Permissions Settings
 * Save access permissions settings, method will return you operation status.
 */
export const websitesSaveAccessPermissionsSettings = <
  ThrowOnError extends boolean = false,
>(
  options: Options<WebsitesSaveAccessPermissionsSettingsData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    WebsitesSaveAccessPermissionsSettingsResponse,
    WebsitesSaveAccessPermissionsSettingsError
  >({
    ...options,
    url: '/websites/{websiteId}/access-permissions',
  });
};

/**
 * Get Custom Errors List
 * Get custom errors list, method will return you list of custom errors.
 */
export const websitesGetCustomErrorsList = <
  ThrowOnError extends boolean = false,
>(
  options: Options<WebsitesGetCustomErrorsListData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    WebsitesGetCustomErrorsListResponse,
    WebsitesGetCustomErrorsListError
  >({
    ...options,
    url: '/websites/{websiteId}/custom-errors',
  });
};

/**
 * Update Custom Error Details
 * Update custom errors, method will return you operation status.
 */
export const websitesUpdateCustomErrors = <
  ThrowOnError extends boolean = false,
>(
  options: Options<WebsitesUpdateCustomErrorsData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    WebsitesUpdateCustomErrorsResponse,
    WebsitesUpdateCustomErrorsError
  >({
    ...options,
    url: '/websites/{websiteId}/custom-errors',
  });
};

/**
 * Get all FTP Users
 * List all FTP users, method will return you list of FTP users.
 */
export const websitesListAllFtpUsers = <ThrowOnError extends boolean = false>(
  options: Options<WebsitesListAllFtpUsersData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    WebsitesListAllFtpUsersResponse,
    WebsitesListAllFtpUsersError
  >({
    ...options,
    url: '/websites/{websiteId}/ftp-users',
  });
};

/**
 * Add a new FTP User
 * Add FTP user, method will return you complete details of recently added FTP user.
 */
export const websitesAddFtpUser = <ThrowOnError extends boolean = false>(
  options: Options<WebsitesAddFtpUserData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    WebsitesAddFtpUserResponse,
    WebsitesAddFtpUserError
  >({
    ...options,
    url: '/websites/{websiteId}/ftp-users',
  });
};

/**
 * Get FTP User Details
 * Get FTP user details, method will return you complete details of FTP user.
 */
export const websitesGetFtpUserDetail = <ThrowOnError extends boolean = false>(
  options: Options<WebsitesGetFtpUserDetailData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    WebsitesGetFtpUserDetailResponse,
    WebsitesGetFtpUserDetailError
  >({
    ...options,
    url: '/websites/{websiteId}/ftp-users/{ftpUserId}',
  });
};

/**
 * Update FTP User Password
 * Update FTP user password, method will return you operation status.
 */
export const websitesUpdateFtpUserPassword = <
  ThrowOnError extends boolean = false,
>(
  options: Options<WebsitesUpdateFtpUserPasswordData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    WebsitesUpdateFtpUserPasswordResponse,
    WebsitesUpdateFtpUserPasswordError
  >({
    ...options,
    url: '/websites/{websiteId}/ftp-users/{ftpUserId}',
  });
};

/**
 * Delete FTP User
 * Delete FTP user, method will return you operation status.
 */
export const websitesDeleteFtpUser = <ThrowOnError extends boolean = false>(
  options: Options<WebsitesDeleteFtpUserData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    WebsitesDeleteFtpUserResponse,
    WebsitesDeleteFtpUserError
  >({
    ...options,
    url: '/websites/{websiteId}/ftp-users/{ftpUserId}',
  });
};

/**
 * Update FTP User Status
 * Update FTP user status, method will return you operation status.
 */
export const websitesUpdateFtpUserStatus = <
  ThrowOnError extends boolean = false,
>(
  options: Options<WebsitesUpdateFtpUserStatusData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    WebsitesUpdateFtpUserStatusResponse,
    WebsitesUpdateFtpUserStatusError
  >({
    ...options,
    url: '/websites/{websiteId}/ftp-users/{ftpUserId}/status',
  });
};

/**
 * Update FTP User Permissions
 * Update FTP user permission, method will return you operation status.
 */
export const websitesUpdateFtpUserPermission = <
  ThrowOnError extends boolean = false,
>(
  options: Options<WebsitesUpdateFtpUserPermissionData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    WebsitesUpdateFtpUserPermissionResponse,
    WebsitesUpdateFtpUserPermissionError
  >({
    ...options,
    url: '/websites/{websiteId}/ftp-users/{ftpUserId}/permissions',
  });
};

/**
 * Get Dot Net Installed Version
 * Get dot net installed version, method will return you operation status.
 */
export const websitesGetDotNetInstalledVersions = <
  ThrowOnError extends boolean = false,
>(
  options: Options<WebsitesGetDotNetInstalledVersionsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    WebsitesGetDotNetInstalledVersionsResponse,
    WebsitesGetDotNetInstalledVersionsError
  >({
    ...options,
    url: '/websites/{websiteId}/dotnetversions',
  });
};

/**
 * Scripting
 * Update script, method will return you operation status.
 */
export const websitesScripting = <ThrowOnError extends boolean = false>(
  options: Options<WebsitesScriptingData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    WebsitesScriptingResponse,
    WebsitesScriptingError
  >({
    ...options,
    url: '/websites/{websiteId}/scripting/{scriptingType}',
  });
};

/**
 * Recycle Website Application Pool
 * Recycle website application pool, method will return you operation status.
 */
export const websitesRecycleWebsiteApplicationPool = <
  ThrowOnError extends boolean = false,
>(
  options: Options<WebsitesRecycleWebsiteApplicationPoolData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    WebsitesRecycleWebsiteApplicationPoolResponse,
    WebsitesRecycleWebsiteApplicationPoolError
  >({
    ...options,
    url: '/websites/{websiteId}/app-pools-recycle',
  });
};

/**
 * Restore Default
 * Restore default, method will return you operation status.
 */
export const websitesRestoreDefault = <ThrowOnError extends boolean = false>(
  options: Options<WebsitesRestoreDefaultData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    WebsitesRestoreDefaultResponse,
    WebsitesRestoreDefaultError
  >({
    ...options,
    url: '/websites/{websiteId}/restore-default',
  });
};

/**
 * Get System Users
 * Get system users, method will return you list of system users.
 */
export const websitesGetSystemUsers = <ThrowOnError extends boolean = false>(
  options: Options<WebsitesGetSystemUsersData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    WebsitesGetSystemUsersResponse,
    WebsitesGetSystemUsersError
  >({
    ...options,
    url: '/websites/{websiteId}/system-users',
  });
};

/**
 * Get Roles
 * Get roles, method will return you list of roles.
 */
export const rolesGetRoles = <ThrowOnError extends boolean = false>(
  options?: Options<RolesGetRolesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    RolesGetRolesResponse,
    RolesGetRolesError
  >({
    ...options,
    url: '/Server-Roles',
  });
};

/**
 * Get Server Roles
 * Get server roles, method will return you list of server roles.
 */
export const rolesGetServerRoles = <ThrowOnError extends boolean = false>(
  options: Options<RolesGetServerRolesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    RolesGetServerRolesResponse,
    RolesGetServerRolesError
  >({
    ...options,
    url: '/servers/{serverId}/roles',
  });
};

/**
 * Get all Servers
 * Get all servers, method will return you list of servers.
 */
export const rolesGetAllServers = <ThrowOnError extends boolean = false>(
  options?: Options<RolesGetAllServersData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    RolesGetAllServersResponse,
    RolesGetAllServersError
  >({
    ...options,
    url: '/servers',
    responseTransformer: RolesGetAllServersResponseTransformer,
  });
};

/**
 * Get all Service Plans
 * Get all service plans, method will return you a  list of service plans.
 */
export const planGetAllPlans = <ThrowOnError extends boolean = false>(
  options?: Options<PlanGetAllPlansData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    PlanGetAllPlansResponse,
    PlanGetAllPlansError
  >({
    ...options,
    url: '/plans',
    responseTransformer: PlanGetAllPlansResponseTransformer,
  });
};

/**
 * Add a new Service Plan
 * Add service plan, method will return you details of recently added service plan.
 */
export const planAddPlan = <ThrowOnError extends boolean = false>(
  options: Options<PlanAddPlanData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    PlanAddPlanResponse,
    PlanAddPlanError
  >({
    ...options,
    url: '/plans',
    responseTransformer: PlanAddPlanResponseTransformer,
  });
};

/**
 * Get Service Plan Details
 * Get service plan details, method will return you service plan details.
 */
export const planGetPlanDetails = <ThrowOnError extends boolean = false>(
  options: Options<PlanGetPlanDetailsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    PlanGetPlanDetailsResponse,
    PlanGetPlanDetailsError
  >({
    ...options,
    url: '/plans/{planId}',
    responseTransformer: PlanGetPlanDetailsResponseTransformer,
  });
};

/**
 * Update Service Plan Details
 * Update service plan, method will return you updated service plan details.
 */
export const planUpdatePlan = <ThrowOnError extends boolean = false>(
  options: Options<PlanUpdatePlanData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    PlanUpdatePlanResponse,
    PlanUpdatePlanError
  >({
    ...options,
    url: '/plans/{planId}',
    responseTransformer: PlanUpdatePlanResponseTransformer,
  });
};

/**
 * Delete Service Plan
 * Delete service plan, method will return you operation status.
 */
export const planDeletePlan = <ThrowOnError extends boolean = false>(
  options: Options<PlanDeletePlanData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    PlanDeletePlanResponse,
    PlanDeletePlanError
  >({
    ...options,
    url: '/plans/{planId}',
  });
};

/**
 * Get All Organizations
 * Get all organizations, method will return you list of organizations.
 */
export const organizationsGetAllOrganizations = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<OrganizationsGetAllOrganizationsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    OrganizationsGetAllOrganizationsResponse,
    OrganizationsGetAllOrganizationsError
  >({
    ...options,
    url: '/organizations',
  });
};

/**
 * Get Organization Details
 * Get organization details, method will return you complete organization details.
 */
export const organizationsGetOrganizationDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<OrganizationsGetOrganizationDetailsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    OrganizationsGetOrganizationDetailsResponse,
    OrganizationsGetOrganizationDetailsError
  >({
    ...options,
    url: '/organizations/{organizationId}',
  });
};

/**
 * Get All Exchange Organizations
 * Get all exchange organizations, method will return you list of exchange organizations.
 */
export const organizationsGetAllExchangeOrganizations = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<OrganizationsGetAllExchangeOrganizationsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    OrganizationsGetAllExchangeOrganizationsResponse,
    OrganizationsGetAllExchangeOrganizationsError
  >({
    ...options,
    url: '/organizations/exchange',
  });
};

/**
 * Add Exchange Organization
 * Add exchange organizations, method will return you complete details of recently added organization.
 */
export const organizationsAddExchangeOrganization = <
  ThrowOnError extends boolean = false,
>(
  options: Options<OrganizationsAddExchangeOrganizationData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    OrganizationsAddExchangeOrganizationResponse,
    OrganizationsAddExchangeOrganizationError
  >({
    ...options,
    url: '/organizations/exchange',
  });
};

/**
 * Delete Exchange Organization
 * Delete exchange organization, method will return you operation status.
 */
export const organizationsDeleteExchangeOrganization = <
  ThrowOnError extends boolean = false,
>(
  options: Options<OrganizationsDeleteExchangeOrganizationData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    OrganizationsDeleteExchangeOrganizationResponse,
    OrganizationsDeleteExchangeOrganizationError
  >({
    ...options,
    url: '/organizations/{organizationId}/exchange',
  });
};

/**
 * Get All SharePoint Organizations
 * Get all sharePoint organizations, method will return you list of sharePoint organizations.
 */
export const organizationsGetAllSharePointOrganizations = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<
    OrganizationsGetAllSharePointOrganizationsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    OrganizationsGetAllSharePointOrganizationsResponse,
    OrganizationsGetAllSharePointOrganizationsError
  >({
    ...options,
    url: '/organizations/sharepoint',
  });
};

/**
 * Add SharePoint Organization
 * Add sharePoint organizations, method will return you recently added sharePoint organization details.
 */
export const organizationsAddSharePointOrganization = <
  ThrowOnError extends boolean = false,
>(
  options: Options<OrganizationsAddSharePointOrganizationData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    OrganizationsAddSharePointOrganizationResponse,
    OrganizationsAddSharePointOrganizationError
  >({
    ...options,
    url: '/organizations/sharepoint',
  });
};

/**
 * Delete SharePoint Organization
 * Delete sharePoint organizations, method will return you operation status.
 */
export const organizationsDeleteSharePointOrganization = <
  ThrowOnError extends boolean = false,
>(
  options: Options<OrganizationsDeleteSharePointOrganizationData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    OrganizationsDeleteSharePointOrganizationResponse,
    OrganizationsDeleteSharePointOrganizationError
  >({
    ...options,
    url: '/organizations/{organizationId}/sharepoint',
  });
};

/**
 * Get All Skype Organizations
 * Get all skype organizations, method will return you list of skype organizations.
 */
export const organizationsGetAllSkypeOrganizations = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<OrganizationsGetAllSkypeOrganizationsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    OrganizationsGetAllSkypeOrganizationsResponse,
    OrganizationsGetAllSkypeOrganizationsError
  >({
    ...options,
    url: '/organizations/skype',
  });
};

/**
 * Add Skype Organization
 * Add skype organization, method will return you details of recently added skype organizations.
 */
export const organizationsAddSkypeOrganization = <
  ThrowOnError extends boolean = false,
>(
  options: Options<OrganizationsAddSkypeOrganizationData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    OrganizationsAddSkypeOrganizationResponse,
    OrganizationsAddSkypeOrganizationError
  >({
    ...options,
    url: '/organizations/skype',
  });
};

/**
 * Delete Skype Organization
 * Delete skype organizations, method will return you operation status.
 */
export const organizationsDeleteSkypeOrganization = <
  ThrowOnError extends boolean = false,
>(
  options: Options<OrganizationsDeleteSkypeOrganizationData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    OrganizationsDeleteSkypeOrganizationResponse,
    OrganizationsDeleteSkypeOrganizationError
  >({
    ...options,
    url: '/organizations/{organizationId}/skype',
  });
};

/**
 * Get Active Directory Organizations
 * The method retrieves list of active directory organizations.
 */
export const organizationsGetAllActiveDirectoryOrganizations = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<
    OrganizationsGetAllActiveDirectoryOrganizationsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    OrganizationsGetAllActiveDirectoryOrganizationsResponse,
    OrganizationsGetAllActiveDirectoryOrganizationsError
  >({
    ...options,
    url: '/organizations/active-directory',
    responseTransformer:
      OrganizationsGetAllActiveDirectoryOrganizationsResponseTransformer,
  });
};

/**
 * Add Active Directory Organization
 * The method creates new active directory organization.
 */
export const organizationsAddActiveDirectoryOrganization = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    OrganizationsAddActiveDirectoryOrganizationData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    OrganizationsAddActiveDirectoryOrganizationResponse,
    OrganizationsAddActiveDirectoryOrganizationError
  >({
    ...options,
    url: '/organizations/active-directory',
  });
};

/**
 * Add Active Directory Sub Organization
 * The method will add sub organization.
 */
export const organizationsAddActiveDirectorySubOrganization = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    OrganizationsAddActiveDirectorySubOrganizationData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    OrganizationsAddActiveDirectorySubOrganizationResponse,
    OrganizationsAddActiveDirectorySubOrganizationError
  >({
    ...options,
    url: '/organizations/active-directory/sub-ou',
  });
};

/**
 * Delete Active Directory Organization
 * THe method will delete the organization.
 */
export const organizationsDeleteActiveDirectoryOrganization = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    OrganizationsDeleteActiveDirectoryOrganizationData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    OrganizationsDeleteActiveDirectoryOrganizationResponse,
    OrganizationsDeleteActiveDirectoryOrganizationError
  >({
    ...options,
    url: '/organizations/{organizationId}/active-directory',
  });
};

/**
 * Get all Exchange Mail Domains
 * Get all exchange mail domains, method will return you list of exchange mail domains.
 */
export const exchangeMailDomainsGetAllExchangeMailDomains = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<
    ExchangeMailDomainsGetAllExchangeMailDomainsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeMailDomainsGetAllExchangeMailDomainsResponse,
    ExchangeMailDomainsGetAllExchangeMailDomainsError
  >({
    ...options,
    url: '/exchange/mail-domains',
  });
};

/**
 * Add a new Exchange Mail Domain
 * Add exchange mail domain, method will return you recently added exchange mail domain details.
 */
export const exchangeMailDomainsAddExchangeMailDomain = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExchangeMailDomainsAddExchangeMailDomainData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    ExchangeMailDomainsAddExchangeMailDomainResponse,
    ExchangeMailDomainsAddExchangeMailDomainError
  >({
    ...options,
    url: '/exchange/mail-domains',
  });
};

/**
 * Get Exchange Mail Domain Details
 * Get exchange mail domain details, method will return you exchange mail domain details.
 */
export const exchangeMailDomainsGetExchangemailDomainDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeMailDomainsGetExchangemailDomainDetailsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeMailDomainsGetExchangemailDomainDetailsResponse,
    ExchangeMailDomainsGetExchangemailDomainDetailsError
  >({
    ...options,
    url: '/exchange/mail-domains/{exgMaildomainId}',
  });
};

/**
 * Update Exchange Mail Domain
 * Update exchange mail domain details, method will return you operations status.
 */
export const exchangeMailDomainsEditExchangeMailDomain = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExchangeMailDomainsEditExchangeMailDomainData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeMailDomainsEditExchangeMailDomainResponse,
    ExchangeMailDomainsEditExchangeMailDomainError
  >({
    ...options,
    url: '/exchange/mail-domains/{exgMaildomainId}',
  });
};

/**
 * Delete Exchange Mail Domain
 * Delete exchange mail domain, method will return you operations status.
 */
export const exchangeMailDomainsDeleteExchangeMailDomain = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeMailDomainsDeleteExchangeMailDomainData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangeMailDomainsDeleteExchangeMailDomainResponse,
    ExchangeMailDomainsDeleteExchangeMailDomainError
  >({
    ...options,
    url: '/exchange/mail-domains/{exgMaildomainId}',
  });
};

/**
 * Enable Disable Exchange Mail Domain
 * Enable disable exchange mail domain, method will return you operations status.
 */
export const exchangeMailDomainsEnableDisableExchangeMailDomain = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeMailDomainsEnableDisableExchangeMailDomainData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeMailDomainsEnableDisableExchangeMailDomainResponse,
    ExchangeMailDomainsEnableDisableExchangeMailDomainError
  >({
    ...options,
    url: '/exchange/mail-domains/{exgMaildomainId}/enable-disable',
  });
};

/**
 * Get all Mailboxes
 * Get all mailboxes, method will return you list of mailboxes.
 */
export const exgMailboxGetAllExgMailboxs = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<ExgMailboxGetAllExgMailboxsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExgMailboxGetAllExgMailboxsResponse,
    ExgMailboxGetAllExgMailboxsError
  >({
    ...options,
    url: '/exchange/mailboxes',
  });
};

/**
 * Add a new Mailbox
 * Add mailbox, method will return you details of recently added mailbox.
 */
export const exgMailboxAddExgMailbox = <ThrowOnError extends boolean = false>(
  options: Options<ExgMailboxAddExgMailboxData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    ExgMailboxAddExgMailboxResponse,
    ExgMailboxAddExgMailboxError
  >({
    ...options,
    url: '/exchange/mailboxes',
  });
};

/**
 * Update Mailbox Details
 * Update mailbox, method will return you updated details of mailbox.
 */
export const exgMailboxUpdateExgMailbox = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxUpdateExgMailboxData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExgMailboxUpdateExgMailboxResponse,
    ExgMailboxUpdateExgMailboxError
  >({
    ...options,
    url: '/exchange/mailboxes/{exgMailboxId}/enable-disable',
  });
};

/**
 * Get Mailbox Details
 * Get mailbox details, method will return you mailbox details.
 */
export const exgMailboxGetExgMailboxDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxGetExgMailboxDetailsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExgMailboxGetExgMailboxDetailsResponse,
    ExgMailboxGetExgMailboxDetailsError
  >({
    ...options,
    url: '/exchange/mailboxes/{exgMailboxId}',
  });
};

/**
 * Delete Mailbox
 * Delete mailbox, method will return you operation status.
 */
export const exgMailboxDeleteExgMailbox = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxDeleteExgMailboxData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExgMailboxDeleteExgMailboxResponse,
    ExgMailboxDeleteExgMailboxError
  >({
    ...options,
    url: '/exchange/mailboxes/{exgMailboxId}',
  });
};

/**
 * Get Mailbox ASync Policy
 * Get mailbox active sync policy, method will return you mailbox active sync policy settings.
 */
export const exgMailboxGetExgMailboxAsyncPolicy = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxGetExgMailboxAsyncPolicyData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExgMailboxGetExgMailboxAsyncPolicyResponse,
    ExgMailboxGetExgMailboxAsyncPolicyError
  >({
    ...options,
    url: '/exchange/mailboxes/{exgMailboxId}/async-policies',
  });
};

/**
 * Update Mailbox ASync Policy
 * Update mailbox active sync policy, method will return you operation status.
 */
export const exgMailboxUpdateExgMailboxAsyncPolicy = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxUpdateExgMailboxAsyncPolicyData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExgMailboxUpdateExgMailboxAsyncPolicyResponse,
    ExgMailboxUpdateExgMailboxAsyncPolicyError
  >({
    ...options,
    url: '/exchange/mailboxes/{exgMailboxId}/async-policies',
  });
};

/**
 * Get User Mailbox General Properties
 * Get user mailbox general properties, method will return you list of user mailbox general properties.
 */
export const exgMailboxGetUserMailboxGeneralProperties = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxGetUserMailboxGeneralPropertiesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExgMailboxGetUserMailboxGeneralPropertiesResponse,
    ExgMailboxGetUserMailboxGeneralPropertiesError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/general-properties',
  });
};

/**
 * Update Mailbox General Properties
 * Update mailbox general properties, method will return you operation status.
 */
export const exgMailboxUpdateExgMailboxGeneralProperties = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExgMailboxUpdateExgMailboxGeneralPropertiesData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExgMailboxUpdateExgMailboxGeneralPropertiesResponse,
    ExgMailboxUpdateExgMailboxGeneralPropertiesError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/general-properties',
  });
};

/**
 * Change Mailbox Password
 * Change mailbox password, method will return you operation status.
 */
export const exgMailboxChangeUserMailboxPassword = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxChangeUserMailboxPasswordData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExgMailboxChangeUserMailboxPasswordResponse,
    ExgMailboxChangeUserMailboxPasswordError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/change-password',
  });
};

/**
 * Get User Mailbox Email Addresses
 * Get user mailbox email addresses, method will return you list of user mailbox email addresses.
 */
export const exgMailboxGetUserMailboxEmailAddresses = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxGetUserMailboxEmailAddressesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExgMailboxGetUserMailboxEmailAddressesResponse,
    ExgMailboxGetUserMailboxEmailAddressesError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/email-addresses',
  });
};

/**
 * Set Primary Email Addresses
 * Set primary email addresses, method will return you operation status.
 */
export const exgMailboxSetPrimaryEmailAddresses = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxSetPrimaryEmailAddressesData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExgMailboxSetPrimaryEmailAddressesResponse,
    ExgMailboxSetPrimaryEmailAddressesError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/email-addresses',
  });
};

/**
 * Add Mailbox Email Addresses
 * Add mailbox email addresses, method will return you operation status.
 */
export const exgMailboxAddUserMailboxEmailAddresses = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxAddUserMailboxEmailAddressesData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    ExgMailboxAddUserMailboxEmailAddressesResponse,
    ExgMailboxAddUserMailboxEmailAddressesError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/email-addresses',
  });
};

/**
 * Delete Mailbox Email Address
 * Delete mailbox email address, method will return you operation status.
 */
export const exgMailboxDeleteUserMailboxEmailAddresses = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxDeleteUserMailboxEmailAddressesData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExgMailboxDeleteUserMailboxEmailAddressesResponse,
    ExgMailboxDeleteUserMailboxEmailAddressesError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/email-addresses',
  });
};

/**
 * Get Mailbox Send On Behalf Users
 * Get mailbox send on behalf users, method will return you list of mailbox send on behalf users.
 */
export const exgMailboxGetUserSendOnBehalfUsers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxGetUserSendOnBehalfUsersData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExgMailboxGetUserSendOnBehalfUsersResponse,
    ExgMailboxGetUserSendOnBehalfUsersError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/send-on-behalf',
  });
};

/**
 * Add User Send On Behalf Users
 * Add mailbox send on behalf users, method will return you operation status.
 */
export const exgMailboxAddUserSendOnBehalfUsers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxAddUserSendOnBehalfUsersData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExgMailboxAddUserSendOnBehalfUsersResponse,
    ExgMailboxAddUserSendOnBehalfUsersError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/send-on-behalf',
  });
};

/**
 * Remove Mailbox Send On Behalf Users
 * Remove mailbox send on behalf users, method will return you operation status.
 */
export const exgMailboxRemoveUserSendOnBehalfUsers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxRemoveUserSendOnBehalfUsersData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExgMailboxRemoveUserSendOnBehalfUsersResponse,
    ExgMailboxRemoveUserSendOnBehalfUsersError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/send-on-behalf',
  });
};

/**
 * Get Mailbox Advanced Properties
 * Get mailbox advanced properties, method will return you mailbox advanced properties.
 */
export const exgMailboxGetUserMailboxAdvancedProperties = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExgMailboxGetUserMailboxAdvancedPropertiesData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExgMailboxGetUserMailboxAdvancedPropertiesResponse,
    ExgMailboxGetUserMailboxAdvancedPropertiesError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/advanced-properties',
  });
};

/**
 * Update User Mailbox Advanced Properties
 * Update mailbox advanced properties, method will return you updated mailbox advanced properties.
 */
export const exgMailboxUpdateUserMailboxAdvancedProperties = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExgMailboxUpdateUserMailboxAdvancedPropertiesData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExgMailboxUpdateUserMailboxAdvancedPropertiesResponse,
    ExgMailboxUpdateUserMailboxAdvancedPropertiesError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/advanced-properties',
  });
};

/**
 * Get Mailbox Accepted Senders
 * Get mailbox accepted senders, method will return you list of mailbox accepted senders.
 */
export const exgMailboxGetUserAcceptedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxGetUserAcceptedSendersData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExgMailboxGetUserAcceptedSendersResponse,
    ExgMailboxGetUserAcceptedSendersError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/accepted-senders',
  });
};

/**
 * Add Mailbox Accepted Senders
 * Add mailbox accepted senders, method will return you operation status.
 */
export const exgMailboxAddUserAcceptedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxAddUserAcceptedSendersData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExgMailboxAddUserAcceptedSendersResponse,
    ExgMailboxAddUserAcceptedSendersError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/accepted-senders',
  });
};

/**
 * Remove Mailbox Accepted Senders
 * Remove mailbox accepted senders, method will return you operation status.
 */
export const exgMailboxRemoveUserAcceptedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxRemoveUserAcceptedSendersData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExgMailboxRemoveUserAcceptedSendersResponse,
    ExgMailboxRemoveUserAcceptedSendersError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/accepted-senders',
  });
};

/**
 * Get Mailbox Rejected Senders
 * Get mailbox rejected senders, method will return you list of mailbox rejected senders.
 */
export const exgMailboxGetUserRejectedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxGetUserRejectedSendersData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExgMailboxGetUserRejectedSendersResponse,
    ExgMailboxGetUserRejectedSendersError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/rejected-senders',
  });
};

/**
 * Add Mailbox Rejected Senders
 * Add mailbox rejected senders, method will return you operation status.
 */
export const exgMailboxAddUserRejectedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxAddUserRejectedSendersData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExgMailboxAddUserRejectedSendersResponse,
    ExgMailboxAddUserRejectedSendersError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/rejected-senders',
  });
};

/**
 * Remove Mailbox Rejected Senders
 * Remove mailbox rejected senders, method will return you operation status.
 */
export const exgMailboxRemoveUserRejectedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxRemoveUserRejectedSendersData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExgMailboxRemoveUserRejectedSendersResponse,
    ExgMailboxRemoveUserRejectedSendersError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/rejected-senders',
  });
};

/**
 * Get Mailbox Full Access Permission
 * Get mailbox full access permission, method will return you list of mailbox full access permissions.
 */
export const exgMailboxGetUserFullAccessPermission = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxGetUserFullAccessPermissionData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExgMailboxGetUserFullAccessPermissionResponse,
    ExgMailboxGetUserFullAccessPermissionError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/full-access-permissions',
  });
};

/**
 * Add Mailbox Full Access Permission
 * Add mailbox full access permission, method will return you operation status.
 */
export const exgMailboxAddUserFullAccessPermission = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxAddUserFullAccessPermissionData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExgMailboxAddUserFullAccessPermissionResponse,
    ExgMailboxAddUserFullAccessPermissionError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/full-access-permissions',
  });
};

/**
 * Remove Mailbox Full Access Permissions
 * Remove mailbox full access permissions, method will return you operation status.
 */
export const exgMailboxRemoveUserFullAccessPermission = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxRemoveUserFullAccessPermissionData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExgMailboxRemoveUserFullAccessPermissionResponse,
    ExgMailboxRemoveUserFullAccessPermissionError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/full-access-permissions',
  });
};

/**
 * Get Mailbox Send As Permission
 * Get mailbox send as permission, method will return you list of permissions.
 */
export const exgMailboxGetUserSendAsPermission = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxGetUserSendAsPermissionData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExgMailboxGetUserSendAsPermissionResponse,
    ExgMailboxGetUserSendAsPermissionError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/send-as-permissions',
  });
};

/**
 * Add Mailbox Send As Permission
 * Add mailbox send as permission, method will return you operations status.
 */
export const exgMailboxAddUserSendAsPermission = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxAddUserSendAsPermissionData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExgMailboxAddUserSendAsPermissionResponse,
    ExgMailboxAddUserSendAsPermissionError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/send-as-permissions',
  });
};

/**
 * Remove Mailbox Send As Permission
 * Remove mailbox send as permission, method will return you operations status.
 */
export const exgMailboxRemoveUserSendAsPermission = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxRemoveUserSendAsPermissionData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExgMailboxRemoveUserSendAsPermissionResponse,
    ExgMailboxRemoveUserSendAsPermissionError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/send-as-permissions',
  });
};

/**
 * Get Mailbox Forwarding Address
 * Get mailbox forwarding address, method will return you mailbox forwarding address.
 */
export const exgMailboxGetUserForwardingAddress = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxGetUserForwardingAddressData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExgMailboxGetUserForwardingAddressResponse,
    ExgMailboxGetUserForwardingAddressError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/forwarding-address',
  });
};

/**
 * Update Mailbox Forwarding Address
 * Update mailbox forwarding address, method will return you mailbox forwarding address.
 */
export const exgMailboxUpdateUserForwardingAddress = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxUpdateUserForwardingAddressData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExgMailboxUpdateUserForwardingAddressResponse,
    ExgMailboxUpdateUserForwardingAddressError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/forwarding-address',
  });
};

/**
 * Get Mailbox Stats
 * Get mailbox stats, method will return you mailbox stats.
 */
export const exgMailboxGetUserStatistics = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxGetUserStatisticsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExgMailboxGetUserStatisticsResponse,
    ExgMailboxGetUserStatisticsError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/stats',
  });
};

/**
 * Get Mailbox Litigation Hold Settings
 * Get mailbox litigation hold settings, method will return you mailbox litigation hold settings.
 */
export const exgMailboxGetMailboxLitigationHoldSettings = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExgMailboxGetMailboxLitigationHoldSettingsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExgMailboxGetMailboxLitigationHoldSettingsResponse,
    ExgMailboxGetMailboxLitigationHoldSettingsError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/litigation-hold',
  });
};

/**
 * Update Mailbox Litigation Hold Settings
 * Update mailbox litigation hold settings, method will return you updated mailbox litigation hold settings.
 */
export const exgMailboxUpdateMailboxLitigationHoldSettings = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExgMailboxUpdateMailboxLitigationHoldSettingsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExgMailboxUpdateMailboxLitigationHoldSettingsResponse,
    ExgMailboxUpdateMailboxLitigationHoldSettingsError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/litigation-hold',
  });
};

/**
 * Get All Distribution Lists Of User Mailbox
 * Get all distribution lists of user mailbox, method will return you distribution lists of user mailbox.
 */
export const exgMailboxGetAllListsOfUserMailbox = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxGetAllListsOfUserMailboxData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExgMailboxGetAllListsOfUserMailboxResponse,
    ExgMailboxGetAllListsOfUserMailboxError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/memberships',
  });
};

/**
 * Add User Mailbox To Distrbution List
 * Add user mailbox to distrbution list, method will return you updated details of distribution list.
 */
export const exgMailboxAddUserMailboxToList = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxAddUserMailboxToListData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExgMailboxAddUserMailboxToListResponse,
    ExgMailboxAddUserMailboxToListError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/memberships',
  });
};

/**
 * Remove User Mailbox From List
 * Remove user mailbox to distrbution list, method will return you updated details of distribution list.
 */
export const exgMailboxRemoveUserMailboxFromList = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxRemoveUserMailboxFromListData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExgMailboxRemoveUserMailboxFromListResponse,
    ExgMailboxRemoveUserMailboxFromListError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/memberships',
  });
};

/**
 * Get Archive Mailbox Settings
 * Get archive mailbox settings, method will return you list of archive mailbox settings.
 */
export const exgMailboxGetArchiveMailboxSettings = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxGetArchiveMailboxSettingsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExgMailboxGetArchiveMailboxSettingsResponse,
    ExgMailboxGetArchiveMailboxSettingsError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/archive-mailbox',
  });
};

/**
 * Update Archive Mailbox Details
 * Update archive mailbox, method will return you updated details of archive mailbox.
 */
export const exgMailboxUpdateArchiveMailbox = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxUpdateArchiveMailboxData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExgMailboxUpdateArchiveMailboxResponse,
    ExgMailboxUpdateArchiveMailboxError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/archive-mailbox',
  });
};

/**
 * Add a new Archive Mailbox
 * Add archive mailbox, method will return you details of recently added archive mailbox.
 */
export const exgMailboxAddArchiveMailbox = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxAddArchiveMailboxData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    ExgMailboxAddArchiveMailboxResponse,
    ExgMailboxAddArchiveMailboxError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/archive-mailbox',
  });
};

/**
 * Update Archive Mailbox Status
 * Update archive mailbox status, method will return you operation status.
 */
export const exgMailboxUpdateArchiveMailboxStatus = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxUpdateArchiveMailboxStatusData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExgMailboxUpdateArchiveMailboxStatusResponse,
    ExgMailboxUpdateArchiveMailboxStatusError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/archive-mailbox/enable-disable',
  });
};

/**
 * Check Bulk Mailbox Feasibility
 * Check bulk mailbox feasibility, method will return you bulk mailbox list.
 */
export const exgMailboxCheckBulkMailboxFeasibility = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxCheckBulkMailboxFeasibilityData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExgMailboxCheckBulkMailboxFeasibilityResponse,
    ExgMailboxCheckBulkMailboxFeasibilityError
  >({
    ...options,
    url: '/exchange/mailboxes/{organizationId}/bulk/feasibility',
  });
};

/**
 * Add Bulk Mailbox
 * Add bulk mailbox, method will return you details of recently added bulk mailbox.
 */
export const exgMailboxAddExgBulkMailbox = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxAddExgBulkMailboxData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    ExgMailboxAddExgBulkMailboxResponse,
    ExgMailboxAddExgBulkMailboxError
  >({
    ...options,
    url: '/exchange/mailboxes/bulk',
  });
};

/**
 * Update Bulk Mailbox
 * Update bulk mailbox, method will return you updated details of bulk mailbox.
 */
export const exgMailboxUpdateExgBulkMailbox = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxUpdateExgBulkMailboxData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExgMailboxUpdateExgBulkMailboxResponse,
    ExgMailboxUpdateExgBulkMailboxError
  >({
    ...options,
    url: '/exchange/mailboxes/{organizationId}/bulk',
  });
};

/**
 * Get Mailbox Auto Reply Configuration
 * Get mailbox auto reply configuration, method will return you updated details of bulk mailbox.
 */
export const exgMailboxGetMailboxAutoReplyConfiguration = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExgMailboxGetMailboxAutoReplyConfigurationData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExgMailboxGetMailboxAutoReplyConfigurationResponse,
    ExgMailboxGetMailboxAutoReplyConfigurationError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/auto-reply',
    responseTransformer:
      ExgMailboxGetMailboxAutoReplyConfigurationResponseTransformer,
  });
};

/**
 * Set User Auto Reply Configuration
 * Set mailbox auto reply configuration, method will return you operation status.
 */
export const exgMailboxSetUserAutoReplyConfiguration = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgMailboxSetUserAutoReplyConfigurationData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExgMailboxSetUserAutoReplyConfigurationResponse,
    ExgMailboxSetUserAutoReplyConfigurationError
  >({
    ...options,
    url: '/exchange/mailboxes/{mailboxId}/auto-reply',
  });
};

/**
 * Get All Exchange Distribution Lists
 * Get all exchange distribution lists, method will return you list of distribution list.
 */
export const exchangeDistributionListGetAllExchangeDistributionLists = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<
    ExchangeDistributionListGetAllExchangeDistributionListsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeDistributionListGetAllExchangeDistributionListsResponse,
    ExchangeDistributionListGetAllExchangeDistributionListsError
  >({
    ...options,
    url: '/exchange/distribution-lists',
  });
};

/**
 * Add Exchange Distribution List
 * Add exchange distribution list, method will return you recently added distribution list details.
 */
export const exchangeDistributionListAddExchangeDistributionList = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeDistributionListAddExchangeDistributionListData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    ExchangeDistributionListAddExchangeDistributionListResponse,
    ExchangeDistributionListAddExchangeDistributionListError
  >({
    ...options,
    url: '/exchange/distribution-lists',
  });
};

/**
 * Update Exchange Distribution List Administrator
 * Update exchange distribution list, method will return you operation status.
 */
export const exchangeDistributionListUpdateExchangeDlAdministrator = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeDistributionListUpdateExchangeDlAdministratorData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeDistributionListUpdateExchangeDlAdministratorResponse,
    ExchangeDistributionListUpdateExchangeDlAdministratorError
  >({
    ...options,
    url: '/exchange/distribution-lists/{distributionlistsId}/administrator',
  });
};

/**
 * Get Exchange Distribution List Details
 * Get exchange distribution list details, method will return you exchange distribution list details.
 */
export const exchangeDistributionListGetExchangeDlDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeDistributionListGetExchangeDlDetailsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeDistributionListGetExchangeDlDetailsResponse,
    ExchangeDistributionListGetExchangeDlDetailsError
  >({
    ...options,
    url: '/exchange/distribution-lists/{distributionlistId}',
  });
};

/**
 * Delete Exchange Distribution List
 * Delete exchange distribution list, method will return you operation status.
 */
export const exchangeDistributionListDeleteExchangeDistributionList = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeDistributionListDeleteExchangeDistributionListData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangeDistributionListDeleteExchangeDistributionListResponse,
    ExchangeDistributionListDeleteExchangeDistributionListError
  >({
    ...options,
    url: '/exchange/distribution-lists/{distributionlistId}',
  });
};

/**
 * Get Exchange Distribution List Members
 * Get exchange distribution list members, method will return you list of exchange distribution list members.
 */
export const exchangeDistributionListGetExchangeListMembers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeDistributionListGetExchangeListMembersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeDistributionListGetExchangeListMembersResponse,
    ExchangeDistributionListGetExchangeListMembersError
  >({
    ...options,
    url: '/exchange/distribution-lists/{distributionlistsId}/members',
  });
};

/**
 * Update Exchange Distribution List  Members
 * Update exchange distribution list members, method will return you operation status.
 */
export const exchangeDistributionListUpdateExchangeListMembers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeDistributionListUpdateExchangeListMembersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeDistributionListUpdateExchangeListMembersResponse,
    ExchangeDistributionListUpdateExchangeListMembersError
  >({
    ...options,
    url: '/exchange/distribution-lists/{distributionlistsId}/members',
  });
};

/**
 * Remove Exchange Distribution List Members
 * Remove exchange distribution list members, method will return you operation status.
 */
export const exchangeDistributionListRemoveListExchangeListMembers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeDistributionListRemoveListExchangeListMembersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangeDistributionListRemoveListExchangeListMembersResponse,
    ExchangeDistributionListRemoveListExchangeListMembersError
  >({
    ...options,
    url: '/exchange/distribution-lists/{distributionlistsId}/members',
  });
};

/**
 * Get Distribution List Accepted Senders
 * Get exchange distribution list accepted senders, method will return you list of exchange distribution list accepted senders.
 */
export const exchangeDistributionListGetListAcceptedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeDistributionListGetListAcceptedSendersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeDistributionListGetListAcceptedSendersResponse,
    ExchangeDistributionListGetListAcceptedSendersError
  >({
    ...options,
    url: '/exchange/distribution-lists/{distributionlistsId}/accepted-senders',
  });
};

/**
 * Add Distribution List Accepted Senders
 * Add exchange distribution list accepted sender, method will return you operation status.
 */
export const exchangeDistributionListAddListAcceptedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeDistributionListAddListAcceptedSendersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeDistributionListAddListAcceptedSendersResponse,
    ExchangeDistributionListAddListAcceptedSendersError
  >({
    ...options,
    url: '/exchange/distribution-lists/{distributionlistsId}/accepted-senders',
  });
};

/**
 * Remove Distribution List Accepted Senders
 * Remove exchange distribution list accepted sender, method will return you operation status.
 */
export const exchangeDistributionListRemoveListAcceptedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeDistributionListRemoveListAcceptedSendersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangeDistributionListRemoveListAcceptedSendersResponse,
    ExchangeDistributionListRemoveListAcceptedSendersError
  >({
    ...options,
    url: '/exchange/distribution-lists/{distributionlistsId}/accepted-senders',
  });
};

/**
 * Get Distribution List Rejected Senders
 * Get exchange distribution list rejected senders, method will return you list of exchange distribution list rejected senders.
 */
export const exchangeDistributionListGetListRejectedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeDistributionListGetListRejectedSendersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeDistributionListGetListRejectedSendersResponse,
    ExchangeDistributionListGetListRejectedSendersError
  >({
    ...options,
    url: '/exchange/distribution-lists/{distributionlistsId}/rejected-senders',
  });
};

/**
 * Add Distribution List Rejected Senders
 * Add exchange distribution list rejected senders, method will return you operation status.
 */
export const exchangeDistributionListAddListRejectedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeDistributionListAddListRejectedSendersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeDistributionListAddListRejectedSendersResponse,
    ExchangeDistributionListAddListRejectedSendersError
  >({
    ...options,
    url: '/exchange/distribution-lists/{distributionlistsId}/rejected-senders',
  });
};

/**
 * Remove Distribution List Rejected Senders
 * Remove exchange distribution list rejected senders, method will return you operation status.
 */
export const exchangeDistributionListRemoveListRejectedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeDistributionListRemoveListRejectedSendersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangeDistributionListRemoveListRejectedSendersResponse,
    ExchangeDistributionListRemoveListRejectedSendersError
  >({
    ...options,
    url: '/exchange/distribution-lists/{distributionlistsId}/rejected-senders',
  });
};

/**
 * Get Distribution List Send On Behalf Users
 * Get exchange distribution list send on behalf users, method will return you list of exchange distribution list send on behalf users.
 */
export const exchangeDistributionListGetListSendOnBehalfUsers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeDistributionListGetListSendOnBehalfUsersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeDistributionListGetListSendOnBehalfUsersResponse,
    ExchangeDistributionListGetListSendOnBehalfUsersError
  >({
    ...options,
    url: '/exchange/distribution-lists/{distributionlistsId}/send-on-behalf',
  });
};

/**
 * Add Distribution List Send On Behalf Users
 * Add exchange distribution list send on behalf user, method will return you operation status.
 */
export const exchangeDistributionListAddListSendOnBehalfUsers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeDistributionListAddListSendOnBehalfUsersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeDistributionListAddListSendOnBehalfUsersResponse,
    ExchangeDistributionListAddListSendOnBehalfUsersError
  >({
    ...options,
    url: '/exchange/distribution-lists/{distributionlistsId}/send-on-behalf',
  });
};

/**
 * Remove Distribution List Send On Behalf Users
 * Remove exchange distribution list send on behalf user, method will return you operation status.
 */
export const exchangeDistributionListRemoveListSendOnBehalfUsers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeDistributionListRemoveListSendOnBehalfUsersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangeDistributionListRemoveListSendOnBehalfUsersResponse,
    ExchangeDistributionListRemoveListSendOnBehalfUsersError
  >({
    ...options,
    url: '/exchange/distribution-lists/{distributionlistsId}/send-on-behalf',
  });
};

/**
 * Get Distribution List Email Addresses
 * Get exchange distribution list email addresses, method will return you list of exchange distribution list email addresses.
 */
export const exchangeDistributionListGetListEmailAddresses = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeDistributionListGetListEmailAddressesData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeDistributionListGetListEmailAddressesResponse,
    ExchangeDistributionListGetListEmailAddressesError
  >({
    ...options,
    url: '/exchange/distribution-lists/{distributionlistsId}/email-addresses',
  });
};

/**
 * Set Distribution List Primary Email Address
 * Set exchange distribution list email address, method will return you operation status.
 */
export const exchangeDistributionListSetListPrimaryEmailAddress = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeDistributionListSetListPrimaryEmailAddressData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeDistributionListSetListPrimaryEmailAddressResponse,
    ExchangeDistributionListSetListPrimaryEmailAddressError
  >({
    ...options,
    url: '/exchange/distribution-lists/{distributionlistsId}/email-addresses',
  });
};

/**
 * Add Distribution List Email Address
 * Add exchange distribution list email address, method will return you operation status.
 */
export const exchangeDistributionListAddListEmailAddress = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeDistributionListAddListEmailAddressData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    ExchangeDistributionListAddListEmailAddressResponse,
    ExchangeDistributionListAddListEmailAddressError
  >({
    ...options,
    url: '/exchange/distribution-lists/{distributionlistsId}/email-addresses',
  });
};

/**
 * Delete Distribution List Email Address
 * Delete exchange distribution list email address, method will return you operation status.
 */
export const exchangeDistributionListDeleteListEmailAddress = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeDistributionListDeleteListEmailAddressData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangeDistributionListDeleteListEmailAddressResponse,
    ExchangeDistributionListDeleteListEmailAddressError
  >({
    ...options,
    url: '/exchange/distribution-lists/{distributionlistsId}/email-addresses',
  });
};

/**
 * Get Distribution List Properties
 * Get exchange distribution list properties, method will return you exchange distribution list properties.
 */
export const exchangeDistributionListGetListProperties = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExchangeDistributionListGetListPropertiesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeDistributionListGetListPropertiesResponse,
    ExchangeDistributionListGetListPropertiesError
  >({
    ...options,
    url: '/exchange/distribution-lists/{distributionlistsId}/properties',
  });
};

/**
 * Update Distribution List Settings
 * Update exchange distribution list settings, method will return you updated exchange distribution list settings.
 */
export const exchangeDistributionListUpdateListSettings = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeDistributionListUpdateListSettingsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeDistributionListUpdateListSettingsResponse,
    ExchangeDistributionListUpdateListSettingsError
  >({
    ...options,
    url: '/exchange/distribution-lists/{distributionlistsId}/properties',
  });
};

/**
 * Get all Exchange Mail Contacts
 * Get all exchange mail contacts, method will return you list of mail contacts.
 */
export const exchangeMailContactGetAllExchangeMailContacts = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<
    ExchangeMailContactGetAllExchangeMailContactsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeMailContactGetAllExchangeMailContactsResponse,
    ExchangeMailContactGetAllExchangeMailContactsError
  >({
    ...options,
    url: '/exchange/mail-contacts',
  });
};

/**
 * Add Exchange Mail Contact
 * Add exchange mail contact, method will return you recently added mail contact details.
 */
export const exchangeMailContactAddExchangeMailContact = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExchangeMailContactAddExchangeMailContactData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    ExchangeMailContactAddExchangeMailContactResponse,
    ExchangeMailContactAddExchangeMailContactError
  >({
    ...options,
    url: '/exchange/mail-contacts',
  });
};

/**
 * Get Exchange Mail Contact Details
 * Get exchange mail contact details, method will return you complete details of mail contact.
 */
export const exchangeMailContactGetExchangeMailContactDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeMailContactGetExchangeMailContactDetailsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeMailContactGetExchangeMailContactDetailsResponse,
    ExchangeMailContactGetExchangeMailContactDetailsError
  >({
    ...options,
    url: '/exchange/mail-contacts/{mailContactId}',
  });
};

/**
 * Delete Mail Contact
 * Delete exchange mail contact, method will return you operation status.
 */
export const exchangeMailContactDeleteMailContact = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExchangeMailContactDeleteMailContactData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangeMailContactDeleteMailContactResponse,
    ExchangeMailContactDeleteMailContactError
  >({
    ...options,
    url: '/exchange/mail-contacts/{mailContactId}',
  });
};

/**
 * Get Mail Contact Accepted Senders
 * Get exchange mail contact accepted senders, method will return you list of mail contact accepted senders.
 */
export const exchangeMailContactGetMailContactAcceptedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeMailContactGetMailContactAcceptedSendersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeMailContactGetMailContactAcceptedSendersResponse,
    ExchangeMailContactGetMailContactAcceptedSendersError
  >({
    ...options,
    url: '/exchange/mail-contacts/{mailContactId}/accepted-senders',
  });
};

/**
 * Add Mail Contact Accepted Senders
 * Add exchange mail contact accepted senders, method will return you operation status.
 */
export const exchangeMailContactAddMailContactAcceptedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeMailContactAddMailContactAcceptedSendersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeMailContactAddMailContactAcceptedSendersResponse,
    ExchangeMailContactAddMailContactAcceptedSendersError
  >({
    ...options,
    url: '/exchange/mail-contacts/{mailContactId}/accepted-senders',
  });
};

/**
 * Remove Mail Contact Accepted Senders
 * Remove exchange mail contact accepted senders, method will return you operation status.
 */
export const exchangeMailContactRemoveMailContactAcceptedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeMailContactRemoveMailContactAcceptedSendersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangeMailContactRemoveMailContactAcceptedSendersResponse,
    ExchangeMailContactRemoveMailContactAcceptedSendersError
  >({
    ...options,
    url: '/exchange/mail-contacts/{mailContactId}/accepted-senders',
  });
};

/**
 * Get Mail Contact Rejected Senders
 * Get exchange mail contact rejected senders, method will return you list of exchange mail contact rejected senders.
 */
export const exchangeMailContactGetMailContactRejectedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeMailContactGetMailContactRejectedSendersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeMailContactGetMailContactRejectedSendersResponse,
    ExchangeMailContactGetMailContactRejectedSendersError
  >({
    ...options,
    url: '/exchange/mail-contacts/{mailContactId}/rejected-senders',
  });
};

/**
 * Add Mail Contact Rejected Senders
 * Add exchange mail contact rejected senders, method will return you operation status.
 */
export const exchangeMailContactAddMailContactRejectedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeMailContactAddMailContactRejectedSendersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeMailContactAddMailContactRejectedSendersResponse,
    ExchangeMailContactAddMailContactRejectedSendersError
  >({
    ...options,
    url: '/exchange/mail-contacts/{mailContactId}/rejected-senders',
  });
};

/**
 * Remove Mail Contact Rejected Senders
 * Remove exchange mail contact rejected senders, method will return you operation status.
 */
export const exchangeMailContactRemoveMailContactRejectedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeMailContactRemoveMailContactRejectedSendersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangeMailContactRemoveMailContactRejectedSendersResponse,
    ExchangeMailContactRemoveMailContactRejectedSendersError
  >({
    ...options,
    url: '/exchange/mail-contacts/{mailContactId}/rejected-senders',
  });
};

/**
 * Get Mail Contact Email Addresses
 * Get exchange mail contact email addresses, method will return you list of mail contact email addresses.
 */
export const exchangeMailContactGetMailContactEmailAddresses = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeMailContactGetMailContactEmailAddressesData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeMailContactGetMailContactEmailAddressesResponse,
    ExchangeMailContactGetMailContactEmailAddressesError
  >({
    ...options,
    url: '/exchange/mail-contacts/{mailContactId}/email-addresses',
  });
};

/**
 * Add Mail Contact Email Address
 * Add exchange mail contact email address, method will return you operation status.
 */
export const exchangeMailContactAddMailContactEmailAddress = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeMailContactAddMailContactEmailAddressData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    ExchangeMailContactAddMailContactEmailAddressResponse,
    ExchangeMailContactAddMailContactEmailAddressError
  >({
    ...options,
    url: '/exchange/mail-contacts/{mailContactId}/email-addresses',
  });
};

/**
 * Delete Mail Contact Email Address
 * Delete exchange mail contact email address, method will return you operation status.
 */
export const exchangeMailContactDeleteMailContactEmailAddress = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeMailContactDeleteMailContactEmailAddressData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangeMailContactDeleteMailContactEmailAddressResponse,
    ExchangeMailContactDeleteMailContactEmailAddressError
  >({
    ...options,
    url: '/exchange/mail-contacts/{mailContactId}/email-addresses',
  });
};

/**
 * Set Mail Contact Primary Email Address
 * Set exchange mail contact primary email address, method will return you operation status.
 */
export const exchangeMailContactSetMailContactPrimaryEmailAddress = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeMailContactSetMailContactPrimaryEmailAddressData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeMailContactSetMailContactPrimaryEmailAddressResponse,
    ExchangeMailContactSetMailContactPrimaryEmailAddressError
  >({
    ...options,
    url: '/exchange/mail-contacts/{mailContactId}/email-addresses/primary',
  });
};

/**
 * Set Mail Contact External Email Address
 * Set exchange mail contact external email address, method will return you operation status.
 */
export const exchangeMailContactSetMailContactExternalEmailAddress = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeMailContactSetMailContactExternalEmailAddressData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeMailContactSetMailContactExternalEmailAddressResponse,
    ExchangeMailContactSetMailContactExternalEmailAddressError
  >({
    ...options,
    url: '/exchange/mail-contacts/{mailContactId}/email-addresses/external',
  });
};

/**
 * Get Mail Contact General Settings
 * Get exchange mail contact general settings, method will return you complete exchange mail contact general settings.
 */
export const exchangeMailContactGetMailContactGeneralSettings = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeMailContactGetMailContactGeneralSettingsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeMailContactGetMailContactGeneralSettingsResponse,
    ExchangeMailContactGetMailContactGeneralSettingsError
  >({
    ...options,
    url: '/exchange/mail-contacts/{mailContactId}/general-properties',
  });
};

/**
 * Update Mail Contact General Settings
 * Update exchange mail contact general settings, method will return you operation status.
 */
export const exchangeMailContactUpdateMailContactGeneralSettings = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeMailContactUpdateMailContactGeneralSettingsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeMailContactUpdateMailContactGeneralSettingsResponse,
    ExchangeMailContactUpdateMailContactGeneralSettingsError
  >({
    ...options,
    url: '/exchange/mail-contacts/{mailContactId}/general-properties',
  });
};

/**
 * Get Mail Contact Advanced Settings
 * Get exchange mail contact advanced settings, method will return you exchange mail contact advanced settings.
 */
export const exchangeMailContactGetMailContactAdvancedSettings = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeMailContactGetMailContactAdvancedSettingsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeMailContactGetMailContactAdvancedSettingsResponse,
    ExchangeMailContactGetMailContactAdvancedSettingsError
  >({
    ...options,
    url: '/exchange/mail-contacts/{mailContactId}/advanced-properties',
  });
};

/**
 * Update Mail Contact Advanced Settings
 * Update exchange mail contact advanced settings, method will return you operation status.
 */
export const exchangeMailContactUpdateMailContactAdvancedSettings = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeMailContactUpdateMailContactAdvancedSettingsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeMailContactUpdateMailContactAdvancedSettingsResponse,
    ExchangeMailContactUpdateMailContactAdvancedSettingsError
  >({
    ...options,
    url: '/exchange/mail-contacts/{mailContactId}/advanced-properties',
  });
};

/**
 * Update Mail Contact
 * Update exchange mail contact, method will return you updated details of mail contact.
 */
export const exchangeMailContactUpdateMailContact = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExchangeMailContactUpdateMailContactData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeMailContactUpdateMailContactResponse,
    ExchangeMailContactUpdateMailContactError
  >({
    ...options,
    url: '/exchange/mail-contacts/{mailContactId}/enable-disable',
  });
};

/**
 * Get all Resource Mailboxes
 * Get all resource mailboxes, method will return you list of resource mailboxes.
 */
export const exchangeResourceMailboxGetAllExchangeResourceMailboxs = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<
    ExchangeResourceMailboxGetAllExchangeResourceMailboxsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeResourceMailboxGetAllExchangeResourceMailboxsResponse,
    ExchangeResourceMailboxGetAllExchangeResourceMailboxsError
  >({
    ...options,
    url: '/exchange/resource-mailboxes',
  });
};

/**
 * Add a new Resource Mailbox
 * Add resource mailbox, method will return you details of recently added resource mailbox.
 */
export const exchangeResourceMailboxAddExchangeResourceMailbox = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxAddExchangeResourceMailboxData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    ExchangeResourceMailboxAddExchangeResourceMailboxResponse,
    ExchangeResourceMailboxAddExchangeResourceMailboxError
  >({
    ...options,
    url: '/exchange/resource-mailboxes',
  });
};

/**
 * Get Resource Mailbox Details
 * Get resource mailbox details, method will return you resource mailbox details.
 */
export const exchangeResourceMailboxGetResourceMailboxDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxGetResourceMailboxDetailsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeResourceMailboxGetResourceMailboxDetailsResponse,
    ExchangeResourceMailboxGetResourceMailboxDetailsError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{exgMailboxId}',
  });
};

/**
 * Delete Resource Mailbox
 * Delete resource mailbox, method will return you operation status.
 */
export const exchangeResourceMailboxDeleteExchangeResourceMailbox = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxDeleteExchangeResourceMailboxData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangeResourceMailboxDeleteExchangeResourceMailboxResponse,
    ExchangeResourceMailboxDeleteExchangeResourceMailboxError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{exgMailboxId}',
  });
};

/**
 * Update Resource Mailbox
 * Update resource mailbox, method will return you updated details of resource mailbox.
 */
export const exchangeResourceMailboxUpdateExchangeResourceMailbox = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxUpdateExchangeResourceMailboxData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeResourceMailboxUpdateExchangeResourceMailboxResponse,
    ExchangeResourceMailboxUpdateExchangeResourceMailboxError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{exgMailboxId}/enable-disable',
  });
};

/**
 * Get Archive Resource Mailbox Settings
 * Get archive resource mailbox settings, method will return you list of archive resource mailbox settings.
 */
export const exchangeResourceMailboxGetArchiveResourceMailboxSettings = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxGetArchiveResourceMailboxSettingsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeResourceMailboxGetArchiveResourceMailboxSettingsResponse,
    ExchangeResourceMailboxGetArchiveResourceMailboxSettingsError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/archive-mailbox',
  });
};

/**
 * Update Archive Resource Mailbox
 * Update archive resource mailbox, method will return you updated details of archive resource mailbox.
 */
export const exchangeResourceMailboxUpdateArchiveResourceMailbox = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxUpdateArchiveResourceMailboxData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeResourceMailboxUpdateArchiveResourceMailboxResponse,
    ExchangeResourceMailboxUpdateArchiveResourceMailboxError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/archive-mailbox',
  });
};

/**
 * Add a new Archive Resource Mailbox
 * Add archive resource mailbox, method will return you details of recently added archive resource mailbox.
 */
export const exchangeResourceMailboxAddArchiveResourceMailbox = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxAddArchiveResourceMailboxData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    ExchangeResourceMailboxAddArchiveResourceMailboxResponse,
    ExchangeResourceMailboxAddArchiveResourceMailboxError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/archive-mailbox',
  });
};

/**
 * Update Archive Resource Mailbox Status
 * Update archive resource mailbox status, method will return you operation status.
 */
export const exchangeResourceMailboxUpdateArchiveResourceMailboxStatus = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxUpdateArchiveResourceMailboxStatusData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeResourceMailboxUpdateArchiveResourceMailboxStatusResponse,
    ExchangeResourceMailboxUpdateArchiveResourceMailboxStatusError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/archive-mailbox/enable-disable',
  });
};

/**
 * Get Resource Mailbox General Properties
 * Get resource mailbox general properties, method will return you list of resource mailbox general properties.
 */
export const exchangeResourceMailboxGetExchangeResourceMailboxGeneralProperties =
  <ThrowOnError extends boolean = false>(
    options: Options<
      ExchangeResourceMailboxGetExchangeResourceMailboxGeneralPropertiesData,
      ThrowOnError
    >,
  ) => {
    return (options?.client ?? client).get<
      ThrowOnError,
      ExchangeResourceMailboxGetExchangeResourceMailboxGeneralPropertiesResponse,
      ExchangeResourceMailboxGetExchangeResourceMailboxGeneralPropertiesError
    >({
      ...options,
      url: '/exchange/resource-mailboxes/{mailboxId}/general-properties',
    });
  };

/**
 * Update Resource Mailbox General Properties
 * Update resource mailbox general properties, method will return you operation status.
 */
export const exchangeResourceMailboxUpdateExchangeResourceMailboxGeneralProperties =
  <ThrowOnError extends boolean = false>(
    options: Options<
      ExchangeResourceMailboxUpdateExchangeResourceMailboxGeneralPropertiesData,
      ThrowOnError
    >,
  ) => {
    return (options?.client ?? client).put<
      ThrowOnError,
      ExchangeResourceMailboxUpdateExchangeResourceMailboxGeneralPropertiesResponse,
      ExchangeResourceMailboxUpdateExchangeResourceMailboxGeneralPropertiesError
    >({
      ...options,
      url: '/exchange/resource-mailboxes/{mailboxId}/general-properties',
    });
  };

/**
 * Get Resource Mailbox Advanced Properties
 * Get resource mailbox advanced properties, method will return you list of resource mailbox advanced properties.
 */
export const exchangeResourceMailboxGetExchangeResourceMailboxAdvancedProperties =
  <ThrowOnError extends boolean = false>(
    options: Options<
      ExchangeResourceMailboxGetExchangeResourceMailboxAdvancedPropertiesData,
      ThrowOnError
    >,
  ) => {
    return (options?.client ?? client).get<
      ThrowOnError,
      ExchangeResourceMailboxGetExchangeResourceMailboxAdvancedPropertiesResponse,
      ExchangeResourceMailboxGetExchangeResourceMailboxAdvancedPropertiesError
    >({
      ...options,
      url: '/exchange/resource-mailboxes/{mailboxId}/advanced-properties',
    });
  };

/**
 * Update Resource Mailbox Advanced Properties
 * Update resource mailbox advanced properties, method will return you updated resource mailbox advanced properties.
 */
export const exchangeResourceMailboxUpdateExchangeResourceMailboxAdvancedProperties =
  <ThrowOnError extends boolean = false>(
    options: Options<
      ExchangeResourceMailboxUpdateExchangeResourceMailboxAdvancedPropertiesData,
      ThrowOnError
    >,
  ) => {
    return (options?.client ?? client).put<
      ThrowOnError,
      ExchangeResourceMailboxUpdateExchangeResourceMailboxAdvancedPropertiesResponse,
      ExchangeResourceMailboxUpdateExchangeResourceMailboxAdvancedPropertiesError
    >({
      ...options,
      url: '/exchange/resource-mailboxes/{mailboxId}/advanced-properties',
    });
  };

/**
 * Get Resource Mailbox Email Addresses
 * Get resource mailbox email addresses, method will return you list of resource mailbox email addresses.
 */
export const exchangeResourceMailboxGetResourceMailboxEmailAddresses = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxGetResourceMailboxEmailAddressesData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeResourceMailboxGetResourceMailboxEmailAddressesResponse,
    ExchangeResourceMailboxGetResourceMailboxEmailAddressesError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/email-addresses',
  });
};

/**
 * Set Primary Email Address
 * Set primary email address, method will return you operation status.
 */
export const exchangeResourceMailboxSetPrimaryEmailAddresses = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxSetPrimaryEmailAddressesData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeResourceMailboxSetPrimaryEmailAddressesResponse,
    ExchangeResourceMailboxSetPrimaryEmailAddressesError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/email-addresses',
  });
};

/**
 * Add Resource Mailbox Email Address
 * Add resource mailbox email address, method will return you operation status.
 */
export const exchangeResourceMailboxAddResourceMailboxEmailAddresses = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxAddResourceMailboxEmailAddressesData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    ExchangeResourceMailboxAddResourceMailboxEmailAddressesResponse,
    ExchangeResourceMailboxAddResourceMailboxEmailAddressesError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/email-addresses',
  });
};

/**
 * Delete Resource Mailbox Email Address
 * Delete resource mailbox email address, method will return you operation status.
 */
export const exchangeResourceMailboxDeleteResourceMailboxEmailAddresses = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxDeleteResourceMailboxEmailAddressesData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangeResourceMailboxDeleteResourceMailboxEmailAddressesResponse,
    ExchangeResourceMailboxDeleteResourceMailboxEmailAddressesError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/email-addresses',
  });
};

/**
 * Get Resource Mailbox Send On Behalf Users
 * Get resource mailbox send on behalf users, method will return you list of resource mailbox send on behalf users.
 */
export const exchangeResourceMailboxGetResourceMailboxSendOnBehalfUsers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxGetResourceMailboxSendOnBehalfUsersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeResourceMailboxGetResourceMailboxSendOnBehalfUsersResponse,
    ExchangeResourceMailboxGetResourceMailboxSendOnBehalfUsersError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/send-on-behalf',
  });
};

/**
 * Add Resource Mailbox Send On Behalf Users
 * Add resource mailbox send on behalf users, method will return you operation status.
 */
export const exchangeResourceMailboxAddResourceMailboxSendOnBehalfUsers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxAddResourceMailboxSendOnBehalfUsersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeResourceMailboxAddResourceMailboxSendOnBehalfUsersResponse,
    ExchangeResourceMailboxAddResourceMailboxSendOnBehalfUsersError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/send-on-behalf',
  });
};

/**
 * Remove Resource Mailbox Send On Behalf Users
 * Remove resource mailbox send on behalf users, method will return you operation status.
 */
export const exchangeResourceMailboxRemoveResourceMailboxSendOnBehalfUsers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxRemoveResourceMailboxSendOnBehalfUsersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangeResourceMailboxRemoveResourceMailboxSendOnBehalfUsersResponse,
    ExchangeResourceMailboxRemoveResourceMailboxSendOnBehalfUsersError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/send-on-behalf',
  });
};

/**
 * Get Resource Mailbox Accepted Senders
 * Get resource mailbox accepted senders, method will return you list of resource mailbox accepted senders.
 */
export const exchangeResourceMailboxGetResourceMailboxAcceptedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxGetResourceMailboxAcceptedSendersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeResourceMailboxGetResourceMailboxAcceptedSendersResponse,
    ExchangeResourceMailboxGetResourceMailboxAcceptedSendersError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/accepted-senders',
  });
};

/**
 * Add Resource Mailbox Accepted Senders
 * Add resource mailbox accepted senders, method will return you operation status.
 */
export const exchangeResourceMailboxAddResourceMailboxAcceptedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxAddResourceMailboxAcceptedSendersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeResourceMailboxAddResourceMailboxAcceptedSendersResponse,
    ExchangeResourceMailboxAddResourceMailboxAcceptedSendersError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/accepted-senders',
  });
};

/**
 * Remove Resource Mailbox Accepted Senders
 * Remove resource mailbox accepted senders, method will return you operation status.
 */
export const exchangeResourceMailboxRemoveResourceMailboxAcceptedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxRemoveResourceMailboxAcceptedSendersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangeResourceMailboxRemoveResourceMailboxAcceptedSendersResponse,
    ExchangeResourceMailboxRemoveResourceMailboxAcceptedSendersError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/accepted-senders',
  });
};

/**
 * Get Resource Mailbox Rejected Senders
 * Get resource mailbox rejected senders, method will return you list of resource mailbox rejected senders.
 */
export const exchangeResourceMailboxGetResourceMailboxRejectedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxGetResourceMailboxRejectedSendersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeResourceMailboxGetResourceMailboxRejectedSendersResponse,
    ExchangeResourceMailboxGetResourceMailboxRejectedSendersError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/rejected-senders',
  });
};

/**
 * Add Resource Mailbox Rejected Senders
 * Add resource mailbox rejected senders, method will return you operation status.
 */
export const exchangeResourceMailboxAddResourceMailboxRejectedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxAddResourceMailboxRejectedSendersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeResourceMailboxAddResourceMailboxRejectedSendersResponse,
    ExchangeResourceMailboxAddResourceMailboxRejectedSendersError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/rejected-senders',
  });
};

/**
 * Remove Resource Mailbox Rejected Senders
 * Remove resource mailbox rejected senders, method will return you operation status.
 */
export const exchangeResourceMailboxRemoveResourceMailboxRejectedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxRemoveResourceMailboxRejectedSendersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangeResourceMailboxRemoveResourceMailboxRejectedSendersResponse,
    ExchangeResourceMailboxRemoveResourceMailboxRejectedSendersError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/rejected-senders',
  });
};

/**
 * Get Mailbox Full Access Permissions
 * Get mailbox full access permissions, method will return you list of mailbox full access permissions.
 */
export const exchangeResourceMailboxGetUserFullAccessPermission = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxGetUserFullAccessPermissionData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeResourceMailboxGetUserFullAccessPermissionResponse,
    ExchangeResourceMailboxGetUserFullAccessPermissionError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/full-access-permissions',
  });
};

/**
 * Add Mailbox Full Access Permission
 * Add mailbox full access permission, method will return you operation status.
 */
export const exchangeResourceMailboxAddUserFullAccessPermission = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxAddUserFullAccessPermissionData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeResourceMailboxAddUserFullAccessPermissionResponse,
    ExchangeResourceMailboxAddUserFullAccessPermissionError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/full-access-permissions',
  });
};

/**
 * Remove Mailbox Full Access Permission
 * Remove mailbox full access permission, method will return you operation status.
 */
export const exchangeResourceMailboxRemoveUserFullAccessPermission = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxRemoveUserFullAccessPermissionData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangeResourceMailboxRemoveUserFullAccessPermissionResponse,
    ExchangeResourceMailboxRemoveUserFullAccessPermissionError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/full-access-permissions',
  });
};

/**
 * Get Mailbox Send As Permissions
 * Get mailbox send as permissions, method will return you list of mailbox send as permissions.
 */
export const exchangeResourceMailboxGetUserSendAsPermission = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxGetUserSendAsPermissionData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeResourceMailboxGetUserSendAsPermissionResponse,
    ExchangeResourceMailboxGetUserSendAsPermissionError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/send-as-permissions',
  });
};

/**
 * Add Mailbox Send As Permission
 * Add mailbox send as permission, method will return you operation status.
 */
export const exchangeResourceMailboxAddUserSendAsPermission = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxAddUserSendAsPermissionData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeResourceMailboxAddUserSendAsPermissionResponse,
    ExchangeResourceMailboxAddUserSendAsPermissionError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/send-as-permissions',
  });
};

/**
 * Remove Mailbox Send As Permission
 * Remove mailbox send as permission, method will return you operation status.
 */
export const exchangeResourceMailboxRemoveUserSendAsPermission = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxRemoveUserSendAsPermissionData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangeResourceMailboxRemoveUserSendAsPermissionResponse,
    ExchangeResourceMailboxRemoveUserSendAsPermissionError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/send-as-permissions',
  });
};

/**
 * Get Mailbox Forwarding Address
 * Get mailbox forwarding Address, method will return you mailbox forwarding address.
 */
export const exchangeResourceMailboxGetUserForwardingAddress = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxGetUserForwardingAddressData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeResourceMailboxGetUserForwardingAddressResponse,
    ExchangeResourceMailboxGetUserForwardingAddressError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/forwarding-address',
  });
};

/**
 * Update Mailbox Forwarding Address
 * Update mailbox forwarding address, method will return you operation status.
 */
export const exchangeResourceMailboxUpdateUserForwardingAddress = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxUpdateUserForwardingAddressData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeResourceMailboxUpdateUserForwardingAddressResponse,
    ExchangeResourceMailboxUpdateUserForwardingAddressError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/forwarding-address',
  });
};

/**
 * Get Resource Mailbox Stats
 * Get resource mailbox stats, method will return you resource mailbox stats.
 */
export const exchangeResourceMailboxGetResourceMailboxStatistics = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxGetResourceMailboxStatisticsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeResourceMailboxGetResourceMailboxStatisticsResponse,
    ExchangeResourceMailboxGetResourceMailboxStatisticsError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/stats',
  });
};

/**
 * Get All Distribution Lists Of User Mailbox
 * Get all distribution lists of user mailbox, method will return you list of all distribution lists of user mailbox.
 */
export const exchangeResourceMailboxGetAllListsOfUserMailbox = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxGetAllListsOfUserMailboxData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeResourceMailboxGetAllListsOfUserMailboxResponse,
    ExchangeResourceMailboxGetAllListsOfUserMailboxError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/memberships',
  });
};

/**
 * Add User Mailbox To Distribution List
 * Add user mailbox to distribution list, method will return you recently added user mailbox to distribution list.
 */
export const exchangeResourceMailboxAddUserMailboxToList = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxAddUserMailboxToListData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeResourceMailboxAddUserMailboxToListResponse,
    ExchangeResourceMailboxAddUserMailboxToListError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/memberships',
  });
};

/**
 * Remove User Mailbox From Distribution List
 * Remove user mailbox from distribution list, method will return you updated user mailbox distribution list.
 */
export const exchangeResourceMailboxRemoveUserMailboxFromList = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxRemoveUserMailboxFromListData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangeResourceMailboxRemoveUserMailboxFromListResponse,
    ExchangeResourceMailboxRemoveUserMailboxFromListError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/memberships',
  });
};

/**
 * Get Delegates For Resource Mailbox
 * Get delegates for resource mailbox, method will return you a list of delegates for resource mailbox.
 */
export const exchangeResourceMailboxGetDelegatesForResourceMailbox = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxGetDelegatesForResourceMailboxData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeResourceMailboxGetDelegatesForResourceMailboxResponse,
    ExchangeResourceMailboxGetDelegatesForResourceMailboxError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/delegates',
  });
};

/**
 * Add Delegates For Resource Mailbox
 * Add delegates for resource mailbox, method will return you operation status.
 */
export const exchangeResourceMailboxAddDelegatesForResourceMailbox = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxAddDelegatesForResourceMailboxData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeResourceMailboxAddDelegatesForResourceMailboxResponse,
    ExchangeResourceMailboxAddDelegatesForResourceMailboxError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/delegates',
  });
};

/**
 * Remove Delegates For Resource Mailbox
 * Remove delegates for resource mailbox, method will return you operation status.
 */
export const exchangeResourceMailboxRemoveDelegatesForResourceMailbox = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxRemoveDelegatesForResourceMailboxData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangeResourceMailboxRemoveDelegatesForResourceMailboxResponse,
    ExchangeResourceMailboxRemoveDelegatesForResourceMailboxError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/delegates',
  });
};

/**
 * Get Resource Mailbox Book In Policy Users
 * Get resource mailbox book in policy users, method will return you list of resource mailbox book in policy users.
 */
export const exchangeResourceMailboxGetResourceMailboxBookInPolicyUsers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxGetResourceMailboxBookInPolicyUsersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeResourceMailboxGetResourceMailboxBookInPolicyUsersResponse,
    ExchangeResourceMailboxGetResourceMailboxBookInPolicyUsersError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/book-in-policy-users',
  });
};

/**
 * Add Resource Mailbox Book In Policy Request
 * Add resource mailbox book in policy request, method will return you operation status.
 */
export const exchangeResourceMailboxAddResourceMailboxBookInPolicyRequest = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxAddResourceMailboxBookInPolicyRequestData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeResourceMailboxAddResourceMailboxBookInPolicyRequestResponse,
    ExchangeResourceMailboxAddResourceMailboxBookInPolicyRequestError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/book-in-policy-users',
  });
};

/**
 * Remove Resource Mailbox Book In Policy Users
 * Remove resource mailbox book in policy, method will return you operation status.
 */
export const exchangeResourceMailboxRemoveResourceMailboxBookInPolicyUsers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxRemoveResourceMailboxBookInPolicyUsersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangeResourceMailboxRemoveResourceMailboxBookInPolicyUsersResponse,
    ExchangeResourceMailboxRemoveResourceMailboxBookInPolicyUsersError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/book-in-policy-users',
  });
};

/**
 * Get Resource Mailbox Request In Policy Users
 * Get resource mailbox request in policy users, method will return you list of resource mailbox request in policy users.
 */
export const exchangeResourceMailboxGetResourceMailboxRequestInPolicyUsers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxGetResourceMailboxRequestInPolicyUsersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeResourceMailboxGetResourceMailboxRequestInPolicyUsersResponse,
    ExchangeResourceMailboxGetResourceMailboxRequestInPolicyUsersError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/request-in-policy-users',
  });
};

/**
 * Add Resource Mailbox Request In Policy Users
 * Add resource mailbox request in policy users, method will return you operation status.
 */
export const exchangeResourceMailboxAddResourceMailboxRequestInPolicyUsers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxAddResourceMailboxRequestInPolicyUsersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeResourceMailboxAddResourceMailboxRequestInPolicyUsersResponse,
    ExchangeResourceMailboxAddResourceMailboxRequestInPolicyUsersError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/request-in-policy-users',
  });
};

/**
 * Remove Resource Mailbox Request In Policy Users
 * Remove resource mailbox request in policy users, method will return you operation status.
 */
export const exchangeResourceMailboxRemoveResourceMailboxRequestInPolicyUsers =
  <ThrowOnError extends boolean = false>(
    options: Options<
      ExchangeResourceMailboxRemoveResourceMailboxRequestInPolicyUsersData,
      ThrowOnError
    >,
  ) => {
    return (options?.client ?? client).delete<
      ThrowOnError,
      ExchangeResourceMailboxRemoveResourceMailboxRequestInPolicyUsersResponse,
      ExchangeResourceMailboxRemoveResourceMailboxRequestInPolicyUsersError
    >({
      ...options,
      url: '/exchange/resource-mailboxes/{mailboxId}/request-in-policy-users',
    });
  };

/**
 * Get Resource Mailbox Out Policy Users
 * Get resource mailbox out policy users, method will return you list of resource mailbox out policy users.
 */
export const exchangeResourceMailboxGetResourceMailboxOutPolicyUsers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxGetResourceMailboxOutPolicyUsersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeResourceMailboxGetResourceMailboxOutPolicyUsersResponse,
    ExchangeResourceMailboxGetResourceMailboxOutPolicyUsersError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/request-out-policy-users',
  });
};

/**
 * Add Resource Mailbox Out Policy Users
 * Add resource mailbox out policy users, method will return you operation status.
 */
export const exchangeResourceMailboxAddResourceMailboxOutPolicyUsers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxAddResourceMailboxOutPolicyUsersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeResourceMailboxAddResourceMailboxOutPolicyUsersResponse,
    ExchangeResourceMailboxAddResourceMailboxOutPolicyUsersError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/request-out-policy-users',
  });
};

/**
 * Remove Resource Mailbox Out Policy Users
 * Remove resource mailbox out policy users, method will return you operation status.
 */
export const exchangeResourceMailboxRemoveResourceMailboxOutPolicyUsers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxRemoveResourceMailboxOutPolicyUsersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangeResourceMailboxRemoveResourceMailboxOutPolicyUsersResponse,
    ExchangeResourceMailboxRemoveResourceMailboxOutPolicyUsersError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/request-out-policy-users',
  });
};

/**
 * Get Resource Maibox Policy Settings
 * Get resource mailbox policy settings, method will return you resource mailbox policy settings.
 */
export const exchangeResourceMailboxGetResourceMaiboxPolicySettings = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxGetResourceMaiboxPolicySettingsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeResourceMailboxGetResourceMaiboxPolicySettingsResponse,
    ExchangeResourceMailboxGetResourceMaiboxPolicySettingsError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/resource-mailbox-policy-settings',
  });
};

/**
 * Update Resource Maibox Policy Settings
 * Update resource mailbox policy settings, method will return you operation status.
 */
export const exchangeResourceMailboxUpdateResourceMaiboxPolicySettings = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeResourceMailboxUpdateResourceMaiboxPolicySettingsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeResourceMailboxUpdateResourceMaiboxPolicySettingsResponse,
    ExchangeResourceMailboxUpdateResourceMaiboxPolicySettingsError
  >({
    ...options,
    url: '/exchange/resource-mailboxes/{mailboxId}/resource-mailbox-policy-settings',
  });
};

/**
 * Get All Exchange Public Folders
 * Get all exchange public folders, method will return you list of exchange public folders.
 */
export const exchangePublicFolderGetAllExchangePublicFolders = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<
    ExchangePublicFolderGetAllExchangePublicFoldersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangePublicFolderGetAllExchangePublicFoldersResponse,
    ExchangePublicFolderGetAllExchangePublicFoldersError
  >({
    ...options,
    url: '/exchange/public-folders',
  });
};

/**
 * Add Exchange Public Folder
 * Add exchange public folder, method will return you complete details of recently added public folder.
 */
export const exchangePublicFolderAddExchangePublicFolder = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangePublicFolderAddExchangePublicFolderData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    ExchangePublicFolderAddExchangePublicFolderResponse,
    ExchangePublicFolderAddExchangePublicFolderError
  >({
    ...options,
    url: '/exchange/public-folders',
  });
};

/**
 * Get Exchange Public Folder Details
 * Get exchange public folder details, method will return you complete details of public folder.
 */
export const exchangePublicFolderGetExchangePublicFolderDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangePublicFolderGetExchangePublicFolderDetailsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangePublicFolderGetExchangePublicFolderDetailsResponse,
    ExchangePublicFolderGetExchangePublicFolderDetailsError
  >({
    ...options,
    url: '/exchange/public-folders/{publicFolderId}',
  });
};

/**
 * Delete Exchange Public Folder
 * Delete exchange public folder, method will return you operation status.
 */
export const exchangePublicFolderDeleteExchangePublicFolder = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangePublicFolderDeleteExchangePublicFolderData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangePublicFolderDeleteExchangePublicFolderResponse,
    ExchangePublicFolderDeleteExchangePublicFolderError
  >({
    ...options,
    url: '/exchange/public-folders/{publicFolderId}',
  });
};

/**
 * Get Exchange Public Folder General Properties
 * Get exchange public folder general properties, method will return you exchange public folder general properties.
 */
export const exchangePublicFolderGetExchangePublicFolderGeneralProperties = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangePublicFolderGetExchangePublicFolderGeneralPropertiesData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangePublicFolderGetExchangePublicFolderGeneralPropertiesResponse,
    ExchangePublicFolderGetExchangePublicFolderGeneralPropertiesError
  >({
    ...options,
    url: '/exchange/public-folders/{publicFolderId}/general-properties',
  });
};

/**
 * Update Exchange Public Folder General Properties
 * Update exchange public folder general properties, method will return you operation status.
 */
export const exchangePublicFolderUpdateExchangePublicFolderGeneralProperties = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangePublicFolderUpdateExchangePublicFolderGeneralPropertiesData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangePublicFolderUpdateExchangePublicFolderGeneralPropertiesResponse,
    ExchangePublicFolderUpdateExchangePublicFolderGeneralPropertiesError
  >({
    ...options,
    url: '/exchange/public-folders/{publicFolderId}/general-properties',
  });
};

/**
 * Get Exchange Public Folder Advanced Properties
 * Get exchange public folder advanced properties, method will return you exchange public folder advanced properties.
 */
export const exchangePublicFolderGetExchangePublicFolderAdvancedProperties = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangePublicFolderGetExchangePublicFolderAdvancedPropertiesData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangePublicFolderGetExchangePublicFolderAdvancedPropertiesResponse,
    ExchangePublicFolderGetExchangePublicFolderAdvancedPropertiesError
  >({
    ...options,
    url: '/exchange/public-folders/{publicFolderId}/advanced-properties',
  });
};

/**
 * Update Exchange Public Folder Advanced Properties
 * Update exchange public folder advanced properties, method will return you operation status.
 */
export const exchangePublicFolderUpdateExchangePublicFolderAdvancedProperties =
  <ThrowOnError extends boolean = false>(
    options: Options<
      ExchangePublicFolderUpdateExchangePublicFolderAdvancedPropertiesData,
      ThrowOnError
    >,
  ) => {
    return (options?.client ?? client).put<
      ThrowOnError,
      ExchangePublicFolderUpdateExchangePublicFolderAdvancedPropertiesResponse,
      ExchangePublicFolderUpdateExchangePublicFolderAdvancedPropertiesError
    >({
      ...options,
      url: '/exchange/public-folders/{publicFolderId}/advanced-properties',
    });
  };

/**
 * Get Exchange Public Folder Permissions
 * Get exchange public folder permissions, method will return you list of exchange public folder permissions.
 */
export const exchangePublicFolderGetExchangePublicFolderPermissions = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangePublicFolderGetExchangePublicFolderPermissionsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangePublicFolderGetExchangePublicFolderPermissionsResponse,
    ExchangePublicFolderGetExchangePublicFolderPermissionsError
  >({
    ...options,
    url: '/exchange/public-folders/{publicFolderId}/permissions',
  });
};

/**
 * Update Exchange Public Folder Permissions
 * Update exchange public folder permissions, method will return you operation status.
 */
export const exchangePublicFolderUpdateExchangePublicFolderPermissions = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangePublicFolderUpdateExchangePublicFolderPermissionsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangePublicFolderUpdateExchangePublicFolderPermissionsResponse,
    ExchangePublicFolderUpdateExchangePublicFolderPermissionsError
  >({
    ...options,
    url: '/exchange/public-folders/{publicFolderId}/permissions',
  });
};

/**
 * Get Public Folder Accepted Senders
 * Get exchange public folder accepted senders, method will return you list of exchange public folder accepted senders.
 */
export const exchangePublicFolderGetPublicFolderAcceptedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangePublicFolderGetPublicFolderAcceptedSendersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangePublicFolderGetPublicFolderAcceptedSendersResponse,
    ExchangePublicFolderGetPublicFolderAcceptedSendersError
  >({
    ...options,
    url: '/exchange/public-folders/{publicFolderId}/accepted-senders',
  });
};

/**
 * Add Public Folder Accepted Senders
 * Add exchange public folder accepted senders, method will return you operation status.
 */
export const exchangePublicFolderAddPublicFolderAcceptedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangePublicFolderAddPublicFolderAcceptedSendersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangePublicFolderAddPublicFolderAcceptedSendersResponse,
    ExchangePublicFolderAddPublicFolderAcceptedSendersError
  >({
    ...options,
    url: '/exchange/public-folders/{publicFolderId}/accepted-senders',
  });
};

/**
 * Remove Public Folder Accepted Senders
 * Remove exchange public folder accepted senders, method will return you operation status.
 */
export const exchangePublicFolderRemovePublicFolderAcceptedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangePublicFolderRemovePublicFolderAcceptedSendersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangePublicFolderRemovePublicFolderAcceptedSendersResponse,
    ExchangePublicFolderRemovePublicFolderAcceptedSendersError
  >({
    ...options,
    url: '/exchange/public-folders/{publicFolderId}/accepted-senders',
  });
};

/**
 * Get Public Folder Rejected Senders
 * Get exchange public folder rejected senders, method will return you list of exchange public folder rejected senders.
 */
export const exchangePublicFolderGetPublicFolderRejectedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangePublicFolderGetPublicFolderRejectedSendersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangePublicFolderGetPublicFolderRejectedSendersResponse,
    ExchangePublicFolderGetPublicFolderRejectedSendersError
  >({
    ...options,
    url: '/exchange/public-folders/{publicFolderId}/rejected-senders',
  });
};

/**
 * Add Public Folder Rejected Senders
 * Add exchange public folder rejected senders, method will return you operation status.
 */
export const exchangePublicFolderAddPublicFolderRejectedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangePublicFolderAddPublicFolderRejectedSendersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangePublicFolderAddPublicFolderRejectedSendersResponse,
    ExchangePublicFolderAddPublicFolderRejectedSendersError
  >({
    ...options,
    url: '/exchange/public-folders/{publicFolderId}/rejected-senders',
  });
};

/**
 * Remove Public Folder Rejected Senders
 * Remove exchange public folder rejected senders, method will return you operation status.
 */
export const exchangePublicFolderRemovePublicFolderRejectedSenders = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangePublicFolderRemovePublicFolderRejectedSendersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangePublicFolderRemovePublicFolderRejectedSendersResponse,
    ExchangePublicFolderRemovePublicFolderRejectedSendersError
  >({
    ...options,
    url: '/exchange/public-folders/{publicFolderId}/rejected-senders',
  });
};

/**
 * Get Public Folder Email Addresses
 * Get exchange public folder email addresses, method will return you list of exchange public folder email addresses.
 */
export const exchangePublicFolderGetPublicFolderEmailAddresses = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangePublicFolderGetPublicFolderEmailAddressesData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangePublicFolderGetPublicFolderEmailAddressesResponse,
    ExchangePublicFolderGetPublicFolderEmailAddressesError
  >({
    ...options,
    url: '/exchange/public-folders/{publicFolderId}/email-addresses',
  });
};

/**
 * Add Public Folder Email Addresses
 * Add exchange public folder email addresses, method will return you operation status.
 */
export const exchangePublicFolderAddPublicFolderEmailAddresses = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangePublicFolderAddPublicFolderEmailAddressesData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    ExchangePublicFolderAddPublicFolderEmailAddressesResponse,
    ExchangePublicFolderAddPublicFolderEmailAddressesError
  >({
    ...options,
    url: '/exchange/public-folders/{publicFolderId}/email-addresses',
  });
};

/**
 * Delete Public Folder Email Addresses
 * Delete exchange public folder email addresses, method will return you operation status.
 */
export const exchangePublicFolderDeletePublicFolderEmailAddresses = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangePublicFolderDeletePublicFolderEmailAddressesData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangePublicFolderDeletePublicFolderEmailAddressesResponse,
    ExchangePublicFolderDeletePublicFolderEmailAddressesError
  >({
    ...options,
    url: '/exchange/public-folders/{publicFolderId}/email-addresses',
  });
};

/**
 * Get Public Folder Forwarding Address
 * Get exchange public folder Forwarding address, method will return you exchange public folder Forwarding address details.
 */
export const exchangePublicFolderGetPublicFolderForwardingAddress = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangePublicFolderGetPublicFolderForwardingAddressData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangePublicFolderGetPublicFolderForwardingAddressResponse,
    ExchangePublicFolderGetPublicFolderForwardingAddressError
  >({
    ...options,
    url: '/exchange/public-folders/{publicFolderId}/forwarding-address',
  });
};

/**
 * Update Public Folder Forwarding Address
 * Update exchange public folder forwarding address, method will return you operation status.
 */
export const exchangePublicFolderUpdatePublicFolderForwardingAddress = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangePublicFolderUpdatePublicFolderForwardingAddressData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangePublicFolderUpdatePublicFolderForwardingAddressResponse,
    ExchangePublicFolderUpdatePublicFolderForwardingAddressError
  >({
    ...options,
    url: '/exchange/public-folders/{publicFolderId}/forwarding-address',
  });
};

/**
 * Enable Disable Public Folder
 * Enable disable public folder, method will return you operation status.
 */
export const exchangePublicFolderEnableDisablePublicFolder = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangePublicFolderEnableDisablePublicFolderData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangePublicFolderEnableDisablePublicFolderResponse,
    ExchangePublicFolderEnableDisablePublicFolderError
  >({
    ...options,
    url: '/exchange/public-folders/{publicFolderId}/enable-disable',
  });
};

/**
 * Add Exchange Journal Rule
 * Add exchange journal rule, method will return you complete details of recently added journal rule.
 */
export const exchangeJournalRuleAddExchangeJournalRule = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExchangeJournalRuleAddExchangeJournalRuleData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    ExchangeJournalRuleAddExchangeJournalRuleResponse,
    ExchangeJournalRuleAddExchangeJournalRuleError
  >({
    ...options,
    url: '/exchange/organizations/{organizationId}/journal-rules',
  });
};

/**
 * Delete Exchange Journal Rule
 * Delete exchange journal rule, method will return you operation status.
 */
export const exchangeJournalRuleDeleteExchangeJournalRule = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeJournalRuleDeleteExchangeJournalRuleData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangeJournalRuleDeleteExchangeJournalRuleResponse,
    ExchangeJournalRuleDeleteExchangeJournalRuleError
  >({
    ...options,
    url: '/exchange/organizations/{organizationId}/journal-rules',
  });
};

/**
 * Get all Exchange Journal Rules
 * Get all exchange journal rule, method will return you list of journal rules.
 */
export const exchangeJournalRuleGetAllExchangeJournalRules = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<
    ExchangeJournalRuleGetAllExchangeJournalRulesData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeJournalRuleGetAllExchangeJournalRulesResponse,
    ExchangeJournalRuleGetAllExchangeJournalRulesError
  >({
    ...options,
    url: '/exchange/organizations/journal-rules',
  });
};

/**
 * Enable Disable Exchange Blocked Domain Rule
 * Enable disable exchange blocked domain rule, method will return you operation status.
 */
export const exchangeJournalRuleEnableDisableExchangeJournalRule = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeJournalRuleEnableDisableExchangeJournalRuleData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeJournalRuleEnableDisableExchangeJournalRuleResponse,
    ExchangeJournalRuleEnableDisableExchangeJournalRuleError
  >({
    ...options,
    url: '/exchange/organizations/{organizationId}/journal-rules/enable-disable',
  });
};

/**
 * Get Blocked Domain Rule Details
 * Get blocked domain rule details, method will return you blocked domain rule details.
 */
export const exchangeBlockedDomainRuleGetBlockedDomainRuleDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeBlockedDomainRuleGetBlockedDomainRuleDetailsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeBlockedDomainRuleGetBlockedDomainRuleDetailsResponse,
    ExchangeBlockedDomainRuleGetBlockedDomainRuleDetailsError
  >({
    ...options,
    url: '/exchange/organizations/{organizationId}/blocked-domain-rules',
  });
};

/**
 * Update Exchange Blocked Domain Rule
 * Update exchange blocked domain rule, method will return you updated blocked domain rule details.
 */
export const exchangeBlockedDomainRuleUpdateExchangeBlockedDomainRule = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeBlockedDomainRuleUpdateExchangeBlockedDomainRuleData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeBlockedDomainRuleUpdateExchangeBlockedDomainRuleResponse,
    ExchangeBlockedDomainRuleUpdateExchangeBlockedDomainRuleError
  >({
    ...options,
    url: '/exchange/organizations/{organizationId}/blocked-domain-rules',
  });
};

/**
 * Add Exchange Blocked Domain Rule
 * Add exchange blocked domain rule, method will return you recently added blocked domain rule details.
 */
export const exchangeBlockedDomainRuleAddExchangeBlockedDomainRule = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeBlockedDomainRuleAddExchangeBlockedDomainRuleData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    ExchangeBlockedDomainRuleAddExchangeBlockedDomainRuleResponse,
    ExchangeBlockedDomainRuleAddExchangeBlockedDomainRuleError
  >({
    ...options,
    url: '/exchange/organizations/{organizationId}/blocked-domain-rules',
  });
};

/**
 * Delete Exchange Blocked Domain Rule
 * Delete exchange blocked domain rule, method will return you operation status.
 */
export const exchangeBlockedDomainRuleDeleteExchangeBlockedDomainRule = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeBlockedDomainRuleDeleteExchangeBlockedDomainRuleData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangeBlockedDomainRuleDeleteExchangeBlockedDomainRuleResponse,
    ExchangeBlockedDomainRuleDeleteExchangeBlockedDomainRuleError
  >({
    ...options,
    url: '/exchange/organizations/{organizationId}/blocked-domain-rules',
  });
};

/**
 * Get all Exchange Blocked Domain Rules
 * Get exchange blocked domain rules, method will return you list of exchange blocked domain rules.
 */
export const exchangeBlockedDomainRuleGetExchangeBlockedDomainRules = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<
    ExchangeBlockedDomainRuleGetExchangeBlockedDomainRulesData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeBlockedDomainRuleGetExchangeBlockedDomainRulesResponse,
    ExchangeBlockedDomainRuleGetExchangeBlockedDomainRulesError
  >({
    ...options,
    url: '/exchange/organizations/blocked-domain-rules',
  });
};

/**
 * Enable Disable Exchange Blocked Domain Rule
 * Enable disable exchange blocked domain rule, method will return you operation status.
 */
export const exchangeBlockedDomainRuleEnableDisableExchangeBlockedDomainRule = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeBlockedDomainRuleEnableDisableExchangeBlockedDomainRuleData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeBlockedDomainRuleEnableDisableExchangeBlockedDomainRuleResponse,
    ExchangeBlockedDomainRuleEnableDisableExchangeBlockedDomainRuleError
  >({
    ...options,
    url: '/exchange/organizations/{organizationId}/blocked-domain-rules/enable-disable',
  });
};

/**
 * Get All Exchange Mail Disclaimers
 * Get all exchange mail disclaimer, method will return you list of exchange mail disclaimers.
 */
export const exchangeMailDisclaimerGetAllExchangeMailDisclaimers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeMailDisclaimerGetAllExchangeMailDisclaimersData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeMailDisclaimerGetAllExchangeMailDisclaimersResponse,
    ExchangeMailDisclaimerGetAllExchangeMailDisclaimersError
  >({
    ...options,
    url: '/exchange/organizations/{organizationId}/mail-disclaimers',
  });
};

/**
 * Update Exchange Mail Disclaimer
 * Update exchange mail disclaimer, method will return you operation status.
 */
export const exchangeMailDisclaimerUpdateExchangeMailDisclaimer = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeMailDisclaimerUpdateExchangeMailDisclaimerData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeMailDisclaimerUpdateExchangeMailDisclaimerResponse,
    ExchangeMailDisclaimerUpdateExchangeMailDisclaimerError
  >({
    ...options,
    url: '/exchange/organizations/{organizationId}/mail-disclaimers',
  });
};

/**
 * Add Exchange Mail Disclaimer
 * Add exchange mail disclaimer, method will return you recently added mail disclaimer details.
 */
export const exchangeMailDisclaimerAddExchangeMailDisclaimer = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeMailDisclaimerAddExchangeMailDisclaimerData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    ExchangeMailDisclaimerAddExchangeMailDisclaimerResponse,
    ExchangeMailDisclaimerAddExchangeMailDisclaimerError
  >({
    ...options,
    url: '/exchange/organizations/{organizationId}/mail-disclaimers',
  });
};

/**
 * Delete Exchange Mail Disclaimer
 * Delete exchange mail disclaimer, method will return you operation status.
 */
export const exchangeMailDisclaimerDeleteExchangeMailDisclaimer = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeMailDisclaimerDeleteExchangeMailDisclaimerData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    ExchangeMailDisclaimerDeleteExchangeMailDisclaimerResponse,
    ExchangeMailDisclaimerDeleteExchangeMailDisclaimerError
  >({
    ...options,
    url: '/exchange/organizations/{organizationId}/mail-disclaimers',
  });
};

/**
 * Enable Disable Exchange Mail Disclaimer
 * Enable disable exchange mail disclaimer, method will return you operation status.
 */
export const exchangeMailDisclaimerEnableDisableExchangeMailDisclaimer = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    ExchangeMailDisclaimerEnableDisableExchangeMailDisclaimerData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    ExchangeMailDisclaimerEnableDisableExchangeMailDisclaimerResponse,
    ExchangeMailDisclaimerEnableDisableExchangeMailDisclaimerError
  >({
    ...options,
    url: '/exchange/organizations/{organizationId}/mail-disclaimers/enable-disable',
  });
};

/**
 * Get all Exchange Mailboxes Database
 * Get all exchange mailboxes database, method will return you list of exchange mailbox database.
 */
export const exgConfsGetAllExgMailBoxesDb = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgConfsGetAllExgMailBoxesDbData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExgConfsGetAllExgMailBoxesDbResponse,
    ExgConfsGetAllExgMailBoxesDbError
  >({
    ...options,
    url: '/exchange/{serverRoleId}/mailbox-databases',
  });
};

/**
 * Get all Assigned Exchange Mailboxes Database
 * Get all exchange mailboxes database, method will return you list of exchange mailbox database.
 */
export const exgConfsGetAllExgMailBoxesDbByUserId = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgConfsGetAllExgMailBoxesDbByUserIdData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExgConfsGetAllExgMailBoxesDbByUserIdResponse,
    ExgConfsGetAllExgMailBoxesDbByUserIdError
  >({
    ...options,
    url: '/exchange/{serverRoleId}/mailbox-databases/{userId}',
  });
};

/**
 * Get all Exchange Public Folder Mailboxes
 * Get all exchange public folder mailboxes, method will return you list of exchange public folder mailboxes.
 */
export const exgConfsGetAllExgPfMailBoxes = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgConfsGetAllExgPfMailBoxesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExgConfsGetAllExgPfMailBoxesResponse,
    ExgConfsGetAllExgPfMailBoxesError
  >({
    ...options,
    url: '/exchange/{serverRoleId}/public-folder-mailboxes',
  });
};

/**
 * Get all Assigned Exchange Public Folder Mailboxes
 * Get all exchange public folder mailboxes, method will return you operation status.
 */
export const exgConfsGetAllExgPfMailBoxesByUserId = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgConfsGetAllExgPfMailBoxesByUserIdData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExgConfsGetAllExgPfMailBoxesByUserIdResponse,
    ExgConfsGetAllExgPfMailBoxesByUserIdError
  >({
    ...options,
    url: '/exchange/{serverRoleId}/public-folder-mailboxes/{userId}',
  });
};

/**
 * Active Sync Policies
 * Active sync policies, method will return you list of policies.
 */
export const exgConfsActiveSyncPolicies = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExgConfsActiveSyncPoliciesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExgConfsActiveSyncPoliciesResponse,
    ExgConfsActiveSyncPoliciesError
  >({
    ...options,
    url: '/exchange/{serverRoleId}/activesync-policies',
  });
};

/**
 * Get Exchange Lists By Administrator.
 * Get exchange lists by administrator, method will return you list of exchange distribution list.
 */
export const exchangeGetExchangeListsByAdministrator = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExchangeGetExchangeListsByAdministratorData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeGetExchangeListsByAdministratorResponse,
    ExchangeGetExchangeListsByAdministratorError
  >({
    ...options,
    url: '/exchange/distribution-lists/by-administrator',
  });
};

/**
 * Is User Distribution List Member
 * Is user distribution list member, method will return you boolean status of user existance.
 */
export const exchangeIsUserDistributionListMember = <
  ThrowOnError extends boolean = false,
>(
  options: Options<ExchangeIsUserDistributionListMemberData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ExchangeIsUserDistributionListMemberResponse,
    ExchangeIsUserDistributionListMemberError
  >({
    ...options,
    url: '/exchange/distribution-lists/{distributionlistsId}/is-member',
  });
};

/**
 * Get all SharePoint Sites
 * Get all SharePoint sites, method will return you list of SharePoint sites.
 */
export const sharePointSiteGetAllSharePointSites = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<SharePointSiteGetAllSharePointSitesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SharePointSiteGetAllSharePointSitesResponse,
    SharePointSiteGetAllSharePointSitesError
  >({
    ...options,
    url: '/sharepoint/sites',
  });
};

/**
 * Add a new SharePoint Site
 * Add SharePoint site, method will return you details of recently added SharePoint site.
 */
export const sharePointSiteAddSharePointSite = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SharePointSiteAddSharePointSiteData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    SharePointSiteAddSharePointSiteResponse,
    SharePointSiteAddSharePointSiteError
  >({
    ...options,
    url: '/sharepoint/sites',
  });
};

/**
 * Get SharePoint Site Details
 * Get SharePoint site details, method will return you complete details of SharePoint site.
 */
export const sharePointSiteGetSharePointSiteDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SharePointSiteGetSharePointSiteDetailsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SharePointSiteGetSharePointSiteDetailsResponse,
    SharePointSiteGetSharePointSiteDetailsError
  >({
    ...options,
    url: '/sharepoint/sites/{sharePointSiteId}',
  });
};

/**
 * Delete SharePoint Site
 * Delete SharePoint site, method will return you operation status.
 */
export const sharePointSiteDeleteSharePointSite = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SharePointSiteDeleteSharePointSiteData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    SharePointSiteDeleteSharePointSiteResponse,
    SharePointSiteDeleteSharePointSiteError
  >({
    ...options,
    url: '/sharepoint/sites/{sharePointSiteId}',
  });
};

/**
 * Get all SharePoint Subsites
 * Get all SharePoint subsites, method will return you list of SharePoint subsites.
 */
export const sharePointSiteGetAllSharePointSubSites = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SharePointSiteGetAllSharePointSubSitesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SharePointSiteGetAllSharePointSubSitesResponse,
    SharePointSiteGetAllSharePointSubSitesError
  >({
    ...options,
    url: '/sharepoint/sites/{sharePointSiteId}/subsites',
  });
};

/**
 * Add a new SharePoint Subsite
 * Add SharePoint subsite, method will return you complete details of recently added SharePoint subsite.
 */
export const sharePointSiteAddSharePointSubSite = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SharePointSiteAddSharePointSubSiteData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    SharePointSiteAddSharePointSubSiteResponse,
    SharePointSiteAddSharePointSubSiteError
  >({
    ...options,
    url: '/sharepoint/sites/{sharePointSiteId}/subsites',
  });
};

/**
 * Get all SharePoint Site Roles
 * Get all SharePoint site roles, method will return you list of SharePoint site roles.
 */
export const sharePointSiteGetAllSharePointSiteRoles = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SharePointSiteGetAllSharePointSiteRolesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SharePointSiteGetAllSharePointSiteRolesResponse,
    SharePointSiteGetAllSharePointSiteRolesError
  >({
    ...options,
    url: '/sharepoint/sites/{sharePointSiteId}/roles',
  });
};

/**
 * Delete SharePoint Subsite
 * Delete SharePoint subsite, method will return you operation status.
 */
export const sharePointSiteDeleteSharePointSubSite = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SharePointSiteDeleteSharePointSubSiteData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    SharePointSiteDeleteSharePointSubSiteResponse,
    SharePointSiteDeleteSharePointSubSiteError
  >({
    ...options,
    url: '/sharepoint/sites/{sharePointSubSiteId}/subsites',
  });
};

/**
 * Get SharePoint Site Stats
 * Get SharePoint site summary, method will return you SharePoint site summary.
 */
export const sharePointSiteGetSharePointSiteStats = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SharePointSiteGetSharePointSiteStatsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SharePointSiteGetSharePointSiteStatsResponse,
    SharePointSiteGetSharePointSiteStatsError
  >({
    ...options,
    url: '/sharepoint/sites/{sharePointSiteId}/stats',
  });
};

/**
 * Get SharePoint Users
 * Get SharePoint users, method will return you list of SharePoint users.
 */
export const sharePointUserGetSharePointUsers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SharePointUserGetSharePointUsersData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SharePointUserGetSharePointUsersResponse,
    SharePointUserGetSharePointUsersError
  >({
    ...options,
    url: '/sharepoint/sites/{siteId}/users',
  });
};

/**
 * Add a new SharePoint User
 * Add SharePoint user, method will return you operation status.
 */
export const sharePointUserAddSharePointUser = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SharePointUserAddSharePointUserData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    SharePointUserAddSharePointUserResponse,
    SharePointUserAddSharePointUserError
  >({
    ...options,
    url: '/sharepoint/sites/{siteId}/users',
  });
};

/**
 * Get SharePoint User Details
 * Get SharePoint user details, method will return you complete details of SharePoint user.
 */
export const sharePointUserGetSharePointUserDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SharePointUserGetSharePointUserDetailsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SharePointUserGetSharePointUserDetailsResponse,
    SharePointUserGetSharePointUserDetailsError
  >({
    ...options,
    url: '/sharepoint/sites/{siteId}/users/{sharePointUserId}',
  });
};

/**
 * Delete SharePoint Site User
 * Delete SharePoint site user, method will return you operation status.
 */
export const sharePointUserDeleteSharePointSiteUser = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SharePointUserDeleteSharePointSiteUserData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    SharePointUserDeleteSharePointSiteUserResponse,
    SharePointUserDeleteSharePointSiteUserError
  >({
    ...options,
    url: '/sharepoint/sites/{siteId}/users/{userId}',
  });
};

/**
 * Get SharePoint User Roles
 * Get SharePoint user roles, method will return you list of SharePoint user Roles.
 */
export const sharePointUserGetSharePointUserRoles = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SharePointUserGetSharePointUserRolesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SharePointUserGetSharePointUserRolesResponse,
    SharePointUserGetSharePointUserRolesError
  >({
    ...options,
    url: '/sharepoint/sites/{siteId}/users/{userId}/roles',
  });
};

/**
 * Update SharePoint User Roles
 * Update SharePoint user roles, method will return you operation status.
 */
export const sharePointUserUpdateSharePointUserRoles = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SharePointUserUpdateSharePointUserRolesData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    SharePointUserUpdateSharePointUserRolesResponse,
    SharePointUserUpdateSharePointUserRolesError
  >({
    ...options,
    url: '/sharepoint/sites/{siteId}/users/{userId}/roles',
  });
};

/**
 * Change SharePoint User Password
 * Change SharePoint user password, method will return you operation status.
 */
export const sharePointUserChangeSharePointUserPassword = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    SharePointUserChangeSharePointUserPasswordData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    SharePointUserChangeSharePointUserPasswordResponse,
    SharePointUserChangeSharePointUserPasswordError
  >({
    ...options,
    url: '/sharepoint/sites/{siteId}/users/{userId}/change-password',
  });
};

/**
 * Get SharePoint User Properties
 * Get SharePoint user properties, method will return you list of SharePoint user properties.
 */
export const sharePointUserGetSharePointUserProperties = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SharePointUserGetSharePointUserPropertiesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SharePointUserGetSharePointUserPropertiesResponse,
    SharePointUserGetSharePointUserPropertiesError
  >({
    ...options,
    url: '/sharepoint/sites/{siteId}/users/{userId}/general-profile',
  });
};

/**
 * Update SharePoint User Properties
 * Update SharePoint user properties, method will return you operation status.
 */
export const sharePointUserUpdateSharePointUserProperties = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    SharePointUserUpdateSharePointUserPropertiesData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    SharePointUserUpdateSharePointUserPropertiesResponse,
    SharePointUserUpdateSharePointUserPropertiesError
  >({
    ...options,
    url: '/sharepoint/sites/{siteId}/users/{userId}/general-profile',
  });
};

/**
 * Get Existing SharePoint Users
 * Get existing SharePoint user, method will return you list of existing SharePoint users.
 */
export const sharePointUserGetExistingSharePointUsers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SharePointUserGetExistingSharePointUsersData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SharePointUserGetExistingSharePointUsersResponse,
    SharePointUserGetExistingSharePointUsersError
  >({
    ...options,
    url: '/sharepoint/sites/{siteId}/users/existing',
  });
};

/**
 * Get SharePoint Groups
 * Get SharePoint groups, method will return you list of SharePoint groups.
 */
export const sharePointGroupGetSharePointGroups = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SharePointGroupGetSharePointGroupsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SharePointGroupGetSharePointGroupsResponse,
    SharePointGroupGetSharePointGroupsError
  >({
    ...options,
    url: '/sharepoint/sites/{siteId}/groups',
  });
};

/**
 * Add a new SharePoint Group
 * Add SharePoint group, method will return you operation status.
 */
export const sharePointGroupAddSharePointGroup = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SharePointGroupAddSharePointGroupData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    SharePointGroupAddSharePointGroupResponse,
    SharePointGroupAddSharePointGroupError
  >({
    ...options,
    url: '/sharepoint/sites/{siteId}/groups',
  });
};

/**
 * Delete SharePoint Group
 * Delete SharePoint group, method will return you operation status.
 */
export const sharePointGroupDeleteSharePointGroups = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SharePointGroupDeleteSharePointGroupsData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    SharePointGroupDeleteSharePointGroupsResponse,
    SharePointGroupDeleteSharePointGroupsError
  >({
    ...options,
    url: '/sharepoint/sites/{siteId}/groups/{groupName}',
  });
};

/**
 * Get SharePoint Group Roles
 * Get SharePoint group roles, method will return you list of group roles.
 */
export const sharePointGroupGetSharePointGroupRoles = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SharePointGroupGetSharePointGroupRolesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SharePointGroupGetSharePointGroupRolesResponse,
    SharePointGroupGetSharePointGroupRolesError
  >({
    ...options,
    url: '/sharepoint/sites/{siteId}/groups/{groupName}/roles',
  });
};

/**
 * Update SharePoint Group Roles
 * Update SharePoint group roles, method will return you operation status.
 */
export const sharePointGroupUpdateSharePointGroupRoles = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SharePointGroupUpdateSharePointGroupRolesData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    SharePointGroupUpdateSharePointGroupRolesResponse,
    SharePointGroupUpdateSharePointGroupRolesError
  >({
    ...options,
    url: '/sharepoint/sites/{siteId}/groups/{groupName}/roles',
  });
};

/**
 * Get SharePoint Group Members
 * Get SharePoint group members, method will return you list of SharePoint group members.
 */
export const sharePointGroupGetSharePointGroupUsers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SharePointGroupGetSharePointGroupUsersData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SharePointGroupGetSharePointGroupUsersResponse,
    SharePointGroupGetSharePointGroupUsersError
  >({
    ...options,
    url: '/sharepoint/sites/{siteId}/groups/{groupName}/group-members',
  });
};

/**
 * Add SharePoint Group Members
 * Add SharePoint group members, method will return you operation status.
 */
export const sharePointGroupAddSharePointGroupUsers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SharePointGroupAddSharePointGroupUsersData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    SharePointGroupAddSharePointGroupUsersResponse,
    SharePointGroupAddSharePointGroupUsersError
  >({
    ...options,
    url: '/sharepoint/sites/{siteId}/groups/{groupName}/group-members',
  });
};

/**
 * Remove SharePoint Group Members
 * Remove SharePoint group members, method will return you operation status.
 */
export const sharePointGroupRemoveSharePointGroupUsers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SharePointGroupRemoveSharePointGroupUsersData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    SharePointGroupRemoveSharePointGroupUsersResponse,
    SharePointGroupRemoveSharePointGroupUsersError
  >({
    ...options,
    url: '/sharepoint/sites/{siteId}/groups/{groupName}/group-members',
  });
};

/**
 * Get User SharePoint Web Applications
 * Get user SharePoint web applications, method will return you list of user SharePoint web applications.
 */
export const sharePointConfGetUserSpWebApplications = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SharePointConfGetUserSpWebApplicationsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SharePointConfGetUserSpWebApplicationsResponse,
    SharePointConfGetUserSpWebApplicationsError
  >({
    ...options,
    url: '/sharepoint/{serverRoleId}/web-applications/{userId}',
  });
};

/**
 * Get SharePoint Server Web Applications
 * Get SharePoint server web applications, method will return you list of SharePoint server web applications.
 */
export const sharePointServerGetSharePointServerWebApplications = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    SharePointServerGetSharePointServerWebApplicationsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SharePointServerGetSharePointServerWebApplicationsResponse,
    SharePointServerGetSharePointServerWebApplicationsError
  >({
    ...options,
    url: '/sharepoint-server/{serverRoleId}/web-applications',
  });
};

/**
 * Get SharePoint Server Locales
 * Get SharePoint server locales, method will return you list of SharePoint server locales.
 */
export const sharePointServerGetSharePointServerLocales = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    SharePointServerGetSharePointServerLocalesData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SharePointServerGetSharePointServerLocalesResponse,
    SharePointServerGetSharePointServerLocalesError
  >({
    ...options,
    url: '/sharepoint-server/{serverRoleId}/locales',
  });
};

/**
 * Get SharePoint Server Web Templates
 * Get SharePoint server web templates, method will return you list of SharePoint server web templates.
 */
export const sharePointServerGetSharePointServerWebTemplates = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    SharePointServerGetSharePointServerWebTemplatesData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SharePointServerGetSharePointServerWebTemplatesResponse,
    SharePointServerGetSharePointServerWebTemplatesError
  >({
    ...options,
    url: '/sharepoint-server/{serverRoleId}/locales/{localeId}/web-templates',
  });
};

/**
 * List Skype Users
 * List skype users, method will return you list of skype users.
 */
export const skypeUserListSkypeUsers = <ThrowOnError extends boolean = false>(
  options?: Options<SkypeUserListSkypeUsersData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SkypeUserListSkypeUsersResponse,
    SkypeUserListSkypeUsersError
  >({
    ...options,
    url: '/skype/users',
  });
};

/**
 * Add a new Skype User
 * Add skype user, method will return you operation status.
 */
export const skypeUserAddSkypeUser = <ThrowOnError extends boolean = false>(
  options: Options<SkypeUserAddSkypeUserData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    SkypeUserAddSkypeUserResponse,
    SkypeUserAddSkypeUserError
  >({
    ...options,
    url: '/skype/users',
  });
};

/**
 * Get Skype User Details
 * Get skype user details, method will return you complete details of skype user.
 */
export const skypeUserGetSkypeUserDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeUserGetSkypeUserDetailsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SkypeUserGetSkypeUserDetailsResponse,
    SkypeUserGetSkypeUserDetailsError
  >({
    ...options,
    url: '/skype/users/{skypeUserId}',
  });
};

/**
 * Delete Skype User
 * Get skype user details, method will return you operation status.
 */
export const skypeUserDeleteSkypeUser = <ThrowOnError extends boolean = false>(
  options: Options<SkypeUserDeleteSkypeUserData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    SkypeUserDeleteSkypeUserResponse,
    SkypeUserDeleteSkypeUserError
  >({
    ...options,
    url: '/skype/users/{skypeUserId}',
  });
};

/**
 * Change Skype User Password
 * Change skype user password, method will return you operation status.
 */
export const skypeUserChangeSkypeUserPassword = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeUserChangeSkypeUserPasswordData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    SkypeUserChangeSkypeUserPasswordResponse,
    SkypeUserChangeSkypeUserPasswordError
  >({
    ...options,
    url: '/skype/users/{userId}/change-password',
  });
};

/**
 * Get Skype User Properties
 * Get skype user properties, method will return you skype user properties.
 */
export const skypeUserGetSkypeUserProperties = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeUserGetSkypeUserPropertiesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SkypeUserGetSkypeUserPropertiesResponse,
    SkypeUserGetSkypeUserPropertiesError
  >({
    ...options,
    url: '/skype/users/{userId}/general-profile',
  });
};

/**
 * Update Skype User Properties
 * Update skype user properties, method will return you operation status.
 */
export const skypeUserUpdateSkypeUserProperties = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeUserUpdateSkypeUserPropertiesData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    SkypeUserUpdateSkypeUserPropertiesResponse,
    SkypeUserUpdateSkypeUserPropertiesError
  >({
    ...options,
    url: '/skype/users/{userId}/general-profile',
  });
};

/**
 * Get Skype User Advanced Settings
 * Get skype user advanced settings, method will return you user advanced settings.
 */
export const skypeUserGetSkypeUserAdvancedSettings = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeUserGetSkypeUserAdvancedSettingsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SkypeUserGetSkypeUserAdvancedSettingsResponse,
    SkypeUserGetSkypeUserAdvancedSettingsError
  >({
    ...options,
    url: '/skype/users/{userId}/advanced-properties',
  });
};

/**
 * Update Skype User Advanced Properties
 * Update skype user advanced properties, method will return you operations status.
 */
export const skypeUserUpdateSkypeUserAdvancedProperties = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    SkypeUserUpdateSkypeUserAdvancedPropertiesData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    SkypeUserUpdateSkypeUserAdvancedPropertiesResponse,
    SkypeUserUpdateSkypeUserAdvancedPropertiesError
  >({
    ...options,
    url: '/skype/users/{userId}/advanced-properties',
  });
};

/**
 * Update Skype User Status
 * Update skype user status, method will return you operations status.
 */
export const skypeUserUpdateSkypeUserStatus = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeUserUpdateSkypeUserStatusData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    SkypeUserUpdateSkypeUserStatusResponse,
    SkypeUserUpdateSkypeUserStatusError
  >({
    ...options,
    url: '/skype/users/{userId}/status',
  });
};

/**
 * Get Skype User Forwarding Settings
 * Get skype user forwarding settings, method will return you user forwarding settings.
 */
export const skypeUserGetSkypeUserForwardingSettings = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeUserGetSkypeUserForwardingSettingsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SkypeUserGetSkypeUserForwardingSettingsResponse,
    SkypeUserGetSkypeUserForwardingSettingsError
  >({
    ...options,
    url: '/skype/users/{userId}/forwarding',
  });
};

/**
 * Update Skype User Forwarding Settings
 * Update skype user forwarding settings, method will return you operation status.
 */
export const skypeUserUpdateSkypeUserForwardingSettings = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    SkypeUserUpdateSkypeUserForwardingSettingsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    SkypeUserUpdateSkypeUserForwardingSettingsResponse,
    SkypeUserUpdateSkypeUserForwardingSettingsError
  >({
    ...options,
    url: '/skype/users/{userId}/forwarding',
  });
};

/**
 * Check Bulk Skype Users Feasibility
 * Check bulk skype users feasibility, method will return you updated bulk user feasibility settings.
 */
export const skypeUserCheckBulkSkypeUsersFeasibility = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeUserCheckBulkSkypeUsersFeasibilityData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    SkypeUserCheckBulkSkypeUsersFeasibilityResponse,
    SkypeUserCheckBulkSkypeUsersFeasibilityError
  >({
    ...options,
    url: '/skype/users/bulk/feasibility',
  });
};

/**
 * Add Bulk Skype Users
 * Add bulk skype users, method will return you list of recenlty added bulk users.
 */
export const skypeUserAddBulkSkypeUsers = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeUserAddBulkSkypeUsersData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    SkypeUserAddBulkSkypeUsersResponse,
    SkypeUserAddBulkSkypeUsersError
  >({
    ...options,
    url: '/skype/users/bulk',
  });
};

/**
 * Update Skype User Telephony Settings
 * Update skype user telephony settings, method will return you operations status.
 */
export const skypeUserUpdateSkypeUserTelephonySettings = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeUserUpdateSkypeUserTelephonySettingsData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    SkypeUserUpdateSkypeUserTelephonySettingsResponse,
    SkypeUserUpdateSkypeUserTelephonySettingsError
  >({
    ...options,
    url: '/skype/users/{userId}/telephony-settings',
  });
};

/**
 * Update Skype User Policy Settings
 * Update skype users policy settings, method will return you operations status.
 */
export const skypeUserUpdateSkypeUserPolicySettings = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeUserUpdateSkypeUserPolicySettingsData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    SkypeUserUpdateSkypeUserPolicySettingsResponse,
    SkypeUserUpdateSkypeUserPolicySettingsError
  >({
    ...options,
    url: '/skype/users/{userId}/policy-settings',
  });
};

/**
 * List SIP Domains
 * Get SIP domains, method will return you list of SIP domains.
 */
export const skypeSipDomainListSipDomains = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<SkypeSipDomainListSipDomainsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SkypeSipDomainListSipDomainsResponse,
    SkypeSipDomainListSipDomainsError
  >({
    ...options,
    url: '/skype/sip-domains',
  });
};

/**
 * Add a new Skype SIP Domain
 * Add SIP domain, method will return you complete details of recently added SIP domain.
 */
export const skypeSipDomainAddSkypeSipDomain = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeSipDomainAddSkypeSipDomainData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    SkypeSipDomainAddSkypeSipDomainResponse,
    SkypeSipDomainAddSkypeSipDomainError
  >({
    ...options,
    url: '/skype/sip-domains',
  });
};

/**
 * Get SIP Domain Details
 * Get SIP domain details, method will return you complete details of SIP domain.
 */
export const skypeSipDomainGetSipDomainDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeSipDomainGetSipDomainDetailsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SkypeSipDomainGetSipDomainDetailsResponse,
    SkypeSipDomainGetSipDomainDetailsError
  >({
    ...options,
    url: '/skype/sip-domains/{sipDomainId}',
  });
};

/**
 * Delete SIP Domain
 * Delete SIP domain, method will return you operation status.
 */
export const skypeSipDomainDeleteSipDomain = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeSipDomainDeleteSipDomainData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    SkypeSipDomainDeleteSipDomainResponse,
    SkypeSipDomainDeleteSipDomainError
  >({
    ...options,
    url: '/skype/sip-domains/{sipDomainId}',
  });
};

/**
 * List Skype Groups
 * List skype groups, method will return you list of skype groups.
 */
export const skypeGroupListSkypeGroups = <ThrowOnError extends boolean = false>(
  options?: Options<SkypeGroupListSkypeGroupsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SkypeGroupListSkypeGroupsResponse,
    SkypeGroupListSkypeGroupsError
  >({
    ...options,
    url: '/skype/response-groups',
  });
};

/**
 * Add a new Skype Response Group
 * Add skype resource group, method will return you complete details of recently added skype resource group.
 */
export const skypeGroupAddSkypeResponseGroup = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeGroupAddSkypeResponseGroupData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    SkypeGroupAddSkypeResponseGroupResponse,
    SkypeGroupAddSkypeResponseGroupError
  >({
    ...options,
    url: '/skype/response-groups',
  });
};

/**
 * Get Skype Group Details
 * Get skype group details, method will return you complete details of skype resource group.
 */
export const skypeGroupGetSkypeGroupDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeGroupGetSkypeGroupDetailsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SkypeGroupGetSkypeGroupDetailsResponse,
    SkypeGroupGetSkypeGroupDetailsError
  >({
    ...options,
    url: '/skype/response-groups/{skypeResponseGroupId}',
  });
};

/**
 * Delete Skype Group
 * Delete skype group, method will return you operation status.
 */
export const skypeGroupDeleteSkypeGroup = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeGroupDeleteSkypeGroupData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    SkypeGroupDeleteSkypeGroupResponse,
    SkypeGroupDeleteSkypeGroupError
  >({
    ...options,
    url: '/skype/response-groups/{skypeResponseGroupId}',
  });
};

/**
 * Get Skype Group Properties
 * Get skype group properties, method will return you skype group properties.
 */
export const skypeGroupGetSkypeGroupProperties = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeGroupGetSkypeGroupPropertiesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SkypeGroupGetSkypeGroupPropertiesResponse,
    SkypeGroupGetSkypeGroupPropertiesError
  >({
    ...options,
    url: '/skype/response-groups/{skypeResponseGroupId}/properties',
  });
};

/**
 * Update Skype Group Properties
 * Update skype group properties, method will return you operation status.
 */
export const skypeGroupUpdateSkypeGroupProperties = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeGroupUpdateSkypeGroupPropertiesData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    SkypeGroupUpdateSkypeGroupPropertiesResponse,
    SkypeGroupUpdateSkypeGroupPropertiesError
  >({
    ...options,
    url: '/skype/response-groups/{skypeResponseGroupId}/properties',
  });
};

/**
 * List Skype Queues
 * List skype queues, method will return you list of skype queues.
 */
export const skypeQueueListSkypeQueues = <ThrowOnError extends boolean = false>(
  options?: Options<SkypeQueueListSkypeQueuesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SkypeQueueListSkypeQueuesResponse,
    SkypeQueueListSkypeQueuesError
  >({
    ...options,
    url: '/skype/queues',
  });
};

/**
 * Add a new Skype Response Queue
 * Add skype response queue, method will return you complete details of recently added skype response queue.
 */
export const skypeQueueAddSkypeResponseQueue = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeQueueAddSkypeResponseQueueData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    SkypeQueueAddSkypeResponseQueueResponse,
    SkypeQueueAddSkypeResponseQueueError
  >({
    ...options,
    url: '/skype/queues',
  });
};

/**
 * Get Skype Queue Details
 * Get skype response queue details, method will return you complete details of skype response queue.
 */
export const skypeQueueGetSkypeQueueDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeQueueGetSkypeQueueDetailsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SkypeQueueGetSkypeQueueDetailsResponse,
    SkypeQueueGetSkypeQueueDetailsError
  >({
    ...options,
    url: '/skype/queues/{skypeResponseQueueId}',
  });
};

/**
 * Delete Skype Queue
 * Delete skype response queue, method will return you operation status.
 */
export const skypeQueueDeleteSkypeQueue = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeQueueDeleteSkypeQueueData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    SkypeQueueDeleteSkypeQueueResponse,
    SkypeQueueDeleteSkypeQueueError
  >({
    ...options,
    url: '/skype/queues/{skypeResponseQueueId}',
  });
};

/**
 * Get Skype Queue Properties
 * Get skype queue properties, method will return you skype queue properties.
 */
export const skypeQueueGetSkypeQueueProperties = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeQueueGetSkypeQueuePropertiesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SkypeQueueGetSkypeQueuePropertiesResponse,
    SkypeQueueGetSkypeQueuePropertiesError
  >({
    ...options,
    url: '/skype/queues/{skypeResponseQueueId}/properties',
  });
};

/**
 * Update Skype Queue Properties
 * Update skype queue properties, method will return you operation status.
 */
export const skypeQueueUpdateSkypeQueueProperties = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeQueueUpdateSkypeQueuePropertiesData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    SkypeQueueUpdateSkypeQueuePropertiesResponse,
    SkypeQueueUpdateSkypeQueuePropertiesError
  >({
    ...options,
    url: '/skype/queues/{skypeResponseQueueId}/properties',
  });
};

/**
 * List Skype Workflows
 * Get all skype workflows, method will return you list of workflows.
 */
export const skypeWorkflowListSkypeWorkflows = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<SkypeWorkflowListSkypeWorkflowsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SkypeWorkflowListSkypeWorkflowsResponse,
    SkypeWorkflowListSkypeWorkflowsError
  >({
    ...options,
    url: '/skype/workflows',
  });
};

/**
 * Add a new Skype Workflow
 * Add skype workflow, method will return you complete details of recently added workflow.
 */
export const skypeWorkflowAddSkypeWorkflow = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeWorkflowAddSkypeWorkflowData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    SkypeWorkflowAddSkypeWorkflowResponse,
    SkypeWorkflowAddSkypeWorkflowError
  >({
    ...options,
    url: '/skype/workflows',
  });
};

/**
 * Get Skype Workflow Details
 * Get skype workflow details, method will return you complete details of workflow.
 */
export const skypeWorkflowGetSkypeWorkflowDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeWorkflowGetSkypeWorkflowDetailsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SkypeWorkflowGetSkypeWorkflowDetailsResponse,
    SkypeWorkflowGetSkypeWorkflowDetailsError
  >({
    ...options,
    url: '/skype/workflows/{workflowId}',
  });
};

/**
 * Delete Skype Workflow
 * Delete skype workflow, method will return you operation status.
 */
export const skypeWorkflowDeleteSkypeWorkflow = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeWorkflowDeleteSkypeWorkflowData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    SkypeWorkflowDeleteSkypeWorkflowResponse,
    SkypeWorkflowDeleteSkypeWorkflowError
  >({
    ...options,
    url: '/skype/workflows/{workflowId}',
  });
};

/**
 * Get Skype Workflow Settings
 * Get skype workflow settings, method will return you workflow settings.
 */
export const skypeWorkflowGetSkypeWorkflowSettings = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeWorkflowGetSkypeWorkflowSettingsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SkypeWorkflowGetSkypeWorkflowSettingsResponse,
    SkypeWorkflowGetSkypeWorkflowSettingsError
  >({
    ...options,
    url: '/skype/workflows/{workflowId}/settings',
  });
};

/**
 * Update Skype Workflow Settings
 * Update skype workflow settings, method will return you operation status.
 */
export const skypeWorkflowUpdateSkypeWorkflowSettings = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeWorkflowUpdateSkypeWorkflowSettingsData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    SkypeWorkflowUpdateSkypeWorkflowSettingsResponse,
    SkypeWorkflowUpdateSkypeWorkflowSettingsError
  >({
    ...options,
    url: '/skype/workflows/{workflowId}/settings',
  });
};

/**
 * Update Workflow Activation Status
 * Update workflow activation status, method will return you operation status.
 */
export const skypeWorkflowUpdateWorkflowActivationStatus = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    SkypeWorkflowUpdateWorkflowActivationStatusData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    SkypeWorkflowUpdateWorkflowActivationStatusResponse,
    SkypeWorkflowUpdateWorkflowActivationStatusError
  >({
    ...options,
    url: '/skype/workflows/{workflowId}/activation',
  });
};

/**
 * Update Workflow Federation Status
 * Update workflow federation status, method will return you operation status.
 */
export const skypeWorkflowUpdateWorkflowFederationStatus = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    SkypeWorkflowUpdateWorkflowFederationStatusData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    SkypeWorkflowUpdateWorkflowFederationStatusResponse,
    SkypeWorkflowUpdateWorkflowFederationStatusError
  >({
    ...options,
    url: '/skype/workflows/{workflowId}/federation',
  });
};

/**
 * Update Workflow Anonymity Status
 * Update workflow anonymity status, method will return you operation status.
 */
export const skypeWorkflowUpdateWorkflowAnonymityStatus = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    SkypeWorkflowUpdateWorkflowAnonymityStatusData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    SkypeWorkflowUpdateWorkflowAnonymityStatusResponse,
    SkypeWorkflowUpdateWorkflowAnonymityStatusError
  >({
    ...options,
    url: '/skype/workflows/{workflowId}/anonymity',
  });
};

/**
 * Update Workflow IVR Settings
 * Update workflow IVR settings, method will return you operation status.
 */
export const skypeWorkflowUpdateWorkflowIvrSettings = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeWorkflowUpdateWorkflowIvrSettingsData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    SkypeWorkflowUpdateWorkflowIvrSettingsResponse,
    SkypeWorkflowUpdateWorkflowIvrSettingsError
  >({
    ...options,
    url: '/skype/workflows/{workflowId}/ivr',
  });
};

/**
 * Get Server Registrar Pools
 * Get server registrar pools, method will return you server registrar pools.
 */
export const skypeServerGetServerRegistrarPools = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeServerGetServerRegistrarPoolsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SkypeServerGetServerRegistrarPoolsResponse,
    SkypeServerGetServerRegistrarPoolsError
  >({
    ...options,
    url: '/skype-server/{serverRoleId}/registrar-pools',
  });
};

/**
 * Get User Assigned Server Pools
 * Get user assigned server pools, method will return you user assigned server pools.
 */
export const skypeServerGetUserAssignedServerPools = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeServerGetUserAssignedServerPoolsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SkypeServerGetUserAssignedServerPoolsResponse,
    SkypeServerGetUserAssignedServerPoolsError
  >({
    ...options,
    url: '/skype-server/{serverRoleId}/registrar-pools/{userId}',
  });
};

/**
 * Get Server Time Zones
 * Get server time zones, method will return you list of server time zones.
 */
export const skypeServerGetServerTimeZones = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeServerGetServerTimeZonesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SkypeServerGetServerTimeZonesResponse,
    SkypeServerGetServerTimeZonesError
  >({
    ...options,
    url: '/skype-server/{serverRoleId}/time-zones',
  });
};

/**
 * List User Line URIs
 * Get all user line URIs, method will return you list of user line URIs.
 */
export const skypeServerListUserLineUris = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<SkypeServerListUserLineUrisData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SkypeServerListUserLineUrisResponse,
    SkypeServerListUserLineUrisError
  >({
    ...options,
    url: '/skype-server/line-uris',
  });
};

/**
 * Get Line URI Details
 * Get line URI details, method will return you line URI details.
 */
export const skypeServerGetLineUriDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeServerGetLineUriDetailsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SkypeServerGetLineUriDetailsResponse,
    SkypeServerGetLineUriDetailsError
  >({
    ...options,
    url: '/skype-server/line-uris/{lineUriId}',
  });
};

/**
 * Get Federated Domains
 * Get federated domains, method will return you list of federated domains.
 */
export const skypeServerGetFederatedDomains = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeServerGetFederatedDomainsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SkypeServerGetFederatedDomainsResponse,
    SkypeServerGetFederatedDomainsError
  >({
    ...options,
    url: '/skype-server/{serverRoleId}/federated-domains',
  });
};

/**
 * Get Skype User Policies
 * Get skype user policies, method will return you list of user policies.
 */
export const skypeServerGetSkypeUserPolicies = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeServerGetSkypeUserPoliciesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SkypeServerGetSkypeUserPoliciesResponse,
    SkypeServerGetSkypeUserPoliciesError
  >({
    ...options,
    url: '/skype-server/{serverRoleId}/user-policies',
  });
};

/**
 * Get Server Application Services
 * Get server application services, method will return you list of server application services.
 */
export const skypeServerGetServerApplicationServices = <
  ThrowOnError extends boolean = false,
>(
  options: Options<SkypeServerGetServerApplicationServicesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SkypeServerGetServerApplicationServicesResponse,
    SkypeServerGetServerApplicationServicesError
  >({
    ...options,
    url: '/skype-server/{serverRoleId}/application-services',
  });
};

/**
 * Get User Assigned Application Services
 * Get user assigned application services, method will return you list of user assigned application services.
 */
export const skypeServerGetUserAssignedApplicationServices = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    SkypeServerGetUserAssignedApplicationServicesData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    SkypeServerGetUserAssignedApplicationServicesResponse,
    SkypeServerGetUserAssignedApplicationServicesError
  >({
    ...options,
    url: '/skype-server/{serverRoleId}/application-services/{userId}',
  });
};

/**
 * List Virtual Machines
 * List virtual machines, method will return you list of virtual machines.
 */
export const virtualMachineListVirtualMachines = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<VirtualMachineListVirtualMachinesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    VirtualMachineListVirtualMachinesResponse,
    VirtualMachineListVirtualMachinesError
  >({
    ...options,
    url: '/virtualization/virtual-machines',
  });
};

/**
 * Add a new Virtual Machine
 * Add virtual machine, method will return you complete details of recently added virtual machine.
 */
export const virtualMachineAddVirtualMachine = <
  ThrowOnError extends boolean = false,
>(
  options: Options<VirtualMachineAddVirtualMachineData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    VirtualMachineAddVirtualMachineResponse,
    VirtualMachineAddVirtualMachineError
  >({
    ...options,
    url: '/virtualization/virtual-machines',
  });
};

/**
 * Get Virtual Machine Details
 * Get virtual machine details, method will return you complete details of virtual machine.
 */
export const virtualMachineGetVirtualMachineDetails = <
  ThrowOnError extends boolean = false,
>(
  options: Options<VirtualMachineGetVirtualMachineDetailsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    VirtualMachineGetVirtualMachineDetailsResponse,
    VirtualMachineGetVirtualMachineDetailsError
  >({
    ...options,
    url: '/virtualization/virtual-machines/{virtualMachineId}',
  });
};

/**
 * Update Virtual Machine
 * Update virtual machine details, method will return you complete details of virtual machine.
 */
export const virtualMachineUpdateVirtualMachine = <
  ThrowOnError extends boolean = false,
>(
  options: Options<VirtualMachineUpdateVirtualMachineData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    VirtualMachineUpdateVirtualMachineResponse,
    VirtualMachineUpdateVirtualMachineError
  >({
    ...options,
    url: '/virtualization/virtual-machines/{virtualMachineId}',
  });
};

/**
 * Delete Virtual Machine
 * Delete virtual machine, method will return you operations status.
 */
export const virtualMachineDeleteVirtualMachine = <
  ThrowOnError extends boolean = false,
>(
  options: Options<VirtualMachineDeleteVirtualMachineData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    VirtualMachineDeleteVirtualMachineResponse,
    VirtualMachineDeleteVirtualMachineError
  >({
    ...options,
    url: '/virtualization/virtual-machines/{virtualMachineId}',
  });
};

/**
 * Update VLAN
 * Update VLAN, method will return you operations status.
 */
export const virtualMachineUpdateVlan = <ThrowOnError extends boolean = false>(
  options: Options<VirtualMachineUpdateVlanData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    VirtualMachineUpdateVlanResponse,
    VirtualMachineUpdateVlanError
  >({
    ...options,
    url: '/virtualization/virtual-machines/{virtualMachineId}/vlan',
  });
};

/**
 * System Virtual Machines List
 * Get system virtual machines, method will return you list of system virtual machines.
 */
export const virtualMachineSystemVirtualMachinesList = <
  ThrowOnError extends boolean = false,
>(
  options: Options<VirtualMachineSystemVirtualMachinesListData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    VirtualMachineSystemVirtualMachinesListResponse,
    VirtualMachineSystemVirtualMachinesListError
  >({
    ...options,
    url: '/virtualization-server/{serverId}/virtual-machines',
  });
};

/**
 * Get System Virtual Machine Settings
 * Get system virtual machine settings, method will return you system virtual machine settings.
 */
export const virtualMachineGetSystemVirtualMachineSettings = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    VirtualMachineGetSystemVirtualMachineSettingsData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    VirtualMachineGetSystemVirtualMachineSettingsResponse,
    VirtualMachineGetSystemVirtualMachineSettingsError
  >({
    ...options,
    url: '/virtualization-server/{serverId}/virtual-machines/{virtualMachineGuid}',
  });
};

/**
 * Get Virtual Machine IP Addresses
 * Get virtual machine IP addresses, method will return you list of virtual machine IP addresses.
 */
export const virtualMachineGetVirtualMachineIpAddresses = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    VirtualMachineGetVirtualMachineIpAddressesData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    VirtualMachineGetVirtualMachineIpAddressesResponse,
    VirtualMachineGetVirtualMachineIpAddressesError
  >({
    ...options,
    url: '/virtualization/virtual-machines/{virtualMachineId}/ip-addresses',
  });
};

/**
 * Assign Virtual Machine IP Addresses
 * Assign virtual machine IP addresses, method will return you operation status.
 */
export const virtualMachineAssignVmIpAddresses = <
  ThrowOnError extends boolean = false,
>(
  options: Options<VirtualMachineAssignVmIpAddressesData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    VirtualMachineAssignVmIpAddressesResponse,
    VirtualMachineAssignVmIpAddressesError
  >({
    ...options,
    url: '/virtualization/virtual-machines/{virtualMachineId}/ip-addresses',
  });
};

/**
 * Delete Virtual Machine Assigned IP Address
 * Delete virtual machine assigned IP address, method will return you operation status.
 */
export const virtualMachineDeleteVmAssignedIpAddress = <
  ThrowOnError extends boolean = false,
>(
  options: Options<VirtualMachineDeleteVmAssignedIpAddressData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    VirtualMachineDeleteVmAssignedIpAddressResponse,
    VirtualMachineDeleteVmAssignedIpAddressError
  >({
    ...options,
    url: '/virtualization/virtual-machines/{virtualMachineId}/ip-addresses/{ipAddressId}',
  });
};

/**
 * Get all Snapshots
 * Get all snapshots, method will return you list of snapshots.
 */
export const virtualMachineGetAllSnapShots = <
  ThrowOnError extends boolean = false,
>(
  options: Options<VirtualMachineGetAllSnapShotsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    VirtualMachineGetAllSnapShotsResponse,
    VirtualMachineGetAllSnapShotsError
  >({
    ...options,
    url: '/virtualization/virtual-machines/{virtualMachineId}/snapshots',
    responseTransformer: VirtualMachineGetAllSnapShotsResponseTransformer,
  });
};

/**
 * Take Snapshot
 * Take snapshot, method will return you complete details of recently taken snapshot.
 */
export const virtualMachineTakeSnapShot = <
  ThrowOnError extends boolean = false,
>(
  options: Options<VirtualMachineTakeSnapShotData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    VirtualMachineTakeSnapShotResponse,
    VirtualMachineTakeSnapShotError
  >({
    ...options,
    url: '/virtualization/virtual-machines/{virtualMachineId}/snapshots',
    responseTransformer: VirtualMachineTakeSnapShotResponseTransformer,
  });
};

/**
 * Apply Snapshot
 * Apply snapshot, method will return you operation status.
 */
export const virtualMachineApplySnapShot = <
  ThrowOnError extends boolean = false,
>(
  options: Options<VirtualMachineApplySnapShotData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    VirtualMachineApplySnapShotResponse,
    VirtualMachineApplySnapShotError
  >({
    ...options,
    url: '/virtualization/virtual-machines/{virtualMachineId}/snapshots/{snapShotId}',
  });
};

/**
 * Get Snapshot Details
 * Get snapshot details, method will return you snapshot details.
 */
export const virtualMachineGetSnapShotDetail = <
  ThrowOnError extends boolean = false,
>(
  options: Options<VirtualMachineGetSnapShotDetailData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    VirtualMachineGetSnapShotDetailResponse,
    VirtualMachineGetSnapShotDetailError
  >({
    ...options,
    url: '/virtualization/virtual-machines/snapshots/{snapShotId}',
    responseTransformer: VirtualMachineGetSnapShotDetailResponseTransformer,
  });
};

/**
 * Delete Snapshot
 * Delete snapshot, method will return you operation status.
 */
export const virtualMachineDeleteSnapShot = <
  ThrowOnError extends boolean = false,
>(
  options: Options<VirtualMachineDeleteSnapShotData, ThrowOnError>,
) => {
  return (options?.client ?? client).delete<
    ThrowOnError,
    VirtualMachineDeleteSnapShotResponse,
    VirtualMachineDeleteSnapShotError
  >({
    ...options,
    url: '/virtualization/virtual-machines/{virtualMachineId}/snapshots/{snapshotId}',
  });
};

/**
 * Change Password
 * Change password, method will return you operation status.
 */
export const virtualMachineChangePassword = <
  ThrowOnError extends boolean = false,
>(
  options: Options<VirtualMachineChangePasswordData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    VirtualMachineChangePasswordResponse,
    VirtualMachineChangePasswordError
  >({
    ...options,
    url: '/virtualization/virtual-machines/{virtualMachineId}/password',
  });
};

/**
 * Start Virtual Machine
 * Start virtual machine, method will return you operation status.
 */
export const virtualMachineStartVirtualMachine = <
  ThrowOnError extends boolean = false,
>(
  options: Options<VirtualMachineStartVirtualMachineData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    VirtualMachineStartVirtualMachineResponse,
    VirtualMachineStartVirtualMachineError
  >({
    ...options,
    url: '/virtualization/virtual-machines/{virtualMachineId}/start',
  });
};

/**
 * Pause Virtual Machine
 * Pause virtual machine, method will return you operation status.
 */
export const virtualMachinePauseVirtualMachine = <
  ThrowOnError extends boolean = false,
>(
  options: Options<VirtualMachinePauseVirtualMachineData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    VirtualMachinePauseVirtualMachineResponse,
    VirtualMachinePauseVirtualMachineError
  >({
    ...options,
    url: '/virtualization/virtual-machines/{virtualMachineId}/pause',
  });
};

/**
 * Resume Virtual Machine
 * Resume virtual machine, method will return you operation status.
 */
export const virtualMachineResumeVirtualMachine = <
  ThrowOnError extends boolean = false,
>(
  options: Options<VirtualMachineResumeVirtualMachineData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    VirtualMachineResumeVirtualMachineResponse,
    VirtualMachineResumeVirtualMachineError
  >({
    ...options,
    url: '/virtualization/virtual-machines/{virtualMachineId}/resume',
  });
};

/**
 * Reboot Virtual Machine
 * Reboot virtual machine, method will return you operation status.
 */
export const virtualMachineRebootVirtualMachine = <
  ThrowOnError extends boolean = false,
>(
  options: Options<VirtualMachineRebootVirtualMachineData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    VirtualMachineRebootVirtualMachineResponse,
    VirtualMachineRebootVirtualMachineError
  >({
    ...options,
    url: '/virtualization/virtual-machines/{virtualMachineId}/reboot',
  });
};

/**
 * Shut Down Virtual Machine
 * Shut down virtual machine, method will return you operation status.
 */
export const virtualMachineShutdownVirtualMachine = <
  ThrowOnError extends boolean = false,
>(
  options: Options<VirtualMachineShutdownVirtualMachineData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    VirtualMachineShutdownVirtualMachineResponse,
    VirtualMachineShutdownVirtualMachineError
  >({
    ...options,
    url: '/virtualization/virtual-machines/{virtualMachineId}/shutdown',
  });
};

/**
 * Import Virtual Machine
 * Import virtual machine, method will return you complete details of recently imported virtual machine.
 */
export const virtualMachineImportVirtualMachine = <
  ThrowOnError extends boolean = false,
>(
  options: Options<VirtualMachineImportVirtualMachineData, ThrowOnError>,
) => {
  return (options?.client ?? client).post<
    ThrowOnError,
    VirtualMachineImportVirtualMachineResponse,
    VirtualMachineImportVirtualMachineError
  >({
    ...options,
    url: '/virtualization/virtual-machines/importvm',
  });
};

/**
 * Transfer Virtual Machine
 * Transfer virtual machine, method will return you complete details of recently transfered virtual machine.
 */
export const virtualMachineTransferVirtualMachine = <
  ThrowOnError extends boolean = false,
>(
  options: Options<VirtualMachineTransferVirtualMachineData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    VirtualMachineTransferVirtualMachineResponse,
    VirtualMachineTransferVirtualMachineError
  >({
    ...options,
    url: '/virtualization/virtual-machines/{virtualMachineId}/transfer',
  });
};

/**
 * Get Virtual Machine Current State
 * Get virtual machine current state, method will return you virtual machine current state.
 */
export const virtualMachineGetVirtualMachineCurrentState = <
  ThrowOnError extends boolean = false,
>(
  options: Options<
    VirtualMachineGetVirtualMachineCurrentStateData,
    ThrowOnError
  >,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    VirtualMachineGetVirtualMachineCurrentStateResponse,
    VirtualMachineGetVirtualMachineCurrentStateError
  >({
    ...options,
    url: '/virtualization/virtual-machines/{virtualMachineId}/state',
  });
};

/**
 * Fetch Machine Password
 * Fetch virtual machine password, method will return you operation status.
 */
export const virtualMachineFetchMachinePassword = <
  ThrowOnError extends boolean = false,
>(
  options: Options<VirtualMachineFetchMachinePasswordData, ThrowOnError>,
) => {
  return (options?.client ?? client).put<
    ThrowOnError,
    VirtualMachineFetchMachinePasswordResponse,
    VirtualMachineFetchMachinePasswordError
  >({
    ...options,
    url: '/virtualization/virtual-machines/{virtualMachineId}/fetchpassword',
  });
};

/**
 * Get all Base OS Types
 * Get all base OS types, method will return you list of base OS types.
 */
export const resourceGetAllBaseOsTypes = <ThrowOnError extends boolean = false>(
  options?: Options<unknown, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    ResourceGetAllBaseOsTypesResponse,
    ResourceGetAllBaseOsTypesError
  >({
    ...options,
    url: '/virtualization/base-os-types',
  });
};

/**
 * Get all VLANs
 * Get all VLANs, method will return you list of VLANs.
 */
export const vlaNsGetAllVlaNs = <ThrowOnError extends boolean = false>(
  options?: Options<VlaNsGetAllVlaNsData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    VlaNsGetAllVlaNsResponse,
    VlaNsGetAllVlaNsError
  >({
    ...options,
    url: '/virtualization/vlans',
  });
};

/**
 * Get all OS Templates
 * Get all OS templates, method will return you list of OS templates.
 */
export const osTemplatesGetAllOsTemplates = <
  ThrowOnError extends boolean = false,
>(
  options?: Options<OsTemplatesGetAllOsTemplatesData, ThrowOnError>,
) => {
  return (options?.client ?? client).get<
    ThrowOnError,
    OsTemplatesGetAllOsTemplatesResponse,
    OsTemplatesGetAllOsTemplatesError
  >({
    ...options,
    url: '/virtualization/os-templates',
  });
};
