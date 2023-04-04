import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../Components/LandingComponent/Landing";

export default function AppRouter() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            {/* <Route path="post" element={<Postview />}>
                <Route path="new" element={<Landing />} />
                <Route path="all" element={<Landing />} />
            </Route> */}
        </Routes>
    </BrowserRouter>
}