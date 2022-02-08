import React from 'react';
import {View, Image} from 'react-native';

import ValueItem from './valueItem';
import {icons} from '../../../helper/imageConstants';
import {strings} from '../../../helper/strings';
import {style} from './styles';

const UsersListItem = ({data}) => {
  const login = data?.login || '';
  const nodeId = data?.node_id || '';
  const id = data?.id || '';
  const type = data?.type || '';
  const avatar = {uri: data?.avatar_url} || icons.defaultUser;

  return (
    <View style={style.mainContainer}>
      <View style={style.contentContainer}>
        <ValueItem title={strings.login} value={login} />
        <ValueItem title={strings.nodeId} value={nodeId} />
        <ValueItem title={strings.id} value={id} />
        <ValueItem title={strings.type} value={type} />
      </View>
      <Image
        source={avatar}
        style={style.avatar}
        resizeMode={'cover'}
        defaultSource={icons.defaultUser}
      />
    </View>
  );
};

export default UsersListItem;
