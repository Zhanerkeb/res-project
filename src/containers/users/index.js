import React, { useState, useEffect } from 'react';
import User from '../../components/user'
import axios from 'axios';
import { Form, Input, Button, Checkbox } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../../actions/authActions';
const layout = {

  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function Users(props) {

  const onFinish = (values) => {
     props.authActions.signIn(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
   

    return(
      <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            type: 'email',
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

    

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    )
}
const mapStateToProps = state => ({
  isLoading: state.auth.isLoading
})

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);