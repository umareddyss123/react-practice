import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/Error";

import Homepage from "./pages/Home";
import ProductPage from "./pages/product";
import ProductDetailPage from "./pages/ProductDetails";
import RootLayout from "./pages/Root";
// const routerDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/products" element ={<Homepage/>}/>
//   </Route>
// )

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "products", element: <ProductPage /> },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
