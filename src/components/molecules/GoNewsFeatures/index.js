import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const GoNews = () => {
    return (
        <View
            style={{paddingTop: 16, paddingHorizontal: 16, paddingBottom: 16}}>
            <View style={{position: 'relative'}}>
              <Image
                source={require('../../../assets/dummys/news1.png')}
                style={{height: 170, width: '100%', borderRadius: 7}}
              />
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  backgroundColor: 'black',
                  opacity: 0.3,
                  borderRadius: 7,
                }}
              />
              <View
                style={{
                  height: 20,
                  width: 60,
                  position: 'absolute',
                  top: 10,
                  left: 16,
                }}>
                <Image
                  source={require('../../../assets/logo/gojek_white.png')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'contain',
                    flex: 1,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                paddingTop: 16,
                paddingBottom: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#D1D1D1',
              }}>
              <Text
                style={{fontSize: 18, fontWeight: 'bold', color: '#1C1C1C'}}>
                GO NEWS
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  color: '#7A7A7A',
                  marginTop: 5,
                }}>
                COVID-19 (coronavirus disease 2019) adalah penyakit yang
                disebabkan oleh jenis coronavirus baru yaitu Sars-CoV-2.
              </Text>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  backgroundColor: '#0BD819',
                  borderColor: '#0BD819',
                  borderRadius: 5,
                  marginTop: 12,
                  alignSelf: 'flex-end',
                  paddingHorizontal: 12,
                  paddingVertical: 11,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 15,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  READ
                </Text>
              </TouchableOpacity>
            </View>
          </View>
    )
}

export default GoNews;