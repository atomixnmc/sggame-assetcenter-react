import React from "react";
import ReactDOM from "react-dom";

import {
  Button,
  Row,
  Col,
  Container,
  Alert,
  Tabs,
  Tab,
  NavDropdown,
  Breadcrumb
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ModelsPage from "./pages/ModelsPage";
import SearchPage from "./pages/SearchPage";
//import BotTab from "./components/BotTab";
import { AboutUsPage } from "./pages/AboutUsPage";
import { BasicLayout } from "./components/layout/BasicLayout";
import { Helmet } from "react-helmet";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import { assetsJson, userJson, relatedAssetsJson } from "./data/mockData";
export default function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>SGGame Asset Center</title>
      </Helmet>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route path={`/search/tag/:tag`}>
            <SearchPage byTag={true} />
          </Route>
          <Route path={`/search/category/:category`}>
            <SearchPage byCat={true} />
          </Route>
          <Route path="/about">
            <AboutUsPage />
          </Route>
          <Route path="/models">
            <ModelsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
