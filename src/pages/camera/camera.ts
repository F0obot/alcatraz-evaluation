import { Component, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  statusMessage: string;
  private imageSrc: string;

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public camera: Camera,
    public ngZone: NgZone) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  openGallery() {
    this.camera.getPicture(this.options)
    .then(file_uri => this.imageSrc = file_uri, 
    err => this.setStatus(err));   
  }

  setStatus(message) {
    console.log(message);
    this.ngZone.run(() => {
      this.statusMessage = message;
    });
  }

}
