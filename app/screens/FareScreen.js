import React from 'react';
import { View } from 'react-native';
import AppText from '../components/AppText';

function FareScreen({place1,place2,r}) {
    return (
        <View>
            <AppText style={{color:'white', alignItems:'center',justifyContent:'centre'}} >{place1.label} থেকে {place2.label} ভাড়া {r} টাকা</AppText>
        </View>
    );
}

export default FareScreen;