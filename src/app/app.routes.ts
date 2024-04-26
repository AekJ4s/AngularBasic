import { Routes } from '@angular/router';
import { NewComponent } from './views/newcomponent/newcomponent.component';
import { BookCreateComponent } from './views/bookcreate/bookcreate.components';
import { BookUpdateComponent } from './views/bookupdate/bookupdate.components';
import { BookByIdComponent } from './views/bookbyid/bookbyid.components';
export const routes: Routes = [
    {path: 'test_path/:id', component: NewComponent},
    {path:'createbook',component: BookCreateComponent},
    {path:'updatebook',component: BookUpdateComponent},
    {path:'searchbook',component: BookByIdComponent},


];