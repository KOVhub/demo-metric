import React, { Component } from 'react';
import { format, subMonths, startOfMonth, endOfMonth } from 'date-fns';

import FileForm from '../FileForm';
import MainFormReport from '../MainFormReport';

import './app.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      files: null,
      metrics: ['ym:s:visits', 'ym:s:users', 'ym:s:bounceRate', 'ym:s:pageDepth', 'ym:s:avgVisitDurationSeconds'],
      idCount: '546546456',
      dateRange: [subMonths(startOfMonth(new Date()), 1), subMonths(endOfMonth(new Date()), 1)]
    };
  }

  handleChangeFiles = (newFiles) => {
    this.setState(({ files }) => {
      const newArrayFiles = files ? [...files, ...newFiles] : newFiles;
      return {
        files: newArrayFiles
      };
    });
  };

  handleChange = (value, event) => {
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleChangeMetrics = (value) => {
    this.setState({
      metrics: value
    });
  };

  handleChangeDateRange = (value) => {
    this.setState({
      dateRange: value
    });
  };

  sendFiles = async () => {
    console.log('Файлы передаются')
  }

  sendRequest = async () => {
    console.log('Данные формы передаются')
    const response = await fetch('http://localhost:8080/update-xslx', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            metrics: this.state.metrics,
            idCount: this.state.idCount,
            dateStart: format (this.state.dateRange[0], 'yyyy-MM-dd'),
            dateEnd: format (this.state.dateRange[1], 'yyyy-MM-dd')
        })
      }).then(response => response.json());
  }

  render() {
    const { files, metrics, idCount, dateRange } = this.state;

    return (
      <div className="background-gradient">
        <div className="main-container">
          <section className='app'>
            <h1>Обновление отчета</h1>
            <FileForm files = {files} handleChangeFiles = {this.handleChangeFiles} sendFiles = {this.sendFiles} />
            {
              files &&
              <MainFormReport
                metrics = {metrics}
                idCount = {idCount}
                dateRange = {dateRange}
                handleChange = {this.handleChange}
                handleChangeMetrics = {this.handleChangeMetrics}
                handleChangeDateRange = {this.handleChangeDateRange}
                sendRequest = {this.sendRequest}
              />
            }
          </section>
        </div>
      </div>
    );
  }
}