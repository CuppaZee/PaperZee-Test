import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import { Card, Button } from 'react-native-paper'

import { MonoText } from '../components/StyledText';
import Requirements from '../components/Clan/Requirements'
import { useStateValue } from '../State';

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function HomeScreen() {
  const [{ theme }, dispatch] = useStateValue();
  var cellStyles = {
    padding:4,
    paddingVertical:2,
    whitespace:"nowrap",
    overflow:"hidden",
    textOverflow:"ellipsis"
  }
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/robot-dev.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
          <Button
            color={theme.primary}
            onClick={() => dispatch({
              type: 'changeTheme',
              newTheme: { primary: theme.primary=='blue'?'green':'blue'}
            })}
          >
            Make me blue!
          </Button>
        </View>
        <Requirements />

        {/* <View style={styles.getStartedContainer}>
          <DevelopmentModeNotice />

          <Text style={styles.getStartedText}>Get started by opening</Text>

          <View
            style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText>screens/HomeScreen.js</MonoText>
          </View>

          <Text style={styles.getStartedText}>
            Change this text and your app will automatically reload.
          </Text>
        </View>

        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>
              Help, it didn’t automatically reload!
            </Text>
          </TouchableOpacity>
        </View> */}

        <View style={{display:"flex",flexDirection:"row"}}>
        
            <FlatList
            style={{flexGrow:0,flexShrink:0,width:100}}
              data={[
                {id:"D",data:<Text numberOfLines={1} style={{fontWeight:"bold",...cellStyles,paddingBottom:42}}>Players</Text>},
                {id:"F",data:<Text numberOfLines={1} style={cellStyles}>thegenie18</Text>},
                {id:"W",data:<Text numberOfLines={1} style={cellStyles}>sohcah</Text>},
                {id:"R",data:<Text numberOfLines={1} style={cellStyles}>purplecourgette</Text>},
                {id:"Q",data:<Text numberOfLines={1} style={cellStyles}>WriteAndMane</Text>},
                {id:"X",data:<Text numberOfLines={1} style={cellStyles}>Maxi72</Text>}
              ]}
              renderItem={({ item }) => item.data}
              keyExtractor={item => item.id}
            />
            <ScrollView style={{flexGrow:1}} contentContainerStyle={{
      flexGrow: 1,
      justifyContent: 'space-between'
  }} horizontal={true}>
              {/* <View style={{minWidth:"calc(100% - 100px"}}> */}
                {[
                {
                  "img": "https://i.ibb.co/K5ZmXqc/Total-1.png",
                  "label": "Day",
                  "fromv3": 1,
                  "desc": "Days of Activity",
                  "id": "1",
                  "from": "",
                  "needs": []
                },
                {
                  "from": "",
                  "needs": [],
                  "img": "https://i.ibb.co/K5ZmXqc/Total-1.png",
                  "label": "Pts",
                  "fromv3": 3,
                  "desc": "Points from Everything",
                  "id": "3"
                },
                {
                  "img": "https://i.ibb.co/q1Qbh1m/physical.png",
                  "label": "Phys Cap",
                  "fromv3": 21,
                  "desc": "Captures on Physical Munzees",
                  "id": "21",
                  "from": "",
                  "needs": []
                },
                {
                  "desc": "Number of POI Captures",
                  "id": "13",
                  "from": "",
                  "needs": [],
                  "img": "https://munzee.global.ssl.fastly.net/images/pins/poi_filter.png",
                  "label": "Cap",
                  "fromv3": 13
                },
                {
                  "from": "",
                  "needs": [],
                  "img": "https://munzee.global.ssl.fastly.net/images/v4pins/expiring_specials_filter.png",
                  "label": "Bounc",
                  "fromv3": 24,
                  "desc": "Number of Bouncer Captures",
                  "id": "24"
                },
                {
                  "img": "https://munzee.global.ssl.fastly.net/images/pins/owned.png",
                  "label": "Dep",
                  "fromv3": 6,
                  "desc": "Total Number of Deploys",
                  "id": "6",
                  "from": "",
                  "needs": []
                },
                {
                  "desc": "Points from Gaming Munzees",
                  "id": "31",
                  "from": "",
                  "needs": [],
                  "img": "https://munzee.global.ssl.fastly.net/images/pins/joystick.png",
                  "label": "Gam Pts",
                  "fromv3": 31
                },
                {
                  "needs": [],
                  "img": "https://munzee.global.ssl.fastly.net/images/v4pins/clan_weapons_filter.png",
                  "label": "Pts",
                  "fromv3": 23,
                  "desc": "Points from Clan Weapon Munzees",
                  "id": "23",
                  "from": ""
                },
                {
                  "needs": [],
                  "img": "https://munzee.global.ssl.fastly.net/images/v4pins/evolution.png",
                  "label": "Pts",
                  "fromv3": 12,
                  "desc": "Points from Evolution Munzees",
                  "id": "12",
                  "from": ""
                },
                {
                  "needs": [],
                  "img": "https://munzee.global.ssl.fastly.net/images/pins/owned.png",
                  "label": "Dep Pts",
                  "fromv3": 10,
                  "desc": "Deploy Points",
                  "id": "10",
                  "from": ""
                }
                ].map(item=><FlatList
                  style={{flexGrow:1,textAlign:"center"}}
                  data={[
                    {id:1,data:<View style={{display:"flex",alignItems:"center"}}>
                      <Image style={{height:40,width:40}} source={{uri:item.img}}/>
                      <Text style={{fontWeight:"bold",padding:4,paddingVertical:2}}>{item.label}</Text>
                    </View>},
                    {id:2,data:<Text style={{padding:4,paddingVertical:2,textAlign:"center"}}>{Math.floor(Math.random()*100000).toLocaleString()}</Text>},
                    {id:3,data:<Text style={{padding:4,paddingVertical:2,textAlign:"center"}}>{Math.floor(Math.random()*100000).toLocaleString()}</Text>},
                    {id:4,data:<Text style={{padding:4,paddingVertical:2,textAlign:"center"}}>{Math.floor(Math.random()*100000).toLocaleString()}</Text>},
                    {id:5,data:<Text style={{padding:4,paddingVertical:2,textAlign:"center"}}>{Math.floor(Math.random()*100000).toLocaleString()}</Text>},
                    {id:6,data:<Text style={{padding:4,paddingVertical:2,textAlign:"center"}}>{Math.floor(Math.random()*100000).toLocaleString()}</Text>}
                  ]}
                  renderItem={({ item }) => item.data}
                  keyExtractor={item => item.id}
                />)}
              {/* </View> */}
            </ScrollView>
        </View>
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          This is a tab bar. You can edit it in:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>
            navigation/MainTabNavigator.js
          </MonoText>
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
