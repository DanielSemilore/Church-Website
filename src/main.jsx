import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog";
import Post from "./Components/Blog-Post/Post";
import Event from "./Components/Sermon-Event/Event";
import Sermon from "./Components/Sermon/Sermon";
import Home from "./Components/Homes/Home";
import Header from "./Components/Homes/Header";
import SubHeader1 from "./Components/Homes/SubHeader1";
import SubHeader2 from "./Components/Homes/SubHeader2";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} /> 
      <Route path="/home" element={<Header />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<div>404 Not Found</div>} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/post" element={<Post />} />
      <Route path="/events" element={<Event />} />
      <Route path="/sermons" element={<Sermon />} />
      <Route path="/SubHeader1" element={<SubHeader1 />} />
      <Route path="/SubHeader2" element={<SubHeader2 />} />
    </Routes>
  </BrowserRouter>
);
