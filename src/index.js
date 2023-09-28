import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/header";
import Table from "./components/table/table";
import Exempls from "./components/exempl/exem";
import Footer from "./components/footer/footer";

const root = document.getElementById('root');


ReactDOM.render(
    <>
      <Header />
      <Table />
      <Exempls />
      <Footer/>
    </>,
    root
  );