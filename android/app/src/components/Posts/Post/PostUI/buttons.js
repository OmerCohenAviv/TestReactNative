import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

const buttons = (props) => {
    const { isMyButton } = props
    return (
        <View style={styles.buttons}>
            {
                !isMyButton
                    ? <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.addBtn} >
                            <Text style={styles.buttonText}>
                                Add Friend
                            </Text>
                        </TouchableOpacity>
                        <Icon name='add-user' size={20} style={styles.addIcon} />
                    </View>

                    : <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.deleteBtn} >
                            <Text style={styles.buttonText}>
                                Delete Post
                            </Text>
                        </TouchableOpacity>
                        <IconMaterial name='delete' size={20} style={styles.deleteIcon} />
                    </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
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

export default buttons