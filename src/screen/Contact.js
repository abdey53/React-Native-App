import { StyleSheet, Text, View ,TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Checkbox from "expo-checkbox";

const Contact = ({navigation}) => {
const [name , setname]=useState("");
const [email , setemail]=useState('');
const [phone , setphone]=useState('');
const [message , setmessage]=useState('');
const [agree , setagree]=useState(false);

const submit=()=>{
  if(!name && !email && !phone && !message && !agree){
    Alert.alert("PLz Fill All the Field")
  }
  else{
    Alert.alert(`Thank You ${name}`)
    navigation.navigate('Home')
  }
}

  return (
    <View style={styles.maincontainer}>
      <Text style={styles.mainheader}>Level Up Your Knowledge</Text>
      <Text style={styles.discription}>You can reach Us anytime Via abdeyali535353@gmail.com</Text>

<View style={styles.inputcontainer}>
  <Text style={styles.labels}>Enter Your Name</Text>
  <TextInput style={styles.inputstyle}  placeholder='Enter Your Name' value={name} onChangeText={(e)=>setname(e)}/>
</View>

<View style={styles.inputcontainer}>
  <Text style={styles.labels}>Enter Your Email</Text>
  <TextInput style={styles.inputstyle} placeholder='Enter Email' value={email} onChangeText={(e)=>setemail(e)}/>
</View>

<View style={styles.inputcontainer}>
  <Text style={styles.labels}>Enter Your Mobile Number</Text>
  <TextInput style={styles.inputstyle} placeholder='Enter Mobile Number' value={phone} onChangeText={(e)=>setphone(e)}/>
</View>

<View style={styles.inputcontainer}>
  <Text style={styles.labels}>How can i help you?</Text>
  <TextInput style={[styles.inputstyle, styles.multilinestyle]} numberOfLines={5} multiline={true} placeholder='Tell me about your self' value={message} onChangeText={(e)=>setmessage(e)}/>
</View>

<View style={styles.wrapper}>
<Checkbox  value={agree} onValueChange={()=>setagree(!agree)} color={agree ? "#4630EB" : undefined}/>
<Text style={styles.wrappertext}>I Have Read and agreed With the Tc</Text>
</View>

  <TouchableOpacity disabled={!agree} onPress={submit} style={[styles.buttonstyle , {backgroundColor: agree ? "#4630EB" : "grey"}]}>
    <Text style={styles.buttontext}>Submit</Text>
  </TouchableOpacity>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
  maincontainer:{
    height:'100%',
    paddingHorizontal:30,
    backgroundColor:"#fff"
  },
  mainheader:{
    fontSize:20,
    color:"#344055",
    paddingTop:20,
    paddingBottom:15,
  },
  discription:{
    fontSize:20,
    color:'#7d7d7d',
    paddingBottom:20,
    lineHeight:25
  },
  inputcontainer:{
paddingTop:20
  },
  labels:{
fontWeight:"bold",
color:'#7d7d7d',
paddingBottom:5,
lineHeight:25
  },
  inputstyle:{
    borderWidth:1,
    borderColor:"rgba(0,0,0,0.3)",
    paddingHorizontal:15,
    paddingVertical:6,
    borderRadius:2
  },
  multilinestyle:{
paddingVertical:4
  },
  buttonstyle:{
borderRadius:5,
paddingVertical:10,
paddingHorizontal:18,
display:'flex',
justifyContent:'center',
alignItems:'center',
marginVertical:10,
  },
  buttontext:{
color:"white",
  },
  wrapper:{
display:"flex",
flexDirection:"row",
marginTop:20,
  },
  wrappertext:{
    marginLeft:10,
    color:"#7d7d7d",

  }

})