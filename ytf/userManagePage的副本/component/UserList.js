import React, { Component } from "react";
import { Button, Popconfirm, Table, Switch } from "antd";
import { Toast } from 'elephant-ui';
import Modal from "./../../comment/modal/Modal";
import FormAddUser from "./FormAddUser";
import request from './../../request';

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { modalVisible: false };
  }

  openModal = () => {
    this.setState({ modalVisible: true });
  };

  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  // 修改
  handleSubmit = (values) => {
    // console.log(values)
    const params = {
      username: values.username,
      password: values.password,
      tradePwd: values.tradePwd,
      phone: values.phone,
      email: values.email,
      realName: values.realName,
      identityCard: values.identityCard,
      remarks: values.remarks
    };
    request("http://172.28.29.23:8080/boss/update_user", {
      method: "POST",
      body: { ...params },
    })
      .then(() => {
        Toast.success("修改成功");
        const { onListModified } = this.props;
        onListModified();
      })
      .catch((err) => {
        Toast.show("修改失败");
      });
    this.closeModal();
  };

  handleModified = (values) => {
    this.openModal();
    this.setState({
      editValues: {
        ...values,
      },
    });
  };

  // 删除
  handleDelete = (userId) => {
    request("http://172.28.29.23:8080/boss/delete_user", {
      method: "POST",
      body: { userId },
    })
      .then(() => {
        console.log(0);
        Toast.show("删除完成");
        // 删除后刷新
        const { onListModified } = this.props;
        onListModified();
      })
      .catch((err) => {
        Toast.show("删除失败");
      });
  };

  // 修改用户状态
  handleStatusChange = (userId) => {
    // console.log(auditid)
    const arr = []
    arr.push(userId)

    const dataList = {
      auditId: arr,
    };
    request("http://172.28.29.23:8080/boss/update_user_state", {
      method: "POST",
      body: { ...dataList },
    })
      .then(() => {
        Toast.show("修改成功");
        const { onListModified } = this.props;
        onListModified();
      })
      .catch((err) => {
        Toast.show(`请求失败，请联系管理员\n${err.message}`);
      });
  };

  getColumns = () => [
    {
      title: "UID",
      dataIndex: "uid",
      key: "uid",
      align: "center",
    },
    {
      title: "备注",
      dataIndex: "remarks",
      key: "remarks",
      align: "center",
    },
    {
      title: "用户名",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "手机号",
      dataIndex: "phone",
      key: "phone",
      align: "center",
    },
    {
      title: "邮箱",
      dataIndex: "email",
      key: "email",
      align: "center",
    },
    {
      title: "真实姓名",
      dataIndex: "realName",
      key: "realName",
      align: "center",
    },
    {
      title: "身份证号码",
      dataIndex: "identityCard",
      key: "identityCard",
      align: "center",
    },
    {
        title: "用户状态",
        render: (value) => {
          // console.log(3333333,value)
          const { state, userId } = value;
          if (state === 0) {
            return (
              <Popconfirm
                title="是否冻结账户? 此操作不可更改"
                okText="确定"
                cancelText="取消"
                onConfirm={() => this.handleStatusChange(userId)}
              >
                <Button style={{ color: "#1890ff" }}>待审核</Button>
              </Popconfirm>
            );
          } else if (state === 1) {
            return (
              <span>冻结</span>
            );
          }
        },
        align: "center",
        width: "10%",
        fixed: 'right',
      },
    {
      title: "操作",
      render: (text, value) => {
        const { status, userId } = value;
        return (
          <div className="account-list-action">
            <Button type="link" onClick={() => this.handleModified(value)}>修改账户</Button>
            <Popconfirm title="操作不可恢复，确认删除">
              <Button type="link" onConfirm={() => this.handleDelete(userId)}>
                删除
              </Button>
            </Popconfirm>
          </div>
        );
      },
      align: "center",
    },
  ];
  render() {
    const { modalVisible } = this.state;
    const { data } = this.props;
    const { list, page, total } = data || {};

    return (
      <div>
        <Table columns={this.getColumns()} dataSource={list}/>
        <Modal title="修改账户" visible={modalVisible} destroyOnClose onClose={this.closeModal}>
          <FormAddUser onCancel={this.closeModal} onSubmit={this.handleSubmit} />
        </Modal>
      </div>
    );
  }
}
