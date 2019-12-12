import React from 'react';

import FileItem from '../FileItem';

const FileList = ({ files }) => {
  let fileList = null;
  if (files) {
    fileList = files.map((file, index) => <FileItem file={file} index = {index} /> );
  }
  
  return (
    <div>
    {
      files &&
      <aside>
        <h4>Переданные файлы:</h4>
        <ul>
          {fileList}
        </ul>
      </aside>
    }
    </div>
  )
}
export default FileList;