import { DashboardNavBar, signOutUser } from 'de-fend';
import ProtectedContentWrapper, {
  LoginMethod,
} from './ProtectedContentWrapper';
import { PageContainer } from '../../styles/layout';
import { MenuItem } from '@mui/material';
import { useRouter } from 'next/router';

interface DashboardFrameProps {
  isProtected?: boolean;
  loginMethod?: LoginMethod;
  children?: React.ReactNode;
}

const DashboardFrame = ({
  children,
  isProtected = true,
  loginMethod = 'redirect',
}: DashboardFrameProps) => {
  const router = useRouter();
  const FrameContainer = isProtected ? ProtectedContentWrapper : 'div';

  const handleLogout = async () => {
    const isSignedOut = await signOutUser();
    if (isSignedOut) {
      router.push('/admin/login');
    }
  };

  return (
    <FrameContainer loginMethod={loginMethod}>
      <DashboardNavBar
        title="Data Estate"
        profileMenuItems={
          <>
            <MenuItem>My Account</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </>
        }
      />
      <PageContainer as="main">{children}</PageContainer>
    </FrameContainer>
  );
};

export default DashboardFrame;
