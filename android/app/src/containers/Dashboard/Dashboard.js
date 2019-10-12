import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Posts from '../../components/Posts/Posts'

class Dashboard extends Component {
    componentDidUpdate() {
        console.log(this.props, 'heyasdad')
        if (this.props.token && !this.props.posts) {
            console.log('get posts')
            this.props.onGetAllPosts(this.props.token)
        };
    };
    render() {
        console.log(this.props.posts)
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 27, marginBottom: 12 }}>All Posts</Text>
                {
                    this.props.posts
                        ?  this.props.loading ?  <ActivityIndicator size="large" color="#0000ff" />  : <Posts posts={this.props.posts} />
                        : <Text>Please Login first :)</Text>
                }
            </View>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetAllPosts: (token) => dispatch(actions.getAllPostsInit(token))
    };
};
const mapStateToProps = state => {
    return {
        token: state.auth.token,
        posts: state.dashboard.posts,
        loading: state.dashboard.loading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);


