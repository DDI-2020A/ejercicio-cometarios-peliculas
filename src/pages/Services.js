/**
 * Created by chalosalvador on 8/25/20
 */
import React from 'react';
import { db } from '../firebase';

export default () => {
  const writeDB = () => {
    db.ref('users/Iaaaa').set({
      username: 'Chalo',
      email: 'chalosalvador@gmail.com'
    });
  }

  writeDB();
}

// export default Services;
