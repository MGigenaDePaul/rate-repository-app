import { Pressable, TextInput, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.whiteText,
    padding: 10,
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 5,
    color: theme.colors.textSecondary,
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    padding: 5,
    paddingLeft: 10
  },
  press: {
    marginTop: 5,
    width: '100%',
    alignItems: 'center',
  }
})

const SignIn = () => {
  const initialValues = {
    username: '',
    password: '',
  }

  const onSubmit = (values) => {
    console.log(values)
  }

  const formik = useFormik({
    initialValues,
    onSubmit
  })

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder='Username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        style={styles.input}
      />
      <TextInput 
        placeholder='Password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        style={styles.input}
        secureTextEntry
      />
      <Pressable onPress={formik.handleSubmit} style={styles.press}>
        <Text color='styleSignIn'>Sign in</Text>
      </Pressable>
    </View>
  )
};

export default SignIn;