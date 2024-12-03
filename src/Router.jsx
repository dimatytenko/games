import { Route, Routes } from 'react-router-dom';

import { routes } from './constants/routes';
import Home from './containers/Home';
import Sudoku from './containers/Sudoku';

// const NotFound = lazy(() => import('./pages/NotFound'));

const PublicRoutes = [
  <Route key="home" path={routes.home} element={<Home />} />,
  <Route key="sudoku" path={routes.sudoku + '/:level'} element={<Sudoku />} />,
];

const RoutesSwitch = () => {
  return (
    <Routes>
      {PublicRoutes}
      <Route
        path="*"
        element={
          <div>
            <h1>Not Found</h1>
          </div>
        }
      />
    </Routes>
  );
};

export default RoutesSwitch;
