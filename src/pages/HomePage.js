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
import { HeroPanel } from "./HeroPanel";

export default function HomePage(props) {
  // const match = useRouteMatch();
  const { tag, category } = useParams();
  // console.log({ tag, category });
  return (
    <BasicLayout>
      <HeroPanel slides={galleryImages} />
      <SearchTab tagParam={tag} categoryParam={category} />
    </BasicLayout>
  );
}
export const galleryImages = [
  {
    id: "s1",
    src:
      "https://i.all3dp.com/wp-content/uploads/2022/03/24171638/Characters.jpg",
    title: "50k+ 3d models characters",
    description: ""
  },
  {
    id: "s2",
    src:
      "https://images.adsttc.com/media/images/56ba/0951/e58e/cefd/de00/0119/large_jpg/BeFunky_Collage.jpg?1455032643",
    title: "Thousands of high quality textures",
    description: ""
  },
  {
    id: "s3",
    src: "https://wallpapercave.com/wp/wp1971941.jpg",
    title: "Vray materials",
    description: ""
  },
  {
    id: "s4",
    src: "https://wallpapercave.com/dwp1x/wp2682945.jpg",
    title: "Space images beyond imagination",
    description: ""
  }
];
