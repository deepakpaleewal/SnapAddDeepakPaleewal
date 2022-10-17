import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useRef, useState } from 'react';
import {
    screenWidth,
    screenHeight,
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '@utils/ResponsiveScreen';
import { PrimaryColor, SecoundaryColor, white, InputColor } from '@themes/Themes';
import TextView from '@textView/TextView';
import RoundContainer from '@roundContainer/RoundContainer';
import RoundButton from '@roundButton/RoundButton';
import BackIcon from 'react-native-vector-icons/SimpleLineIcons';
import ObjectiveModal from '@objectiveModal/ObjectiveModal';
const DetailsForm = ({ ProceedToCompose,FormData,OnChnageValues,FormError,DetailsLoading }) => {
    console.log("DetailsLoading",DetailsLoading)
    const adNameRef = useRef(null);
    const [isObjectiveModalVisible,setIsObjectiveModalVisible]=useState(false);

    const _onAdNamePress = () => {
        adNameRef.current.focus();
    };

    const _onPressObjective = () => { 
        setIsObjectiveModalVisible(!isObjectiveModalVisible)
    };

    return (
        <View style={{ flex: 1 }}>
            <RoundContainer 
            onContainerPress={_onAdNamePress}
            error={FormError.name}
            >
                <View>
                    <TextView large fontBold>
                        AD NAME
                    </TextView>
                    <TextInput
                        ref={adNameRef}
                        style={{ width: '100%', color: white }}
                        placeholderTextColor={white}
                        placeholder="Enter Your campaign's name"
                        onChangeText={(value)=>OnChnageValues({name:"name",value})}
                        value={FormData.name!=undefined?FormData.name:""}
                    />
                </View>
            </RoundContainer>

            <RoundContainer 
              error={FormError.objective}
            onContainerPress={_onPressObjective} 
            style={{flexDirection:'row',justifyContent:'space-between',
            alignItems:"center"}}>
                <View>
                    <TextView large fontBold>
                        Objective
                    </TextView>
                    <TextView>
                     {FormData.objective!=undefined? FormData.objective.name: "Select Objective"}
                    </TextView>
                </View>
                
                <View>
                        <BackIcon name="arrow-down" size={15} color={white} />
                    </View>
            </RoundContainer>
            <View style={styles.btnSection}>
                <RoundButton onButtonPress={ProceedToCompose} loading={DetailsLoading}/>
            </View>

            <ObjectiveModal
            toggleModal={_onPressObjective}
            modalVisibility={isObjectiveModalVisible}
            selectedVal={(value)=>OnChnageValues(value)}
            value={FormData.objective!=undefined?FormData.objective.id:""}
            />

        </View>
    );
};

export default DetailsForm;

const styles = StyleSheet.create({
    btnSection: { flex: 1, alignItems: 'center', marginTop: hp(10) },
});
