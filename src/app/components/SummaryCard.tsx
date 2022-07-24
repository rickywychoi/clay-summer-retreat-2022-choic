import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';

type Props = {
  title: string;
  content: string;
};

const SummaryCard: React.FunctionComponent<Props> = ({ title, content }) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2">{content}</Typography>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
};

export default SummaryCard;
