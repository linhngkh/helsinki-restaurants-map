import { Fragment } from "react";
import Navbar from "./components/navbar/Navbar";
import Restaurant from "./components/restaurants/Restaurant";
import Map from "./components/map/Map";


function App() {
  return (
    <Fragment>
      <Navbar />
      <Map />
      <Restaurant />
    </Fragment>
  );
}

export default App;
