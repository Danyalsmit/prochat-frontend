export const styles = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #e0e7ff 0%, #f1f5f9 100%)',
    p: 2,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    borderRadius: 2,
    mx: 'auto',
  },
  cardContent: {
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: 2.5,
  },
  input: {
    '& .MuiOutlinedInput-root': { borderRadius: 2 },
  },
  submitBtn: {
    borderRadius: 2,
    py: 1.2,
    fontWeight: 600,
    fontSize: 15,
    background: '#3B82F6',
    '&:hover': { background: '#2563eb' },
  },
  label: {
    fontWeight: 600,
    letterSpacing: 0.5,
    display: 'block',
    mb: 0.8,
  },
}