import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { HomeComponent } from './home/home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { RegistroComponent } from './registro/registro.component';
//import { PerfilComponent } from './perfil/perfil.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MainNavComponent } from './main-nav/main-nav.component';
import {MatListModule} from '@angular/material/list'; 
import {AyudaComponent} from './ayuda/ayuda.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSliderModule} from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TareaBasicaComponent } from './tarea-basica/tarea-basica.component';
import { CrearTareaComponent } from './crear-tarea/crear-tarea.component';
import {MatDividerModule} from '@angular/material/divider';
import { TareaPersonalizadaComponent } from './tarea-personalizada/tarea-personalizada.component';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';





@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    HomeComponent,
    TaskListComponent,
    MainNavComponent,
    RegistroComponent,
    AyudaComponent,
    TareaBasicaComponent,
    CrearTareaComponent,
    TareaPersonalizadaComponent
    //PerfilComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    AppRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatListModule,
    MatMenuModule,
    MatSliderModule,
    FlexLayoutModule,
    MatDividerModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


