import { Component } from '@angular/core';
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
  public base64Image: string;

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    targetWidth: 500,
    targetHeight: 500,
    correctOrientation: false,
    saveToPhotoAlbum: true,
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera) {
    this.camera = camera;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  openGallery() {
    this.camera.getPicture(this.options)
      .then((imageData) => {
        // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
      },
      err => this.setStatus(err));
  }

  setStatus(message) {
    console.log(message);
    this.statusMessage = message;
  }

}
