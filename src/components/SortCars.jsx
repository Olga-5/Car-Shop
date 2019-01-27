import React from 'react';
import { Form, Control } from 'react-redux-form';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const SortCars = () => (
  <Form
    model="sort"
  >
    <Control.select
      model="sort"
      component={TextField}
      controlProps={{
        select: true,
        label: 'Sorting by',
        margin: 'normal',
        variant: 'outlined',
        style: {
          width: '180px',
          marginBottom: '40px',
        },
      }}
    >
      <MenuItem value={{ direction: 'up', key: 'price' }}>
        Price up
      </MenuItem>
      <MenuItem value={{ direction: 'down', key: 'price' }}>
        Price down
      </MenuItem>
    </Control.select>
  </Form>
);

export default SortCars;
