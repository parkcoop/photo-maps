import React, { useState } from 'react';
import { StyleSheet, Image, View, ScrollView,ActivityIndicator, AsyncStorage, StatusBar, KeyboardAvoidingView, Text } from 'react-native';
import strings from '../../config/strings';
import Button from "../../components/elements/Button";
import FormTextInput from "../../components/elements/FormTextInput"
import colors from "../../config/colors"
import imageLogo from '../../assets/images/logo-black.png';

import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


// const SIGNUP = gql`
//   mutation Signup($username: String!, $password: String!) {
//     signup(username:$username, password:$password) {
//         user 
//         token
//     }
//   }
// `;



const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username:$username,password:$password) {
        user {
          username
        }
        token
    }
  }
`;



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, { authPayload }] = useMutation(LOGIN);

  const handleUsernameChange = (input) => {
      setUsername(input)
  }

  const handlePasswordChange = (input) => {
      setPassword(input)
  }

  handleLoginPress = () => {
    console.log(username, password)
      login({variables: {username, password}})
      .then(payload=>{
        console.log('payloadthen', payload)
      })
      .catch(err=>{
        console.log(err)
      })

      console.log('payload', authPayload)
  }

  return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <Image source={imageLogo} style={styles.logo} />
          <View  style={styles.form}>
              <FormTextInput
                  value={username}
                  onChangeText={handleUsernameChange}
                  placeholder={strings.USERNAME_PLACEHOLDER}
              />
              <FormTextInput
                  value={password}
                  onChangeText={handlePasswordChange}
                  placeholder={strings.PASSWORD_PLACEHOLDER}
              />
              <Button label={strings.LOGIN} onPress={handleLoginPress} />
          </View>
      </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "80%"
  },
  logo: {
    // width: 0
    marginTop: 150,
    width: 310,
    height: 35
  },
  text: {
    color: 'white'
  }
})
  


export default Login