import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  width: 300px;
  /* height: calc(100vh - 32px); */
  height: calc(100vh);
  padding: 8px;
  background-color: #13293d;
`;

export const Menu = styled.div`
  flex: 1;
`;

export const Settings = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 42px;
  padding: 0px 12px;

  button {
    background-color: transparent;
    border: 0;

    cursor: pointer;
    color: white;
  }
`;
