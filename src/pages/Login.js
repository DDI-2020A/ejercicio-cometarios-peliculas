/**
 * Created by chalosalvador on 9/4/20
 */
import React from 'react';
import FIREBASE from '../firebase';
import { Form, Input, Button, message } from 'antd';

const Login = () => {

  const handleLogin = async( { email, password } ) => {
    try {
      await FIREBASE.auth.signInWithEmailAndPassword( email, password );
      // history.push( Routes.HOME );



    } catch( error ) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;

      message.error( errorMessage );
    }
  };

  return (
    <div>
      <Form
        name='basic'
        onFinish={ handleLogin }
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

export default Login;
