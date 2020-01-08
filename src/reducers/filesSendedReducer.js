const adedFiles = (files, newFiles) => {
  const newArrayFiles = files ? [...files, ...newFiles] : newFiles;
  return {
    filesSended: newArrayFiles,
    loading: false,
    hasError: false,
    error: null
  };
};

const removeFiles = (files, index) => {
  
  let newArrayFiles = [...files.slice(0, index), ...files.slice(index + 1)];

  if(newArrayFiles.length === 0) {
    newArrayFiles = null;
  }

  return {
    filesSended: newArrayFiles,
    loading: false,
    hasError: false,
    error: null
  };
};

const filesSendedReducer = (state, action) => {
  if (state === undefined) {
    return {
      filesSended: null,
      loading: false,
      hasError: false,
      error: null
    };
  }

  switch (action.type) {
    case 'FILES_ADDED_TO_FILES_SENDED':
      return adedFiles(state.filesSended.filesSended, action.payload.files);
    case 'FILE_REMOVED_FROM_FILES_SENDED':
      return removeFiles(state.filesSended.filesSended, action.payload.index);
    case 'FILES_SEND_TO_SERVER_REQUEST':
      return {
        filesSended: null,
        loading: true,
        hasError: false,
        error: null
      };
    case 'FILES_SEND_TO_SERVER_SUCCESS':
      return {
        filesSended: action.payload.filesSended,
        loading: false,
        hasError: false,
        error: null
      };
    case 'FILES_SEND_TO_SERVER_FAILURE':
      return {
        filesSended: null,
        loading: false,
        hasError: true,
        error: {
          errorCode: action.payload.errorCode,
          errorMessage: action.payload.errorMessage
        }
      };
    default:
      return state.filesSended;
  }
};

export default filesSendedReducer;