import styled from '@emotion/styled';
import { DataEstateLogo, SimpleNavBar } from 'de-fend';
import MainMenu from '../Navigation/MainMenu';

interface PageContainerStyleProps {
  top?: string;
}

const StandardPageFrameContainer = styled.div``;

const PageContainer = styled.div`
  padding-top: ${({ top }: PageContainerStyleProps) => top};
  height: 100vh;
`;

interface StandardPageFrameProps {
  children: React.ReactNode;
}

/**
 * Page frame used for most pages. The site's
 * navigation can be found here
 * @param param0
 * @returns
 */
const StandardPageFrame = ({ children }: StandardPageFrameProps) => {
  const menuHeight = '72px';
  return (
    <StandardPageFrameContainer>
      <SimpleNavBar
        logo={
          <DataEstateLogo
            variant="color"
            height="100%"
            width="auto"
            withText={true}
            orientation="horizontal"
          />
        }
        height={menuHeight}
      >
        <MainMenu />
      </SimpleNavBar>
      <PageContainer top={menuHeight}>{children}</PageContainer>
    </StandardPageFrameContainer>
  );
};

export default StandardPageFrame;
