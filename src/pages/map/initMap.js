/* eslint-disable no-undef */
let map = null
let sourceList = []
export function create() {
  sourceList = [
    new ol.source.XYZ({
      url: 'http://m12.shipxy.com/tile.c?l=Na&m=o&x={x}&y={y}&z={z}',
    }),
    new ol.source.XYZ({
      url: '//webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
    }),
    new ol.source.XYZ({
      url: 'http://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
    }),
  ]
  const view = new ol.View({
    projection: 'EPSG:4326',
    center: [118.832714, 24.125976],
    zoom: 4.5,
  })
  map = new ol.Map({
    interactions: ol.interaction.defaults({
      pinchRotate: false, // 移动端禁止地图旋转
    }),
    controls: new ol.control.defaults({
      attribution: false,
      rotate: false,
      zoom: false,
    }),
    layers: [
      new ol.layer.Tile({
        source: sourceList[0],
      }),
    ],
    target: 'olMap',
    view: view,
  })

  return map
}
export function setSource(index) {
  let baseLayer = map.getLayers().item(0)
  baseLayer.setSource(sourceList[index])
}

export default {
  create,
  setSource,
}
