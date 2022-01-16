import StandardPageFrame from '@/domain/App/StandardPageFrame';
import { usePageQuery } from 'de-cms';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { data } = usePageQuery('home');
  return (
    <StandardPageFrame>
      <div>Hello World</div>
    </StandardPageFrame>
  );
};

export default Home;
