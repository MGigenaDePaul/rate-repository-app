import SignUpContainer from './SignUpContainer';
import useSignIn from '../../hooks/useSignIn';
import { useNavigate } from 'react-router-native';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../graphql/mutations';

const SignUp = () => {
  const [createUser] = useMutation(CREATE_USER);
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await createUser({ 
        variables: {
          user: {
            username, password 
          }
        }
      });
      console.log('data created user', data?.createUser);
      if (data?.createUser) {
        await signIn({username, password});
        navigate('/')
      }
    } catch (e) {
        console.log('ERROR', e);
    }
   
  }

  return (
    <SignUpContainer onSubmit={onSubmit} />
  )
};

export default SignUp;