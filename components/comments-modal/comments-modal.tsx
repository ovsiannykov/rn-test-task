import React, { Dispatch, memo, SetStateAction, useCallback, useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import Modal from 'react-native-modal';

import styles from './comments-modal.styles';
import PostItem from '../post-item/post-item';

type CommentsModalProps = {
  isModal: boolean;
  chageModal: Dispatch<SetStateAction<boolean>>;
  id: number | string;
  changeId: Dispatch<SetStateAction<string | number>>;
  isError: (title: string) => void;
};

const CommentsModal: React.FC<CommentsModalProps> = memo(
  ({ id, isModal, chageModal, changeId, isError }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();

    const closeModal = useCallback(async () => {
      await changeId('');
      chageModal(false);
    }, [chageModal]);

    const fetchingData = async () => {
      setLoading(true);
      await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(response => response.json())
        .then(async json => {
          await setData(json);
          setLoading(false);
        })
        .catch(async e => {
          setLoading(false);
          await closeModal();
          isError(e);
        });
    };

    useEffect(() => {
      setLoading(true);
      fetchingData();
      setLoading(false);
    }, [fetchingData]);

    const renderItem = ({ item }) => <PostItem title={item.email} body={item.body} />;

    return (
      <Modal
        isVisible={isModal}
        onSwipeComplete={closeModal}
        swipeDirection={['down']}
        style={styles.viewModal}
        onBackdropPress={closeModal}
        propagateSwipe={true}
      >
        {loading ? (
          <View style={styles.modalFull}>
            <ActivityIndicator size="large" color="gray" />
          </View>
        ) : (
          <View style={styles.modal}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
      </Modal>
    );
  },
);

export default CommentsModal;
