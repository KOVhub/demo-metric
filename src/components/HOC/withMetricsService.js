import React from 'react';

import { MetricsServiceConsumer } from '../../contexts';

const withMetricsService = () => (Wrapped) => {
  return (props) => {
    return (
      <MetricsServiceConsumer>
        {
          (metricsService) => {
            return (
              <Wrapped {...props} metricsService={metricsService} />
            );
          }
        }
      </MetricsServiceConsumer>
    );
  };
};

export default withMetricsService;