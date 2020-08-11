import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Appbar from "./Appbar";
import Footer from "./Footer";
import Info from "./Info";
import CardContainer from "./CardContainer";

export default function MainLayout() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Appbar />
      <main>
        <Info />
        <CardContainer />
      </main>

      <Footer />
    </React.Fragment>
  );
}
