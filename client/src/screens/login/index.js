import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView,ActivityIndicator, AsyncStorage, StatusBar } from 'react-native';
import strings from '../../config/strings';
import Button from "../../components/elements/Button";
import FormTextInput from "../../components/elements/FormTextInput"
import colors from "../../config/colors"


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
      <View style={styles.container}>
          {/* <Image source={imageLogo} style={styles.logo} /> */}
          <View style={styles.form}>
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
      </View>
  )
}

const styles = {
  container: {
    backgroundColor: colors.PLUM,

  },
  form: {
    flex: 1,
    width: "80%"
  }
}

export default Login