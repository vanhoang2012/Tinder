'use strict';
import React, {Component} from 'react';
import {
  PanResponder,
  Animated,
  View,
  Image,
  Text,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import {connect} from 'react-redux';
import Styles from '../style/styles';
import {STORAGE_KEY} from '../configs/constant';
import {addToFavourite} from '../redux/actions/DataActions';

const person = require('../assets/images/person.png');
const personActive = require('../assets/images/person_active.png');
const gender = require('../assets/images/gender.png');
const genderActive = require('../assets/images/gender_active.png');
const address = require('../assets/images/address.png');
const addressActive = require('../assets/images/address_active.png');
const phone = require('../assets/images/phone.png');
const phoneActive = require('../assets/images/phone_active.png');
const email = require('../assets/images/email.png');
const emailActive = require('../assets/images/email_active.png');

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY(),
      tab: 0,
    };
  }
  saveData = async user => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, user);
    } catch (e) {}
  };
  componentWillMount() {
    this.panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setValue({x: 0, y: 0});
      },
      onPanResponderMove: Animated.event([
        null,
        {dx: this.state.pan.x, dy: this.state.pan.y},
      ]),
      onPanResponderRelease: (e, {vx, vy}) => {
        if (this.state.pan.x._value < -150) {
          console.log('Hoang log left');
          this.props.onSwipe(this.props.index);
        } else if (this.state.pan.x._value > 150) {
          this.props.onSwipe(this.props.index);
          console.log('Hoang log right');
          this.props.addToFavourite(this.props.item, () => {});
        } else {
          Animated.spring(this.state.pan, {
            toValue: 0,
          }).start();
        }
      },
    });
  }

  componentWillUnmount() {
    this.state.pan.x.removeAllListeners();
    this.state.pan.y.removeAllListeners();
  }

  getMainCardStyle() {
    let {pan} = this.state;
    return [
      Styles.mainCard,
      {position: 'absolute'},
      {left: -175},
      {top: -250},
      {
        transform: [
          {translateX: pan.x},
          {translateY: pan.y},
          {
            rotate: pan.x.interpolate({
              inputRange: [-150, 0, 150],
              outputRange: ['-20deg', '0deg', '20deg'],
            }),
          },
        ],
      },
      {
        opacity: pan.x.interpolate({
          inputRange: [-150, 0, 150],
          outputRange: [0.5, 1, 0.5],
        }),
      },
    ];
  }
  getInfoTitle() {
    switch (this.state.tab) {
      case 0:
        return 'My name is';
      case 1:
        return 'My gender is';
      case 2:
        return 'My address is';
      case 3:
        return 'My phone is';
      default:
        return 'My email is';
    }
  }
  getInfoDetail() {
    let {item} = this.props;
    switch (this.state.tab) {
      case 0:
        return `${item.name.first} ${item.name.last}`;
      case 1:
        return `${item.gender}`;
      case 2:
        return `${item.location.street.number} ${item.location.street.name}, ${
          item.location.city
        } ${item.location.country}`;
      case 3:
        return `${item.phone}`;
      default:
        return `${item.email}`;
    }
  }
  chooseTab = index => {
    this.setState({
      tab: index,
    });
  };
  render() {
    let {picture} = this.props.item;
    return (
      <Animated.View
        style={this.getMainCardStyle()}
        {...this.panResponder.panHandlers}>
        <View style={Styles.card}>
          <View style={Styles.headerCard} />
          <View style={Styles.cardImageContainer}>
            <Image source={{uri: picture.large}} style={Styles.cardImage} />
          </View>
          <View style={Styles.cardText}>
            <Text style={Styles.infoTitle}>{this.getInfoTitle()}</Text>
            <Text style={Styles.cardTextMain} numberOfLines={2}>
              {this.getInfoDetail()}
            </Text>
          </View>
          <View style={Styles.row}>
            <TouchableOpacity
              style={{
                borderTopWidth: this.state.tab === 0 ? 2 : 0,
                borderTopColor: this.state.tab === 0 ? 'blue' : 'black',
              }}
              onPress={() => this.chooseTab(0)}>
              <Image
                source={this.state.tab === 0 ? personActive : person}
                style={Styles.iconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderTopWidth: this.state.tab === 1 ? 2 : 0,
                borderTopColor: this.state.tab === 1 ? 'blue' : 'black',
              }}
              onPress={() => this.chooseTab(1)}>
              <Image
                source={this.state.tab === 1 ? genderActive : gender}
                style={Styles.iconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderTopWidth: this.state.tab === 2 ? 2 : 0,
                borderTopColor: this.state.tab === 2 ? 'blue' : 'black',
              }}
              onPress={() => this.chooseTab(2)}>
              <Image
                source={this.state.tab === 2 ? addressActive : address}
                style={Styles.iconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderTopWidth: this.state.tab === 3 ? 2 : 0,
                borderTopColor: this.state.tab === 3 ? 'blue' : 'black',
              }}
              onPress={() => this.chooseTab(3)}>
              <Image
                source={this.state.tab === 3 ? phoneActive : phone}
                style={Styles.iconStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderTopWidth: this.state.tab === 4 ? 2 : 0,
                borderTopColor: this.state.tab === 4 ? 'blue' : 'black',
              }}
              onPress={() => this.chooseTab(4)}>
              <Image
                source={this.state.tab === 4 ? emailActive : email}
                style={Styles.iconStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    );
  }
}
const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {addToFavourite},
)(UserCard);
