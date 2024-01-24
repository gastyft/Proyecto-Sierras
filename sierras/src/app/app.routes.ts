import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NgModule } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComoLlegarComponent } from './components/como-llegar/como-llegar.component';
import { MasInfoComponent } from './components/mas-info/mas-info.component';
import { Error404Component } from './components/error404/error404.component';

export const routes: Routes = [

    {path: '', 
    redirectTo: 'header', pathMatch:'full'},
    {path: 'principal', 
    component:PrincipalComponent }, 
    {path: 'header', 
    component:HeaderComponent}, 
    {path: 'contact', 
    component:ContactComponent }, 
    {path: 'footer', 
    component:FooterComponent }, 
    {path: 'como-llegar', 
    component:ComoLlegarComponent }, 
    {path: 'mas-info', 
    component:MasInfoComponent }, 
   
    { path: '**',  
  component: Error404Component  },
   
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    
    exports: [RouterModule]
  })
  export class AppRoutingModule { }