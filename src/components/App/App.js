import React, { Component } from 'react';
import { format, subMonths, startOfMonth, endOfMonth } from 'date-fns';

import AppHeader from '../AppHeader';
import AppDescription from '../AppDescription'
import FileForm from '../FileForm';
import MainFormReport from '../MainFormReport';

import './app.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      files: null,
      metrics: ['ym:s:visits', 'ym:s:users', 'ym:s:bounceRate', 'ym:s:pageDepth', 'ym:s:avgVisitDurationSeconds'],
      idCount: '546546456',
      dateRange: [subMonths(startOfMonth(new Date()), 1), subMonths(endOfMonth(new Date()), 1)]
    };
  }

  signIn = () => {
    this.setState({
      user: {
        isAvatarEmpty: false,
        avatarId: '32838/RJ7Atpfxb30zwwF5h2qqt4895MY-1',
        login: 'vladyslav.stupin'
      }
    })
  }

  signUp = () => {
    this.setState({
      user: null,
      files: null
    })
  }

  handleChangeFiles = (newFiles) => {
    this.setState(({ files }) => {
      const newArrayFiles = files ? [...files, ...newFiles] : newFiles;
      return {
        files: newArrayFiles
      };
    });
  };

  handleRemoveFile = (idx) => {
    this.setState(({ files }) => {
      // const idx = files.findIndex((file) => file.id === id);

      const newFiles = [...files.slice(0, idx), ...files.slice(idx + 1)];

      if(newFiles.length === 0) {
        return {
          files: null
        };
      }

      return {
        files: newFiles
      };
    });
  }

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
    console.log('файлы', this.state.files);
    let data = new FormData();
    data.append('files', this.state.files);
    const response = await fetch('http://localhost:8081/uploadFiles', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            // 'Content-Type': 'multipart/form-data'
          },
        body: data
      }).then(response => response.json());
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
    const { user, files, metrics, idCount, dateRange } = this.state;
    console.log(files)
    return (
      <React.Fragment>
        <AppHeader user={user} signIn={this.signIn} signUp={this.signUp} />
        <main className='main-wrapper'>
          <div className='main-container'>
            
            {
              user &&
              <section className='column-container'>
                <FileForm files = {files} handleChangeFiles = {this.handleChangeFiles} handleRemoveFile = {this.handleRemoveFile} sendFiles = {this.sendFiles} />
              </section>
            }

            {
              files &&
              <section className='column-container'>
                <MainFormReport
                  metrics = {metrics}
                  idCount = {idCount}
                  dateRange = {dateRange}
                  handleChange = {this.handleChange}
                  handleChangeMetrics = {this.handleChangeMetrics}
                  handleChangeDateRange = {this.handleChangeDateRange}
                  sendRequest = {this.sendRequest}
                />
              </section>
            }

            <section className='column-container'>
              <AppDescription />
            </section>

          </div>
        </main>
        {/* <AppHeader /> */}
      </React.Fragment>
    );
  }
}