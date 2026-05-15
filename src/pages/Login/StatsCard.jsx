import { Card, Box, Typography } from '@mui/material'
import { loginStyles, STATS_DATA } from './loginStyles'

const StatsCard = () => {
  return (
    <Card elevation={0} sx={loginStyles.statsCard}>
      {STATS_DATA.map((stat) => (
        <Box key={stat.label} sx={loginStyles.statsItem}>
          <Typography variant="body2" sx={loginStyles.statsLabel}>
            {stat.label}
          </Typography>
          <Typography variant="h6" sx={loginStyles.statsValue}>
            {stat.value}
          </Typography>
        </Box>
      ))}
    </Card>
  )
}

export default StatsCard
