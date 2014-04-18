---
date: 2013-04-13 21:17:00+00:00
layout: post
category: General
slug: basic-setup
title: Basic Setup
---

Something, something, darkside.

{% highlight html lineos %}
<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?v=3.15&libraries=geometry&sensor=false"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js" charset="utf-8"></script>
<script src="/js/gMaps/jquery.gMaps.js" charset="utf-8"></script>
{% endhighlight %}

<script>
$(function() {
  var map_options = {
    center: [33.85839163821079, -98.48906972802736],
    zoom: 9,
    markers: [
      {
        position: [33.818501,-98.194472],
        content: 'Test 0',
        icon: {size: "small", color: "blue"}
      }
    ],
    polygons: [
      {
        points: [
          [33.85839163821079, -98.48906972802736],
          [33.88233677114602, -98.5570476333008],
          [33.978050098130055, -98.50486257470705]
        ],
        stroke: {color: '00ff00', weight: 7, opacity: 1},
        fill: {color: '00ff00', opacity: 0.2}
      }
    ],
    style: {
      width: 450,
      height: 450
    },
    error: function(element, error) {
      $(".error").html(error);
    }
  };

  $('.interactiveMap').gMap(map_options);

  var static_map = map_options;
  static_map.map = "static";
  $(".staticMap").gMap(static_map);
});
</script>

<div class="error"></div>
<div style="overflow: hidden;">
  <div class="interactiveMap" style="float: left;"></div>
  <div class="staticMap" style="float: right;"></div>
  </div>
</div>

{% highlight html linenos %}
  <script>
  $(function() {
    var map_options = {
      center: [33.85839163821079, -98.48906972802736],
      zoom: 9,
      markers: [
        {
          position: [33.818501,-98.194472],
          content: 'Test 0',
          icon: {size: "small", color: "blue"}
        }
      ],
      polygons: [
        {
          points: [
            [33.85839163821079, -98.48906972802736],
            [33.88233677114602, -98.5570476333008],
            [33.978050098130055, -98.50486257470705]
          ],
          stroke: {color: '00ff00', weight: 7, opacity: 1},
          fill: {color: '00ff00', opacity: 0.2}
        }
      ],
      style: {
        width: 450,
        height: 450
      },
      error: function(element, error) {
        $(".error").html(error);
      }
    };

    $('.interactiveMap').gMap(map_options);

    var static_map = map_options;
    static_map.map = "static";
    $(".staticMap").gMap(static_map);
  });
  </script>

  <div class="error"></div>
  <div style="overflow: hidden;">
    <div class="interactiveMap" style="float: left;"></div>
    <div class="staticMap" style="float: right;"></div>
    </div>
  </div>
{% endhighlight %}
