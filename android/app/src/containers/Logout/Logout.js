import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import DangerButton from '../../components/UI/Buttons/DangerBtn/DangerBtn';
import WarningButton from '../../components/UI/Buttons/WarningBtn/WarningBtn';


class Logout extends Component {


    logoutHandler = () => {
        
        return this.props.onLogout()
    }
    cancelLogoutHandler = () => {
        const { navigation } = this.props
        navigation.navigate('Dashboard');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Are You Sure You Want To Logout?</Text>
                </View>
                <View style={styles.btnContainer}>
                    <View style={{marginRight: 10}}>
                        <DangerButton btnText='Logout' handleSubmit={this.logoutHandler} />
                    </View>
                    <WarningButton btnText='Cancel' handleSubmit={this.cancelLogoutHandler}/>
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleContainer: {
        alignItems: 'center',
        marginTop: 7
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logoutUser())
    }
}

export default connect(null, mapDispatchToProps)(Logout);