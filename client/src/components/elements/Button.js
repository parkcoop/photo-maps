import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';

const Button = ({ label, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "50%",
        backgroundColor: colors.NAVY
    },
    text: {
        color: colors.WHITE
    }
})

export default Button;