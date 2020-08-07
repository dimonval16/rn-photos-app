import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Image } from 'react-native';
import { THEME } from '../styles/theme';

const PhotoScreen = ({ photoScreen }) => {
    return (
        <View style={styles.wrapper}>
            <Image style={styles.imgStyle} source={{ uri: photoScreen.photoUrl }} />
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
    imgStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

const mapState = (state) => ({
    photoScreen: state.photoScreen,
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(PhotoScreen);
