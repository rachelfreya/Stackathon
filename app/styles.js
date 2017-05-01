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
    backgroundColor: 'powderblue'
  },
  pageLabel: {
    fontSize: 18,
    textAlign: 'center'
  },
  food: {
    fontSize: 18
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
  recipeImg: {
    width: 100,
    height: 75
  },
  foodView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  addtoList: {
    marginTop: 125
  }
})

export default styles
