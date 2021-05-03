import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#F4F6F8',
      default: colors.common.white,
      paper: colors.common.white
    },
    primary: {
      light: '#0091D5',
      main: '#1C4E80',
      transparent: opacity => `rgba(0, 145, 213, ${opacity})`
    },
    secondary: {
      main: '#7E909A'
    },
    dark: '#202020',
    light: 'F1F1F1',
    white: '#FFFFFF',
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600]
    },
    danger: {
      main: '#e53935'
    },
    warning: {
      main: '#fb8c00'
    },
    success: {
      main: '#43a047',
      dark: '#2c8630'
    }
  },
  shadows,
  typography
});

export default theme;
