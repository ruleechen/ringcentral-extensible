import type AccountOperatorInfo from './AccountOperatorInfo';
import type ServiceInfo from './ServiceInfo';
import type SignupInfoResource from './SignupInfoResource';
import type AccountStatusInfo from './AccountStatusInfo';
import type AccountRegionalSettings from './AccountRegionalSettings';
import type AccountLimits from './AccountLimits';

interface GetAccountInfoResponse {
  /**
   * Internal identifier of an account
   * Format: int64
   */
  id?: number;

  /**
   * Canonical URI of an account
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of an account in the billing system
   */
  bsid?: string;

  /**
   * Main phone number of the current account
   */
  mainNumber?: string;

  /**
   */
  operator?: AccountOperatorInfo;

  /**
   * Additional account identifier, created by partner application
   *  and applied on client side
   */
  partnerId?: string;

  /**
   */
  serviceInfo?: ServiceInfo;

  /**
   * Specifies account configuration wizard state (web service setup)
   * Default: NotStarted
   */
  setupWizardState?: 'NotStarted' | 'Incomplete' | 'Completed';

  /**
   */
  signupInfo?: SignupInfoResource;

  /**
   * Status of the current account
   */
  status?: 'Initial' | 'Confirmed' | 'Unconfirmed' | 'Disabled';

  /**
   */
  statusInfo?: AccountStatusInfo;

  /**
   */
  regionalSettings?: AccountRegionalSettings;

  /**
   * Specifies whether an account is included into any federation
   *  of accounts or not
   */
  federated?: boolean;

  /**
   * If outbound call prefix is not specified, or set to null (0),
   *  then the parameter is not returned; the supported value range is 2-9
   * Format: int32
   */
  outboundCallPrefix?: number;

  /**
   * Customer facing identifier. Returned for accounts with the
   *  turned off PBX features. Equals to main company number in
   *  [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I)
   *  (without ''+'' sign)format
   */
  cfid?: string;

  /**
   */
  limits?: AccountLimits;
}

export default GetAccountInfoResponse;
