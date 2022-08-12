import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { Content } from '../core/binaryTree/types';
import { timeline } from '../pages/Choice/Choice';

type Props = {
  title: string;
  content: Content;
  order: number;
};

const SummaryCard: React.FunctionComponent<Props> = ({ title, content, order }) => (
  <Box sx={{ minWidth: 275 }}>
    <Card variant="outlined">
      <React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {timeline[order]}
            <br />
            {title}
          </Typography>
          <Typography variant="body2">{content.todo}</Typography>
          <Typography variant="body2">{content.place}</Typography>
        </CardContent>
      </React.Fragment>
    </Card>
  </Box>
);

export default SummaryCard;
