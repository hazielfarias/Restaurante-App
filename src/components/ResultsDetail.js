import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

const ResultsDetail=({result})=>{
    return <View style={styles.view}>
        
        <Image
            style={styles.image}
            source={{uri: result.image_url}}
        />
        <Text style={styles.title}>{result.name}</Text>
        <Text style={styles.review}>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
}

const styles=StyleSheet.create({
    view:{
        marginTop: 5,
        marginRight:5,
        width:250
    },
    title:{
        fontSize:18,
        fontWeight: 'bold',
        color:'white'
    },
    image:{
        width: 250, 
        height: 120,
        borderRadius: 4
    },
    review:{
        color: 'white'
    }
})

export default ResultsDetail