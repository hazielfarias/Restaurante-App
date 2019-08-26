import React from 'react'
import {View, StyleSheet, TextInput} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const SearchBar=({term, onTermChange, onTermSubmit})=>{

   

    return <View style={styles.view}>
        <View style={styles.searchBar}>
            <Ionicons name='ios-search' style={styles.icon}/>
            <TextInput 
                style={styles.input} 
                placeholder='Digite aqui sua busca' 
                placeholderTextColor='#cfcfcf' 
                autoCapitalize='none'
                autoCorrect={false}
                value = {term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}

                />
        </View>
        
    </View>

}

const styles = StyleSheet.create({
    view:{
        backgroundColor: '#121212'
    },
    searchBar: {
        backgroundColor: '#383838',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#545454'
    },
    input:{
        flex: 1,
        fontSize: 20,
        color: 'white'
    },
    icon:{
        fontSize: 40,
        marginHorizontal: 10,
        color: 'white'
    } 


})

export default SearchBar