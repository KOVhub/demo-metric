import React from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';

import { handleChangeFiles } from '../../actions';

import './fileDropzone.css';
import fileAddIcon from './fileAddIcon.svg';

const FileDropzone = ({ filesSended, loading, hasError, error, handleChangeFiles }) => {
  let fileDropzoneClassNames = 'file-dropzone';
  fileDropzoneClassNames += filesSended ? ' file-dropzone-padding' : '';

  return (
    <Dropzone onDrop = {handleChangeFiles}>
      {({ getRootProps, getInputProps }) =>
        <div {...getRootProps({ className: fileDropzoneClassNames })}>
          <input {...getInputProps()} />
          <input type='image' alt='Выбрать файл' title='Выбрать файл' src={fileAddIcon} className='file-dropzone-add-icon' />
          <p className='file-dropzone-first-text'>Перетащи сюда файлы</p>
          <p className='file-dropzone-second-text'>или щёлкни здесь, чтобы выбрать их</p>
          <button type='button' className='send-button' title='Выбрать файл'>Выбери файлы для отправки</button>
        </div>
      }
    </Dropzone>
  );
}

const mapStateToProps = ({ filesSended: {filesSended, loading, hasError, error} }) => {
  return {filesSended, loading, hasError, error};
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeFiles: (newFiles) => dispatch(handleChangeFiles(newFiles))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(FileDropzone);