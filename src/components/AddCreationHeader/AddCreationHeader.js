import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import TextView from '@textView/TextView';
import {
    screenWidth,
    screenHeight,
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from '@utils/ResponsiveScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import BackIcon from 'react-native-vector-icons/SimpleLineIcons';
import { PrimaryColor, SecoundaryColor, white, Gray } from '@themes/Themes';
import AnimationPress from '@animationPress/AnimationPress'

const AddCreationHeader = ({ DetailsState, ChnageState }) => {
    return (
        <View style={styles.mainHeader}>
            <View style={styles.subMain}>
                <AnimationPress onAnimationPress={() => { ChnageState() }}>
                    <View style={{ marginLeft: 20 }}>
                        <BackIcon name="arrow-left" size={25} color={PrimaryColor} />
                    </View>
                </AnimationPress>
                <View style={{ alignItems: 'center' }}>
                    <MaterialIcon name="snapchat" size={50} color="black" />
                    {DetailsState ?
                        <View>
                            <TextView fontBold textViewColor={PrimaryColor}>SNAP AD</TextView>
                        </View>
                        :
                        <View>
                            <TextView fontBold textViewColor={PrimaryColor}>COMPOSE AD</TextView>
                        </View>
                    }

                </View>
                <View style={styles.m15}>

                    <View style={styles.circleJoin} />

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={DetailsState ? styles.activeScal : styles.inActiveScale}>
                            <View style={DetailsState ? styles.active : styles.inActive}>
                                <TextView textViewColor={DetailsState ? white : Gray} fontBold>1</TextView>
                            </View>
                            <TextView fontBold={DetailsState} textViewColor={DetailsState ? PrimaryColor : Gray}>Details</TextView>
                        </View>

                        <View style={DetailsState ? styles.inActiveScale : styles.activeScal}>
                            <View style={DetailsState ? styles.inActive : styles.active}>
                                <TextView textViewColor={DetailsState ? Gray : white} fontBold>2</TextView>
                            </View>

                            <TextView textViewColor={DetailsState ? Gray : PrimaryColor} fontBold={!DetailsState}>Compose</TextView>
                        </View>
                    </View>
                    {/* <TextView large textViewColor={PrimaryColor}>Details</TextView> */}
                </View>
            </View>

        </View>
    )
}

export default AddCreationHeader;

const styles = StyleSheet.create({
    mainHeader: {
        height: hp(15),
        backgroundColor: white,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        flexDirection: 'row'
    },
    subMain: { flex: 1, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' },
    active: {
        height: 40,
        width: 40,
        backgroundColor: PrimaryColor,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,

    },
    inActive: {
        height: 40,
        width: 40,
        borderColor: Gray,
        borderWidth: 2,
        backgroundColor: white,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
    },
    activeScal: {
        alignItems: 'center',
        transform: [
            { scale: 1.1 }
        ]
    },
    inActiveScale: {
        alignItems: 'center',
        transform: [
            { scale: 0.7 }
        ]
    },
    circleJoin: {
        position: 'absolute',
        marginLeft: 30,
        marginTop: hp(15) / 2 - 10,
        height: 2,
        width: 50,
        backgroundColor: Gray
    },
    m15: { marginRight: 15 }
})