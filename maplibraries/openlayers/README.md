 <h1 align="center">Openlayers</h1>

- Openlayers is an open-source JavaScript library that allows you to add dynamic maps to any web application. The Openlayers library, which includes Canvas 2D and WebGL technologies, can be used to develop mobile-friendly map applications consisting of raster or vector data. The scope of the Openlayers library can be easily expanded with plugins developed by the community.

- The `Map`, `View`, one or more layers, and a `DOM Element` added to an HTML file are required for the basic components of the Openlayers library.

```
const map = new ol.Map({
    view: new ol.View({
        center: [0, 0],
        zoom: 5,
    }),
    target: 'map',
})
```

- Map components require map layers to be meaningful. Layers that cover vector or raster data can be of different types. If no information will be taken from the map or no action will be taken with the map, vector layers are used if there is no raster.
- To create a layer in the Openlayers library, the source of the layer must first be created. The source and layer type should be selected according to the type of layer to be used. Since the layers to be used as base maps are generally of raster type, the `ol.source.Tile` type is used. Openlayers developers have some open source raster layer sources pre-defined in the library to make their lives easier.
- The base map layer, which is offered as open source by OpenStreetMap, is defined as follows and added to the map component;

```
const osmLayer = new ol.layer.Tile({
    source: new ol.source.OSM()
});
map.addLayer(osmLayer);
```

- Since data is managed through layer sources in the Openlayers library, even if a single point is to be created, a layer must first be created and then the `Feature` object must be added to the layer source.

```
const marker = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.fromLonLat([29, 41])),
    name: "Marker",
});
const vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        features: [marker]
    })
});
map.addLayer(vectorLayer);
```

- An `event listener` can be added to the map component for the Openlayers library. When information is desired from a vector layer, the `getFeatures` method that returns the objects at the clicked point is called within the `event listener` function defined for the map component.

```
const getFeatureName = function (pixel) {
	vectorLayer.getFeatures(pixel).then(function (features) {
		const feature = features.length ? features[0] : undefined;

		if (features.length) {
			const name = feature.get('name');
			console.info(name);
		} else {
			console.warn('no feature');
		}
	});
};

map.on('click', function (evt) {
	getFeatureName(evt.pixel);
});
```
