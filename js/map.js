      function initMap() {
        var uluru = {lat: 43.1901592, lng: 25.9951732};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }