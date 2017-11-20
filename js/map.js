$(document).ready(function() {});

function initialize() {
    var myLatlng1 = new google.maps.LatLng(-34.072674, 18.887847);
    var mapOptions = {
        zoom: 15,
        center: myLatlng1,
        scrollwheel: false
    };

    var map = new google.maps.Map(document.getElementById('map1'),
        mapOptions);

    var contentString1 = 'Erinvale Country and Golf Estate'

    var infowindow = new google.maps.InfoWindow({});

    var marker1 = new google.maps.Marker({
        position: myLatlng1,
        map: map,
        title: 'Erinvale Country and Golf Estate'
    });
    google.maps.event.addListener(marker1, 'click', function initialize() {
        infowindow.close(); //hide the infowindow
        infowindow.setContent(contentString1); //update the content for this marker
        infowindow.open(map, marker1);

    });
}