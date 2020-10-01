import React from "react";
import "./App.css";
import Home from "./Container/home";
import Layout from "./hoc/Layout";

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
