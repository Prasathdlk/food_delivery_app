import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Button
} from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container1}>
          <Image
            style={styles.imageContainer}
            source={{
              uri: "https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381319.jpg",
            }}
          />
        </View>
        <View style={styles.container2}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={styles.ButtonContainer}>
            <Button title="Login" color={"white"} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  container1: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container2: {
    flex: 1,
    //backgroundColor: 'blue',
    width: "90%",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 400,
    height: 200,
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    color: "black",
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    padding: 15,
    width: 300,
    borderRadius: 10,
  },
  ButtonContainer:{
    backgroundColor:"orange",
    padding:5,
    width:150,
    borderRadius:10,
    //alignSelf:'flex-start',
    //marginHorizontal:20
  }
});
