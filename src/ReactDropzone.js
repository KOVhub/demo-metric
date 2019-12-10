import React, { Component } from "react";
import Dropzone from "react-dropzone";

export default class ReactDropzone extends Component {
  constructor() {
    super();
    this.state = {
      files: null
    };
  }

  onDrop = files => {
    this.setState({ files });
  };

  render() {
    const { files } = this.state;

    let filesList = null;
    if ( files ) {
      filesList = this.state.files.map(file => (
        <li key={file.name}>
          {file.name} - {file.size} bytes
        </li>
      ));
    }


    return (
      <Dropzone onDrop={this.onDrop}>
        {({ getRootProps, getInputProps }) => (
          <section className="container">
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <p>Перетащите сюда файлы</p>
              <p>или щёлкните здесь, чтобы отправить их</p>
              <button type="button">Выберите файлы для загрузки</button>
            </div>
            { files &&
              <aside>
                <h4>Files</h4>
                <ul>{filesList}</ul>
              </aside>
            }

          </section>
        )}
      </Dropzone>
    );
  }
}
