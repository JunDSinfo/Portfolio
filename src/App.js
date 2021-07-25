import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import common_fr from "./translations/fr/common.json";
import common_en from "./translations/en/common.json";
import ScrollToTop from "./components/ScrollToTop";

i18next.init({
  //debug: true,
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',                              // language to use
  resources: {
    en: {
      common: common_en,
    },
    fr: {
      common: common_fr,
    },
  },
  react: {
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p', 'ol', 'li', 'img']
  }
});


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename={window.location.pathname || ''}>

      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <I18nextProvider i18n={ i18next }>
              <Home />
            </I18nextProvider>
          </Route>
          <Route path="/project">
            <I18nextProvider i18n={ i18next }>
              <Projects />
            </I18nextProvider>
          </Route>
          <Route path="/about">
            <I18nextProvider i18n={i18next}>
              <About />
            </I18nextProvider>
          </Route>
          <Route path="/resume">
            <I18nextProvider i18n={i18next}>
              <Resume />
            </I18nextProvider>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
