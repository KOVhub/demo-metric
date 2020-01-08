import { format } from 'date-fns';

export default class MetricsService {

  _apiBase = 'http://localhost:8081';

  getResource = async (url) => {
    const response = await fetch(`${this._apiBase}${url}`, {
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
    const response = await fetch(`${this._apiBase}/update-xslx`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            metrics: metricsOptions.metrics,
            idCount: metricsOptions.counters[0],
            dateStart: format (metricsOptions.dateRange[0], 'yyyy-MM-dd'),
            dateEnd: format (metricsOptions.dateRange[1], 'yyyy-MM-dd')
        })
      })

      return await response.json();
  }

  _mapCounter = (counter) => {
    return {
      idCounter: counter.id,
      nameCounter: counter.name,
      siteUrl: counter.site
    };
  };

}