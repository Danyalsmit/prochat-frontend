import { useState } from 'react'
import {
  Box, TextField, Typography, Checkbox,
  FormControlLabel, Link, Alert,
  InputAdornment, IconButton,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import {
  PersonOutlined, EmailOutlined,
  LockOutlined, Visibility, VisibilityOff,
  HowToReg,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { ROUTES } from '../../constants/routes'
import { styles } from './registerStyles'
import toast from 'react-hot-toast'

const RegisterForm = () => {
  const [showPassword, setShowPassword]         = useState(false)
  const [showConfirmPassword, setShowConfirm]   = useState(false)
  const [loading, setLoading]                   = useState(false)
  const [error, setError]                       = useState('')
  const [agreed, setAgreed]                     = useState(false)
  const [form, setForm] = useState({
    fullName:        '',
    email:           '',
    password:        '',
    confirmPassword: '',
  })

  const { login }  = useAuth()
  const navigate   = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const validate = () => {
    if (!form.fullName || !form.email || !form.password || !form.confirmPassword) {
      setError('Please fill in all fields')
      return false
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters')
      return false
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match')
      return false
    }
    if (!agreed) {
      setError('Please agree to Terms of Service')
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    try {
      setLoading(true)
      // Baad mein real API call aayegi
      // const res = await api.post('/auth/register', form)
      // login(res.data.user, res.data.token)

      await new Promise(r => setTimeout(r, 1500))
      login({ name: form.fullName, email: form.email }, 'dummy-token')
      toast.success('Account created successfully! 🎉')
      navigate(ROUTES.DASHBOARD)
    } catch (err) {
      setError('Registration failed. Please try again.')
      toast.error('Registration failed!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      {/* Error */}
      {error && (
        <Alert severity="error" sx={{ borderRadius: 2 }}>
          {error}
        </Alert>
      )}

      {/* Full Name */}
      <Box>
        <Typography variant="caption" color="text.secondary" sx={styles.label}>
          FULL NAME
        </Typography>
        <TextField
          fullWidth size="small"
          name="fullName"
          placeholder="Danyal Khan"
          value={form.fullName}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonOutlined sx={{ fontSize: 18, color: 'text.secondary' }} />
              </InputAdornment>
            ),
          }}
          sx={styles.input}
        />
      </Box>

      {/* Email */}
      <Box>
        <Typography variant="caption" color="text.secondary" sx={styles.label}>
          EMAIL ADDRESS
        </Typography>
        <TextField
          fullWidth size="small"
          name="email"
          type="email"
          placeholder="name@company.com"
          value={form.email}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlined sx={{ fontSize: 18, color: 'text.secondary' }} />
              </InputAdornment>
            ),
          }}
          sx={styles.input}
        />
      </Box>

      {/* Password */}
      <Box>
        <Typography variant="caption" color="text.secondary" sx={styles.label}>
          PASSWORD
        </Typography>
        <TextField
          fullWidth size="small"
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Min. 6 characters"
          value={form.password}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlined sx={{ fontSize: 18, color: 'text.secondary' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton size="small" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={styles.input}
        />
      </Box>

      {/* Confirm Password */}
      <Box>
        <Typography variant="caption" color="text.secondary" sx={styles.label}>
          CONFIRM PASSWORD
        </Typography>
        <TextField
          fullWidth size="small"
          name="confirmPassword"
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder="Re-enter password"
          value={form.confirmPassword}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlined sx={{ fontSize: 18, color: 'text.secondary' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton size="small" onClick={() => setShowConfirm(!showConfirmPassword)}>
                  {showConfirmPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={styles.input}
        />
      </Box>

      {/* Terms */}
      <FormControlLabel
        control={
          <Checkbox
            size="small"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            sx={{ '&.Mui-checked': { color: '#3B82F6' } }}
          />
        }
        label={
          <Typography variant="caption" color="text.secondary">
            I agree to the{' '}
            <Link href="#" color="primary" underline="hover" fontWeight={600}>
              Terms of Service
            </Link>
            {' '}and{' '}
            <Link href="#" color="primary" underline="hover" fontWeight={600}>
              Privacy Policy
            </Link>
          </Typography>
        }
      />

      {/* Submit Button */}
      <LoadingButton
        fullWidth
        type="submit"
        variant="contained"
        loading={loading}
        endIcon={<HowToReg />}
        sx={styles.submitBtn}
      >
        Create Account
      </LoadingButton>

      {/* Login Link */}
      <Typography variant="body2" textAlign="center" color="text.secondary">
        Already have an account?{' '}
        <Link href={ROUTES.LOGIN} color="primary" fontWeight={600} underline="hover">
          Sign in
        </Link>
      </Typography>

    </Box>
  )
}

export default RegisterForm