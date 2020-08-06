import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { THEME } from '../styles/theme';

const MainScreen = ({ navigation }) => {
    const navigateToPhotoScreen = () => {
        navigation.navigate('Photos');
    };

    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>MainScreen</Text>
            <Button title={'Go to Photo'} onPress={navigateToPhotoScreen} />
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

export default MainScreen;
