import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngry } from '@fortawesome/free-regular-svg-icons'
import { faFrown } from '@fortawesome/free-regular-svg-icons'
import { faLaughBeam } from '@fortawesome/free-regular-svg-icons'
import { faTired } from '@fortawesome/free-regular-svg-icons'
import { faMeh } from '@fortawesome/free-regular-svg-icons'
import { faGrimace } from '@fortawesome/free-regular-svg-icons'
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Button,
  Alert,
  Pressable,
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  

  //const [username, setUsername] = React.useState([]);
  // React.useEffect(()=>{
  //   fetch('localhost:3000/users/').then(res => {
  //     console.log(res);
  //     if(res.ok){
  //       return res.json()
  //     }
  //   }).then(jsonResponse => setInitialState(jsonResponse.users))
  // },[])

  const username = "ACM Umbreon";
  //const today_feeling = ["\n"];
  const [today_feeling, setToday_feeling] = React.useState("\n");
  var time = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  

  const [timesPressed, setTimesPressed] = React.useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  return (
    <SafeAreaView style={{ flex: 1 , margin: "20px"}}>
      <View>
        <Text style={styles.titleText}>
        Welcome, {username}!
        </Text>

        <Text style={styles.title}>
        Today's Summary
        </Text>

        <Text style={styles.body}>
        You felt...
        {today_feeling}
        </Text>
        
        <Text style={styles.title}>
        How are you feeling today?
        </Text>
        
        <View style={styles.fixToText}>
          
          <Pressable
            style = {{backgroundColor: "#fcb603", border:"0px", borderRadius:"20px", padding: "30px",
              margin: "20px", shadowOpacity: 0.25, shadowRadius: 4, shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2
              },}}

          //   onPress={() => {
          //     today_feeling.push("Sad");
          //     //alert('Added \"Sad\" to today\'s feelings.');
          //   }}
          // >
                //onPress={today_feeling.push("Sad\n")}>
          onPress={() => {
            setToday_feeling((current) => current.concat(time));
            setToday_feeling((current) => current.concat(" - Happy\n"));
            }}>


            <FontAwesomeIcon
              icon = {faLaughBeam}
              size="3x"
              inverse
            />
            <p></p>
            <Text style = {{textAlign:"center", color:"white"}}>Happy</Text>
          </Pressable>
          <Pressable
            style = {{backgroundColor: "#81de96", border:"0px", borderRadius:"20px", padding: "30px",
              margin: "20px", shadowOpacity: 0.25, shadowRadius: 4, shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2
              },}}
              // onPress={() => {
              //   setToday_feeling((current) => current.concat("Calm\n"));
              //   }}>

              onPress={() => {
                setToday_feeling((current) => current.concat(time));
                setToday_feeling((current) => current.concat(" - Calm\n"));
                }}>    

            <FontAwesomeIcon
              icon = {faMeh}
              size="3x"
              inverse
            />
            <p></p>
            <Text style = {{textAlign:"center", color:"white"}}>Calm</Text>
          </Pressable>
          <Pressable
            style = {{backgroundColor: "#992f2f", border:"0px", borderRadius:"20px", padding: "30px",
              margin: "20px", shadowOpacity: 0.25, shadowRadius: 4, shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2
              },}}
              onPress={() => {
                setToday_feeling((current) => current.concat(time));
                setToday_feeling((current) => current.concat(" - Angry\n"));
                }}>  
            <FontAwesomeIcon
              icon = {faAngry}
              size="3x"
              inverse
            />
            <p></p>
            <Text style = {{textAlign:"center", color:"white"}}>Angry</Text>
          </Pressable>
        </View>
        <View style={styles.fixToText}>
          <Pressable
            style = {{backgroundColor: "#7a98de", border:"0px", borderRadius:"20px", padding: "30px",
              margin: "20px", shadowOpacity: 0.25, shadowRadius: 4, shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2
              },}}
              onPress={() => {
                setToday_feeling((current) => current.concat(time));
                setToday_feeling((current) => current.concat(" - Sad\n"));
                }}
          >
            <FontAwesomeIcon
              icon = {faFrown}
              size="3x"
              inverse
            />
            <p></p>
            <Text style = {{textAlign:"center", color:"white"}}>Sad</Text>
          </Pressable>
          <Pressable
            style = {{backgroundColor: "#bb9be8", border:"0px", borderRadius:"20px", padding: "30px",
              margin: "20px", shadowOpacity: 0.25, shadowRadius: 4, shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2
              },}}
              onPress={() => {
                setToday_feeling((current) => current.concat(time));
                setToday_feeling((current) => current.concat(" - Stressed\n"));
                }}
          >
            <FontAwesomeIcon
              icon = {faGrimace}
              size="3x"
              inverse
            />
            <p></p>
            <Text style = {{textAlign:"center", color:"white"}}>Stressed</Text>
          </Pressable>
          <Pressable
            style = {{backgroundColor: "#3a3c42", border:"0px", borderRadius:"20px", padding: "30px",
              margin: "20px", shadowOpacity: 0.25, shadowRadius: 4, shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2
              },}}
              onPress={() => {
                setToday_feeling((current) => current.concat(time));
                setToday_feeling((current) => current.concat(" - Tired\n"));
                }}
          >
            <FontAwesomeIcon
              icon = {faTired}
              size="3x"
              inverse
            />
            <p></p>
            <Text style = {{textAlign:"center", color:"white"}}>Tired</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 8,
  },
  body: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
export default HomeScreen;