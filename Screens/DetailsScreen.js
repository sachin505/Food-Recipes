import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { MEALS } from '../Data/dummy-data'

const DetailsScreen = (props) => {
    const mealId = props.navigation.getParam('mealIds');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return (
        <ScrollView>
            <View style={styles.screen}>
                <Text style={styles.title}>{selectedMeal.title}</Text>
                <View style={styles.card}>
                    <Text>Incgredients :-</Text>
                    <Text style={styles.text}>
                        {selectedMeal.steps}
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text>Steps :- </Text>
                    <Text style={styles.text}>
                        {selectedMeal.steps}
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',

    },
    card: {
        elevation: 5,
        backgroundColor: 'white',
        width: 300,
        alignItems: 'center',
        marginBottom: 20
    },
    text: {
        padding: 10
    },
    title: {
        elevation: 5,
        width: 300,
        marginBottom: 20,
        marginVertical: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center'

    }


})

export default DetailsScreen;