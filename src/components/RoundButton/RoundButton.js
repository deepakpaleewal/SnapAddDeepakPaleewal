import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  ActivityIndicator
} from 'react-native'
import React from 'react'
import { PrimaryColor, SecoundaryColor, white, InputColor } from '@themes/Themes';
import {
  screenWidth,
  screenHeight,
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from '@utils/ResponsiveScreen';
import BackIcon from 'react-native-vector-icons/SimpleLineIcons';
const RoundButton = ({onButtonPress,loading}) => {
  console.log("loading",loading)
  const animatedButtonScale = new Animated.Value(1);

  const onPressIn = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 0.8,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };


  const animatedScaleStyle = {
    transform: [{ scale: animatedButtonScale }]
  };

  return (
    <TouchableWithoutFeedback
     onPress={() =>{onButtonPress()}}
    onPressIn={onPressIn}
    onPressOut={onPressOut}>
      <Animated.View style={[{...styles.mainStyle},animatedScaleStyle]}>
        {loading?
        <ActivityIndicator/>
        :  
        <BackIcon name="arrow-right" size={25} color={white} />
      }
        
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

export default RoundButton;

const styles = StyleSheet.create({
  mainStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: SecoundaryColor
  }
})