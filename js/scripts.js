$(document).ready(function () {

    /********************** Embed youtube video *********************/
    $('.player').YTPlayer();
    
    /***************** Waypoints ******************/

    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp2').waypoint(function () {
        $('.wp2').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp3').waypoint(function () {
        $('.wp3').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp4').waypoint(function () {
        $('.wp4').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function () {
        $('.wp5').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function () {
        $('.wp6').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });
    $('.wp7').waypoint(function () {
        $('.wp7').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp8').waypoint(function () {
        $('.wp8').addClass('animated fadeInLeft');
    }, {
        offset: '75%'
    });
    $('.wp9').waypoint(function () {
        $('.wp9').addClass('animated fadeInRight');
    }, {
        offset: '75%'
    });

    /***************** Initiate Flexslider ******************/
    $('.flexslider').flexslider({
        animation: "slide"
    });

    /***************** Initiate Fancybox ******************/

    $('.single_image').fancybox({
        padding: 4
    });

    $('.fancybox').fancybox({
        padding: 4,
        width: 1000,
        height: 800
    });

    /***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

    /***************** Nav Transformicon ******************/

    /* When user clicks the Icon */
    $('.nav-toggle').click(function () {
        $(this).toggleClass('active');
        $('.header-nav').toggleClass('open');
        event.preventDefault();
    });
    /* When user clicks a link */
    $('.header-nav li a').click(function () {
        $('.nav-toggle').toggleClass('active');
        $('.header-nav').toggleClass('open');

    });

    /***************** Header BG Scroll ******************/

    $(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 20) {
                $('section.navigation').addClass('fixed');
                $('header').css({
                    "border-bottom": "none",
                    "padding": "35px 0"
                });
                $('header .member-actions').css({
                    "top": "26px",
                });
                $('header .navicon').css({
                    "top": "34px",
                });
            } else {
                $('section.navigation').removeClass('fixed');
                $('header').css({
                    "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
                    "padding": "50px 0"
                });
                $('header .member-actions').css({
                    "top": "41px",
                });
                $('header .navicon').css({
                    "top": "48px",
                });
            }
        });
    });
    /***************** Smooth Scrolling ******************/

    $(function () {

        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 90
                    }, 2000);
                    return false;
                }
            }
        });

    });

    /********************** Toggle Map Content **********************/
    $('#btn-show-map').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });
    $('#btn-show-content').click(function () {
        $('#map-content').toggleClass('toggle-map-content');
        $('#btn-show-content').toggleClass('toggle-map-content');
    });

    /********************** Add to Calendar **********************/
    var myCalendarChurch = createCalendar({
        options: {
            class: '',
            // You can pass an ID. If you don't, one will be generated for you
            id: ''
        },
        data: {
            // Event title
            title: "Karolina and David's Wedding Ceremony",

            // Event start date
            start: new Date('Sept 28, 2024 12:00'),

            // Event duration (IN MINUTES)
            // duration: 120,

            // You can also choose to set an end time
            // If an end time is set, this will take precedence over duration
            end: new Date('Sept 28, 2024 14:00'),

            // Event Address
            address: '5136 N Nottingham Ave, Chicago, IL 60656',

            // Event Description
            description: "We can't wait to see you on our big day. Please reach out with any questions. <br> <br> With love, <br> Karolina and David"
        }
    }),
    myCalendarWedding = createCalendar({
        options: {
            class: '',
            // You can pass an ID. If you don't, one will be generated for you
            id: ''
        },
        data: {
            // Event title
            title: "Karolina and David's Wedding Reception",

            // Event start date
            start: new Date('Sept 28, 2024 18:30'),

            // Event duration (IN MINUTES)
            // duration: 120,

            // You can also choose to set an end time
            // If an end time is set, this will take precedence over duration
            end: new Date('Sept 29, 2024 01:00'),

            // Event Address
            address: '5035 N. River Road, Schiller Park, IL 60176',

            // Event Description
            description: "We can't wait to see you on our big day. Please reach out with any questions. <br> <br> With love, <br> Karolina and David"
        }
    });

    $('#add-church-to-cal').html(myCalendarChurch);
    $('#add-church-to-cal').children('div').eq(0).children('label')[0].innerHTML = '<i class="fa fa-calendar"></i>&nbsp;&nbsp; Add Ceremony to Calendar';
    $('#add-wedding-to-cal').html(myCalendarWedding);
    $('#add-wedding-to-cal').children('div').eq(0).children('label')[0].innerHTML = '<i class="fa fa-calendar"></i>&nbsp;&nbsp; Add Reception to Calendar';


    /********************** RSVP **********************/
    $('#rsvp-form').on('submit', function (e) {
        e.preventDefault();
        var data = $(this).serialize();

        $('#alert-wrapper').html(alert_markup('info', '<strong>Just a sec!</strong> We are saving your details.'));

        $.post('https://script.google.com/macros/s/AKfycbwLacKKEwYXGj0bgtNSc1X6mCwW36TbZyMlssl1Fv0NrKd1fiMHUYLko7KS92nsYHhS/exec', data)
                .done(function (data) {
                    console.log(data);
                    if (data.result === "error") {
                        $('#alert-wrapper').html(alert_markup('danger', data.message));
                    } else {
                        $('#alert-wrapper').html('');
                        $('#rsvp-modal').modal('show');
                    }
                })
                .fail(function (data) {
                    console.log(data);
                    $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> There is some issue with the server. '));
                });
    });

    $('input[type="checkbox"]').on('change', function() {
      $('input[type="checkbox"]').not(this).prop('checked', false);
   });
});

/********************** Extras **********************/

// Google map
function initMap() {
    var LocationWedding = {lat: 41.97084055944911, lng: -87.861115601433};
    var locationChurch = {lat: 41.97548919665057, lng: -87.80409196254881};
    
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        scrollwheel: false,
        mapId: "WEDDING_MAP_ID",
    });

    var bounds = new google.maps.LatLngBounds();
    var markerWedding = new google.maps.marker.AdvancedMarkerElement({
        position: LocationWedding,
        map: map
    });
    var pt = new google.maps.LatLng(41.97084055944911, -87.861115601433);
    bounds.extend(pt);

    var markerChurch = new google.maps.marker.AdvancedMarkerElement({
        position: locationChurch,
        map: map
    });
    var pt = new google.maps.LatLng(41.97548919665057, -87.80409196254881);
    bounds.extend(pt);

    center = bounds.getCenter();
    map.setCenter(center);
    map.fitBounds(bounds);

}

// alert_markup
function alert_markup(alert_type, msg) {
    return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}
