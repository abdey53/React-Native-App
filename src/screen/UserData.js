import { FlatList, StyleSheet, Text, View , Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const UserData = () => {

const[isloaded , setIsLoaded]=useState(true)
const[data , setdata]=useState([])

 const  getUserData = async()=>{
 const response = await fetch("https://thapatechnical.github.io/userapi/users.json")
 const realData = await response.json()
console.log(realData)
setdata(realData);
setIsLoaded(false)
}
    useEffect(()=>{
   getUserData()
    },[])

  return (
    <View>
        <Text style={styles.mainheader}>List of Students</Text>
<FlatList data={data} horizontal renderItem={(aaa)=>{
    return(
        <View style={styles.card}>
       <View style={styles.imgcontainer}>
<Image style={styles.imgStyle} source={{uri: aaa.item.image}}/>
       </View>
      <View>
      <View style={styles.biodataconatiner}>
        <Text style={styles.biodata}>Bio-Data</Text>
        <Text style={styles.idNumber}>{aaa.item.id > 0 ? `#0${aaa.item.id}` : `#${aaa.item.id}`}</Text>
      </View>
      </View>
      <View style={styles.mainContent}>
      <Text style={styles.myName}>Name: {aaa.item.name}</Text>
      <Text style={styles.myName}>Email: {aaa.item.email}</Text>
      <Text style={styles.myName}>Mobile: {aaa.item.mobile}</Text>
      </View>
        </View>
    )
}}/>
    </View>
  )
}

export default UserData

const styles = StyleSheet.create({
    maincontainer:{
        width:"100%",
// minHeight:"100%",
paddingVertical:50,
backgroundColor:"#ebedee"
    },
    card:{
        width:250,
        height:350,
        backgroundColor:"#fff",
        borderRadius:5,
        margin:20
    },
    biodataconatiner:{
width:"100%",
display:"flex",
flexDirection:"row",
alignItems:"center",
justifyContent:"space-between",
backgroundColor:"grey",
paddingVertical:10,
    },
    biodata:{
fontSize:30,
color:"#fff",
paddingLeft:5
},
idNumber:{
        fontSize:20,
        color:"#fff",
        paddingRight:5
    },
    mainheader:{
        fontSize:30,
        color:"#al8ce5",
        textAlign:"center",
        color:'grey',
    },
    imgcontainer:{
padding:10
    },
    imgStyle:{
        width:"100%",
     height:180
    },
    mainContent:{
        padding:10,
        backgroundColor:"#353535",
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
    },
    myName:{
        fontSize:14,
        color:'#fff',
        marginBottom:10,
        alignItems:'flex-start',
        textTransform:'capitalize',

    }
})