import React from 'react';

import GlobalStyle from './styles/global';

import Main from './pages/Main';

const App = () => (
  <>
    <GlobalStyle />
    <div className="App">
      <Main />
    </div>
  </>
);

export default App;
