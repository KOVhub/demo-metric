import React from 'react';
import { DateRangePicker as DatePicker } from 'rsuite';

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
export default DateRangePicker;