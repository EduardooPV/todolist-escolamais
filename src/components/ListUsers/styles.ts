import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 1440px;

  margin: 0 auto;
  padding: 0 5%;
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`

export const CardUser = styled.a`
  width: 250px;
  margin: 20px 0;
  padding: 10px;

  border: 1px solid #ccc;
  text-decoration: none;

  h3 {
    font-size: 1.3rem;
    color: #111;
  }

  p {
    color: #555;
  }

  span {
    font-size: 0.9rem;
    color: #555;
  }
`
