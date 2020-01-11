import { subMonths, startOfMonth, endOfMonth } from 'date-fns';

const metricsOptionsReducer = (state, action) => {
  if (state === undefined) {
    return {
      countersList: [],
      counters: null, //['56934637']
      idTestCount: '29761725',
      metrics: ['ym:s:visits', 'ym:s:users', 'ym:s:bounceRate', 'ym:s:pageDepth', 'ym:s:avgVisitDurationSeconds'],
      dateStart: subMonths(startOfMonth(new Date()), 1),
      dateEnd: subMonths(endOfMonth(new Date()), 1)
    };
  }

  switch (action.type) {
    case 'COUNTERS_CHANGE':
      return {
        ...state.metricsOptions,
        counters: action.payload.newCounters
      };
    case 'FETCH_COUNTERS_SUCCESS':
      return {
        ...state.metricsOptions,
        countersList: action.payload.counters
      };
    case 'METRICS_CHANGE':
      return {
        ...state.metricsOptions,
        metrics: action.payload.newMetrics
      };
    case 'DATE_START_CHANGE':
      return {
        ...state.metricsOptions,
        dateStart: action.payload.newDateStart
      };
    case 'DATE_END_CHANGE':
      return {
        ...state.metricsOptions,
        dateEnd: action.payload.newDateEnd
      };
    default:
        return state.metricsOptions;
    }
  };
  
  export default metricsOptionsReducer;