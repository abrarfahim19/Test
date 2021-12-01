import React, {useState} from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import AppPicker from "../components/AppPicker";
import AppText from '../components/AppText';
import AppButton from "../components/AppButton";

import Screen from "../components/Screen"

  const routes = [{label: "Science Lab - Rampura - Dhour", value: [
                    {label: "Signboard", value:0},
                    {label: "Zatrabari", value:5},
                    {label: "Sayedabad", value:6},
                    {label: "Maniknagar", value:7.4},
                    {label: "Basabo", value:9.4},
                    {label: "Malibagh", value:11.1},
                    {label: "Rampura", value:13.5},
                    {label: "Badda", value:15.3},
                    {label: "Notun Bazar", value:17.4},
                    {label: "Kuril Bisshworoad", value:20},
                    {label: "Khilkhet", value:21},
                    {label: "Airport", value:23.8},
                    {label: "Abdullahpur", value:27.5},
                    {label: "Kamarpara", value:29.7},
                    {label: "Dhour", value:33},
                    ]},
                    {label: "Science Lab - Rampura - Dhour", value: [
                        {label: "Signboard", value:0},
                        {label: "Zatrabari", value:5},
                        {label: "Sayedabad", value:6},
                        {label: "Maniknagar", value:7.4},
                        {label: "Basabo", value:9.4},
                        {label: "Malibagh", value:11.1},
                        {label: "Rampura", value:13.5},
                        {label: "Badda", value:15.3},
                        {label: "Notun Bazar", value:17.4},
                        {label: "Kuril Bisshworoad", value:20},
                        {label: "Khilkhet", value:21},
                        {label: "Airport", value:23.8},
                        {label: "Abdullahpur", value:27.5},
                        {label: "Kamarpara", value:29.7},
                        {label: "Dhour", value:33},
                        ]}
  
];


function WelcomeScreen(props) {
    const [route, setRoute] = useState(routes[0]);
  const [place1, setPlace1] = useState(routes[0].value[0]);
  const [place2, setPlace2] = useState(routes[0].value[0]);

  const [diff, setDiff] = useState(0)
  let r = Math.ceil(Math.abs(diff*2.15));
  if (r<10){
      r = 10;
  }

    return (
        <ImageBackground blurRadius={5} style={styles.background} source={require('../assets/background.jpg')}>
        <Screen>
            <View style={{padding:10, alignItems:'center'}}>
                <AppPicker
                    selectedItem={route}
                    onSelectItem={(item) => setRoute(item)}
                    items={routes}
                    icon="road"
                    placeholder="Routes"
                />
                <AppPicker
                    selectedItem={place1}
                    onSelectItem={(item) => setPlace1(item)}
                    items={route.value}
                    icon="bus"
                    placeholder="From"
                />
                <AppPicker
                    selectedItem={place2}
                    onSelectItem={(item) => setPlace2(item)}
                    items={route.value}
                    icon="bus"
                    placeholder="To"
                />

                <AppButton title={'GO'} onPress={ () => {
                    const dif = place1.value-place2.value;
                    return setDiff(dif)
                } } />

                <AppText style={{color:'white',}} >{place1.label} থেকে {place2.label} ভাড়া {r} টাকা</AppText>
            </View>
        </Screen>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        height: '100%',
        width: '100%',
    },
    
})
export default WelcomeScreen;