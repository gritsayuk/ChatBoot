import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  //Bot: any;
  //w: any;
  //s: Object;
  //boot: any;
  constructor(public navCtrl: NavController) {

    (function(d,w){
      w["__bankitCC"] = {
        host: 'dev.bankit.com.ua',
        cookieName:'_acbswcu',
        clientUID : false,
        lang: 'ru',
        client:{ name:false },
        autoStart:true,
        style:false,
        close:true
      };
      var s=d.createElement('script');
      s.src="https://"+w["__bankitCC"].host+"/webchat/script.js";
      s.async=true;
      s.type="text/javascript";
      //console.log("+++++++++++++++"+d.body.children[4].tagName);
      //console.log("+++++++++++++++"+d.body.children[4].nodeName);
      //console.log("+++++++++++++++"+d.body.children[4].className);
      //var boot = d.body.getElementsByClassName("boot1");
      //console.log('--------------'+boot);
      //boot.appendChild(s);
      if(d.body)d.body.appendChild(s);
      //this.Bot = s;
    })(document,window)

 /*   window["__bankitCC"] = {
      host: 'dev.bankit.com.ua',
      cookieName:'_acbswcu',
      clientUID : false,
      lang: 'ru',
      client:{ name:false },
      autoStart:true,
      style:false,
      close:true
    };
 //   this.s=document.createElement('script');
 //   this.s.src="https://"+window["__bankitCC"].host+"/webchat/script.js";
 //   this.s.async=true;
 //   this.s.type="text/javascript";
    //console.log("+++++++++++++++"+d.body.children[4].tagName);
    //console.log("+++++++++++++++"+d.body.children[4].nodeName);
    //console.log("+++++++++++++++"+d.body.children[4].className);
    //if(d.body)d.body.children[1].appendChild(s);
    this.boot = document.body.getElementsByClassName("boot1");
    console.log('--------------'+this.boot);*/
  }

}
