/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          {/* Search Bar */}
          <View
            style={{
              marginHorizontal: 17,
              flexDirection: 'row',
              paddingTop: 15,
            }}>
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
              <Image
                source={require('./component/Icon/search.png')}
                style={{position: 'absolute', top: 12, left: 15}}
              />
            </View>
            <View
              style={{
                width: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={require('./component/Icon/promo.png')} />
            </View>
          </View>
          {/* Gopay */}
          <View style={{marginHorizontal: 17, marginTop: 8}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#2252A7',
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                padding: 14,
              }}>
              <Image source={require('./component/Icon/gopay.png')} />
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
                {' '}
                Rp 50. 000
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 20,
                paddingBottom: 14,
                backgroundColor: '#2B5EB7',
                borderBottomRightRadius: 5,
                borderBottomLeftRadius: 5,
              }}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#2B5EB7',
                  alignItems: 'center',
                }}>
                <Image source={require('./component/Icon/pay.png')} />
                <Text
                  style={{
                    marginTop: 15,
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 13,
                  }}>
                  Pay
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '2B5EB7',
                  alignItems: 'center',
                }}>
                <Image source={require('./component/Icon/nearby.png')} />
                <Text
                  style={{
                    marginTop: 15,
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 13,
                  }}>
                  Nearby
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '2B5EB7',
                  alignItems: 'center',
                }}>
                <Image source={require('./component/Icon/top-up.png')} />
                <Text
                  style={{
                    marginTop: 15,
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 13,
                  }}>
                  Top Up
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '2B5EB7',
                  alignItems: 'center',
                }}>
                <Image source={require('./component/Icon/more.png')} />
                <Text
                  style={{
                    marginTop: 15,
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 13,
                  }}>
                  More
                </Text>
              </View>
            </View>
          </View>
          {/* Featurs */}
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginHorizontal: 17,
              marginTop: 18,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: 18,
              }}>
              <View style={{alignItems: 'center'}}>
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
                  <Image source={require('./component/Icon/go-ride.png')} />
                </View>
                <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 6}}>
                  GO-RIDE
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
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
                  <Image source={require('./component/Icon/go-car.png')} />
                </View>
                <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 6}}>
                  GO-CAR
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
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
                  <Image source={require('./component/Icon/go-food.png')} />
                </View>
                <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 6}}>
                  GO-FOOD
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
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
                  <Image source={require('./component/Icon/go-point.png')} />
                </View>
                <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 6}}>
                  GO-POINTS
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <View style={{alignItems: 'center'}}>
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
                  <Image source={require('./component/Icon/go-bills.png')} />
                </View>
                <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 6}}>
                  GO-BILLS
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
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
                  <Image source={require('./component/Icon/go-shop.png')} />
                </View>
                <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 6}}>
                  GO-SHOP
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
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
                  <Image source={require('./component/Icon/go-mart.png')} />
                </View>
                <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 6}}>
                  GO-MART
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
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
                  <Image source={require('./component/Icon/go-more.png')} />
                </View>
                <Text style={{fontSize: 12, fontWeight: 'bold', marginTop: 6}}>
                  MORE
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{height: 17, backgroundColor: '#F2F2F5', marginTop: 20}}
          />
          {/* News Section */}
          <View
            style={{paddingTop: 16, paddingHorizontal: 16, paddingBottom: 16}}>
            <View style={{position: 'relative'}}>
              <Image
                source={require('./component/News/news1.png')}
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
                  source={require('./component/Icon/gojek_white.png')}
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

          {/* Internal Information Section */}
          <View style={{paddingHorizontal: 16, marginBottom: 16}}>
            <View style={{borderBottomWidth: 1, borderBottomColor: '#D1D1D1'}}>
              <View
                style={{
                  height: 20,
                  width: 60,
                }}>
                <Image
                  source={require('./component/Icon/gojek-black.png')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'contain',
                    flex: 1,
                  }}
                />
              </View>
              <Text
                style={{
                  marginVertical: 10,
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#1C1C1C',
                  marginBottom: 12,
                }}>
                Complete Your Profile
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image source={require('./component/News/connect-fb.png')} />
                </View>
                <View style={{marginLeft: 16}}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: '#4A4A4A',
                    }}>
                    Connect With facebook
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '400',
                      color: '#7A7A7A',
                      width: '75%',
                    }}>
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
                  style={{
                    color: 'white',
                    fontSize: 15,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  CONNECT
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Gofood Banner Section */}
          <View
            style={{
              paddingHorizontal: 16,
              paddingBottom: 16,
            }}>
            <View
              style={{
                borderBottomColor: '#D1D1D1',
                borderBottomWidth: 1,
                paddingBottom: 16,
              }}>
              <View style={{position: 'relative'}}>
                <Image
                  source={require('./component/News/banner-foods.png')}
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
                    opacity: 0.2,
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
                    source={require('./component/Icon/go-food-white.png')}
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
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: 'white',
                        marginBottom: 8,
                      }}>
                      Free GO-FOOD Vouchers
                    </Text>
                    <Text
                      style={{fontSize: 12, fontWeight: '400', color: 'white'}}>
                      Quick, before they run out!{' '}
                    </Text>
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
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: 'bold',
                          color: 'white',
                        }}>
                        GET VOUCHER
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* Nearby Go-Food Section(Scroll Horizontal view) */}
          <View style={{marginBottom: 20}}>
            <View style={{paddingHorizontal: 16}}>
              <View
                style={{
                  height: 20,
                  width: 60,
                }}>
                <Image
                  source={require('./component/Icon/gojek-black.png')}
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
                    source={require('./component/News/gf-dkf.png')}
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
                    source={require('./component/News/gf-sangpisang.png')}
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
                    source={require('./component/News/gf-nonajudes.png')}
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
                    source={require('./component/News/gf-padangpetir.png')}
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
        </ScrollView>
        {/* Bottom Navigation */}
        <View
          style={{flexDirection: 'row', height: 54, backgroundColor: 'yellow'}}>
          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{height: 26, width: 26, backgroundColor: 'white'}}>
              <Image source={require('./component/Icon/home-active.png')} />
            </View>
            <Text style={{marginTop: 4, color: '#43AB4A', fontSize: 10}}>
              Home
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{height: 26, width: 26, backgroundColor: 'white'}}>
              <Image source={require('./component/Icon/order.png')} />
            </View>
            <Text style={{marginTop: 4, color: '#545454', fontSize: 10}}>
              Order
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{height: 26, width: 26, backgroundColor: 'white'}}>
              <Image source={require('./component/Icon/help.png')} />
            </View>
            <Text style={{marginTop: 4, color: '#545454', fontSize: 10}}>
              Help
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: 26,
                width: 26,
                backgroundColor: 'white',
                justifyContent: 'center',
              }}>
              <Image source={require('./component/Icon/inbox.png')} />
            </View>
            <Text style={{marginTop: 4, color: '#545454', fontSize: 10}}>
              Inbox
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: 26,
                width: 26,
                backgroundColor: 'white',
                alignItems: 'center',
              }}>
              <Image source={require('./component/Icon/account.png')} />
            </View>
            <Text style={{marginTop: 4, color: '#545454', fontSize: 10}}>
              Account
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
