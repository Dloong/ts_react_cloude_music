import React from 'react';
import IconStyle from '@/assets/iconfont/iconfont';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import GlobalStyle from './style';
import { routes } from './routes'

console.log(routes)
function App(): JSX.Element {
  return (
      <div className="App">
          <HashRouter>
              <GlobalStyle />
              <IconStyle />
              { renderRoutes(routes) }
          </HashRouter>

      </div>
  );
}

export default App;
