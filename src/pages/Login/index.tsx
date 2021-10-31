import { useHistory } from "react-router"
import { authLogin } from "../../services/auth"
import { ContainerLogin, FildsLogin, InputField } from "./styles"

const Login: React.FC = (props) => {
  let history = useHistory()

  const login = () => {
    authLogin('teste123')
    history.push('/dashboard')
  }

  return(
    <ContainerLogin>
      <div>
        <header></header>
        <FildsLogin>
          <label htmlFor="user"></label>
          <InputField>
            <input type="text" id="user" />
          </InputField>
          <label htmlFor="password"></label>
          <InputField>
            <input type="text" id="password" />
          </InputField>
          <button onClick={() => login()}>ENTRAR</button>
        </FildsLogin>
      </div>
    </ContainerLogin>
  )
}

export default Login