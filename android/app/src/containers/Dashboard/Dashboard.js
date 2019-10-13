import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Posts from '../../components/Posts/Posts'

class Dashboard extends Component {
    componentDidMount() {
        if (this.props.token && !this.props.posts) {
            this.props.onGetAllPosts(this.props.token)
        };
    }
    componentDidUpdate() {
        if (this.props.token && !this.props.posts && this.props.error === null) {
            this.props.onGetAllPosts(this.props.token)
        };
        if (!this.props.token && this.props.posts) {
            this.props.onRemovePosts()
        }
    };
    addFriendHandler = (userID) => {
        return this.props.onAddFriend(userID);
    };
    deletePostHandler = (postID, token) => {
        return this.props.onDeletePost(postID, token)
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 27, marginBottom: 12 }}>All Posts</Text>
                {
                    this.props.posts
                        ? this.props.loading
                            ? <ActivityIndicator size="large" color="#0000ff" />
                            : <Posts
                                token={this.props.token}
                                posts={this.props.posts}
                                handleDeletePost={this.deletePostHandler}
                                handleAddFriend={this.addFriendHandler}/>
                        : <Text>Please Login first :)</Text>
                }
            </View>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetAllPosts: (token) => dispatch(actions.getAllPostsInit(token)),
        onAddFriend: (userID) => dispatch(actions.addFollowerInit(userID)),
        onDeletePost: (postID, token) => dispatch(actions.deletePostInit(postID, token))
    };
};
const mapStateToProps = state => {
    return {
        token: state.auth.token,
        posts: state.dashboard.posts,
        loading: state.dashboard.loading,
        error: state.dashboard.error
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);


