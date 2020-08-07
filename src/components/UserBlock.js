import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { THEME } from '../styles/theme';

const UserBlock = ({ user, desc }) => {
    return (
        <View style={styles.descriptionWrap}>
            <View style={styles.profWrapper}>
                <Image style={styles.profImage} source={{ uri: user.profile_image.medium }} />
                <Text style={styles.nameText}>{user.name}</Text>
            </View>
            <Text style={styles.descText}>{desc ? desc : '-'}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    descriptionWrap: {},
    profWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profImage: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginTop: 10,
        marginLeft: 10,
    },
    nameText: {
        color: THEME.TEXT_COLOR,
        marginTop: 10,
        marginLeft: 20,
        fontWeight: 'bold',
    },
    descText: {
        color: THEME.TEXT_COLOR,
        marginTop: 10,
        marginLeft: 60,
        marginBottom: 10,
    },
});

export default UserBlock;
