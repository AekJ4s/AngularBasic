import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NewComponent } from './views/newcomponent/newcomponent.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookListComponent } from './views/booklist/booklist.components';
import { UploadImageComponent } from './views/uploadimage/uploadimage.components';
import { BookUpdateComponent } from './views/bookupdate/bookupdate.components';
import { BookDelete } from './views/bookdelete/bookdelete.components';
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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-my-angular';
  arraySample = [1, 3, 99, 6, 8];
  testInput = '';

  onKey(event: any) {
    this.testInput = event.target?.value;
  }
}
