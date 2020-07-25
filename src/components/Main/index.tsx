import * as S from './styles';

const Main = ({ title = 'Next.js Boilerplate' }) => {
  return (
    <S.Wrapper>
      <h1>{title}</h1>
    </S.Wrapper>
  );
};

export default Main;
