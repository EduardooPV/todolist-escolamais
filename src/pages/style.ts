import styled from "styled-components";
import { TodoProps } from "src/types";

export const Container = styled.main`
  width: 100%;
  max-width: 1000px;

  margin: 0 auto;
  padding: 0 5%;

  > button {
    margin: 0 auto 2rem;
    padding: 0.5rem 0.8rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    font-size: 1.05rem;
    background: transparent;
    color: #fff;
    border: 1px solid #ff4c6a;
    border-radius: 0.5rem;
    transition: all 0.2s;

    &:hover {
      background: rgba(255, 106, 106, 0.2);
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.div<TodoProps>`
  padding: 1rem 1.2rem;

  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  transition: all 0.2s;

  &::after {
    content: "";
    display: block;

    width: 100%;
    height: 1px;

    margin: 0 auto;

    position: absolute;
    top: 0;
    left: -50%;
    right: -50%;

    border-radius: 50%;
    background: rgba(50, 50, 50, 0.4);
  }

  &:hover {
    background: rgba(50, 50, 50, 0.4);
  }

  input[type="checkbox"] {
    position: relative;
    cursor: pointer;
    margin-right: 1.2rem;
  }
  input[type="checkbox"]:before {
    content: "";
    width: 20px;
    height: 20px;

    display: block;

    position: absolute;
    top: -0.3em;
    left: 0;

    border-radius: 4px;
    background-color: #e9e9e9;
  }
  input[type="checkbox"]:checked:before {
    content: "";
    width: 20px;
    height: 20px;

    display: block;

    position: absolute;
    top: -0.3rem;
    left: 0;

    background-color: #ff4c6a;
  }
  input[type="checkbox"]:checked:after {
    content: url("/check.png");
    display: block;
    width: 10px;
    height: 10px;

    position: absolute;
    top: -0.5rem;
    left: 0;
  }

  > div {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      width: 90%;
      color: ${(props) => (props.statusChecked ? "#888" : "#fff")};
      text-decoration: ${(props) =>
        props.statusChecked ? "line-through" : "none"};
    }

    span {
      width: 35px;
      height: 35px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;
      color: rgba(255, 76, 106, 0.8);
      border: 1px solid rgba(255, 76, 106, 0.5);

      font-size: 0.9rem;
    }
  }
`;
