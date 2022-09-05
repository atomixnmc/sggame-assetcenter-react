import React from "react";
import ReactDOM from "react-dom";

import {
  Container,
  Alert,
  Tabs,
  Tab,
  Navbar,
  Nav,
  NavDropdown,
  Breadcrumb
} from "react-bootstrap";
//import Card from "react-bootstrap/Card";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
// import { searchAsset } from "../data/effects/searchAsset";
import { ModelDetail } from "../components/models3d/ModelDetail";
import { BasicLayout } from "../components/layout/BasicLayout";

export default function ModelsPage() {
  let match = useRouteMatch();

  return (
    <BasicLayout>
      <Switch>
        <Route path={`${match.path}/:modelId`}>
          <ModelDetail />
        </Route>
        <Route path={match.path}>
          <h3>No model.</h3>
        </Route>
      </Switch>
    </BasicLayout>
  );
}
