import type ListFaxCoverPagesResponse from '../../../../definitions/ListFaxCoverPagesResponse';
import type ListFaxCoverPagesParameters from '../../../../definitions/ListFaxCoverPagesParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/fax-cover-page`;
  }

  /**
   * Returns fax cover pages available for the current extension.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/fax-cover-page
   * Rate Limit Group: Light
   */
  public async get(
    queryParams?: ListFaxCoverPagesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<ListFaxCoverPagesResponse> {
    const r = await this.rc.get<ListFaxCoverPagesResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
