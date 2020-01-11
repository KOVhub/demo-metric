import React from 'react';
import { connect } from 'react-redux';
import { DatePicker } from 'rsuite';

import { handleChangeDateStart, handleChangeDateEnd } from '../../actions';
import { _localeConfig } from './helpers';

const DateRangePicker = ({ dateStart, dateEnd, handleChangeDateStart, handleChangeDateEnd }) => {
  
  const dateStartRef = React.createRef();
  const dateEndRef = React.createRef();
  
  const handleChangeDateStartAndOpenDateEnd = (newDateStart) => {
    handleChangeDateStart(newDateStart);
    openDateEnd(newDateStart);
  }

  const handleChangeDateEndAndOpenDateStart = (newDateEnd) => {
    handleChangeDateEnd(newDateEnd);
    openDateStart(newDateEnd);
  }

  const openDateStart = (newDateEnd = dateEnd) => {
    if(newDateEnd && !dateStart) {
      dateStartRef.current.open();
    }
  }

  const openDateEnd = (newDateStart = dateStart) => {
    if(newDateStart && !dateEnd) {
      dateEndRef.current.open();
    }
  }

  return (
    <React.Fragment>
      <DatePicker
        value={dateStart}
        onChange={handleChangeDateStartAndOpenDateEnd}
        onClose={openDateEnd}
        ref={dateStartRef}
        oneTap
        format='DD-MM-YYYY'
        isoWeek
        showWeekNumbers
        locale = {_localeConfig}
        ranges={[]}
        placeholder="Начало"
        style={{ width: 150, marginRight:5  }}
        name = 'dates'
        id = 'dates'
      />
      <DatePicker
        value={dateEnd}
        onChange={handleChangeDateEndAndOpenDateStart}
        onClose={openDateStart}
        ref={dateEndRef}
        oneTap
        format='DD-MM-YYYY'
        isoWeek
        showWeekNumbers
        locale = {_localeConfig}
        ranges={[]}
        placeholder="Окончание"
        style={{ width: 150 }}
      />
    </React.Fragment>
  )
}

const mapStateToprops = ({ metricsOptions: { dateStart, dateEnd } }) => {
  return { dateStart, dateEnd };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeDateStart: (newDateStart) => dispatch(handleChangeDateStart(newDateStart)),
    handleChangeDateEnd: (newDateEnd) => dispatch(handleChangeDateEnd(newDateEnd))
  };
}

export default connect(mapStateToprops, mapDispatchToProps)(DateRangePicker);