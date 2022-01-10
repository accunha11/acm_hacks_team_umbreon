import React, { useState } from "react";
//import * as React from 'react';
import { 
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Button,
  Alert,
  Modal, 
  Pressable
 } from 'react-native';
 
import logo from '../koalaeat.gif';

let results = 0;
let resultsSize = 0;
let exampleResults = ["this", "is", "an", "example", "list"];

function handleSubmit(e) {
  e.preventDefault();
  console.log("meh");
}

function searchFood() {
  document.getElementById("recipeResults").innerHTML = ""
  var query = document.getElementById("mySearch").value;
  fetch(`https://api.spoonacular.com/recipes/autocomplete?apiKey=0a4860b8d01f4a61bd0787c2b4b7ad6f&number=10&query=${query}`, {
	"method": "GET"
  })
  .then(response => response.json())
  .then((jsonData) => {
    results = jsonData.map(element => element.title);
    resultsSize = results.length;
    const ids = jsonData.map(element => element.id);
    console.log(jsonData);
    getSearchResults(results);
    getSearchIDs(ids);
    //document.getElementById("recipeResults").innerHTML = makeButtonList(results);
    makeButtonList(exampleResults);
    detailedRecipe(ids);
  });



  let buttonArray = document.getElementById("recipeResults");
  buttonArray = makeButtonList(exampleResults);
}

function detailedRecipe(ids) {
  ids.forEach(id => {
    fetch(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=0a4860b8d01f4a61bd0787c2b4b7ad6f`, {
      "method": "GET"
    })
    .then(response => response.json())
    .then((jsonData) => {
      console.log(jsonData);
    });
  });
}

function getSearchResults(results) {
  const list = document.getElementById("recipeResults")
  results.forEach(result => {
    const element = document.createElement("li")
    element.innerText = result;
    list.appendChild(element);
  });
}

function getSearchIDs(ids) {
  const list = document.getElementById("recipeIDs")
  results.forEach(result => {
    const element = document.createElement("li")
    element.innerText = `https://spoonacular.com/${result}`;
    list.appendChild(element);
  });
}


function searchBar() {
  return (
    <form onSubmit={handleSubmit}>
      <p></p>
      <input id="mySearch" type="text" placeholder="search for a recipe"></input>
      <button style={{bottom:"90%"}} onClick={searchFood}> Search </button>
    </form>
  )
}

function makeButton(data) {
  return (
    <form onSubmit={handleSubmit}>
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text> ${data} </Text>
      </Pressable>
    </form>
  )
}

function makeButtonList(results) {
  //const list = document.getElementById("recipeResults")
  const array = [];
  results.forEach(result => {
    const element = document.createElement("li")
    element.innerHTML = makeButton(result)
    array.push(element);
  });
  <div>
    <button> hi </button>
  </div>
  //results.map
}

const FoodScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#FFC0CB"}}>
      <View style={styles.centeredView}>
        

        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}> Recipe Name </Text>
              
              <Button
              title="Favorite"
              onPress={() => Alert.alert('Added to Favorites!')}
              />
              <Button
                title="Add to meal plan"
                onPress={() => Alert.alert('Added to meal plan!')}
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>  
        </Modal> */}

        {/* <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>(Select recipe)</Text>
        </Pressable> */}
        <img 
          id="koalaeat"
          style={{
            maxWidth: "65%",
            height: "auto",
            marginLeft: "auto",
            marginRight: "auto",
            display:"block"
          }}
          src={logo}>
        </img>

        {searchBar()}
        <p id="recipeResults">
        </p>
        <p id="recipeIDs"></p>
        <div id="modal">

        </div>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default FoodScreen;

