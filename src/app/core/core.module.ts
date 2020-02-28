import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';

import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatToolbarModule
  ]
})
export class CoreModule { }
