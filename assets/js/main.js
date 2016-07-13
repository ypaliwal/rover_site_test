$(document).ready(function() {
    
    // Hide the how_works panel, connected to button (code blow)
    $("#how_works").hide();

    function getMobileOperatingSystem() {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
      {
        return 'iOS';

      }
      else if( userAgent.match( /Android/i ) )
      {

        return 'Android';
      }
      else
      {
        return 'unknown';
      }
    }
    var deviceOS = getMobileOperatingSystem()

    if(deviceOS == 'Android') {
        $(".downloadLink").attr("href", "http://www.google.com/");
    }


    /* ======= Twitter Bootstrap hover dropdown ======= */   
    /* Ref: https://github.com/CWSpear/bootstrap-hover-dropdown */ 
    /* apply dropdownHover to all elements with the data-hover="dropdown" attribute */
    
    $('[data-hover="dropdown"]').dropdownHover();
    
    /* ======= Fixed header when scrolled ======= */    
    $(window).on('scroll load', function() {
         
         if ($(window).scrollTop() > 0) {
             $('#header').addClass('scrolled');
         }
         else {
             $('#header').removeClass('scrolled');
             
         }
    });
    
    
    /* ======= jQuery Placeholder ======= */
    /* Ref: https://github.com/mathiasbynens/jquery-placeholder */
    
    $('input, textarea').placeholder();    
    
    /* ======= jQuery FitVids - Responsive Video ======= */
    /* Ref: https://github.com/davatron5000/FitVids.js/blob/master/README.md */
    
    $(".video-container").fitVids();
    
    /* ======= FAQ accordion ======= */
    function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find('.panel-title a')
        .toggleClass('active')
        .find("i.fa")
        .toggleClass('fa-plus-square fa-minus-square');
    }
    $('.panel').on('hidden.bs.collapse', toggleIcon);
    $('.panel').on('shown.bs.collapse', toggleIcon);    
	
	/* ======= Stop Video Playing When Close the Modal Window ====== */
    $("#modal-video .close").on("click", function() {
        var vidsrc = $("#modal-video iframe").attr('src');

        // sets the source to nothing, stopping the video
        $("#modal-video iframe").attr('src',''); 

        // sets it back to the correct link so that it reloads immediately on the next window open
        $("#modal-video iframe").attr('src', vidsrc);        
    });

    $("#how_works_btn").click(function(){
        if ( $("#headerHelper").hasClass("isOn") ) {
            console.log("re-clicking");
        } else {
            $("#headerHelper").addClass("isOn");

            function helperM1() {
                $("#headerHelper").addClass("how_works_top")
            }
            // working sol'n
            $("#how_works").fadeIn(500);
            $(".how_works").animate({
            'marginTop' : "+=500px" //moves down
            }, 600);
            setTimeout(helperM1,240);
        }

        
        
        // 
        
    });

    $("#hwtopClose").click(function(){
        $("#headerHelper").removeClass("isOn");
        function helperM1() {
            $("#headerHelper").removeClass("how_works_top")
        }

        $("#how_works").fadeOut(500);
        $(".how_works").animate({
        'marginTop' : "-=500px" //moves down
        }, 600);
        setTimeout(helperM1,240); 
    });
});









