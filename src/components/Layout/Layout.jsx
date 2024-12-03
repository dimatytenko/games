import { Layout, Header, Footer, Content, Title, Text } from './styles';

const LayoutComponent = ({ children }) => {
  return (
    <Layout>
      <Header>
        <Title>Sudoku</Title>
      </Header>
      <Content>{children}</Content>
      <Footer>
        <Text>© {new Date().getFullYear()} Created by love</Text>
      </Footer>
    </Layout>
  );
};

export default LayoutComponent;
