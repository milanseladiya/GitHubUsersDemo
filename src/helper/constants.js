import {Platform} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const wp = val => widthPercentageToDP(val);

export const hp = val => heightPercentageToDP(val);

export const fontSize = size => RFValue(size);

export const isIos = Platform.OS === 'ios';

export const statusBarHeight = getStatusBarHeight();

export const fontFamily = {
  regular: 'Metropolis-Regular',
  medium: 'Metropolis-Medium',
  bold: 'Metropolis-Bold',
};

/**
 * Location Delta
 */
export const LOCATION_DELTA = {latitudeDelta: 0.0922, longitudeDelta: 0.0421};
