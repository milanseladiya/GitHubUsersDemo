import {StyleSheet} from 'react-native';

import {colors} from '../../../helper/colors';
import {fontSize, hp, wp} from '../../../helper/constants';

export const style = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    bottom: hp(4),
    width: wp(85),
    alignSelf: 'center',
    backgroundColor: colors.tileBgColor,
    borderRadius: wp(2.5),
    padding: wp(4),
  },
  titleText: {
    fontSize: fontSize(15),
    fontWeight: 'bold',
    color: colors.textColor,
    marginBottom: hp(0.5),
  },
  valueText: {
    fontSize: fontSize(12),
    color: colors.textColor,
    marginTop: hp(0.5),
  },
});
