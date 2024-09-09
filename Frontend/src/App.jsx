
import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./Pages/Home"
import CarDetails from "./Components/CarDetails"
import CarBreadcrumb from "./Components/Breadcrumb"




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<CarDetails />} />
        <Route path="/carsList" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App



