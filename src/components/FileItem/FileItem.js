import React from 'react';

const FileItem = ({ file, index }) => {
  return (
    <li key = {index}>
      {file.name} - {file.size} bytes
    </li>
  )
}

export default FileItem;