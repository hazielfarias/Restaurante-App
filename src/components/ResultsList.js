import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({title, results})=>{
    return <View style={styles.view}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>Resultados: {results.length}</Text>
        <FlatList
            horizontal={true}
            data={results}
            keyExtractor={(result)=> result.id}
            renderItem={({item})=>{
                return <ResultsDetail result={item}/>
                
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight: 'bold',
        color:'white'
    },
    price:{
        color: 'white'
    },
    view:{
        marginHorizontal:15
    }
})

export default ResultsList