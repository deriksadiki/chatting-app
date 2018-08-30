import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  message;
  user =  this.navParams.get('user');
  messages = new Array()

  db = firebase.database();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getmessages();
  }

  getmessages(){
    firebase.database().ref('chats/'+ this.user + '/messages' + '/').on('value', (data: any) => {

      var username = data.val();
 
      console.log(username);
 
      var keys: any = Object.keys(username);
 
      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
 
        let obj = {
          item: username[k].message,
          key: k
        }
 
 
        this.messages.push(obj);
 
        console.log(this.messages);
 
 
      }
 })
  }

 send(){
  this.db.ref('chats/'+ this.user + '/messages' + '/').push({
    message:this.message
  })

  this.messages=[];
  this.messages.length = 0;
  this.getmessages();
 }

}
