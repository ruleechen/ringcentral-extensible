import type ExtensionGrantListEventBody from './ExtensionGrantListEventBody';

interface ExtensionGrantListEvent {
  /**
   * Universally unique identifier of a notification
   */
  uuid?: string;

  /**
   * Event filter URI
   */
  event?: string;

  /**
   * Datetime of sending a notification in
   *  [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   *  format including timezone, for example *2016-03-10T18:07:52.534Z*
   */
  timestamp?: string;

  /**
   * Internal identifier of a subscription
   */
  subscriptionId?: string;

  /**
   */
  body?: ExtensionGrantListEventBody;
}

export default ExtensionGrantListEvent;
