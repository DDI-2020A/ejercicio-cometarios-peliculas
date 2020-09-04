/**
 * Created by chalosalvador on 9/4/20
 */
import React from 'react';
import FIREBASE from '../firebase';
import { Form, Input, Button } from 'antd';

const Register = () => {

  const handleRegister = ({email, password}) => {
    FIREBASE.auth.createUserWithEmailAndPassword( email, password ).catch( function( error ) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    } );
  };

  return (
    <div>
      <Form
        name='basic'
        onFinish={ handleRegister }
        // onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label='Username'
          name='email'
          rules={ [
            {
              required: true,
              message: 'Please input your username!'
            },
            {
              type: 'email',
              message: 'Ingrese un correo válido.'
            }
          ] }
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={ [
            {
              required: true,
              message: 'Please input your password!'
            }
          ] }
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
