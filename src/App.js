import React, { Component } from 'react';
import './App.css';
import { DatePicker } from 'antd';
import Son from './son';
import 'antd/dist/antd.css';

class App extends Component {
  constructor(props) {
    super(props); //调用父类的构造函数，固定写法
    this.state = {
      inputValue: 123, // input中的值
      list: [1,2], //服务列表
      show:true,
    };
  }
 
  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
          <button onClick={this.addList.bind(this)}> 增加服务 </button>
          <button onClick={this.delList.bind(this)}> 减少服务 </button>
          <button onClick={this.isshow.bind(this)}> isshow </button>
        </div>
        <DatePicker onChange={this.onChange.bind(this)} />
       
        <ul>
          {this.state.list.map((item, index) => { 
            return (
              <li className='red' key={index} >
                { this.state.show?
                <Son
                 key={index} 
                 content={item} 
                 index={index} 
                 deleteItem={this.deleteItem.bind(this)}/>:null}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  inputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }
  onChange(date, dateString) {
    if (dateString) {
      this.setState({
        list: [...this.state.list, dateString],
      });
    }
  }
  isshow() {
    this.setState({
      show: !this.state.show,
    });
      
  }
  addList() {
    let mid =Number(this.state.inputValue) ;
    mid++;
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: mid,
    });
  }
  delList() {
    let list = this.state.list;
    list.splice(-1);
    console.log(list);
    this.setState({
      list: list,
    });
  }
  deleteItem(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list,
    });
  }
}
export default App;
