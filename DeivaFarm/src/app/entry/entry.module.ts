import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryRoutingModule } from './entry-routing.module';
import { EntryComponent } from './entry.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EntryComponent, 
    LoginComponent, 
    SignupComponent
  ],
  imports: [
    CommonModule,
    EntryRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class EntryModule { }
