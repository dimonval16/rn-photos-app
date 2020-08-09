import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import UserBlock from './UserBlock';

const ImgSmall = ({ url, onPhotoPress, user, desc }) => {
    return (
        <View style={styles.imgWrap}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => onPhotoPress(url)}>
                <Image
                    style={styles.imgStyle}
                    source={{
                        uri: url,
                    }}
                />
            </TouchableOpacity>
            <UserBlock user={user} desc={desc} />
        </View>
    );
};

const styles = StyleSheet.create({
    imgWrap: {
        height: 350,
        padding: 10,
        paddingBottom: 100,
    },
    imgStyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

export default ImgSmall;
