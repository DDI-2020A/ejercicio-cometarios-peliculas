import React, { useEffect, useState } from 'react';
import '../styles/App.less';
import { Layout, Breadcrumb } from 'antd';
import logo from '../images/logo-menta.png';
import Navigation from './Navigation';
import AppRouter from '../routers/AppRouter';
import FIREBASE from '../firebase';
import { useHistory } from 'react-router-dom';
import Routes from '../constants/routes';

const { Header, Content, Footer } = Layout;

const App = () => {

  const history = useHistory();
  useEffect( () => {

    FIREBASE.auth.onAuthStateChanged( function( user ) {
      if( user ) {
        // User is signed in.
        let displayName = user.displayName;
        let email = user.email;
        let emailVerified = user.emailVerified;
        let photoURL = user.photoURL;
        let isAnonymous = user.isAnonymous;
        let uid = user.uid;
        let providerData = user.providerData;
        // ...
        console.log( 'user', user );
        console.log( 'uid', uid );
        // hacer la consulta a la bdd en el node (`users/${uid}`)
        history.push( Routes.HOME );
      } else {
        // User is signed out.
        console.log( 'user loggedOut' );
        history.replace( Routes.LOGIN );
      }
    } );

    return () => {
      console.log( 'UNSUBSCRIBE' );
    };
  } );

  return (
    <Layout className='layout'>
      <Header className='main-header'>
        <div className='logo'>
          <img src={ logo } alt='Menta' />
        </div>
        <Navigation />
      </Header>

      <Content className='main-content'>
        <Breadcrumb style={ { margin: '16px 0' } }>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>

        <AppRouter />

      </Content>

      <Footer className='footer'>
        <img src={ logo } alt='Menta' height={ 40 } />
      </Footer>
    </Layout>
  );
};

export default App;
