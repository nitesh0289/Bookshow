import { Routes, Route } from "react-router";
import React from "react";

import AuthRoute from "./routes/AuthRoute";
import Layout from "./layouts";
import Pages from "./pages";
import NonAuthRoute from "./routes/NonAuthRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Pages.Home />} />
        <Route path="/:id" element={<Pages.MovieDetails />} />
        <Route path="/search" element={<Pages.Search />} />
        <Route path="/booking" element={<Pages.Booking />} />
        <Route
          path="/wishlist"
          element={
            <AuthRoute>
              <Pages.MyWishlist />
            </AuthRoute>
          }
        />
        <Route
          path="/my-bookings"
          element={
            <AuthRoute>
              <Pages.MyBookings />
            </AuthRoute>
          }
        />
      </Route>
      <Route
        path="/login"
        element={
          <NonAuthRoute>
            <Pages.Login />
          </NonAuthRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <NonAuthRoute>
            <Pages.Signup />
          </NonAuthRoute>
        }
      />
    </Routes>
  );
}

export default App;
