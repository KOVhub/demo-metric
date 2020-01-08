import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker as DatePicker } from 'rsuite';

import { handleChangeDateRange } from '../../actions';
import { _localeConfig, _rangesConfig } from './helpers';

const DateRangePicker = ({ dateRange, handleChangeDateRange }) => {

  return (
    <DatePicker
      block
      name = 'dates'
      id = 'dates'
      placeholder = 'Выберите даты начала и конца отчета'
      value = {dateRange}
      onChange = {handleChangeDateRange}
      isoWeek
      locale = {_localeConfig}
      showWeekNumbers
      ranges = {_rangesConfig}
    />
  );
  
}

const mapStateToprops = ({ metricsOptions: { dateRange } }) => {
  return { dateRange };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeDateRange: (newDateRange) => dispatch(handleChangeDateRange(newDateRange))
  };
}

export default connect(mapStateToprops, mapDispatchToProps)(DateRangePicker);