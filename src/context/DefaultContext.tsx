import DashboardProvider from "./DashboardContext"
import EmissaoProvider from "./EmissaoContext"

const DefaultContext: React.FC = ({children}) => {
  return(
    <EmissaoProvider>
      <DashboardProvider>{children}</DashboardProvider>
    </EmissaoProvider>
  )
}

export default DefaultContext