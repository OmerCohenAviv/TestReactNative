import React, { Component } from 'react';
import { View,Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Dashboard extends Component {
    componentDidMount() {
        this.props.onGetAllPosts(this.props.token)
    }
    render() {
        return (
            <View>
                <Text>Check</Text>
            </View>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetAllPosts: (token) => dispatch( actions.getAllPostsInit(token) )
    };
};
const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);


