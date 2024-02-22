import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.aboutcontainer}>
      <Text style={styles.mainheader}>Abdey Ali</Text>
      <Text style={styles.parastyle}>Iam a full stack Developer</Text>
      <View>
        <Image style={styles.imgstyle}  source={require('../../assets/OIP.jpeg')} />
      </View>
      <View style={styles.aboutlayout}>
<Text style={styles.aboutsubheader}>About ME</Text>
<Text style={[styles.parastyle , {color:"white"}]}>nsnc  c kanncknknaknk a cksanca s c f ew ewqqw dknjnci jjushdwsaxu uauhuc iqsjid juyhtgre tgre jyhtgr ytgre htgre ytre uytre jytre</Text>
      </View>
      <Text style={styles.mainheader}>Foolow me on social network</Text>
      <View style={styles.menucontainer}>

        <TouchableOpacity style={styles.buttonstyle} onPress={()=>Linking.openURL('https://www.youtube.com/')}>
      <Image style={styles.iconstyle}  source={{uri: "https://img.icons8.com/fluency/48/000000/youtube-play.png"}}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonstyle} onPress={()=>Linking.openURL('https://www.youtube.com/')}>
      <Image style={styles.iconstyle}  source={{uri: "https://img.icons8.com/fluency/48/instagram-new.png"}}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonstyle} onPress={()=>Linking.openURL('https://www.youtube.com/')}>
      <Image style={styles.iconstyle}  source={{uri: "https://img.icons8.com/fluency/48/linkedin.png"}}/>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}
export default About

const styles = StyleSheet.create({
  aboutcontainer:{
    display:"flex",
    alignItems:"center",
    height:"100%"
  },
  imgstyle:{
    width:150,
    height:150,
    borderRadius:100,
  },
  mainheader:{
    fontSize:18,
    color:"#344055",
    textTransform:"uppercase",
    marginTop:50,
    marginBottom:10,
    
  },
  parastyle:{
fontSize:18,
color:'#7d7d7d',
paddingBottom:30
  },
  aboutlayout:{
    backgroundColor:'#4c5dab',
    paddingHorizontal:30,
    marginVertical:30,
  },
  aboutsubheader:{
    fontSize:18,
    color:'#fff',
    textTransform:"uppercase",
    marginVertical:15,
    alignSelf:"center"
  },
  menucontainer:{
width:"100%",
flexDirection:"row",
justifyContent:'space-evenly',
  },
  iconstyle:{
    width:50,
    height:50,
    // aspectRatio:1
  }
})
