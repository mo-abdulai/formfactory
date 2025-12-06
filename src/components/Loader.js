import CircularProgress from '@mui/material/CircularProgress';
import { Stack } from '@mui/material';

import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Stack direction='row' justifyContent='center' alignContent='center' width='100%'>
      <CircularProgress />
      {/* <InfinitySpin/> */}
    </Stack>
  );
}

export default Loader;
