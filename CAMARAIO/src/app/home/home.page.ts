import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  image: string;

  constructor(
    private camera: Camera,
    private webView: WebView 

  ) {}
  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    this.camera.getPicture(options)
    .then((imageData) => {
      this.image = this.webView.convertFileSrc(imageData);
    }, (err) => {
      console.log(err);
    });
  }
  
}