import { StyleSheet, Text, View, ActivityIndicator, Alert, SafeAreaView } from 'react-native'
import React, { useState } from 'react';
import AddCreationHeader from '@addcreationHeader/AddCreationHeader';
import { PrimaryColor, SecoundaryColor, white, InputColor } from '@themes/Themes';
import DetailsForm from '@campaignCreation/DetailsForm';
import ComposeForm from '@campaignCreation/ComposeForm';
import { useSelector, useDispatch } from 'react-redux';
import { SaveDetails,SaveCompose } from '@campaignCreation/CampaignCreationAction';


const validURL = (str) => {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}




const CampaignCreation = ({navigation}) => {
    const dispatch = useDispatch();
    const { isDetailsSubmitLoading, detailsResponseData, detailsResponseError, isComposeLoading, isComposeResponseData, isComposeResponseError } = useSelector((state) => state.CampaignCreationReducer);
    const [isDetailsVisible, setIsDetailsVisible] = useState(true);
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    const _onChnageFields = ({ name, value }) => {
        // console.log(name)
        // console.log(value)
        setFormData({ ...formData, [name]: value });
        if (value !== "") {
            if (name == "name") {
                if (value.length < 3) {
                    setErrors((prev) => {
                        return { ...prev, [name]: "Minimum 3 Characters" };
                    });
                } else {
                    setErrors((prev) => {
                        return { ...prev, [name]: null };
                    });
                }
            }
            else if(name=="website_url"){
                if (!validURL(value)) {
                    setErrors((prev) => {
                        return { ...prev, [name]: "Minimum 3 Characters" };
                    });
                } else {
                    setErrors((prev) => {
                        return { ...prev, [name]: null };
                    });
                }
            }
        } else {
            setErrors((prev) => {
                return { ...prev, [name]: "This filed is required!" };
            });
        }
    }

    const _proceedToCompose = () => {
        let isValid = true;
        if (!formData.name) {
            isValid = false;
            setErrors((prev) => {
                return { ...prev, name: "required" }
            })
        }
        if (!formData.objective) {
            isValid = false;
            setErrors((prev) => {
                return { ...prev, objective: "required" }
            })
        }
        if (isValid) {
            let reqObj = {};
            reqObj.name = formData.name;
            reqObj.objective = formData.objective.id;
            dispatch(SaveDetails(_SaveDeatilsCallBack, reqObj));

        }
    }

    const _SaveDeatilsCallBack = (status) => {
        console.log(status);
        if (status) {
            setIsDetailsVisible(!isDetailsVisible);
        }
    }

    const _onSubmitDetailsForm = async() => {
        console.log("_onSubmitDetailsForm");
        let isValid = true;
        if (formData.website_url=="WEBSITE" && !formData.website_url) {
            isValid = false;
            setErrors((prev) => {
                return { ...prev, website_url: "required" }
            })
        }
        if (!formData.media) {
            isValid = false;
            setErrors((prev) => {
                return { ...prev, media: "required" }
            })
        }
        if(isValid){
            let reqObj={};
            reqObj.name=formData.name;
            reqObj.website_url=formData.website_url;
            reqObj.media=formData.media.path;
            
            dispatch(SaveCompose(_SaveComposeCallBack,reqObj))
        }
    }
    const _SaveComposeCallBack=(status,data)=>{
        console.log("ImageResponse",data)
        if(status){
            Alert.alert("Save Successfully!");
            setErrors({});
            setFormData({});
            setIsDetailsVisible(true);
            navigation.navigate('CampaignDetails',{data});
        }
    }

    return (
        <SafeAreaView style={{flex:1,backgroundColor:white}}>
        <View style={styles.mainContainer}>
            <AddCreationHeader
                DetailsState={isDetailsVisible}
                ChnageState={_proceedToCompose}
            />
            {isDetailsVisible ?
                <DetailsForm
                    ProceedToCompose={_proceedToCompose}
                    FormData={formData}
                    FormError={errors}
                    OnChnageValues={_onChnageFields}
                    DetailsLoading={isDetailsSubmitLoading}
                />
                :
                <ComposeForm
                    FormData={formData}
                    FormError={errors}
                    OnChnageValues={_onChnageFields}
                    FinalSubmit={_onSubmitDetailsForm}
                />}
        </View>
        </SafeAreaView>
    )
}

export default CampaignCreation;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: PrimaryColor,
    }
})