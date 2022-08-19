import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./layouts/base/Base";
import CreateUser from "./pages/users/create/CreateUser";

const Courses = lazy(() => import("./pages/courses/Courses"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Teachers = lazy(() => import("./pages/teachers/Teachers"));
const Users = lazy(() => import("./pages/users/Users"));

const Router = () => {
  return (
    <React.Suspense fallback={"Loading"}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Base page={<Dashboard />} prevPage={""} />}
          />
          <Route
            path="teachers"
            element={<Base page={<Teachers />} prevPage={""} />}
          />
          <Route
            path="courses"
            element={<Base page={<Courses />} prevPage={""} />}
          />
          <Route path="users">
            <Route index element={<Base page={<Users />} prevPage={""} />} />
            <Route
              path="new"
              element={<Base page={<CreateUser />} prevPage={"/users"} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default Router;
