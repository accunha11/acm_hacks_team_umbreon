import * as React from 'react';
import {useState} from 'react';
import { View, Text, SafeAreaView, Button, Modal, Pressable, StyleSheet} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPauseCircle } from '@fortawesome/free-regular-svg-icons'
import logo from '../koala.gif';

function handleSubmit(e) {
  e.preventDefault();
  console.log("meh");
}

function Timer() {
  let myInterval
  
  const setTimer = () => {
    document.getElementById("koala").style.display='block'
    var input = document.getElementById("TimeInput").value
    var t1me = input * 60, display = document.querySelector('#time');
    TimeSet(t1me, display);
    
    function TimeSet(duration, display) {
      var timeInput = Date.now(), diff, hours, minutes, seconds;

      function decrementTime() {
        diff = duration - (((Date.now() - timeInput) / 1000) | 0);
        hours = parseInt((diff/3600), 10);
        minutes = parseInt((diff/60) - hours*60, 10);
        seconds = parseInt((diff % 60), 10);
      
        hours = hours < 10 ? "0" + hours : hours 
        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (diff <= 0) {
          clearInterval(myInterval);
          timeInput = (Date.now() + 1000)
        }
      };
      
      decrementTime();
      myInterval = setInterval(decrementTime, 1000);
    }
  }

  function toggleTimer() {
    clearInterval(myInterval)

  }


  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="number" 
        id='TimeInput'
        placeholder="Set Timer"
        />
      <button style={{backgroundColor: "white", border: "0px", borderRadius: "20px"}} onClick={setTimer}> Set Timer </button>
      <p> </p>
      <Pressable
        style={{backgroundColor: "transparent", border: "0px", top: "50%", alignItems:"center"}}
        onPress={toggleTimer}>
          <FontAwesomeIcon 
            icon={faPauseCircle}
            size="4x"
            inverse
          />
      </Pressable>
    </form>
  )
}

function searchExercise() {
  document.getElementById("hi").innerHTML = ""
  var query = document.getElementById("mySelect").value;
  fetch(`https://exercisedb.p.rapidapi.com/exercises/target/${query}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "exercisedb.p.rapidapi.com",
		"x-rapidapi-key": "9b58c6ab21mshdedc4f4547bef06p17c9a4jsn1a0b5e97982a"
	}
  })
  .then(response => response.json())
  .then((jsonData) => {
    const results = jsonData.map(element => element.name);
    const urls = jsonData.map(element => element.gifUrl);
    console.log(results);
    getSearchResults(results);
  });
}

function getSearchResults(results) {
  const list = document.getElementById("hi")
  results.forEach(result => {
    const element = document.createElement("li")
    element.innerText = result;
    list.appendChild(element);
  });
}

function searchBar() {
  return (
    <form onSubmit={handleSubmit}>
      <label>Select Exercise Target</label>
      <p></p>
      <select 
        id="mySelect">
        <option value="abs">abs</option>
        <option value="quads">quads</option>
        <option value="lats">lats</option>
        <option value="pectorals">pectorals</option>
        <option value="glutes">glutes</option>
        <option value="calves">calves</option>
        <option value="hamstrings">hamstrings</option>
        <option value="adductors">adductors</option>
        <option value="triceps">triceps</option>
        <option value="cardiovascular system">cardio</option>
        <option value="biceps">biceps</option>
      </select>
      <button style={{bottom:"90%"}} onClick={searchExercise}> Search </button>
    </form>
  )
}


const ExerciseScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#6ab890"}}>
      <View style={{ flex: 1, padding: 16 , textAlign: "center"
                  }}>
          <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          >
            <View style={{alignItems:"center", marginTop: "22", flex: 1, justifyContent: "center", overflowY:"scroll"}}>
              <View style={{
                shadowColor: "#000", 
                backgroundColor: "white",
                alignItems: "left",
                borderRadius: 20,
                padding: 150,
                shadowOffset: 
                {width: 0, height: 2},}}>
                {searchBar()}
                <p id="hi"></p>
                <Pressable
                  style={{}}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text> close </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <div>
            <Pressable
              onPress={() => setModalVisible(true)}
            >
              <Text style={{color: "white", fontFamily: "Tahoma"}}>Search for Exercises!</Text>
            </Pressable>
            <p></p>
            {Timer()}
            <p 
              id="Timer"
              style={{
                alignItems:"center",
                top: "50%", 
                //position:"relative",
                padding:"8px 16px"
              }}>
              </p>
            <img 
              id="koala"
              style={{
                maxWidth: "65%",
                height: "auto",
                marginLeft: "auto",
                marginRight: "auto",
                display:"none"
              }}
              src={logo}>
            </img>
            <p 
              id="time"
              style={{
                  //textShadow: "#000 0px 0px 2px, #000 0px 0px 2px, #000 0px 0px 2px",
                  //backgroundColor: "gray",
                color: "white",
                fontSize: "50px" , 
                textAlign: "center",
                fontFamily: "Helvetica"
                }}
            />
          </div>

          
      </View>
    </SafeAreaView>
  );
}
export default ExerciseScreen;