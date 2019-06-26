import React from 'react';
import styled from 'styled-components';

import Logo from '../assets/images/logo.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

const Form = styled.form`
  width: 100%;
  max-width: 320px;
  margin-top: 20px;
  display: flex;
  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    border: 0;
    font-size: 18px;
    color: #444;
    border-radius: 3px;
  }

  button {
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #63f5b6;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background: #52d89f;
    }
  }
`;

const Main = () => (
  <Container>
    <img src={Logo} alt="Github Compare" />

    <Form>
      <input type="text" placeholder="Usuário/repositório" />
      <button type="submit">ok</button>
    </Form>
  </Container>
);

export default Main;
