import React, { useState, useEffect } from "react";
import { Button, Row, Col, Badge, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { keys as _keys, uniq } from "lodash-es";
import { Carousel } from "react-responsive-carousel";
import {
  getAssetDownloadUrl,
  getAssetDetail
} from "../../data/effects/crudAsset";
import { BsCaretLeft, BsDownload } from "react-icons/bs";
import { cleanText } from "../../util/stringUtil";

export function ModelDetail({}) {
  let { modelId } = useParams();
  const [assetItem, setAssetItem] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAssetDetail(modelId)
      .then((response) => {
        setAssetItem(response.items || response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Row>
      <Col>
        {assetItem && (
          <Card>
            <Card.Header>
              <Row>
                <Col lg={1}>
                  <Link to="/">
                    <Button>
                      <BsCaretLeft /> Back
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <h5>Model: {assetItem.title}</h5>{" "}
                  <h6>
                    <b>Categories: </b>
                    {assetItem.categories &&
                      uniq(assetItem.categories).map((cat) => (
                        <span key={cat}>
                          <Link to={`/search/category/${cleanText(cat)}`}>
                            <Badge variant="secondary">{cat}</Badge>
                          </Link>{" "}
                        </span>
                      ))}
                  </h6>
                  <span className="sm">
                    From:{" "}
                    <a href={assetItem.originalSource}>
                      {assetItem.originalSource}
                    </a>
                  </span>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body style={{ padding: "2px" }}>
              <Row>
                <Col lg={3} md={3}>
                  <div style={{ textAlign: "center", marginTop: "10px" }}>
                    {(assetItem.thumbnail || assetItem.images) && (
                      <img
                        alt="Thumbnail"
                        width="80%"
                        // height="240px"
                        src={
                          assetItem.thumbnail
                            ? assetItem.thumbnail
                            : assetItem.images[0].url
                        }
                      />
                    )}
                    <div style={{ textAlign: "center", marginTop: "10px" }}>
                      <Button href={getAssetDownloadUrl(assetItem._id)}>
                        <BsDownload /> Download
                      </Button>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <Card>
                      <Card.Header>
                        <h6>Detail</h6>
                      </Card.Header>
                      <Card.Body>
                        <ul>
                          {_keys(assetItem.metaData).map((key) => (
                            <li key={key}>
                              {key} : {assetItem.metaData[key]}
                            </li>
                          ))}
                        </ul>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
                <Col lg={9} md={9}>
                  <Card>
                    <Card.Header>
                      <h5>Model: {assetItem.title}</h5>
                    </Card.Header>
                    <Card.Body>
                      <div>
                        <h6>Gallery</h6>
                        <Row>
                          <Col md={12} lg={12}>
                            {assetItem.images && assetItem.images.length > 0 && (
                              <Carousel style={{ height: "600px" }}>
                                {assetItem.images.map((image) => (
                                  <img
                                    alt=""
                                    key={image.src}
                                    src={image.src}
                                    // height={"400px"}
                                    style={{
                                      maxHeight: "400px",
                                      width: "inherit"
                                    }}
                                  />
                                ))}
                              </Carousel>
                            )}
                          </Col>
                        </Row>
                      </div>
                      <div>
                        <h6>
                          Tags:{" "}
                          {assetItem.tags &&
                            uniq(assetItem.tags).map((tag) => (
                              <span key={tag}>
                                <Link to={`/search/tag/${cleanText(tag)}`}>
                                  <Badge variant="info">{tag}</Badge>
                                </Link>{" "}
                              </span>
                            ))}
                        </h6>
                      </div>
                      <div>
                        <h6>Description</h6>
                        <p>{assetItem.description}</p>
                      </div>

                      <div>
                        <h6>
                          Links:{" "}
                          <a
                            href={
                              assetItem.originalDownloadLink ||
                              assetItem.originalDetailUrl
                            }
                          >
                            Original download link
                          </a>
                        </h6>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        )}
      </Col>
    </Row>
  );
}
