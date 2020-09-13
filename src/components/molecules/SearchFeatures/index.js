import React from 'react';
import {View, TextInput, Image} from 'react-native';

const SearchFeatures = () => {
    return (
        <View style={{marginHorizontal: 17, flexDirection: 'row', paddingTop: 15 }}>
            <View style={{position: 'relative', flex: 1}}>
                <TextInput
                    placeholder="What do you want eat? "
                    style={{
                    borderWidth: 1,
                    borderColor: '#e8e8e8',
                    borderRadius: 25,
                    height: 40,
                    fontSize: 13,
                    paddingLeft: 45,
                    paddingRight: 20,
                    backgroundColor: 'white',
                    marginRight: 18,
                    }}
                />
                <Image source={require('../../../assets/icons/search.png')} style={{position: 'absolute', top: 12, left: 15}}/>
            </View>
            <View style={{ width: 35, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../../assets/icons/promo.png')} />
            </View>
        </View>
    )
}

export default SearchFeatures;