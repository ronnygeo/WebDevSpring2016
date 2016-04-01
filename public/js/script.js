/**
 * Created by ronnygeo on 2/13/16.
 */

(function(){
    var theater = theaterJS();

    theater
        .addActor('role', {speed: 0.6, accuracy: 0.8})
        .addScene('role:DATA', 700)
        .addScene('role: WEB', 400)
        .addScene('role: SOFTWARE', 400)
        .addScene('role:ANALYTICS')
        .addScene('role:AI', 600)
        .addScene('role:NLP', 500)
        .addScene(theater.replay.bind(theater));

    window.sr = ScrollReveal({reset: true});
    sr.reveal('#intro', {duration: 500});
    sr.reveal('#education', {duration: 500});
    sr.reveal('#experience', {duration: 1000});
    sr.reveal('#projects', {duration: 500});
    //sr.reveal('#interests', {duration: 500});
    sr.reveal('#image-thumb-1', {duration: 100});
    sr.reveal('#image-thumb-2', {duration: 300});
    sr.reveal('#image-thumb-3', {duration: 500});
    sr.reveal('#image-thumb-4', {duration: 700});


    //sr.reveal('#links', {duration: 1000});
})();
$(document).foundation();
$('#offCanvasLeft').click(function(){
    //e.preventDefault();
//    $("#closeOffCanvas").click();
    $('#offCanvasLeft').removeClass('is-open');
    $('#offCanvasLeft').attr('aria-hidden',true);
    $('#offCanvasWrapper').removeClass('is-off-canvas-open').removeClass('is-open-left');
});
$('a').smoothScroll();

//function initMap() {
//    var mapDiv = document.getElementById('map');
//    var map = new google.maps.Map(mapDiv, {
//        center: {lat: 44.540, lng: -78.546},
//        disableDefaultUI: false,
//        draggable: false,
//        streetViewControl: false,
//        scaleControl: false,
//        zoomControl: false,
//        scrollwheel: false,
//        MapTypeId: 'OCEANIC',
//        mapTypeControl: false,
//        zoom: 1});
//}
