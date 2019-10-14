import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Btn from '../../components/UI/Buttons/PrimaryBtn/PrimaryBtn'
import * as actions from '../../store/actions/index';

class Follow extends Component {
    componentDidMount() {
        this.props.onGetMyFollowers(this.props.token)
    }
    switchToFollowingHandler = () => {
        const { navigation } = this.props
        return navigation.navigate('Following')
    }
    render() {
        let myFollowers = <ActivityIndicator />
        if (this.props.followers) {
             myFollowers = this.props.followers.map(follower => {
                return <Text key={follower.email} style={styles.followerText}>{follower.email}</Text>
            })
        }
        return (
            <View style={styles.conatiner}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>My Followers </Text>
                </View>
                <View style={{marginTop:10}}>
                    <Btn btnText={'People I Follow'} handleSubmit={this.switchToFollowingHandler} />
            
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 14 }}>
                    {myFollowers}
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