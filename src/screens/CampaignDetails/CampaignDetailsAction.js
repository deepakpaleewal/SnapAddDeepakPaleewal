import { request } from "@rpc/RPCHelper";
import { URLs } from "@networking/Urls";

import {
    PERFORMANCE_LOADING,
    PERFORMANCE_SUCCESS,
    PERFORMANCE_ERROR,
} from '@redux/Types';


export function GetAddDetails(callBack, payload) {
    //debugger;
    return function (dispatch) {
        dispatch({ type: PERFORMANCE_LOADING });
        request(URLs.CAMPAIGNDETAIL, payload)
            .then(async (response) => {
                console.log("PERFORMANCE_SUCCESSPERFORMANCE_SUCCESS", response);
                if (response.statusCode === 200) {
                    const {success,message,data}=response.response;
                    if(success){
                        dispatch({ type: PERFORMANCE_SUCCESS, data: data });
                        callBack(true)
                    }else{
                        dispatch({ type: PERFORMANCE_ERROR,data:{error:message} });
                        callBack(false)
                    }
                } else {
                    dispatch({ type: PERFORMANCE_ERROR });
                    callBack(false)
                }
            })
            .catch((err) => {
                dispatch({ type: PERFORMANCE_ERROR, data: { error: "Something went wrong!" } });
                callBack(false)
            });
    }
}


