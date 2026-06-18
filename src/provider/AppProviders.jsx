import { ThemeProviderWrapper } from '../context/ThemeContext'
import { AuthProvider } from '../context/AuthContext'

const AppProviders = ({ children }) => {
  return (
      <ThemeProviderWrapper>
        <AuthProvider>
            {children}
        </AuthProvider>
      </ThemeProviderWrapper>
  )
}

export default AppProviders