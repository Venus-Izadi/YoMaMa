import React, {Component} from 'react';
import {
    AppRegistry,
    NavigatorIOS,
    StyleSheet
} from 'react-native';

import Main from './ios/YoMama/Components/Main';

export default class YoMama extends Component {
    render() {
        return (
            <NavigatorIOS style={styles.wrapper}
                initialRoute={{
                 title: 'My initial scene',
                 index: 0,
                 component: Main,
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    }
});


AppRegistry.registerComponent('YoMama', () => YoMama);
