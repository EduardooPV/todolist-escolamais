import styled from "styled-components";

export const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.8)",
    backdropFilter: "blur(2px)",
  },
  content: {
    maxWidth: "400px",
    background: " #111111",
    border: "1px solid #ff4c6a",
    height: "fit-content",
    width: "70%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const Container = styled.div`
  position: relative;

  padding: 60px 40px 40px 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  > button {
    padding: 5px;

    position: absolute;
    top: 1rem;
    right: 1rem;

    border-radius: 0.5rem;
    border: none;
    background: transparent;
    transition: background 0.1s;

    &:hover {
      background: rgba(100, 100, 100, 0.3);
    }

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
      outline-color: #ff4c6a;
      outline-width: 2px;
    }
  }

  p {
    font-size: 1.4rem;
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
      border: none;

      &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
        outline-color: #ff4c6a;
        outline-width: 2px;
      }
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
        border-radius: 0.25rem;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.7);
        }

        &:focus {
          outline: 2px solid transparent;
          outline-offset: 2px;
          outline-color: #ff4c6a;
          outline-width: 2px;
        }
      }

      button:first-child {
        color: #ff4c6a;
        background-color: transparent;
        border: 1px solid #ff4c6a;
      }

      button:last-child {
        background: #ee1a6a;
        color: #ccc;
        border: none;
      }
    }
  }
`;
