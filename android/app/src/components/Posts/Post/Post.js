import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons'


const post = (props) => {
    const { title, image } = props
    console.log(image)
    return (
        <View style={styles.post}>
            <Text style={styles.title}>{title}</Text>
            <Image
                style={styles.image}
                source={{ uri: image }} />
            <View style={styles.buttons}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.addBtn} >
                        <Text style={styles.buttonText}>Add Friend</Text>
                    </TouchableOpacity>
                    <Icon name='add-user' size={20} style={styles.addIcon} />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.deleteBtn} >
                        <Text style={styles.buttonText}>Delete Post</Text>
                    </TouchableOpacity>
                    <IconMaterial name='delete' size={20} style={styles.deleteIcon} />
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    post: {
        padding: 12,
        display: 'flex',
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        marginBottom: 4,
        alignItems: 'flex-start',
    },
    title: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 18,
        alignSelf: 'flex-start',
        marginLeft: 37
    },
    image: {
        marginTop: 8,
        width: 200,
        height: 200,
        resizeMode: 'stretch',
        borderRadius: 15,
    },
    buttons: {
        alignSelf: 'flex-end'
    },
    addBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#485a96',
        borderWidth: .5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,

    },
    deleteBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e41',
        borderWidth: .5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        textAlign: 'center',
        marginBottom: 4,
        marginRight: 20,
        padding: 15
    },
    addIcon: {
        backgroundColor: '#485a96',
        padding: 10,
        marginLeft: 0,
        color: 'white',
        height: 40
    },
    deleteIcon: {
        backgroundColor: '#dc4e41',
        padding: 10,
        marginLeft: 0,
        color: 'white',
        height: 40
    }


})


export default post;