import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";
import Banner from "./components//Banner";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Moving from "./components/Moving";
import Popup from "./components/Popup";
import Carousel from "react-elastic-carousel";

import ananas1 from "./assets/ananas1.jpg";
import ananas2 from "./assets/ananas2.jpeg";
import ananas3 from "./assets/ananas3.jpg";
import ananas4 from "./assets/ananas4.jpeg";
import ananas5 from "./assets/ananas5.jpg";
import ananas6 from "./assets/ananas6.jpg";
import ananas7 from "./assets/ananas7.jpg";
import ananas8 from "./assets/ananas8.jpg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <Banner />
          <Section />
          <Carousel itemsToShow={4} breakPoints={breakPoints}>
            <img src={ananas1} />
            <img src={ananas2} />
            <img src={ananas3} />
            <img src={ananas4} />
            <img src={ananas5} />
            <img src={ananas6} />
            <img src={ananas7} />
            <img src={ananas8} />
          </Carousel>
          <Grid />
          <Moving />
          {/* <Popup /> */}
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
