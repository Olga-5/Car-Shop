import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  createForms,
} from 'react-redux-form';
import { reducer as modal } from 'redux-modal';

import _ from 'lodash';
import * as actions from '../actions';

const cars = handleActions({
  [actions.addCar](state, { payload: { car } }) {
    return [...state, car];
  },
  [actions.editCar](state, { payload: { car } }) {
    return state.map(item => (item.id === car.id ? car : item));
  },
}, []);

const filters = handleActions({
  [actions.toggleCheckbox](state, { payload: { id, key } }) {
    const currentFilter = state[key];
    const newState = _.includes(currentFilter, id)
      ? currentFilter.filter(item => item !== id)
      : [...currentFilter, id];
    return { ...state, [key]: newState };
  },
}, []);

const initialCarFormState = {
  description: '',
  title: '',
  price: '',
  manufactureId: '',
  brandId: '',
  img: '',
};

export default combineReducers({
  cars,
  filters,
  modal,
  ...createForms({
    car: initialCarFormState,
    sort: {
      key: '',
      direction: '',
    },
  }),
});
