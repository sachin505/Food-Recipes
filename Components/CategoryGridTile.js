import React from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Platform } from 'react-native'
import { TouchableNativeFeedback } from 'react-native-gesture-handler'

const CategoryGridTile = (props) => {
    let touchComponent = TouchableOpacity
    if (Platform.OS == 'android' && Platform.Version >= 21) {
        touchComponent = TouchableNativeFeedback
    }
    return (
        <TouchableOpacity style={styles.gridStyle} onPress={props.onSelect} >
            <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                <Text style={styles.textStyle}>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({

    gridStyle: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden'

    },
    container: {
        flex: 1,
        elevation: 5,
        borderRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'

    },
    textStyle: {
        // fontFamily: '',
        //fontSize:
    }
})
export default CategoryGridTile
