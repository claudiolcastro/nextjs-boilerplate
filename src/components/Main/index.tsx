import * as S from './styles';

const Main = ({ title = 'React Avançado' }) => {
  return (
    <S.Wrapper>
      <h1>{title}</h1>
    </S.Wrapper>
  );
};

export default Main;
