/**
 * Created by chalosalvador on 8/25/20
 */
import { Button, Input, PageHeader, Radio } from 'antd';
import SearchOutlined from '@ant-design/icons/lib/icons/SearchOutlined';
import Movies from '../components/Movies';
import React, { useEffect, useState } from 'react';
import '../styles/home.less';

const Home = () => {

  const [ listMovies, setListMovies ] = useState( null );
  const [ tittle, setTittle ] = useState( 'cars' );

  useEffect( () => {
    const getListMovies = async() => {
      const data = await fetch( `http://www.omdbapi.com/?apikey=135f640d&s=${ tittle }` );
      const jsonListMovies = await data.json();
      console.log( 'movies', jsonListMovies );
      setListMovies( jsonListMovies );
    };
    getListMovies();
  }, [ tittle ] );

  const handleResearch = () => {
    const title = '&s=' + document.querySelector( '#Tittle' ).value;
    setTittle( title );

  };

  return (
    <>
      <div className='header'>
        <PageHeader
          title='MOVIES'
          extra={ [
            <Input id='Tittle' placeholder='Titulo' style={ { width: 350 } } />,
            <Input placeholder='Año' style={ { width: 350 } } />,
            <label>Tipo: </label>,
            <Radio.Group>
              <Radio value={ 1 }>Todo</Radio>
              <Radio value={ 2 }>Peliculas</Radio>
              <Radio value={ 3 }>Series</Radio>
            </Radio.Group>,
            <Button type='primary' onClick={ handleResearch } icon={ <SearchOutlined /> }>
              Buscar
            </Button>
          ] }
        >
        </PageHeader>

      </div>
      <Movies listMovies={ listMovies } />
    </>
  );
};

export default Home;
