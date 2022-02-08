import React, {useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {UsersListItem, Header} from '../../components';
import {getUsers} from '../../actions';
import {strings} from '../../helper/strings';
import {colors} from '../../helper/colors';
import {style} from './styles';

const UsersListScreen = () => {
  const {goBack} = useNavigation();
  const dispatch = useDispatch();
  const {users, loading, refreshing, shouldLoadMore} = useSelector(
    state => state.users,
  );

  useEffect(() => {
    dispatch(getUsers({since: 0}));
  }, []);

  const onRefresh = () => dispatch(getUsers({since: 0, refreshing: true}));

  const onEndReached = () => {
    if (!loading && shouldLoadMore) {
      const lastUserId = users[users.length - 1]?.id;
      dispatch(getUsers({since: lastUserId}));
    }
  };

  const renderFooterComponent = () => {
    if (loading && users.length > 0) {
      return (
        <View style={style.footerContainer}>
          <ActivityIndicator size={'small'} color={colors.primaryColor} />
        </View>
      );
    }
    return null;
  };

  const renderItem = ({item}) => <UsersListItem data={item} />;

  const keyExtractor = item => item?.id?.toString();

  const renderContent = () => {
    if (users.length === 0 && loading) {
      return (
        <View style={style.loadingContainer}>
          <ActivityIndicator size={'large'} color={colors.primaryColor} />
        </View>
      );
    } else {
      return (
        <FlatList
          data={users}
          keyboardShouldPersistTaps={'never'}
          contentContainerStyle={style.listContentContainer}
          removeClippedSubviews={true}
          showsVerticalScrollIndicator={false}
          onRefresh={onRefresh}
          refreshing={refreshing}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          onEndReachedThreshold={0.1}
          onEndReached={onEndReached}
          ListFooterComponent={renderFooterComponent}
        />
      );
    }
  };

  return (
    <View style={style.mainContainer}>
      <Header title={strings.users} hasBackButton={true} onBackPress={goBack} />
      {renderContent()}
    </View>
  );
};

export default UsersListScreen;
