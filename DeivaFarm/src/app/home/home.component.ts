import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
// import {  }
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as Envelope} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faMapMarkerAlt = faMapMarkerAlt;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faWhatsapp = faWhatsapp;
  faFacebookF = faFacebookF;
  Envelope = Envelope;
  faTwitter = faTwitter;
  
  bgImage = ["url(../../assets/Images/farmer.jpg)",
              "url(../../assets/Images/cow.jpg)",
              "url(../../assets/Images/goat.jpg)",
              "url(../../assets/Images/poultry.jpg)"]; 
  bg = "url(../../assets/Images/farmer.jpg)";
  count = 0;
  matDialog: any;
  constructor() {
    // console.log("width: "+window.innerWidth+"  "+ "Height: "+window.innerHeight);
    setInterval(()=>{
      // console.log(vps.getScrollPosition());
      this.count = this.count + 1;
      this.bg = this.bgImage[this.count % 4];
    },5000);
  }

  // ngOnChanges(){
  //   console.log(this.vps.getScrollPosition());
  // }

  ngOnInit() {
  }


}
