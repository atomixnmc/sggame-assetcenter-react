import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsDownload } from "react-icons/bs";
import { getAssetDownloadUrl } from "../../data/effects/crudAsset";
import "./AssetCell.scss";

export function AssetCell(props) {
  const { assetItem } = props;
  assetItem.downloadUrl = getAssetDownloadUrl(assetItem._id);
  return (
    <div key={assetItem.id || assetItem._id} className="shadow asset-cell">
      <Link to={`/models/${assetItem._id}`}>
        {(assetItem.thumbnail || assetItem.images) && (
          <img
            alt="Thumbnail"
            width="100%"
            height="140px"
            src={
              assetItem.thumbnail
                ? assetItem.thumbnail
                : assetItem.images && assetItem.images.length > 0
                ? assetItem.images[0].url
                : "/images/no-image.png"
            }
          />
        )}
      </Link>
      <div
        style={{
          textAlign: "center",
          padding: "6px"
        }}
      >
        <h5
          className="textOverflow"
          style={{ maxWidth: "100%", padding: "0.5rem" }}
        >
          {assetItem.title}
        </h5>
        <Row noGutters>
          <Col title={assetItem.formats}>
            {assetItem.formats} |{" "}
            {assetItem.metaData && assetItem.metaData["File Size"]}{" "}
          </Col>
          <Col style={{ textAlign: "right" }}>
            <Link to={`/models/${assetItem._id}`}>
              <Button size="sm" title="View detail">
                <BsFillEyeFill />
              </Button>
            </Link>
            <Button
              size="sm"
              title="Download"
              href={assetItem.downloadUrl}
              target="_blank"
            >
              <BsDownload />
              {/* Download */}
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
