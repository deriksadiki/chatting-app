import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListPage } from '../list/list';

declare var firebase;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
mail;
pass;

auth = firebase.auth();
db = firebase.database();

  constructor(public navCtrl: NavController) {

  }

  test(){
  
    this.navCtrl.push(ListPage, {user:this.mail})

  }

}
