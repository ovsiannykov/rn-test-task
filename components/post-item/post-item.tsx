import React, { memo } from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';

import styles from './post-item.styles';

type PostItemProps = {
  title: string;
  body: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const PostItem: React.FC<PostItemProps> = memo(({ title, body, onPress }) => {
  return (
    <TouchableOpacity style={styles.constainer} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text>{body}</Text>
    </TouchableOpacity>
  );
});

export default PostItem;
