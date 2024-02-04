// Access token of instructor
Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5ZjUwYjk4Mi1lMDdkLTQ2NzEtYTc1Mi02ZjQ0NWEwYmNmNTQiLCJpZCI6MTkzODcwLCJpYXQiOjE3MDcwNjAwMjh9.E4MD8IW6wH7DAJznEmO2q8kpSdZG_dwpL9lstCmKUBk"

let viewer = new Cesium.Viewer('cesiumContainer', {
    // terrainProvider: Cesium.createWorldTerrain()
    animation: false,
    baseLayerPicker: false,
    fullscreenButton: false,
    geocoder: false,
    infoBox: false,
    sceneModePicker: false,
    selectionIndicator: false,
    timeline: false,
    navigationHelpButton: false,
    navigationInstructionsInitiallyVisible: false,
    scene3DOnly: true,
    shouldAnimate: true
});

viewer.terrainProvider = Cesium.createWorldTerrain();

document.getElementsByClassName('cesium-viewer-bottom')[0].style.display = 'none'

viewer.camera.setView({
    destination : Cesium.Cartesian3.fromDegrees(28.96, 41.01, 8000),
    orientation: { // default gelen değerler
        heading : Cesium.Math.toRadians(0.0), 
        pitch : Cesium.Math.toRadians(-90),   
        roll : 0                            
    }
});

let mapboxButton = document.getElementById('mapbox').onclick = ()=> {
    viewer.scene.imageryLayers.removeAll();
    let MAPBOX_ACCESS_TOKEN = "pk.eyJ1Ijoic2VsYWhhdHRpbiIsImEiOiJjbGJ4anh4NDgwN3BwM25ybWwzbG9sdDJpIn0.GjNP1CgfPTcojfCI95vsCA";
    let MAPBOX_STYLE_ID = "cjqglqul3i0cc2sqi6ixvmo3p";
    let MAPBOX_USERNAME = "selahattin";

    let url = `https://api.mapbox.com/styles/v1/${MAPBOX_USERNAME}/${MAPBOX_STYLE_ID}/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`
    let customImageryProvider = new Cesium.UrlTemplateImageryProvider({ url: url });
    viewer.imageryLayers.addImageryProvider(customImageryProvider);
}

let esriButton = document.getElementById('esri').onclick = ()=> {
    viewer.scene.imageryLayers.removeAll();
    const esri = new Cesium.ArcGisMapServerImageryProvider({
        url : 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
    });
    viewer.imageryLayers.addImageryProvider(esri);
}

let sAhmetButton = document.getElementById('sultanahmet').onclick = () => {
    // alert('sultanahmet')
    flyTo(28.977114, 41.005745, 1500, 3);
}


let ayasofyaButton = document.getElementById('ayasofya').onclick = () => {
    // alert('ayasofya')
    flyTo(28.980261, 41.008469, 1500, 3)
}

let topkapiButton = document.getElementById('topkapi').onclick = () => {
    //  alert('topkapi')
    flyTo( 28.983269, 41.011574, 1500, 3)
}

let flyTo = (lat, lon, alt, duration) => {
    viewer.camera.flyTo({
        destination : Cesium.Cartesian3.fromDegrees(lat, lon, alt),
        orientation : {
            heading : Cesium.Math.toRadians(0),
            pitch : Cesium.Math.toRadians(-90.0),
            roll : 0.0
        },
        duration: duration
    });
}

// const osmBuildingsTileset = Cesium.createOsmBuildings();
// viewer.scene.primitives.add(osmBuildingsTileset);

let addOsmBuilding = document.getElementById('osm').onclick = () => {
    viewer.scene.primitives.removeAll()
    const osmBuildingsTileset = Cesium.createOsmBuildings();
    viewer.scene.primitives.add(osmBuildingsTileset);
}

let lod1Tileset = new Cesium.Cesium3DTileset({
    url: Cesium.IonResource.fromAssetId(1452992),
})

let addLod1 = document.getElementById('lod1').onclick = () => {
    viewer.scene.primitives.removeAll()
    viewer.scene.primitives.add(lod1Tileset)
    document.getElementById('style').style.display = 'block'
}


function getRadioType(){
    let styleBody = document.getElementById('styleBodyContainer')
    var select = document.querySelector('input[name="style"]:checked').value;
    if(select == 1) {
        styleBody.innerHTML = `
                <div id="singleColorContainer">
                    <div>
                        <input type="color" id="singleColorPalette">
                    </div>
                    <div>
                        <button class="button" id="singleColorSubmit" onclick = singleColorSubmit()>Uygula</button>
                    </div>
                </div>
        `
    }
    else if(select == 2) {
        styleBody.innerHTML = `
        <div id="multiColorContainer">
        <div>
            <select id="multiColorSelect">
                <option value="1">İşyeri Sayısı</option>
                <option value="2">Konut Sayısı</option>
                <option value="3">Mahalle</option>
              </select>
        </div>
        <div>

         <div>
            <button class="button" id="multiColorSubmit" onclick = multiColorSubmit()>Uygula</button>
        </div>

    </div>
        `
    }
}

const singleColorSubmit = () => {
    let value = document.getElementById('singleColorPalette').value;
    let color = `color('${value}')`

    lod1Tileset.style = new Cesium.Cesium3DTileStyle({
        color: {
          conditions: [
            // ["true", "color('red')"],
            ["true",color],
          ],
        },
      });
}

const multiColorSubmit = () => {
    let value =document.getElementById('multiColorSelect').value;


    lod1Tileset.style = new Cesium.Cesium3DTileStyle({
        color: {
          conditions: [
            // ["${ISYERI_SAY} >= 100", "color('#d65c5c')"],
            // ["${ISYERI_SAY} >= 50 ", "color('red')"],
            // ["${ISYERI_SAY} >= 30 ", "color('yellow')"],
            // ["${ISYERI_SAY} >= 15 ", "color('green')"],
            // ["${ISYERI_SAY} >= 1 ", "color('blue')"],
            ["${objectID}= 100", "color('blue')"],
            ["true", "color('gray')"],
          ],
        },
      });
}

let handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

handler.setInputAction(function(click) {
    let pickedObject = viewer.scene.pick(click.position);

    if(Cesium.defined(pickedObject) && (pickedObject instanceof Cesium.Cesium3DTileFeature)) { // if it is 3d tile object
        console.log('tıklandı');
    
        let isyeri = pickedObject.getProperty('ISYERI_SAY');
        console.log(isyeri);
    }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);
