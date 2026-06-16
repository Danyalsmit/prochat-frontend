import { Box, TextField, Typography, Avatar, Button, Tab, Tabs, InputAdornment, useTheme, Card, Badge } from '@mui/material'
import { Search, UserPlus } from 'lucide-react'
import { useState } from 'react'

const CONTACTS_DATA = [
  { id: 1, name: 'Alex Rivers', role: 'Project Manager', avatar: 'AR', online: true },
  { id: 2, name: 'Sarah Chen', role: 'Product Manager', avatar: 'SC', online: true },
  { id: 3, name: 'Marcus Tsoi', role: 'Software Engineer', avatar: 'MT', online: false },
  { id: 4, name: 'Adrian Fletcher', role: 'Active now', avatar: 'AF', online: true },
  { id: 5, name: 'Beatrix Thorne', role: 'Offline since 3h', avatar: 'BT', online: false },
  { id: 6, name: 'Caleb Jensen', role: 'Active now', avatar: 'CJ', online: true },
  { id: 7, name: 'Dania Petrov', role: 'Away', avatar: 'DP', online: false },
]

const FAVORITES = [
  { id: 1, name: 'Alex Rivers', role: 'Project Manager', avatar: 'AR', online: true },
  { id: 2, name: 'Sarah Chen', role: 'Product Manager', avatar: 'SC', online: true },
  { id: 3, name: 'Marcus Tsoi', role: 'Software Engineer', avatar: 'MT', online: false },
]

