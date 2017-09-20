import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Contacts } from '@ionic-native/contacts';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  contactsfound = [];

  constructor(private contacts: Contacts,
    private toastCtrl: ToastController) {
  }

  seeContacts() {
    this.contacts.find(["displayName", "phoneNumbers"], { multiple: true }).then((contacts) => {
      this.contactsfound = contacts;
      if (contacts != null && contacts.length < 1) {
        let toast = this.toastCtrl.create({
          message: 'Looks like you dont have any contacts :(',
          duration: 3000,
          position: 'bottom'
        });

        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });

        toast.present();

      }
    })
  }
}
