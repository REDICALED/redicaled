import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import DevPage from './pages/DevPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/dev',
    element: <DevPage />,
  },

])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
