import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup } from 'rsuite';

import FileList from '../FileList';
import FileDropzone from '../FileDropzone';

import { compose } from '../../helpers';
import { withFileService } from '../HOC';

const FileForm = ({ files, fileService }) => {
  
  const sendFiles = async (files) => {
    fileService.sendFiles(files)
    .then((response) => {
      const object = response;
      console.log(object)
    });
  }

  return (
    <React.Fragment>
      <FileList />
      <FileDropzone />
      {
        files && <Button style={{marginTop: '24px'}} block color='cyan' onClick={() => sendFiles(files)}>Передать файлы</Button>
      }
    </React.Fragment>
  )
}

const mapStateToProps = ({ filesSended: { filesSended } }) => {
  return { files: filesSended };
};

export default compose(
  withFileService(),
  connect(mapStateToProps))(FileForm);