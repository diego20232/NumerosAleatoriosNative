import React from "react";
import { Text, StyleSheet, View } from "react-native";
import estilo from "./estilo";

export default (props) => {
    console.warn(props)
    return (
        <View style={estilo.fundo}>
            <Text style={style.txtG}>O número {props.maior} é maior que o número {props.menor}</Text>
        </View>
    )
}

const style = StyleSheet.create(
    {
        txtG: {
            color: '#FFF5EE',
            fontSize: 30,
        },
    }
)
