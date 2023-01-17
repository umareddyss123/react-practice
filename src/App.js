import { createBrowserRouter, createRoutesFromElements, RouterProvider,
 } from 'react-router-dom';
import ErrorPage from './pages/Error';

import Homepage from './pages/Home';
import Productpage from './pages/product';
import RootLayout from './pages/Root';
// const routerDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/products" element ={<Homepage/>}/>
//   </Route>
// )

const router = createBrowserRouter([
  {
    path: '/',
    element:<RootLayout />,
    errorElement:<ErrorPage />,
    children: [
      { path: '/', element: <Homepage/> },
  { path: '/product', element: <Productpage /> },

    ],
  },



]);

function App() {
  return <RouterProvider router = {router}/>;
}

export default App;
