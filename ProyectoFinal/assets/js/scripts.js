function iniciarMap(){
    var coord = {lat: 32.499382884180726 ,lng: -116.92559456098334};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
  }
  