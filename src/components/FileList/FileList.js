import React from 'react';
import { connect } from 'react-redux';

import FileItem from '../FileItem';

import './fileList.css';

const FileList = ({ files }) => {
  let fileList;
  if (files) {
    fileList = files.map((file, index) => {
    return (
      <FileItem
        key = {index}
        file = {file}
        index = {index}
      />
    )
    });
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

const mapStateToProps = ({ filesSended: { filesSended } }) => {
  return { files: filesSended };
};

export default connect(mapStateToProps)(FileList);