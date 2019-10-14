import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import InputText from '../../components/UI/Inputs/registerInput/registerInput'
import PrimaryBtn from '../../components/UI/Buttons/PrimaryBtn/PrimaryBtn';
import * as actions from '../../store/actions/index';

class AddPost extends Component {
    state = {
        title: '',
        image: ''
    };

    changeValueHandler = (event, type) => {
        this.setState({ [type]: event })
    }
    submitPostHandler = () => {
        const { title, image } = this.state
        const { navigation, token } = this.props
        this.props.onAddPost(title, image, token)
        navigation.navigate('Dashboard')
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>New Post</Text>
                </View>
                <View style={styles.inputs}>
                    <InputText placeholder='Title' type='title' handleChangeValue={this.changeValueHandler} />
                    <Text>maximum image 400 X 400 pixels </Text>
                    <InputText placeholder='Image' type='image' handleChangeValue={this.changeValueHandler} />
                </View>
                <PrimaryBtn
                    btnText='Submit'
                    handleSubmit={() => this.submitPostHandler()}
                    disable={this.state.title === '' || this.state.image === ''} />
            </View>
        );
    };
};
const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
        marginTop: 4,
        marginBottom: 8
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    inputs: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: (title, image, token) => dispatch(actions.addPostInit(title, image, token))
    }
}
const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);