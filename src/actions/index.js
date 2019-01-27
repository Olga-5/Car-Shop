import { createAction } from 'redux-actions';

export const toggleCheckbox = createAction('CHECKBOX_TOGGLE');
export const filterCar = createAction('CAR_FILTER');
export const addCar = createAction('CAR_ADD');
export const editCar = createAction('CAR_EDIT');
