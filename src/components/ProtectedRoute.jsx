import { Navigate, useLocation } from 'react-router-dom'
import { Box, CircularProgress, Typography } from '@mui/material'
import { useAuth } from '../context/AuthContext'
import { ROUTES } from '../constants/routes'

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <Box sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2
      }}>
        <CircularProgress size={40} sx={{ color: '#3B82F6' }} />
        <Typography variant="body2" color="text.secondary">
          Loading...
        </Typography>
      </Box>
    )
  }

  if (!isLoggedIn) {
    // User kahan ja raha tha — yaad rakho
    return (
      <Navigate
        to={ROUTES.LOGIN}
        state={{ from: location }}
        replace
      />
    )
  }

  return children
}

export default ProtectedRoute