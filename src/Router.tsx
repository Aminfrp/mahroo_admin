import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./layouts/base/Base";

const Courses = lazy(() => import("./pages/courses/Courses"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Teachers = lazy(() => import("./pages/teachers/Teachers"));
const Users = lazy(() => import("./pages/users/Users"));

const Router = () => {
  return (
    <React.Suspense fallback={"Loading"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Base page={<Dashboard />} />} />
          <Route path="/teachers" element={<Base page={<Teachers />} />} />
          <Route path="/users" element={<Base page={<Users />} />} />
          <Route path="/courses" element={<Base page={<Courses />} />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default Router;
