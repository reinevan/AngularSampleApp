import { Resource, ResourceParams, ResourceAction, IResourceMethod, ResourceHandler } from '@ngx-resource/core';
import { Injectable } from '@angular/core';

export interface IPhoto {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

@Injectable()
@ResourceParams({
  url: 'https://jsonplaceholder.typicode.com'
})
export class PhotosResource extends Resource {

  @ResourceAction({
    path: '/photos',
    expectJsonArray: true
  })
  getPhotos: IResourceMethod<null, IPhoto[]>;

  constructor(restHandler: ResourceHandler) {
    super(restHandler);
  }
}