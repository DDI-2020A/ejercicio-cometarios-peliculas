/**
 * Created by chalosalvador on 8/25/20
 */
import React, { useEffect, useState } from 'react';
import FIREBASE from '../firebase';
import { Space, Table, Form, Input, Button, message, Modal } from 'antd';
import UserForm from '../components/UserForm';


export const normalizeString = ( string ) => (
  string
    .trim()
    .toLowerCase()
    .replace('á', 'a')
    .replace('Á', 'A')
    .replace('é', 'e')
    .replace('É', 'E')
    .replace('í', 'i')
    .replace('Í', 'I')
    .replace('ó', 'o')
    .replace('Ó', 'O')
    .replace('ú', 'u')
    .replace('Ú', 'U')
    .replace('ñ', 'n')
    .replace('Ñ', 'N')
);

export default () => {
  const [ dataSource, setDataSource ] = useState( [] );
  const [ isLoading, setIsLoading ] = useState( true );
  const [ showEditModal, setShowEditModal ] = useState( false );
  const [ currentUserEdit, setCurrentUserEdit ] = useState( null );

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
      sorter: ( a, b ) => normalizeString( a.name ) < normalizeString( b.name )
        ? -1
        : 1,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: ( a, b ) => normalizeString( a.name ) < normalizeString( b.name )
        ? -1
        : 1,
    },
    {
      title: 'Acciones',
      key: 'action',
      render: ( text, record ) => {
        return (
          <Space size='middle'>
            <Button onClick={ () => openEditModal( record ) }>Editar</Button>
            <Button>Eliminar</Button>
          </Space>
        );
      },
    },
  ];

  useEffect( () => {
    const getUsers = async() => {
      FIREBASE.db.ref( 'users' ).on( 'value', ( snapshot ) => {
        // console.log( 'datos', snapshot.val() );
        const usersData = [];
        snapshot.forEach( ( data ) => {
          console.log( 'user', data.val() );
          const user = data.val();
          const userId = data.key;
          usersData.push( {
            key: userId,
            name: user.name || user.username,
            email: user.email
          } );
        } );
        console.log( 'usersData', usersData );
        setDataSource( usersData );
        setIsLoading( false );
      } );
    };
    getUsers();

    return () => {
      FIREBASE.db.ref( 'users' ).off();
    };
  }, [] );

  useEffect( () => {
    setShowEditModal( !!currentUserEdit );
  }, [ currentUserEdit ] );

  const handleCreateUser = async( values ) => {
    console.log( 'form values', values );
    await FIREBASE.db.ref( `users` ).push( {
      email: values.email.toLowerCase(),
      name: values.name.toUpperCase(),
      balance: 0
    } );
    message.success( 'Los datos se guardaron correctamente :)' );
  };

  const handleEditUser = async( values ) => {
    console.log( 'currrent', currentUserEdit.key );
    console.log( 'Edit user', values );
    await FIREBASE.db.ref( `users/${ currentUserEdit.key }` ).set( values );
    handleCloseModal();
    message.success( 'Los datos se editaron correctamente :)' );
  };

  const openEditModal = ( user ) => {
    setCurrentUserEdit( user );
  };

  const handleCloseModal = () => {
    setCurrentUserEdit( null );
  };

  return (
    <>
      <UserForm onSubmit={ handleCreateUser } />
      <Table dataSource={ dataSource } columns={ columns } loading={ isLoading } />
      <Modal
        title='Editar usuario'
        visible={ showEditModal }
        onCancel={ handleCloseModal }
        destroyOnClose
        footer={ null }
      >
        <UserForm onSubmit={ handleEditUser } userEdit={ currentUserEdit } />
      </Modal>
    </>
  );

}

// export default Services;
