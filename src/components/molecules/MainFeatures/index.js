import React from 'react';
import {View, Text, Image} from 'react-native';

const MainFeatures = (props) => {
    return (
        <View style={{alignItems: 'center', width: '25%', marginBottom: 18}}>
            <View
            style={{
                width: 58,
                height: 58,
                borderWidth: 1,
                borderColor: '#EFEFEF',
                borderRadius: 18,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Image source={props.imgMainFeatures} />
            </View>
            <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 6}}>{props.title}</Text>
        </View>
    )
}
export default MainFeatures;