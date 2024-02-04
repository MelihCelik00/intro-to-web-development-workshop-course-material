 <h1 align="center">Google Maps</h1>


- Google Maps API is a comprehensive map library that every application developer with a scenario related to maps has researched at least once. Google Maps API is divided into three main headings. These are;

      - Maps,
      - Routes,
      - Places

  can be listed.

- Unlike the other libraries we have focused on in Google Maps API training, Google Maps API does not offer an open-source solution. However, there is no charge for monthly usage of $200.

- The API key required for using Google Maps API should be created via the `developers.google.com/maps` address.

- The map, which is our basic component with Google Maps API, is created as follows;

```
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41, lng: 29 },
    zoom: 8,
  });
}

window.initMap = initMap;
```

- We have integrated the `satellite` and `guide` maps, fullscreen, and `StreetView` functions into our application with a few lines of code. All data offered by Google to users is available in our application without any extra code.

- If we want to use base maps like `OpenStreetMap` instead of Google base services in our application, we provide integration as follows;

```
new google.maps.Map(document.getElementById("map"), {
    mapTypeId: "OSM",
    center: { lat: 41, lng: 29 },
    zoom: 8,
  })

//Define OSM map type pointing at the OpenStreetMap tile server
map.mapTypes.set("OSM", new google.maps.ImageMapType({
    getTileUrl: function(coord, zoom) {
        // "Wrap" x (longitude) at 180th meridian properly
        // NB: Don't touch coord.x: because coord param is by reference, and changing its x property breaks something in Google's lib
        var tilesPerGlobe = 1 << zoom;
        var x = coord.x % tilesPerGlobe;
        if (x < 0) {
            x = tilesPerGlobe+x;
        }
        // Wrap y (latitude) in a like manner if you want to enable vertical infinite scrolling

        return "https://tile.openstreetmap.org/" + zoom + "/" + x + "/" + coord.y + ".png";
    },
    tileSize: new google.maps.Size(256, 256),
    name: "OpenStreetMap",
    maxZoom: 18
}));
```

- To add a `Marker` to the map component, which is another feature that developers need the most, the following process is performed;

```
const marker = new google.maps.Marker({
    position: istanbul,
    map,
    title: 'Istanbul',
});
```

- To interact with the added `Marker` object on the map, the function is defined as an `event listener` on the `Marker` object as follows:

```
// Add a click listener for each marker, and set up the info window.
marker.addListener('click', () => {
    console.info(marker.getTitle());
});
```