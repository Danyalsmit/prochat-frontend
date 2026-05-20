import { Box, Typography } from '@mui/material'
import { Chat } from '@mui/icons-material'

const RegisterHeader = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      mb: 1,
    }}>
      <Box sx={{
        width: 52, height: 52,
        borderRadius: 3,
        background: '#3B82F6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 1.5,
      }}>
        <Chat sx={{ color: 'white', fontSize: 28 }} />
      </Box>
      <Typography variant="h5" fontWeight={700} color="text.primary">
        ProChat
      </Typography>
      <Typography variant="body2" color="text.secondary" mt={0.5}>
        Create your professional account
      </Typography>
    </Box>
  )
}

export default RegisterHeader