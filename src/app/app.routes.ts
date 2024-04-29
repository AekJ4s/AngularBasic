import { Routes } from '@angular/router';
import { NewComponent } from './views/newcomponent/newcomponent.component';
import { BookCreateComponent } from './views/bookcreate/bookcreate.components';
import { BookUpdateComponent } from './views/bookupdate/bookupdate.components';
import { BookByIdComponent } from './views/bookbyid/bookbyid.components';
import { BookDelete } from './views/bookdelete/bookdelete.components';
import { UploadImageComponent } from './views/uploadimage/uploadimage.components';
import { BookListComponent } from './views/booklist/booklist.components';
import { appcrossComponent  } from './views/crosscomponent/cross.components';
export const routes: Routes = [
  { path: 'test_path/:id', component: NewComponent },
  { path: 'createbook', component: BookCreateComponent },
  { path: 'updatebook/:id/:title/:price', component: BookUpdateComponent },
  { path: 'searchbook', component: BookByIdComponent },
  { path: 'deletebook', component: BookDelete },
  { path: 'uploadImage', component: UploadImageComponent },
  { path: '', component: BookListComponent },
  { path: 'crosstest', component: appcrossComponent},
];
