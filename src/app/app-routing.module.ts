import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'formularios', loadChildren: () => import('./pages/employees/formularios/formularios.module').then(m => m.FormulariosModule) }, { path: 'empleados', loadChildren: () => import('./pages/employees/empleados/empleados.module').then(m => m.EmpleadosModule) }, { path: 'information', loadChildren: () => import('./pages/employees/information/information.module').then(m => m.InformationModule) }, { path: 'inicio', loadChildren: () => import('./pages/employees/inicio/inicio.module').then(m => m.InicioModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
