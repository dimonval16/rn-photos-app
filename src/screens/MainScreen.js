import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { THEME } from '../styles/theme';
import { getAllPhotosAC, setPhotoInPhotoScreenAC } from '../redux/actions/photosAction';
import ImgSmall from '../components/ImgSmall';

const MainScreen = ({ navigation, getAllPhotos, photosData, setPhotoInPhotoScreen }) => {
    useEffect(() => {
        getAllPhotos();
    }, []);

    const handlePhotoPress = (url) => {
        setPhotoInPhotoScreen(url);
        navigation.navigate('Photo');
    };

    if (!photosData.length) {
        return (
            <View style={styles.wrapperError}>
                <Text style={styles.text}>Opps... There are no photos.</Text>
            </View>
        );
    }

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={photosData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ImgSmall
                        url={item.urls.regular}
                        onPhotoPress={handlePhotoPress}
                        user={item.user}
                        desc={item.alt_description}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: THEME.BG_COLOR,
    },
    wrapperError: {
        flex: 1,
        backgroundColor: THEME.BG_COLOR,
        alignItems: 'center',
        padding: 30,
    },
    text: {
        color: THEME.TEXT_COLOR,
    },
});

const mapState = (state) => ({
    photosData: state.mainScreen.photosArr,
});

const mapDispatch = (dispatch) => ({
    getAllPhotos: () => dispatch(getAllPhotosAC()),
    setPhotoInPhotoScreen: (url) => dispatch(setPhotoInPhotoScreenAC(url)),
});

export default connect(mapState, mapDispatch)(MainScreen);
