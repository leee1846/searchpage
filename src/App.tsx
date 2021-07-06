import React from "react";
import GlobalStyle from "./styles/reset";
import Layout from "./styles/Layout";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <SearchPage />
    </Layout>
  );
}

export default App;
