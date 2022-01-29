// Instructions to every other class
// on how they can be an argument to 'addMarker´
interface Mappable {
  name: string;
  location: { 
    lat: number;
    lng: number;
  }
}


export class CustomMap {
  // private = property cannot be accessed outside of this class
  private googleMap: google.maps.Map; 

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      },
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: 'Hello there',
      });
      infoWindow.open(this.googleMap, marker);
    });
  }

}