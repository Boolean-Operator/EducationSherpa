// map.js



// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
// var defaultBounds = new google.maps.latLngBounds(
//   new google.maps.LatLng(-75.7500,38.4500),
//   new google.maps.LatLng(-75.2000, 39.8500)
// );
// var options = {
//   bounds:defaultBounds
// };
var marker, pos;
var placeSearch, autocomplete;

var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};

function initMap() {
  var locate = {lat:39.12485, lng:-75.52636};
	var options = {
		zoom:8,
		center: locate
	};

  // Create the autocomplete object, restricting the search to geographical
  // location types.
  autocomplete = new google.maps.places.Autocomplete((document.getElementById('autocomplete')),
            {types: ['geocode']});

  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  autocomplete.addListener('place_changed', fillInAddress);

  function fillInAddress() {
  // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();
    var lattude = place.geometry.viewport.f.b;
    var lngtude = place.geometry.viewport.b.b;
// Hardcode accuracy difference in coords
    lattude  = lattude + 0.001360;
    lngtude =  lngtude + 0.001589;
    pos = {lat:lattude, lng:lngtude};
    // locate = pos;
    console.log(pos);


    for (var component in componentForm) {
        document.getElementById(component).value = '';
        document.getElementById(component).disabled = false;
      }

// Get each component of the address from the place details
// and fill the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        if (componentForm[addressType]) {
          var val = place.address_components[i][componentForm[addressType]];
          document.getElementById(addressType).value = val;
        }
      }
    }
      //Look up multiple markers

      var options = {
        zoom: 12,
        center: pos
      }



		var map = new google.maps.Map(document.getElementById('map'),options);

    var infoWindow = new google.maps.InfoWindow;
// HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

//use geolocation to set marker location
			marker = new google.maps.Marker({
						position: pos,
						map: map
				});

// center map at geolocation
			map.setCenter(pos);
          }, function() {
            handleLocationError(true, map.getCenter());
          });
    } else {
    // Browser doesn't support Geolocation
      handleLocationError(false, map.getCenter());

    }
  };

    function handleLocationError(browserHasGeolocation,  pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
                            'Error: The Geolocation service failed.' :
                            'Error: Your browser doesn\'t support geolocation.');
      infoWindow.open(map);
    };
