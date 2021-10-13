import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentesRoutes } from './componentes/componentes-routing.module';
import { DataRoutes } from './data-binding/data-binding-routing.module';
import { DiretivasRoutes } from './diretivas/diretivas-routing.module';
import { HomeRoutes } from './home/home-routing.module';
import { ModulosRoutes } from './modulos/modulos-routing.module';
import { RotasRoutes } from './rotas/rotas-routing.module';
import { RxjsRoutes } from './rxjs/rxjs-routing.module';
import { ServicosRoutes } from './servicos/servicos-routing.module';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  ...HomeRoutes,
  ...ModulosRoutes,
  ...ComponentesRoutes,
  ...ServicosRoutes,
  ...DiretivasRoutes,
  ...DataRoutes,
  ...RotasRoutes,
  ...RxjsRoutes
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
