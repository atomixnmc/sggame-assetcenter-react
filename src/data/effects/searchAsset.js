import { serverUrl, defaultHeader } from "../../config/serverConfig";
// import { cleanText } from "../../util/stringUtil";
//FIXME: Use featherjs client instead!

export const searchAsset = ({
  searchKeyword,
  offset = 0,
  perPage = 24,
  order = null,
  ascDesc = 1,
  category = null,
  tag = null,
  originalSource = null
}) => {
  var queryPart = `$skip=${offset}&$limit=${perPage}`;
  if (order != "No order") {
    queryPart = `${queryPart}&$sort[${order}]=${ascDesc}`;
  }
  if (category) {
    queryPart = `${queryPart}&categories[$in][]=${category}`;
  }
  if (tag) {
    queryPart = `${queryPart}&tags[$in][]=${tag}`;
  }
  if (originalSource) {
    queryPart = `${queryPart}&originalSource=${originalSource}`;
  }
  if (searchKeyword && searchKeyword.trim() !== "") {
    queryPart = `$search=${searchKeyword}&${queryPart}`;
  }
  return fetch(`${serverUrl}/assets?${queryPart}`, {
    method: "GET",
    headers: defaultHeader
  }).then((response) => {
    return response.json();
  });
};

export const searchAssetPage = (searchKeyword, page = 0, perPage = 24) => {
  return searchAsset(searchKeyword, page * perPage, perPage);
};
