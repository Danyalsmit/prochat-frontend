import { useState } from 'react'
import { Box, Card, CardContent } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import api from '../../api/axiosInstance'
import { ROUTES } from '../../constants/routes'
import toast from 'react-hot-toast'
import { loginStyles } from './loginStyles'
import LoginHeader from './LoginHeader'
import LoginForm from './LoginForm'
import InfoCards from './InfoCards'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [remember, setRemember] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })

  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || ROUTES.DASHBOARD

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleShowPasswordToggle = () => setShowPassword(!showPassword)

  const handleRememberChange = (checked) => setRemember(checked)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.email || !form.password) {
      setError('Please fill in all fields')
      return
    }
    try {
      setLoading(true)
      const res = await api.post('/auth/login', form)
      const user = res.data.data.user
      const authToken = res.data.data.token
      login(user, authToken)
      toast.success('Welcome back! 👋')
      navigate(from, { replace: true })
    } catch (err) {
      setError(err?.response?.data?.message || 'Invalid email or password')
      toast.error('Login failed!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box sx={loginStyles.mainContainer}>
      <Box sx={loginStyles.contentWrapper}>
        {/* ── LEFT — Login Card ────────────────── */}
        <Card elevation={3} sx={loginStyles.loginCard}>
          <CardContent sx={loginStyles.cardContent}>
            <LoginHeader />
            <LoginForm
              form={form}
              showPassword={showPassword}
              loading={loading}
              error={error}
              remember={remember}
              onShowPasswordToggle={handleShowPasswordToggle}
              onFormChange={handleChange}
              onRememberChange={handleRememberChange}
              onSubmit={handleSubmit}
            />
          </CardContent>
        </Card>

        {/* ── RIGHT — Info Cards ───────────────── */}
        <InfoCards />
      </Box>
    </Box>
  )
}

export default Login
