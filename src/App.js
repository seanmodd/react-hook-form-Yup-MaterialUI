import React, { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Button,
} from '@material-ui/core';

const App = () => {
  const validationSchema = Yup.object().shape({
    vin: Yup.string()
      .required('Vin is required')
      .matches('[A-HJ-NPR-Z0-9]{17}', 'Vin not in correct format'),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <Fragment>
      <Paper>
        <Box px={3} py={2}>
          <Typography variant="h6" align="center" margin="dense">
            React Hook Form - Material UI - Validation
          </Typography>

          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="vin"
                name="vin"
                label="Vin"
                fullWidth
                margin="dense"
                {...register('vin')}
                error={errors.vin ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.vin?.message}
              </Typography>
            </Grid>
          </Grid>

          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Paper>
    </Fragment>
  );
};

export default App;
