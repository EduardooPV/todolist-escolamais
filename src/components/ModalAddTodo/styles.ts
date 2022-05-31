import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  p {
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
  }

  > div {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    label {
      color: #ccc;
    }

    input {
      width: 100%;
      height: 35px;
      padding: 10px;
      border-radius: 0.25rem;
    }

    div {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;

      button {
        height: 35px;
        font-size: 1.1rem;
        font-weight: bold;
      }

      button:first-child {
        color: #ff4c6a;
        background-color: transparent;
        border: 1px solid #ff4c6a;
        border-radius: 0.25rem;
      }

      button:last-child {
        background: #ee1a6a;
        color: #ccc;
        border: none;
      }
    }
  }
`;
