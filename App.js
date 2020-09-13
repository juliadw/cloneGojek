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
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import GoBanner from './src/components/molecules/GoBannerFeatures';
import GoInfo from './src/components/molecules/GoInfoFeatures';
import GoNews from './src/components/molecules/GoNewsFeatures';
import GopayFeaturs from './src/components/molecules/GopayFeature';
import MainFeatures from './src/components/molecules/MainFeatures';
import SearchFeatures from './src/components/molecules/SearchFeatures';
import ScrollableProducts from './src/containers/organisms/ScrollableProducts';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          {/* Search Bar */}
          <SearchFeatures />
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
              <Image source={require('./src/assets/icons/gopay.png')} />
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
              <GopayFeaturs title = "Pay" imageGopayFeaturs={require('./src/assets/icons/pay.png')}/>
              <GopayFeaturs title = "Nearby" imageGopayFeaturs={require('./src/assets/icons/nearby.png')}/>
              <GopayFeaturs title = "Top Up" imageGopayFeaturs={require('./src/assets/icons/top-up.png')}/>
              <GopayFeaturs title = "More" imageGopayFeaturs={require('./src/assets/icons/more.png')}/>
            </View>
          </View>
          {/* Featurs */}
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginHorizontal: 18,
              marginTop: 18,
            }}>
              <MainFeatures title = "GO-RIDE" imgMainFeatures = {require('./src/assets/icons//go-ride.png')}/>
              <MainFeatures title = "GO-CAR" imgMainFeatures = {require('./src/assets/icons//go-car.png')}/>
              <MainFeatures title = "GO-FOOD" imgMainFeatures = {require('./src/assets/icons//go-food.png')}/>
              <MainFeatures title = "GO-POINTS" imgMainFeatures = {require('./src/assets/icons//go-point.png')}/>
              <MainFeatures title = "GO-BILLS" imgMainFeatures = {require('./src/assets/icons//go-bills.png')}/>
              <MainFeatures title = "GO-SHOP" imgMainFeatures = {require('./src/assets/icons//go-shop.png')}/>
              <MainFeatures title = "GO-MART" imgMainFeatures = {require('./src/assets/icons//go-mart.png')}/>
              <MainFeatures title = "MORE" imgMainFeatures = {require('./src/assets/icons//more.png')}/>
            </View>
          <View
            style={{height: 17, backgroundColor: '#F2F2F5', marginTop: 20}}
          />
          {/* News Section */}
          <GoNews />

          {/* Internal Information Section */}
            <GoInfo />

          {/* Gofood Banner Section */}
            <GoBanner />

          {/* Nearby Go-Food Section(Scroll Horizontal view) */}
            <ScrollableProducts />
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
              <Image source={require('./src/assets/icons/home-active.png')} />
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
              <Image source={require('./src/assets/icons/order.png')} />
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
              <Image source={require('./src/assets/icons/help.png')} />
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
              <Image source={require('./src/assets/icons/inbox.png')} />
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
              <Image source={require('./src/assets/icons/account.png')} />
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
