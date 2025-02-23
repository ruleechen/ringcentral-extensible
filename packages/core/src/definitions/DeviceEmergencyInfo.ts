import type DeviceEmergencyInfoAddress from './DeviceEmergencyInfoAddress';
import type DeviceEmergencyLocationInfo from './DeviceEmergencyLocationInfo';

/**
 * Device emergency settings
 */
interface DeviceEmergencyInfo {
  /**
   * Automatically determined emergency address. If `emergencyAddressState`
   *  value is 'Assigned', then this address is assigned to the current device.
   *  If `emergencyAddressState` value is 'Unconfirmed', then the specified address
   *  must be confirmed by the user before being registered as emergency address
   *  for the current device. In all other cases the value is null
   */
  address?: DeviceEmergencyInfoAddress;

  /**
   */
  location?: DeviceEmergencyLocationInfo;

  /**
   * Specifies if emergency address is out of country
   */
  outOfCountry?: boolean;

  /**
   * Emergency address status
   */
  addressStatus?: 'Valid' | 'Invalid' | 'Provisioning';

  /**
   * Visibility of an emergency response location. If `Private`
   *  is set, then location is visible only for the restricted number of users,
   *  specified in `owners` array
   */
  visibility?: 'Private' | 'Public';

  /**
   * Resulting status of the emergency address synchronization. Returned
   *  if `syncEmergencyAddress` parameter is set to 'True'
   */
  syncStatus?: 'Verified' | 'Updated' | 'Deleted' | 'NotRequired' | 'Unsupported' | 'Failed';

  /**
   * Ability to register new emergency address for a phone line
   *  using devices sharing this line or only main device (line owner)
   */
  addressEditableStatus?: 'MainDevice' | 'AnyDevice';
}

export default DeviceEmergencyInfo;
