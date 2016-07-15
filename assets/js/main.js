$(document).ready(function() {

    // Hide the how_works panel, connected to button (code blow)
    $("#how_works").hide();

    /* ======= YouTube video player ======= */ 
        
        // //  This code loads the IFrame Player API code asynchronously.  
        // var tag = document.createElement('script');
        // tag.src = "https://www.youtube.com/iframe_api";
        // var firstScriptTag = document.getElementsByTagName('script')[0];
        // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // //  This function creates an <iframe> (and YouTube player)
        // //  after the API code downloads.
        // var player;
        // function onYouTubeIframeAPIReady() {
        //     player = new YT.Player('player', {
        //         height: '405',
        //         width: '720',
        //         videoId: 'SJ9wc8qaldo',
        //         events: {
        //             'onReady': onPlayerReady,
        //             'onStateChange': onPlayerStateChange
        //         }
        //     });
        // }

        // //  The API will call this function when the video player is ready.
        // function onPlayerReady(event) {
        //     event.target.playVideo();
        // }

        // //  The API calls this function when the player's state changes.
        // //  The function indicates that when playing a video (state=1),
        // //  the player should play for six seconds and then stop.
        // var done = false;
        // function onPlayerStateChange(event) {
        //     if (event.data == YT.PlayerState.PLAYING && !done) {
        //         setTimeout(stopVideo, 6000);
        //         done = true;
        //     }
        // }
        // function stopVideo() {
        //     player.stopVideo();
        // }


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









