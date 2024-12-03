import styled from 'styled-components';

export const Layout = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  padding: 20px 0;
  background-color: #000000;
`;

export const Footer = styled.footer`
  padding: 20px 0;
  background-color: #000000;
`;

export const Content = styled.main`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  padding: 40px 16px;
`;

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 24px;
`;

export const Text = styled.p`
  color: #fff;
  text-align: center;
  font-size: 14px;
`;
