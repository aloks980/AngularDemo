import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceproviderComponent } from './serviceprovider/serviceprovider.component';
import { ProviderDetailsComponent } from './provider-details/provider-details.component';

const routes: Routes = [
  {path:'', redirectTo:'serviceproviders', pathMatch:'full'},
  { path: 'serviceproviders', 
  component: ServiceproviderComponent,
  children:[
    {path:':name', component:ProviderDetailsComponent, pathMatch:'full'},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceproviderRoutingModule { }
