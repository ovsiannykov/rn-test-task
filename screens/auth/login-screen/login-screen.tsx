import React, { memo, useState, useCallback, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

import AuthContext from '../../../context/authContext';
import styles from './login-screen.styles';

/*
==========================================================================================
По поводу валидации:
По нормальному нало использовать Formik или Zod, если проект на TS
Четкого ТЗ по поводу валидации не было, поэтому сделал примитивную проверку без библиотек
==========================================================================================
*/

const LoginScreen = memo(() => {
  const [mail, setMail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [mailError, setMailError] = useState<string>('');
  const [passError, setPassError] = useState<string>('');

  const { setToken } = useContext(AuthContext);

  const validateMail = useCallback((text: string) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(text);
  }, []);

  const isValidMail = validateMail(mail);
  const isValidPass = pass.length >= 8;

  const addTokenHandler = useCallback(async () => {
    try {
      await AsyncStorage.setItem('@token', 'token_expale');
      await setToken('token_expale');
    } catch (e) {
      console.log(e);
    }
  }, [setToken]);

  const buttonHandler = () => {
    if (!isValidMail) {
      setMailError('Please enter valid email');
    } else {
      setMailError('');
    }
    if (!isValidPass) {
      setPassError('Password must be at least 8 characters');
    } else {
      setPassError('');
    }

    if (isValidMail && isValidPass) {
      addTokenHandler();
    }
    return;
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <KeyboardAvoidingView>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Enter Email"
            value={mail}
            onChangeText={setMail}
            style={styles.input}
            autoComplete="email"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <View style={styles.errorBox}>
            <Text style={styles.errorText}>{mailError}</Text>
          </View>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Enter Password"
            value={pass}
            onChangeText={setPass}
            style={styles.input}
            autoComplete="password"
            secureTextEntry
          />
          <View style={styles.errorBox}>
            <Text style={styles.errorText}>{passError}</Text>
          </View>
        </KeyboardAvoidingView>
        {mail.length > 0 && pass.length > 0 ? (
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={buttonHandler}>
              <Text style={styles.buttonTitle}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
});

export default LoginScreen;
