require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/layers/GraphicsLayer",
], function (esriConfig, Map, MapView, Graphic, GraphicsLayer) {
  const map = new Map({
    basemap: "topo-vector",
  });
  const view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 8,
    // center: [15, 65] // longitude, latitude
    center: [106.10183715820308, 10.583671721437], // longitude, latitude 10.8811081,106.7976408
  });
  const graphicsLayer = new GraphicsLayer();

  //   const withProvince = (data) => {
  //     return new Graphic({
  //       geometry: { type: "polygon", rings: data.rings },
  //       symbol: { type: "simple-fill", color: data.color },
  //       attributes: data,
  //       popupTemplate: {
  //         title: "{title}",
  //         content: "<a>Dân số: {population} <br> Diện tích: {area}</a>",
  //       },
  //     });
  //   };

  const widthBridge = (data) => {
    return new Graphic({
      symbol: {
        type: "picture-marker",
        url: bridgeImg,
        width: "48px",
        height: "48px",
      },
      attributes: data,
      popupTemplate: {
        title: "{title}",
        content: "<a>{desc} <br> Chiều dài: {length}</a>",
      },
      geometry: { type: "point", ...data.coordinate },
    });
  };

  // tỉnh

  // cầu
  graphicsLayer.add(widthBridge(cau_vam_cong));
  graphicsLayer.add(widthBridge(cau_rach_mieu));
  graphicsLayer.add(widthBridge(cau_nam_can));
  graphicsLayer.add(widthBridge(cau_my_thuan));
  graphicsLayer.add(widthBridge(cau_my_thuan_2));
  graphicsLayer.add(widthBridge(cau_my_loi));
  graphicsLayer.add(widthBridge(cau_ham_luong));
  graphicsLayer.add(widthBridge(cau_co_chien));
  graphicsLayer.add(widthBridge(cau_cao_lanh));
  graphicsLayer.add(widthBridge(cau_can_tho));

  // đường

  map.add(graphicsLayer);
});
