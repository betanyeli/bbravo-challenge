import React from "react";
import "./App.css";
import * as ApiManager from "./Api/ApiManager";
import MainLayout from "./Screens/MainLayout/MainLayout";

function App() {
  ApiManager.getData();
  return (
    <div className="App">
        <MainLayout />
    </div>
  );
}

export default App;
