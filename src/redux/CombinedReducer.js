import { combineReducers } from "redux";
import CampaignCreationReducer from '@campaignCreation/CampaignCreationReducer';
import CampaignDetailsReducer from '@campaignDetails/CampaignDetailsReducer'
const rootReducer = (state, action) => {
    return appReducer(state, action);
  };

  const appReducer = combineReducers({
    CampaignCreationReducer,
    CampaignDetailsReducer
  });
  
  export default rootReducer;