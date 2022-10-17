import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef } from 'react'
import {
    screenWidth,
    screenHeight,
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from '@utils/ResponsiveScreen';
import TextView from '@textView/TextView';
import RoundContainer from '@roundContainer/RoundContainer';
import { PrimaryColor, SecoundaryColor, white, InputColor,Gray } from '@themes/Themes';
import BackIcon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import ImagePicker from 'react-native-image-crop-picker';
import AnimationPress from '@animationPress/AnimationPress';


const ComposeForm = ({FormData,OnChnageValues,FinalSubmit,FormError}) => {

    console.log(FormData);
    const campRef = useRef(null);
    const webSiteRef = useRef(null);
    const _onCampNamePress = () => {
        campRef.current.focus();
    }
    const _onWebSitePress = () => {
        webSiteRef.current.focus();
    }

    const _launchGallery = async () => {
        ImagePicker.openPicker({
          width: 1080,
          height: 1920,
          includeBase64:true,
          mediaType: "photo",
        }).then(async(image) => {
     //    console.log(image);
         let ImageObje={
            path:image.path,
         }
         OnChnageValues({name:"media",value:ImageObje});
        });
      }

    return (
        <ScrollView>
            <View style={{ flex: 1, alignItems: 'center', marginHorizontal: wp(6), marginVertical: wp(3) }}>
                <View style={{ width: '100%', backgroundColor: '#3f0c8c', padding: wp(2), borderRadius: 50, paddingBottom: wp(5) }}>
                    <RoundContainer marginTop={1.5} onContainerPress={_onCampNamePress}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialIcon name="pencil" size={20} color={white} />
                            <View>
                                <TextView>Campaign Name</TextView>
                                <TextInput
                                editable={false}
                                    ref={campRef}
                                    style={{ width: '100%', color: Gray }}
                                    placeholderTextColor={white}
                                    placeholder="Campaign Name Here"
                                    onChangeText={(value) => OnChnageValues({ name: "name", value })}
                                    value={FormData.name != undefined ? FormData.name : ""}
                                />
                            </View>
                        </View>
                    </RoundContainer>
                    {FormData?.objective?.id==="WEBSITE" && 
                      <RoundContainer 
                      marginTop={1.5} 
                      onContainerPress={_onWebSitePress}
                      error={FormError.website_url}
                      >
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <MaterialIcon name="pencil" size={20} color={white} />
                          <View>
                              <TextView >Website</TextView>
                              <TextInput
                                  ref={webSiteRef}
                                  style={{ width: '100%', color: white }}
                                  placeholderTextColor={white}
                                  placeholder="Enter Your campaign's name"
                                  onChangeText={(value) => OnChnageValues({ name: "website_url", value })}
                                  value={FormData.website_url != undefined ? FormData.website_url : ""}
                              />
                          </View>
                      </View>
                  </RoundContainer>
                    }
                  
                    <RoundContainer
                    ph={0}
                   pv={0}
                    marginTop={1.5}
                    error={FormError.media}
                    onContainerPress={_launchGallery}>
                        <ImageBackground
                        imageStyle={{resizeMode:'stretch',borderRadius:50,opacity:0.5}}
                      source={FormData.media?.path && {uri:`${FormData.media?.path}`}}
                            style={{ justifyContent: 'center', alignItems: 'center', height: hp(37) }}>
                            <View style={{ borderRadius: 50, borderWidth: 3, padding: 10, borderColor: SecoundaryColor }}>
                                <MaterialIcon name="camera" size={40} color={SecoundaryColor} />
                            </View>
                            <View style={{ marginTop: hp(1) }}>
                                {FormData.media?.path!=undefined ?
                                <TextView textViewColor={SecoundaryColor} fontBold>Edit Media</TextView>
                                :
                                <TextView textViewColor={SecoundaryColor} fontBold>Add Media</TextView>
                            }
                                
                            </View>
                        </ImageBackground>
                    </RoundContainer>
                </View>
                <AnimationPress onAnimationPress={FinalSubmit}>
                <View style={{
                    height: hp(6),
                    width: wp(35),
                    backgroundColor: SecoundaryColor,
                    marginTop: hp(1),
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 50,
                    flexDirection: 'row'
                }}>

                    <View>
                        <TextView fontBold>Next</TextView>
                    </View>
                    <View>
                        <BackIcon name="arrow-right" size={15} color={white} />
                    </View>
                </View>
                </AnimationPress>
            </View>
        </ScrollView>
    )
}

export default ComposeForm;

const styles = StyleSheet.create({})