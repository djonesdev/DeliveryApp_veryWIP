import React from 'react'
import { View, Text, Button, FlatList, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux';

import { MainPage } from './MainPage'

function MainPageContainer(props, { navigation }) {
    alert(`${props.state}`, 'state')
    return (
        <MainPage navigation={navigation}/>
    );
}

const mapStateToProps = (state) =>( {
    state  
})

export default connect(mapStateToProps)(MainPageContainer)

