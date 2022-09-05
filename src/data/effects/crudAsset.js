import { serverUrl, defaultHeader } from "../../config/serverConfig";
export const getAssetDetail = (id) => {
  return fetch(`${serverUrl}/assets/${id}`, {
    method: "GET",
    headers: defaultHeader
  }).then((response) => {
    return response.json();
  });
};

export const getAssetDownloadUrl = (id) => {
  return `${serverUrl}/assetDownload/${id}`;
};
export const getDownloadRoot = (originalSource) => {
  return "https://open3dmodel.com";
};
export const getAssetCategories = () => {
  return fetch(`${serverUrl}/assetCategories/?$limit=1000`, {
    method: "GET",
    headers: defaultHeader
  }).then((response) => {
    return response.json();
  });
};
