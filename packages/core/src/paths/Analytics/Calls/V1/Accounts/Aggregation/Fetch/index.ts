import type AggregationResponse from '../../../../../../../definitions/AggregationResponse';
import type AnalyticsCallsAggregationFetchParameters from '../../../../../../../definitions/AnalyticsCallsAggregationFetchParameters';
import type AggregationRequest from '../../../../../../../definitions/AggregationRequest';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/fetch`;
  }

  /**
   * Returns call aggregations filtered by parameters specified
   * HTTP Method: post
   * Endpoint: /analytics/calls/v1/accounts/{accountId}/aggregation/fetch
   * Rate Limit Group: Light
   * App Permission: Analytics
   */
  public async post(
    aggregationRequest: AggregationRequest,
    queryParams?: AnalyticsCallsAggregationFetchParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<AggregationResponse> {
    const r = await this.rc.post<AggregationResponse>(this.path(), aggregationRequest, queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
