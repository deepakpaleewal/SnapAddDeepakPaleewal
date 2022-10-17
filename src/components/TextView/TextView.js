import PropTypes from "prop-types";
import React from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import {FontColor} from '@themes/Themes';

function TextView(props) {
  const {
    onLayout,
    disabled,
    onPress,
    children,
    numberOfLines,
    style,
    textViewColor,
    title,
    subtitle,
    large,
    medium,
    short,
    small,
    tiny,
    extraTiny,
    fontRegular,
    fontMedium,
    fontBold,
    fontSemiBold,
    fontExtraBold,
    heading,
    headingLarge,
    headingExtraLarge
  } = props;
  const {
    fontTitle,
    fontSubTitle,
    fontLarge,
    fontTextMedium,
    fontTextShort,
    fontSmall,
    fontTiny,
    fontExtraTiny,
    regularFont,
    mediumFont,
    boldFont,
    semiBoldFont,
    extraBoldFont,
    fontHeading,
    fontHeadingLarge,
    fontHeadingExtraLarge
  } = styles;
  const textColor = FontColor;
  let textStyle;
  if (headingExtraLarge) {
    textStyle = fontHeadingExtraLarge;
  } else if (headingLarge) {
    textStyle = fontHeadingLarge;
  } else if (heading) {
    textStyle = fontHeading;
  } else if (title) {
    textStyle = fontTitle;
  } else if (subtitle) {
    textStyle = fontSubTitle;
  } else if (large) {
    textStyle = fontLarge;
  } else if (medium) {
    textStyle = fontTextMedium;
  } else if (short) {
    textStyle = fontTextShort;
  } else if (small) {
    textStyle = fontSmall;
  } else if (tiny) {
    textStyle = fontTiny;
  } else if (extraTiny) {
    textStyle = fontExtraTiny;
  } else {
    textStyle = fontTextMedium;
  }

  if (fontBold) {
    textStyle = [textStyle, boldFont];
  } else if (fontMedium) {
    textStyle = [textStyle, mediumFont];
  } else if (fontSemiBold) {
    textStyle = [textStyle, semiBoldFont];
  } else if (fontExtraBold) {
    textStyle = [textStyle, extraBoldFont];
  } else if (fontRegular) {
    textStyle = [textStyle, regularFont];
  } else {
    textStyle = [textStyle, regularFont];
  }

  return (
    <Text
      ellipsizeMode="tail"
      onLayout={onLayout}
      disabled={disabled}
      onPress={onPress}
      style={[
        textStyle,
        style,
        {
          // alignSelf: 'center',
          color: textViewColor || textColor
        }
      ]}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
}

export default TextView;

TextView.propTypes = {
  onLayout: PropTypes.func,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  numberOfLines: PropTypes.number,
  textViewColor: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object
  ]),
  large: PropTypes.bool,
  title: PropTypes.bool,
  subtitle: PropTypes.bool,
  medium: PropTypes.bool,
  short: PropTypes.bool,
  small: PropTypes.bool,
  tiny: PropTypes.bool,
  fontRegular: PropTypes.bool,
  fontMedium: PropTypes.bool,
  fontBold: PropTypes.bool,
  fontSemiBold: PropTypes.bool,
  fontExtraBold: PropTypes.bool,
  heading: PropTypes.bool
};

TextView.defaultProps = {
  onLayout: undefined,
  onPress: undefined,
  disabled: undefined,
  numberOfLines: undefined,
  textViewColor: FontColor,
  children: "",
  style: {},
  large: undefined,
  title: undefined,
  subtitle: undefined,
  medium: undefined,
  short: undefined,
  small: undefined,
  tiny: undefined,
  fontRegular: undefined,
  fontMedium: undefined,
  fontBold: undefined,
  fontSemiBold: undefined,
  fontExtraBold: undefined,
  heading: undefined
};

export const styles = StyleSheet.create({
  fontHeadingExtraLarge: {
    fontSize: 36
  },
  fontHeadingLarge: {
    fontSize: 30
  },
  fontHeading: {
    fontSize: 22
  },
  fontTitle: {
    fontSize: 20
  },
  fontSubTitle: {
    fontSize: 18
  },
  fontLarge: {
    fontSize: 16
  },
  fontTextMedium: {
    fontSize: 14
  },
  fontTextShort: {
    fontSize: 13
  },
  fontSmall: {
    fontSize: 12
  },
  fontTiny: {
    fontSize: 11
  },
  fontExtraTiny: {
    fontSize: 10
  },
  regularFont: {
    fontFamily: "Montserrat-Regular"
  },
  mediumFont: {
    fontFamily: "Montserrat-Light"
  },
  boldFont: {
    fontFamily: "Montserrat-Bold"
    //fontWeight:'bold'
  },
  semiBoldFont: {
    fontFamily: "Montserrat-Regular"
  },
  extraBoldFont: {
    fontFamily: "Montserrat-Bold"
  }
});
