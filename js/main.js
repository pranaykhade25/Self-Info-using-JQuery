let index=0;
const totalProjectItems= $(".project-item").length;

$(document).ready(function(){

    // preloader
    $(window).on("load", function(){
        $(".preloader").addClass("loaded");
    })

    // nav toggle

    $(".nav-toggle").click(function(){
        $(".header .nav").slideToggle();
    })
    $(".header .nav a").click(function(){
        if($(window).width()<768){
            $(".header .nav").slideToggle();
        }
    })


    //fixed header
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $(".header").addClass("fixed");
        }
        else{
            $(".header").removeClass("fixed");
        }
    })

    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    //set light box img max height
    const wHeight= $(window).height();
    $(".lightbox-img").css("max-height", wHeight+"px");

    //lightbox
    $(".project-item-inner").click(function(){
        index=($(this).parent(".project-item").index());
        $(".lightbox").addClass("open")
        lightboxSlideshow();
    })

    $(".lightbox .prev").click(function(){
        if(index==0){
            index=totalProjectItems-1;
        }
        else{
            index--;
        }
        lightboxSlideshow();
    })

    $(".lightbox .next").click(function(){
        if(index==totalProjectItems-1){
            index=0;
        }
        else{
            index++;
        }
        lightboxSlideshow();
    })

    // close lightbox
    $(".lightbox-close").click(function(){
        $(".lightbox").removeClass("open")
    })

    //close lightbox when clicked outside of img-box
    $(".lightbox").click(function(event){
        if($(event.target).hasClass("lightbox")){
            $(this).removeClass("open");
        }
    })
})

function lightboxSlideshow(){
    const imgSrc= $(".project-item").eq(index).find("img").attr("data-large");
    const category=$(".project-item").eq(index).find("h4").html();
    $(".lightbox-img").attr("src", imgSrc);
    $(".lightbox-category").html(category);
    $(".lightbox-counter").html(totalProjectItems +"/"+ (index+1));
};