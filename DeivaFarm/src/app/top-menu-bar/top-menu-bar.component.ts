import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller, DOCUMENT } from '@angular/common';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-top-menu-bar',
  templateUrl: './top-menu-bar.component.html',
  styleUrls: ['./top-menu-bar.component.scss']
})
export class TopMenuBarComponent implements OnInit {

  disp;
  user="";

  constructor(private router: Router, 
    private vps: ViewportScroller, 
    @Inject(DOCUMENT) private document: Document,
    private service: DataService) { 
      // console.log(JSON.parse(localStorage.getItem("userData"))[0].userName);
      if(localStorage.length != 0){
        this.user = JSON.parse(localStorage.getItem("userData"))[0].userName;
      }
      
    }

  // navigate(){
  //   this.router.navigateByUrl('/login');
  // }
  a = 0;
  Yoffset = 10;
  ngOnInit() {
    
    window.addEventListener("scroll",()=>{
        // console.log(window.pageYOffset);
        
      
        this.a = window.pageYOffset/50;
      if(this.a <= 0.9){
        // console.log(this.a);
        (this.document.querySelector(".top-nav") as HTMLElement).style.backgroundColor = `rgba(40, 191, 16 ,${this.a})`;
      }else if(window.pageYOffset > 450){
        (this.document.querySelector(".top-nav") as HTMLElement).style.backgroundColor = "rgba(40, 191, 16 ,0.9";
      }
    });
  }

  logout(){
    localStorage.clear();
    this.user="";
  }

}
