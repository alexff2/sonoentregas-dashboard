import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media(max-width: 1000px){
    flex-direction: column;
    align-items: center;
  }
  `
export const ContainerChart = styled.div`
  height: 23rem;
  width: 69.5%;
  margin-bottom: 0.5rem;
  
  padding: ${props => props.theme.space[3]}px;
  border-radius: ${props => props.theme.borderRadius}rem;
  
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
  @media(max-width: 1000px){
    width: 70%;
  }
  @media(max-width: 720px){
    width: 100%;
  }
`