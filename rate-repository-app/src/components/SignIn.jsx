import { Pressable, TextInput, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import Text from './Text';
import theme from '../theme';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

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
  inputError: {
    borderColor: theme.colors.error, 
    borderWidth: 1, 
  },
  errorText: {
    color: theme.colors.error, 
    width: '80%',
    marginBottom: 5,
    alignSelf: 'flex-start', 
    marginLeft: '10%',
  },
  press: {
    marginTop: 5,
    width: '100%',
    alignItems: 'center',
  }
})

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const initialValues = {
    username: '',
    password: ''
  }
  
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      console.log('data sign in', data)
      if (data?.authenticate) {
        navigate('/');
      }
    } catch (e) {
      console.log('ERROR:', e)
    }
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder='Username'
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        style={[
          styles.input,
          formik.touched.username && formik.errors.username && styles.inputError
        ]}
      />
      {formik.touched.username && formik.errors.username && (
        <Text style={styles.errorText}>{formik.errors.username}</Text>
      )}
      <TextInput 
        placeholder='Password'
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        style={[
          styles.input,
          formik.touched.password && formik.errors.password && styles.inputError
        ]}
        secureTextEntry
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={styles.errorText}>{formik.errors.password}</Text>
      )}
      <Pressable onPress={formik.handleSubmit} style={styles.press}>
        <Text color='styleSignIn'>Sign in</Text>
      </Pressable>
    </View>
  )
};

export default SignIn;