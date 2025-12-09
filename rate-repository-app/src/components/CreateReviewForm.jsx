import { Pressable, TextInput, View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import Text from './Text';
import theme from '../theme';
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
    }
})


const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: '',
}

const validationSchema = yup.object().shape({
    ownerName: yup
        .string()
        .required('Repository owner name is required'),
    repositoryName: yup
        .string()
        .required('Repository name is required'),
    rating: yup
        .number()
        .required('Rating is required')
        .min(0, 'Rating must be between 0 and 100')
        .max(100, 'Rating must be between 0 and 100'),
    text: yup
        .string()
});

const CreateReviewForm = ({onSubmit}) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })

    return (
        <View style={styles.container}>
        <TextInput 
            placeholder='Repository owner name'
            value={formik.values.ownerName}
            onChangeText={formik.handleChange('ownerName')}
            onBlur={formik.handleBlur('ownerName')}
            style={[
            styles.input,
            formik.touched.ownerName && formik.errors.ownerName && styles.inputError
            ]}
        />
        {formik.touched.ownerName && formik.errors.ownerName && (
            <Text style={styles.errorText}>{formik.errors.ownerName}</Text>
        )}
        <TextInput 
            placeholder='Repository name'
            value={formik.values.repositoryName}
            onChangeText={formik.handleChange('repositoryName')}
            onBlur={formik.handleBlur('repositoryName')}
            style={[
            styles.input,
            formik.touched.repositoryName && formik.errors.repositoryName && styles.inputError
            ]}
        />  
        {formik.touched.repositoryName && formik.errors.repositoryName && (
            <Text style={styles.errorText}>{formik.errors.repositoryName}</Text>
        )}
        <TextInput 
            placeholder='Rating between 0 and 100'
            value={formik.values.rating}
            onChangeText={formik.handleChange('rating')}
            onBlur={formik.handleBlur('rating')}
            style={[
            styles.input,
            formik.touched.rating && formik.errors.rating && styles.inputError
            ]}
        />
        {formik.touched.rating && formik.errors.rating && (
            <Text style={styles.errorText}>{formik.errors.rating}</Text>
        )}
        <TextInput 
            placeholder='Review'
            value={formik.values.text}
            onChangeText={formik.handleChange('text')}
            multiline={true}
            style={styles.input}
        />
        <Pressable onPress={formik.handleSubmit} style={styles.press}>
            <Text color='styleSignIn'>Create Review</Text>
        </Pressable>
        </View>
    )
}

export default CreateReviewForm;