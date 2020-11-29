import React, { Component }from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

class AddShowForm extends Component {
        state = {
            artist: '',
            date: new Date(),
            venue: '',
            city: '',
            state: '',
            showCalendar: false,
            showModal: false
        }
       

    submitHandler() {
        console.log(JSON.stringify(this.state));
        this.resetForm();
    }

    resetForm() {
        this.setState({
            artist: '',
            date: new Date(),
            venue: '',
            city: '',
            state: '',
            showCalendar: false,
            showModal: false
        });
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Artist:</Text>
                    <TextInput 
                        placeholder='artist'
                        onChangeText={(value) => this.setState({artist: value})}
                        value={this.state.artist}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Venue:</Text>
                    <TextInput 
                        placeholder='venue'
                        onChangeText={(value) => this.setState({venue: value})}
                        value={this.state.venue}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>City:</Text>
                    <TextInput 
                        placeholder='city'
                        onChangeText={(value) => this.setState({city: value})}
                        value={this.state.city}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>State:</Text>
                    <TextInput 
                        placeholder='state'
                        onChangeText={(value) => this.setState({state: value})}
                        value={this.state.state}
                    />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Date</Text>
                    <Button
                        onPress={() =>
                            this.setState({showCalendar: !this.state.showCalendar})
                        }
                        title={this.state.date.toLocaleDateString('en-US')}
                        color='#5637DD'
                        accessibilityLabel='select show date'
                    />
                </View>
                {this.state.showCalendar && (
                    <DateTimePicker
                        value={this.state.date}
                        mode={'date'}
                        display='default'
                        onChange={(event, selectedDate) => {
                            selectedDate && this.setState({date: selectedDate, showCalendar: false});
                        }}
                        style={styles.formItem}
                    />
                )}
                <Button onPress={() => this.submitHandler()} title='add show' color='black'/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    formLabel: {
        fontSize: 16,
        flex: 2
    },
    formItem: {
        flex: 1
    }
});

export default AddShowForm;