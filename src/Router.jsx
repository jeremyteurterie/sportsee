import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Home from './pages/Home';
import Error404 from './pages/Error404';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<Error404 />} />
      <Route path="*" element={<Error404 />} />
    </>
  )
);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
