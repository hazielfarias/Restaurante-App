import React, {useState} from 'react'
import {View, StyleSheet, StatusBar, Text} from 'react-native'
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen=()=>{

    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    const searchApi = async ()=>{
        const response = await yelp.get('/search',{
            params:{
                limit: 50,
                term,
                location: 'san jose'
            }
        })
        setResults(response.data.businesses)
    }

    return <View style={styles.view}>
        <StatusBar backgroundColor="blue" barStyle='light-content' />
        <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={searchApi}
            />
        <Text style={{color:'white',marginHorizontal: 15, marginVertical:5}}>Você obteve {results.length} resultados.</Text>
    </View>

}

const styles = StyleSheet.create({
    view:{
        backgroundColor: '#121212',
        flex: 1
    }
})

export default SearchScreen