import { Component, Input } from '@angular/core';
import { NavigationEnd, RouterModule, RouterOutlet, Router } from '@angular/router';
import { NewComponent } from './views/newcomponent/newcomponent.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookListComponent } from './views/booklist/booklist.components';
import { UploadImageComponent } from './views/uploadimage/uploadimage.components';
import { BookUpdateComponent } from './views/bookupdate/bookupdate.components';
import { BookDelete } from './views/bookdelete/bookdelete.components';
import { randomBytes } from 'crypto';
import {  appcrossComponent  } from './views/crosscomponent/cross.components';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    BookDelete,
    BookUpdateComponent,
    UploadImageComponent,
    RouterModule,
    BookListComponent,
    FormsModule,
    CommonModule,
    RouterOutlet,
    NewComponent,
    appcrossComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: []
})


export class AppComponent {
  title = 'first-my-angular';
  currentRoute: string = '';
  data = { IdData: 1, nameData: "This is Data from appComponent" };
  constructor(private router: Router) {}
  
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.onRouteChange(event.url);
      }
    });
  }

  onRouteChange(route: string) {
    this.currentRoute = route.replace('/', ''); // ดึงชื่อหน้าจาก URL
  }
  
 


}

