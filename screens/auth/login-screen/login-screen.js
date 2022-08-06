import React, { memo, useState, useEffect, useCallback, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

import styles from './login-screen.styles';
import AuthContext from '../../../context/authContext';

/*
==========================================================================================
По поводу валидации:
По нормальному нало использовать Formik или Zod, если проект на TS
Четкого ТЗ по поводу валидации не было, поэтому сделал примитивную проверку без библиотек
==========================================================================================
*/

const LoginScreen = memo(() => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [mailError, setMailError] = useState('');
  const [allValid, setAllValid] = useState(false);

  const { setToken } = useContext(AuthContext);

  const validateMail = useCallback(text => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(text);
  }, []);

  useEffect(() => {
    const isValidMail = validateMail(mail);
    !isValidMail ? setMailError('Please enter valid email') : setMailError('');
  }, [mail]);

  useEffect(() => {
    const isValidMail = validateMail(mail);
    if (isValidMail && pass.length >= 8) {
      setAllValid(true);
    }
  }, [mail, pass]);

  const addTokenHandler = useCallback(async () => {
    try {
      await AsyncStorage.setItem('@token', 'token_expale');
      await setToken('token_expale');
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Wellcome!</Text>
      <View style={styles.container}>
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
            {pass.length < 8 ? (
              <Text style={styles.errorText}>Password must be at least 8 characters long</Text>
            ) : null}
          </View>
        </KeyboardAvoidingView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={allValid ? styles.button : styles.buttonDisabled}
            disabled={!allValid}
            onPress={addTokenHandler}
          >
            <Text style={styles.buttonTitle}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
});

export default LoginScreen;
