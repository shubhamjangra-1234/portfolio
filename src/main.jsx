/* eslint-disable no-unused-vars */
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Loader from "./Loader/Loader.jsx";
// Lazy load components
const IntroSection = React.lazy(() =>
  import("./assets/components/homepage/home.jsx")
);
const LandingPage = React.lazy(() =>
  import("./assets/components/LandingPage/LandingPage")
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path="/main"
        element={
          <Suspense fallback={<Loader />}>
            <IntroSection />
          </Suspense>
        }
      />
      <Route
        path=""
        element={
          <Suspense fallback={<Loader />}>
            <LandingPage />
          </Suspense>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
