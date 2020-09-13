import React from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';

const GoInfo = () => {
    return (
        <View style={{paddingHorizontal: 16, marginBottom: 16}}>
            <View style={{borderBottomWidth: 1, borderBottomColor: '#D1D1D1'}}>
              <View style={{height: 20, width: 60}}>
                <Image
                  source={require('../../../assets/logo/gojek-black.png')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'contain',
                    flex: 1,
                  }}
                />
              </View>
              <Text style={{marginVertical: 10, fontSize: 17, fontWeight: 'bold', color: '#1C1C1C', marginBottom: 12, }}>
                Complete Your Profile
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image source={require('../../../assets/dummys/connect-fb.png')} />
                </View>
                <View style={{marginLeft: 16}}>
                  <Text style={{fontSize: 15, fontWeight: 'bold', color: '#4A4A4A' }}>
                    Connect With facebook
                  </Text>
                  <Text style={{ fontSize: 15, fontWeight: '400', color: '#7A7A7A', width: '75%' }}>
                    Log In faster without verification code
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  backgroundColor: '#0BD819',
                  borderColor: '#0BD819',
                  borderRadius: 5,
                  alignSelf: 'flex-end',
                  paddingHorizontal: 12,
                  paddingVertical: 11,
                  marginBottom: 16,
                }}>
                <Text
                  style={{ color: 'white', fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>
                  CONNECT
                </Text>
              </TouchableOpacity>
            </View>
          </View>
    )
}

export default GoInfo;