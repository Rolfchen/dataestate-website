import { PasswordResetForm } from 'de-fend';
import { PageContainer } from '@/styles/layout';
import Link from 'next/link';

const ResetPassword = () => {
  return (
    <PageContainer>
      <PasswordResetForm
        successMessage={
          <>
            Success! your password has been reset. Click{' '}
            <Link href="/admin/login">here</Link> to login again.
          </>
        }
      />
    </PageContainer>
  );
};

export default ResetPassword;
