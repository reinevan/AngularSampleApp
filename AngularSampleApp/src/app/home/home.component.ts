import { Component, OnInit } from '@angular/core';
import { PhotosResource, IPhoto } from '../resources/PhotosResource';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  photosList: IPhoto[] = [];

  constructor(private photosRes: PhotosResource) { }

  ngOnInit() {
    this.photosRes.getPhotos(null, (receivedPhotos: IPhoto[]) => {
      this.photosList = receivedPhotos;
    });
  }
}
