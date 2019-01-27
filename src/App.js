import React from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { show } from 'redux-modal';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Filters from './components/Filters';
import Cars from './components/Cars';
import SortCars from './components/SortCars';
import TopBar from './components/TopBar';
import ModalCar from './components/ModalCar';

import './index.css';

const mapDispatchToProps = {
  show,
  uploadDataInForm: actions.change,
};

const App = ({ show: showModal, uploadDataInForm }) => {
  const handleOpenAddCar = () => showModal('ModalCar', { actionOnSubmit: 'addCar' });
  const handleOpenEditCar = data => () => {
    uploadDataInForm('car', data);
    showModal('ModalCar', { actionOnSubmit: 'editCar' });
  };

  return (
    <>
      <TopBar />
      <Grid container justify="space-between">
        <Grid item xs={2}>
          <Filters />
          <Button
            onClick={handleOpenAddCar}
            variant="contained"
            color="secondary"
            style={{
              marginLeft: '30px',
              marginTop: '40px',
              marginBottom: '40px',
            }}
          >
          Add Car
          </Button>
        </Grid>
        <Grid item xs={9}>
          <SortCars />
          <Cars handleOpen={handleOpenEditCar} />
        </Grid>
      </Grid>
      <ModalCar />
    </>
  );
};

export default connect(null, mapDispatchToProps)(App);
