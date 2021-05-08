import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task-list/task-list.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'task-list', component: TaskListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }