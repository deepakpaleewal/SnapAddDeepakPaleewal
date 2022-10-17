import {
    DETAIL_AD_LOADING,
    DETAIL_AD_SUCCESS,
    DETAIL_AD_ERROR,
    COMPOSE_AD_LOADING,
    COMPOSE_AD_SUCCESS,
    COMPOSE_AD_ERROR
} from '@redux/Types';


const initialState = {
    isDetailsSubmitLoading: false,
    detailsResponseData: {},
    detailsResponseError: undefined,
    isComposeLoading: false,
    isComposeResponseData: {},
    isComposeResponseError: undefined
}


export default function CampaignCreationReducer(state = initialState, action) {
    switch (action.type) {
        case DETAIL_AD_LOADING:
            return {
                ...state,
                isDetailsSubmitLoading: true,
                detailsResponseData: {},
                detailsResponseError: undefined
            }
        case DETAIL_AD_SUCCESS:
            return {
                ...state,
                isDetailsSubmitLoading: false,
                detailsResponseData: action.data,
                detailsResponseError: undefined
            }
        case DETAIL_AD_ERROR:
            return {
                ...state,
                isDetailsSubmitLoading: false,
                detailsResponseData: {},
                detailsResponseError: action.data

            }
        case COMPOSE_AD_LOADING:
            return {
                ...state,
                isComposeLoading: true,
                isComposeResponseData: {},
                isComposeResponseError: undefined

            }
        case COMPOSE_AD_SUCCESS:
            return {
                ...state,
                isComposeLoading: false,
                isComposeResponseData: action.data,
                isComposeResponseError: undefined

            }
        case COMPOSE_AD_ERROR:
            return {
                ...state,
                isComposeLoading: false,
                isComposeResponseData: {},
                isComposeResponseError: action.data
            }

        default:
            return state;
  }
}
