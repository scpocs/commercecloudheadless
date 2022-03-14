import { Component, NgZone, OnInit } from '@angular/core';
import { SeducService } from 'src/app/service/seduc.service';

import { latLng, MapOptions, tileLayer, Map, Marker, icon } from 'leaflet';
import { Router } from '@angular/router';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  mapOptions!: MapOptions;
  map!: Map;

  constructor(public service: SeducService, private router: Router, private ngZone: NgZone) { }

  ngOnInit(): void {
    this.initializeMapOptions();
  }

  private initializeMapOptions() {
    this.mapOptions = {
      center: latLng(-3.7754192, -38.5265899),
      zoom: 12,
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            maxZoom: 18,
            attribution: 'Map data © OpenStreetMap contributors'
          })
      ],
    };
  }

  onMapReady(map: Map) {
    let list = [
      {
        name: "escola 1",
        lat: -3.7322456176437817,
        lon: - 38.5940543363145
      },
      {
        name: "escola 2",
        lat: -3.777113388378782,
        lon: - 38.50889667086258
      },
      {
        name: "escola 3",
        lat: -3.72502932332094,
        lon: - 38.501343163347606
      },
    ]
    this.map = map;

    list.forEach(element => {
      this.addSampleMarker(element);
    });
  }

  private addSampleMarker(element: any) {
    const marker = new Marker([element.lat, element.lon])
      .setIcon(
        icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/icon.png'
          // iconUrl: 'assets/marker-icon.png'
        }));
    // element.callFunction = this.matricular
    // marker.bindPopup(this.makePopup(element));
    marker.on('click',
      (e) => { this.pinWasCliscked(e) });
    marker.addTo(this.map);
  }

  private pinWasCliscked(e: any) {
    this.selectSchool();
    // this.pinClicked.emit('');
  }

  makePopup(data: any): string {
    return `` +
      `<div>Nome: ${data.name}</div>` +
      `<div>YY: ${data.name}</div>` +
      `<div>XX: ${data.name}</div>` +
      `<button type="button" onclick(console.log("Hello")) class="btn btn-primary btn-block">Escolher</button>`
  }


  selectSchool() {
    this.ngZone.run(() => {
      this.router.navigate(['/student', this.service.student.id, 'school']);
    });
  }


}
