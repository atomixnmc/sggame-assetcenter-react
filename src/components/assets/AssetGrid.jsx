import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Card } from "react-bootstrap";
import { useRouteMatch, useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";

import "./AssetGrid.scss";
import { AssetCell } from "./AssetCell";

export default function AssetGrid({
  assets = [],
  loadMoreAssets,
  hasMore,
  isInfiniteScroll,
  title,
  subMenu
}) {
  console.log("--Display AssetGrid", { hasMore });
  const [itemSelected, setItemSelected] = useState();

  const selectItem = (item) => {
    if (item != itemSelected) {
      setItemSelected(item);
    } else {
      setItemSelected(null);
    }
  };

  return (
    <Card>
      <Card.Header>
        {title} <div className="float-right">{subMenu}</div>
      </Card.Header>
      <Card.Body>
        {assets && assets.length > 0 ? (
          isInfiniteScroll ? (
            <InfiniteScroll
              pageStart={0}
              loadMore={loadMoreAssets}
              hasMore={hasMore}
              loader={
                <Spinner key="spinner" animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              }
              style={{ width: "100%" }}
            >
              {displayGrid(assets)}
            </InfiniteScroll>
          ) : (
            displayGrid(assets)
          )
        ) : (
          <div style={{ textAlign: "center" }}>
            <h3>No assets found!</h3>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
function displayGrid(assets) {
  return (
    <Row>
      {(assets || []).map((assetItem) => (
        <Col md={3} lg={3} xl={3} xxl={3} key={assetItem.id || assetItem._id}>
          <AssetCell assetItem={assetItem} />
        </Col>
      ))}
    </Row>
  );
}
