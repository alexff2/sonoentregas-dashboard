import styled from "styled-components"

export const HeaderDiv = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${props => props.theme.colors.primary};
  color: #fff;

  height: 5vh;
  font-size: 1.2rem;
  padding: 0 0.8rem;
  margin-bottom: 0.5rem;
  border-radius: ${props => props.theme.borderRadius}rem;

  div {
    input[type=date] {
      height: 2rem;
      border: none;
      outline: none;
      background-color: transparent;
      cursor: pointer;
    }
    input[type=date]::-webkit-calendar-picker-indicator {
      background-color: #fff;
    }
  }

`
