import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    padding: 10,
  },
  image: {
    height: deviceSize.height / 4,
    width: deviceSize.width - 20,
    resizeMode: 'contain',
    flex: 1,
  },
  inner_container: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
  },
  info_container: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: deviceSize.width - 20,
  },
  info_text: {color: 'white', fontSize: 25},
});
