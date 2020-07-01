'use strict';
import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Styles from '../style/styles';
import UserCard from './UserCard.js';
import {getUser} from '../request/userApi';

export default class CardStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentWillMount() {
    // Load two user make good performance
    for (let i = 0; i < 2; i++) {
      this.handleAdd();
    }
  }

  async handleAdd() {
    getUser(result => {
      this.setState({
        users: [result.results[0], ...this.state.users],
      });
    });
  }

  handleRemove = index => {
    let start = this.state.users.slice(0, index);
    let end = this.state.users.slice(index + 1);
    this.setState({
      users: start.concat(end),
    });
    this.handleAdd();
  };

  render() {
    return (
      <FlatList
        style={Styles.cardContainer}
        contentContainerStyle={Styles.cardStack}
        data={this.state.users}
        renderItem={({item, index}) => (
          <UserCard item={item} index={index} onSwipe={this.handleRemove} />
        )}
        keyExtractor={item => item.login.username}
        scrollEnabled={false}
      />
    );
  }
}
