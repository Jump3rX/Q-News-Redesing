import { useState } from "react";
import Card from "./components/Card";
import Head from "./components/Head";
import CategoryForm from "./components/CategoryForm";
import GetNews from "./components/GetNews";

function App() {
  return (
    <>
      <div className="container">
        <Head />
        <CategoryForm />
        <GetNews />
      </div>
    </>
  );
}

export default App;
