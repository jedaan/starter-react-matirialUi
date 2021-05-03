/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import rtl from 'jss-rtl';
import { create } from 'jss';
import {
  StylesProvider,
  jssPreset,
  ThemeProvider
} from '@material-ui/core/styles';
import { useRoutes } from 'react-router-dom';
import GlobalStyles from 'src/components/GlobalStyles';
import theme from 'src/theme';
import routes from 'src/routes';

const jss = create({ plugins: [...jssPreset().plugins] });

const App = () => {
  const routing = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StylesProvider jss={jss}>{routing}</StylesProvider>
    </ThemeProvider>
  );
};

export default App;
