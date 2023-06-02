import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../Components/LandingComponent/Landing";
import NewPost from "../Components/Post/New/NewPost";
import AllPost from "../Components/Post/List/List";

export default function AppRouter() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="post/new" element={<NewPost />} />
            <Route path="post/All" element={<AllPost />} />

            {/* <Route path="post" element={<PostView />}>
                <Route path="all" element={<LandingComponent />} />
            </Route> */}
        </Routes>

    </BrowserRouter>
}
