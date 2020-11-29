import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

import AddShowForm from './AddShowForm';

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    

    return (
        <View>
            <View style={style.input}>
                <AddShowForm />
            </View>
            
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        marginBottom:10,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})