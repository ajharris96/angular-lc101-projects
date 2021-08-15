import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://preview.redd.it/axfdkc3bojh71.jpg?width=640&crop=smart&auto=webp&s=c25c81afac6bc202eb3981000c3a3e73a6042da0';
  image2 = 'https://preview.redd.it/zqcckk5gls961.png?width=640&crop=smart&auto=webp&s=aade0d53ba02f92bc3da0b0aa98b89c4236f5d39'
  image3 = 'https://preview.redd.it/615o3mx0uic61.jpg?width=640&crop=smart&auto=webp&s=004fe6902564d7d8b61c4512aa97622cdf8f180d'
  constructor() { }

  ngOnInit() {
  }

}