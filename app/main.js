import React, {Component} from 'react'
import {View} from "react-native"
import {Constants} from "expo"
import Header from "../component/Header"
import SearchBar from "../component/SearchBar"
import NewsList from "../component/NewsList"

export default class Main extends Component {
    render() { 
        return ( <View style={{flex:1,marginTop: Constants.statusBarHeight}}>
<Header/>
<SearchBar/>
<NewsList/>

        </View>);
    }
}
 
