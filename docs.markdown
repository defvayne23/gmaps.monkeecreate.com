---
layout: default
title: Docs
---

# Docs

* [Map](#map)
  * [Options](#mapOptions)
  * [Style](#mapStyle)
* [Marker](#marker)
  * [Options](#markerOptions)
  * [Icon](#markerIcon)
  * [Shadow](#markerShadow)
* [Polyline](#polyline)
  * [Options](#polylineOptions)
  * [Stroke](#polylineStroke)
* [Polygon](#polygon)
  * [Options](#polygonOptions)
  * [Stroke](#polygonStroke)
  * [Fill](#polygonFill)
* [Circle](#circle)
  * [Options](#circleOptions)
  * [Stroke](#circleStroke)
  * [Fill](#circleFill)

## Map

<a name="mapOptions"></a>

### Map Options

Base elements to pass as a hash in `$.gMaps(options)`.

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
      <td>map</td> <td class="type-both">Both</td> <td>String</td> <td>Interactive</td> <td>Controls what type of map to display.</td>
    </tr>
    <tr>
      <td>center</td> <td class="type-both">Both</td> <td>String, Array</td> <td></td> <td>Accepts both address and latitude/longitude.</td>
    </tr>
    <tr>
      <td>visible</td> <td class="type-both">Both</td> <td>Array</td> <td></td> <td>Array of lat/lng points to extend bounds. Bounds must be set to true for interactive map.</td>
    </tr>
    <tr>
      <td>zoom</td> <td class="type-both">Both</td> <td>Integer</td> <td></td> <td>Level to know how much of the earth to show. Higher the number, closer the zoom.</td>
    </tr>
    <tr>
      <td>type</td> <td class="type-both">Both</td> <td>String</td> <td>roadmap</td> <td>Controls what map tiles to display.</td>
    </tr>
    <tr>
      <td>scroll</td> <td class="type-interactive">Interactive</td> <td>Bool</td> <td>true</td> <td>Sets if the map should respond to the scrollwheel to zoom in/out.</td>
    </tr>
    <tr>
      <td>bounds</td> <td class="type-interactive">Interactive</td> <td>Bool</td> <td>false</td> <td>Instead of setting zoom and center, this makes sets them to make sure all elements are visible.</td>
    </tr>
    <tr>
      <td>streetview</td> <td class="type-interactive">Interactive</td> <td>Bool</td> <td>true</td> <td>Controls ability to use streetview. If false, Pegman doesn't show in the UI.</td>
    </tr>
    <tr>
      <td>format</td> <td class="type-static">Static</td> <td>String</td> <td>png</td> <td>What format to return the static map. (png, png32, gif, jpg, jpg-baseline)</td>
    </tr>
    <tr>
      <td>mobile</td> <td class="type-static">Static</td> <td>String</td> <td>false</td> <td>Optimize the map for mobile use.</td>
    </tr>
    <tr>
      <td>sensor</td> <td class="type-static">Static</td> <td>String</td> <td>false</td> <td>Denote if you are using a sensor device (GPS) to find the users location.</td>
    </tr>
    <tr>
      <td>title</td> <td class="type-static">Static</td> <td>String</td> <td>Google Maps</td> <td>Sets alt on image tag.</td>
    </tr>
    <tr>
      <td>scale</td> <td class="type-static">Static</td> <td>Integer</td> <td></td> <td>Scales image for higher resolution displays. Leave empty to not pass this option.</td>
    </tr>
    <tr>
      <td>style</td> <td class="type-both">Both</td> <td><a href="#mapStyle">Style</a></td> <td></td> <td>Hash of how to display map.</td>
    </tr>
    <tr>
      <td>markers</td> <td class="type-both">Both</td> <td><a href="#marker">Marker</a></td> <td></td> <td>Array of markers.</td>
    </tr>
    <tr>
      <td>polylines</td> <td class="type-both">Both</td> <td><a href="#polyline">Polyline</a></td> <td></td> <td>Array of polylines.</td>
    </tr>
    <tr>
      <td>polygons</td> <td class="type-both">Both</td> <td><a href="#polygon">Polygon</a></td> <td></td> <td>Array of polygons.</td>
    </tr>
    <tr>
      <td>click</td> <td class="type-both">Both</td> <td>Function</td> <td></td> <td>Method to catch when a user clicks the map.</td>
    </tr>
    <tr>
      <td>error</td> <td class="type-both">Both</td> <td>Function</td> <td></td> <td>Method to catch any errors. First attribute is string containing error details.</td>
    </tr>
  </tbody>
</table>

<a name="mapStyle"></a>

### Style

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
      <td>width</td> <td class="type-both">Both</td> <td>Integer</td> <td></td> <td>Set the displayed width of the map in px. Leave empty to use block width.</td>
    </tr>
    <tr>
      <td>height</td> <td class="type-both">Both</td> <td>Integer</td> <td></td> <td>Set the displayed height of the map in px.  Leave empty to use block height.</td>
    </tr>
    <tr>
      <td>cursor</td> <td class="type-both">Both</td> <td>String</td> <td></td> <td>Set CSS cursor. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/cursor">See CSS Spec for details.</a></td>
    </tr>
  </tbody>
</table>

<a name="marker"></a>

## Marker

<a name="markerOptions"></a>

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
      <td>position</td> <td class="type-both">Both</td> <td>String, Array</td> <td></td> <td>Address or Lat/Lng of marker. Address is passed as is in static map URL.</td>
    </tr>
    <tr>
      <td>label</td> <td class="type-interactive">Interactive</td> <td>String</td> <td></td> <td>Text to display when cursor hovers marker.</td>
    </tr>
    <tr>
      <td>content</td> <td class="type-interactive">Interactive</td> <td>String</td> <td></td> <td>HTML to display in marker info window when clicked.</td>
    </tr>
    <tr>
      <td>icon</td> <td class="type-both">Both</td> <td>String, <a href="#markerIcon">Marker Icon</a></td> <td></td> <td>Icon for marker. Either supply URL path for image (use URL shortner) or use icon settings. Static map only accepts a string or simple icon.</td>
    </tr>
    <tr>
      <td>shadow</td> <td class="type-interactive">Interactive</td> <td><a href="#markerShadow">Marker Shadow</a></td> <td></td> <td>Shadow to display under the marker.</td>
    </tr>
    <tr>
      <td>shadow</td> <td class="type-static">Static</td> <td>Bool</td> <td>True</td> <td>Controls if custom icon should have shadow.</td>
    </tr>
    <tr>
      <td>draggable</td> <td class="type-interactive">Interactive</td> <td>Bool</td> <td>false</td> <td>Controls if custom icon should have shadow.</td>
    </tr>
    <tr>
      <td>dragend</td> <td class="type-interactive">Interactive</td> <td>Function</td> <td></td> <td>Function to catch when marker is finished being dragged. Only usable if draggable is set to true.</td>
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
      <td>size</td> <td class="type-static">Static</td> <td>String, Array</td> <td></td> <td>Size of the marker. tiny, mid, small.</td>
    </tr>
    <tr>
      <td>color</td> <td class="type-static">Static</td> <td>String</td> <td></td> <td>Color of the marker. black, brown, green, purple, yellow, blue, gray, orange, red, white.</td>
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
      <td>image</td> <td class="type-interactive">Interactive</td> <td>String</td> <td></td> <td>URL path for the shadow.</td>
    </tr>
    <tr>
      <td>size</td> <td class="type-interactive">Interactive</td> <td>Array</td> <td></td> <td>Dimensions of icon</td>
    </tr>
    <tr>
      <td>origin</td> <td class="type-interactive">Interactive</td> <td>Array</td> <td></td> <td>Point to start showing the icon. Used for image sprites.</td>
    </tr>
    <tr>
      <td>anchor</td> <td class="type-interactive">Interactive</td> <td>Array</td> <td></td> <td>Where to place the icon in reference to marker location. Default is bottom-middle.</td>
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
      <td>image</td> <td class="type-interactive">Interactive</td> <td>String</td> <td></td> <td>URL path for the shadow.</td>
    </tr>
    <tr>
      <td>size</td> <td class="type-interactive">Interactive</td> <td>Array</td> <td></td> <td>Dimensions of shadow</td>
    </tr>
    <tr>
      <td>origin</td> <td class="type-interactive">Interactive</td> <td>Array</td> <td></td> <td>Point to start showing the shadow. Used for image sprites.</td>
    </tr>
    <tr>
      <td>anchor</td> <td class="type-interactive">Interactive</td> <td>Array</td> <td></td> <td>Where to place the shadow in reference to marker location. Default is bottom-middle.</td>
    </tr>
  </tbody>
</table>

<a name="polyline"></a>

## Polyline

<a name="polylineOptions"></a>

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
      <td>points</td> <td class="type-both">Both</td> <td>Array</td> <td></td> <td>Array containing multiple latitude/longitude points.</td>
    </tr>
    <tr>
      <td>stroke</td> <td class="type-both">Both</td> <td><a href="#polylineStroke">Polyline Stroke</a></td> <td></td> <td>Stroke options.</td>
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
      <td>color</td> <td class="type-both">Both</td> <td>String</td> <td>ff0000</td> <td>Color of the polyline stroke.</td>
    </tr>
    <tr>
      <td>opacity</td> <td class="type-both">Both</td> <td>Integer</td> <td>1</td> <td>Opacity value of the polyline stroke. Value should be between 1 and 0.</td>
    </tr>
    <tr>
      <td>weight</td> <td class="type-both">Both</td> <td>Integer</td> <td>1</td> <td>Width of the polyline stroke in pixels.</td>
    </tr>
  </tbody>
</table>

<a name="polygon"></a>

## Polygon

<a name="polygonOptions"></a>

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
      <td>points</td> <td class="type-both">Both</td> <td>Array</td> <td></td> <td>Array containing multiple latitude/longitude points.</td>
    </tr>
    <tr>
      <td>stroke</td> <td class="type-both">Both</td> <td><a href="#polygonStroke">Polygon Stroke</a></td> <td></td> <td>Stroke options.</td>
    </tr>
    <tr>
      <td>fill</td> <td class="type-both">Both</td> <td><a href="#polygonFill">Polygon Fill</a></td> <td></td> <td>Fill options.</td>
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
      <td>color</td> <td class="type-both">Both</td> <td>String</td> <td>ff0000</td> <td>Color of the polygon stroke.</td>
    </tr>
    <tr>
      <td>opacity</td> <td class="type-both">Both</td> <td>Integer</td> <td>1</td> <td>Opacity value of the polygon stroke. Value should be between 1 and 0.</td>
    </tr>
    <tr>
      <td>weight</td> <td class="type-both">Both</td> <td>Integer</td> <td>1</td> <td>Width of the polygon stroke in pixels.</td>
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
      <td>color</td> <td class="type-both">Both</td> <td>String</td> <td>ff0000</td> <td>Color of the polygon fill.</td>
    </tr>
    <tr>
      <td>opacity</td> <td class="type-both">Both</td> <td>Integer</td> <td>1</td> <td>Opacity value of the polygon fill. Value should be between 1 and 0.</td>
    </tr>
  </tbody>
</table>


<a name="circle"></a>

## Circle

<a name="circleOptions"></a>

### Circle Options

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
      <td>center</td> <td class="type-interactive">Interactive</td> <td>Array</td> <td></td> <td>Array containing lat/lng point.</td>
    </tr>
    <tr>
      <td>radius</td> <td class="type-interactive">Interactive</td> <td>Integer</td> <td>1</td> <td>Radius of circle in meters.</td>
    </tr>
    <tr>
      <td>stroke</td> <td class="type-interactive">Interactive</td> <td><a href="#circleStroke">Circle Stroke</a></td> <td></td> <td>Stroke options.</td>
    </tr>
    <tr>
      <td>fill</td> <td class="type-interactive">Interactive</td> <td><a href="#circleFill">Circle Fill</a></td> <td></td> <td>Stroke options.</td>
    </tr>
  </tbody>
</table>

<a name="circleStroke"></a>

### Circle Stroke

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
      <td>color</td> <td class="type-interactive">Interactive</td> <td>String</td> <td>ff0000</td> <td>Color of the circle stroke.</td>
    </tr>
    <tr>
      <td>opacity</td> <td class="type-interactive">Interactive</td> <td>Integer</td> <td>1</td> <td>Opacity value of the circle stroke. Value should be between 1 and 0.</td>
    </tr>
    <tr>
      <td>weight</td> <td class="type-interactive">Interactive</td> <td>Integer</td> <td>1</td> <td>Width of the circle stroke in pixels.</td>
    </tr>
  </tbody>
</table>

<a name="circleFill"></a>

### Circle Fill

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
      <td>color</td> <td class="type-interactive">Interactive</td> <td>String</td> <td>ff0000</td> <td>Color of the circle fill.</td>
    </tr>
    <tr>
      <td>opacity</td> <td class="type-interactive">Interactive</td> <td>Integer</td> <td>1</td> <td>Opacity value of the circle fill. Value should be between 1 and 0.</td>
    </tr>
  </tbody>
</table>
