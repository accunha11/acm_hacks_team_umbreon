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
    const results = jsonData.map(element => element.title);
    const urls = jsonData.map(element => `https://api.spoonacular.com/recipes/`+element.id+'/analyzedInstructions');
    console.log(jsonData);
    getSearchResults(results);
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

function searchBar() {
  return (
    <form onSubmit={handleSubmit}>
      <p></p>
      <input id="mySearch" type="text" placeholder="search for a recipe"></input>
      <button style={{bottom:"90%"}} onClick={searchFood}> Search </button>
    </form>
  )
}

const FoodScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
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
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>(Select recipe)</Text>
      </Pressable>
      {searchBar()}
      <p id="recipeResults"></p>
    </View>
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

