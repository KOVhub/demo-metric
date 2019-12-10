import React, { Component } from 'react';
import { Autocomplete, TextInput } from 'evergreen-ui'
import ReactDropzone from './ReactDropzone';

import './app.css';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            metrics: [],
            idCount: '',
            dateStart: '',
            dateEnd: ''
        };
    }

     sendRequest = async () =>{
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
                dateStart: this.state.dateStart,
                dateEnd: this.state.dateEnd
            })
          }).then(response => response.json());
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
          [name]: value
        });
    }

    handleSelectChange = (event) => {
        const options = event.target.options;
        console.log(options)

        const metrics = [];
        
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                metrics.push(options[i].value);
            }
          }

        this.setState({
            metrics: metrics
        })
    }

    handleInputSubmit = () => {

    }

    render() {
        return (
            <section className="app">
                <h1>Обновление отчета</h1>
                <form className="my-form">
                    <div className="form-group">
                        <label htmlFor="metrics">Метрики</label>
                        <Autocomplete
                            title="Fruits"
                            onChange={(changedItem) => console.log(changedItem)}
                            items={['Apple', 'Apricot', 'Banana', 'Cherry', 'Cucumber']}
                            >
                            {(props) => {
                                const { getInputProps, getRef, inputValue } = props
                                return (
                                <TextInput
                                    placeholder="Fruits"
                                    value={inputValue}
                                    innerRef={getRef}
                                    {...getInputProps()}
                                />
                                )
                            }}
                        </Autocomplete>
                        <select multiple className="form-control" id="metrics" value={this.state.metrics} onChange={this.handleSelectChange}>
                            <option value="ym:s:visits">Визиты</option>
                            <option value="ym:s:users">Посетители</option>
                            <option value="ym:s:bounceRate">Отказы</option>
                            <option value="ym:s:pageDepth">Глубина просмотра</option>
                            <option value="ym:s:avgVisitDurationSeconds">Время на сайте</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="idCount">Id-счетчик</label>
                        <TextInput name="idCount" id="idCount" placeholder="Введите Id-счетчик..." value={this.state.idCount} onChange={this.handleChange} />
                    </div>
                    <div className="form-group date-group">
                        <span>Период отчета</span>
                        <br />
                        <label htmlFor="date-start">Начало</label>
                        <input type="date" id="date-start" onChange={this.handleChange} name="dateStart" value={this.state.dateStart} className="first-input form-control"/>
                        <label htmlFor="dete-end">Окончание</label>
                        <input type="date" id="dete-end" onChange={this.handleChange} name="dateEnd" value={this.state.dateEnd} className="form-control" />
                    </div>
                    <button type="button" onClick={this.sendRequest}>Сформировать</button>
                </form>
                <ReactDropzone />
            </section>
        )
    }
}