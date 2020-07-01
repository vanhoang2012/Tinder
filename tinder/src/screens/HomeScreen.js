import React from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';

import {connect} from 'react-redux';
import CardStack from '../components/CardStack';
import Styles from '../style/styles';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={Styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('ListFavourite');
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>LIST FAVOURITE</Text>
        </TouchableOpacity>
        <CardStack />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 50,
    right: 20,
    padding: 20,
    zIndex: 1,
  },
  buttonText: {fontSize: 25, color: 'white', fontWeight: 'bold'},
});

const mapStateToProps = state => ({
  userData: state.data,
});

export default connect(mapStateToProps)(HomeScreen);
