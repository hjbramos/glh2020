import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, ScrollView, Image, AsyncStorage, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import logo from '../assets/logo.png';

export default function Avaliacao() {
    const [techs, setTechs] = useState([]);

    function handleCancel() {
        navigation.navigate('List');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={logo} />

            <Text style={styles.company}></Text>
            <Text style={styles.company}></Text>
            <Text style={styles.company}> </Text>
            <Text style={styles.company}>    Graziele Friosi</Text>
            <Text style={styles.title}>Especialista em Direito e Processo Civil</Text>
            <Text style={styles.title}>OAB 123456</Text>
            <Text style={styles.title}>Pontos: 89</Text>
            <View style={styles.listItem}>
                <Text></Text>
                <TouchableOpacity onPress={handleCancel} style={[styles.button, styles.cancelButton]}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cancelButton: {
        backgroundColor: '#999',
        marginTop: 10,
    },
    logo: {
        height: 32,
        resizeMode: "contain",
        alignSelf: 'center',
        marginTop: 10
    },
    title: {
        fontSize: 20,
        color: '#444',
        paddingHorizontal: 20,
        marginBottom: 15,
        marginTop: 30,
    },
    bold: {
        fontWeight: 'bold'
    },
    list: {
        paddingHorizontal: 20,
    },
    listItem: {
        marginRight: 15,
        marginLeft: 15,
    },
    thumbnail: {
        width: 200,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 2,
    },
    company: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 30,
    },
    lista: {
        marginTop: 30,
    },
    price: {
        fontSize: 15,
        color: '#999',
        marginTop: 5
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2,
        marginTop: 20,
    },
    button: {
        height: 32,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        marginTop: 15
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 15,
    }
})