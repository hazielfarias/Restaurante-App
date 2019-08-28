import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import yelp from '../api/yelp'
import { FlatList } from 'react-native-gesture-handler';

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult]=useState(null)
    const id = navigation.getParam('id')
    
    
    const getResult = async (id) =>{
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }
    console.log(result)
    useEffect(()=>{
        getResult(id)
    }, [])
    
    if (!result){
        return null
    }


    return <View style={{flex:1, backgroundColor:'#121212'}}>
        <View style={styles.view}>
            <Text style={styles.text}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo)=> photo}
                renderItem={({item})=>{
                    return <Image 
                    source={{uri:item}}
                    style={styles.image}/>
                }}
            />
        </View>
    </View>
}

const styles=StyleSheet.create({
    text:{
        color: 'white',
        fontSize: 20,
        marginBottom:5,
        fontWeight: 'bold'
    },
    view:{
        margin: 15,
        backgroundColor: '#121212',
        flex: 1
    },
    image:{
        width:300,
        height:200,
        marginBottom: 10
    }
})
backgroundColor:'black'
export default ResultsShowScreen
