import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  min-height: 150px;
  background-color: #00000035;
  padding: 8px;
  border-top: 2px solid #00000055;
  position: relative;
`

export const Close = styled.button`
  position: absolute;
  right: 0;
  top: 0%;
  padding: 4px;
  border: 0;
  color: white;
  background-color: transparent;
  cursor: pointer;
`

export const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
  margin: 8px;
  border-radius: 8px;
  background-color: #00000055;
  pointer-events: none; /* Disable image drag */
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0px;
`

export const InputField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px;
`

export const Label = styled.label`
  width: 64px;
  padding: 4px;
  text-align: right;
`

export const Input = styled.input`
  width: 300px;
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  border: 0px;
  color: white;
  background-color: #00000055;
`
