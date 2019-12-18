import React from 'react';
import { Form, FormGroup, ControlLabel, HelpBlock, InputGroup, Icon, Input, Button } from 'rsuite';

import MetricsTagPicker from '../MetricsTagPicker';
import DateRangePicker from '../DateRangePicker';

import 'rsuite/dist/styles/rsuite-default.css';

const MainFormReport = ( { metrics, idCount, dateRange, handleChange,
  handleChangeMetrics, handleChangeDateRange, sendRequest } ) => {

  return (
    <Form fluid>
    <FormGroup>
      <ControlLabel htmlFor='metrics'>Метрики</ControlLabel>
      <MetricsTagPicker metrics = {metrics} handleChangeMetrics = {handleChangeMetrics} />
    </FormGroup>
    <FormGroup>
      <ControlLabel htmlFor='idCount'>Id-счетчика</ControlLabel>
      <InputGroup>
        <InputGroup.Addon>
          <Icon icon='cog' />
        </InputGroup.Addon>
        <Input
          name='idCount'
          id='idCount'
          placeholder='Введите Id-счетчика...'
          value={idCount}
          onChange={handleChange}
        />
      </InputGroup>
    </FormGroup>
    <FormGroup>
      <ControlLabel htmlFor='dates'>Период отчета</ControlLabel>
      <DateRangePicker dateRange = {dateRange} handleChangeDateRange = {handleChangeDateRange} />
    </FormGroup>
    <FormGroup>
        <Button block color='green' onClick={sendRequest}>Сформировать</Button>
    </FormGroup>
    </Form>
  )
}
export default MainFormReport;