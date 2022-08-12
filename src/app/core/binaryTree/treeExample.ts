import { Node } from './types';
import { setNodeUniqueKey } from './utils';

const treeExample = (): Node => {
  //
  //            base
  //           /    \
  //         L        R
  //       /  \      /  \
  //      LL   LR   RL  RR
  //     / \   / \
  //  LLL LLR LRL LRR
  //
  const root = new Node('root', '');
  root.left = new Node('L', '');
  root.right = new Node('R', '');
  root.left.left = new Node('LL', '');
  root.left.right = new Node('LR', '');
  root.right.left = new Node('RL', '');
  root.right.right = new Node('RR', '');
  root.left.left.left = new Node('LLL', '');
  root.left.left.right = new Node('LLR', '');
  root.left.right.left = new Node('LRL', '');
  root.left.right.right = new Node('LRR', '');
  setNodeUniqueKey(root);
  return root;
};

export { treeExample };
