interface MessageCountryInfo {
  /**
   * Internal identifier of a country
   */
  id?: string;

  /**
   * Canonical URI of a country
   * Format: uri
   */
  uri?: string;

  /**
   * Official name of a country
   */
  name?: string;

  /**
   * ISO code of a country
   */
  isoCode?: string;

  /**
   * Calling code of a country
   */
  callingCode?: string;
}

export default MessageCountryInfo;
