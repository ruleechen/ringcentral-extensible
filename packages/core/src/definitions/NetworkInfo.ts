import type AutomaticLocationUpdatesSiteInfo from './AutomaticLocationUpdatesSiteInfo';
import type PublicIpRangeInfo from './PublicIpRangeInfo';
import type PrivateIpRangeInfo from './PrivateIpRangeInfo';
import type ERLLocationInfo from './ERLLocationInfo';

interface NetworkInfo {
  /**
   * Internal identifier of a network
   */
  id?: string;

  /**
   * Link to a network resource
   * Format: uri
   */
  uri?: string;

  /**
   */
  name?: string;

  /**
   */
  site?: AutomaticLocationUpdatesSiteInfo;

  /**
   */
  publicIpRanges?: PublicIpRangeInfo[];

  /**
   */
  privateIpRanges?: PrivateIpRangeInfo[];

  /**
   */
  emergencyLocation?: ERLLocationInfo;
}

export default NetworkInfo;
