import { useRoutes } from 'react-router-dom'
import Home from 'src/pages/Home/Home'
import Login from 'src/pages/Login/Login'

export default function ElementsRouter() {
  const Routers = useRoutes([
    {
      path: '',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    }
  ])
  return Routers
}
