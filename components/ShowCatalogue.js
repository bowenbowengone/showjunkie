import React, { Component } from 'react';
import { StyleSheet, Text, Card, FlatList} from 'react-native';
import { ListItem } from 'react-native-elements';
import { SHOWLIST } from '../shared/showlist';

class ShowCatalogue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shows: SHOWLIST
        };
    }

    // pressHandler(key) {
    //     setTodos((prevTodos) => {
    //       return prevTodos.filter(todo => todo.key != key);
    //     });
    // }

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
            <Text>
                {/* <TouchableOpacity onPress={() => pressHandler(item.key)}> */}
                    <FlatList
                        data={SHOWLIST}
                        renderItem={renderShow}
                        keyExtractor={item => item.key.toString()}
                    />
                {/* </TouchableOpacity> */}
            </Text>
        );

const styles = StyleSheet.create({
    showlist: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
})}
}

export default ShowCatalogue;