
import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import NotFound from "./Pages/NotFound"
import ProtectedRoute from "./Components/ProtectedRoute"
import CarDetails from "./Components/CarDetails"
import CarBreadcrumb from "./Components/Breadcrumb"
import QueryList from "./Pages/QueryList"



function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<CarDetails />} />
        <Route path="/carsList" element={<Home />} />
        <Route path="/queryList" element={
          <ProtectedRoute>
            <QueryList />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App



