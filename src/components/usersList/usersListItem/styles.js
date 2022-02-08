import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {fontSize, hp, wp} from '../../../helper/constants';

const AVATAR_SIZE = 14;

export const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.tileBgColor,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: wp(5),
    marginHorizontal: wp(5),
    borderRadius: wp(2.5),
    padding: wp(4),
  },
  contentContainer: {
    flex: 1,
  },
  avatar: {
    height: wp(AVATAR_SIZE),
    width: wp(AVATAR_SIZE),
    borderRadius: wp(AVATAR_SIZE / 2),
  },
  titleText: {
    fontSize: fontSize(15),
    fontWeight: '500',
    color: colors.textColor,
    marginBottom: hp(0.5),
  },
  valueText: {
    fontSize: fontSize(14),
    fontWeight: 'normal',
  },
});
