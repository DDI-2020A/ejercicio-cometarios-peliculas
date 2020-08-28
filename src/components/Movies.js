import React, { useEffect, useState } from 'react';
import Card from 'antd/es/card';
import EllipsisOutlined from '@ant-design/icons/lib/icons/EllipsisOutlined';
import EditOutlined from '@ant-design/icons/lib/icons/EditOutlined';
import Meta from 'antd/es/card/Meta';
import Button from 'antd/es/button';
import Modal from 'antd/es/modal';
import Descriptions from 'antd/es/descriptions';
import Comments from './Comments';
import CommentsList from './CommentsList';

const Movies = ( props ) => {

  const [ listMovies, setListMovies ] = useState( props.listMovies );
  const [ imdbID, setImdbID ] = useState( null );
  const [ currentMovie, setCurrentMovie ] = useState( {} );
  const [ movieDetails, setMovieDetails ] = useState( {} );
  const [ createInfoModalVisible, setCreateInfoModalVisible ] = useState( false );
  const [ createCommentModalVisible, setCreateCommentsModalVisible ] = useState( false );

  useEffect( () => {
    console.log( 'list movies', props.listMovies );
    setListMovies( props.listMovies );
  }, [ props.listMovies ] );

  useEffect( () => {
    const getMovieDetails = async() => {
      if( imdbID ) {
        const response = await fetch( `https://www.omdbapi.com/?apikey=135f640d&i=${ imdbID }` );
        const movieJson = await response.json();
        setMovieDetails( movieJson );
        setCreateInfoModalVisible( true );
      }
    };

    getMovieDetails();
  }, [ imdbID ] );

  const handleOpenComments = ( movie, index ) => {
    setCurrentMovie( {
      index,
      data: movie
    } );
    setCreateCommentsModalVisible( true );
  };

  const handleAddComment = ( text ) => {
    setListMovies( ( prevListMovies ) => {
      const movieToAddComment = prevListMovies.Search[ currentMovie.index ];

      if( movieToAddComment[ 'comments' ] ) {
        movieToAddComment[ 'comments' ].push( text );
      } else {
        movieToAddComment[ 'comments' ] = [ text ];
      }

      const movieListUpdated = prevListMovies.Search;
      movieListUpdated[ currentMovie.index ] = movieToAddComment;

      return {
        ...prevListMovies,
        Search: movieListUpdated
      };

    } );
  };

  return (
    <div>
      {
        listMovies && listMovies.Search
          ?
          listMovies.Search.map( ( item, index ) => {
            return (
              <Card key={ `movie-${ index }` }
                    style={ {
                      width: 300,
                      display: 'inline-block'
                    } }
                    cover={ <img src={ item.Poster } alt={ item.Title } /> }
                    actions={ [
                      <Button icon={ <EditOutlined /> }
                              onClick={ () => handleOpenComments( item, index ) }
                              key='edit' />,
                      <Button icon={ <EllipsisOutlined /> } onClick={ () => setImdbID( item.imdbID ) } key='ellipsis' />
                    ] }
              >
                <Meta title={ item.Title } description={ `Año: ` + item.Year } />
              </Card>
            );
          } )
          : 'Cargando'
      }


      <Modal
        title='Informacion pelicula: '
        visible={ createInfoModalVisible }
        onOk={ () => setCreateInfoModalVisible( false ) }
        onCancel={ () => setCreateInfoModalVisible( false ) }
        width={ 900 }
        footer={ null }
      >
        <Descriptions bordered>
          <Descriptions.Item label='Publicada'>{ movieDetails.Released }</Descriptions.Item>
          <Descriptions.Item label='Duracion'>{ movieDetails.Runtime }</Descriptions.Item>
          <Descriptions.Item label='Escritor'>{ movieDetails.Writer }</Descriptions.Item>
          <Descriptions.Item label='Actores' span={ 2 }>
            { movieDetails.Actors }
          </Descriptions.Item>
        </Descriptions>
        <Comments />
      </Modal>


      <Modal
        title={ `Agregar Comentarios para: ${ currentMovie.data && currentMovie.data.Title }` }
        visible={ createCommentModalVisible }
        onOk={ () => setCreateCommentsModalVisible( false ) }
        onCancel={ () => setCreateCommentsModalVisible( false ) }
        footer={ null }
      >
        <div>
          <CommentsList onAddComment={ handleAddComment }
                        movieComments={ currentMovie && currentMovie.data && currentMovie.data.comments
                          ? currentMovie.data.comments
                          : [] } />
        </div>
      </Modal>


    </div>
  );
};
export default Movies;


