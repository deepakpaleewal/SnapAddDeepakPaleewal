import { request } from "@rpc/RPCHelper";
import { URLs } from "@networking/Urls";

import {
    DETAIL_AD_LOADING,
    DETAIL_AD_SUCCESS,
    DETAIL_AD_ERROR,
    COMPOSE_AD_LOADING,
    COMPOSE_AD_SUCCESS,
    COMPOSE_AD_ERROR
} from '@redux/Types';
import axios from "axios";

import { GET, GetBaseURL, POST, PUT } from "@networking/Urls";

export function SaveDetails(callBack, payload) {
    //debugger;
    return function (dispatch) {
        dispatch({ type: DETAIL_AD_LOADING });
        request(URLs.CAMPAIGN, payload)
            .then(async (response) => {
                console.log("DETAIL_AD_SUCCESSDETAIL_AD_SUCCESS", response);
                if (response.statusCode === 200) {
                    const {success,message}=response.response;
                    if(success){
                        dispatch({ type: DETAIL_AD_SUCCESS, data: response.data });
                        callBack(true)
                    }else{
                        dispatch({ type: DETAIL_AD_ERROR,data:{error:message} });
                        callBack(false)
                    }
                } else {
                    dispatch({ type: DETAIL_AD_ERROR });
                    callBack(false)
                }
            })
            .catch((err) => {
                dispatch({ type: DETAIL_AD_ERROR, data: { error: "Something went wrong!" } });
                callBack(false)
            });
    }
}

export function SaveCompose(callBack, payload) {
    let reqData=new FormData();
    reqData.append("name",payload.name);
    reqData.append("website_url",payload.website_url);
    reqData.append("media",{
        uri:payload.path,
        name:'image.JPG',
        fileName:'image',
        type:'image/jpg'
    })
    //debugger;
    console.log("api call SaveCompose")
    return function (dispatch) {
        dispatch({ type: COMPOSE_AD_LOADING });
        axios({
            method:POST,
            url:GetBaseURL()+'creative',
            data:reqData
        }).then(function(response){
            console.log("response.data",response.data);
            dispatch({ type: COMPOSE_AD_SUCCESS, data: response.data.data });
            callBack(true,response.data.data)
        }).catch((error)=>{
            console.log(error);
            dispatch({ type: COMPOSE_AD_ERROR, data: { error: "Something went wrong!" } });
            callBack(false);
        })
    }
    
}


// export function SaveCompose(callBack, payload) {
//     let reqData=new FormData();
//     reqData.append("name",payload.name);
//     reqData.append("website_url",payload.website_url);
//     reqData.append("media",{
//         uri:payload.path,
//         name:'image.JPG',
//         fileName:'image',
//         type:'image/jpg'
//     })
//     //debugger;
//     return function (dispatch) {
//         dispatch({ type: COMPOSE_AD_LOADING });
//         request(URLs.CAMPAIGN, reqData)
//             .then(async (response) => {
//                 console.log("COMPOSE_AD_LOADINGCOMPOSE_AD_LOADING", response);
//                 if (response.statusCode === 200) {
//                     const {success,message} =response.response;
//                     if(success){
//                         dispatch({ type: COMPOSE_AD_SUCCESS, data: response.data });
//                         callBack(true)
//                     }else{
//                         dispatch({ type: COMPOSE_AD_ERROR, data: { error: "Something went wrong!" } });
//                         callBack(false)
//                     }
                  
//                 } else {
//                     dispatch({ type: COMPOSE_AD_ERROR });
//                     callBack(false)
//                 }
//             })
//             .catch((err) => {
//                 dispatch({ type: COMPOSE_AD_ERROR, data: { error: "Something went wrong!" } });
//                 callBack(false)
//             });
//     }
    
// }