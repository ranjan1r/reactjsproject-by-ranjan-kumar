
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Partials/Navbar"
import Footer from "./Partials/Footer"
import Home from "./Home";
import About from "./Partials/About";
import Shop from "./Partials/Shop";
import ContactUs from "./Partials/ContactUs";
import Error404 from "./Partials/Error404";
import AdminHome from "./Admin/AdminHome/AdminHome";
import AdminMaincetegory from "./Admin/AdminMaincetegory/AdminMaincetegory";
import AdminCreateMaincetegory from "./Admin/AdminMaincetegory/AdminCreateMaincetegory";
import AdminUpdateMaincetegory from "./Admin/AdminMaincetegory/AdminUpdateMaincetegory";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    {/* <Public Routes/> */}
                    <Route path="" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contact" element={<ContactUs />} />

                    {/* <Admin Routes /> */}
                    <Route path="/admin" element={<AdminHome />} />

                    <Route path="/admin/maincetegory" element={<AdminMaincetegory />} />
                    <Route path="/admin/maincetegory/create" element={<AdminCreateMaincetegory />} />
                    <Route path="/admin/maincetegory/update/:id" element={<AdminUpdateMaincetegory />} />

                    <Route path="/*" element={<Error404 />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>

    )
}