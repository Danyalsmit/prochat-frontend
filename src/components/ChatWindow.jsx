import { Box, TextField, IconButton, Avatar, Typography, useTheme } from '@mui/material'
import { Send, Smile, Paperclip } from 'lucide-react'
import { useState } from 'react'

// ─── MESSAGES DATA BY CHAT ─────────────────
const CHAT_MESSAGES = {
  'John Doe': [
    {
      id: 1,
      sender: 'John Doe',
      content: 'Hey! Do you have a chance to look at the quarterly report I sent over last morning?',
      timestamp: '10:20 AM',
      isOwn: false,
      avatar: 'JD'
    },
    {
      id: 2,
      sender: 'You',
      content: 'Just finished reviewing it. The data on Q3 growth looks particularly promising. I have a few suggestions for the executive summary though.',
      timestamp: '10:32 AM',
      isOwn: true,
      avatar: 'You'
    },
    {
      id: 3,
      sender: 'John Doe',
      content: 'Great. Can you check if this graph matches the new metrics?',
      timestamp: '10:35 AM',
      isOwn: false,
      avatar: 'JD'
    },
    {
      id: 4,
      sender: 'You',
      content: 'Perfect, let me check...',
      timestamp: '10:36 AM',
      isOwn: true,
      avatar: 'You'
    }
  ],
  'Team Sync': [
    {
      id: 1,
      sender: 'Sarah',
      content: 'The presentation looks amazing!',
      timestamp: '9:15 AM',
      isOwn: false,
      avatar: 'TS'
    },
    {
      id: 2,
      sender: 'You',
      content: 'Thanks! Are you ready for the client meeting?',
      timestamp: '9:20 AM',
      isOwn: true,
      avatar: 'You'
    },
    {
      id: 3,
      sender: 'Sarah',
      content: 'Yes, all set! See you at 2 PM',
      timestamp: '9:25 AM',
      isOwn: false,
      avatar: 'TS'
    }
  ],
  'Project Alpha': [
    {
      id: 1,
      sender: 'Project Lead',
      content: 'Please check the revised design documents',
      timestamp: 'Yesterday',
      isOwn: false,
      avatar: 'PA'
    },
    {
      id: 2,
      sender: 'You',
      content: "I'll review them today and send feedback",
      timestamp: 'Yesterday',
      isOwn: true,
      avatar: 'You'
    }
  ]
}

