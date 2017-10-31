import { RouterModule, Routes } from '@angular/router';

import { ListarComponent} from './listar/listar.component'
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ApagarComponent } from './apagar/apagar.component';


export const appRoutes: Routes = [
  { path: 'cad/novo', component: AddComponent },
  { path: 'cad/delete', component: ApagarComponent },  
  { path: 'cad/edit', component: EditComponent },
  { path: 'cad', component: ListarComponent}
];
