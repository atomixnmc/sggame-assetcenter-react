import React, { useEffect, useState } from "react";
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
import SearchTab from "../components/search/SearchTab";
import { BasicLayout } from "../components/layout/BasicLayout";

export default function SearchPage(props) {
  // const match = useRouteMatch();
  const { tag, category } = useParams();
  console.log({ tag, category });
  return (
    <BasicLayout>
      <SearchTab tagParam={tag} categoryParam={category} />
    </BasicLayout>
  );
}
