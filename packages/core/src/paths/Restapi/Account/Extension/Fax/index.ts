import Utils from '../../../../../Utils';
import type FaxResponse from '../../../../../definitions/FaxResponse';
import type CreateFaxMessageRequest from '../../../../../definitions/CreateFaxMessageRequest';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/fax`;
  }

  /**
   * Creates and sends/resends a fax message. Resend can be implemented
   * if sending has failed. Fax attachment size (both single and total) is
   * limited to 50Mb.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/fax
   * Rate Limit Group: Heavy
   * App Permission: Faxes
   * User Permission: OutboundFaxes
   */
  public async post(
    createFaxMessageRequest: CreateFaxMessageRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<FaxResponse> {
    const formData = await Utils.getFormData(createFaxMessageRequest);
    const r = await this.rc.post<FaxResponse>(this.path(), formData, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
