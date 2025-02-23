import Fetch from './Fetch';
import type { RingCentralInterface, ParentInterface } from '../../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/aggregation`;
  }

  public fetch(): Fetch {
    return new Fetch(this);
  }
}
export default Index;
