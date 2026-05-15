import { Box, Typography, IconButton, InputAdornment, TextField, Link, FormControlLabel, Checkbox, Alert, Divider } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { Visibility, VisibilityOff, Google, EmailOutlined, LockOutlined } from '@mui/icons-material'
import { loginStyles } from './loginStyles'
import { ROUTES } from '../../constants/routes'

const LoginForm = ({ form, showPassword, loading, error, remember, onShowPasswordToggle, onFormChange, onRememberChange, onSubmit }) => {
  return (
    <>
      {/* Error Alert */}
      {error && (
        <Alert severity="error" sx={{ mb: 2, borderRadius: 2 }}>
          {error}
        </Alert>
      )}

      {/* Form */}
      <Box component="form" onSubmit={onSubmit} sx={loginStyles.form}>

        {/* Email Field */}
        <Box>
          <Typography
            variant="caption"
            fontWeight={600}
            color="text.secondary"
            sx={loginStyles.formLabel}
          >
            EMAIL ADDRESS
          </Typography>
          <TextField
            fullWidth
            size="small"
            name="email"
            type="email"
            placeholder="name@company.com"
            value={form.email}
            onChange={onFormChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlined sx={{ fontSize: 18, color: 'text.secondary' }} />
                </InputAdornment>
              ),
            }}
            sx={loginStyles.textField}
          />
        </Box>

        {/* Password Field */}
        <Box>
          <Box sx={loginStyles.passwordBox}>
            <Typography
              variant="caption"
              fontWeight={600}
              color="text.secondary"
              sx={{ letterSpacing: 0.5 }}
            >
              PASSWORD
            </Typography>
            <Link href="#" variant="caption" color="primary" underline="hover" fontWeight={500}>
              Forgot Password?
            </Link>
          </Box>
          <TextField
            fullWidth
            size="small"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            value={form.password}
            onChange={onFormChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined sx={{ fontSize: 18, color: 'text.secondary' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    size="small"
                    onClick={onShowPasswordToggle}
                  >
                    {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={loginStyles.textField}
          />
        </Box>

        {/* Remember me */}
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              checked={remember}
              onChange={(e) => onRememberChange(e.target.checked)}
              sx={{ '&.Mui-checked': { color: '#3B82F6' } }}
            />
          }
          label={
            <Typography variant="caption" color="text.secondary">
              Remember me on this device
            </Typography>
          }
        />

        {/* Login Button */}
        <LoadingButton
          fullWidth
          type="submit"
          variant="contained"
          loading={loading}
          sx={loginStyles.loginButton}
        >
          Log In
        </LoadingButton>

        {/* Divider */}
        <Divider sx={loginStyles.dividerBox}>
          <Typography variant="caption" color="text.secondary">
            OR CONTINUE WITH
          </Typography>
        </Divider>

        {/* Social Buttons */}
        <Box sx={loginStyles.socialBox}>
          <LoadingButton
            fullWidth
            variant="outlined"
            startIcon={<Google />}
            sx={loginStyles.socialButton}
          >
            Google
          </LoadingButton>
          <LoadingButton
            fullWidth
            variant="outlined"
            sx={loginStyles.socialButton}
          >
            SSO
          </LoadingButton>
        </Box>

        {/* Register Link */}
        <Typography variant="body2" textAlign="center" color="text.secondary">
          New to ProChat?{' '}
          <Link href={ROUTES.REGISTER} color="primary" fontWeight={600} underline="hover">
            Create an account
          </Link>
        </Typography>

        {/* Terms */}
        <Typography variant="caption" textAlign="center" color="text.secondary">
          By logging in, you agree to our{' '}
          <Link href="#" underline="hover" color="primary">
            Terms of Service
          </Link>
          {' '}and{' '}
          <Link href="#" underline="hover" color="primary">
            Privacy Policy
          </Link>
        </Typography>

      </Box>
    </>
  )
}

export default LoginForm
