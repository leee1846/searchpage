import React from "react";
import GlobalStyle from "./styles/reset";
import Header from "./components/Header/index";
import Layout from "./styles/Layout";

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Header />
    </Layout>
  );
}

export default App;
