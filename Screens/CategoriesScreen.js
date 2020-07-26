import React from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native'
import { CATEGORIES } from '../Data/dummy-data'
import CategoryGridTile from '../Components/CategoryGridTile'




const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile onSelect={() => { props.navigation.navigate({ routeName: 'CategoryMeals', params: { categoryId: itemData.item.id } }) }} title={itemData.item.title} color={itemData.item.color} />)
    }
    return (
        <FlatList data={CATEGORIES} keyExtractor={(item, index) => item.id} renderItem={renderGridItem} numColumns={2} />)
}


CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerTinColor: 'white'
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

})


export default CategoriesScreen;