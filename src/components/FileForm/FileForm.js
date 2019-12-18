import React from 'react';
import { Button } from 'rsuite';

import FileList from '../FileList';
import FileDropzone from '../FileDropzone';

const FileForm = ({ files, handleChangeFiles, handleRemoveFile, sendFiles }) => {
  return (
    <React.Fragment>
      <FileList files = {files} handleRemoveFile={handleRemoveFile} />
      <FileDropzone files = {files} handleChangeFiles = {handleChangeFiles} />
      {files && <Button color='cyan' onClick={sendFiles}>Передать файлы</Button>}
    </React.Fragment>
  )
}
export default FileForm;