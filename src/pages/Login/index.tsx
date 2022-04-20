import { useState } from 'react'
import { useNavigate } from "react-router-dom"

import { ContainerLogin, BoxLogin, FildsLogin, InputField } from "./styles"

import { authLogin } from "../../services/auth"
import api from "../../services/api"

import sonoImg from '../../img/Sono.jpeg'

const Login: React.FC = (props) => {
  const [ user, setUser ] = useState('')
  const [ password, setPassword ] = useState('')

  const navigate = useNavigate()

  const login = () => {
    api
      .post('/login', {
        user, password, codloja: 0
      })
      .then( resp => {
        if (resp.data.auth){
          authLogin('teste123')
          navigate('/app/dashboard')
        } else {
          alert('Senha inválida!')
        }
      })
      .catch( err => {
        alert('Erro na conexão com o banco')
        console.log(err)
      })
  }

  return(
    <ContainerLogin>
      <BoxLogin>
        <img src={sonoImg} alt="Logo Sono e Arte"/>

        <FildsLogin>
          <InputField>
            <input
              type="text"
              id="user"
              placeholder="Digite seu usuário..."
              onChange={ e => setUser(e.target.value) }
            />
          </InputField>
          <InputField>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha..."
              onChange={ e => setPassword(e.target.value) }
            />
          </InputField>
          <button onClick={() => login()}>ENTRAR</button>
        </FildsLogin>
      </BoxLogin>
    </ContainerLogin>
  )
}

export default Login