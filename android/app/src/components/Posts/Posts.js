import React from 'react';
import { FlatList, View, Text} from 'react-native';
import Post from './Post/Post';

const posts = (props) => {
    const { posts } = props
    const _renderItem = ({ item }) => {
        return <Post
            image={item.image_url}
            title={item.title}
            key={item.post_id} />
    };
    return (
        <View style={{flex:1}}>
            <FlatList
                data={posts}
                renderItem={_renderItem}
                keyExtractor={item => `${item.post_id}`}
            />
        </View>
    );
};

export default posts;