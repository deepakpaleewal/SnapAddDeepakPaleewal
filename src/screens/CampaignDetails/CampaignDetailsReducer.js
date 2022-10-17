import {
    PERFORMANCE_LOADING,
    PERFORMANCE_SUCCESS,
    PERFORMANCE_ERROR,
} from '@redux/Types';


const initialState = {
    isPerLoading: false,
    perData: {},
    perError: undefined,
}


export default function CampaignDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case PERFORMANCE_LOADING:
            return {
                ...state,
                isPerLoading: true,
                perData: {},
                perError: undefined,
            }
        case PERFORMANCE_SUCCESS:
            return {
                ...state,
                isPerLoading: false,
                perData: action.data,
                perError: undefined
            }
        case PERFORMANCE_ERROR:
            return {
                ...state,
                isPerLoading: false,
                perData: {},
                perError: action.data

            }

        default:
            return state;
  }
}
