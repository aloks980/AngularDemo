import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

import { ServiceproviderRoutingModule } from './serviceprovider-routing.module';
import { ServiceproviderComponent } from './serviceprovider/serviceprovider.component';
import { ProviderService } from '../provider.service';
import { ProviderDetailsComponent } from './provider-details/provider-details.component';
import { StarRatingModule } from 'angular-star-rating';
import {MatButtonModule} from '@angular/material/button';
import { FilterPipe } from '../filter.pipe';

@NgModule({
  declarations: [ServiceproviderComponent, ProviderDetailsComponent, FilterPipe],
  imports: [
    CommonModule,
    ServiceproviderRoutingModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    FormsModule,
    StarRatingModule.forRoot()
  ],
  providers:[ProviderService]
})
export class ServiceproviderModule { }
