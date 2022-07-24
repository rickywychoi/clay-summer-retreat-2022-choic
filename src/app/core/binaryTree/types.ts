export class Node {
  public key: string;
  public left: Node;
  public right: Node;
  constructor(public label: string, public content?: string) {
    if (label.includes(',')) {
      throw new Error('Node label cannot contain comma.');
    }
    if (!content) {
      this.content = label;
    }
  }
}
