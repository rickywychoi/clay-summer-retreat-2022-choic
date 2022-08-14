import React, { useMemo } from 'react';
import { checkIfLastChild, inOrder } from '~/app/core/binaryTree/utils';
import { startDate, tree } from '~/app/core/binaryTree/tree';
import { useLocalStorage } from '~/app/shared/localStorage/localStorage.hook';
import SummaryCard from '~/app/components/SummaryCard';
import Separator from '~/app/components/Separator';
import treeImg from '~/assets/images/choice-tree.png';

const root = tree();

const FinalSummary = () => {
  const { choices } = useLocalStorage();
  const isEnd = useMemo(() => {
    const lastItem = inOrder(root, choices.at(-1));
    return checkIfLastChild(lastItem);
  }, [choices]);

  return isEnd ? (
    <>
      <h1>THE END</h1>
      {choices
        .map((c) => inOrder(root, c))
        .map((c, idx) => {
          return (
            <div key={c.key}>
              <SummaryCard title={c.label} content={c.content} key={c.key} order={idx} />
              <Separator height="10px" />
            </div>
          );
        })}
      <Separator height="30px" />
      {new Date() >= startDate && (
        <>
          <h2>Choice Tree</h2>
          <img src={treeImg} alt="tree-img" style={{ maxWidth: '100%' }} />
          <Separator height="30px" />
        </>
      )}
      <p style={{ fontSize: '15px' }}>
        Creds to:{' '}
        <a href="https://github.com/rickywychoi" target="_blank" rel="noopener noreferrer">
          RC
        </a>
      </p>
      <Separator height="20px" />
    </>
  ) : (
    <div>돌아가세요.</div>
  );
};

export default FinalSummary;
