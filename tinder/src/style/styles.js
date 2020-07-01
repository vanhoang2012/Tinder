'use strict';
import {StyleSheet, Dimensions} from 'react-native';

const DIMENSIONS = Dimensions.get('window');

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#958cc2',
  },
  cardContainer: {
    flex: 1,
    width: DIMENSIONS.width,
  },
  cardStack: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: 420,
    width: 350,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#FFF',
    overflow: 'hidden',
  },
  headerCard: {
    height: '40%',
    width: '100%',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  cardImage: {
    backgroundColor: '#1E90FF',
    width: 165,
    height: 165,
    borderRadius: 175 / 2 - 5,
  },
  cardImageContainer: {
    backgroundColor: '#ffffff',
    borderColor: 'lightgrey',
    borderWidth: 1,
    width: 175,
    height: 175,
    borderRadius: 175 / 2,
    marginTop: -120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    margin: 20,
    textAlign: 'center',
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 20,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    color: 'grey',
  },
  cardTextMain: {
    fontSize: 25,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    height: 80,
  },
  cardTextSecondary: {
    textAlign: 'left',
    fontSize: 15,
    color: 'grey',
    backgroundColor: 'transparent',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
  },
  iconStyle: {height: 30, width: 30, marginTop: 5},
});

export default Styles;
