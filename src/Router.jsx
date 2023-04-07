import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Layout from './layouts/Layout';
import Home from './pages/Home';
import Error404 from './pages/Error404';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />} errorElement={<Error404 />}>
        <Route index element={<Home />} errorElement={<Error404 />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </>
  )
);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
