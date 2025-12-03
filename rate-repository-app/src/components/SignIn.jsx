import SignInContainer from './SignInContainer';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      if (data?.authenticate) {
        navigate('/');
      }
    } catch (e) {
      console.log('ERROR:', e)
    }
  }

  return (
    <SignInContainer onSubmit={onSubmit} />
  )
};

export default SignIn;