import styled from '@emotion/styled';
import Link from 'next/link';

const MenuLink = styled.a`
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
`;

interface MainMenuItemProps {
  href: string;
  children?: React.ReactNode;
}

const MainMenuItem = ({ href, children }: MainMenuItemProps) => {
  return (
    <Link href={href} passHref>
      <MenuLink>{children}</MenuLink>
    </Link>
  );
};

export default MainMenuItem;
