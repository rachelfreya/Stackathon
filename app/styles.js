import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navTitle: {
    fontWeight: 'bold',
    fontSize: 18
  },
  tileTitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  pageTitle: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10
  },
  pageBackground: {
    backgroundColor: 'powderblue',
    flex: 1
  },
  pageLabel: {
    fontSize: 18,
    textAlign: 'center'
  },
  input: {
    height: 25,
    width: 150,
    backgroundColor: 'white',
    marginLeft: 115,
    marginRight: 50
  },
  tileViews: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  foodImg: {
    width: 300,
    height: 300
  },
  foodView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  addtoList: {
    marginTop: 125
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
})

export default styles
