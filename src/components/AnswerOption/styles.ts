import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 1,
  },
  avatarContainer: {
    marginVertical: 10,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    // height: Dimensions.get('window').height,
    position: 'absolute',
    zIndex: -2,
  },
  body: {
    top: '15%',
    padding: 10,
    marginRight: 50,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
    flex: 1,
  },
  chevronRight: {
    position: 'absolute',
    right: 0,
  },
  description: {
    fontWeight: '400',
    fontSize: 13,
    color: 'white',
  },
  descriptionHashtag: {
    fontWeight: '700',
  },
  descriptionContainer: {
    marginLeft: 10,
    marginBottom: 20,
  },
  iconText: {
    color: 'white',
  },
  iconTextRow: {
    alignItems: 'center',
  },
  questionText: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    fontSize: 22,
    lineHeight: 26,
    borderRadius: 10,
    color: 'white',
    paddingHorizontal: 5,
  },
  questionContainer: {
    width: '55%',
    marginBottom: '40%',
  },
  option: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  optionText: {
    fontSize: 17,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width: 0.5, height: 0.5},
    textShadowRadius: 1,
    maxWidth: '85%',
    left: 0,
  },
  playlistIcon: {
    marginHorizontal: 5,
  },
  playlist: {
    backgroundColor: '#161616',
    flexDirection: 'row',
    padding: 5,
    width: '100%',
    alignItems: 'center',
  },
  playlistText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
  },
  plus: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
  },
  plusContainer: {
    position: 'absolute',
    backgroundColor: '#28B18F',
    borderRadius: 300,
    height: 22,
    width: 22,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -5,
    right: 10,
  },
  user: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
  },

  side: {
    position: 'absolute',
    right: 10,
    top: '45%',
  },
  thumbButton: {
    right: 15,
    top: '50%',
    position: 'absolute',
  },
});
