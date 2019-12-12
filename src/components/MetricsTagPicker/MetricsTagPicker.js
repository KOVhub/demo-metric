import React, { Component } from 'react';
import { TagPicker } from 'rsuite';

import { metricsList } from './helpers';

export default class MetricsTagPicker extends Component {
  constructor() {
    super();
    this.state = {
      metricsList: this.metricsList.getAllMetrics()
    };
  }

  metricsList = new metricsList();
  
  render() {
    const { metricsList } = this.state;
    const { metrics, handleChangeMetrics } = this.props;

    return (
      <TagPicker
        block
        name={metrics}
        creatable={false}
        defaultValue = {metrics}
        data = {metricsList}
        onChange = {handleChangeMetrics}
        style = {{ width: 300 }}
        menuStyle = {{ width: 300 }}
        groupBy = 'groupName'
        placeholder = 'Выберите необходимые метрики'
      />
    );
  }
}