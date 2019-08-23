import {createStackNavigator, createAppContainer} from 'react-navigation'
import SearchScreen from './src/screens/SearchScreen';


const navigator = createStackNavigator({
  Search: SearchScreen
}, 
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    
    title:'Pesquisa de Negócios',
    headerTintColor: 'white',
    headerStyle:{
      backgroundColor: 'rgba(39, 39, 39, 1)',
      borderBottomWidth:2,
      borderBottomColor: '#333333'
    },
    
    headerTitleStyle:{
      fontWeight: 'bold'
    }

  }

})
export default createAppContainer(navigator)