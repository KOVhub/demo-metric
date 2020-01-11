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

const handleChangeDateStart = (newDateStart) => {
  return {
    type: 'DATE_START_CHANGE',
    payload: {
      newDateStart
    }
  };
};

const handleChangeDateEnd = (newDateEnd) => {
  return {
    type: 'DATE_END_CHANGE',
    payload: {
      newDateEnd
    }
  };
};

export {
  handleChangeCounters,
  countersGetFromServer,
  handleChangeMetrics,
  handleChangeDateStart,
  handleChangeDateEnd
}