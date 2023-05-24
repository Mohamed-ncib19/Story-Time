import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  return (
    <Stack sx={{ color: 'grey.500' }} spacing={4} direction="row">
      <CircularProgress className="m-auto flex justify-center items-center" color="inherit" />
    </Stack>
  );
};

