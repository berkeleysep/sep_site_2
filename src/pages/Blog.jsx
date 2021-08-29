import React from "react";
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";
import BlogComponent from "../components/BlogComponent";

export default function Blog() {
  return (
    <>
      <TopNav blog />
      <BlogComponent />
      <BottomNav />
    </>
  );
}
