/**
 * Created by chalosalvador on 8/25/20
 */
import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, AppstoreOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import Routes from '../constants/routes';

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
    </Menu>
  );
};

export default Navigation;
