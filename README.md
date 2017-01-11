# phesSlider

phesSlider is a comparison slider jQuery plugin. It is free, very simple to setup and use and has great customization.

##Requirements:
jQuery JavaScript Library v1.8.3

Less - Leaner CSS v2.7.1

##Installation:

Paste this snippet of code into your header:

<link rel="stylesheet/less" type="text/css" href="phesslider.less"> 

Paste this snippet of code into the bottom of your body:

<script src="phesslider.js"></script> 

##How to use:
Use this code along with the .less file:

```<div id="container1">
 <div class="main">
  <div class="sidebar"></div>
 </div>
</div>```

##Options:
You can do the easy and simple setup which is just throwing in your images you want to show. The slider will be set to horizontal and you will get the default handle.

```$('#container1').phesSlider({
  img1: "img/bestslidersample2.png",
  img2: "img/bestslidersample.png"
});```

You also have the option to choose either horizontal or vertical slide. (Set height for vertical and width for horizontal.) There is also the option to add your own custom handle for the slider. The plugin comes with a few simple handles. One of them vertical. The handle chosen will be resized down to 40x40 pixels as default.

```$('#container2').phesSlider({
  img1: "img/posterColorless.jpg",
  img2: "img/posterColor.jpg",
  direction: "vertical",
  height: 350,
  handle: "img/handleV.png"
});```
