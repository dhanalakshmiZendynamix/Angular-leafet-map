### leaflet-angular-map-directive

## Description
leafet-angular-map-directive allows  to use leaflet map library API in  AngularJS application  providing the directive attribute value in AngularJS scope. In its current state, it's not a full-featured library, but it's easy to use and extend 

## How to use it

```
bower install angular-map
```

Include the `angular-leaflet-map` dependency on your Angular module:
```
var app = angular.module('demoapp', ['angular-leaflet-map']);
```


Finally, define  the basic configuration of the map as attibutes below

&lt; **angular-map**  **map-id=****&quot;unqiueMapId&quot;  latitude= 51.505 longitude= -0.09 zoom= 6  map-height= &quot;500&quot;map-width=&quot;603&quot;  tile-layer= &quot;osm&quot;** &gt;&lt;/ **angular-map** &gt;

| Attribute | Type | Sampelvalue | Defalut value | Description |
| --- | --- | --- | --- | --- |
| map-id | String | unqiueMapId | none | Unquie id of map container |
| latitude | number | 51.505 | none | Map cneter latitude |
| longitude | number | -0.09 | none | Map center longitude |
| zoom | number | 6 | none | Zoom level of map |
| map-height | String | 500 | none | Map container height |
|  map-width| String | 603 | none | Map container height |
| tile-layer | String | osm | none | For   **osmLayer** = **osm** bingAerialWithLabels= bingAerialWithLabels,bingAerial= bingAerial,bingRoad= bingRoad,googleMaps= googleMaps,stamenBackWhite= stamenBackWhite   |

Map with markers

&lt; **angular-map**  **map-id=****&quot;indexmap&quot;   latitude= 51.505 longitude= =-0.09 zoom== 6  map-height= &quot;500&quot;map-width=&quot;603&quot;  tile-layer= &quot;osm&quot;markers= markerArray marker-configuration= markerConfiguration** &gt;&lt;/ **angular-map** &gt;

| Attribute | Type | Sampelvalue | Defalut value | Description |
| --- | --- | --- | --- | --- |
| markers |  Array of object |  [{ **lat** :51.505, **lng** :0.09},{        **lat** :51.605, **lng** :-0.09}]  | none | Array Of latitude longitude objects |
| marker-configuration | object |  {   &quot;iconUrl&quot; :&quot;iconImage/Icons-Land-Vista-Map-Markers-Map-Marker-Marker-Inside-Chartreuse.ico&quot; ,       &quot;iconWidth&quot; :30,       &quot;iconHeight&quot;:30}  | none | IconUrl=custom marker absolute path iconWidth=marker width iconHeight=maker Height |

Map with polygon

&lt; **angular-map map-id=&quot;indexmapPolygon&quot;   latitude 51.505  longitude= -0.09zoom 6   map-height=&quot;500&quot;  map-width= &quot;603&quot;tile-layer=&quot;osm&quot;  polyline= polylineArray   polyline-configuration= polylineConfiguration** &gt;&lt;/ **angular-map** &gt;

| Attribute | Type | Sampelvalue | Defalut value | Description |
| --- | --- | --- | --- | --- |
| polyline |  Array of object | [[{    **lat :51.489835,    **lng** :-0.166964},    {        **lat** :51.499586,        **lng** :-0.152096    },    {        **lat** :51.510503,        **lng** :-0.130443    }],[{    **lat** :51.505,    **lng** :-0.09},    {        **lat** :51.705,        **lng** :-0.09    }]]   | none | Array of latitude longitude object |
| polyline-configuration | object | {    lineColor: &quot;blue&quot;}  | red | LineColor of the ployline |

Map with polygon

&lt; **angular-map**  **map-id=&quot;secondmap&quot;  latitude= 12.9542944 longitude= 77.4905117  zoom=12
map-height=&quot;500&quot;  map-width=&quot;603&quot;  polygon= polygon  tile-layer= &quot;osm&quot;polygon-configuration = polygonConfiguration** &gt;&lt;/ **angular-map** &gt;

| Attribute | Type | Sampelvalue | Defalut value | Description |
| --- | --- | --- | --- | --- |
| polygon | Array | [    [12.989086,77.506553],    [13.018126,77.670686],    [12.894383,77.601683]]  | none | Array of latitude, longitude |
| polygon-configuration | object | {    lineColor : &quot;red&quot;,    fillColor : &quot;blue&quot; ,    opacity :0.4}  | lineColor=&quot;red&quot; fillColor =&quot;red&quot;*opacity=0.4  |LineColor Boder color of polygonfillColor : polygon fill color   |

Map with marker Cluster

&lt; **angular-map**  **map-id=&quot;clustermap&quot;   latitude= -6.081689  longitude= 145.391881 zoom= 4  marker-cluster =markerCluster  map-height= &quot;500&quot;map-width=&quot;603&quot;  tile-layer=&quot;osm&quot; &gt;&lt;/ angular-map** &gt;

| Attribute | Type | Sampelvalue | Defalut value | Description |
| --- | --- | --- | --- | --- |
| marker-cluster | Array | [    {              **&quot;lat&quot;** :-6.081689,        **&quot;lng&quot;** :145.391881,        **&quot;alt&quot;** :5282    },{      **&quot;lat&quot;** :-5.207083,    **&quot;lng&quot;** :145.7887,    **&quot;alt&quot;** :20}]  | none | Array of latitude , longitude |

Map with static image as base layer

&lt; **angular-map map-id=&quot;map9&quot;  image-tile = staticImageTitle   map-height= &quot;500&quot;map-  width=&quot;603&quot; &gt;&lt;/ angular-map**&gt;

| Attribute | Type | Sampelvalue | Defalut value | Description |
| --- | --- | --- | --- | --- |
| image-tile | String | http://www.lib.utexas.edu/maps/historical/newark\_nj\_1922.jpg  | none | Image has to be displayed as base layer |

