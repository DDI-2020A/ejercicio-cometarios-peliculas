/**
 * Created by chalosalvador on 9/1/20
 */
import React from 'react';
import { Button, Form, Input } from 'antd';

const UserForm = ( { onSubmit, userEdit } ) => {

  console.log( 'userEdit', userEdit );

  return (
    <Form
      name='user-form'
      onFinish={ onSubmit }
      initialValues={ userEdit }
      // onFinishFailed={onFinishFailed}
    >

      <Form.Item
        label='Nombre'
        name='name'
        rules={ [
          {
            required: true,
            message: 'Ingresa tu nombre!'
          }
        ] }
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Email'
        name='email'
        rules={ [
          {
            required: true,
            message: 'Ingresa tu correo'
          },
          {
            type: 'email',
            message: 'Ingresa un correo válido'
          }
        ] }
      >
        <Input />
      </Form.Item>


      <Form.Item>
        <Button type='primary' htmlType='submit'>
          { !userEdit
            ? 'Enviar'
            : 'Editar' }
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserForm;
