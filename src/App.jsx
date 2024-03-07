import React from "react";
import { Text, StyleSheet, View } from "react-native";
// import  MinMax from "./components/MinMax";
import estilo from "./components/estilo";
import Aleatorio from "./components/Aleatorio";
import NumeroAle from "./components/numeroAle";

export default () => {
    return (
        <View style={estilo.fundo}>
        <NumeroAle/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
         {/* <MinMax maior={90} menor={10}/> */}
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


