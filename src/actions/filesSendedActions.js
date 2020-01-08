const handleChangeFiles = (files) => {
  return {
    type: 'FILES_ADDED_TO_FILES_SENDED',
    payload: {
      files
    }
  };
};

const handleRemoveFile = (index) => {
  return {
    type: 'FILE_REMOVED_FROM_FILES_SENDED',
    payload: {
      index
    }
  };
}

export {
  handleChangeFiles,
  handleRemoveFile
}