const ContactsList = () => {
  const theme = useTheme()
  const [tabValue, setTabValue] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')

  const styles = {
    root: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.default,
      overflow: 'hidden'
    },

    header: {
      padding: theme.spacing(1, 2),
      backgroundColor: theme.palette.background.paper,
      borderBottom: `1px solid ${theme.palette.divider}`
    },

    headerTop: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing(2)
    },

    headerTitle: {
      fontSize: '20px',
      fontWeight: 700,
      color: theme.palette.text.primary
    },

    searchField: {
      '& .MuiOutlinedInput-root': {
        borderRadius: theme.spacing(1.25),
        backgroundColor: theme.palette.background.default,
        transition: 'all 0.2s ease',

        '&:hover': {
          backgroundColor: theme.palette.mode === 'light'
            ? 'rgba(59, 130, 246, 0.05)'
            : 'rgba(59, 130, 246, 0.1)'
        }
      }
    },

    addButton: {
      backgroundColor: theme.palette.primary.main,
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '13px',
      padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
      transition: 'all 0.2s ease',

      '&:hover': {
        backgroundColor: theme.palette.primary.dark
      }
    },

    tabs: {
      '& .MuiTabs-indicator': {
        backgroundColor: theme.palette.primary.main,
        height: 3
      },

      '& .MuiTab-root': {
        textTransform: 'none',
        fontSize: '13px',
        fontWeight: 500,
        color: theme.palette.text.secondary,
        minWidth: 80,

        '&.Mui-selected': {
          color: theme.palette.primary.main,
          fontWeight: 600
        }
      }
    },

    content: {
      // flex: 1,
      // overflowY: 'auto',
      padding: theme.spacing(2),

      '&::-webkit-scrollbar': {
        width: '6px'
      },

      '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent'
      },

      '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.divider,
        borderRadius: '3px'
      }
    },

    section: {
      marginBottom: theme.spacing(2),

    },
     section2: {
      marginBottom: theme.spacing(2),
      overflowY: 'auto',
      height: 'calc(50vh - 200px)',

    },


    sectionTitle: {
      fontSize: '12px',
      fontWeight: 700,
      color: theme.palette.text.disabled,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      marginBottom: theme.spacing(1.5),
      paddingLeft: theme.spacing(1)
    },

    favoritesContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
      gap: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },

    favoriteCard: {
      padding: theme.spacing(2),
      borderRadius: theme.spacing(1.25),
      backgroundColor: theme.palette.background.paper,
      border: `1px solid ${theme.palette.divider}`,
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      textAlign: 'center',

      '&:hover': {
        backgroundColor: theme.palette.mode === 'light'
          ? 'rgba(59, 130, 246, 0.05)'
          : theme.palette.action.hover,
        borderColor: theme.palette.primary.main
      }
    },

    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(2),
      padding: theme.spacing(1.5),
      borderRadius: theme.spacing(1.25),
      cursor: 'pointer',
      transition: 'all 0.2s ease',


      '&:hover': {
        backgroundColor: theme.palette.action.hover
      }
    },

    avatar: {
      width: 40,
      height: 40,
      backgroundColor: theme.palette.primary.main,
      fontWeight: 600,
      fontSize: '13px'
    },

    contactInfo: {
      flex: 1
    },

    contactName: {
      fontSize: '13px',
      fontWeight: 500,
      color: theme.palette.text.primary
    },

    contactRole: {
      fontSize: '11px',
      color: theme.palette.text.secondary,
      marginTop: theme.spacing(0.25)
    },

    loadMoreButton: {
      width: '100%',
      marginTop: theme.spacing(2),
      color: theme.palette.primary.main,
      textTransform: 'none',
      fontWeight: 600
    }
  }

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  return (
    <Box sx={styles.root}>
      {/* ── HEADER ────────────────────────── */}
      <Box sx={styles.header}>
        <Box sx={styles.headerTop}>
          <Typography sx={styles.headerTitle}>Contacts</Typography>
          <Button
            variant="contained"
            startIcon={<UserPlus size={18} />}
            sx={styles.addButton}
          >
            Add New Contact
          </Button>
        </Box>

        <TextField
          fullWidth
          size="small"
          placeholder="Search contacts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          variant="outlined"
          sx={styles.searchField}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search size={18} style={{ marginRight: 8, opacity: 0.5 }} />
              </InputAdornment>
            )
          }}
        />
      </Box>

      {/* ── TABS ────────────────────────── */}
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        sx={{
          ...styles.tabs,
          backgroundColor: theme.palette.background.paper,
          borderBottom: `1px solid ${theme.palette.divider}`,
          paddingX: theme.spacing(3)
        }}
      >
        <Tab label="All" />
        <Tab label="Recent" />
        <Tab label="Groups" />
      </Tabs>

      {/* ── CONTENT ────────────────────── */}
      <Box sx={styles.content}>
        {/* Favorites Section */}
        <Box sx={styles.section}>
          <Typography sx={styles.sectionTitle}>⭐ Favorites</Typography>
          <Box sx={styles.favoritesContainer}>
            {FAVORITES.map((contact) => (
              <Card
                key={contact.id}
                sx={styles.favoriteCard}
              >
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                  sx={{
                    '& .MuiBadge-badge': {
                      backgroundColor: contact.online ? '#10b981' : '#d1d5db',
                      width: 10,
                      height: 10
                    }
                  }}
                >
                  <Avatar sx={{ ...styles.avatar, margin: '0 auto 12px' }}>
                    {contact.avatar}
                  </Avatar>
                </Badge>
                <Typography sx={styles.contactName}>
                  {contact.name}
                </Typography>
                <Typography sx={styles.contactRole}>
                  {contact.role}
                </Typography>
              </Card>
            ))}
          </Box>
        </Box>

        {/* All Contacts Section */}
         <Typography sx={styles.sectionTitle}>
            All Contacts ({CONTACTS_DATA.length} total)
          </Typography>
        <Box sx={styles.section2}>
         
          {CONTACTS_DATA.map((contact) => (
            <Box key={contact.id} sx={styles.contactItem}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
                sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: contact.online ? '#10b981' : '#d1d5db',
                    width: 10,
                    height: 10
                  }
                }}
              >
                <Avatar sx={styles.avatar}>
                  {contact.avatar}
                </Avatar>
              </Badge>
              <Box sx={styles.contactInfo}>
                <Typography sx={styles.contactName}>
                  {contact.name}
                </Typography>
                <Typography sx={styles.contactRole}>
                  {contact.role}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
         <Button sx={styles.loadMoreButton}>
            Load more contacts
          </Button>
      </Box>
    </Box>
  )
}

export default ContactsList
