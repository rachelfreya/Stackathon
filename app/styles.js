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
  food: {
    fontSize: 18
  },
  foodSelected: {
    fontSize: 18,
    backgroundColor: 'yellow'
  },
  input: {
    height: 25,
    width: 100,
    backgroundColor: 'white',
    marginLeft: 135
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
    alignItems: 'center'
  },
  addtoList: {
    marginTop: 125
  },
  addFoodInput: {
    width: 110,
    height: 25,
    backgroundColor: 'white',
    marginLeft: 50
  },
  actionView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1  }
})

export default styles
