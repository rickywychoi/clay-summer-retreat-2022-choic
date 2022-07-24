import React from 'react';

type SeparatorProps = {
  height: string;
};

const Separator: React.FunctionComponent<SeparatorProps> = ({ height }) => <div style={{ height: height }} />;

export default Separator;
