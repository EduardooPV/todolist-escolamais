import styled from "styled-components";

export const Container = styled.a`
  width: 250px;
  margin: 20px 0;
  padding: 10px;

  border: 2px solid #ff4c6a;
  border-radius: 0.25rem;
  text-decoration: none;

  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  h3 {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    color: #fff;
  }

  p {
    color: #bbb;
  }

  span {
    font-size: 0.9rem;
    color: #bbb;
  }
`;
