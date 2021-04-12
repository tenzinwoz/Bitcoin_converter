import { ThemeProvider } from '@material-ui/core';
import { customTheme } from './muiTheme/Theme';
import { Provider } from 'react-redux';
import store from './redux/Store';
import './App.css';
import Landing from './components/Landing';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <Landing />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
