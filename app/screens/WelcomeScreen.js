import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require('../assets/background.jpg')}>
            <View style={styles.fromPortion}/>
            <View style={styles.toPortion}/>
        </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        height: '100%',
        width: '100%',
    },
    fromPortion:{
        backgroundColor:'dodgerblue',
        height:'10%',
        margin:'2%',
    },
    toPortion:{
        backgroundColor:'tomato',
        height:'10%',
        margin:'2%',
    },
})
export default WelcomeScreen;