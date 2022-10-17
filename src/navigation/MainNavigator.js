import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CampaignCreation from '@campaignCreation/CampaignCreation';
import CampaignDetails from '@campaignDetails/CampaignDetails';
const MainStack = createNativeStackNavigator();

const ManinNavigator = React.forwardRef(() => {
    return (
        <NavigationContainer>
            <MainStack.Navigator 
           // initialRouteName='CampaignDetails'
            >
                <MainStack.Screen
                    name={"CampaignCreation"}
                    component={CampaignCreation}
                    options={{ headerShown: false }}
                />
                <MainStack.Screen
                    name={"CampaignDetails"}
                    component={CampaignDetails}
                    options={{ headerShown: false }}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    )
});

export default ManinNavigator;
