import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default props => {
    const delta = props.max - props.min + props.min + 1
    const aleatorio = parseInt(Math.random() * delta + props.min)
    return (
        <View>
            <Text style={style.txtG}>Número aleatório = {aleatorio}</Text>
        </View>
    )
}

const style = StyleSheet.create(
    {
        txtG: {
            margin: 9,
            color: '#FFF5EE',
            fontSize: 30,
        },
    }
)
