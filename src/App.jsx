import { Normalize } from 'styled-normalize';

import AppLayout from './containers/AppLayout';
import RoutesSwitch from './Router';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <>
      <AppLayout>
        <RoutesSwitch />
      </AppLayout>
      <GlobalStyles />
      <Normalize />
    </>
  );
}

export default App;
