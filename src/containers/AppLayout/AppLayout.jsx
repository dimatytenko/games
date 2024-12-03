import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Layout from '../../components/Layout';

const AppLayout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Layout>{children}</Layout>;
};

export default AppLayout;
