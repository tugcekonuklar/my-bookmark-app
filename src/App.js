import { BrowserRouter, useRoutes } from 'react-router-dom';
import GlobalStyles from './component/GlobalStyles'
import routes from './routes';

function App() {
  const routing = useRoutes(routes);
  return (
    <>
      <GlobalStyles />
      {routing}
    </>

  );
}

export default App;
