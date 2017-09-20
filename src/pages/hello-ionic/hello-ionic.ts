import { Component } from '@angular/core';
import { Contacts } from '@ionic-native/contacts';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  contactsfound = [];

  constructor(private contacts: Contacts) {
    this.contacts = contacts;
  }

  seeContacts(){
    this.contacts.find(["displayName", "phoneNumbers"], {multiple: true}).then((contacts) => {
      this.contactsfound = contacts;
     })
  }
}
