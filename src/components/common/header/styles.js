import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {
  hp,
  wp,
  fontSize,
  fontFamily,
  statusBarHeight,
} from '../../../helper/constants';

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: statusBarHeight + hp(1.5),
    paddingBottom: hp(1.5),
    backgroundColor: colors.secondaryBgColor,
  },
  backIconContainer: {
    marginLeft: wp(4),
    position: 'absolute',
    left: 0,
    top: statusBarHeight + hp(1.5),
  },
  backIcon: {
    height: wp(5),
    width: wp(5),
    tintColor: colors.backgroundColor,
  },
  titleText: {
    fontSize: fontSize(18),
    lineHeight: fontSize(22),
    fontFamily: fontFamily.bold,
    color: colors.backgroundColor,
  },
});
