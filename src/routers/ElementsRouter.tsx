import { useRoutes } from 'react-router-dom'
import Home from 'src/pages/Home/Home'
import Login from 'src/pages/Auth/Login/Login'
import path from 'src/constants/path'
import AuthLayout from 'src/Layouts/AuthLayout'
import ForgotPassword from 'src/pages/Auth/ForgotPassword/ForgotPassword'

export default function ElementsRouter() {
  const Routers = useRoutes([
    {
      path: path.home,
      element: <Home />
    },
    {
      path: path.auth,
      element: <AuthLayout />,
      children: [
        {
          path: path.login,
          element: <Login />
        },
        {
          path: path.forgot,
          element: <ForgotPassword />
        }
      ]
    }
  ])
  return Routers
}
