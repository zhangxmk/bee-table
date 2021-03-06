/**
*
* @title 简单表格
* @description
*
*/

import React, { Component } from "react";
import Table from "../../src";

const columns = [
  { title: "用户名", dataIndex: "a", key: "a", width: 100 },
  { id: "123", title: "性别", dataIndex: "b", key: "b", width: 100 },
  { title: "年龄", dataIndex: "c", key: "c", width: 200 },
  {
    title: "操作",
    dataIndex: "d",
    key: "d",
    render(text, record, index) {
      return (
        <a
          href="#"
          onClick={() => {
            alert('这是第'+index+'列，内容为:'+text);
          }}
        >
          一些操作
        </a>
      );
    }
  }
];

const data = [
  { a: "令狐冲", b: "男", c: 41, d: "操作", key: "1" },
  { a: "杨过", b: "男", c: 67, d: "操作", key: "2" },
  { a: "郭靖", b: "男", c: 25, d: "操作", key: "3" }
];

class Demo1 extends Component {
  render() {
    return (
      <Table
        columns={columns}
        data={data}
        title={currentData => <div>标题: 这是一个标题</div>}
        footer={currentData => <div>表尾: 我是小尾巴</div>}
      />
    );
  }
}

export default Demo1;
