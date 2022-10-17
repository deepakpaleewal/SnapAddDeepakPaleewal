import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { PrimaryColor, SecoundaryColor, white, Gray, ObjItemColor1, ObjItemColor2, Red } from '@themes/Themes';
import TextView from '@textView/TextView';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AnimationPress from '@animationPress/AnimationPress';
import {
    screenWidth,
    screenHeight,
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '@utils/ResponsiveScreen';
const ObjectiveData = [
    {
        "id": "WEBSITE",
        "name": "Website Traffic",
        "description": "INCREASE MY WEBSITE VISIT",
        "icon": <MaterialIcon name="web" size={50} color={ObjItemColor1} />,
        "titleColor": ObjItemColor1,
        "descColor": ObjItemColor1,

    },
    {
        "id": "BRAND_AWARENESS",
        "name": "Brand Awareness",
        "description": "TELL PEOPLE ABOUT MY BRAND",
        "icon": <MaterialIcon name="broadcast" size={50} color={Red} />,
        "titleColor": ObjItemColor1,
        "descColor": Red,
    }
]


const ItemComponent = ({ objData, index,onItemPress,borderColor }) => {
    return (
        <AnimationPress onAnimationPress={(objData) => { onItemPress(objData) }}>
            <View style={[styles.ItemMain,borderColor && {borderColor:borderColor,borderWidth:2}]}>
                <View>
                    {objData.icon}
                </View>
                <View style={styles.ItemContent}>
                    <TextView textViewColor={objData.titleColor}>{objData.name}</TextView>
                    <TextView small textViewColor={objData.descColor}>{objData.description}</TextView>
                </View>

            </View>
        </AnimationPress>
    )
}

const ObjectiveModal = ({ toggleModal, modalVisibility,selectedVal,value }) => {

    const _onPressItem=(selectedData)=>{
      toggleModal();
       selectedVal({name:"objective",value:{"name":selectedData.name,"id":selectedData.id}})
    }
    return (
        <View>
            <Modal
                transparent={true}
                animationType="slide"
                visible={modalVisibility}
                onRequestClose={() => toggleModal()}>
                <View style={{ backgroundColor: white, marginTop: hp(24), marginHorizontal: wp(4), borderRadius: 50,height:hp(60) }}>
                    {/* Header */}
                    <AnimationPress onAnimationPress={() => toggleModal()}>
                        <View style={{ paddingHorizontal: 20, paddingVertical: 15, flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <MaterialIcon name="window-close" size={30} color="black" />
                            </View>
                            <View>
                                <TextView textViewColor={"black"} large fontBold>SELECT AN OBJECTIVE</TextView>
                            </View>
                        </View>
                    </AnimationPress>
                    {/* body */}
                    <View style={{ padding: 20 }}>
                        {ObjectiveData.map((item, index) => {
                            const selectedValue=value==item.id?PrimaryColor:null;
                            return (<ItemComponent borderColor={selectedValue} key={index} objData={item} index={index} onItemPress={(obj)=>_onPressItem(item)}/>)
                        })}
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ObjectiveModal;

const styles = StyleSheet.create({
    ItemMain:{
        flexDirection: 'row',
        elevation: 5,
        padding: 20,
        borderRadius:30,
        backgroundColor: white,
        shadowColor: "#000000",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        marginVertical:5,
    },
    ItemContent:{justifyContent:'space-evenly',paddingLeft:10}
})