import React, { useState } from "react";
import "./App.scss";

import DocumentContainer from "./components/DocumentContainer/DocumentContainer";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="app">
      <h1 className="app__title">SLCM Documents</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <DocumentContainer search={search} />
    </div>
  );
}

export default App;
