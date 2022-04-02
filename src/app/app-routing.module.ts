import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'formularios', loadChildren: () => import('./pages/employees/formularios/formularios.module').then(m => m.FormulariosModule) }, { path: 'empleados', loadChildren: () => import('./pages/employees/empleados/empleados.module').then(m => m.EmpleadosModule) }, { path: 'information', loadChildren: () => import('./pages/employees/information/information.module').then(m => m.InformationModule) }, { path: 'inicio', loadChildren: () => import('./pages/employees/inicio/inicio.module').then(m => m.InicioModule) }, { path: 'new', loadChildren: () => import('./pages/employees/new/new.module').then(m => m.NewModule) }, { path: 'edit', loadChildren: () => import('./pages/employees/empleados/edit/edit.module').then(m => m.EditModule) }, { path: 'delete', loadChildren: () => import('./pages/employees/empleados/delete/delete.module').then(m => m.DeleteModule) }, { path: 'confirm', loadChildren: () => import('./pages/employees/empleados/confirm/confirm.module').then(m => m.ConfirmModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
