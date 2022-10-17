import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { PrimaryColor, SecoundaryColor, white, InputColor,Red } from '@themes/Themes';
import {
    screenWidth,
    screenHeight,
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from '@utils/ResponsiveScreen';

const RoundContainer = ({marginTop=5,ph=6,mh=2,pv=2,onContainerPress,error,...props}) => {
    const getBorderColor = () => {
        //   console.log(focused);
        if (error) {
          return Red;
        } else {
          return InputColor;
        }
      };
    return (
        <TouchableWithoutFeedback onPress={()=>onContainerPress()}>
        <View style={[styles.roundMain, {marginTop: hp(marginTop),paddingHorizontal:wp(ph),marginHorizontal:hp(mh),borderWidth:1,paddingVertical:hp(pv),borderColor:getBorderColor(),...props.style}]}>
            {props.children}
        </View>
        </TouchableWithoutFeedback>
    )
}

export default RoundContainer;

const styles = StyleSheet.create({
    roundMain: {
     //   marginHorizontal: hp(2),
     //   paddingHorizontal: wp(6),
     //   paddingVertical: hp(2),
        backgroundColor: InputColor,
        borderRadius: 50
    }
})