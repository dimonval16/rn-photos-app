import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store/index';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './src/navigation/AppNavigation';
import MainScreen from './src/screens/MainScreen';
import PhotoScreen from './src/screens/PhotoScreen';
import { THEME } from './src/styles/theme';

const styleOptions = {
    headerStyle: {
        backgroundColor: THEME.HEADER_BG,
        shadowColor: THEME.HEADER_BG,
    },
    headerTintColor: THEME.TEXT_COLOR,
};

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name={'Library'} component={MainScreen} options={styleOptions} />
                        <Stack.Screen name={'Photos'} component={PhotoScreen} options={styleOptions} />
                    </Stack.Navigator>
                </NavigationContainer>
                <StatusBar style={'auto'} />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
