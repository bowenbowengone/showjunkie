import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  FlatList
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker'
import { ListItem } from 'react-native-elements'
import { SHOWLIST } from '../shared/showlist'

class AddShowForm extends Component {
  state = {
    artist: '',
    date: new Date(),
    venue: '',
    city: '',
    state: '',
    showList: SHOWLIST,
    showCalendar: false,
    icon: ''
  }

  submitHandler = () => {
    const { artist, date, venue, city, state } = this.state
    const newShow = { artist, date: date.toDateString(), venue, city, state, key: this.state.showList.length, icon: 'chevron-right' }
    const newShowlist = this.state.showList.concat(newShow)
    // You'll want to do some data validation because as the code sits, if the venue is blank, it will cause an error
    this.setState({ showList: newShowlist, icon: 'chevron-right' })
    this.resetForm()
  }

  resetForm() {
    this.setState({
      artist: '',
      date: new Date(),
      venue: '',
      city: '',
      state: '',
      key: '',
      showCalendar: false,
      icon: ''
    })
  }
  
  render() {
    const renderShow = ({ item }) => {
      return (
        <ListItem style={styles.showRow}>
          <ListItem.Content style={styles.showText}>
            <ListItem.Title style={styles.itemName}>{item.artist}</ListItem.Title>
            <Text style={styles.itemDetails}>{item.venue}</Text>
          </ListItem.Content>
          <TouchableOpacity>
            <View style={styles.moreContainer}>
              <Icon onPress={() => console.log(this.state)} name={item.icon} size={15} style={styles.moreIcon} />  
            </View>
          </TouchableOpacity>
        </ListItem>
      )
    }
    return (
      <ScrollView>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Artist:</Text>
          <TextInput
            placeholder='artist'
            onChangeText={(value) => this.setState({ artist: value })}
            value={this.state.artist}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Venue:</Text>
          <TextInput
            placeholder='venue'
            onChangeText={(value) => this.setState({ venue: value })}
            value={this.state.venue}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>City:</Text>
          <TextInput
            placeholder='city'
            onChangeText={(value) => this.setState({ city: value })}
            value={this.state.city}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>State:</Text>
          <TextInput
            placeholder='state'
            onChangeText={(value) => this.setState({ state: value })}
            value={this.state.state}
          />
        </View>
        <View style={styles.formRow}>
          <Text style={styles.formLabel}>Date</Text>
          <Button
            onPress={() => this.setState({ showCalendar: !this.state.showCalendar })}
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
              selectedDate && this.setState({ date: selectedDate, showCalendar: false })
            }}
            style={styles.formItem}
          />
        )}
        <TouchableHighlight>
          <Button
            onPress={() => {
              this.submitHandler()
              this.resetForm()
            }}
            title='add show'
            color='black'
          />
        </TouchableHighlight>
        <Text>
          <FlatList
            data={this.state.showList}
            renderItem={renderShow}
            keyExtractor={(item) => item.key.toString()}
          />
        </Text>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  formRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 5,
  },
  formLabel: {
    fontSize: 16,
    flex: 2,
  },
  formItem: {
    flex: 1,
  },
  moreIcon: {
    color: 'black'
  },
  showText: {
    flex: 1,
    flexDirection: 'column'
  },
  showRow: {
    flexDirection: 'row-reverse'
  },
  itemName: {
    fontSize: 18,
  },
  itemDetails: {
    fontSize: 12,
  }
})
export default AddShowForm;