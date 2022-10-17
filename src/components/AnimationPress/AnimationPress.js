import { StyleSheet, Text, View,Animated,TouchableWithoutFeedback} from 'react-native'
import React from 'react'

const AnimationPress = ({style,onAnimationPress,...props}) => {
     // Initial scale value of 1 means no scale applied initially.
     const animatedButtonScale = new Animated.Value(1);

     // When button is pressed in, animate the scale to 0.95
     const onPressIn = () => {
         Animated.spring(animatedButtonScale, {
             toValue: 0.95,
             useNativeDriver: true,
         }).start();
     };
 
     // When button is pressed out, animate the scale back to 1
     const onPressOut = () => {
         Animated.spring(animatedButtonScale, {
             toValue: 1,
             useNativeDriver: true,
         }).start();
     };
 
     // The animated style for scaling the button within the Animated.View
     const animatedScaleStyle = {
         transform: [{scale: animatedButtonScale}]
     };
  return (
    <TouchableWithoutFeedback 
        onPress={() => onAnimationPress()}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
    >
        <Animated.View style={[animatedScaleStyle,{...style}]}>
            {props.children}
        </Animated.View>
    </TouchableWithoutFeedback>
  )
}

export default AnimationPress

const styles = StyleSheet.create({})