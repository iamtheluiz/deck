import styled from 'styled-components'

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: calc(100vh - 32px);
  padding: 8px;
  background-color: #13293D;
`

export const Menu = styled.div`
  flex: 1;
`

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  cursor: pointer;
`

export const MenuItemText = styled.span`
  margin-left: 4px;
  font-size: 16pt;
`

export const Settings = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 42px;
  padding: 0px 12px;
`
