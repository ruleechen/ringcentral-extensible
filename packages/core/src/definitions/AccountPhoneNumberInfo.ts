import type AccountPhoneNumberInfoExtension from './AccountPhoneNumberInfoExtension';

interface AccountPhoneNumberInfo {
  /**
   * Internal unique identifier of a phone number
   * Required
   * Example: 1162820004
   */
  id?: string;

  /**
   * Phone number in e.164 format (with '+' prefix)
   * Required
   * Example: +16501234567
   */
  phoneNumber?: string;

  /**
   * Type of a phone number
   */
  type?: 'VoiceFax' | 'VoiceOnly' | 'FaxOnly';

  /**
   * Indicates if a number is toll or toll-free
   * Required
   * Example: Toll
   */
  tollType?: 'Toll' | 'TollFree';

  /**
   * Usage type of a phone number
   * Required
   */
  usageType?:
    | 'MainCompanyNumber'
    | 'DirectNumber'
    | 'Inventory'
    | 'InventoryPartnerBusinessMobileNumber'
    | 'PartnerBusinessMobileNumber'
    | 'AdditionalCompanyNumber'
    | 'CompanyNumber'
    | 'PhoneLine'
    | 'CompanyFaxNumber'
    | 'ForwardedNumber'
    | 'ForwardedCompanyNumber'
    | 'ContactCenterNumber'
    | 'ConferencingNumber'
    | 'MeetingsNumber'
    | 'BusinessMobileNumber'
    | 'ELIN';

  /**
   * Status of a phone number. If the value is 'Normal', the phone number is ready to be used. Otherwise it is an external number not yet ported to RingCentral
   * Required
   */
  status?: 'Normal' | 'Pending' | 'PortedIn' | 'Temporary' | 'Unknown';

  /**
   * Reference to the extension this number is assigned to. Omitted for company numbers
   */
  extension?: AccountPhoneNumberInfoExtension;
}

export default AccountPhoneNumberInfo;
