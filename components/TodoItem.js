import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <Text >
                    Artist: {item.artist} 
                </Text>
                <Text >
                    Venue: {item.venue}
                </Text>
                <Text >
                    City/State: {item.city}, {item.state}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
})