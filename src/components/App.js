import React, { useState } from 'react';
import '../styles/App.less';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
import logo from '../images/logo-menta.png';
import Navigation from './Navigation';
import AppRouter from '../routers/AppRouter';

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Router>

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
    </Router>
  );
};

export default App;
