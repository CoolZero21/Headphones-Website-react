import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage'
import TechSpecs from './pages/TechSpecs'
import Compare from './pages/Compare'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={ <MainLayout /> }>
    <Route index element={ <HomePage /> } />
    <Route path='/tech-specs' element={ <TechSpecs /> } />
    <Route path='/compare' element={ <Compare /> } />
  </Route>

)
);

const App = () => {
  return <RouterProvider router={router} />
}

export default App