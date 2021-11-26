import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 37% 20% 20%;
  grid-template-rows: 35vh 55vh;
  grid-gap: 1%;
  grid-template-areas: "a1 a2 a3 a4" "a5 a5 a5 a6";

  @media(max-width: 860px){
    display: flex;
    flex-direction: column;
    align-items: center;

  }
`

const BoxDefault = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
  padding: ${props => props.theme.space[3]}px;
  border-radius: ${props => props.theme.borderRadius};
  
  @media(max-width: 860px){
    width: 80%;
    height: 18rem;
    margin-bottom: 0.5rem;
  }
  
  @media(max-width: 720px){
   width: 100%;
  }

  @media(max-width: 500px){
    height: 16rem;
  }
`

export const Box1 = styled(BoxDefault)`
  grid-area: a1;
  align-items: center;
  justify-content: space-between;
  
  label {
    font-size: 5rem;
    @media(min-width: 860px) and (max-width: 1130px){
      font-size: 3.5rem;
    }
  }
`
export const Box2 = styled(BoxDefault)`
  grid-area: a2;
`
export const Box3 = styled(BoxDefault)`
  grid-area: a3;
  
  h2 {
    text-align: center;
    margin-bottom: 0.5rem;
  }
  h3 {
    margin-bottom: 0.3rem;
  }
  div {
    display: flex;
    justify-content: space-between;

    span:last-child {
      font-weight: 800;
    }
  }
`
export const Box4 = styled(Box3)`
  grid-area: a4;
`

export const BoxChart = styled(BoxDefault)`
  grid-area: a5;

  justify-content: space-between;
  `

export const Box5 = styled(BoxDefault)`
  grid-area: a6;
`
