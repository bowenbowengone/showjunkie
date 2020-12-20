import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button, TouchableHighlight, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SHOWLIST } from '../shared/showlist'


class AddShowForm extends Component {
    
        state = {
            artist: '',
            date: new Date(),
            venue: '',
            city: '',
            state: '',
            key: '',
            showCalendar: false
        }

    
    submitHandler = () => {
        const newShowlist = SHOWLIST.concat([this.state])
        this.state.key = Object.keys(newShowlist).length - 1;
            console.log(newShowlist);
    };

    resetForm() {
        this.setState({
            artist: '',
            date: new Date(),
            venue: '',
            city: '',
            state: '',
            key: '',
            showCalendar: false
        });
    }

    render() {
        const renderShow = ({item}) => {
            return (
                
                    <ListItem 
                        title={item.artist}
                        subtitle={item.venue}
                    />

                
            );
        }

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
                        color='black'
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
                <TouchableHighlight>
                    <Button onPress={() => {this.submitHandler(); this.resetForm();}} title='add show' color='black'/>
                </TouchableHighlight>
                <Text>
                    <FlatList 
                        data={SHOWLIST}
                        renderItem={renderShow}
                        keyExtractor={item => item.key.toString()}
                    />
                </Text>
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
        margin: 5
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