import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class YoMama extends Component {
    render() {
        return (
            <View style={styles.gridView}>
                <Image source={require('./images/YoMaMaText.png')} style={styles.imgTitle}/>
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
    imgTitle: {
        width: 280, height: 80,
        marginBottom: 80
    },
    baseText: {
        // fontFamily: 'DK_Crayon_Crumble',
        fontSize: 20,
        margin: 40
    },
});

AppRegistry.registerComponent('YoMama', () => YoMama);
