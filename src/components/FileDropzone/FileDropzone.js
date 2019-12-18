import React from 'react';
import Dropzone from 'react-dropzone';

import './fileDropzone.css';
import fileAddIcon from './fileAddIcon.svg';

const FileDropzone = ({ handleChangeFiles, files }) => {
  let fileDropzoneClassNames = 'file-dropzone';
  fileDropzoneClassNames += files ? ' file-dropzone-padding' : '';

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
export default FileDropzone; 