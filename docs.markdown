---
layout: default
title: Docs
---

# Docs

* [Map](#map)
* [Marker](#marker)
  * [Icon](#markerIcon)
  * [Shadow](#markerShadow)
* [Polyline](#polyline)
  * [Stroke](#polylineStroke)
* [Polygon](#polygon)
  * [Stroke](#polygonStroke)
  * [Fill](#polygonFill)

<a name="videos"></a>

## Map

### Shared Map Options

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>map</td> <td>String</td> <td>Interactive</td> <td>Controls what type of map to display.</td>
    </tr>
    <tr>
      <td>width</td> <td>Integer</td> <td>200</td> <td>Set the displayed width of the map.</td>
    </tr>
    <tr>
      <td>height</td> <td>Integer</td> <td>200</td> <td>Set the displayed height of the map</td>
    </tr>
    <tr>
      <td>center</td> <td>String, Array</td> <td></td> <td>Accepts both address and latitude/longitude.</td>
    </tr>
    <tr>
      <td>visible</td> <td>String</td> <td></td> <td></td>
    </tr>
    <tr>
      <td>zoom</td> <td>Integer</td> <td></td> <td></td>
    </tr>
    <tr>
      <td>type</td> <td>String</td> <td>roadmap</td> <td>Controls what map tiles to display.</td>
    </tr>
    <tr>
      <td>format</td> <td>String</td> <td>png-32</td> <td>What format to return the static map.</td>
    </tr>
    <tr>
      <td>mobile</td> <td>String</td> <td>false</td> <td>Optimize the map for mobile use.</td>
    </tr>
    <tr>
      <td>sensor</td> <td>String</td> <td>false</td> <td></td>
    </tr>
    <tr>
      <td>title</td> <td>String</td> <td></td> <td></td>
    </tr>
    <tr>
      <td>markers</td> <td><a href="#marker">Marker</a></td> <td></td> <td></td>
    </tr>
    <tr>
      <td>polylines</td> <td><a href="#polyline">Polyline</a></td> <td></td> <td></td>
    </tr>
    <tr>
      <td>polygons</td> <td><a href="#polygon">Polygon</a></td> <td></td> <td></td>
    </tr>
    <tr>
      <td>error</td> <td>Function</td> <td></td> <td></td>
    </tr>
  </tbody>
</table>

<a name="marker"></a>

## Marker

### Marker Options

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Map Type</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>address</td> <td>Both</td> <td>String</td> <td></td> <td>Address to place marker. Uses Google GeoCoder.</td>
    </tr>
    <tr>
      <td>latlng</td> <td>Both</td> <td>Array</td> <td></td> <td>Places marker in a more exact location.</td>
    </tr>
    <tr>
      <td>label</td> <td>Interactive</td> <td>String</td> <td></td> <td>Text to display when cursor hovers over marker.</td>
    </tr>
    <tr>
      <td>content</td> <td>Interactive</td> <td>String</td> <td></td> <td>HTML to display in marker info window when clicked.</td>
    </tr>
    <tr>
      <td>icon</td> <td>Both</td> <td>String, "Marker Icon":#markerIcon</td> <td></td> <td>Icon for marker. Either supply URL path for image (use URL shortner) or use icon settings.</td>
    </tr>
    <tr>
      <td>shadow</td> <td>Interactive</td> <td>"Marker Shadow":#markerShadow</td> <td></td> <td>Shadow to display under the marker.</td>
    </tr>
    <tr>
      <td>shadow</td> <td>Static</td> <td>Bool</td> <td>True</td> <td>Controls if custom icon should have shadow.</td>
    </tr>
  </tbody>
</table>

<a name="markerIcon"></a>

### Marker Icon

#### Simple Icon

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Map Type</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>size</td> <td>Both</td> <td>String, Array</td> <td></td> <td>Size of the marker. tiny, mid, small.</td>
    </tr>
    <tr>
      <td>color</td> <td>Both</td> <td>String</td> <td></td> <td>Color of the marker. black, brown, green, purple, yellow, blue, gray, orange, red, white.</td>
    </tr>
  </tbody>
</table>

#### Complex Icon

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Map Type</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>image</td> <td>Interactive</td> <td>String</td> <td></td> <td>URL path for the shadow.</td>
    </tr>
    <tr>
      <td>size</td> <td>Interactive</td> <td>Array</td> <td></td> <td>Dimensions of icon</td>
    </tr>
    <tr>
      <td>origin</td> <td>Interactive</td> <td>Array</td> <td></td> <td>Point to start showing the icon. Used for image sprites.</td>
    </tr>
    <tr>
      <td>anchor</td> <td>Interactive</td> <td>Array</td> <td></td> <td>Where to place the icon in reference to marker location. Default is bottom-middle.</td>
    </tr>
  </tbody>
</table>

<a name="markerShadow"></a>

### Marker Shadow

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Map Type</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>image</td> <td>Interactive</td> <td>String</td> <td></td> <td>URL path for the shadow.</td>
    </tr>
    <tr>
      <td>size</td> <td>Interactive</td> <td>Array</td> <td></td> <td>Dimensions of shadow</td>
    </tr>
    <tr>
      <td>origin</td> <td>Interactive</td> <td>Array</td> <td></td> <td>Point to start showing the shadow. Used for image sprites.</td>
    </tr>
    <tr>
      <td>anchor</td> <td>Interactive</td> <td>Array</td> <td></td> <td>Where to place the shadow in reference to marker location. Default is bottom-middle.</td>
    </tr>
  </tbody>
</table>

<a name="polyline"></a>

## Polyline

### Polyline Options

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Map Type</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>points</td> <td>Both</td> <td>Array</td> <td></td> <td>Array containing multiple latitude/longitude points.</td>
    </tr>
    <tr>
      <td>stroke</td> <td>Both</td> <td>"Polyline Stroke":#polylineStroke</td> <td></td> <td>Stroke options.</td>
    </tr>
  </tbody>
</table>

<a name="polylineStroke"></a>

### Polyline Stroke

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Map Type</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>color</td> <td>Both</td> <td>String</td> <td>ff0000</td> <td>Color of the polyline stroke.</td>
    </tr>
    <tr>
      <td>opacity</td> <td>Both</td> <td>Integer</td> <td>1</td> <td>Opacity value of the polyline stroke. Value should be between 1 and 0.</td>
    </tr>
    <tr>
      <td>weight</td> <td>Both</td> <td>Integer</td> <td>1</td> <td>Width of the polyline stroke in pixels.</td>
    </tr>
  </tbody>
</table>

<a name="polygon"></a>

## Polygon

### Polygon Options

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Map Type</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>points</td> <td>Both</td> <td>Array</td> <td></td> <td>Array containing multiple latitude/longitude points.</td>
    </tr>
    <tr>
      <td>stroke</td> <td>Both</td> <td><a href="#polygonStroke">Polygon Stroke</a></td> <td></td> <td>Stroke options.</td>
    </tr>
    <tr>
      <td>stroke</td> <td>Both</td> <td><a href="#polygonFill">Polygon Fill</a></td> <td></td> <td>Stroke options.</td>
    </tr>
  </tbody>
</table>

<a name="polygonStroke"></a>

### Polygon Stroke

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Map Type</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>color</td> <td>Both</td> <td>String</td> <td>ff0000</td> <td>Color of the polygon stroke.</td>
    </tr>
    <tr>
      <td>opacity</td> <td>Both</td> <td>Integer</td> <td>1</td> <td>Opacity value of the polygon stroke. Value should be between 1 and 0.</td>
    </tr>
    <tr>
      <td>weight</td> <td>Both</td> <td>Integer</td> <td>1</td> <td>Width of the polygon stroke in pixels.</td>
    </tr>
  </tbody>
</table>

<a name="polygonFill"></a>

### Polygon Fill
<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Map Type</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>color</td> <td>Both</td> <td>String</td> <td>ff0000</td> <td>Color of the polygon fill.</td>
    </tr>
    <tr>
      <td>opacity</td> <td>Both</td> <td>Integer</td> <td>1</td> <td>Opacity value of the polygon fill. Value should be between 1 and 0.</td>
    </tr>
  </tbody>
</table>
