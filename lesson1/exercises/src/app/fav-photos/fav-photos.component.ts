import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://preview.redd.it/axfdkc3bojh71.jpg?width=640&crop=smart&auto=webp&s=c25c81afac6bc202eb3981000c3a3e73a6042da0';
  image2 = 'http://www.nasa.gov/sites/default/files/thumbnails/image/pia23645_pbd_main-16.jpg';
  image3 = 'https://media.sanctuarymentalhealth.org/wp-content/uploads/2021/03/04151535/The-Starry-Night.jpg'
  constructor() { }

  ngOnInit() {
  }

}