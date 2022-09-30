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

  const withProvince = (data) => {
    return new Graphic({
      geometry: { type: "polygon", rings: data.rings },
      symbol: { type: "simple-fill", color: data.color || "red" },
      attributes: data,
      popupTemplate: {
        title: "{title}",
        content: "<a>Dân số: {population} <br> Diện tích: {area}</a>",
      },
    });
  };

  const withBridge = (data) => {
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

  const withCity = (data) => {
    return new Graphic({
      symbol: {
        type: "picture-marker",
        url: "https://cdn-icons-png.flaticon.com/512/4480/4480397.png",
        width: "48px",
        height: "48px",
      },
      attributes: data,
      popupTemplate: {
        title: "{title}",
        content: "<a>Dân số: {population} <br> Diện tích: {area}</a>",
      },
      geometry: { type: "point", ...data.coordinate },
    });
  };

  // tỉnh
  graphicsLayer.add(withProvince(long_an));
  graphicsLayer.add(withProvince(ben_tre));
  graphicsLayer.add(withProvince(soc_trang));
  graphicsLayer.add(withProvince(tien_giang));
  // cầu
  graphicsLayer.add(withBridge(cau_vam_cong));
  graphicsLayer.add(withBridge(cau_rach_mieu));
  graphicsLayer.add(withBridge(cau_nam_can));
  graphicsLayer.add(withBridge(cau_my_thuan));
  graphicsLayer.add(withBridge(cau_to_chau));
  graphicsLayer.add(withBridge(cau_my_loi));
  graphicsLayer.add(withBridge(cau_ham_luong));
  graphicsLayer.add(withBridge(cau_co_chien));
  graphicsLayer.add(withBridge(cau_cao_lanh));
  graphicsLayer.add(withBridge(cau_can_tho));

  //thành phố
  graphicsLayer.add(withCity(tp_tra_vinh));
  graphicsLayer.add(withCity(tp_vinh_long));
  graphicsLayer.add(withCity(tp_my_tho));
  graphicsLayer.add(withCity(tp_soc_trang));
  graphicsLayer.add(withCity(tp_tan_an));
  graphicsLayer.add(withCity(tp_rach_gia));
  graphicsLayer.add(withCity(tp_ha_tien));
  graphicsLayer.add(withCity(tp_vi_thanh));
  graphicsLayer.add(withCity(tp_nga_bay));
  graphicsLayer.add(withCity(tp_sa_dec));
  graphicsLayer.add(withCity(tp_hong_ngu));
  graphicsLayer.add(withCity(tp_cao_lanh));
  graphicsLayer.add(withCity(tp_ca_mau));
  graphicsLayer.add(withCity(tp_ben_tre));
  graphicsLayer.add(withCity(tp_bac_lieu));
  graphicsLayer.add(withCity(tp_long_xuyen));
  graphicsLayer.add(withCity(tp_chau_doc));
  // đường

  map.add(graphicsLayer);
});
