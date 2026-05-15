import { Box, Typography } from '@mui/material'
import { Chat } from '@mui/icons-material'
import { loginStyles } from './loginStyles'

const LoginHeader = () => {
  return (
    <Box sx={loginStyles.logoBox}>
      <Box sx={loginStyles.logoIcon}>
        <Chat sx={{ color: 'white', fontSize: 28 }} />
      </Box>
      <Typography variant="h5" fontWeight={700} color="text.primary">
        ProChat
      </Typography>
      <Typography variant="body2" color="text.secondary" mt={0.5}>
        Sign in to your professional workspace
      </Typography>
    </Box>
  )
}

export default LoginHeader
