import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1440px;

  margin: 0 auto;
  padding: 0 5%;

  h2 {
    color: #ccc;
    margin-bottom: 30px;

    @media (min-width: 768px) {
      margin-bottom: 60px;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;

  @media (min-width: 768px) {
    gap: 40px;
  }
`;
