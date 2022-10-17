import { StyleSheet, Text, View, Animated, TextInput } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { PrimaryColor, SecoundaryColor, white, InputColor, Red,Purple } from '@themes/Themes';
import Svg, { G, Circle } from 'react-native-svg';
import TextView from '@textView/TextView';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

const PerformanceIndicator = ({
  percentage = 50,
  radius = 70,
  strockWidth = 10,
  duration = 1000,
  color = 'red',
  delay = 0,
  max = 100,
  backColor='red'
}) => {
  const animatedVal = useRef(new Animated.Value(0)).current;
  const refCircle = useRef();
  const inputRef=useRef();
  const haflCircle = radius + strockWidth;
  const CircleLength = 2 * Math.PI * radius;

  const animation = (toValue) => {
    return Animated.timing(animatedVal, {
      toValue,
      duration: duration,
      delay,
      useNativeDriver: true,
    }).start();
  }

  useEffect(() => {
    animation(percentage);
    animatedVal.addListener((v) => {
      if (refCircle?.current) {
        const maxPer = (100 * v.value) / max;
        const strockOff = CircleLength - (CircleLength * maxPer) / 100;
        refCircle.current.setNativeProps({
          strokeDashoffset: strockOff,
        });
      }
      if(inputRef?.current){
        inputRef.current.setNativeProps({
          text:`${Math.round(v.value)}`
        })
      }
    });

    return () => {
      animatedVal.removeAllListeners();
    };
  }, [max, percentage]);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1,paddingTop:10 }}>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${haflCircle * 2} ${haflCircle * 2}`}
      >
        <G rotation={-90} origin={`${haflCircle}, ${haflCircle}`}>
          <Circle
            cx='50%'
            cy='50%'
            stroke={backColor}
            strokeWidth={strockWidth}
            r={radius}
            fill="transparent"
            strokeOpacity={0.7}
          />
          <AnimatedCircle
            ref={refCircle}
            cx='50%'
            cy='50%'
            stroke={color}
            strokeWidth={strockWidth}
            r={radius}
            fill="transparent"
            strokeDasharray={CircleLength}
            // strokeDashoffset={CircleLength}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <View style={[StyleSheet.absoluteFillObject], { justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <View>
            <MaterialIcon name="currency-rupee" size={30} color={white} />
          </View>
          <View style={{alignItems:'center'}}>
            <TextView small fontBold>SPEND</TextView>
            <View style={{flexDirection:'row'}}>
              <MaterialIcon name="currency-rupee" size={15} color={SecoundaryColor} />
              <AnimatedInput
              ref={inputRef}
                underlineColorAndroid={"transparent"}
                editable={false}
                defaultValue='0'
                style={{color:SecoundaryColor,fontSize:15}}
              />
            </View>
            <View>
              <TextView small textViewColor={white}>
                Out of <MaterialIcon name="currency-rupee" size={10} color={white} />{max}
              </TextView>
            </View>
          </View>
        </View>

      </View>
    </View>
  )
}

export default PerformanceIndicator

const styles = StyleSheet.create({

})