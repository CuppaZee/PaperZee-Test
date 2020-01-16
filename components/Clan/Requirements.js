import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useStateValue } from '../../State';

export default function Requirements() {
  const [{ requirements }, dispatch] = useStateValue();
  var cellStyles = {
    padding:4,
    paddingVertical:2,
    whitespace:"nowrap",
    overflow:"hidden",
    textOverflow:"ellipsis"
  }
  var levelColours = [
    '#eb0000',
    '#ef6500',
    '#fa9102',
    '#fcd302',
    '#bfe913',
    '#55f40b'
  ]
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <View style={{ flexGrow: 0, flexShrink: 0, width: 60 }}>
        <Text numberOfLines={1} style={{...cellStyles,paddingBottom:42,fontWeight:"bold"}}>Level</Text>
          {[1,2,3,4,5].map(i=><Text numberOfLines={1} style={{...cellStyles,backgroundColor:levelColours[i]}}>Level {i}</Text>)}
      </View>
      <ScrollView horizontal={true} style={{ flexGrow: 1 }} contentContainerStyle={{
      flexGrow: 1,
      justifyContent: 'space-between'
  }}>
        {
          [...requirements.user.map(i=>({level:3,x:i})),...requirements.clan.map(i=>({level:5,x:i}))].map(({level,x})=><View style={{ flexGrow:1, textAlign: "center" }}>
            <View style={{...cellStyles,display:"flex",alignItems:"center",backgroundColor:levelColours[level]}}>
              <Text style={{fontWeight:"bold"}}>{requirements.types.find(i=>i.id==x).label}</Text>
              <Image style={{height:40,width:40}} source={{uri:requirements.types.find(i=>i.id==x).img}}/>
            </View>
            {[1,2,3,4,5].map(i=><Text style={{...cellStyles,backgroundColor:levelColours[i],textAlign:"center"}}>{requirements.levels[i-1][level==3?'user':'clan'][x]||"---"}</Text>)}
          </View>)
        }
      </ScrollView>
    </View>
  )
}