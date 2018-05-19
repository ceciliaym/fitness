var map;
var service;
var infowindow;

function initialize() {
  var richmond = new google.maps.LatLng( 37.5407,-77.4360);

  map = new google.maps.Map(document.getElementById('map'), {
      center: richmond,
      zoom: 10
    });
    // console what map is
    console.log(map);

  var request = {
    location: richmond,
    radius: '500',
    query: 'brewery'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (let i = 0; i < results.length; i++) {
        let place = results[i];
        

    var myLatLng={
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()

    }
//    Change the content inside of the span to change the information and how its displayed.
    console.log(place)
    let infowindow = new google.maps.InfoWindow({
     content: `<div>${place.name}</div>
                <div>${place.formatted_address}</div>` 
                
                
    })
    console.log(infowindow)
// end of the click content.
      console.log(place.geometry.location.lat());
    //   createMarker(results[i]);
    let marker= new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
     });
     marker.addListener('click', function(){
       console.log(marker)
         infowindow.open(map,marker);
     })
    }
    console.log(map)
  }
}

initialize();