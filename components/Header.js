import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
    return(
        <View style={styles.header}>
            {/* <View>
                
            </View> */}
            <View>
                <Text style={styles.title}>Show Junkie</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 150,
        paddingTop: 100,
        backgroundColor: 'black'
    },
    headerImage: {
        height: 50,
        width: 50
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
})