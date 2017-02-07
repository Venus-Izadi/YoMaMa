import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class Main extends React.Component{

    render(){
        return(
            <View style={styles.gridView}>
                <Text style={styles.titleText}>YoMaMa</Text>
                <Text style={styles.baseText}>Mommy, How many weeks have I been in your tummy?</Text>
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    gridView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'
    },
    titleText: {
      fontSize: 38,
    },
    baseText: {
        // fontFamily: 'DK_Crayon_Crumble',
        fontSize: 20,
        margin: 40
    },
});

