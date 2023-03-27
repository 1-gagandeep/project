import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image, } from 'react-native';

import styleComponent from "./styleComponent";

function SignUp_page() {
  return (
    <SafeAreaView style={styleComponent.container}>
      <View style={styleComponent.upper}>
        <Text style={styleComponent.text}>Register Page</Text>
      </View>

      <View>

        <Text style={styleComponent.upText1} >Create An Account</Text>
        <TextInput placeholder='First Name'  style={styleComponent.input1} required></TextInput>
        <TextInput placeholder='Last Name' style={styleComponent.input1} required></TextInput>
        <TextInput placeholder='Contact No.'  style={styleComponent.input1} required></TextInput>
        <TextInput placeholder='Email'  style={styleComponent.input1} required></TextInput>
        <TextInput placeholder="Password"   secureTextEntry style={styleComponent.input1} required></TextInput>
        <TextInput placeholder="Confirm Password" secureTextEntry style={styleComponent.input1} required></TextInput>

        <TouchableOpacity style={styleComponent.upButton} >
          <Text style={styleComponent.upTextButton}>SignUp</Text>
        </TouchableOpacity>



      </View>

      <View style={styleComponent.lowerUp}></View>
    </SafeAreaView>

  );
}

export default SignUp_page