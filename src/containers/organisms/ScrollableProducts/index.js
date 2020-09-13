import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

class ScrollableProducts extends Component  {
    render () {
        return (
            <View style={{marginBottom: 20}}>
            <View style={{paddingHorizontal: 16}}>
              <View
                style={{
                  height: 20,
                  width: 60,
                }}>
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
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 12,
                }}>
                <Text
                  style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C'}}>
                  Nearby Restaurant
                </Text>
                <Text
                  style={{fontSize: 17, fontWeight: 'bold', color: '#61A756'}}>
                  See All
                </Text>
              </View>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{flexDirection: 'row'}}>
              <View style={{alignItems: 'flex-start', paddingHorizontal: 16}}>
                <View
                  style={{
                    height: 150,
                    width: 150,
                  }}>
                  <Image
                    source={require('../../../assets/dummys/gf-dkf.png')}
                    style={{
                      width: undefined,
                      height: undefined,
                      resizeMode: 'cover',
                      flex: 1,
                      borderRadius: 8,
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#1C1C1C',
                    marginTop: 12,
                  }}>
                  DKF Indonesia
                </Text>
              </View>
              <View style={{paddingHorizontal: 16, alignItems: 'flex-start'}}>
                <View
                  style={{
                    height: 150,
                    width: 150,
                  }}>
                  <Image
                    source={require('../../../assets/dummys/gf-sangpisang.png')}
                    style={{
                      width: undefined,
                      height: undefined,
                      resizeMode: 'cover',
                      flex: 1,
                      borderRadius: 8,
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#1C1C1C',
                    marginTop: 12,
                  }}>
                  Sang Pisang
                </Text>
              </View>
              <View style={{paddingHorizontal: 16, alignItems: 'flex-start'}}>
                <View
                  style={{
                    height: 150,
                    width: 150,
                  }}>
                  <Image
                    source={require('../../../assets/dummys/gf-nonajudes.png')}
                    style={{
                      width: undefined,
                      height: undefined,
                      resizeMode: 'cover',
                      flex: 1,
                      borderRadius: 8,
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#1C1C1C',
                    marginTop: 12,
                  }}>
                  Nona Judes
                </Text>
              </View>
              <View style={{paddingHorizontal: 16, alignItems: 'flex-start'}}>
                <View
                  style={{
                    height: 150,
                    width: 150,
                  }}>
                  <Image
                    source={require('../../../assets/dummys/gf-padangpetir.png')}
                    style={{
                      width: undefined,
                      height: undefined,
                      resizeMode: 'cover',
                      flex: 1,
                      borderRadius: 8,
                    }}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#1C1C1C',
                    marginTop: 12,
                  }}>
                  Padang Petir
                </Text>
              </View>
            </ScrollView>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#D1D1D1',
                marginHorizontal: 16,
                marginTop: 14,
              }}
            />
          </View>
        ) 
    }
}

export default ScrollableProducts;