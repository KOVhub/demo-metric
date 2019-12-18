import React from 'react';

import './fileItem.css';
import fileRemoveIcon from './fileRemoveIcon.svg';

const FileItem = ({ file, index, handleRemoveFile }) => {
  return (
    <li key = {index} className='file-item'>
      <div className="file-item-container">
      <input type="image"
        src={fileRemoveIcon}
        className="file-item-remove"
        alt="Не передовать файл"
        title="Не передовать файл"
        onClick={ () => handleRemoveFile(index) }
      />
        <p className="file-item-container-name">
          <h1 className="file-item-name">{file.name}</h1>
        </p>
      </div>
    </li>
  )
}
export default FileItem;