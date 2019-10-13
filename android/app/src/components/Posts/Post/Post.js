import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons'
import Buttons from './PostUI/buttons';


const post = (props) => {
    const {
        title,
        userID,
        postID,
        token,
        image,
        handleAddFriend,
        handleDeletePost,
        isMyPost } = props
    return (
        <View style={styles.post}>
            <Text style={styles.title}>{title}</Text>
            <Image
                style={styles.image}
                source={{ uri: image }} />
            <Buttons
                token={token}
                postID={postID}
                handleAddFriend={handleAddFriend}
                handleDeletePost={handleDeletePost}
                isMyPost={isMyPost}
                userID={userID} />
        </View>
    );
};

const styles = StyleSheet.create({
    post: {
        padding: 12,
        display: 'flex',
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        marginBottom: 4,
        alignItems: 'flex-start',
    },
    title: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 18,
        alignSelf: 'flex-start',
        marginLeft: 37
    },
    image: {
        marginTop: 8,
        width: 200,
        height: 200,
        resizeMode: 'stretch',
        borderRadius: 15,
    },


})


export default post;