const ChatWindow = ({ selectedChat }) => {
  const theme = useTheme()
  const [message, setMessage] = useState('')

  if (!selectedChat) {
    return (
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.secondary,
          padding: theme.spacing(4),
          textAlign: 'center'
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Select a chat to start messaging
          </Typography>
          <Typography>
            Your recent conversations will appear in the sidebar. Pick a chat to view messages.
          </Typography>
        </Box>
      </Box>
    )
  }

  const chatTitle = selectedChat.chatName || selectedChat.name || 'Chat'
  const currentMessages = CHAT_MESSAGES[chatTitle] || []

  const styles = {
    root: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.default,
      transition: 'all 0.3s ease'
    },

    header: {
      padding: theme.spacing(2, 3),
      borderBottom: `1px solid ${theme.palette.divider}`,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(2)
    },

    headerText: {
      display: 'flex',
      flexDirection: 'column'
    },

    headerName: {
      fontSize: '16px',
      fontWeight: 700,
      color: theme.palette.text.primary
    },

    headerDetail: {
      fontSize: '12px',
      color: theme.palette.text.secondary
    },

    messagesContainer: {
      flex: 1,
      overflowY: 'auto',
      padding: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),

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

    messageWrapper: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: theme.spacing(1),
      transition: 'all 0.2s ease'
    },

    messageWrapperOwn: {
      justifyContent: 'flex-end'
    },

    messageWrapperOther: {
      justifyContent: 'flex-start'
    },

    avatar: {
      width: 32,
      height: 32,
      fontWeight: 600,
      fontSize: '11px',
      transition: 'all 0.2s ease'
    },

    avatarOwn: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },

    avatarOther: {
      backgroundColor: theme.palette.action.hover,
      color: theme.palette.text.secondary
    },

    messageBubble: {
      maxWidth: '60%',
      padding: theme.spacing(1.25, 2),
      borderRadius: theme.shape.borderRadius,
      wordBreak: 'break-word',
      transition: 'all 0.2s ease',
      animation: 'fadeIn 0.3s ease'
    },

    messageBubbleOwn: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      borderBottomRightRadius: 4
    },

    messageBubbleOther: {
      backgroundColor: theme.palette.mode === 'light'
        ? '#f3f4f6'
        : theme.palette.action.hover,
      color: theme.palette.text.primary,
      borderBottomLeftRadius: 4,
    },

    messageContent: {
      fontSize: '13px',
      lineHeight: 1.4
    },

    messageTimestamp: {
      display: 'block',
      marginTop: theme.spacing(0.5),
      opacity: 0.7,
      fontSize: '10px',
      fontWeight: 500
    },

    inputArea: {
      borderTop: `1px solid ${theme.palette.divider}`,
      padding: theme.spacing(2),
      display: 'flex',
      alignItems: 'flex-end',
      gap: theme.spacing(1.5),
      backgroundColor: theme.palette.background.paper,
      transition: 'all 0.3s ease'
    },

    inputField: {
      '& .MuiOutlinedInput-root': {
        borderRadius: theme.spacing(1.25),
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
        padding: theme.spacing(1, 2),
        fontSize: '13px',

        '&::placeholder': {
          color: theme.palette.text.disabled,
          opacity: 0.6
        }
      }
    },

    actionButton: {
      transition: 'all 0.2s ease',
      color: theme.palette.text.secondary,

      '&:hover': {
        backgroundColor: theme.palette.action.hover,
        color: theme.palette.primary.main
      }
    },

    sendButton: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      transition: 'all 0.2s ease',

      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        boxShadow: `0 4px 12px ${theme.palette.primary.main}30`
      }
    }
  }

  const handleSend = () => {
    if (message.trim()) {
      console.log('Send message:', message)
      setMessage('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <Box sx={styles.root}>
      <Box sx={styles.header}>
        <Avatar sx={{ width: 48, height: 48, backgroundColor: theme.palette.primary.main }}>
          {chatTitle
            .split(' ')
            .filter(Boolean)
            .slice(0, 2)
            .map((item) => item[0])
            .join('')
            .toUpperCase()}
        </Avatar>
        <Box sx={styles.headerText}>
          <Typography sx={styles.headerName}>{chatTitle}</Typography>
          <Typography sx={styles.headerDetail}>
            {selectedChat.participants?.length > 1
              ? `${selectedChat.participants.length} participants`
              : 'Direct message'}
          </Typography>
        </Box>
      </Box>

      <Box sx={styles.messagesContainer}>
        {currentMessages.length === 0 ? (
          <Typography sx={{ color: theme.palette.text.secondary }}>
            No messages yet. Start the conversation by typing below.
          </Typography>
        ) : (
          currentMessages.map((msg) => (
            <Box
              key={msg.id}
              sx={{
                ...styles.messageWrapper,
                ...(msg.isOwn ? styles.messageWrapperOwn : styles.messageWrapperOther)
              }}
            >
              {!msg.isOwn && (
                <Avatar sx={{ ...styles.avatar, ...styles.avatarOther }}>
                  {msg.avatar}
                </Avatar>
              )}

              <Box
                sx={{
                  ...styles.messageBubble,
                  ...(msg.isOwn ? styles.messageBubbleOwn : styles.messageBubbleOther)
                }}
              >
                <Typography sx={styles.messageContent}>
                  {msg.content}
                </Typography>
                <Typography sx={styles.messageTimestamp}>
                  {msg.timestamp}
                </Typography>
              </Box>

              {msg.isOwn && (
                <Avatar sx={{ ...styles.avatar, ...styles.avatarOwn }}>
                  {msg.avatar}
                </Avatar>
              )}
            </Box>
          ))
        )}
      </Box>

      <Box sx={styles.inputArea}>
        <IconButton size="small" sx={styles.actionButton}>
          <Smile size={20} />
        </IconButton>

        <TextField
          fullWidth
          multiline
          maxRows={4}
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          variant="outlined"
          size="small"
          sx={styles.inputField}
        />

        <IconButton size="small" sx={styles.actionButton}>
          <Paperclip size={20} />
        </IconButton>

        <IconButton
          size="small"
          onClick={handleSend}
          sx={styles.sendButton}
        >
          <Send size={18} />
        </IconButton>
      </Box>
    </Box>
  )
}

export default ChatWindow
