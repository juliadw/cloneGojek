import React from 'react';
import {View, Text, Image} from 'react-native';

const GopayFeaturs = (props) => {
    return (
      <View style={{flex: 1,backgroundColor: '#2B5EB7',alignItems: 'center',}}>
        <Image source={props.imageGopayFeaturs} />
        <Text style={{marginTop: 15, fontWeight: 'bold', color: 'white', fontSize: 13}}>{props.title}</Text>
      </View>
    )
}
export default GopayFeaturs;