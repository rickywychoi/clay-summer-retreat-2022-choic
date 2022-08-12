export class Node {
  public key: string;
  public left: Node;
  public right: Node;
  constructor(public label: string, public question: string, public content?: string) {
    if (label.includes(',')) {
      throw new Error('Node label cannot contain comma.');
    }
    if (!content) {
      this.content = label;
    }
    if (!question) {
      this.question = '선택해주세요.';
    }
  }
}
