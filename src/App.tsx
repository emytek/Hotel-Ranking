import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Main from './pages/Home'
import Create from './pages/Create'

function App() {
  // router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Main />} />
      <Route path="create" element={<Create />} />
    </Route>
  )
)

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
