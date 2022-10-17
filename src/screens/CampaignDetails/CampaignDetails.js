import { Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {
    screenWidth,
    screenHeight,
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from '@utils/ResponsiveScreen';
import { PrimaryColor, SecoundaryColor, white, InputColor, Red,Purple } from '@themes/Themes';
import TextView from '@textView/TextView';
import BackIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import RoundContainer from '@roundContainer/RoundContainer';
import PerformanceIndicator from '@performanceIndicator/PerformanceIndicator'
import { useDispatch, useSelector } from 'react-redux';
import {GetAddDetails} from '@campaignDetails/CampaignDetailsAction';
import AnimationPress from '@animationPress/AnimationPress';
const CampaignDetails = ({ route, navigation }) => {
    //console.log(route.params.data);
    const dispatch=useDispatch();
    const { 
        isPerLoading,
        perData,
        perError
    } = useSelector((state) => state.CampaignDetailsReducer);

   

    useEffect(()=>{
        let addId=route?.params?.data?.id;
        console.log(addId);
        if(addId){
            addId=addId;
        }else{
            addId=4454;
        }
        dispatch(GetAddDetails(_getAddDetailsCallback,addId))
    },[]);

    const _getAddDetailsCallback=(status)=>{
        console.log(status);
      
    }

    console.log("perDatacampaign",perData.campaign)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: PrimaryColor }}>
            <View style={{ flex: 1 }}>
                {/* Header */}
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <AnimationPress onAnimationPress={()=>{navigation.goBack()}}>
                        <View style={{ marginLeft: 20 }}>
                            <BackIcon name="arrow-left" size={30} color={white} />
                        </View>
                        </AnimationPress>
                        <View style={{ marginLeft: 10 }}>
                            <MaterialIcon name="snapchat" size={35} color="white" />
                        </View>
                        <View style={{ marginLeft: 10 }}>
                            <View>
                                <TextView large fontBold>{perData.name}</TextView>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginLeft: 100 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <MaterialIcon name="balloon" size={30} color={Red} />
                            </View>
                            <View>
                                <TextView small textViewColor={Red} fontBold>CAMPAIGN {perData?.campaign?.status}</TextView>
                            </View>
                        </View>
                    </View>
                </View>
                {/* Header end*/}

                {/* Performance Sectipn */}
                <View style={{flex:1}}>
                    <View style={{marginTop:20,marginLeft:30}}>
                        <TextView fontBold>PERFORMANCE</TextView>
                    </View>
                    <View style={{flex:1}}>
                        <PerformanceIndicator 
                        percentage={perData?.campaign?.metrics?.spend} 
                        max={perData?.campaign?.adsquads?.lifetime_budget}
                        color={SecoundaryColor}
                        backColor={Purple}
                        />
                    </View>
                </View>
                {/* Media & Audience section */}
                <View style={{ flex: 2, flexDirection: 'row', margin: 20 }}>
                    {/* Media */}
                    <View style={{ flex: 1,padding:10 }}>
                        <View>
                            <TextView fontBold>MEDIA</TextView>
                        </View>
                        <View style={{paddingTop:10,flex:1}}>
                            <Image style={{ height: '100%', width: '100%', borderRadius: 50 }} 
                            source={{ uri: perData?.campaign?.adsquads?.creatives?.media?.url }} />
                        </View>
                    </View>
                    {/* Audience */}
                    <View style={{ flex: 1,padding:10 }}>
                        <View>
                            <TextView fontBold>AUDIENCE</TextView>
                        </View>
                        <View style={{paddingTop:10,flex:1}}>
                            <RoundContainer marginTop={0} ph={3} mh={0} style={{flex:1,justifyContent:'space-between'}} onContainerPress={()=>{}}>

                                <View style={{flexDirection:'row',marginVertical:5}}>
                                    <View>
                                        <MaterialIcon name="gender-male-female" size={40} color={SecoundaryColor} />
                                    </View>
                                    <View style={{marginLeft:5,justifyContent:'space-between'}}>
                                        <View>
                                            <TextView fontBold>Gneder</TextView>
                                        </View>
                                        <View>
                                            <TextView>{perData?.campaign?.adsquads?.targeting?.gender?.name}</TextView>
                                        </View>
                                    </View>
                                </View>

                                <View style={{flexDirection:'row',marginVertical:5}}>
                                    <View>
                                        <MaterialIcon name="nature-people" size={40} color={SecoundaryColor} />
                                    </View>
                                    <View style={{marginLeft:5,justifyContent:'space-between'}}>
                                        <View>
                                            <TextView fontBold>Age range</TextView>
                                        </View>
                                        <View>
                                            <TextView>{perData?.campaign?.adsquads?.targeting?.age_range?.min_age}-{perData?.campaign?.adsquads?.targeting?.age_range?.max_age}</TextView>
                                        </View>
                                    </View>
                                </View>

                                <View style={{flexDirection:'row',marginVertical:5}}>
                                    <View>
                                        <MaterialIcon name="language-java" size={40} color={SecoundaryColor} />
                                    </View>
                                    <View style={{marginLeft:5,justifyContent:'space-between'}}>
                                        <View>
                                            <TextView fontBold>Languages</TextView>
                                        </View>
                                        <View>
                                            <TextView small>{perData?.campaign?.adsquads?.targeting?.languages?.map((item)=>{
                                                return(
                                                    item.name
                                                )
                                            }).join(',')}</TextView>
                                        </View>
                                    </View>
                                </View>
                                

                                <View style={{flexDirection:'row',marginVertical:5}}>
                                    <View>
                                        <BackIcon name="location-pin" size={40} color={SecoundaryColor} />
                                    </View>
                                    <View style={{marginLeft:5,justifyContent:'space-between'}}>
                                        <View>
                                            <TextView fontBold>Location</TextView>
                                        </View>
                                        <View>
                                            <TextView small>{perData?.campaign?.adsquads?.targeting?.geos?.map((item)=>{
                                                return(
                                                    item.country.name
                                                )
                                            }).join(',')}</TextView>
                                        </View>
                                    </View>
                                </View>
                                

                            </RoundContainer>
                        </View>
                    </View>
                </View>

                {/* Add Destination */}
                <View style={{flex:1, marginHorizontal: 30,paddingTop:20}}>
                    <View>
                        <TextView fontBold>AD DESTINATION</TextView>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:Purple,paddingHorizontal:20,paddingVertical:20,borderRadius:50,marginTop:10}}>
                        <View>
                            <TextView textViewColor={white}>
                               {perData?.campaign?.adsquads?.creatives?.attachment?.url.toString()}
                            </TextView>
                        </View>
                        <View>
                        <MaterialIcon name="content-copy" size={20} color="white" />
                        </View>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default CampaignDetails

const styles = StyleSheet.create({

})