import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'cita',
    loadChildren: () => import('./pages/cita/cita.module').then( m => m.CitaPageModule)
  },  {
    path: 'cita3',
    loadChildren: () => import('./pages/cita3/cita3.module').then( m => m.Cita3PageModule)
  },
  {
    path: 'expediente',
    loadChildren: () => import('./pages/expediente/expediente.module').then( m => m.ExpedientePageModule)
  },
  {
    path: 'alergias',
    loadChildren: () => import('./pages/alergias/alergias.module').then( m => m.AlergiasPageModule)
  },
  {
    path: 'medicamentos',
    loadChildren: () => import('./pages/medicamentos/medicamentos.module').then( m => m.MedicamentosPageModule)
  },
  {
    path: 'addalergia',
    loadChildren: () => import('./pages/addalergia/addalergia.module').then( m => m.AddalergiaPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
