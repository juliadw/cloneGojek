import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const GoBanner = () => {
    return (
        <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
            <View style={{ borderBottomColor: '#D1D1D1', borderBottomWidth: 1, paddingBottom: 16 }}>
                <View style={{position: 'relative'}}>
                    <Image source={require('../../../assets/dummys/banner-foods.png')} style={{height: 170, width: '100%', borderRadius: 7}}/>
                    <View
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        backgroundColor: 'black',
                        opacity: 0.2,
                        borderRadius: 7,
                    }}
                    />
                    <View style={{ height: 20, width: 60, position: 'absolute', top: 10, left: 16 }}>
                        <Image source={require('../../../assets/icons/go-food-white.png')}
                            style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }}
                        />
                    </View>
                    <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: 16,
                        paddingVertical: 16,
                    }}>
                        <View>
                            <Text
                            style={{fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 8 }}> Free GO-FOOD Vouchers </Text>
                            <Text style={{fontSize: 12, fontWeight: '400', color: 'white'}}> Quick, before they run out!{' '} </Text>
                        </View>
                        <View style={{flex: 1, paddingLeft: 12}}>
                            <TouchableOpacity
                            style={{
                                backgroundColor: '#0BD819',
                                paddingHorizontal: 12,
                                paddingVertical: 11,
                                alignSelf: 'flex-end',
                                borderRadius: 5,
                            }}>
                            <Text style={{ fontSize: 12, fontWeight: 'bold',  color: 'white' }}> GET VOUCHER </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default GoBanner ;