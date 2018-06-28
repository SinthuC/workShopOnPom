import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {KnewPage} from '../knew/knew';
import { PeePage } from '../pee/pee';
import { AlertController, NavController, ToastController } from 'ionic-angular';
import { PomPage } from '../pom/pom';
import { JormPage } from '../jorm/jorm';
import { Bong1Page } from '../bong1/bong1';



@Component({
  selector: 'page-user',
  templateUrl: 'support.html'
})
export class SupportPage {
  kneww : any;
  submitted: boolean = false;
  supportMessage: string;
  bong1 = Bong1Page;
  go2Jorm = JormPage;
  
  goToPom: any 
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {
      this.goToPom = PomPage;
     
      this.bong1=Bong1Page;

    this.kneww =KnewPage;
  }
  Pee(){
    this.navCtrl.push(PeePage);
  }
  ionViewDidEnter() {
    let toast = this.toastCtrl.create({
      message: 'This does not actually send a support request.',
      duration: 3000
    });
    toast.present();
  }

  submit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.supportMessage = '';
      this.submitted = false;

      let toast = this.toastCtrl.create({
        message: 'Your support request has been sent.',
        duration: 3000
      });
      toast.present();
    }
  }

  // If the user enters text in the support question and then navigates
  // without submitting first, ask if they meant to leave the page
  ionViewCanLeave(): boolean | Promise<boolean> {
    // If the support message is empty we should just navigate
    if (!this.supportMessage || this.supportMessage.trim().length === 0) {
      return true;
    }

    return new Promise((resolve: any, reject: any) => {
      let alert = this.alertCtrl.create({
        title: 'Leave this page?',
        message: 'Are you sure you want to leave this page? Your support message will not be submitted.'
      });
      alert.addButton({ text: 'Stay', handler: reject });
      alert.addButton({ text: 'Leave', role: 'cancel', handler: resolve });

      alert.present();
    });
    
  }
}
