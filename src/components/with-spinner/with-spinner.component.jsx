import React from 'react';

import Spinner from '../spinner/spinner.component';

const withSpinner = Wrapper => ({ isLoading }) => {
  return isLoading ? <Spinner /> : <Wrapper />
};

export default withSpinner;