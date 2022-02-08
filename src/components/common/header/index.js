import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {getHitSlop} from '../../../helper/global';
import {icons} from '../../../helper/imageConstants';
import {style} from './styles';

const Header = ({title, hasBackButton, onBackPress}) => {
  return (
    <View style={style.container}>
      {hasBackButton ? (
        <TouchableOpacity
          style={style.backIconContainer}
          onPress={onBackPress}
          hitSlop={getHitSlop(15)}>
          <Image source={icons.back} style={style.backIcon} />
        </TouchableOpacity>
      ) : null}
      <Text style={style.titleText}>{title}</Text>
    </View>
  );
};

export default Header;
