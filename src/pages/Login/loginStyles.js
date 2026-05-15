// Login Page Styles
export const loginStyles = {
  // Main Container
  mainContainer: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #e0e7ff 0%, #f1f5f9 100%)',
    p: 2
  },

  // Content Wrapper
  contentWrapper: {
    display: 'flex',
    gap: 4,
    alignItems: 'center',
    width: '100%',
    maxWidth: 900,
  },

  // ── LOGIN CARD STYLES ──

  loginCard: {
    width: '100%',
    maxWidth: 400,
    borderRadius: 2,
    mx: 'auto'
  },

  cardContent: {
    p: 4
  },

  // Logo Box
  logoBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mb: 3
  },

  logoIcon: {
    width: 52,
    height: 52,
    borderRadius: 3,
    background: '#3B82F6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mb: 1.5
  },

  // Form Styles
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2.5
  },

  formField: {
    width: '100%'
  },

  formLabel: {
    mb: 0.8,
    display: 'block',
    letterSpacing: 0.5
  },

  textField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 2
    }
  },

  passwordBox: {
    display: 'flex',
    justifyContent: 'space-between',
    mb: 0.8
  },

  // Buttons
  loginButton: {
    borderRadius: 2,
    py: 1.2,
    fontWeight: 600,
    fontSize: 15,
    background: '#3B82F6',
    '&:hover': { background: '#2563eb' },
    '&:loading': { background: '#93c5fd' },
  },

  socialButton: {
    borderRadius: 2,
    borderColor: '#e2e8f0',
    color: 'text.primary',
    fontWeight: 500,
    '&:hover': { borderColor: '#3B82F6', background: '#eff6ff' }
  },

  socialBox: {
    display: 'flex',
    gap: 2
  },

  dividerBox: {
    my: 0.5
  },

  // ── INFO CARDS STYLES ──

  infoCardsContainer: {
    display: { xs: 'none', md: 'flex' },
    flexDirection: 'column',
    gap: 3,
    flex: 1
  },

  // Security Card
  securityCard: {
    background: '#dbeafe',
    borderRadius: 2,
    p: 3,
    width: '400px',
  },

  securityCardContent: {
    display: 'flex',
    gap: 2,
    alignItems: 'flex-start',
    flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'column' }
  },

  securityIcon: {
    width: 44,
    height: 44,
    borderRadius: 2,
    background: '#3B82F6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },

  // Stats Card
  statsCard: {
    backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDFpld0OjaZJkzhe8ZEfgtNZVSD0zNrbI_Xt3sR79Z5tcq5gB24Xvi9ERA5Iui5McUctyHXwIxj0Jo-737UlwlhRp1I9a--CeiyppTuN7kqtg5XSaWOp2xZhgbGtlZYY8MkiLEhPmwIVmdmdgYhGH8cIAgZm0W637Bhz7DvJTNv4PGxDJDP83QPWLgrcLXhOs0XufauVP-RHrNojFx9B6rWybm08Xp3FS9mlbvPSErWqUPSKwCCObG5nA__EK7Arocm4AKWPLFSOpul)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: 2,
    p: 3,
    width: '400px',
    minHeight: 180,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 2
  },

  statsItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  statsLabel: {
    color: '#64748b'
  },

  statsValue: {
    fontWeight: 700,
    color: '#3B82F6'
  }
}

// Stats Data
export const STATS_DATA = [
  { label: 'Active Users', value: '50K+' },
  { label: 'Messages Sent', value: '2M+' },
  { label: 'Uptime', value: '99.9%' },
]
