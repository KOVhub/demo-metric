import React from 'react';
import Dropzone from 'react-dropzone';

const FileDropzone = ({ handleChangeFiles, files }) => {
  return (
    <Dropzone onDrop = {handleChangeFiles}>
      {({ getRootProps, getInputProps }) =>
        <section className='container'>
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>Перетащите сюда файлы</p>
            <p>или щёлкните здесь, чтобы отправить их</p>
            <button type='button'>Выберите файлы для передачи</button>
          </div>
        </section>
      }
    </Dropzone>
  );
}
export default FileDropzone; 