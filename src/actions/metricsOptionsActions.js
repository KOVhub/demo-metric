const handleChangeCounters = (newCounters) => {
  return {
    type: 'COUNTERS_CHANGE',
    payload: {
      newCounters
    }
  };
};

const countersGetFromServer = (counters) => {
  return {
    type: 'FETCH_COUNTERS_SUCCESS',
    payload: {
      counters
    }
  };
};

const handleChangeMetrics = (newMetrics) => {
  return {
    type: 'METRICS_CHANGE',
    payload: {
      newMetrics
    }
  };
};

const handleChangeDateRange = (newDateRange) => {
  return {
    type: 'DATE_RANGE_CHANGE',
    payload: {
      newDateRange
    }
  };
};


export {
  handleChangeCounters,
  countersGetFromServer,
  handleChangeMetrics,
  handleChangeDateRange
}