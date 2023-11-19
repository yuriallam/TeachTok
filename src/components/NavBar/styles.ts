import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    marginTop: '15%',
    zIndex: 99,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clockContainer: {
    flexDirection: 'row',
    opacity: 0.6,
    alignItems: 'center',
    position: 'absolute',
    left: '5%',
  },
  timerText: {
    color: 'white',
    marginLeft: 3,
    fontWeight: '400',
  },
  foryouContainer: {
    alignItems: 'center',
  },
  foryouText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 22,
  },
  foryouBorder: {
    width: '50%',
    height: 4,
    backgroundColor: 'white',
    marginTop: '5%',
  },
  searchContainer: {
    position: 'absolute',
    right: '5%',
  },
});
