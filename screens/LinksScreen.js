import React, { useState } from 'react';
import { ScrollView, StyleSheet, Image, View } from 'react-native';
// import { ExpoLinksView } from '@expo/samples';
import { List, TextInput, Searchbar, IconButton, Colors } from 'react-native-paper'

export default function LinksScreen() {
  var [firstQuery, setFirstQuery] = useState("")
  return (
    <ScrollView style={styles.container}>
      <View style={{padding:8}}>
        <Searchbar
          mode="flat"
          placeholder="Search"
          onChangeText={query => { setFirstQuery(query); }}
          value={firstQuery}
        />
      </View>
      <View style={{flexDirection:"row"}}>
        <TextInput
          dense={true}
          style={{flexGrow:1}}
          inputStyle={{color:Colors.green100}}
          label='Search'
          value={firstQuery}
          onChangeText={text => setFirstQuery(text)}
          returnKeyType="search"
          underlineColor={Colors.green100}
          selectionColor={Colors.green100}
        />
        <IconButton
          icon="magnify"
          size={27}
          onPress={() => console.log('Pressed')}
        />
      </View>
      <List.Item
        title="sohcah"
        description="View User Profile"
        left={props => <Image {...props} style={{width:56,borderRadius:50}} source={{ uri: 'https://munzee.global.ssl.fastly.net/images/avatars/ua2p5m.png' }} />}
        right={props => <List.Icon {...props} icon="chevron-right" />}
      />
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 15,
    backgroundColor: '#fff',
  },
});
