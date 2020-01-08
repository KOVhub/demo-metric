import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TagPicker } from 'rsuite';

import { handleChangeMetrics } from '../../actions';
import { metricsList } from './helpers';

class MetricsTagPicker extends Component {
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
        // style = {}
        menuStyle = {{ width: 300 }}
        groupBy = 'groupName'
        placeholder = 'Выберите необходимые метрики'
      />
    );
  }
}

const mapStateToProps = ({metricsOptions: {metrics}}) => {
  return {metrics}
}

const mapStateToispatch = (dispatch) => {
  return {
    handleChangeMetrics: (newMetrics) => dispatch(handleChangeMetrics(newMetrics))
  }
}

export default connect(mapStateToProps, mapStateToispatch)(MetricsTagPicker)