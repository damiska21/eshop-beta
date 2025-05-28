// PageWrapper.jsx
import React from "react";
import "./PageWrapper.css";

export default function PageWrapper({ children }) {
  return <div className="fade-page">{children}</div>;
}
