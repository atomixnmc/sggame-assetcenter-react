import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BasicLayout } from "../components/layout/BasicLayout";
import { HeroPanel } from "./HeroPanel";

export const galleryImages = [
  {
    id: "s1",
    src: "/images/background/sggame-big-banner.jpg",
    // title: "50k+ 3d models characters",
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
export function AboutUsPage(props) {
  return (
    <BasicLayout>
      <div>
        <h3>About us</h3>
        <HeroPanel slides={galleryImages} />
        <hr />
        {introSGGame()}
        <hr />
        <div style={{ textAlign: "center" }}>
          <img
            alt=""
            style={{ margin: "auto" }}
            src="/images/background/bg-gaming-world-hitech.jpg"
          />
        </div>
        <hr />
        {introSGGameAssetCenter()}
      </div>
    </BasicLayout>
  );
}
function introSGGameAssetCenter() {
  return (
    <div>
      <h4>
        <a href="/">SGGame AssetCenter</a>
      </h4>
      <hr />
      <Card>
        <Row>
          <Col>
            <h5>
              SGGame AssetCenter is the collection of tools/ assets useful for
              game development!
            </h5>
            <div>
              <ul>
                <li>Download 3d Models, textures, sprites</li>
                <li>Preview/ edit assets in browser</li>
              </ul>
            </div>
          </Col>
          <Col>
            <img
              alt=""
              width="100%"
              src="/images/background/gaming-glow-neon-technology.jpg"
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
}

function introSGGame() {
  return (
    <div>
      <h3>SGGame History</h3>
      <h4>
        <a href="https://sggame.us">SGGame</a> is an indie game company, started
        from Hanoi, Vietnam. Currently we has offices based in Vietnam (Hanoi)
        and United State (Atlanta).
      </h4>
      <p className="text">
        Started in 2015, SGGame is a department of SGMedia. We create games and
        mobile apps, cartoons and music videos. Through out the years, millions
        of people had played and enjoy our games in various platform include
        AppleStore, Google play, Facebook Games. We strive to provide the WOW
        Factor to the Players include children and up. Players enjoy our games
        is what we value the most!
      </p>
    </div>
  );
}
