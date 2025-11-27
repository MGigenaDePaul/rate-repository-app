import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  itemLanguage: {
    color: theme.colors.whiteText,
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 5,
  },
  fontSizeHeading: {
    fontSize: theme.fontSizes.heading,
    marginBottom: 12
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
    marginBottom: 10
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  signInButton: {
    color: theme.colors.whiteText,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 5,
    textAlign: 'center', 
    width: '80%',
  }
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'white' && styles.itemLanguage,
    color === 'styleSignIn' && styles.signInButton,
    fontSize === 'heading'  && styles.fontSizeHeading,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;