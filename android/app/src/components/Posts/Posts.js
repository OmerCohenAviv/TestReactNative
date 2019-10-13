import React from 'react';
import { FlatList, View, Text } from 'react-native';
import Post from './Post/Post';

const posts = (props) => {
    const { posts, handleAddFriend, handleDeletePost, token } = props
    const _renderItem = ({ item }) => {
        return <Post
            token={token}
            handleAddFriend={handleAddFriend}
            handleDeletePost={handleDeletePost}
            isMyPost={item.is_my_post}
            image={item.image_url}
            title={item.title}
            postID={item.post_id}
            userID={item.user_id}
            key={item.post_id} />
    };
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={posts}
                renderItem={_renderItem}
                keyExtractor={item => `${item.post_id}`}
            />
        </View>
    );
};

export default posts;