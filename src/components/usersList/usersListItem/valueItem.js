import React from 'react';
import {Text} from 'react-native';

import {style} from './styles';

const ValueItem = ({title, value}) => (
  <Text style={style.titleText}>
    {title}
    <Text style={style.valueText}>{value}</Text>
  </Text>
);

export default ValueItem;
