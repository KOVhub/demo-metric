const filesDownloadedReducer = (state, action) => {
  if (state === undefined) {
    return {
      filesDownloaded: null,
      loading: false,
      hasError: false,
      error: null
    };
  }

  switch (action.type) {
    case 'FILES_DOWNLOAD_FROM_SERVER_REQUEST':
      return {
        filesDownloaded: null,
        loading: true,
        hasError: false,
        error: null
      };
    case 'FILES_DOWNLOAD_FROM_SERVER_SUCCESS':
      return {
        filesDownloaded: action.payload.filesDownloaded,
        loading: false,
        hasError: false,
        error: null
      };
    case 'FILES_DOWNLOAD_FROM_SERVER_FAILURE':
      return {
        filesDownloaded: null,
        loading: false,
        hasError: true,
        error: {
          errorCode: action.payload.errorCode,
          errorMessage: action.payload.errorMessage
        }
      };
    default:
      return state.filesDownloaded;
  }
};

export default filesDownloadedReducer;