import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 500px;
  }

  h1 {
    font-size: 54px;
    color: ${({ theme }) => theme.colors.blue};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
    color: ${({ theme }) => theme.colors.text};
  }
`;
