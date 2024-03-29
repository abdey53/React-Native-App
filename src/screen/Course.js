import { FlatList, StyleSheet, Text, View , Image, Button, TouchableOpacity} from 'react-native'
import React from 'react'
import courses from '../api/Course'

const Course = ({navigation}) => {
  return (
    <FlatList data={courses} keyExtractor={(item)=> item.id} renderItem={(element)=>{
        return(
            <View style={styles.mainContainer}>
<View style={styles.courseContainer}>
<View >
<Image style={styles.cardimage} source={element.item.image} resizeMode='contain'/>
</View>
<Text style={styles.mainHeader}>{element.item.title}</Text>
<Text style={styles.description}>{element.item.description}</Text>

<View style={styles.buttoncontainer}>
    <TouchableOpacity style={styles.buttonstyle} onPress={()=>navigation.navigate('CourseDeatils')}>
        <Text style={styles.buttontext}>Course Details</Text>
    </TouchableOpacity>
</View>

</View>
            </View>
        )
    }}/>
  )
}

export default Course

const styles = StyleSheet.create({
    cardimage:{
        width:"100%",
        height:undefined,
        aspectRatio:1
    },
    mainContainer:{
paddingHorizontal:20
    },
    courseContainer:{
        padding:30,
        backgroundColor:"rgba(255 , 255 , 255 , 0.90)",
        textAlign:"center",
        borderRadius:5,
        shadowColor:"grey",
        shadowOffset:{width: 0, height: 0},
        shadowOpacity:0.5,
        shadowRadius:8,
        elevation:8,
        marginVertical:30
    },
    mainHeader:{
        fontSize:22,
        color:"#344055",
        textTransform:'uppercase',
        paddingBottom:15,
        textAlign:"center",
    },
    description:{
        textAlign:"left",
        paddingBottom:15,
        lineHeight:17,
        fontSize:15,
        color:"#7d7d7d"
    },
    buttoncontainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:'center',
    },
    buttonstyle:{
backgroundColor:'#809fff',
borderRadius:5,
paddingVertical:10,
paddingHorizontal:20,
display:"flex",
justifyContent:'center',
alignItems:'center'
    },
    buttontext:{
        fontSize:19,
        color:"#eee",
        textTransform:'capitalize'
    }

    
})