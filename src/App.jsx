// import { useState } from 'react'
// import ThemeToggle from './components/ToggleTheme'
// import './App.css'

// function App() {
//   return (
//     <>
//       <ThemeToggle />
//     </>
//   )
// }

// export default App
import { Routes, Route, Navigate } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { Box, CircularProgress } from '@mui/material'
import { Toaster } from 'react-hot-toast'
import { ROUTES } from './constants/routes'
import { useAuth } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'


// Lazy loading — production performance
const Login     = lazy(() => import('./pages/Login/index'))
const Register  = lazy(() => import('./pages/Register/index'))
const Dashboard = lazy(() => import('./pages/Dashboard'))

const PageLoader = () => (
  <Box sx={{
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <CircularProgress sx={{ color: '#3B82F6' }} />
  </Box>
)

const App = () => {
  const { isLoggedIn } = useAuth()

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: '10px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
          },
          success: {
            style: { background: '#f0fdf4', color: '#166534' },
          },
          error: {
            style: { background: '#fef2f2', color: '#991b1b' },
          },
        }}
      />

      <Suspense fallback={<PageLoader />}>
        <Routes>

          {/* Public Routes */}
          <Route
            path={ROUTES.LOGIN}
            element={
              isLoggedIn
                ? <Navigate to={ROUTES.DASHBOARD} replace />
                : <Login />
            }
          />
          <Route
            path={ROUTES.REGISTER}
            element={
              isLoggedIn
                ? <Navigate to={ROUTES.DASHBOARD} replace />
                : <Register />
            }
          />

          {/* Protected Routes */}
          <Route
            path={ROUTES.DASHBOARD}
            element={
              // <ProtectedRoute>
                <Dashboard />
              // </ProtectedRoute>
            }
          />

          {/* 404 — koi bhi unknown route */}
          <Route
            path="*"
            element={<Navigate to={ROUTES.LOGIN} replace />}
          />

        </Routes>
      </Suspense>
    </>
  )
}

export default App