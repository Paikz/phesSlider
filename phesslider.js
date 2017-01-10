  (function ($) {

      $.fn.phesSlider = function(options) {

      return this.each(function () {

          var settings = $.extend({
            img1: "",
            img2: "",
            width: 400,
            height: "",
            direction: "vertical",
            handle: "img/handleH.png"
          }, options);

          var main = $(this).children("div").first();
          var sidebar = $(this).children("div").children("div").first();
          var container = $(this);
          if (settings.handle) {
              $(container).find(".sidebar").append("<div class='handle'></div>");
              var handle = $(container).find(".handle");
          }

          var image = new Image();
          image.src = settings.img1;

          //Currently not used
          var pxToPercent = function (child, parent) {
              console.log("child: " + child + "   |   parent: " + parent);
              return (child / parent) * 100;
          }

          $(image).load(function () { //Image will not load on refresch if not used.

              $(main).css({
                "background-image": "url(" + settings.img1 + ")",
                "width": image.width,
                "height": image.height
              });

              $(sidebar).css({
                 "width": settings.width,
                 "background-image": "url(" + settings.img2 + ")"
              });

              if (settings.handle) {
                  $(handle).css({
                      "background-image": "url(" + settings.handle + ")",
                      "top": (image.height / 2) - $(handle).height() / 2,
                      "left": (image.width / 2) - $(handle).width() / 2
                  });
              }
          });

         if (settings.direction === "vertical") {

             $(main).mousedown(function(e){
                 e.preventDefault(); //Ignores text on the slider
                 $(document).mousemove(function(e){
                     $(sidebar).css("width", e.pageX - $(sidebar).offset().left); //calculates the width by subtracting the pos of e when mouse is down with the left offset of the sidebar.
                     if (settings.handle) {
                        $(handle).css("left", parseFloat($(sidebar).css("width")) - $(handle).width() / 2); //making the handle follow the slider
                     }
                 });
             });

         } else {

             $(image).load(function () {
                 $(sidebar).css({
                    "width": image.width,
                    "height": settings.height,
                    "borderRight": "none",
                    "borderBottom": "2px solid #fff",
                    "minHeight": "0%",
                    "maxHeight": "100%"
                 });
             });

             $(main).mousedown(function(e){
                 e.preventDefault(); //Ignores text on the slider
                 $(document).mousemove(function(e){
                     $(sidebar).css("height", e.pageY - $(sidebar).offset().top); //calculates the width by subtracting the pos of e when mouse is down with the left offset of the sidebar.
                     if (settings.handle) {
                         $(handle).css("top", parseFloat($(sidebar).css("height")) - $(handle).height() / 2);
                     }
                 });
             });
         }


         $(document).mouseup(function(e){
             $(document).unbind('mousemove');
         });

     });

    };

  } (jQuery));
