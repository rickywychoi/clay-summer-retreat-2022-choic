import React from 'react';
import { inOrder } from '~/app/core/binaryTree/utils';
import { treeExample } from '~/app/core/binaryTree/treeExample';
import { useLocalStorage } from '~/app/shared/localStorage/localStorage.hook';
import SummaryCard from '~/app/components/SummaryCard';
import Separator from '~/app/components/Separator';

const root = treeExample();

const FinalSummary = () => {
  const { choices } = useLocalStorage();

  return (
    <div>
      <h1>THE END</h1>
      {choices
        .map((c) => inOrder(root, c))
        .map((c) => {
          return (
            <>
              <SummaryCard title={c.label} content={c.content} key={c.key} />
              <Separator height="10px" />
            </>
          );
        })}
      <Separator height="50px" />
      <p style={{ fontSize: '15px' }}>
        Creds to:{' '}
        <a href="https://github.com/rickywychoi" target="_blank" rel="noopener noreferrer">
          RC
        </a>
      </p>
    </div>
  );
};

export default FinalSummary;
