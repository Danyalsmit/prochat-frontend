import { Card, Box, Typography } from '@mui/material'
import { Shield } from '@mui/icons-material'
import { loginStyles } from './loginStyles'

const SecurityCard = () => {
  return (
    <Card elevation={0} sx={loginStyles.securityCard}>
      <Box sx={loginStyles.securityCardContent}>
        <Box sx={loginStyles.securityIcon}>
          <Shield sx={{ color: 'white', fontSize: 22 }} />
        </Box>
        <Box>
          <Typography variant="subtitle1" fontWeight={700} color="text.primary">
            Enterprise Security
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={0.5} lineHeight={1.6}>
            Your communications are protected with end-to-end encryption
            and multi-factor authentication. Trust ProChat for your most
            sensitive business data.
          </Typography>
        </Box>
      </Box>
    </Card>
  )
}

export default SecurityCard
