import { Fragment } from "react";
import Navbar from "./components/navbar/Navbar";
import Restaurant from "./components/restaurants/Restaurant";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Restaurant />
    </Fragment>
  );
}

export default App;
