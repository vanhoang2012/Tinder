'use strict';
import React, {Component} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import Styles from '../style/styles';
import {connect} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';

class ListFavouriteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentWillMount() {}
  renderItem = ({item}) => {
    return (
      <View style={styles.row}>
        <Image source={{uri: item.picture.large}} style={styles.image} />
        <Text style={styles.name}>{`${item.name.first} ${
          item.name.last
        }`}</Text>
      </View>
    );
  };
  renderSeparator = () => <View style={styles.divider} />;
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}
          style={styles.backContainer}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <FlatList
          style={styles.container}
          data={this.props.userData.userData}
          renderItem={this.renderItem}
          keyExtractor={item => item.id.name}
          ItemSeparatorComponent={this.renderSeparator}
          scrollEnabled={true}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#958cc2',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
  },
  divider: {
    height: 5,
  },
  backText: {fontSize: 25, color: 'white', fontWeight: 'bold'},
  backContainer: {
    padding: 20,
  },
});
const mapStateToProps = state => ({
  userData: state.data,
});

export default connect(mapStateToProps)(ListFavouriteScreen);
