import React from 'react';
import { connectModal } from 'redux-modal';

import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import FormCar from './FormCar';

const ModalCar = ({ show, handleHide, actionOnSubmit }) => (
  <Modal
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    open={show}
    onClose={handleHide}
  >
    <div style={
      {
        width: '700px',
        height: '350px',
        backgroundColor: '#fff',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Typography variant="subtitle1" id="simple-modal-description">
        <FormCar onClose={handleHide} actionOnSubmit={actionOnSubmit} />
      </Typography>
    </div>
  </Modal>
);

export default connectModal({ name: 'ModalCar' })(ModalCar);
