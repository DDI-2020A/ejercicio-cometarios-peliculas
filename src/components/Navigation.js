/**
 * Created by chalosalvador on 8/25/20
 */
import React, { useEffect, useState } from 'react';
import { Button, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, AppstoreOutlined, QuestionCircleOutlined, LoginOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import Routes from '../constants/routes';
import FIREBASE from '../firebase';

const Navigation = () => {
  let location = useLocation();
  const [ currentPage, setCurrentPage ] = useState( 'home' );

  useEffect( () => {
    console.log( 'location', location.pathname.split( '/' ) );
    const urlParts = location.pathname.split( '/' );
    setCurrentPage( urlParts[ 1 ] !== ''
      ? urlParts[ 1 ]
      : 'inicio' );
  }, [] );

  return (
    <Menu theme='dark'
          onClick={ ( e ) => setCurrentPage( e.key ) }
          selectedKeys={ [ currentPage ] }
          mode='horizontal'>
      <Menu.Item key='inicio' icon={ <HomeOutlined /> }>
        <Link to={ Routes.HOME }>Inicio</Link>
      </Menu.Item>
      <Menu.Item key='servicios' icon={ <AppstoreOutlined /> }>
        <Link to={ Routes.SERVICES }>Servicios</Link>
      </Menu.Item>
      <Menu.Item key='nosotros' icon={ <QuestionCircleOutlined /> }>
        <Link to={ Routes.ABOUT }>Nosotros</Link>
      </Menu.Item>

      <Menu.Item key='login' icon={ <LoginOutlined /> }>
        <Link to={ Routes.LOGIN }>Iniciar sesión</Link>
      </Menu.Item>

      <Menu.Item key='register' icon={ <LoginOutlined /> }>
        <Link to={ Routes.REGISTER }>Register</Link>
      </Menu.Item>

      <Menu.Item key='logout' icon={ <LoginOutlined /> }>
        <Button type='link' onClick={ () => FIREBASE.auth.signOut() }>Logout</Button>
      </Menu.Item>


    </Menu>
  );
};

export default Navigation;
