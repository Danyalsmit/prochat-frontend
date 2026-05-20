import { Box, TextField, Typography, Button, Switch, FormControlLabel, Select, MenuItem, Card, useTheme, Divider, Avatar } from '@mui/material'
import { Lock, Bell, Eye, Trash2, Save } from 'lucide-react'
import { useState } from 'react'

const SettingsPanel = () => {
  const theme = useTheme()
  const [displayName, setDisplayName] = useState('Alex Mitchell')
  const [statusMessage, setStatusMessage] = useState('Focused on the new sprint 🚀')
  const [presence, setPresence] = useState('active')
  const [notifications, setNotifications] = useState({
    sound: true,
    desktop: true,
    messagePreview: false
  })
  const [privacy, setPrivacy] = useState({
    blocked: false,
    lastSeen: 'everyone'
  })

  const styles = {
    root: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.default,
      overflow: 'hidden'
    },

    header: {
      padding: theme.spacing(2.5, 3),
      backgroundColor: theme.palette.background.paper,
      borderBottom: `1px solid ${theme.palette.divider}`
    },

    headerTitle: {
      fontSize: '20px',
      fontWeight: 700,
      color: theme.palette.text.primary
    },

    content: {
      flex: 1,
      overflowY: 'auto',
      padding: theme.spacing(3),

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
      marginBottom: theme.spacing(3)
    },

    sectionTitle: {
      fontSize: '14px',
      fontWeight: 700,
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(2),
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1)
    },

    card: {
      backgroundColor: theme.palette.background.paper,
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(2)
    },

    fieldGroup: {
      marginBottom: theme.spacing(2),

      '&:last-child': {
        marginBottom: 0
      }
    },

    label: {
      display: 'block',
      fontSize: '12px',
      fontWeight: 600,
      color: theme.palette.text.secondary,
      textTransform: 'uppercase',
      marginBottom: theme.spacing(0.75),
      letterSpacing: '0.5px'
    },

    textField: {
      '& .MuiOutlinedInput-root': {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.default,

        '&:hover': {
          backgroundColor: theme.palette.mode === 'light' 
            ? 'rgba(59, 130, 246, 0.05)' 
            : 'rgba(59, 130, 246, 0.1)'
        }
      }
    },

    selectField: {
      '& .MuiOutlinedInput-root': {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.default
      }
    },

    switchGroup: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing(1.5, 0),

      '&:not(:last-child)': {
        borderBottom: `1px solid ${theme.palette.divider}`
      }
    },

    switchLabel: {
      fontSize: '13px',
      color: theme.palette.text.primary,
      fontWeight: 500
    },

    switchDescription: {
      fontSize: '11px',
      color: theme.palette.text.secondary,
      marginTop: theme.spacing(0.25)
    },

    presenceCard: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      padding: theme.spacing(2.5),
      borderRadius: theme.shape.borderRadius,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },

    dangerZone: {
      backgroundColor: theme.palette.error.main + '10',
      border: `1px solid ${theme.palette.error.main}30`,
      padding: theme.spacing(2),
      borderRadius: theme.shape.borderRadius
    },

    dangerTitle: {
      fontSize: '13px',
      fontWeight: 700,
      color: theme.palette.error.main,
      marginBottom: theme.spacing(1)
    },

    dangerDescription: {
      fontSize: '12px',
      color: theme.palette.text.secondary,
      marginBottom: theme.spacing(1.5)
    },

    footer: {
      display: 'flex',
      gap: theme.spacing(1),
      padding: theme.spacing(2, 3),
      backgroundColor: theme.palette.background.paper,
      borderTop: `1px solid ${theme.palette.divider}`,
      justifyContent: 'flex-end'
    },

    discardButton: {
      textTransform: 'none',
      fontWeight: 600,
      color: theme.palette.text.secondary
    },

    saveButton: {
      backgroundColor: theme.palette.primary.main,
      textTransform: 'none',
      fontWeight: 600,
      padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
      transition: 'all 0.2s ease',

      '&:hover': {
        backgroundColor: theme.palette.primary.dark
      }
    }
  }

  return (
    <Box sx={styles.root}>
      {/* ── HEADER ────────────────────────── */}
      <Box sx={styles.header}>
        <Typography sx={styles.headerTitle}>Account Settings</Typography>
      </Box>

      {/* ── CONTENT ────────────────────── */}
      <Box sx={styles.content}>
        {/* ── Profile Section ─────────────────── */}
        <Box sx={styles.section}>
          <Box sx={styles.card}>
            <Box sx={styles.fieldGroup}>
              <Typography sx={styles.label}>Display Name</Typography>
              <TextField
                fullWidth
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                variant="outlined"
                size="small"
                sx={styles.textField}
              />
            </Box>

            <Box sx={styles.fieldGroup}>
              <Typography sx={styles.label}>Status Message</Typography>
              <TextField
                fullWidth
                value={statusMessage}
                onChange={(e) => setStatusMessage(e.target.value)}
                variant="outlined"
                size="small"
                sx={styles.textField}
                placeholder="What's on your mind?"
              />
            </Box>
          </Box>
        </Box>

        {/* ── Presence Section ──────────────── */}
        <Box sx={styles.section}>
          <Typography sx={styles.sectionTitle}>
            <Box sx={{ color: theme.palette.primary.main }}>●</Box>
            Presence
          </Typography>
          <Box sx={styles.presenceCard}>
            <Box>
              <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>
                {presence === 'active' ? 'Always Active' : 'Do Invisible'}
              </Typography>
              <Typography sx={{ fontSize: '12px', opacity: 0.8 }}>
                {presence === 'active' 
                  ? 'Show as online with all chats' 
                  : 'Nobody will see when you were last online'}
              </Typography>
            </Box>
            <Select
              value={presence}
              onChange={(e) => setPresence(e.target.value)}
              sx={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'inherit',
                fontSize: '12px',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255,255,255,0.3)'
                }
              }}
            >
              <MenuItem value="active">Always Active</MenuItem>
              <MenuItem value="invisible">Do Invisible</MenuItem>
            </Select>
          </Box>
        </Box>

        {/* ── Notifications Section ────────── */}
        <Box sx={styles.section}>
          <Typography sx={styles.sectionTitle}>
            <Bell size={18} />
            Notifications
          </Typography>
          <Box sx={styles.card}>
            <Box sx={styles.switchGroup}>
              <Box>
                <Typography sx={styles.switchLabel}>Sound Notifications</Typography>
                <Typography sx={styles.switchDescription}>
                  Play a sound for incoming messages
                </Typography>
              </Box>
              <Switch
                checked={notifications.sound}
                onChange={(e) => setNotifications({ ...notifications, sound: e.target.checked })}
              />
            </Box>

            <Box sx={styles.switchGroup}>
              <Box>
                <Typography sx={styles.switchLabel}>Desktop Alerts</Typography>
                <Typography sx={styles.switchDescription}>
                  Show notification banners
                </Typography>
              </Box>
              <Switch
                checked={notifications.desktop}
                onChange={(e) => setNotifications({ ...notifications, desktop: e.target.checked })}
              />
            </Box>

            <Box sx={styles.switchGroup}>
              <Box>
                <Typography sx={styles.switchLabel}>Message Preview</Typography>
                <Typography sx={styles.switchDescription}>
                  Display message text in notifications
                </Typography>
              </Box>
              <Switch
                checked={notifications.messagePreview}
                onChange={(e) => setNotifications({ ...notifications, messagePreview: e.target.checked })}
              />
            </Box>
          </Box>
        </Box>

        {/* ── Privacy Section ──────────────── */}
        <Box sx={styles.section}>
          <Typography sx={styles.sectionTitle}>
            <Eye size={18} />
            Privacy
          </Typography>
          <Box sx={styles.card}>
            <Box sx={styles.switchGroup}>
              <Box>
                <Typography sx={styles.switchLabel}>Blocked Users</Typography>
                <Typography sx={styles.switchDescription}>
                  Manage 12 restricted contacts
                </Typography>
              </Box>
              <Button
                size="small"
                variant="outlined"
                sx={{ textTransform: 'none', fontWeight: 500 }}
              >
                Manage
              </Button>
            </Box>

            <Box sx={styles.fieldGroup}>
              <Typography sx={styles.label}>Last Seen Visibility</Typography>
              <Select
                fullWidth
                value={privacy.lastSeen}
                onChange={(e) => setPrivacy({ ...privacy, lastSeen: e.target.value })}
                sx={styles.selectField}
                size="small"
              >
                <MenuItem value="everyone">Everyone</MenuItem>
                <MenuItem value="contacts">Contacts only</MenuItem>
                <MenuItem value="nobody">Nobody</MenuItem>
              </Select>
            </Box>

            <Box sx={styles.switchGroup}>
              <Box>
                <Typography sx={styles.switchLabel}>Read Receipts</Typography>
                <Typography sx={styles.switchDescription}>
                  Send and receive 'Seen' status
                </Typography>
              </Box>
              <Switch defaultChecked />
            </Box>
          </Box>
        </Box>

        {/* ── Danger Zone ──────────────────── */}
        <Box sx={styles.section}>
          <Box sx={styles.dangerZone}>
            <Typography sx={styles.dangerTitle}>
              <Trash2 size={16} style={{ display: 'inline', marginRight: 8 }} />
              Deactivate Account
            </Typography>
            <Typography sx={styles.dangerDescription}>
              Temporarily disable your profile and hide your information.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                borderColor: theme.palette.error.main,
                color: theme.palette.error.main,
                textTransform: 'none',
                fontWeight: 600,

                '&:hover': {
                  backgroundColor: theme.palette.error.main + '10'
                }
              }}
            >
              Start Deactivation
            </Button>
          </Box>
        </Box>
      </Box>

      {/* ── FOOTER ────────────────────────── */}
      <Box sx={styles.footer}>
        <Button sx={styles.discardButton}>
          Discard Changes
        </Button>
        <Button
          variant="contained"
          startIcon={<Save size={18} />}
          sx={styles.saveButton}
        >
          Save Preferences
        </Button>
      </Box>
    </Box>
  )
}

export default SettingsPanel
