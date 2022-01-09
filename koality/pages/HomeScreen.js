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

  const username = "<user>";
  return (
    <SafeAreaView style={{ flex: 1 , margin: "20px"}}>
      <View>
        <Text style={styles.titleText}>
        Welcome, {username}!
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
            onClick={() => Alert.alert('Happy button pressed')}
          >
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
            onPress={() => Alert.alert('Calm button pressed')}
          >
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
            onPress={() => Alert.alert('Angry button pressed')}
          >
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
            onPress={() => Alert.alert('Sad button pressed')}
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
            onPress={() => Alert.alert('Stressed button pressed')}
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
            onPress={() => Alert.alert('Tired button pressed')}
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