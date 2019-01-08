import React from 'react';
import { Table, Popconfirm, Button, message, Tag } from 'antd';
import { Input } from 'antd';
import { textList } from  '../../static/texts';
const { TextArea } = Input;
class TextDetail  extends React.Component {

  constructor() {
    super();
    //state中data去静态文件中取
    this.state = {
      data:{
        title:"",
        source:"",
        content:"",
      },
      tags:[],
    };
  };

  componentDidMount(){
      console.log(textList);
      const { id } = this.props.match.params;
      textList.map((item)=>{
        if(id == item.id){
          this.setState({data:item});
          return;
        }
      })
  }

  generateTags(){
    const option = {
      method:'post',
      body: JSON.stringify({
        title: this.state.data.title,
        content: this.state.data.content,
      })
    }

    fetch('http://10.210.213.244:12001/tags', option)
      .then(response => response.text())
      .then((data) => {
        if(!data){
          message.error('生成标签信息为空！');
          return;
        }
        message.success('生成标签成功！');
        this.setState({
          tags:data.split(' '),
        });
      })
      .catch((error) => {
        message.error('生成标签异常！');
      });
  }

  render() {
      const {data,tags} = this.state;
      return (
        <div style={{padding:'0px 10px'}}>
          <h1 style={{margin: '50px 0px 0px 10px'}}>题目：{data.title}</h1>
          {
            data.source ? <h3 style={{margin: '0px 0px 20px 10px'}}>来源：{data.source}</h3> : <div></div>
          }
          <TextArea rows={20} value={data.content}/>
          <Button type="primary" style={{margin: '20px 0px 0px 10px'}} onClick={this.generateTags.bind(this)}>生成标签</Button>
          <div style={{margin: '20px 0px 0px 10px'}}>
          {tags.length > 0 ? <span style={{margin: '0px 0px 0px 10px'}}>标签：&nbsp;&nbsp;</span> : <span></span>}
          {
            tags.length > 0 ?
              tags.map((item) => {
                return(
                  <Tag key={item}>{item}</Tag>
                )
              })
             : <div></div>
          }
          </div>
        </div>
      );
  }
};

export default TextDetail;
