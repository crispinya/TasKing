import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { RegistroComponent } from './registro/registro.component';
import { AyudaComponent } from './ayuda/ayuda.component';
//import { PerfilComponent } from './perfil/perfil.component';
import { TareaBasicaComponent } from './tarea-basica/tarea-basica.component';
import { TareaPersonalizadaComponent } from './tarea-personalizada/tarea-personalizada.component';
import { CrearTareaComponent } from './crear-tarea/crear-tarea.component';

const routes: Routes = [
  { path: '', component: InicioSesionComponent },
  { path: 'home', component: HomeComponent },
  { path: 'task-list', component: TaskListComponent },
  { path: 'crear-tarea', component: CrearTareaComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'ayuda', component: AyudaComponent },
  //{ path: 'perfil', component: PerfilComponent}
  { path: 'tarea-basica', component: TareaBasicaComponent },
  { path: 'tarea-personalizada', component: TareaPersonalizadaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }