import type ContactInfo from './ContactInfo';
import type ExtensionCreationResponseCostCenter from './ExtensionCreationResponseCostCenter';
import type CustomFieldInfo from './CustomFieldInfo';
import type ExtensionPermissions from './ExtensionPermissions';
import type ProfileImageInfo from './ProfileImageInfo';
import type ReferenceInfo from './ReferenceInfo';
import type RegionalSettings from './RegionalSettings';
import type ExtensionServiceFeatureInfo from './ExtensionServiceFeatureInfo';
import type ProvisioningSiteInfo from './ProvisioningSiteInfo';
import type ExtensionStatusInfo from './ExtensionStatusInfo';
import type AssignedCountryInfo from './AssignedCountryInfo';

interface ExtensionCreationResponse {
  /**
   * Internal identifier of an extension
   * Format: int64
   */
  id?: number;

  /**
   * Canonical URI of an extension
   * Format: uri
   */
  uri?: string;

  /**
   */
  contact?: ContactInfo;

  /**
   * Cost center information
   */
  costCenter?: ExtensionCreationResponseCostCenter;

  /**
   */
  customFields?: CustomFieldInfo[];

  /**
   * Extension number
   */
  extensionNumber?: string;

  /**
   * Extension name. For user extension types the value is a combination
   *  of the specified first name and last name
   */
  name?: string;

  /**
   * For Partner Applications Internal identifier of an extension
   *  created by partner. The RingCentral supports the mapping of accounts and
   *  stores the corresponding account ID/extension ID for each partner ID of
   *  a client application. In request URIs partner IDs are accepted instead
   *  of regular RingCentral native IDs as path parameters using pid = XXX clause.
   *  Though in response URIs contain the corresponding account IDs and extension
   *  IDs. In all request and response bodies these values are reflected via
   *  partnerId attributes of account and extension
   */
  partnerId?: string;

  /**
   */
  permissions?: ExtensionPermissions;

  /**
   */
  profileImage?: ProfileImageInfo;

  /**
   * List of non-RC internal identifiers assigned to an extension
   */
  references?: ReferenceInfo[];

  /**
   */
  regionalSettings?: RegionalSettings;

  /**
   * Extension service features returned in response only when the
   *  logged-in user requests his/her own extension info, see also Extension
   *  Service Features
   */
  serviceFeatures?: ExtensionServiceFeatureInfo[];

  /**
   * Specifies extension configuration wizard state (web service
   *  setup). The default value is 'NotStarted'
   */
  setupWizardState?: 'NotStarted' | 'Incomplete' | 'Completed';

  /**
   */
  site?: ProvisioningSiteInfo;

  /**
   * Extension current state. If 'Unassigned' is specified, then
   *  extensions without ‘extensionNumber’ are returned. If not specified, then
   *  all extensions are returned
   */
  status?: 'Enabled' | 'Disabled' | 'Frozen' | 'NotActivated' | 'Unassigned';

  /**
   */
  statusInfo?: ExtensionStatusInfo;

  /**
   * Extension type. Please note that legacy 'Department' extension type
   *  corresponds to 'Call Queue' extensions in modern RingCentral product terminology
   */
  type?:
    | 'User'
    | 'VirtualUser'
    | 'DigitalUser'
    | 'Department'
    | 'Announcement'
    | 'Voicemail'
    | 'SharedLinesGroup'
    | 'PagingOnly'
    | 'ParkLocation'
    | 'Limited';

  /**
   * Hides an extension from showing in company directory. Supported
   *  for extensions of 'User' type only
   */
  hidden?: boolean;

  /**
   */
  assignedCountry?: AssignedCountryInfo;
}

export default ExtensionCreationResponse;
