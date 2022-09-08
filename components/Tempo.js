import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Tempo(props) {

    return (
        <>
            <View style={styles.bloco}>
                <Text style={styles.texto}>{props.dados.city_name}</Text>
                <Text style={styles.texto}>Clima de hoje:</Text>
                <Text style={styles.texto}>Temperatura atual: {props.dados.temp}</Text>
                <Text style={styles.texto}>Min: {props.atuais.min}</Text>
                <Text style={styles.texto}>Max: {props.atuais.max}</Text>
                <Text style={styles.texto}>Descrição: {props.atuais.description}</Text>
                <Text style={styles.texto}>Clima de amanhã: </Text>
                <Text style={styles.texto}>Min: {props.depois.min}</Text>
                <Text style={styles.texto}>Max: {props.depois.max}</Text>
                <Text style={styles.texto}>Descrição: {props.depois.description}</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 20,
        marginTop: 4,
        color: '#fff'
    },
    bloco: {
        alignItems: 'center',
    }
});