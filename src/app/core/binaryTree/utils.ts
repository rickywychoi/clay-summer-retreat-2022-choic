import { Node } from './types';

/**
 * recursive DFS
 */
const inOrderSearch = (root: Node, searchKey: string, found: Node[]) => {
  if (!root) {
    return;
  }
  inOrderSearch(root.left, searchKey, found);
  if (root.key === searchKey) {
    return found.push(root);
  }
  inOrderSearch(root.right, searchKey, found);
};

/**
 * A helper method to search node in binary tree using in-order DFS
 */
export const inOrder = (root: Node, searchKey: string): Node | undefined => {
  const found: Node[] = [];
  inOrderSearch(root, searchKey, found);
  return found.length === 1 ? found[0] : undefined;
};

export const inOrderTraversal = (root: Node, action: (node: Node) => void) => {
  if (!root) {
    return;
  }
  inOrderTraversal(root.left, action);
  action(root);
  inOrderTraversal(root.right, action);
};

export const setNodeUniqueKey = (root: Node) => {
  let ctr = 0;
  inOrderTraversal(root, (node) => {
    node.key = `${node.label}-${ctr}`;
    ctr++;
  });
};
