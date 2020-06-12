import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { getResturants } from '../../redux/actions';
import { selectResturants, selectResturantLoading } from '../../redux/selectors';

import { MainPage } from './MainPage'

function MainPageContainer(props) {
    const { getResturants, isLoading } = props
    useEffect(() => {
        getResturants()
    }, []) 
    return (
        isLoading ? (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#483d8b" />
            </View>
            ) : ( 
            <MainPage navigation={props.navigation} resturants={props.resturants}/>
            )
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });

const mapStateToProps = (state) =>  ({
    resturants: selectResturants(state),
    isLoading: selectResturantLoading(state)
})

const mapDispatchToProps = dispatch => ({
    getResturants: () => dispatch(getResturants())
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer)
