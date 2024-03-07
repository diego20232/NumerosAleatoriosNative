import React from "react";
import { StyleSheet, Text, View } from "react-native";



export default () => {
    return (
    <View style={numero.texto}>
        <Text style={numero.texto}>Aleatório</Text>
    </View>
    )
}

const numero = StyleSheet.create (
    {
        texto: {
            color: '#F0F8FF',
            fontSize: 40,
            margin: 58,
        }
    }
)