import React, { Component } from "react";
import { Button, Input, Select, Option } from "antd";
import { Toast } from 'elephant-ui';
import Modal from "./../comment/modal/Modal";
import FormAddUser from "./component/FormAddUser";
import UserList from "./component/UserList";
import request from "./../request";

const LIMIT = 10;
export default class UserManagePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      data: {},
    };
  }

  componentDidMount() {
    this.getUserList();
  }

  getUserList = (page = 1, pageSize = LIMIT) => {
    this.setState({ pending: true })
    request(`http://172.28.29.23:8080/boss/get_app_user_list?offset=${(page - 1) * pageSize}&limit=${pageSize}`)
    .then((data) => {
      // console.log(111, data)
      const { list, total } = data || {};
      // console.log(34567890, list)
      this.setState({
        currentPage: page,
        data: {
          list,
          total,
          page,
          selectedRowKeys: [],
        },
      });
    })
    .catch(console.warn)
    .finally(() => {
      this.setState({ pending: false });
    });
  }

  // 搜索字段

  // 弹窗
  openModal = () => {
    this.setState({ modalVisible: true });
  };

  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  // 搜索
  handleSearch = () => {
    this.getUserList();
  }

  // 重置
  handleReset = () => {
    const {from: { setFieldsValue }} = this.props;
    setFieldsValue({
      realName: '',
      phone: '',
    })
  }

  // 创建订单提交
  handleSubmit = (values) => {
    console.log(9999, values)
    const dataList = {
      username: values.username,
      password: values.password,
      tradePwd: values.tradePwd,
      phone: values.phone,
      email: values.email,
      realName: values.realName,
      identityCard: values.identityCard,
      remarks: values.remarks
    }
    console.log(dataList, 78786885796768)
    request("http://172.28.29.23:8080/boss/create_user", {
        method: "POST",
        body: { ...dataList },
      })
        .then((data) => {
          this.closeModal();
          Toast.success("成功");
          this.handleListModified();
        })
        .catch((err) => {
          Toast.show("添加失败");
        });
  };

  render() {
    const { modalVisible, data } = this.state;
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>app账户管理</div>
          <Button type="primary" onClick={this.openModal}>
            创建账户
          </Button>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: 20 }}>登录名</div>
            {/* {getFieldDecorator("username")(<Input />)} */}
            <Input style={{ width: 150, marginRight: 40 }} />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: 20 }}>手机号</div>
            {/* {getFieldDecorator("phone")(<Input />)} */}
            <Input style={{ width: 200, marginRight: 40 }} />
          </div>
          <Button type="primary" style={{ marginRight: 20 }} onClick={this.handleSearch}>
            搜索
          </Button>
          <Button onClick={this.handleReset}>重置</Button>
        </div>

        <UserList data={data}/>

        <Modal visible={modalVisible} destroyOnClose title="创建账户" onClose={this.closeModal} >
          <FormAddUser
             onSubmit={this.handleSubmit}
             onCancel={this.closeModal}
          />
        </Modal>
      </div>
    );
  }
}
