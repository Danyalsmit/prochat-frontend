import { Box, Avatar, Typography, Button, ListItemButton, Badge, useTheme } from '@mui/material'
import { MessageSquarePlus, Contact, Settings, HelpCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import api from '../api/axiosInstance'

const NAV_ITEMS = [
  { icon: MessageSquarePlus, label: 'Chats', id: 'chats' },
  { icon: Contact, label: 'Contacts', id: 'contacts' },
  { icon: Settings, label: 'Settings', id: 'settings' },
]

const Sidebar = ({ onSelectChat, onTabChange }) => {
  const theme = useTheme()
  const { user } = useAuth()
  const [chats, setChats] = useState([])
  const [selectedChatIndex, setSelectedChatIndex] = useState(null)
  const [activeTab, setActiveTab] = useState('chats')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!user) return
    const fetchChats = async () => {
      try {
        setLoading(true)
        const res = await api.get('/chat/my-chats')
        setChats(res.data.data || [])
      } catch (err) {
        setError(err?.response?.data?.message || 'Unable to load chats')
      } finally {
        setLoading(false)
      }
    }

    fetchChats()
  }, [user])

  const getChatName = (chat) => {
    if (!chat) return 'Chat'
    if (chat.isGroupChat && chat.chatName) return chat.chatName
    const partner = chat.participants?.find((participant) => participant._id !== user?._id)
    return partner?.fullName || chat.chatName || 'Direct Chat'
  }

  const getChatPreview = (chat) => {
    if (!chat) return ''
    return chat.latestMessage?.content || 'No messages yet'
  }

  const getChatTime = (chat) => {
    if (!chat) return ''
    return chat.latestMessage?.createdAt
      ? new Date(chat.latestMessage.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      : 'Now'
  }

  const getAvatarLetters = (chat) => {
    const name = getChatName(chat)
    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join('')
      .toUpperCase()
  }

  const handleSelectChat = (chat, index) => {
    setSelectedChatIndex(index)
    onSelectChat(chat)
  }

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
    onTabChange(tabId)
  }

  // ─── DYNAMIC STYLES USING THEME ────────────
  const styles = {
    root: {
      width: '320px',
      backgroundColor: theme.palette.background.default,
      borderRight: `1px solid ${theme.palette.divider}`,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      transition: 'all 0.3s ease'
    },
    
    header: {
      padding: theme.spacing(1),
      borderBottom: `1px solid ${theme.palette.divider}`,
      backgroundColor: theme.palette.background.paper
    },
    
    headerTitle: {
      fontWeight: 700,
      fontSize: '18px',
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(1),
      letterSpacing: '-0.5px'
    },
    
    onlineStatus: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1)
    },
    
    statusIndicator: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#10b981',
      animation: 'pulse 2s infinite'
    },
    
    statusText: {
      fontSize: '12px',
      fontWeight: 500,
      color: theme.palette.text.secondary
    },
    
    navContainer: {
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(0.5),
    },
    
    navButton: {
      borderRadius: "10px",
      padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
      marginBottom: 0,
      transition: 'all 0.2s ease',
      color: theme.palette.text.secondary,
      fontSize: '14px',
      fontWeight: 500,
      
      '&:hover': {
        backgroundColor: theme.palette.mode === 'light' ? '#f0f1f3' : theme.palette.action.hover,
        color: theme.palette.text.primary
      },
      
      '&.Mui-selected': {
        backgroundColor: theme.palette.primary.main + '15',
        color: theme.palette.primary.main,
        fontWeight: 600
      }
    },
    
    navIcon: {
      marginRight: theme.spacing(1.5),
      display: 'flex',
      alignItems: 'center'
    },
    
    conversationsContainer: {
      flex: 1,
      overflowY: 'auto',
      padding: theme.spacing(1),
      
      '&::-webkit-scrollbar': {
        width: '6px'
      },
      
      '&::-webkit-scrollbar-track': {
        backgroundColor: 'transparent'
      },
      
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.divider,
        borderRadius: '3px',
        
        '&:hover': {
          backgroundColor: theme.palette.text.secondary
        }
      }
    },
    
    conversationsHeader: {
      display: 'block',
      padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
      color: theme.palette.text.disabled,
      fontWeight: 700,
      fontSize: '11px',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      marginBottom: theme.spacing(1.5)
    },
    
    chatItem: {
      borderRadius: "10px",
      marginBottom: theme.spacing(1),
      padding: theme.spacing(1.5),
      transition: 'all 0.2s ease',
      
      '&:hover': {
        backgroundColor: theme.palette.mode === 'light' ? '#f3f4f6' : theme.palette.action.hover
      },
      
      '&.Mui-selected': {
        backgroundColor: theme.palette.primary.main + '15',
        boxShadow: `0 0 0 1px ${theme.palette.primary.main}30`
      }
    },
    
    chatItemContent: {
      display: 'flex',
      gap: theme.spacing(2),
      width: '100%'
    },
    
    chatAvatar: {
      width: 40,
      height: 40,
      backgroundColor: theme.palette.primary.main,
      fontWeight: 600,
      fontSize: '13px'
    },
    
    chatBadge: {
      '& .MuiBadge-badge': {
        width: 10,
        height: 10,
        borderRadius: '50%',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`
      }
    },
    
    chatInfo: {
      flex: 1,
      minWidth: 0
    },
    
    chatHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing(0.5)
    },
    
    chatName: {
      fontWeight: 500,
      color: theme.palette.text.primary,
      fontSize: '13px'
    },
    
    chatTime: {
      color: theme.palette.text.disabled,
      fontSize: '11px',
      fontWeight: 500
    },
    
    chatPreview: {
      color: theme.palette.text.secondary,
      fontSize: '12px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: 'block',
      lineHeight: '1.3',
      whiteSpace: 'nowrap'
    },
    
    footer: {
      padding: theme.spacing(1),
      borderTop: `1px solid ${theme.palette.divider}`,
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(0.5),
      backgroundColor: theme.palette.background.paper
    },
    
    newChatButton: {
      backgroundColor: theme.palette.primary.main,
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '14px',
      padding: `${theme.spacing(1)} ${theme.spacing(1)}`,
      transition: 'all 0.2s ease',
      
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        boxShadow: `0 4px 12px ${theme.palette.primary.main}30`
      }
    },
    
    helpButton: {
      borderRadius: theme.shape.borderRadius,
      justifyContent: 'center',
      color: theme.palette.text.secondary,
      fontSize: '13px',
      fontWeight: 500,
      transition: 'all 0.2s ease',
      
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
        color: theme.palette.primary.main
      }
    }
  }

  return (
    <Box sx={styles.root}>
      {/* ── HEADER ─────────────────────── */}
      <Box sx={styles.header}>
        <Typography sx={styles.headerTitle}>
          ProChat
        </Typography>
        <Box sx={styles.onlineStatus}>
          <Box sx={styles.statusIndicator} />
          <Typography sx={styles.statusText}>
            Online
          </Typography>
        </Box>
      </Box>

      {/* ── NAVIGATION ─────────────────── */}
      <Box sx={styles.navContainer}>
        {NAV_ITEMS.map((item) => (
          <ListItemButton
            key={item.id}
            selected={activeTab === item.id}
            onClick={() => handleTabClick(item.id)}
            sx={styles.navButton}
          >
            <Box sx={styles.navIcon}>
              <item.icon size={20} />
            </Box>
            <Typography variant="body2" sx={{ fontSize: 'inherit' }}>
              {item.label}
            </Typography>
          </ListItemButton>
        ))}
      </Box>

      {/* ── CONVERSATIONS LIST ─────────── */}
      <Typography sx={styles.conversationsHeader}>
          Recent Conversations
        </Typography>
      <Box sx={styles.conversationsContainer}>
        {loading && (
          <Typography sx={{ color: theme.palette.text.secondary, padding: theme.spacing(2) }}>
            Loading chats...
          </Typography>
        )}

        {error && (
          <Typography color="error" sx={{ padding: theme.spacing(2) }}>
            {error}
          </Typography>
        )}

        {!loading && chats.length === 0 && (
          <Typography sx={{ color: theme.palette.text.secondary, padding: theme.spacing(2) }}>
            No chats found yet. Start a conversation from Contacts.
          </Typography>
        )}

        {chats.map((chat, index) => (
          <ListItemButton
            key={chat._id}
            selected={selectedChatIndex === index}
            onClick={() => handleSelectChat(chat, index)}
            sx={styles.chatItem}
          >
            <Box sx={styles.chatItemContent}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
                sx={{
                  ...styles.chatBadge,
                  '& .MuiBadge-badge': {
                    ...styles.chatBadge['& .MuiBadge-badge'],
                    backgroundColor: '#10b981'
                  }
                }}
              >
                <Avatar sx={styles.chatAvatar}>
                  {getAvatarLetters(chat)}
                </Avatar>
              </Badge>

              <Box sx={styles.chatInfo}>
                <Box sx={styles.chatHeader}>
                  <Typography sx={styles.chatName}>
                    {getChatName(chat)}
                  </Typography>
                  <Typography sx={styles.chatTime}>
                    {getChatTime(chat)}
                  </Typography>
                </Box>
                <Typography sx={styles.chatPreview}>
                  {getChatPreview(chat)}
                </Typography>
              </Box>
            </Box>
          </ListItemButton>
        ))}
      </Box>

      {/* ── FOOTER ─────────────────────── */}
      <Box sx={styles.footer}>
        <Button
          variant="contained"
          fullWidth
          startIcon={<MessageSquarePlus size={18} />}
          sx={styles.newChatButton}
        >
          New Chat
        </Button>
        <ListItemButton sx={styles.helpButton}>
          <HelpCircle size={18} style={{ marginRight: theme.spacing(2) }} />
          <Typography variant="body2" sx={{ fontSize: 'inherit' }}>
            Help
          </Typography>
        </ListItemButton>
      </Box>
    </Box>
  )
}

export default Sidebar
