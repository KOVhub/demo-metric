import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, ControlLabel, Button } from 'rsuite';

import CounterList from '../CounterList';
import CountersCheckPicker from '../CountersCheckPicker';
import MetricsTagPicker from '../MetricsTagPicker';
import DateRangePicker from '../DateRangePicker';

import { compose } from '../../helpers';
import { withMetricsService } from '../HOC';

import 'rsuite/dist/styles/rsuite-default.css';

const MetricsOptionsForm = ( { metricsOptions, sendRequest, metricsService } ) => {

  sendRequest = async () => {
    metricsService.sendMetricsOptions(metricsOptions)
    .then(response => response.json());
}


  return (
    <Form fluid>
      {/* <CounterList /> */}

      <FormGroup>
        <ControlLabel htmlFor='counts'>Счетчики</ControlLabel>
        <CountersCheckPicker />
      </FormGroup>

      <FormGroup>
        <ControlLabel htmlFor='metrics'>Метрики</ControlLabel>
        <MetricsTagPicker />
      </FormGroup>

      <FormGroup>
        <ControlLabel htmlFor='dates'>Период отчета</ControlLabel>
        <DateRangePicker />
      </FormGroup>

      <FormGroup>
        <Button block color='green' onClick={sendRequest}>Сформировать</Button>
      </FormGroup>
    </Form>
  )
}

const mapStateToProps = ({ metricsOptions }) => {
  return { metricsOptions };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     sendRequest: () => dispatch(sendRequest())
//   };
// };

export default compose(
  withMetricsService(),
  connect(mapStateToProps)
)(MetricsOptionsForm);