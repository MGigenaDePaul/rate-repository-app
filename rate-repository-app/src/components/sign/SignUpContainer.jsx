import { Pressable, TextInput, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import Text from '../Text';
import theme from '../../theme';
import * as yup from 'yup';

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
    },

})

const initialValues = {
    username: '',
    password: '',
    passwordConfirmation: '',
}

const validationSchema = yup.object().shape({
    username: yup 
        .string()
        .required('Username is required'),
    password: yup 
        .string()
        .required('Password is required')
        .min(5, 'Password length must be between 5 and 30')
        .max(30, 'Password length must be between 5 and 30'),
    passwordConfirmation: yup
        .string()
        .required('Password confirmation is required')
        .oneOf([yup.ref('password')], 'Passwords must match')
})

const SignUpContainer = ({onSubmit}) => {
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
                onChange={formik.handleChange('username')}
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
                onChange={formik.handleChange('password')}
                style={[
                    styles.input,
                    formik.touched.password && formik.errors.password && styles.inputError
                ]}
                secureTextEntry
            />
            {formik.touched.password && formik.errors.password && (
                <Text style={styles.errorText}>{formik.errors.password}</Text>
            )}
            <TextInput 
                placeholder='Password confirmation'
                value={formik.values.passwordConfirmation}
                onChange={formik.handleChange('passwordConfirmation')}
                style={[
                    styles.input,
                    formik.touched.passwordConfirmation && formik.errors.passwordConfirmation && styles.inputError
                ]}
                secureTextEntry
            />
            {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation && (
                <Text style={styles.errorText}>{formik.errors.passwordConfirmation}</Text>
            )}
            <Pressable onPress={formik.handleSubmit} style={styles.press}>
                <Text color='styleSign'>Sign up</Text>
            </Pressable>
        </View>
    )
}   

export default SignUpContainer;