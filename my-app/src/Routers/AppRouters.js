import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../Components/LandingComponent/Landing";
import NewPost from "../Components/Post/New/NewPost";

export default function AppRouter() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="new" element={<NewPost />} />
            {/* <Route path="post" element={<Postview />}>
                <Route path="new" element={<NewPost />} />
                <Route path="all" element={<Landing />} />
            </Route> */}
        </Routes>
    </BrowserRouter>
}