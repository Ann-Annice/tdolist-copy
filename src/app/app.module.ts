import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodolistcopyComponent } from './todolistcopy/todolistcopy.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes:Routes=[
  {
    path:"",component:TodolistcopyComponent
  },
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodolistcopyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
