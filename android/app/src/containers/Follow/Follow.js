import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Follow extends Component {
    componentDidMount() {
        this.props.onGetMyFollowers(this.props.token)
    }
    render() {

        return (
            <View style={styles.conatiner}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Follow Page</Text>
                </View>
                <Text>
                    {JSON.stringify(this.props.followers)}
                </Text>
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
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onGetMyFollowers: (token) => dispatch(actions.getMyFollowersInit(token))
    };
};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        followers: state.follow.followers
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Follow);