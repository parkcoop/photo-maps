import React, { useState } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import colors from '../../config/colors';


const FormTextInput = ({style, ...otherProps}) => {
   return (
       <TextInput
            selectionColor={colors.NAVY}
            style={[styles.textInput, style]}
            {...otherProps}
        />
   )
}
const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: colors.PLUM
    }
})

export default FormTextInput;