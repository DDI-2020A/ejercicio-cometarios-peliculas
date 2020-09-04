/**
 * Created by chalosalvador on 8/25/20
 */
import React from 'react';
import { Radio } from 'antd';
import a1 from '../images/avatars/a1.jpeg';
import a2 from '../images/avatars/a2.jpeg';
import '../styles/about.less';

const avatars = {
  a1,
  a2,
};
const user = {
  name: 'Chalo',
  avatar: 'a2'
};

const getAvatarOptions = () => {
  const avatarOptions = [];
  for( let avatarKey in avatars ) {

    console.log( 'avatarKey', avatarKey );
    avatarOptions.push(
      {
        label: <img src={ avatars[ avatarKey ] } alt='' height={ 200 } />,
        value: avatarKey
      }
    );
  }

  console.log( 'avatarOptions', avatarOptions );
  return avatarOptions;
};

const About = () => (
  <div>
    <Radio.Group className='avatar-buttons' options={ getAvatarOptions() } optionType='button' />

    <h1>Perfil</h1>
    <ul>
      <li>{ user.name }</li>
      <li><img src={ avatars[ user.avatar ] } /></li>
    </ul>

  </div>
);

export default About;
