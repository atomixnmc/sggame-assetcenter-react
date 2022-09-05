import React from "react";
import { Button, Row, Col, Container, Form } from "react-bootstrap";
import { allOrignalSources } from "../../data/mockData";

export default function SearchBar(props) {
  const {
    onStartSearch,
    originalSource,
    originalSourceChange,
    category,
    categories,
    categoryChange,
    searchKeyword,
    searchKeywordChange,
    tempDisabled
  } = props;

  // console.log("Display SearchBar", categories);
  return (
    <>
      <Row>
        <Form.Control
          as="input"
          value={searchKeyword}
          onChange={(evt) => searchKeywordChange(evt.target.value)}
          placeholder="Keyword"
          style={{ width: "60%" }}
          onKeyDown={(evt) => {
            if (evt.key === "Enter") {
              onStartSearch();
            }
          }}
        />{" "}
        {categories && (
          <Form.Control
            as="select"
            title="Category"
            style={{ width: "15%" }}
            value={category || categories[0]}
            onChange={(evt) => categoryChange(evt.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat._id} value={cat.title}>
                {cat.title} ({cat.itemNum})
              </option>
            ))}
          </Form.Control>
        )}
        <Form.Control
          as="select"
          title="Source"
          style={{ width: "15%" }}
          onChange={(evt) => {
            if (evt.target.value !== originalSource)
              originalSourceChange(evt.target.value);
          }}
        >
          {allOrignalSources.map((op) => (
            <option key={op.value} value={op.value}>
              {op.title}
            </option>
          ))}
        </Form.Control>
        <Button disabled={tempDisabled} onClick={(evt) => onStartSearch()}>
          Search
        </Button>
      </Row>
    </>
  );
}
