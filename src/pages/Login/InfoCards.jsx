import { Box } from '@mui/material'
import SecurityCard from './SecurityCard'
import StatsCard from './StatsCard'
import { loginStyles } from './loginStyles'

const InfoCards = () => {
  return (
    <Box sx={loginStyles.infoCardsContainer}>
      <SecurityCard />
      <StatsCard />
    </Box>
  )
}

export default InfoCards
