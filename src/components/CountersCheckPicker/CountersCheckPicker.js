import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CheckPicker, Icon } from 'rsuite';

import { handleChangeCounters, countersGetFromServer } from '../../actions';
import { compose } from '../../helpers';
import { withMetricsService } from '../HOC';

class CountersCheckPicker extends Component {

  componentDidMount() {
   const { metricsService, countersGetFromServer } = this.props;
   metricsService.getCounters()
    .then((data) => countersGetFromServer(data))
  }

  render() {
    const { counters, countersList, handleChangeCounters } = this.props;
    
    return (
      <CheckPicker
        value={counters}
        onChange={handleChangeCounters}
        data={countersList} 
        labelKey='nameCounter'
        valueKey='idCounter'
        groupBy="siteUrl"
        sort={isGroup => {
          if (isGroup) {
            return (a, b) => {
              return compare(a.groupTitle, b.groupTitle);
            };
          }
  
          return (a, b) => {
            return compare(a.nameCounter, b.nameCounter);
          };
        }}
        renderMenu={menu => {
          if (countersList.length === 0) {
            return (
              <p style={{ padding: 4, color: '#999', textAlign: 'center' }}>
                <Icon icon="spinner" spin /> loading...
              </p>
            );
          }
          return menu;
        }}
        placeholder='Выберите необходимые счетчики'
        block
        // style={{ width: 300 }}
        name='counts'
        id='counts'
      />
    );
  }
}

const compare = (a, b) => {
  let nameA = a.toUpperCase();
  let nameB = b.toUpperCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}

const mapStateToProps = ({ metricsOptions: { counters, countersList } }) => {
  return {counters, countersList}
}

const mapStateToispatch = (dispatch) => {
  return {
    handleChangeCounters: (newCounters) => dispatch(handleChangeCounters(newCounters)),
    countersGetFromServer: (counters) => dispatch(countersGetFromServer(counters))
  }
}

export default compose(
  withMetricsService(),
  connect(mapStateToProps, mapStateToispatch))(CountersCheckPicker)