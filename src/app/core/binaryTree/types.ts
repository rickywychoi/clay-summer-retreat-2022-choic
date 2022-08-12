export type Content = {
  todo: string;
  place: string;
};

export class Node {
  public key: string;
  public left: Node;
  public right: Node;
  constructor(public label: string, public content: Content, public question?: string) {
    if (label.includes(',')) {
      throw new Error('Node label cannot contain comma.');
    }
    if (!content.todo) {
      this.content.todo = label;
    }
    if (!question) {
      this.question = '선택해주세요.';
    }
  }
}
