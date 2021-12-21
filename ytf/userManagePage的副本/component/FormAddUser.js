import React, { Component } from "react";
import { Input, Button, Checkbox, Select, Form } from "antd";

export default class FormAddUser extends Component {
  render() {
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8 },
    };
    const tailLayout = { wrapperCol: { span: 16 } };
    return (
        <Form {...layout} >
        <Form.Item name="userId" style={{ height: 0, marginBottom: 0 }} />
        <Form.Item label="用户名" name="username" >
          <Input />
        </Form.Item>

        <Form.Item label="手机号" name="phone"
          
        >
          <Input />
        </Form.Item>

        <Form.Item label="邮箱" name="email" >
          <Input />
        </Form.Item>

        <Form.Item label="真实姓名" name="realName" >
          <Input />
        </Form.Item>

        <Form.Item label="身份证号" name="identityCard" >
          <Input />
        </Form.Item>

        <Form.Item label="登陆密码" name="password" >
          <Input />
        </Form.Item>

        <Form.Item label="交易密码" name="tradePwd" >
          <Input />
        </Form.Item>



        <div>
          <Button type="default" >
            取消
          </Button>

          <Button type="primary" htmlType="submit">
            确定
          </Button>
        </div>
      </Form>
    );
  }
}
