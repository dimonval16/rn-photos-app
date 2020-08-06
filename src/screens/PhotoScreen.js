import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { THEME } from '../styles/theme';

const PhotoScreen = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>PhotoScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: THEME.BG_COLOR,
    },
    text: {
        color: THEME.TEXT_COLOR,
    },
});

export default PhotoScreen;
