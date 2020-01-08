import userReducer from './userReducer';
import filesSendedReducer from './filesSendedReducer';
import filesDownloadedReducer from './filesDownloadedReducer';
import metricsOptionsReducer from './metricsOptionsReducer';

const reducer = (state, action) => {
  return {
    user: userReducer(state, action),
    filesSended: filesSendedReducer(state, action),
    filesDownloaded: filesDownloadedReducer(state, action),
    metricsOptions: metricsOptionsReducer(state, action)
  };
};

export default reducer;