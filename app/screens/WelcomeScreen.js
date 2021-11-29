import React, {useState} from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import AppPicker from "../components/AppPicker";
import AppText from '../components/AppText';
import AppButton from "../components/AppButton";

  const routes = [{label: "Science Lab - Banani", value: [
    { label: "Science Lab", value: 1 },
    { label: "Mogbazar", value: 2 },
    { label: "Dhanmondi", value: 3 }]},
  
    {label:'Baridhara - Ghulshan', value:[
      {label:'Baridhara', value: 0},
      {label:'Gopalgonj', value: 12.5},
      {label:'Buriganga', value: 18},
    ]}
  
  
  ];


function WelcomeScreen(props) {
    const [route, setRoute] = useState(routes[0]);
  const [place1, setPlace1] = useState(routes[0].value[0]);
  const [place2, setPlace2] = useState(routes[0].value[1]);

  const [diff, setDiff] = useState()
  let r = Math.abs(Math.ceil(diff*2.5));
  if (r<10){
      r = 10;
  }

    return (
        <ImageBackground style={styles.background} source={require('../assets/background.jpg')}>
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

            <AppText style={{color:'white', alignItems:'center',justifyContent:'centre'}} >{place1.label} থেকে {place2.label} ভাড়া {r} টাকা</AppText>
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