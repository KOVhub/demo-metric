import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'rsuite';
import { toast } from "react-toastify";

import FileList from '../FileList';
import FileDropzone from '../FileDropzone';

import { compose } from '../../helpers';
import { withFileService } from '../HOC';

const FileForm = ({ files, fileService }) => {
  
  const sendFiles = async (files) => {
    fileService.sendFiles(files)
    .then((response) => {
      toast.success(response.message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
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