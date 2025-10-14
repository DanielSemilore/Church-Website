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
import SubHeader3 from "./Components/Homes/SubHeader3";
import SubHeader4 from "./Components/Homes/SubHeader4";
import SubHeader5 from "./Components/Homes/SubHeader5";
import SubHeader6 from "./Components/Homes/SubHeader6";
import Footer from "./Components/Homes/Footer";
import Head from "./Components/About/Head";
import SUB_HEADER1 from "./Components/About/SUB_HEADER1";

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
      <Route path="/SubHeader3" element={<SubHeader3 />} />
      <Route path="/SubHeader4" element={<SubHeader4 />} />
      <Route path="/SubHeader5" element={<SubHeader5 />} />
      <Route path="/SubHeader6" element={<SubHeader6 />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/About-head" element={<Head />} />
      <Route path="/About-subhead1" element={<SUB_HEADER1 />} />
    </Routes>
  </BrowserRouter>
);
