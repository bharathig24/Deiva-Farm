import { Component, OnInit } from '@angular/core';
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm;

  faFacebookF = faFacebookF;
  faGooglePlusG = faGooglePlusG;
  faEnvelope = faEnvelope;
  faLock = faLock;

  constructor(private router : Router,
    private service: DataService) { 
      this.loginForm = new FormGroup({
        eMail : new FormControl('',[Validators.required]),
        password : new FormControl('',[Validators.required])
      });
      localStorage.clear();
    }

  ngOnInit() {
  }

  login(){
    //  console.log(obj);
    this.service.loginReq(this.loginForm.value).subscribe(res=>{
      console.log(res);
      if(res['data'] === "true"){
        const userData = [
          {'userName': res['userName']},
          {'eMail':res['eMail']}
        ];  
        localStorage.setItem('userData', JSON.stringify(userData));
        
        this.router.navigate(['']);
        
      }
    },err=>{
      console.log(err);
    });
    
    // this.router.navigate(['/home']);
  }

}
