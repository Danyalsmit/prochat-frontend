import { Box, TextField, Typography, Avatar, Button, Tab, Tabs, InputAdornment, useTheme, Badge } from '@mui/material'
import { Search, UserPlus } from 'lucide-react'
import { useState, useEffect } from 'react'
import api from '../api/axiosInstance'

const ContactsList = () => {
  const theme = useTheme()
  const [tabValue, setTabValue] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

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

    section2: {
      marginBottom: theme.spacing(2),
      overflowY: 'auto',
      height: 'calc(55vh - 160px)'
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

    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(2),
      padding: theme.spacing(1.5),
      borderRadius: theme.spacing(1.25),
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      marginBottom: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,

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

  const fetchContacts = async () => {
    try {
      setLoading(true)
      const res = await api.get('/users', { params: { search: searchQuery } })
      setContacts(res.data.data || [])
      setError('')
    } catch (err) {
      setError(err?.response?.data?.message || 'Unable to load contacts')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchContacts()
  }, [searchQuery])

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }

  const getAvatarText = (name) => {
    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join('')
      .toUpperCase()
  }

  return (
    <Box sx={styles.root}>
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

      <Box sx={styles.content}>
        <Typography sx={styles.sectionTitle}>All Contacts ({contacts.length})</Typography>

        {error && (
          <Typography color="error" sx={{ marginBottom: theme.spacing(2) }}>
            {error}
          </Typography>
        )}

        <Box sx={styles.section2}>
          {loading ? (
            <Typography sx={{ color: theme.palette.text.secondary, padding: theme.spacing(2) }}>
              Loading contacts...
            </Typography>
          ) : contacts.length === 0 ? (
            <Typography sx={{ color: theme.palette.text.secondary, padding: theme.spacing(2) }}>
              No contacts found.
            </Typography>
          ) : (
            contacts.map((contact) => (
              <Box key={contact._id} sx={styles.contactItem}>
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                  sx={{
                    '& .MuiBadge-badge': {
                      backgroundColor: '#10b981',
                      width: 10,
                      height: 10
                    }
                  }}
                >
                  <Avatar sx={styles.avatar}>
                    {getAvatarText(contact.fullName)}
                  </Avatar>
                </Badge>
                <Box sx={styles.contactInfo}>
                  <Typography sx={styles.contactName}>{contact.fullName}</Typography>
                  <Typography sx={styles.contactRole}>{contact.email}</Typography>
                </Box>
              </Box>
            ))
          )}
        </Box>

        <Button sx={styles.loadMoreButton}>
          Load more contacts
        </Button>
      </Box>
    </Box>
  )
}

export default ContactsList
