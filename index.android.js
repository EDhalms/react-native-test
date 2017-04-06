/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    Image,
    PixelRatio
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#dfcbed'
    },
    header: {
        height: 50,
        backgroundColor: '#aa9dfe'
    },
    content: {
        flex: 1,
        backgroundColor: '#13c5fe'
    },
    footer: {
        height: 50,
        backgroundColor: '#aa9dfe'
    }
});

export default class ReactNativeAndroidTest extends Component {

    onChangeInput = (text) => {
        console.log(text);
    };

    render() {
        console.log('Hello world1!');

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>Header</Text>
                </View>
                <ScrollView style={styles.content}>
                    <Text>Content start</Text>
                    <Image
                        style={{width: 500, height: 500}}
                        source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                    />
                    <Text>Content middle</Text>
                    <Image
                        style={{width: 500, height: 500}}
                        source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                    />
                    <Text>Content end</Text>
                </ScrollView>
                <View style={styles.footer}>
                    <Text>Footer</Text>
                </View>
            </View>

        );
    }
}

AppRegistry.registerComponent('ReactNativeAndroidTest', () => ReactNativeAndroidTest);
