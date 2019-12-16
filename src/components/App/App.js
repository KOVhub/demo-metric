import React, { Component } from 'react';
import { format, subMonths, startOfMonth, endOfMonth } from 'date-fns';
import { Button } from 'rsuite';

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

  convertFiles=(arrayOfFiles)=>{
    const resultData = new FormData();
    arrayOfFiles.map(file=>{
      resultData.append("files", file);
    });
    return resultData;
  }

  sendFiles = async () => {
    const response = await fetch('http://localhost:8081/uploadFiles', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: this.convertFiles(this.state.files)
      }).then(response => response.json());
}

  sendRequest = async () => {
    console.log('Данные формы передаются')
    const response = await fetch('http://localhost:8081/update-xslx', {
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
  sendCodeToServer = async(code) =>{
    let data = new FormData();
    data.append('code', code);
    const response = await fetch('http://localhost:8081/code',{
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      body: data
    });
  }
  componentWillMount = () =>{
    const params = new URLSearchParams(window.location.search);
    let code = params.get('code');
    if(code){
      this.sendCodeToServer(code);
    }
  }

  render() {
    const { files, metrics, idCount, dateRange } = this.state;

    return (
      <div className="background-gradient">
        <div className="main-container">
          <section className='app'>
            <h1>Обновление отчета</h1>
            <Button appearance="ghost" ><a href='https://oauth.yandex.ru/authorize?response_type=code&client_id=b5f89edcd2d044a194abaf7d8c320afe'>Войти в профиль</a></Button>
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