import type SendWelcomeEmailV2Request from '../../../../../definitions/SendWelcomeEmailV2Request';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/send-welcome-email`;
  }

  /**
   * Sends/resends welcome email to the system user of confirmed account
   * HTTP Method: post
   * Endpoint: /restapi/v2/accounts/{accountId}/send-welcome-email
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: Users
   */
  public async post(
    sendWelcomeEmailV2Request: SendWelcomeEmailV2Request,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.post<string>(this.path(), sendWelcomeEmailV2Request, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
