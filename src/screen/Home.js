import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'
import Menu from '../components/Menu'

const Home = (props) => {
  const description = "Users\LENOVO\OneDrive\Pictures\Desktop\React_Native\projectsnode_modules\expo\AppEntry.js"
  return (
    <View style={styles.mainContainer}>
      <View style={styles.hometop}>
        <Image style={styles.headerImage} source={require('../../assets/academy.jpg')} resizeMode='contain' />
        <Text style={styles.mainheader}>Welcome to </Text>
        <Text style={styles.mainheader}>AbdeyAli NAtive App</Text>
        <Text style={styles.parastyle}>{description}</Text>
      </View>
      <View>
        <View style={styles.lineStyle}></View>
        <Menu></Menu>
        <View  style={[styles.lineStyle, {marginVertical:10} ]}></View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  mainContainer:{
    height:"100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal:20,
    backgroundColor:"#fff",
    textAlign:"center",
  },
  hometop:{
display:"flex",
justifyContent:"center",
alignItems:"center",
paddingHorizontal:10,
  },

  headerImage:{
height: "60%",
width:"100%",
display:"flex",
alignItems:"stretch",
borderRadius:20
  },
  mainheader:{
    fontSize:29,
    color:"#344055",
    textTransform:"uppercase"
  },
  parastyle:{
    textAlign:"left",
    fontSize:16,
    color:'#7d7d7d',
    marginTop:20,
    lineHeight:24
  },
  lineStyle:{
    marginBottom:7,
    borderWidth:1,
    borderColor:"grey", 
  }

})
