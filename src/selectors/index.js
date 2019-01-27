import { createSelector } from 'reselect';
import _ from 'lodash';

const getFilters = state => state.filters;
export const filterForBrands = createSelector(
  getFilters,
  filters => filters.brandId,
);
export const filterForManufactures = createSelector(
  getFilters,
  filters => filters.manufactureId,
);

export const getFilteredCars = createSelector(
  state => state.cars,
  getFilters,
  (cars, filters) => {
    const filterKeys = _.keys(filters);
    return filterKeys.reduce((filterdCars, filterKey) => {
      if (_.isEmpty(filters[filterKey])) {
        return filterdCars;
      }
      return filterdCars.filter(car => filters[filterKey].includes(car[filterKey]));
    }, cars);
  },
);

const directionsConfig = [
  { direction: 'up', func: (cars, key) => _.sortBy(cars, car => car[key]) },
  { direction: 'down', func: (cars, key) => _.sortBy(cars, car => car[key]).reverse() },
];

export const getCars = createSelector(
  getFilteredCars,
  state => state.sort,
  (cars, { direction, key }) => {
    const currentDirection = directionsConfig.find(item => direction === item.direction);
    if (currentDirection) {
      return currentDirection.func(cars, key);
    }
    return cars;
  },
);
