import React, {useState} from 'react'
import {View, StyleSheet, StatusBar, Text, ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from "../components/ResultsList";

const SearchScreen= ({navigation}) =>{
    
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice=(price)=>{
        return results.filter(result => {
            return result.price === price
        })
    }
    return <>
     <View style={styles.view}>
        <StatusBar backgroundColor="blue" barStyle='light-content' />
        <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={()=>searchApi(term)}
            />
        {errorMessage ? <Text style={{color:'white',marginHorizontal: 15, marginTop:5}}>{errorMessage}</Text> : null}
        <ScrollView>
            <ResultsList 
                results={filterResultsByPrice('$')} 
                title='Custo baixo'
                navigation={navigation}/>
            <ResultsList 
                results={filterResultsByPrice('$$')} 
                title='Custo Médio'
                navigation={navigation}
                />
            <ResultsList 
                results={filterResultsByPrice('$$$')} 
                title='Alto Custo'
                navigation={navigation}
                /> 
        </ScrollView>
    </View>
    </>

}

const styles = StyleSheet.create({
    view:{
        backgroundColor: '#121212',
        flex: 1
    }
})

export default SearchScreen