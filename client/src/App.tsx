import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/Themes';
import Header from './components/header/Header';
import Main from './components/main/Main'

// https://petstore.swagger.io/#/pet

interface IProps {}

interface IState {
  isDarkMode: boolean
}

class App extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);

    this.state = {
      isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  }

  componentDidMount() {
    const handler = (event: MediaQueryListEvent) => this.setState({ isDarkMode: event.matches });
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handler);
  }

  render() {
    const theme = this.state.isDarkMode ? darkTheme : lightTheme;

    return (
      <ThemeProvider theme={ theme }>
        <>
        <GlobalStyles/>
          <div className='header-container'>
            <div className='max-width-container'>
              <Header title={ 'Timestamp API' }/>
            </div>
          </div>
          <div className='main-container'>
            <div className='max-width-container'>
                <Main />
            </div>
          </div>
        </>
      </ThemeProvider>
    );
  }

}

export default App;