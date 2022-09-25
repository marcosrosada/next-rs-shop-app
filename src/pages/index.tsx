import type { NextPage } from 'next';
import { styled } from '../styles';

const Button = styled('button', {
  backgroundColor: '$green500',
  borderRadius: 4,
  border: 0,
  padding: '4px 8px',

  '&:hover': {
    filter: 'brightbess(0.8)',
  },
});

const Home: NextPage = () => {
  return (
    <>
      <div>Hello Word</div>
      <Button>Enviar</Button>
    </>
  );
};

export default Home;
