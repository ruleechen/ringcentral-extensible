import type SubscriptionInfo from '../../../../../../definitions/SubscriptionInfo';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/renew`;
  }

  /**
   * Renews the existing webinar subscription.
   * HTTP Method: post
   * Endpoint: /webinar/notifications/v1/subscriptions/{subscriptionId}/renew
   * Rate Limit Group: Light
   */
  public async post(restRequestConfig?: RestRequestConfig): Promise<SubscriptionInfo> {
    const r = await this.rc.post<SubscriptionInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
