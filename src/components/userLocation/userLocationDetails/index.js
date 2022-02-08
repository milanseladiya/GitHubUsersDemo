import React from 'react';
import {View, Text} from 'react-native';

import {strings} from '../../../helper/strings';
import {style} from './styles';

const UserLocationDetails = ({data}) => {
  const latitude = data?.latitude || '';
  const longitude = data?.longitude || '';

  return (
    <View style={style.mainContainer}>
      <Text style={style.titleText}>{strings.currentLocation}</Text>
      <Text style={style.valueText}>
        {strings.latitude}
        {latitude}
      </Text>
      <Text style={style.valueText}>
        {strings.longitude}
        {longitude}
      </Text>
    </View>
  );
};

export default UserLocationDetails;
