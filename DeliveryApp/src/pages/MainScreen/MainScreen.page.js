import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getResturants } from '../../redux/actions';
import { selectResturants } from '../../redux/selectors';

import { MainPage } from './MainPage'

function MainPageContainer(props) {
    useEffect(() => {
        props.getResturants()
    }, []) 
    console.log(props.resturants, 'state')
    return (
        <MainPage navigation={props.navigation} resturants={props.resturants}/>
    );
}

const mapStateToProps = (state) =>  ({
    resturants: selectResturants(state)  
})

const mapDispatchToProps = dispatch => ({
    getResturants: () => dispatch(getResturants())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer)

