import React, { useEffect, useState } from 'react';
import { Form, Button, Input, Avatar, Comment, List } from 'antd';

const { TextArea } = Input;

const CommentsList = ( { onAddComment, movieComments } ) => {

  // Esto no hace falta en realidad.
  // const [ movieComments, setMovieComments ] = useState( props.movieComments );
  // useEffect( () => {
  //   console.log( 'movieComments', movieComments );
  //   setMovieComments( props.movieComments );
  // }, [ props.movieComments ] );

  const CommentForm = () => (
    <>
      <Form
        name='comment-form'
        onFinish={ onAddComment }
        // onFinishFailed={ onFinishFailed }
      >
        <Form.Item
          label='Comentario'
          name='text'
          rules={ [
            {
              required: true,
              message: 'Ingresa un texto en el comentario'
            }
          ] }
        >
          <TextArea rows={ 4 } />
        </Form.Item>

        <Form.Item>
          <Button htmlType='submit' type='primary' style={ { marginTop: 15 } }>
            Agregar Comentario
          </Button>
        </Form.Item>
      </Form>
    </>
  );

  return (
    <>
      <List
        className='comment-list'
        header={`${movieComments.length} comentarios`}
        itemLayout='horizontal'
        dataSource={ movieComments }
        renderItem={ item => (
          <li>
            <Comment
              // actions={item.actions}
              // author={item.author}
              // avatar={item.avatar}
              content={ item.text }
              // datetime={item.datetime}
            />
          </li>
        ) }
      />

      <Comment avatar={ <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                                alt='Han Solo' /> }
               content={ CommentForm() }
      />
    </>
  );
};

export default CommentsList;
