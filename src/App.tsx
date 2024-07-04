import ElementsRouter from './routers/ElementsRouter'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
function App() {
  const Router = ElementsRouter()
  return (
    <>
      {Router}
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}

export default App
