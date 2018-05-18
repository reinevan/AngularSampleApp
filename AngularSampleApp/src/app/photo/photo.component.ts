import { Component, OnInit, Input } from '@angular/core';
import { IPhoto } from '../resources/PhotosResource';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  @Input() photo: IPhoto;

  constructor() { }

  ngOnInit() {
  }

}
