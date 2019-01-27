import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import * as constants from '../constants';
import * as actions from '../actions';
import * as selectors from '../selectors';

const mapStateToProps = state => ({
  filterForBrands: selectors.filterForBrands(state),
  filterForManufactures: selectors.filterForManufactures(state),
});

class Filters extends React.Component {
  handleChange = (id, key) => () => {
    const { toggleCheckbox } = this.props;
    toggleCheckbox({ id, key });
  };

  render() {
    const { filterForBrands, filterForManufactures } = this.props;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '30px' }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Manufactures</FormLabel>
          <FormGroup style={{ marginBottom: '30px' }}>
            {constants.MANUFACTURES.map(({ id, value }) => (
              <FormControlLabel
                key={id}
                control={(
                  <Checkbox
                    checked={_.includes(filterForManufactures, id)}
                    onChange={this.handleChange(id, 'manufactureId')}
                    value={value}
                  />
                )}
                label={value}
              />
            ))}
          </FormGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">Brands</FormLabel>
          <FormGroup>
            {constants.BRANDS.map(({ id, value, manufactureId }) => (
              <FormControlLabel
                key={id}
                control={(
                  <Checkbox
                    checked={_.includes(filterForBrands, id)}
                    onChange={this.handleChange(id, 'brandId')}
                    value={value}
                    disabled={
                      !_.includes(filterForManufactures, manufactureId)
                      && !_.isEmpty(filterForManufactures)}
                  />
                )}
                label={value}
              />
            ))}
          </FormGroup>
        </FormControl>
      </div>
    );
  }
}

export default connect(mapStateToProps, actions)(Filters);
