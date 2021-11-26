import { useNavigate } from "react-router-dom"

import { ContainerLogin, BoxLogin, FildsLogin, InputField } from "./styles"

import { authLogin } from "../../services/auth"

import sonoImg from '../../img/Sono.jpeg'

const Login: React.FC = (props) => {
  const navigate = useNavigate()

  const login = () => {
    authLogin('teste123')
    navigate('/app/dashboard')
  }

  return(
    <ContainerLogin>
      <BoxLogin>
        <img src={sonoImg} alt="Logo Sono e Arte"/>

        <FildsLogin>
          <InputField>
            <input type="text" id="user"  placeholder="Digite seu usuário..."/>
          </InputField>
          <InputField>
            <input type="password" id="password" placeholder="Digite sua senha..."/>
          </InputField>
          <button onClick={() => login()}>ENTRAR</button>
        </FildsLogin>
      </BoxLogin>
    </ContainerLogin>
  )
}

export default Login