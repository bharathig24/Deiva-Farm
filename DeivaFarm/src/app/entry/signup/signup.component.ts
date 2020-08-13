import { Component, OnInit } from '@angular/core';
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { DataService } from 'src/app/service/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  faFacebookF = faFacebookF;
  faGooglePlusG = faGooglePlusG;
  faEnvelope = faEnvelope;
  faLock = faLock;
  faUser = faUser;

  registerForm;

  constructor(private service: DataService, private router: Router) { 
    this.registerForm = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      eMail: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    }
    );
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // console.log(this.registerForm.value);
      this.service.registerReq(this.registerForm.value).subscribe(
        res => {console.log(res);
          if (res['data'] === "true") {
            const userData = [
              {'userName': this.registerForm.value.userName},
              {'eMail':this.registerForm.value.eMail}
            ];  
            console.log(userData);
            
            localStorage.setItem('userData', JSON.stringify(userData));
            this.router.navigate(['']);
          }
        },
        err => {
            // console.log("douplicate entry");
          console.log(err);
        }
      );
    }
  }

}
