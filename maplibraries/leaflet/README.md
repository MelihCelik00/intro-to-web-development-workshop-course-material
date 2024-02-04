 <h1 align="center">Leaflet</h1>


- Leaflet is an open-source JavaScript library with map functions that are mobile-friendly, low-sized, and needed by many application developers. Leaflet positions itself as a library that is easy to use, efficient on desktop and mobile devices, extendable with plugins, well-documented, and open to contributions.

- The basic component used in the Leaflet library to create a map requires a DOM element in an HTML file.

```
const map = L.map('map').setView([41, 29], 8);
```

- If open source is preferred as a base map, the most commonly used 'OpenStreetMap' service is defined as follows and added to the previously created map component;

```
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution:
		'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
```

- Data can be added to the map component in layers or individually in the Leaflet library. This approach has been chosen by Leaflet to provide fast and efficient solutions for developers' needs.

```
const marker = L.marker([41, 29]).addTo(map);
```

- Event listeners can be added to map components as well as elements such as markers and geojson in the Leaflet library.

```
const getFeatureName = (e) => {
	console.info(e.layer.feature.properties.name);
};
const geoJSONLayer = L.geoJSON(geoJSONData)
	.on('click', getFeatureName)
	.addTo(map);
```
