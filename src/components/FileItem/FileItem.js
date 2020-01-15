import React from 'react';
import { connect } from 'react-redux';

import { compose } from '../../helpers';
import { withFileService } from '../HOC';
import { handleRemoveFile } from '../../actions';

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
          <span className="file-item-name">{file.name}</span>
        </p>
      </div>
    </li>
  )
}


const mapDispatchToProps = (dispatch) => {
  return {
    handleRemoveFile: (index) => dispatch(handleRemoveFile(index))
  };
};

export default compose(
  withFileService(),
  connect(null, mapDispatchToProps))(FileItem);