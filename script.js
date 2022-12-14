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
    center: [105.78843324609142, 10.108445770112619],
  });
  const graphicsLayer = new GraphicsLayer();

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

  const withTown = (data) => {
    return new Graphic({
      symbol: {
        type: "picture-marker",
        url: "https://cdn-icons-png.flaticon.com/512/2377/2377922.png",
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

  const withHighway = (data) => {
    return new Graphic({
      geometry: { type: "polyline", paths: data.paths },
      symbol: { type: "simple-line", color: data.color, width: 2 },
      attributes: data,
      popupTemplate: {
        title: "{title}",
        content: "<a>Chiều dài: {length}</a>",
      },
    });
  };

  // tỉnh
  graphicsLayer.add(withProvince(long_an));
  graphicsLayer.add(withProvince(ben_tre));
  graphicsLayer.add(withProvince(soc_trang));
  graphicsLayer.add(withProvince(tien_giang));
  graphicsLayer.add(withProvince(an_giang));
  graphicsLayer.add(withProvince(can_tho));
  graphicsLayer.add(withProvince(hau_giang));

  graphicsLayer.add(withProvince(ca_mau));

  graphicsLayer.add(withProvince(tra_vinh));
  graphicsLayer.add(withProvince(dong_thap));
  graphicsLayer.add(withProvince(vinh_long));
  graphicsLayer.add(withProvince(bac_lieu));
  graphicsLayer.add(withProvince(kien_giang));
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
  // thị xa
  graphicsLayer.add(withTown(tx_binh_minh));
  graphicsLayer.add(withTown(tx_cai_lay));
  graphicsLayer.add(withTown(tx_tan_chau));
  graphicsLayer.add(withTown(tx_duyen_hai));
  graphicsLayer.add(withTown(tx_gia_rai));
  graphicsLayer.add(withTown(tx_go_cong));
  graphicsLayer.add(withTown(tx_kien_tuong));
  graphicsLayer.add(withTown(tx_long_my));
  graphicsLayer.add(withTown(tx_nga_nam));
  graphicsLayer.add(withTown(tx_vinh_chau));
  // đường
  graphicsLayer.add(withHighway(quoc_lo_60));
  graphicsLayer.add(withHighway(quoc_lo_61));
  graphicsLayer.add(withHighway(quoc_lo_61B));
  graphicsLayer.add(withHighway(quoc_lo_62));
  graphicsLayer.add(withHighway(quoc_lo_80));

  map.add(graphicsLayer);
});
