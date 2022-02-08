import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {style} from './styles';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={style.mainContainer} onPress={onPress}>
      <Text style={style.titleText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
