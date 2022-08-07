import React, { memo, useEffect, useState, useCallback } from 'react';
import Snackbar from 'react-native-snackbar';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { postsActions } from '../../../store/posts/posts-actions';
import styles from './home-screen.styles';
import PostItem from '../../../components/post-item/post-item';
import CommentsModal from '../../../components/comments-modal/comments-modal';

/* 
=================
По поводу получения данных:
Я знаю, что не совсем красиво и правильно делать запрос прямо в компоненте,
но в ТЗ не было указано про Saga или Thunk, именно там я обычно делаю запросы
*/

const HomeScreen = memo(() => {
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectPostId, setSelectPostId] = useState<string | number>('');

  const dispatch = useDispatch();
  const posts = useSelector(state => state?.postsReducer?.posts);

  const fetchingData = useCallback(async () => {
    setLoading(true);
    await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(async json => {
        await dispatch(postsActions.setPosts(json));
      })
      .catch(error => {
        snakHandler(error);
      });
    setLoading(false);
  }, [dispatch, snakHandler]);

  const snakHandler = useCallback(
    (title: string) => {
      Snackbar.show({
        text: `${title}`,
        duration: Snackbar.LENGTH_LONG,
        action: {
          text: 'Try again',
          textColor: 'gray',
          onPress: () => {
            fetchingData();
          },
        },
      });
    },
    [fetchingData],
  );

  const moddalError = useCallback((title: string) => {
    Snackbar.show({
      text: `${title}`,
      duration: Snackbar.LENGTH_LONG,
    });
  }, []);

  useEffect(() => {
    fetchingData();
  }, [fetchingData]);

  const toggleModal = useCallback(() => {
    setModalVisible(!isModalVisible);
  }, [isModalVisible]);

  const openModal = useCallback(
    async (id: string | undefined) => {
      await setSelectPostId(id);
      toggleModal();
    },
    [setSelectPostId, toggleModal],
  );

  const renderItem = ({ item }) => (
    <PostItem title={item.title} body={item.body} onPress={() => openModal(item.id)} />
  );

  if (loading) {
    return (
      <View style={styles.fullScreen}>
        <ActivityIndicator size="large" color="gray" />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      {posts ? (
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.fullScreen}>
          <Text>Sorry, failed to load posts</Text>
        </View>
      )}
      <CommentsModal
        isModal={isModalVisible}
        chageModal={toggleModal}
        id={selectPostId}
        changeId={setSelectPostId}
        isError={moddalError}
      />
    </View>
  );
});

export default HomeScreen;
