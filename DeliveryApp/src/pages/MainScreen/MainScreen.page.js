import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getResturants } from '../../redux/actions';

import { MainPage } from './MainPage'

function MainPageContainer(props) {
    useEffect(() => {
        props.getResturants()
    }, []) 
    console.log(props.state, 'state')
    return (
        <MainPage navigation={props.navigation}/>
    );
}

const mapStateToProps = (state) =>  ({
    state  
})

const mapDispatchToProps = dispatch => ({
    getResturants: () => dispatch(getResturants())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer)

