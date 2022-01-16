import styled from '@emotion/styled';
import Link from 'next/link';
import MainMenuItem from './MainMenuItem';

const MainMenuContainer = styled.ul`
  padding: 0;
  display: flex;
  margin: 0;
  height: 100%;
  width: 100%;
  & li {
    list-style: none;
    margin: 0 ${({ theme }) => theme.spacing(1)};
  }
`;

const MainMenu = () => {
  return (
    <MainMenuContainer>
      <li>
        <MainMenuItem href="/services">Services</MainMenuItem>
      </li>
      <li>
        <MainMenuItem href="/portfolio">Portfolio</MainMenuItem>
      </li>
      <li>
        <MainMenuItem href="/about">About</MainMenuItem>
      </li>
      <li>
        <MainMenuItem href="/contact">Contact</MainMenuItem>
      </li>
    </MainMenuContainer>
  );
};

export default MainMenu;
