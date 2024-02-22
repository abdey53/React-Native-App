import { StyleSheet, Text, TouchableOpacity, View , Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const Menu = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.menuConatainer}>
<TouchableOpacity style={styles.buttonStyle} onPress={()=>{navigation.navigate('Course')}}>
    <Image style={styles.imageConatainer} source={{uri: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-courses-recruitment-agency-flaticons-lineal-color-flat-icons.png"}}/>
</TouchableOpacity>

<TouchableOpacity style={styles.buttonStyle} onPress={()=>{navigation.navigate('UserData')}}>
    <Image style={styles.imageConatainer} source={{uri: "https://img.icons8.com/dusk/64/000000/students.png"}}/>
</TouchableOpacity>

<TouchableOpacity style={styles.buttonStyle} onPress={()=>{navigation.navigate('About')}}>
    <Image style={styles.imageConatainer} source={{uri: "https://img.icons8.com/fluency/48/000000/about.png"}}/>
</TouchableOpacity>

<TouchableOpacity style={styles.buttonStyle} onPress={()=>{navigation.navigate('Contact')}}>
    <Image style={styles.imageConatainer} source={{uri: "https://img.icons8.com/color/48/000000/phone.png"}}/>
</TouchableOpacity>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    menuConatainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
    },
    imageConatainer:{
        width:"100%",
        height:45,
        aspectRatio:1
    }
    
})

