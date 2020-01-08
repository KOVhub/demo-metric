import { subMonths, startOfMonth, endOfMonth } from 'date-fns';

const metricsOptionsReducer = (state, action) => {
  if (state === undefined) {
    return {
      countersList: [],
      counters: ['56934637'],
      metrics: ['ym:s:visits', 'ym:s:users', 'ym:s:bounceRate', 'ym:s:pageDepth', 'ym:s:avgVisitDurationSeconds'],
      dateRange: [subMonths(startOfMonth(new Date()), 1), subMonths(endOfMonth(new Date()), 1)]
    };
  }

  switch (action.type) {
    case 'COUNTERS_CHANGE':
      return {
        countersList: state.metricsOptions.countersList,
        counters: action.payload.newCounters,
        metrics: state.metricsOptions.metrics,
        dateRange: state.metricsOptions.dateRange,
      };
    case 'FETCH_COUNTERS_SUCCESS':
      return {
        countersList: action.payload.counters,
        counters: state.metricsOptions.counters,
        metrics: state.metricsOptions.metrics,
        dateRange: state.metricsOptions.dateRange,
      };
    case 'METRICS_CHANGE':
      return {
        countersList: state.metricsOptions.countersList,
        counters: state.metricsOptions.counters,
        metrics: action.payload.newMetrics,
        dateRange: state.metricsOptions.dateRange,
      };
    case 'DATE_RANGE_CHANGE':
      return {
        countersList: state.metricsOptions.countersList,
        counters: state.metricsOptions.counters,
        metrics: state.metricsOptions.metrics,
        dateRange: action.payload.newDateRange
      };
    default:
        return state.metricsOptions;
    }
  };
  
  export default metricsOptionsReducer;