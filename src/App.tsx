import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  // {
  //   path: '/about',
  //   element: <About />,
  // },

])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
