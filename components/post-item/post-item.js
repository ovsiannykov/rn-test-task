import React, { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './post-item.styles';

const PostItem = memo(({ title, body, onPress }) => {
  return (
    <TouchableOpacity style={styles.constainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </TouchableOpacity>
  );
});

export default PostItem;
