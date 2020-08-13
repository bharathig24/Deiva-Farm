import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TopMenuBarComponent } from './top-menu-bar/top-menu-bar.component';


const routes: Routes = [
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: MainPageComponent, children:[
    {path:'', component: TopMenuBarComponent},
    {path:'', component: HomeComponent, outlet:'home'}
  ]},
  // { path: 'login', component: LoginComponent},
  { path: '', loadChildren: () => import('./entry/entry.module').then(m => m.EntryModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
