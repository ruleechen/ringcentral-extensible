import type CallerIdByDeviceRequest from './CallerIdByDeviceRequest';
import type CallerIdByFeatureRequest from './CallerIdByFeatureRequest';

interface ExtensionCallerIdInfoRequest {
  /**
   * Canonical URL of a caller ID resource
   * Format: uri
   */
  uri?: string;

  /**
   */
  byDevice?: CallerIdByDeviceRequest[];

  /**
   */
  byFeature?: CallerIdByFeatureRequest[];

  /**
   * If 'True', then the user first name and last name will be used
   *  as caller ID when making outbound calls from extension
   */
  extensionNameForOutboundCalls?: boolean;

  /**
   * If 'True', then extension number will be used as caller ID
   *  when making internal calls
   */
  extensionNumberForInternalCalls?: boolean;
}

export default ExtensionCallerIdInfoRequest;
