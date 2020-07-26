import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { color } from 'react-native-reanimated';

const MealItem = (props) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelect}>
                <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                    <ImageBackground source={{ uri: props.image }} style={styles.bg} >
                        <Text style={styles.title}>{props.title}</Text></ImageBackground>
                </View>
                <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
                    <Text>{props.duration}m</Text>
                    <Text>{props.complexity.toUpperCase()}</Text>
                    <Text>{props.affordability.toUpperCase()}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row',
    },
    mealItem: {
        backgroundColor: '#ccc',
        height: 200,
        width: '100%',
        padding: 10,
        justifyContent: 'space-between'

    },
    mealHeader: {
        height: '80%'
    },
    mealDetails: {
        paddingHorizontal: 10,
        justifyContent: 'space-between'

    },
    bg: {
        width: '100%',
        height: '100%',
    },
    title: {
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    }

})

export default MealItem
