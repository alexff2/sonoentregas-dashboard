import styled from "styled-components"

export const HeaderDiv = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: ${props => props.theme.space[2]}px;

  background-color: ${props => props.theme.colors.primary};
  color: #fff;

  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: ${props => props.theme.borderRadius}rem;
`