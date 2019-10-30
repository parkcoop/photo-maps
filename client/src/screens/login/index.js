import React, { useState } from 'react';
import { StyleSheet, Image, View, ScrollView,ActivityIndicator, AsyncStorage, StatusBar, KeyboardAvoidingView } from 'react-native';
import strings from '../../config/strings';
import Button from "../../components/elements/Button";
import FormTextInput from "../../components/elements/FormTextInput"
import colors from "../../config/colors"
import imageLogo from '../../assets/images/logo-black.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (input) => {
      setEmail(input)
  }

  const handlePasswordChange = (input) => {
      setPassword(input)
  }

  handleLoginPress = () => {
      console.log('login pressed')
  }

  return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <Image source={imageLogo} style={styles.logo} />
          <View  style={styles.form}>
              <FormTextInput
                  value={email}
                  onChangeText={handleEmailChange}
                  placeholder={strings.EMAIL_PLACEHOLDER}
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
  }
})
  


export default Login