import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'inicio/:nomusu',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'insertar/:id',
    loadChildren: () => import('./insertar/insertar.module').then( m => m.InsertarPageModule)
  },
  {
    path: 'listado/:id',
    loadChildren: () => import('./listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    path: 'detalles/:key',
    loadChildren: () => import('./detalles/detalles.module').then( m => m.DetallesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'misproductos/:uid',
    loadChildren: () => import('./misproductos/misproductos.module').then( m => m.MisproductosPageModule)
  },
  {
    path: 'modificar/:key',
    loadChildren: () => import('./modificar/modificar.module').then( m => m.ModificarPageModule)
  },
  {
    path: 'pregunta1',
    loadChildren: () => import('./pregunta1/pregunta1.module').then( m => m.Pregunta1PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
