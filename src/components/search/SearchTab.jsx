import React, { useState, useEffect } from "react";
import {
  Button,
  ButtonGroup,
  Row,
  Col,
  Container,
  Alert,
  Tabs,
  Tab,
  DropdownButton,
  Dropdown,
  ToggleButtonGroup,
  ToggleButton,
  Badge
} from "react-bootstrap";
import { useRouteMatch, useParams } from "react-router-dom";
import SearchBar from "./SearchBar";
import AssetGrid from "../assets/AssetGrid";
//import AssetContent from "../assets/AssetContent";
//import AssetDetail from "../assets/AssetDetail";
//import UsefulLink from "./UsefulLink";
import { searchAsset } from "../../data/effects/searchAsset";
import { getDownloadRoot, getAssetDetail } from "../../data/effects/crudAsset";
import { uniqBy, sortBy } from "lodash-es";
import { getAssetCategories } from "../../data/effects/crudAsset";

//const getSearchResultRemote =

export default function SearchTab(props) {
  const { tagParam, categoryParam, startOriginalSource } = props;
  const [pagination, setPagination] = useState({
    page: 0,
    totalRecords: 0,
    offset: 0,
    ascDesc: 1,
    limit: 24,
    order: "No order",
    isHasMore: true,
    isRequestingMore: false,
    isAdding: true,
    lastOffset: 0,
    lastNum: 0
  });
  // const { isAdding, isHasMore, isRequestingMore } = pagination;
  const [originalSource, setOriginalSource] = useState(startOriginalSource);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [tag, setTag] = useState(tagParam);
  const [category, setCategory] = useState(categoryParam);
  //const [category, setCategory] = useState("");
  const [assetList, setAssetList] = useState([]);
  // const [isCanSearch, setIsCanSearch] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  // console.log("Display SearchTab----------------------------------------");
  // console.log("Display SearchTab", {
  //   offset,
  //   isCanSearch,
  //   isLoading,
  //   pagination
  // });

  useEffect(() => {
    const fetchAssetCategoriesData = async () => {
      await getAssetCategories().then((responseData) => {
        // console.log(responseData);
        const list = responseData.data || responseData.items || responseData;
        setCategories(sortBy(list, "title"));
      });
    };
    fetchAssetCategoriesData().catch(console.error);
  }, []);
  useEffect(() => {
    const fetchAssetsData = async () => {
      const { offset, ascDesc, limit, order } = pagination;
      console.log(
        "Search data for keyword : ",
        searchKeyword ? searchKeyword : "Empty keyword"
      );
      setIsLoading(true);
      const result = await searchAsset({
        searchKeyword,
        offset,
        limit,
        order,
        ascDesc,
        category,
        tag,
        originalSource
      })
        .then((response) => {
          const { isAdding } = pagination;
          const addedList = response.items || response.data || response;
          let newList = [];
          if (isAdding) {
            // console.log({ isAdding }, "Adding");
            newList = uniqBy([...(assetList || []), ...addedList], "_id");
          } else {
            // console.log({ isAdding }, "Replace");
            newList = uniqBy(addedList, "_id");
          }
          let isHasMoreNew = true;
          if (addedList.length < limit) {
            isHasMoreNew = false;
          }
          setPagination({
            ...pagination,
            lastOffset: offset,
            lastNum: newList.length,
            isHasMore: isHasMoreNew,
            isRequestingMore: false,
            totalRecords: response.total || addedList.length
          });
          setAssetList(newList);
          setIsLoading(false); //DONE!
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
        });
    };
    const isSearchingValid =
      !searchKeyword ||
      (searchKeyword &&
        (searchKeyword.trim().length === 0 ||
          searchKeyword.trim().length >= 3));
    if (!isLoading && isSearchingValid) {
      fetchAssetsData().catch(console.error);
    }
  }, [
    searchKeyword,
    // assetList,
    category,
    pagination,
    tag,
    originalSource
  ]);

  const handleStartSearch = () => {
    // console.log("TRY handleStartSearch");
    if (!isLoading) {
      setPagination({ ...pagination, page: 0, offset: 0, isAdding: false });
    }
  };
  const handleLoadMoreAssets = () => {
    const { isAdding, isRequestingMore, offset, limit } = pagination;
    const perPage = limit;
    console.log("TRY loadMoreAssets? -> ", {
      offset,
      pagination
    });
    if (!isLoading && !isRequestingMore) {
      // console.log("CALL - loadMoreAssets -> ", offset);
      setPagination({
        ...pagination,
        isAdding: true,
        isRequestingMore: true,
        offset: offset + perPage
      });
    } else {
      // console.log("SKIP loadMoreAssets -> ", offset);
    }
  };
  const goToPage = (page) => {
    const { limit } = pagination;
    const perPage = limit;
    // console.log("goToPage");
    if (!isLoading) {
      setPagination({ ...pagination, offset: page * perPage });
      // setIsCanSearch(true);
    }
  };
  const handleChangeAscDesc = (newAscDesc) => {
    if (!isLoading) {
      setPagination({ ...pagination, ascDesc: newAscDesc, isAdding: false });
    }
  };
  const handleChangePerPage = (newPerpage) => {
    // console.log("TRY handleChangePerPage");
    if (!isLoading) {
      setPagination({
        ...pagination,
        page: 0,
        offset: 0,
        limit: newPerpage,
        isAdding: false
      });
      // setPerPage(newPerpage);
      // setIsCanSearch(true);
    }
  };
  const handleChangeOrder = (newOrder) => {
    // console.log("TRY handleChangeOrder");
    if (!isLoading) {
      setPagination({ ...pagination, order: newOrder, isAdding: false });
    }
  };
  const handleKeywordChange = (val) => {
    // console.log("TRY handleKeywordChange");
    if (!isLoading) {
      setPagination({ ...pagination, isAdding: false });
      setSearchKeyword(val);
    }
  };
  const handleOriginalSourceChange = (val) => {
    // console.log("TRY handleOriginalSourceChange");
    // console.log({ isLoading });
    if (!isLoading) {
      setPagination({ ...pagination, page: 0, offset: 0, isAdding: false });
      setOriginalSource(val);
    }
  };
  const handleCategoryChange = (val) => {
    // console.log("TRY handleCategoryChange");
    if (!isLoading) {
      setPagination({ ...pagination, page: 0, offset: 0, isAdding: false });
      setCategory(val);
    }
  };
  // const goToAssetDetail = () => {};

  const { limit, totalRecords, order, ascDesc } = pagination;
  let perPage = limit;
  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <Container style={{ padding: "8px" }}>
            <SearchBar
              categories={categories}
              category={category}
              categoryChange={handleCategoryChange}
              searchKeyword={searchKeyword}
              searchKeywordChange={handleKeywordChange}
              onStartSearch={handleStartSearch}
              tempDisabled={isLoading}
              originalSource={originalSource}
              originalSourceChange={handleOriginalSourceChange}
            />
          </Container>
          {/* <h4>
            isHasMore: {isHasMore.toString()} and setIsRequestingMore{" "}
            {isRequestingMore.toString()}{" "}
            {(isHasMore && !isRequestingMore).toString()}
          </h4> */}
          <AssetGrid
            title={
              <>
                <h4>
                  Assets ({totalRecords > 0 ? "Total : " + totalRecords : ""})
                </h4>
                {tag && (
                  <>
                    <b>Cad: </b>
                    <Badge variant="secondary">{tag}</Badge>
                  </>
                )}
              </>
            }
            subMenu={
              <SubMenu
                {...{
                  order,
                  ascDesc,
                  handleChangeAscDesc,
                  handleChangeOrder,
                  perPage,
                  handleChangePerPage
                }}
              />
            }
            assets={assetList || []}
            loadMoreAssets={handleLoadMoreAssets}
            // goToAssetDetail={goToAssetDetail}
            // downloadRoot={getDownloadRoot()}
            isInfiniteScroll={true}
            hasMore={pagination.isHasMore && !pagination.isRequestingMore}
          />
          {/* <AssetDetail asset={assets[0]} />
            <AssetContent assets={[assets[0], assets[1]]} /> 
            <AssetGrid assets={relatedAssets} />
             <UsefulLink /> */}
        </Col>
        <Col lg={2}></Col>
      </Row>
    </Container>
  );
}

const SubMenu = ({
  order,
  ascDesc,
  perPage,
  handleChangeAscDesc,
  handleChangeOrder,
  handleChangePerPage
}) => {
  const nums = [24, 60, 120];
  const orders = ["No order", "title", "created"];
  return (
    <React.Fragment>
      <DropdownButton as={ButtonGroup} size="sm" variant="" title={order}>
        {orders.map((order) => (
          <Dropdown.Item
            key={order}
            onClick={(evt) => handleChangeOrder(order)}
          >
            {order}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      {order != "No order" && (
        <ToggleButtonGroup
          type="radio"
          size="sm"
          name="order-options"
          defaultValue={ascDesc}
          onChange={(val) => handleChangeAscDesc(val)}
        >
          <ToggleButton value={1}>Asc</ToggleButton>
          <ToggleButton value={-1}>Desc</ToggleButton>
        </ToggleButtonGroup>
      )}
      <DropdownButton as={ButtonGroup} size="sm" variant="" title={perPage}>
        {nums.map((num) => (
          <Dropdown.Item key={num} onClick={(evt) => handleChangePerPage(num)}>
            {num}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </React.Fragment>
  );
};
