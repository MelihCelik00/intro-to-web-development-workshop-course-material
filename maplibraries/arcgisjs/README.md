 <h1 align="center">ArcGIS Javascript</h1>


- ArcGIS Javascript is a web mapping library offered as open source by Esri, one of the leading companies in the GIS sector. The library allows the development of two and three-dimensional map applications and contains many ready-to-use tools that make developers' lives easier. In addition, maps and layers created on ArcGIS Online can be integrated into applications with a `token`.

- Since ArcGIS JS is used with the `require` structure, regardless of whether it is `ES5` or `ES6`, the modules that will be used in the project must be transferred to the `javascript` file.

- To create a two-dimensional map component, the `Map` and `MapView` modules are required.

```
require(['esri/Map', 'esri/views/MapView'], (Map, MapView) => {
	const map = new Map({
		basemap: 'topo-vector', // Basemap layer service
	});
	const view = new MapView({
		map: map,
		center: [29, 41], // Longitude, latitude
		zoom: 8, // Zoom level
		container: 'map', // Div element
	});
});
```

- The data added to the map component is managed with a layer structure. There are many different layer types in the ArcGIS Javascript library, which can be either predefined or determined by the developer's parameters.
- Since we defined the basemap when creating the map component, we can skip this step and add data to the map. A data in GeoJSON format is added to the map with `GeoJSONLayer` as follows;

```
const blob = new Blob([JSON.stringify(geoJSONData)], {
    type: 'application/json',
});
const url = URL.createObjectURL(blob);
const layer = new GeoJSONLayer({ url });
map.add(layer);
```

- When information is requested from the layer added to the map for the ArcGIS JS library, an `event listener` is defined on the `MapView` component.

```
view.on('click', function (event) {
    var screenPoint = {
        x: event.x,
        y: event.y,
    };

    // Search for graphics at the clicked location
    view.hitTest(screenPoint).then(function (response) {
        if (response.results.length) {
            var graphic = response.results.filter(function (result) {
                // check if the graphic belongs to the layer of interest
                return result.graphic.layer === layer;
            })[0].graphic;
            // do something with the result graphic
            console.info(graphic.attributes.name);
        }
    });
});
```

