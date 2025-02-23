import type TMCompleteTaskRequest from '../../../../../definitions/TMCompleteTaskRequest';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/complete`;
  }

  /**
   * Completes a task in the specified chat.
   * HTTP Method: post
   * Endpoint: /team-messaging/v1/tasks/{taskId}/complete
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  public async post(
    tMCompleteTaskRequest: TMCompleteTaskRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.post<string>(this.path(), tMCompleteTaskRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
