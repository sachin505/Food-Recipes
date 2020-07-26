import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryMealsScreen from '../Screens/CategoryMealsScreen';
import DetailsScreen from '../Screens/DetailsScreen';
import Colors from '../Colors/Colors'

const MealsNavigator = createStackNavigator({
    Categories:
    {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Categories',
            headerStyle: {
                backgroundColor: Colors.primary
            },

        }
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
        navigationOptions: {
            headerTitle: 'Category Meal',
            headerStyle: {
                backgroundColor: Colors.primary
            }
        }
    },


    DetailsScreen: {
        screen: DetailsScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primary
            }
        }
    },




})
export default createAppContainer(MealsNavigator);