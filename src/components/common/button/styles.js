import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {fontSize, hp, wp} from '../../../helper/constants';

export const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.secondaryBgColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(2.5),
    paddingVertical: wp(4),
    paddingHorizontal: wp(10),
    marginVertical: hp(2.5),
  },
  titleText: {
    fontSize: fontSize(16),
    fontWeight: '600',
    color: colors.btnTextColor,
  },
});
