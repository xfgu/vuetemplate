<template>
  <div ref="gmap" class="w-100 h-100 bg-gray oh" id="cmap"></div>
</template>

<script>
import AgTileLayer from "@/utils/agTileLayer.js";
import { mapGetters } from "vuex";
export default {
  name: "gmap",
  data() {
    return {
      map: null,
      i: null,
      points: [],
      singleLine: [
        [23.140834, 113.305319],
        [23.138004, 113.306865],
        [23.138535, 113.304931],
      ],
      radius: null,
      circle: null,
      tempCircle: null,
      mapList: [],
      obj: {},
      box: {
        in: false,
        out: true,
      },
      mainMapLayerGroup: {},
      activeLayer: 0,
      legendList: [
        // { legend: require("@/assets/map_gf.png"), title: "公服用途" },
      ],
    };
  },
  methods: {
    setMap() {
      //初始化地图及图形绘制插件
      this.map = L.map("cmap", {
        crs: L.CRS.EPSG4326,
        minZoom: this.$config.mapConfig.minZoom,
        maxZoom: this.$config.mapConfig.maxZoom,
        center: this.$config.mapConfig.center,
        zoom: this.$config.mapConfig.zoom,
        attributionControl: false,
        zoomControl: false,
      });
      this.changeLayer();
    },

    changeLayer() {
      this.activeLayer = this.activeLayer == 0 ? 1 : 0;
      let mainMapLayerGroup = [];
      if (this.mainMapLayer != null) {
        this.mainMapLayer.clearLayers();
      }

      for (let layer of this.$config.mainMapUrl[this.activeLayer]) {
        mainMapLayerGroup.push(
          L.tileLayer(layer, {
            zoomOffset: 1,
            subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
          })
        );
      }
      for (let url of this.$config.customMapUrl) {
        let ringsTileLayer = AgTileLayer(url);
        mainMapLayerGroup.push(ringsTileLayer);
      }
      this.mainMapLayer = L.layerGroup(mainMapLayerGroup).addTo(this.map);
    },
    mapZoomIn() {
      //增加地图的缩放
      this.box.out = false;
      this.box.in = true;
      this.map.zoomIn();
    },
    mapZoomOut() {
      //减少地图的缩放
      this.box.out = true;
      this.box.in = false;
      this.map.zoomOut();
    },
    draw2() {
      this.map.on("mousedown", (e) => {
        let {
          latlng: { lat, lng },
        } = e;
        console.log(lat, lng);
        L.circle([lat, lng], {
          color: "#FF0000",
          fillColor: "#FF0000",
          radius: 4,
          fillOpacity: 1,
        }).addTo(this.map);
      });
    },
    draw(e) {
      let {
        latlng: { lat, lng },
      } = e;
      console.log(lat, lng);
      // L.marker(latlng).addTo(this.map);
      L.circle([lat, lng], {
        color: "#FF0000",
        fillColor: "#FF0000",
        radius: 4,
        fillOpacity: 1,
      }).addTo(this.map);
      // const polyline = L.polyline(this.singleLine, { color: "red" }).addTo(
      //   this.map
      // );
      // this.map.fitBounds(polyline.getBounds());
      // this.points = [];
      // this.points.push([e.latlng.lat, e.latlng.lng]);
      // const polygon = new L.Polygon(this.points, { color: "red" });
      // console.log(this.points);
      // this.map.addLayer(polygon);
      // this.map.on("mousemove", (event) => {
      //   polygon.setLatLngs([
      //     ...this.points,
      //     [event.latlng.lat, event.latlng.lng],
      //   ]);
      // });
      // this.map.on("mousedown", (e) => {

      // });
    },
    onmouseDown(e) {
      this.radius = 0;
      this.circle = 0;
      this.tempCircle = L.circle();

      // 确定圆心
      this.i = e.latlng;
      if (this.circle != 0) {
        this.map.off("mousedown", this.onmouseDown);
        this.map.off("mousemove", this.onMove);
        this.circle = 0;
        this.i = null;
      }
    },
    onMove(e) {
      console.log(this.i);
      if (this.i) {
        this.circle = 1;
        this.radius = L.latLng(e.latlng).distanceTo(this.i);
        this.tempCircle.setLatLng(this.i);
        this.tempCircle.setRadius(this.radius);
        this.tempCircle.setStyle({
          color: "#ff0000",
          fillColor: "#ff0000",
          fillOpacity: 0.5,
        });
        this.map.addLayer(this.tempCircle);
      } else {
        console.log(3123);
      }
    },
  },
  computed: {
    ...mapGetters([""]),
  },
  watch: {
   
  },
  mounted() {
    this.setMap();
    this.draw2();
  },
};
</script>

<style lang="stylus" scoped></style>