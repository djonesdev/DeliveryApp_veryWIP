import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getResturants } from '../../redux/actions';

import { MainPage } from './MainPage'

function MainPageContainer(props, { navigation }) {
    useEffect(() => {
        props.getResturants()
    }, []) 
    console.log(props.state.rootReducer.resturants, 'state')
    return (
        <MainPage navigation={navigation}/>
    );
}

const mapStateToProps = (state) =>  ({
    state  
})

const mapDispatchToProps = dispatch => ({
    getResturants: () => dispatch(getResturants())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer)

