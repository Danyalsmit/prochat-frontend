import { Box, Avatar, Typography, TextField, IconButton, useTheme } from '@mui/material'
import { Search, MoreVert } from '@mui/icons-material'
import { useState } from 'react'

 const Navbar = ({ selectedChat }) => {
  const theme = useTheme()
  const [searchOpen, setSearchOpen] = useState(false)

  // ─── DYNAMIC STYLES USING THEME ────────────
  const styles = {
    root: {
      height: '70px',
      backgroundColor: theme.palette.background.paper,
      borderBottom: `1px solid ${theme.palette.divider}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingX: theme.spacing(3),
      transition: 'all 0.3s ease'
    },

    leftSection: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(2)
    },

    avatar: {
      width: 40,
      height: 40,
      backgroundColor: theme.palette.primary.main,
      fontWeight: 600,
      fontSize: '14px'
    },

    contactInfo: {
      display: 'flex',
      flexDirection: 'column'
    },

    contactName: {
      fontWeight: 600,
      fontSize: '14px',
      color: theme.palette.text.primary,
      lineHeight: 1.2
    },

    contactStatus: {
      fontSize: '11px',
      color: theme.palette.text.secondary,
      lineHeight: 1.2
    },

    rightSection: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1),
      justifyContent: 'flex-end'
    },

    navLink: {
      fontSize: '13px',
      fontWeight: 500,
      color: theme.palette.text.secondary,
      cursor: 'pointer',
      transition: 'color 0.2s ease',
      marginRight: theme.spacing(1),

      '&:hover': {
        color: theme.palette.primary.main
      }
    },

    searchField: {
      '& .MuiOutlinedInput-root': {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.default,
        transition: 'all 0.2s ease',

        '&:hover': {
          backgroundColor: theme.palette.mode === 'light' 
            ? 'rgba(59, 130, 246, 0.05)' 
            : 'rgba(59, 130, 246, 0.1)'
        },

        '&.Mui-focused': {
          backgroundColor: theme.palette.background.default,
          boxShadow: `0 0 0 2px ${theme.palette.primary.main}20`
        }
      },

      '& .MuiOutlinedInput-input': {
        fontSize: '13px',
        padding: theme.spacing(1, 1.5)
      }
    },

    iconButton: {
      transition: 'all 0.2s ease',
      color: theme.palette.text.secondary,

      '&:hover': {
        backgroundColor: theme.palette.action.hover,
        color: theme.palette.primary.main
      }
    }
  }

  return (
    <Box sx={styles.root}>
      {/* ── LEFT SECTION ────────────────── */}
      <Box sx={styles.leftSection}>
        <Avatar sx={styles.avatar}>
          {selectedChat?.name?.charAt(0) || 'J'}
        </Avatar>
        <Box sx={styles.contactInfo}>
          <Typography sx={styles.contactName}>
            {selectedChat?.name || 'John Doe'}
          </Typography>
          <Typography sx={styles.contactStatus}>
            {selectedChat?.status || 'Direct'}
          </Typography>
        </Box>
      </Box>

      {/* ── RIGHT SECTION ───────────────── */}
      <Box sx={styles.rightSection}>
        <Typography sx={styles.navLink}>
          Groups
        </Typography>
        <Typography sx={styles.navLink}>
          Channels
        </Typography>

        {searchOpen ? (
          <TextField
            size="small"
            placeholder="Search messages..."
            variant="outlined"
            autoFocus
            onBlur={() => setSearchOpen(false)}
            sx={{
              ...styles.searchField,
              width: 200
            }}
          />
        ) : (
          <IconButton
            size="small"
            onClick={() => setSearchOpen(true)}
            sx={styles.iconButton}
          >
            <Search />
          </IconButton>
        )}

        <IconButton
          size="small"
          sx={styles.iconButton}
        >
          <MoreVert />
        </IconButton>
      </Box>
    </Box>
  )
}
 export default Navbar
