import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Following extends Component {
    componentDidMount() {
        this.props.onGetWhoIFollow(this.props.token)
    };

    render() {
        let IFollow = <ActivityIndicator />
        if (this.props.following) {
            IFollow = this.props.following.map(follower => {
                return <Text key={follower.email} style={styles.followerText}>{follower.email}</Text>
            })
        }
        return (
            <View style={styles.conatiner}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Who I am Following </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 14 }}>
                    {IFollow}
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    conatiner: {
        flex: 1
    },
    titleContainer: {
        alignItems: 'center'
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 15,
    },
    followerText: {
        fontWeight: 'bold',
        fontSize: 15,
    }

})

const mapDispatchToProps = dispatch => {
    return {
        onGetWhoIFollow: (token) => dispatch(actions.getWhoIFollowInit(token))
    };
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        following: state.follow.following
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Following);