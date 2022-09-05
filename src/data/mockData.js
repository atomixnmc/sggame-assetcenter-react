const assetJson = {
  _id: "asdascxzq21kqdpccmseqwqwkekoasdqwe1312",
  title: "Unity asset 1",
  author: "atomixnmc",
  created: "1/1/2020 00:00:00",
  categories: ["unity", "3d", "character"],
  images: [
    { url: "https://via.placeholder.com/600x320", title: "" },
    { url: "https://via.placeholder.com/600x320", title: "" },
    { url: "https://via.placeholder.com/600x320", title: "" }
  ]
};

export const assetsJson = [];

for (var i = 0; i < 11; i++)
  assetsJson.push({ ...assetJson, id: assetJson.id + "" + i });

export const relatedAssetsJson = [];

for (var i = 0; i < 6; i++) relatedAssetsJson.push(assetsJson[i]);

export const userJson = {
  username: "admin"
};

export const allOrignalSources = [
  {
    title: "cadnav",
    value: "cadnav",
    url: "https://cadnav.com"
  },
  {
    title: "open3dmodel",
    value: "open3dmodel",
    url: "https://open3dmodel.com"
  },
  {
    title: "modelsresource",
    value: "modelsresource",
    url: "https://models-resource.com"
  },
  {
    title: "archive3d",
    value: "archive3d",
    url: "https://archive3d.net"
  }
];
