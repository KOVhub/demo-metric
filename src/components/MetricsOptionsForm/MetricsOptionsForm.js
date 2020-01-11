import React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, ControlLabel, Button, SelectPicker } from 'rsuite';
import * as dateFns from 'date-fns';
import { toast } from "react-toastify";

import CounterList from '../CounterList';
import CountersCheckPicker from '../CountersCheckPicker';
import MetricsTagPicker from '../MetricsTagPicker';
import DateRangePicker from '../DateRangePicker';

import { compose } from '../../helpers';
import { withMetricsService } from '../HOC';

import 'rsuite/dist/styles/rsuite-default.css';

const MetricsOptionsForm = ( { metricsOptions, metricsService } ) => {

  const sendRequest = async () => {
    metricsService.sendMetricsOptions(metricsOptions)
    .then(response => {
      console.log(response)
      toast.success(response.message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    });
  }

  const downloadReports = async () => {
    metricsService.downloadReports()
      .then(response => {
        // const filename = 'report.xlsx';
        const filename =  response.headers.get('Content-Disposition').split('filename=')[1];
        response.blob()
          .then(blob => {
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.href = url;
            a.download = filename;
            a.click();
            toast.success('Файлы скачиваются', {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          });
      })
  }

  const data = [
    {
      label: 'Прошлый месяц',
      value: [
        dateFns.subMonths(dateFns.startOfMonth(new Date()), 1),
        dateFns.subMonths(dateFns.endOfMonth(new Date()), 1)
      ]
    },
    {
      label: 'Текущий месяц',
      value: [dateFns.startOfMonth(new Date()), new Date()]
    },
    {
      label: 'Прошлая неделя',
      value: [
        dateFns.subWeeks(
          dateFns.startOfWeek(new Date(), { weekStartsOn: 1 }),
          1
        ),
        dateFns.subDays(
          dateFns.startOfWeek(new Date(), { weekStartsOn: 1 }),
          1
        )
      ]
    },
    {
      label: 'Последние 7 дней',
      value: [dateFns.subDays(new Date(), 6), new Date()]
    }
  ];

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
        <span style={{ marginLeft:5, marginRight:5  }}>или</span>
        <SelectPicker data={data} style={{ width: 143 }} placeholder="Набор дат"/>
      </FormGroup>

      <FormGroup>
        <Button block color='green' onClick={sendRequest}>Сформировать</Button>
      </FormGroup>

      <FormGroup>
        <Button block color='green' onClick={downloadReports}>Скачать файлы</Button>
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