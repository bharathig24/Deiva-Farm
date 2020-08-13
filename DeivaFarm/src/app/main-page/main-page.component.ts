import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  currentUrl;

  constructor(private router: Router) { 
    // this.currentUrl = this.router.url;
    // console.log(this.router.url);
    // console.log(window.location.href);
    
  }

  // url(){
  //   console.log(this.router.url);
  //   console.log(window.location.href);
  // }

  getDisplay(){
    console.log(this.router.url);
    
    if(this.router.url == "/entry"){
      return {'display':'none'};
    }
  }

  ngOnInit() {
  }

}
