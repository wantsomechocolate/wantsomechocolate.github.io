/* For mousemove and touchmove to zoom on modal images in the gallery*/
  $('.gallery.lightbox .modal .inner')
    .on("mouseover touchstart", function() {
      $(this)
        .children('.gallery.lightbox .modal .inner img')
        .css({ transform: "scale(5)" });
    })
    .on("mouseout touchend", function() {
      $(this)
        .children('.gallery.lightbox .modal .inner img')
        .css({ transform: "scale(1)" });
    })
    .on("mousemove", function(e) {
      $(this)
        .children('.gallery.lightbox .modal .inner img')
        .css({
          "transform-origin":
            ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + "% " +
            ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + "%"
        });
    });

  /* A little workaround for the touchmove because the transform-origin data comes from changedTouches instead of directly from the event*/
  $('.gallery.lightbox .modal .inner img')
    .on("touchmove", function(e){
      $(this)
        .css({
          "transform-origin":
            ((e.changedTouches[0].pageX - $(this).parent().offset().left) / ($(this).width()) * 100) + "% " + 
            ((e.changedTouches[0].pageY - $(this).parent().offset().top) / ($(this).height()) * 100) + "%"
        });
    })


// Hiding forward and backward divs in the gallery when they aren't needed
  myFunction = function(){
    // find all gallery elements
    galleries = $('.gallery')
    // Loop through them and set visibility depending on width of inner
    for (let i = 0; i < galleries.length; i++) {
      gallery = galleries[i]
      if ($(gallery).width() > $(gallery).children('.inner').width() ) {
         $(gallery).children('.forward').css({visibility:'hidden'});
         $(gallery).children('.backward').css({visibility:'hidden'});
      } else {
         $(gallery).children('.forward').css({visibility:'visible'});
         $(gallery).children('.backward').css({visibility:'visible'});
      }
    }
  };
  // run function on load
  $(document).ready(function(){
    myFunction()
  })
  // run function on when window is resized
  $( window ).resize(function() {
    myFunction()
  })


// Stop bg from scrolling when a modal is open

$('html').click(function() {
  $(".floating-nav-icons-container").removeClass("is-visible");
  $(".floating-nav-bg").removeClass("is-visible");
});

$('.floating-nav-trigger').click(function(event){
     event.stopPropagation();
});

//floating navigation
$('.floating-nav-trigger a').click(function(e){
  $(".floating-nav-icons-container").toggleClass("is-visible");
  $(".floating-nav-bg").toggleClass("is-visible");
})

