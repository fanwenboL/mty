import React from 'react';
import { Upload, Icon, message,Button } from 'antd';
import fetch from 'dva/fetch';

const host = "http://meeme-public-opinion.prefromoffice.alipay.net";

class UploadFile extends React.Component {

  constructor() {
    super();
    this.state = {
        fileList: [],
        uploading: false,
        timeNow:'',
        uploadStatus:'',
        uploadState:'',
        url:'',
    }
  }

  handleUpload(){
    const { fileList } = this.state;
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files[]', file);
    });
    this.setState({
      uploading: true,
      timeNow:'',
      uploadStatus:'',
      uploadState:'',
      url:'',
    });

    const newOptions = {};
    newOptions.body = JSON.stringify(formData)
    newOptions.method = 'post';

    fetch(host + '/public_opinion/yq_clustering', newOptions)
      .then(response => response.json())
      // .then(response => response.text())
      .then((data) => {
        this.update_progress(host + data.Location);
      })
      .catch((error) => {
        this.setState({
          uploading: false,
        });
        message.error('上传异常！');
      });
  }

  timenow(){
    var now= new Date(),
      ampm= 'am',
      h= now.getHours(),
      m= now.getMinutes(),
      s= now.getSeconds();
    if(h>= 12){
      if(h>12) h -= 12;
      ampm= 'pm';
    }

    if(m<10) m= '0'+m;
    if(s<10) s= '0'+s;
    return now.toLocaleDateString()+ ' ' + h + ':' + m + ':' + s + ' ' + ampm;
  }

  update_progress(status_url) {
    // send GET request to status URL
    fetch(status_url, {method:'get'})
      .then(response => response.json())
      .then((data) => {
        this.setState({
          timeNow: this.timenow(),
          uploadStatus:data.status,
        });
        if (data.state != 'PENDING' && data.state != 'PROGRESS') {
          if ('result' in data) {
            message.success('上传成功！');
            this.setState({
              fileList: [],
              uploading: false,
              url:data.result,
              uploadState:data.state,
            });
          }
          else {
            this.setState({
              uploadState:data.state,
              uploading: false,
            });
          }
        }
        else {
          setTimeout(() => {
            this.update_progress(status_url);
          }, 2000);
        }
      });
  }

  render() {
    const { uploading,timeNow,uploadStatus,url,uploadState } = this.state;

    const props = {
      action: host + '/public_opinion/yq_clustering',
      multiple: true,
      onRemove: (file) => {
        this.setState(({ fileList }) => {
          const index = fileList.indexOf(file);
          const newFileList = fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: (file) => {
        this.setState(({ fileList }) => ({
          fileList: [...fileList, file],
          timeNow:'',
          uploadStatus:'',
          uploadState:'',
          url:'',
        }));
        return false;
      },
      fileList: this.state.fileList,
    };

    return (
      <div style={{padding:'0px 10px'}}>
        <h1 style={{marginTop:'20px'}}>上传多个舆情平台输出excel文件</h1>
        <div style={{width:200,marginTop:'20px'}}>
          <Upload {...props}>
            <Button>
              <Icon type="upload" /> 选择文件
            </Button>
          </Upload>
          <Button
            style={{
              marginTop: '16px'
            }}
            type="primary"
            onClick={this.handleUpload.bind(this)}
            disabled={this.state.fileList.length === 0}
            loading={uploading}
          >
            {uploading ? '上传中' : '上传' }
          </Button>
        </div>
        {
          timeNow ? <div>{timeNow}</div> : <div></div>
        }
        {
          uploadStatus ? <div>{uploadStatus}</div> : <div></div>
        }
        {
          url ? <div><a href = {url}>result</a></div> : uploadState ? <div>Result: {uploadState}</div> : <div></div>
        }
      </div>
    );
  }
};

export default UploadFile;
