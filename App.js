import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { StateProvider } from './State';

import AppNavigator from './navigation/AppNavigator';

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const initialState = {
    loadingQueue: [],
    theme: { primary: 'green' }, requirements: {"user":["1","21","23","24","3"],"rewards":[{"prizewheel":0,"crossbow":1,"icemystery":0,"longsword":0,"virtual_magnet":0,"flathammock":0,"temporaryvirtual":1,"virtual":1,"thehammer":0,"virtual_rainbow":1,"watermystery":0,"mace":1,"battleaxe":0,"catapult":0,"firemystery":0,"virtualsapphire":0,"magnet":0,"flatlou":0,"flatrob":0,"evolution":0},{"thehammer":0,"virtual_rainbow":0,"watermystery":1,"mace":0,"battleaxe":0,"catapult":1,"firemystery":0,"virtualsapphire":0,"magnet":1,"flatlou":1,"flatrob":0,"evolution":0,"prizewheel":0,"crossbow":2,"icemystery":0,"longsword":1,"virtual_magnet":0,"flathammock":0,"temporaryvirtual":0,"virtual":0},{"catapult":0,"firemystery":0,"virtualsapphire":0,"magnet":0,"flatlou":0,"flatrob":1,"evolution":0,"prizewheel":0,"crossbow":3,"icemystery":1,"longsword":1,"virtual_magnet":1,"flathammock":0,"temporaryvirtual":1,"virtual":2,"thehammer":0,"virtual_rainbow":2,"watermystery":0,"mace":0,"battleaxe":0},{"longsword":0,"virtual_magnet":0,"flathammock":1,"temporaryvirtual":0,"virtual":0,"thehammer":0,"virtual_rainbow":0,"watermystery":0,"mace":0,"battleaxe":1,"catapult":1,"firemystery":0,"virtualsapphire":0,"magnet":0,"flatlou":0,"flatrob":0,"evolution":1,"prizewheel":1,"crossbow":2,"icemystery":0},{"catapult":0,"firemystery":1,"virtualsapphire":1,"magnet":1,"flatlou":1,"flatrob":1,"evolution":0,"prizewheel":0,"crossbow":2,"icemystery":0,"longsword":0,"virtual_magnet":1,"flathammock":1,"temporaryvirtual":2,"virtual":1,"thehammer":1,"virtual_rainbow":1,"watermystery":0,"mace":1,"battleaxe":0},{"thehammer":0,"virtual_rainbow":0,"watermystery":0,"mace":0,"battleaxe":0,"catapult":0,"firemystery":0,"virtualsapphire":0,"magnet":0,"flatlou":0,"flatrob":0,"evolution":0,"prizewheel":0,"crossbow":0,"icemystery":0,"longsword":0,"virtual_magnet":0,"flathammock":0,"temporaryvirtual":0,"virtual":0},{"thehammer":0,"virtual_rainbow":0,"watermystery":0,"mace":0,"battleaxe":0,"catapult":0,"firemystery":0,"virtualsapphire":0,"magnet":0,"flatlou":0,"flatrob":0,"evolution":0,"prizewheel":0,"crossbow":0,"icemystery":0,"longsword":0,"virtual_magnet":0,"flathammock":0,"temporaryvirtual":0,"virtual":0}],"lvlList":["1","2","3","4","5"],"clan":["6","13","24","31","12","21","10","3"],"rewardlist":["crossbow","mace","virtual","virtual_rainbow","temporaryvirtual","longsword","catapult","watermystery","magnet","flatlou","icemystery","flatrob","virtual_magnet","battleaxe","evolution","flathammock","prizewheel","thehammer","firemystery","virtualsapphire"],"types":[{"fromv3":1,"desc":"Days of Activity","id":"1","from":"","needs":[],"img":"https://i.ibb.co/K5ZmXqc/Total-1.png","label":"Day"},{"id":"3","from":"","needs":[],"img":"https://i.ibb.co/K5ZmXqc/Total-1.png","label":"Pts","fromv3":3,"desc":"Points from Everything"},{"desc":"Captures on Physical Munzees","id":"21","from":"","needs":[],"img":"https://i.ibb.co/q1Qbh1m/physical.png","label":"Phys Cap","fromv3":21},{"needs":[],"img":"https://munzee.global.ssl.fastly.net/images/pins/poi_filter.png","label":"Cap","fromv3":13,"desc":"Number of POI Captures","id":"13","from":""},{"needs":[],"img":"https://munzee.global.ssl.fastly.net/images/v4pins/expiring_specials_filter.png","label":"Bounc","fromv3":24,"desc":"Number of Bouncer Captures","id":"24","from":""},{"id":"6","from":"","needs":[],"img":"https://munzee.global.ssl.fastly.net/images/pins/owned.png","label":"Dep","fromv3":6,"desc":"Total Number of Deploys"},{"needs":[],"img":"https://munzee.global.ssl.fastly.net/images/pins/joystick.png","label":"Gam Pts","fromv3":31,"desc":"Points from Gaming Munzees","id":"31","from":""},{"id":"23","from":"","needs":[],"img":"https://munzee.global.ssl.fastly.net/images/v4pins/clan_weapons_filter.png","label":"Pts","fromv3":23,"desc":"Points from Clan Weapon Munzees"},{"fromv3":12,"desc":"Points from Evolution Munzees","id":"12","from":"","needs":[],"img":"https://munzee.global.ssl.fastly.net/images/v4pins/evolution.png","label":"Pts"},{"from":"","needs":[],"img":"https://munzee.global.ssl.fastly.net/images/pins/owned.png","label":"Dep Pts","fromv3":10,"desc":"Deploy Points","id":"10"}],"levels":[{"clan":{"3":2500,"6":0,"10":0,"12":0,"13":10,"21":0,"24":20,"31":150},"user":{"1":4,"3":250,"21":5,"23":0,"24":0}},{"user":{"1":7,"3":1000,"21":0,"23":100,"24":0},"clan":{"3":5000,"6":0,"10":0,"12":0,"13":30,"21":0,"24":40,"31":500}},{"clan":{"3":25000,"6":0,"10":0,"12":5000,"13":45,"21":500,"24":120,"31":1500},"user":{"1":14,"3":5000,"21":20,"23":250,"24":20}},{"clan":{"3":100000,"6":0,"10":5000,"12":0,"13":100,"21":0,"24":250,"31":2500},"user":{"1":20,"3":20000,"21":0,"23":400,"24":40}},{"user":{"1":25,"3":50000,"21":0,"23":750,"24":80},"clan":{"3":250000,"6":250,"10":0,"12":0,"13":200,"21":1500,"24":500,"31":5000}}]}
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeTheme':
        return {
          ...state,
          theme: action.newTheme
        };

      default:
        return state;
    }
  };

  const theme = {
    ...defaultTheme
  }

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <StateProvider initialState={initialState} reducer={reducer}>
        <PaperProvider theme={theme}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
        </PaperProvider>
      </StateProvider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
