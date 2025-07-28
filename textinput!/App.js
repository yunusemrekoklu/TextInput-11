import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [email,setEmail]=useState("");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput 
      style={{width:200,height:200,borderWidth:4,padding:15,
      }}
      placeholder ='email...'
      placeholderTextColor={"red"}
      autoCapitalize="none"
      inputMode="email"
      maxLength={30}
      multiline
      /* editable={false}      ekrandaki yazı sabitlenir            */
      value ={email}
      onChangeText={(e)=>{setEmail(e);}}
      
      />

      <Text style={{fontSize:30}}>{email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
