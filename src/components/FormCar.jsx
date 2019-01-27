import React from 'react';
import { Form, Control, actions as formActions } from 'react-redux-form';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import * as constants from '../constants';
import * as actions from '../actions';

const mapDispatchToProps = (dispatch, { actionOnSubmit }) => ({
  resetForm: () => dispatch(formActions.reset('car')),
  onSubmit: data => dispatch(actions[actionOnSubmit](data)),
});

const FormCar = ({ onSubmit, resetForm, onClose }) => (
  <Form
    model="car"
    validators={{
      brandId: val => String(val).length,
      manufactureId: val => String(val).length,
    }}
    onSubmit={(car) => {
      onSubmit({ car });
      resetForm();
      onClose();
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Control.select
        model=".brandId"
        component={TextField}
        controlProps={{
          select: true,
          label: 'Select brand',
          margin: 'normal',
          variant: 'filled',
          style: {
            width: '180px',
          },
        }}
        mapProps={{
          error: ({ fieldValue: { submitFailed, errors } }) => submitFailed && errors,
        }}
      >
        {constants.BRANDS.map(({ id, value }) => (
          <MenuItem key={id} value={id}>
            {value}
          </MenuItem>
        ))}
      </Control.select>
      <Control.select
        model=".manufactureId"
        component={TextField}
        controlProps={{
          select: true,
          label: 'Select manufacture',
          margin: 'normal',
          variant: 'filled',
          style: {
            width: '180px',
          },
        }}
        mapProps={{
          error: ({ fieldValue: { submitFailed, errors } }) => submitFailed && errors,
        }}
      >
        {constants.MANUFACTURES.map(({ id, value }) => (
          <MenuItem key={id} value={id}>
            {value}
          </MenuItem>
        ))}
      </Control.select>
      <Control.text
        model=".title"
        component={TextField}
        controlProps={{
          id: 'filled-search',
          label: 'Add title car',
          margin: 'normal',
          variant: 'filled',
          required: true,
        }}
      />
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Control.text
        model=".description"
        component={TextField}
        controlProps={{
          id: 'filled-multiline-static',
          label: 'Add description',
          multiline: true,
          rows: '6',
          margin: 'normal',
          variant: 'filled',
          style: {
            width: '180px',
          },
        }}
      />
      <Control.text
        model=".img"
        component={TextField}
        controlProps={{
          id: 'filled-search',
          label: 'Add link image',
          margin: 'normal',
          variant: 'filled',
          style: {
            width: '180px',
          },
        }}
      />
      <Control
        model=".price"
        component={TextField}
        controlProps={{
          id: 'filled-numbe',
          label: 'Add price',
          type: 'number',
          margin: 'normal',
          variant: 'filled',
          required: true,
          style: {
            width: '190px',
          },
        }}
      />
    </div>
    <Button
      variant="contained"
      color="secondary"
      type="submit"
      style={{
        marginLeft: '25px',
        marginTop: '25px',
      }}
    >
      Done
    </Button>
  </Form>
);

export default connect(null, mapDispatchToProps)(FormCar);
