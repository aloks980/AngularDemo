import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', 
  component: HeaderComponent,
  children: [
    {
      path: '',
      loadChildren:() => import('../serviceprovider/serviceprovider.module').then(sp => sp.ServiceproviderModule)
    }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
