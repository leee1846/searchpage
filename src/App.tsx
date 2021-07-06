import React from "react";
import GlobalStyle from "./styles/reset";
import Layout from "./styles/Layout";
import SearchPage from "./pages/SearchPage";
import { Provider } from "react-redux";
import store from "./stores/rootStore";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <GlobalStyle />
        <SearchPage />
      </Layout>
    </Provider>
  );
}

export default App;
