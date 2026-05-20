import { Box, Card, CardContent } from '@mui/material'
import RegisterHeader from './RegisterHeader'
import RegisterForm from './RegisterForm'
import { styles } from './registerStyles'

const Register = () => {
  return (
    <Box sx={styles.wrapper}>
      <Card elevation={3} sx={styles.card}>
        <CardContent sx={styles.cardContent}>
          <RegisterHeader />
          <RegisterForm />
        </CardContent>
      </Card>
    </Box>
  )
}

export default Register