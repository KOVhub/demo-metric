import { format } from 'date-fns';
import { baseUrlApi } from '../configurationApp';

export default class MetricsService {

  _baseUrlApi = baseUrlApi;

  getResource = async (url) => {
    const response = await fetch(`${this._baseUrlApi}${url}`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }

    return await response.json();
  };
  
  getCounters = async () => {
    const counters = await this.getResource('/getCounters/');
    return counters.map((counter) => this._mapCounter(counter));
  };
  

  sendMetricsOptions = async (metricsOptions) => {
    const response = await fetch(`${this._baseUrlApi}/update-xslx`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            metrics: metricsOptions.metrics,
            idCount: metricsOptions.idTestCount,
            dateStart: format (metricsOptions.dateStart, 'yyyy-MM-dd'),
            dateEnd: format (metricsOptions.dateEnd, 'yyyy-MM-dd')
        })
      })

      return await response.json();
  }

  downloadReports = async() => {
    const response = await fetch(`${this._baseUrlApi}/download`, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include'
    });
      return response;
    };

  _mapCounter = (counter) => {
    return {
      idCounter: counter.id,
      nameCounter: counter.name,
      siteUrl: counter.site
    };
  };

}