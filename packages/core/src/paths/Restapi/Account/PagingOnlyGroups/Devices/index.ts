import type PagingOnlyGroupDevices from '../../../../../definitions/PagingOnlyGroupDevices';
import type ListPagingGroupDevicesParameters from '../../../../../definitions/ListPagingGroupDevicesParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/devices`;
  }

  /**
   * Returns a list of paging devices assigned to this group.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/devices
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyDevices
   */
  public async get(
    queryParams?: ListPagingGroupDevicesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<PagingOnlyGroupDevices> {
    const r = await this.rc.get<PagingOnlyGroupDevices>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
