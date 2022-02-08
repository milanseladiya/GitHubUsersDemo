import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Button, Header} from '../../components';
import {routes} from '../../navigation/routes';
import {strings} from '../../helper/strings';
import {style} from './styles';

const HomeScreen = () => {
  const {navigate} = useNavigation();

  const onUserDetailsPress = () => navigate(routes.UsersListScreen);

  const onMyLocationPress = () => navigate(routes.UserLocationScreen);

  return (
    <View style={style.mainContainer}>
      <Header title={strings.home} />
      <View style={style.contentContainer}>
        <Button title={strings.userDetails} onPress={onUserDetailsPress} />
        <Button title={strings.myLocation} onPress={onMyLocationPress} />
      </View>
    </View>
  );
};

export default HomeScreen;
