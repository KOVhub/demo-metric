export default class FileService {

  _apiBase = 'http://localhost:8081';

  convertFiles = (arrayOfFiles) => {
    const resultData = new FormData();
    arrayOfFiles.map((file) => {
      return resultData.append('files', file);
    });
    
    return resultData;
  }

  sendFiles = async (arrayOfFiles) => {
    const response = await fetch(`${this._apiBase}/uploadFiles`,{
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        body: this.convertFiles(arrayOfFiles)
    });

    return await response.json();
  }

}