/**
 * Created by chalosalvador on 8/25/20
 */
import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <Result
    status='404'
    title='404'
    subTitle='No hemos encontrado esa página.'
    extra={ <Link to='/'><Button type='primary'>Ir la inicio</Button></Link> }
  />
);

export default NotFound;
