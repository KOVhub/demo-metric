import React from 'react';

import FileItem from '../FileItem';

import './fileList.css';

const FileList = ({ files, handleRemoveFile }) => {
  let fileList = null;
  if (files) {
    fileList = files.map((file, index) => <FileItem file={file} index={index} handleRemoveFile={handleRemoveFile} /> );
  }
  
  return (
    <aside>
    {
      files &&
      <ul className='fileList'>
        {fileList}
      </ul>
    }
    </aside>
  )
}
export default FileList;