import React, { useState } from "react";

import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";
import AppButton from "./app/components/AppButton";
import AppText from "./app/components/AppText";
import WelcomeScreen from "./app/screens/WelcomeScreen";

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

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  // const [route, setRoute] = useState(routes[0]);
  // const [place1, setPlace1] = useState(routes[0].value[0]);
  // const [place2, setPlace2] = useState(routes[0].value[1]);

  // const [diff, setDiff] = useState()



  return (
    <WelcomeScreen/>

    // <Screen>
    //   <AppPicker
    //     selectedItem={route}
    //     onSelectItem={(item) => setRoute(item)}
    //     items={routes}
    //     icon="road"
    //     placeholder="Routes"
    //   />
    //   <AppPicker
    //     selectedItem={place1}
    //     onSelectItem={(item) => setPlace1(item)}
    //     items={route.value}
    //     icon="bus"
    //     placeholder="From"
    //   />
    //   <AppPicker
    //     selectedItem={place2}
    //     onSelectItem={(item) => setPlace2(item)}
    //     items={route.value}
    //     icon="bus"
    //     placeholder="To"
    //   />

    //   <AppButton title={'GO'} onPress={ () => {
    //     const dif = place1.value-place2.value;
    //     return setDiff(dif)
    //   } } />

    //   <AppText >{place1.label} থেকে {place2.label} ভাড়া {Math.round(diff*2.5)} টাকা</AppText>
    // </Screen>
  );
}