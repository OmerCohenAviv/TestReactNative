import React, { Component }from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';


class Logout extends Component {
    // componentDidMount() {
    //     this.props.onLogout()
    // }
    render() {
        return (
            <View>
                <Text>Hey</Text>
            </View>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logoutUser() )
    }
}

export default connect(null, mapDispatchToProps)(Logout);