import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const BoxLogin = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: ${props => props.theme.borderRadius};

  img {
    width: 15rem;
    margin-bottom: 1rem;
  }
`

export const InputField = styled.div`
  input {
    background-color: transparent;
    border: none;
    color: ${props => props.theme.colors.backgroud};
    padding: 0.5rem 0;
  }
  input:focus{
    outline: transparent;
  }

  border-bottom: 2px solid ${props => props.theme.colors.backgroud};
  margin-bottom: 1.5rem;
  opacity: 0.6;
  transition: 0.3s;
  
  :hover {
    opacity: 1;
  }
`

export const FildsLogin = styled.div`
  button {
    margin-top: 1rem;
    width: 100%;
    border: none;
    border-radius: ${prop => prop.theme.borderRadius};
  }
  button:hover {
    opacity: 0.6;
  }
`
