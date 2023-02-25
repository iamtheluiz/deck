import styled from 'styled-components'

export const Modal = styled.div`
  display: flex;
  flex-direction: row;
  width: 600px;
  height: 460px;
  position: absolute;
  z-index: 999;
  background-color: #13293D;
  padding: 8px;
  border: 2px solid #00000055;
  top: calc((100% - 460px) / 2);
  left: calc((100% - 600px) / 2);
`

export const Container = styled.div`
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

export const Details = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 8px 0px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  overflow: auto;
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
  width: 512px;
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  border: 0px;
  color: white;
  background-color: #00000055;
`

export const Button = styled.button`
  width: 98%;
  padding: 12px 0px;
  border: 0px;
  border-radius: 4px;
  font-size: 16px;
  color: white;
  background-color: #00000055;
  cursor: pointer;
`
