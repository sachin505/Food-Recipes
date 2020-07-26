import React from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../Data/dummy-data';
//import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../Components/MealItem'




const CategoryMealsScreen = (props) => {
    const catId = props.navigation.getParam('categoryId');

    const renderMealItem = (itemData) => {
        return (<MealItem title={itemData.item.title}
            duration={itemData.item.duration}
            affordability={itemData.item.affordability}
            complexity={itemData.item.complexity}
            image={itemData.item.imageUrl}
            onSelect={() => { props.navigation.navigate({ routeName: 'DetailsScreen', params: { mealIds: itemData.item.id } }) }}
        />)
    }

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId))



    return (
        <View style={styles.screen}><FlatList data={displayedMeals} keyExtractor={(item, index) => item.id} renderItem={renderMealItem} style={{ width: '100%' }} /></View>
    )
}



CategoryMealsScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
    return {
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: '#ffa500'
        },
    };

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

})


export default CategoryMealsScreen;