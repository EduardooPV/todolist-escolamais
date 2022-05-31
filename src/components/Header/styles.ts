import styled from "styled-components";

export const Container = styled.header`
  position: relative;

  h1 {
    display: block;
    margin: 3rem 0;
    font-size: 2rem;
    color: #fff;
    text-align: center;
  }

  a {
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    left: 2%;
    top: 2%;

    border-radius: 0.25rem;
    border: 2px solid transparent;
    background: transparent;
    color: #fff;
    font-size: 1.2rem;

    transition: all 0.2s;

    &:hover {
      border: 2px solid #ff4c6a;
    }
  }
`;
