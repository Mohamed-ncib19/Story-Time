import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function loading() {
  return (
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress className="m-auto flex justify-center items-center" color="inherit" />
    </Stack>
  );
}
