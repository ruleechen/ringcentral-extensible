import AnalyzeInteraction from './AnalyzeInteraction';
import type { RingCentralInterface, ParentInterface } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path(false)}/async`;
  }

  public analyzeInteraction(): AnalyzeInteraction {
    return new AnalyzeInteraction(this);
  }
}
export default Index;
