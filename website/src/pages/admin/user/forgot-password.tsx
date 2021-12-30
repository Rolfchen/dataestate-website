import { PasswordResetRequest } from 'de-fend';
import { PageContainer } from '@/styles/layout';
import Link from 'next/link';

const ForgotPassword = () => {
  return (
    <PageContainer>
      <PasswordResetRequest
        loginLink={<Link href="/admin/login">Back to login</Link>}
      />
    </PageContainer>
  );
};

export default ForgotPassword;
