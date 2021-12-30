import { useRouter } from 'next/router';
import { LoginForm } from 'de-fend';
import { PageContainer } from '@/styles/layout';
import Link from 'next/link';

const Login = () => {
  const router = useRouter();
  const handleSuccess = () => {
    router.push('/admin');
  };
  return (
    <PageContainer>
      <LoginForm
        onSuccess={handleSuccess}
        forgotPasswordLink={
          <Link href="/admin/user/forgot-password">Forgot your password?</Link>
        }
      />
    </PageContainer>
  );
};

export default Login;
