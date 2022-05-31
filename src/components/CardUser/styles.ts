import styled from "styled-components";

export const Container = styled.a`
  /* width: 250px; */
  padding: 10px;

  border: 2px solid #ff4c6a;
  border-radius: 0.25rem;
  text-decoration: none;

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    outline-color: #fff;
    outline-width: 2px;
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
